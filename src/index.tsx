import * as React from "react";
import { registerWidget, IContextProvider } from './uxp';
import { TitleBar, WidgetWrapper, DropDownButton, Button, TabComponent, TabComponentStyles, useMessageBus } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import './styles.scss';

export interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
    designer?: IWDDesignModeProps,
    uiProps?: any
}

interface IAlert {
    id: string;
    category: string;
    message: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    datetime: string;
    status: 'New' | 'RESOLVED';
}

const tabStyles: TabComponentStyles = {
    hideIndicator: true,
    tabBackgroundColor: 'transparent',
    tabHeaderBackgroundColor: '#f5f5f5',
    tabBorderRadius: '20px',
    tabTextColor: '#000000ff',
    selectedTabBackgroundColor: '#ffffff',
    selectedTabTextColor: '#000000',
    tabPadding: '-1px 2px',
    tabHeaderHeight: '16px',
    tabHeaderPadding: '4px',
    tabHeaderGap: '4px',
    tabContentFontSize: '11px',
    tabContentIconSize: '12px',
};

const getCategoryIcon = (category: string, criteriaIcon?: string): string => {

    const icons: { [key: string]: string } = {
        'firealarm': 'fas fa-fire',
        'workorder': 'fas fa-wrench',
        'elevator': 'fas fa-elevator',
        'power': 'fas fa-bolt',
        'security': 'fas fa-lock',
        'energy': 'fas fa-battery-full',
        'HVAC': 'fas fa-snowflake',
        'notification': 'fas fa-info-circle',
    };
   
    return icons[category] || 'fas fa-info-circle';
};

// Manual mapping for known compound words
const formatCategoryName = (category: string): string => {

    const mapping: { [key: string]: string } = {
        'firealarm': 'Fire Alarm',
        'workorder': 'Work Order',
        'elevator': 'Elevator',
        'power': 'Power',
        'security': 'Security',
        'energy': 'Energy',
        'HVAC': 'HVAC',
        'notification': 'Notification',
    };

    if (mapping[category.toLowerCase()]) {
        return mapping[category.toLowerCase()];
    }

    return category.charAt(0).toUpperCase() + category.slice(1);
};

const AlertsWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    const [alerts, setAlerts] = React.useState<IAlert[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = React.useState<string>("");
    const [closePopup, setClosePopup] = React.useState(false);
    const [criteriaData, setCriteriaData] = React.useState<any>(null);
    const [categoryDetailsLinks, setCategoryDetailsLinks] = React.useState<Map<string, string>>(new Map());
    const [alertObjectKeys, setAlertObjectKeys] = React.useState<Map<string, string>>(new Map());

    
    //listen to message bus
    useMessageBus(props.uxpContext, "iviva_notification_bridge_updates", (payload: any, channel: string) => {
        console.log("Received notification update via MessageBus:", payload, "on channel:", channel);
        loadData();
        return "updated";
    });
    
    //Pollin
    React.useEffect(() => {
        if (!props.uxpContext) return;

        const POLLING_INTERVAL = 5 * 60 * 1000;
        
        const pollTimer = setInterval(() => {
            console.log("Background polling: Refreshing notifications");
            loadData();
        }, POLLING_INTERVAL);

        return () => {
            clearInterval(pollTimer);
        };
    }, [props.uxpContext]);

    
    async function GetCriteriaAndCount() {
        try {
            const res = await props.uxpContext.executeAction(
                "IvivaNotificationBridge",
                "GetCriteriaAndCount",
                {},
                { json: true }
            );
            console.log("Raw Criteria Response:", res);
            return res;
        }
        catch (e) {
            console.error("GetCriteriaAndCount error:", e);
            throw e;
        }
    }

    async function GetNotifications() {
        try {
            const res = await props.uxpContext.executeAction(
                "IvivaNotificationBridge",
                "GetNotifications",
                {},
                { json: true }
            );
            console.log("Raw Notifications Response:", res);
            return res;
        }
        catch (e) {
            console.error("GetNotifications error:", e);
            throw e;
        }
    }

    const loadData = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const [criteriaResponse, notificationsResponse] = await Promise.all([
                GetCriteriaAndCount(),
                GetNotifications()
            ]);

            if (criteriaResponse) {
                setCriteriaData(criteriaResponse);
                const linkMap = new Map<string, string>();
                if (criteriaResponse.categories && Array.isArray(criteriaResponse.categories)) {
                    criteriaResponse.categories.forEach((cat: any) => {
                        if (cat.name && cat.detailsLink) {
                            linkMap.set(cat.name, cat.detailsLink);
                        }
                    });
                }
                setCategoryDetailsLinks(linkMap);
                console.log("Category Details Links Map:", linkMap);
            }

            if (notificationsResponse) {
                let notificationArray: any[] = [];
                
                if (Array.isArray(notificationsResponse)) {
                    notificationArray = notificationsResponse;
                } else if (notificationsResponse.notifications && Array.isArray(notificationsResponse.notifications)) {
                    notificationArray = notificationsResponse.notifications;
                } else if (notificationsResponse.data && Array.isArray(notificationsResponse.data)) {
                    notificationArray = notificationsResponse.data;
                } else if (notificationsResponse.items && Array.isArray(notificationsResponse.items)) {
                    notificationArray = notificationsResponse.items;
                }

                console.log("Raw Notification Array:", notificationArray);

                const transformedAlerts: IAlert[] = [];
                const objectKeyMap = new Map<string, string>();

                notificationArray.forEach((notif: any, index: number) => {
                    const id = notif.id || notif.notificationId || `alert-${index}`;
                    
                    let category = notif.category || notif.type || notif.categoryName || notif.alertType || notif.criteria;
                    
                    
                    const message = notif.message || notif.description || notif.title || 'No message';
                    
                    let severity: 'Critical' | 'High' | 'Medium' | 'Low' = 'Medium';
                    const severityValue = (notif.severity || notif.priority || '').toLowerCase();
                    if (severityValue.includes('critical') || severityValue.includes('urgent')) {
                        severity = 'Critical';
                    } else if (severityValue.includes('high')) {
                        severity = 'High';
                    } else if (severityValue.includes('low')) {
                        severity = 'Low';
                    }
                    
                    const datetime = notif.datetime || notif.timestamp || notif.createdAt || new Date().toISOString();
                    
                    let status: 'New' | 'RESOLVED' = 'New';
                    if (notif.status) {
                        const statusValue = notif.status.toLowerCase();
                        if (statusValue.includes('resolved') || 
                            statusValue.includes('acknowledged') || 
                            statusValue.includes('closed') ||
                            notif.isAcknowledged === true ||
                            notif.isRead === true) {
                            status = 'RESOLVED';
                        }
                    }
                    
                    const alert = { id, category, message, severity, datetime, status };
                    transformedAlerts.push(alert);
                    
                    if (notif.objectKey) {
                        objectKeyMap.set(alert.id, notif.objectKey);
                    }
                });

                setAlerts(transformedAlerts);
                setAlertObjectKeys(objectKeyMap);
                
                if (transformedAlerts.length > 0 && !selectedCategory) {
                    setSelectedCategory(transformedAlerts[0].category);
                }
            } else {
                setAlerts([]);
                setAlertObjectKeys(new Map());
            }
        } catch (err) {
            console.error("Error loading data:", err);
            setError(err instanceof Error ? err.message : "Failed to load notifications");
            setAlerts([]);
            setAlertObjectKeys(new Map());
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (props.uxpContext) {
            loadData();
        }
    }, [props.uxpContext]);

    const categories = React.useMemo(() => {
        if (criteriaData?.categories && Array.isArray(criteriaData.categories)) {
            return criteriaData.categories.map((cat: any) => cat.name);
        }
        return Array.from(new Set(alerts.map(a => a.category)));
    }, [criteriaData, alerts]);

    const count = React.useMemo(() => alerts.filter(a => a.status === 'New').length, [alerts]);

    const tabs = categories.map((category: string) => {
        const categoryAlerts = alerts
            .filter(a => a.category === category)
            .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
        const categoryNewCount = categoryAlerts.filter(a => a.status === 'New').length;
        
        let criteriaIcon: string | undefined;
            if (criteriaData?.categories) {
                const criteriaCategory = criteriaData.categories.find((c: any) => c.name === category);
                    if (criteriaCategory?.icon) {
                        criteriaIcon = criteriaCategory.icon;
                    }
            }
        const categoryIcon = getCategoryIcon(category, criteriaIcon);

        return {
            id: category,
            label: (
                <span>
                    <i className={`${categoryIcon} category-icon`}></i>
                    {' '}{formatCategoryName(category)}
                    {categoryNewCount > 0 && <span className="tab-badge">{categoryNewCount}</span>}
                </span>
            ),
            content: (
                <div className="alerts-tab-content">
                    {categoryAlerts.length === 0 ? (
                        <div className="no-alerts">
                            <i className="far fa-bell-slash"></i>
                            No alerts in this category
                        </div>
                    ) : (
                        categoryAlerts.map(alert => {
                            const titleText = alert.message.split('.')[0];
                            const objectKey = alertObjectKeys.get(alert.id);
                            const detailsLink = categoryDetailsLinks.get(alert.category);
                            const detailsUrl = objectKey && detailsLink ? `${detailsLink}${objectKey}` : undefined;
                            const clickable = !!detailsUrl;
                            
                            return (
                                <div key={alert.id}>
                                    <div 
                                        className={`notification-alert-item ${alert.severity.toLowerCase()} ${alert.status === 'RESOLVED' ? 'resolved' : ''} ${clickable ? 'clickable' : ''}`}
                                        onClick={() => {
                                            if (detailsUrl) {
                                                console.log("Navigating to:", detailsUrl);
                                                window.location.href = detailsUrl;
                                            } else {
                                                console.warn("No details URL available for notification:", alert.id);
                                            }
                                        }}
                                        style={{ cursor: clickable ? 'pointer' : 'default' }}
                                    >
                                        <div className="alert-content">
                                            <div className="alert-header-row">
                                                <div className="alert-title">{titleText}</div>
                                                <span className={`severity-badge ${alert.severity.toLowerCase()}`}>
                                                    {alert.severity.toLowerCase()}
                                                </span>
                                            </div>
                                            <div className="alert-meta">
                                                <span className="alert-time">
                                                    <i className="far fa-clock"></i>
                                                    {(() => {
                                                        try {
                                                            const now = new Date();
                                                            const alertTime = new Date(alert.datetime);
                                                            const diffMs = now.getTime() - alertTime.getTime();
                                                            const diffMins = Math.floor(diffMs / 60000);
                                                            const diffHours = Math.floor(diffMins / 60);
                                                            
                                                            if (diffMins < 1) return 'just now';
                                                            if (diffMins < 60) return `${diffMins}m ago`;
                                                            if (diffHours < 24) return `${diffHours}h ago`;
                                                            return `${Math.floor(diffHours / 24)}d ago`;
                                                        } catch (e) {
                                                            return 'unknown';
                                                        }
                                                    })()}
                                                </span>
                                                {alert.status === 'RESOLVED' && (
                                                    <span className="resolved-indicator">
                                                        <i className="fas fa-check-circle"></i>
                                                        Ack
                                                    </span>
                                                )}
                                            </div>
                                            <div className="alert-description">{alert.message}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            )
        };
    });

    return (
        <WidgetWrapper>
            <TitleBar title=''>
                <DropDownButton
                    content={() => ( 
                        <div style={{ width: '300px', maxWidth: '300px' }}>
                            <div className="dropdown-actions">
                                <div className="header-title">
                                    Notifications
                                    {criteriaData?.totalCount !== undefined && (
                                        <span className="total-count"> ({criteriaData.totalCount})</span>
                                    )}
                                </div>
                                <div className="action-buttons">
                                    <button className="refresh-btn" aria-label="Refresh" onClick={loadData} disabled={loading}>
                                        <i className={`fas fa-sync ${loading ? 'fa-spin' : ''}`}></i>
                                    </button>
                                    <button className="close-btn" aria-label="Close" onClick={() => setClosePopup(true)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            
                            {error && (
                                <div className="error-message">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {error}
                                </div>
                            )}
                            
                            <div className="tabs-container">
                                {loading && alerts.length === 0 ? (
                                    <div className="loading-state">
                                        <i className="fas fa-spinner fa-spin"></i>
                                        Loading notifications...
                                    </div>
                                ) : categories.length > 1 ? (
                                    <TabComponent
                                        tabs={tabs}
                                        selected={selectedCategory}
                                        onChangeTab={setSelectedCategory}
                                        position="top"
                                        styles={tabStyles}
                                    />
                                ) : (
                                    <div className="no-alerts">
                                        <i className="far fa-bell-slash"></i>
                                        No notifications available
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    onOpen={() => {}}
                    onClose={() => setClosePopup(false)}
                    forceClose={closePopup}
                >
                    <button className="notification-icon-btn" aria-label="Notifications">
                        <i className="far fa-bell"></i>
                        {count > 0 && <span className="notification-count">{count}</span>}
                    </button>
                </DropDownButton>
            </TitleBar>
        </WidgetWrapper>
    );
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "Alerts",
    widget: AlertsWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Alerts",
    label: "Alerts",
    // click: () => alert("Hello"),
    component: AlertsWidget
});
*/

/**
 * Register as a UI
 */

/*
registerUI({
   id:"Alerts",
   component: AlertsWidget
});
*/


/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */

/**
registerCustomWidgetTemplate({
    id: "Alerts", // use all lowercase letters
    name: 'Alerts',
    description: 'Tempalte Description',
    template: AlertsWidget,
    moduleId: BundleConfig.id,
    complexity: 'advanced',
    icon: ['fas', 'list'],
    expectedSchema: 'dictionary-array'
});
*/


/**
 * Enable localization
 *
 * This will enable the localization
 *
 * you can use uxpContext.$L() function
 *
 * Ex: Assume you  have a localization message in localization json
 *
 * ```
 * // localization.json
 *
 * {
 *      "uxp.my-widget.title": {
 *          "en": "This is my widget" // english translation,
 *          "ar": "<arabic tranlation >",
 *          ... here goes other translations
 *      }
 * }
 *
 * ```
 *
 *
 * thne in your widget
 *
 * ```
 * // your widget
 *
 * return <WidgetWrapper>
 *      <div class='title'>
 *          {props.uxpContext.$L('uxp.my-widget.title')}
 *      </div>
 *  </WidgetWrapper>
 *
 * ```
 *
 * /// you can have parameters as well
 * // we use `$` mark to identify params
 * // Ex: $name, $location
 *
 * ```
 * // localization.json
 *
 * {
 *      ...
 *      "uxp.my-widget.user-welcom-msg":{
 *          "en": "$userName welcome to my widget"
 *      }
 * }
 * ```
 *
 * in widget
 *
 * ```
 *      ...
 *      <div> {props.uxpContext.$L('uxp.my-widget.user-welcom-msg', {userName: "Jane Doe"})} </div>
 * ```
 *
 *
 */

// enableLocalization()
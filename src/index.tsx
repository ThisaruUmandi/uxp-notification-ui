import * as React from "react";
import { registerWidget, IContextProvider } from './uxp';
import { TitleBar, WidgetWrapper, DropDownButton, Button, TabComponent, TabComponentStyles } from "uxp/components";
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

const ALERTS: IAlert[] = [
    {
        id: 'i1',
        category: 'Fire Alarm',
        message: 'Fire Alarm Triggered - Building A. Smoke detected in Room 205. Emergency response initiated. Fire department has been notified.',
        severity: 'Critical',
        datetime: new Date(Date.now() - 1000 * 60 * 11).toISOString(),
        status: 'New'
    },
    {
        id: 'i2',
        category: 'Fire Alarm',
        message: 'Fire System Test Completed. Weekly fire alarm system test completed successfully. All sensors operational.',
        severity: 'Low',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        status: 'RESOLVED'
    },
    {
        id: 'i3',
        category: 'Work Order',
        message: 'High Priority Maintenance Required. HVAC system malfunction reported in Zone 3. Temperature rising above acceptable levels.',
        severity: 'High',
        datetime: new Date(Date.now() - 1000 * 60 * 21).toISOString(),
        status: 'New'
    },
    {
        id: 'i4',
        category: 'Work Order',
        message: 'Routine Maintenance Scheduled. Monthly HVAC filter replacement scheduled for tomorrow at 8 AM.',
        severity: 'Low',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        status: 'New'
    },
    {
        id: 'i5',
        category: 'Security',
        message: 'Unauthorized Access Attempt. Multiple failed badge scans detected at Main Entrance. Security team alerted.',
        severity: 'High',
        datetime: new Date(Date.now() - 1000 * 60 * 36).toISOString(),
        status: 'New'
    },
    {
        id: 'i6',
        category: 'Security',
        message: 'Badge Access Granted - VIP. Special access granted to VIP visitor for penthouse level. Valid until 6 PM.',
        severity: 'Low',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        status: 'RESOLVED'
    },
    {
        id: 'i7',
        category: 'Elevator',
        message: 'Elevator 2 Out of Service. Mechanical failure detected in Elevator 2. Service technician has been contacted.',
        severity: 'Medium',
        datetime: new Date(Date.now() - 1000 * 60 * 52).toISOString(),
        status: 'New'
    },
    {
        id: 'i8',
        category: 'Elevator',
        message: 'Elevator Inspection Due. Annual safety inspection required for Elevator 1 within next 7 days.',
        severity: 'Medium',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        status: 'New'
    },
    {
        id: 'i9',
        category: 'Fire Alarm',
        message: 'Power Fluctuation Detected. Voltage irregularities detected in Building C. Backup systems on standby.',
        severity: 'Medium',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
        status: 'New'
    },
    {
        id: 'i10',
        category: 'HVAC',
        message: 'Temperature Threshold Exceeded. Conference Room B temperature has exceeded 78°F threshold. Auto-adjustment initiated.',
        severity: 'Medium',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
        status: 'New'
    },
    {
        id: 'i11',
        category: 'Notification',
        message: 'System Maintenance Scheduled. Routine maintenance will be performed on Sunday at 2 AM EST. Expected downtime: 30 minutes.',
        severity: 'Medium',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        status: 'New'
    },
    {
        id: 'i12',
        category: 'Notification',
        message: 'Software Update Available. New dashboard features available. Update recommended for improved performance.',
        severity: 'Low',
        datetime: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
        status: 'New'
    }
];

const tabStyles: TabComponentStyles = {
    hideIndicator: true,
    tabBackgroundColor: 'transparent',
    tabHeaderBackgroundColor: '#f5f5f5',
    tabBorderRadius: '20px',
    tabTextColor: '#000000ff',
    selectedTabBackgroundColor: '#ffffff',
    selectedTabTextColor: '#000000',
    tabPadding: '-1px 2px', // Compact padding
    tabHeaderHeight: '16px',
    tabHeaderPadding: '4px',
    tabHeaderGap: '4px', // Space between tabs
    tabContentFontSize: '11px',
    tabContentIconSize: '12px',
};

const AlertsWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    const [alerts, setAlerts] = React.useState<IAlert[]>(ALERTS);
    const newAlerts = alerts.filter(alert => alert.status === 'New');
    const count = newAlerts.length;
    const [closePopup, setClosePopup] = React.useState(false);

    const [selectedCategory, setSelectedCategory] = React.useState("Work Order");
    const categories = Array.from(new Set(ALERTS.map(a => a.category)));

    const getTimeAgo = (datetime: string): string => {
        const now = new Date();
        const alertTime = new Date(datetime);
        const diffMs = now.getTime() - alertTime.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${Math.floor(diffHours / 24)}d ago`;
    };

    const handleAcknowledge = (alertId: string) => {
        setAlerts(prevAlerts =>
            prevAlerts.map(a =>
                a.id === alertId ? { ...a, status: "RESOLVED" as const } : a
            )
        );
    };

    const getCategoryIcon = (category: string): string => {
        const icons: { [key: string]: string } = {
            'Fire Alarm': '🔥',
            'Work Order': '🔧',
            'Elevator': '⬆️',
            'Power': '⚡',
            'Security': '🔒',
            'Energy': '🔋',
            'HVAC': '❄️'
        };
        return icons[category] || 'ℹ️';
    };

    const getActionButtons = (alert: IAlert) => {
        const actionButtons: { title: string; icon?: string; action: string }[] = [];

        if (alert.status === 'RESOLVED') {
            return [{ title: 'View Details', icon: 'far eye', action: 'view-details' }];
        }

        // Category-specific buttons
        switch (alert.category) {
            case 'Fire Alarm':
                if (alert.severity === 'Critical') {
                    actionButtons.push(
                        { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                        { title: 'View Details', icon: 'far eye', action: 'view-details' },
                        { title: 'Emergency Protocol', icon: 'far external-link-alt', action: 'emergency-protocol' }
                    );
                } else {
                    actionButtons.push(
                        { title: 'View Report', icon: 'far eye', action: 'view-report' }
                    );
                }
                break;
            
            case 'Work Order':
                if (alert.severity === 'High') {
                    actionButtons.push(
                        { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                        { title: 'Assign Technician', action: 'assign-technician' },
                        { title: 'View Work Order', icon: 'far eye', action: 'view-work-order' }
                    );
                } else {
                    actionButtons.push(
                        { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                        { title: 'Reschedule', action: 'reschedule' }
                    );
                }
                break;
            
            case 'Security':
                if (alert.severity === 'High') {
                    actionButtons.push(
                        { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                        { title: 'View Camera Feed', icon: 'far external-link-alt', action: 'view-camera-feed' },
                        { title: 'Alert Security', action: 'alert-security' }
                    );
                } else {
                    actionButtons.push(
                        { title: 'View Details', icon: 'far eye', action: 'view-details' }
                    );
                }
                break;
            
            case 'Elevator':
                actionButtons.push(
                    { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                    { title: alert.message.includes('Out of Service') ? 'Schedule Repair' : 'Schedule Inspection', action: 'schedule' }
                );
                break;
            
            case 'Power':
                actionButtons.push(
                    { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                    { title: 'View Power Grid', icon: 'far eye', action: 'view-power-grid' }
                );
                break;
            
            case 'HVAC':
                actionButtons.push(
                    { title: 'Acknowledge', icon: 'far check-circle', action: 'acknowledge' },
                    { title: 'Adjust Settings', action: 'adjust-settings' }
                );
                break;
            
            case 'Notification':
                if (alert.message.includes('Maintenance')) {
                    actionButtons.push(
                        { title: 'View Schedule', icon: 'far eye', action: 'view-schedule' }
                    );
                } else {
                    actionButtons.push(
                        { title: 'Update Now', action: 'update-now' },
                        { title: 'Learn More', icon: 'far external-link-alt', action: 'learn-more' }
                    );
                }
                break;
            
            default:
                actionButtons.push(
                    { title: 'Acknowledge', icon: 'far check', action: 'acknowledge' }
                );
        }

        return actionButtons;
    };

    const renderAlert = (alert: IAlert) => {
        const titleText = alert.message.split('.')[0];
        
        return (
            <div 
                className={`notification-alert-item ${alert.severity.toLowerCase()} ${alert.status === 'RESOLVED' ? 'resolved' : ''}`}
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
                            {getTimeAgo(alert.datetime)}
                        </span>
                        {alert.status === 'RESOLVED' && (
                            <span className="resolved-indicator">
                                <i className="fas fa-check-circle"></i>
                                Ack
                            </span>
                        )}
                    </div>

                    <div className="alert-description">
                        {alert.message}
                    </div>

                    {alert.status === 'New' && (
                        <div className="alert-action-buttons">
                            {getActionButtons(alert).map((btn, idx) => (
                                <Button
                                    key={idx}
                                    title={btn.title}
                                    icon={btn.icon || ''}
                                    onClick={(e: any) => {
                                        e?.preventDefault();
                                        if (btn.action === 'acknowledge') {
                                            handleAcknowledge(alert.id);
                                        } else {
                                            console.log(`${btn.action} for:`, alert.id);
                                        }
                                    }}
                                    className={idx === 0 ? 'action-btn-primary' : 'action-btn-secondary'}
                                />
                            ))}
                        </div>
                    )}

                    {alert.status === 'RESOLVED' && (
                        <div className="alert-action-buttons">
                            <Button 
                                title="View Details"
                                icon="fas eye"
                                onClick={(e) => {
                                    e?.preventDefault();
                                    console.log('View details for:', alert.id);
                                }}
                                className="action-btn-secondary"
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const tabs = categories.map(category => {
        const categoryAlerts = alerts
            .filter(a => a.category === category)
            .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

        const categoryNewCount = categoryAlerts.filter(a => a.status === 'New').length;

        return {
            id: category,
            label: (
            <span>
                <span className="category-icon">{getCategoryIcon(category)}</span> {category}
                {categoryNewCount > 0 && (
                    <span className="tab-badge">{categoryNewCount}</span>
                )}
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
                        categoryAlerts.map(alert => (
                            <div key={alert.id}>{renderAlert(alert)}</div>
                        ))
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
                        <div style={{ width: '300px', maxWidth: '300px',}}>
                        
                            <div className="dropdown-actions">
                                <div className="header-title">Notifications</div>
                                <div className="action-buttons">
                                    <button 
                                        className="refresh-btn" 
                                        aria-label="Refresh"
                                        onClick={() => {}}
                                    >
                                        <i className="fas fa-sync"></i>
                                    </button>
                                    <button 
                                        className="close-btn" 
                                        aria-label="Close"
                                        onClick={() => {setClosePopup(true)}}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>

                                </div>
                            </div>
                            
                            <div className="tabs-container">
                                <TabComponent
                                tabs={tabs}
                                selected={selectedCategory}
                                onChangeTab={setSelectedCategory}
                                position="top"
                                styles={tabStyles}
                                />
                            </div>
                        </div>
                    )}
                    onOpen={() => { }}
                    onClose={() => { setClosePopup(false) }}
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
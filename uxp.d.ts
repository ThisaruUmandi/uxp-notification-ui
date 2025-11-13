declare module "uxp/components" {
    
    /**
     * @export
     * Options that can be passed to a portal container component
     */
    export interface IPortalContainerProps {
        /**
         * create a backdrop if true
         */
        hasBackdrop?: boolean,
    
        /**
         * callback function to click on backdrop
         */
        onClickBackdrop?: () => void,
    
        /**
         * additional styles to backdrop
         */
        backdropStyles?: any
        /**
         * disabled the scrolling of main content block if true
         * default value is true
         */
        disableScroll?: boolean,
        className?: string,
        children?: React.ReactNode
    }
        
    
    export interface IIconButtonProps {
        /**
         * button type
         */
        type: IButtonType,
        /**
         * Set button to active state when true
         */
        active?: boolean,
        /**
         * Set button to disabled state when true
         */
        disabled?: boolean,
        /**
         * The callback that gets invoked when the button is clicked.
         */
        onClick?: () => void,
        /**
        * Any extra css classes to apply
        */
        className?: string,
        /**
        * button size. Can be either 'large' or 'small'
        */
        size?: IButtonSize
    
        /**
         * set to `true` to prevent a border from being shown for the button
         */
        borderless?: boolean;
    }
        
    /**
     * @export
     */
    export type IButtonType = "search" | "close" | "done" | "arrow-up" | "arrow-down" | "arrow-left" | "arrow-right" | "filter" | "edit" | "delete" | "pin" | "copy" | "plus";
        
    /**
     * @export
     */
    export type IButtonSize = "large" | "small";
        
    /**
     * @export
     */
    export interface ITooltipProps {
        /**
         * The content to show inside the tooltip
         * This can be either a string or a JSX element
         * @example
         *
         * ```
         * <Tooltip content="This is a tooltip" />
         * ```
         *
         * @example
         *
         * ```
         * <Tooltip content={() => <div>This is a tooltip</div>} />
         * ```
         */
        content: string | IContentFunction,
    
        /**
         * Where the tooltip should be placed relative to the element it is being displayed for
         * <Tooltip position="left" content="There are many like it but this one's mine" />
         */
        position?: ITooltipPosition
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         *  <Tooltip
         *      content="This is a tooltip"
         *  >
         *      <button className="btn showcase" >Hover to Show Tooltip</button>
         *  </Tooltip>
         * ```
         *
         * * @example
         *
         * ```
         *  <Tooltip
         *      content={() => <div>This is a tooltip</div>}
         *      position="left"
         *  >
         *      <button className="btn showcase" >Hover to Show Tooltip</button>
         *  </Tooltip>
         * ```
         *
         */
    }
        
    /**
     * @export
     */
    export type IContentFunction = () => JSX.Element;
        
    /**
     * @export
     */
    export type ITooltipPosition = "top" | "bottom" | "left" | "right";
        
    /**
     * @export
     */
    export interface ISidebarProps {
        items: ISidebarLink[]
        onClick: (linkItem: ISidebarLink) => void,
        userGroup: string
        env: string,
        canInstallFromMarketplace?: boolean,
        expanded: boolean,
        onToggleSidebar: () => void,
        onHoverSidebar: (expanded: boolean) => void,
        className?: string
        logo?: string,
        collapsedLogo?: string,
        renderLogoWithNewStyles?: boolean,
        styles?: React.CSSProperties,
        loading?: boolean,
        disableCollape?: boolean
    }
        
    
    export interface IProfileImageProps {
        /**
         * The url for the image to be shown
         */
        image?: string,
    
        /**
         * Any name to be displayed. This is used only if the image is empty.
         * 2 letters will be derived from the name (typically the first letter of the first 2 words in the name)
         * and a background color will be chosen. Background colors are random but consistent. So a given `name` string will always have the same background
         */
        name?: string,
        bgColor?: string,
        textColor?: string,
        className?: string,
        size?: ISize
    }
        
    /**
     * @export
     */
    export type ISize = "small" | "large";
        
    
    export interface IButtonProps {
        /**
         * The caption for the button
         */
        title: string,
    
        /**
         * Button icon.
         * you can either use a url or fontawesome icon
         *
         * Here is a example for using fontawesome icons
         * icon={'fas save'}
         */
        icon?: string,
    
        /**
         * position of the icon
         */
        iconPosition?: 'left' | 'right'
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the button is clicked
         */
        onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void,
    
        /**
         * Set this to `true` to show the button in its 'loading...' state.
         * In this state, an animation will be shown indicating that work is going on and the user will not be able to click the button
         */
        loading?: boolean,
    
        /**
         * The caption to show on the button when its in loading state
         */
        loadingTitle?: string,
    
        /**
         * to mark the button as active
         * this will highlight the button
         */
        active?: boolean,
        /**
         * to disable the button
         */
        disabled?: boolean,
        /**
         * any custom inline styles to the button
         */
        styles?: React.CSSProperties,
        /**
         * any custom inline styles for the icon container
         */
        iconStyles?: React.CSSProperties,
    
        /**
         * show loading spinners in place of icons (even if the icon is not there it will show the spinner on the left sides)  when the button is in loading state,
         */
        useLoadingSpinner?: boolean,
        type?: "button" | "submit" | "reset"
    }
        
    
    export interface INotificationProps {
         /**
         *  Message to show when showing
         */
        message: string,
        /**
         * Any extra css classes to apply
         */
        class?: string,
        /**
         * any extra styles
         */
        styles?: any
    }
        
    
    export interface IDataListProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,
    
        /**
         * A function that will be responsible for rendering each individual element of the list.
         * It is common to return  `ItemCard` component from here.
         *
         * @example
         *
         * ```
         * renderItem={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(item,key)=><ItemCard data={item} titleField='Name' />}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,
    
        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,
    
        args?: any
    
    
        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,
    
        /**
         * Any extra class names to be added to the component
         */
        className?: string
        /**
         * show/hide footer (scroll buttons)
         */
        showFooter?: boolean,
        /**
         * mun of rows to scroll
         */
        scrollStep?: number,
        /**
         * show/hide end of content message
         */
        showEndOfContent?: boolean,
    
        /**
         * this function will be called every time list get updated
         * this will return total number of items (function should return the total count) and loaded items count
         */
        onItemsLoad?: (total: number, loaded: number, items?: any[]) => void
    
        renderNoItems?: () => JSX.Element
    
    }
        
    /**
     * @export
     */
    export type IDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>;
        
    
    export interface IDataListInstanceProps {
        updateItem: (key: number, item: any) => void,
        removeItem: (key: number) => void
    }
        
    
    export interface IInputProps {
        /**
         * Determines if the input field accepts a password, email address, number or just text. Default is 'text'
         */
        type?: IInputType,
    
        /**
         * The actual text
         */
        value: string,
    
        /**
         * This function is called whenever the text changes. The new text value is passed as a parameter
         */
        onChange: (value: string) => void,
        /**
         * callback function on focus
         */
        onFocus?: () => void,
        /**
         * callback function on blur
         */
        onBlur?: (vale: string) => void
        /**
         * callback function on key down
         */
        onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, val: string) => void
    
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
    
        /**
         * Determines if an indicator should be shown at the end of the input.
         */
        hasIndicator?: boolean,
    
        /**
         * The color of the indicator icon (relevant only if hasIndicator is true)
         */
        indicatorColor?: string,
        /**
         * pass a boolean to indicate if the input is valid or not
         */
        isValid?: boolean,
        /**
         * additional attributes that can be passed to a <input> tag
         */
        inputAttr?: { [key: string]: string | boolean }
        /**
         * placeholder value
         */
        placeholder?: string,
        /**
         * render inline
         */
        inline?: boolean,
        /**
         * additional styles
         */
        styles?: React.CSSProperties,
        /**
         * mark input as read only
         */
        readOnly?: boolean
        /**
         * tab index. default is 0
         */
        tabIndex?: number,
    
        spacingMode?: SpacingMode
    }
        
    /**
     * Determines the behaviour of the input field
     * @export
     */
    export type IInputType = "text" | "password" | "number" | "email";
        
    
    export enum SpacingMode {
        Compact = 'compact',
        Comfortable = 'comfortable'
    }
        
    /**
     * @export
     * Events/Callbacks to controll the behaviour of the component
     *
     * @example
     * ```
     * // create a ref
     * let inputRef: React.MutableRefObject<IInputInstanceProps> = React.useRef(null)
     *
     * // add the ref to input
     * <Input
     *  ...
     *  ref ={inputRef}
     * />
     *
     *
     * // use
     * inputRef.current?.focus()
     * let element = inputRef.current?.getElement()
     *
     * ```
     */
    export interface IInputInstanceProps {
        /**
         * focus the input
         * @example
         * ```
         * inputRef.current?.focus()
         * ```
         */
        focus: () => void,
        /**
         * this will return the <Input /> element
         * @example
         * ```
         * let input = inputRef.current?.getElement()
         * ```
         */
        getElement: () => React.MutableRefObject<HTMLInputElement>
    }
        
    
    export interface ISearchBoxProps {
        /**
         * Default value
         */
        value: string,
        /**
        * This function is called whenever the text changes. The new text value is passed as a parameter
        */
        onChange: (newValue: string) => void,
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
        /**
         * show only a icon button when true. When click on the button it will show the actual search box
         */
        collapsed?: boolean,
        /**
         * position of search box
         */
        position?: IPosition,
        /**
         * placeholder value
         */
        placeholder?: string
        /**
         * input will be auto focused if true
         */
        autoFocus?: boolean
    
        spacingMode?: SpacingMode
    }
        
    /**
     * @export
     */
    export type IPosition = "left" | "right";
        
    /**
     *
     * @export
     *
     * This component is used to render a search box.
     *
     * @example
     * ```
     *  <SearchBox
     *      value={inputValue}
     *      onChange={(newValue) => { setInputValue(newValue) }}
     *  />
     * ```
     *
     * @example
     *  <SearchBox
     *      value={inputValue}
     *      onChange={(newValue) => { setInputValue(newValue) }}
     *      collapsed
     *      position="right"
     *  />
     *
     */
    export interface ISearchBoxInstanceProps {
        focusInput: () => void,
        getInputElement: () => React.MutableRefObject<HTMLInputElement>
    }
        
    /**
     * @export
     */
    export interface ISelectProps {
        /**
         * List of items to select from.
         * Each option has a label which is displayed and a value which is what we actually select.
         * also you can pass any object as options, then specify the labelField, valueField props
         */
        options: IOption[] | any[] | IDataFunction,
        /**
         * Name of the field you want to display as label
         * If not given default(label) will be used
         */
        labelField?: string,
        /**
         * Name of the field you want to return  as value
         * If not given default(value) will be used
         */
        valueField?: string,
        /**
         * Name if the field to use as icon
         * if a value is passed icon will be displayed.
         */
        iconField?: string
        /**
         * The  currently selected value
         */
        selected: string,
    
        /**
         * When loading options dynamically (paginated), we need to pass the selected item label.
         * either you can pass the selected option label (you can get the selected option in onchange callback), or can pass a function that will accept the selected value as a params and return the selected option details
         */
        selectedLabel?: string | ((selected: string) => Promise<any>)
    
        /**
         * Gets called whenever the selection changes.
         * The value parameter has the newly selected value
         * option parameter has the complete option/ object that you passed
         */
        onChange: (value: string, option?: IOption | any) => void,
    
        /**
         * Text to show when no value is selected
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the component
         */
        className?: string,
    
        /**
         * Set this to false to indicate the field doesn't have a valid value
         */
        isValid?: boolean,
    
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        renderOption?: (item: any, key: number) => JSX.Element,
    
        /**
          * Option to add a new value if not available.
          * You can enable this option and handle how you want to save the new item
          */
        addNewValues?: {
            enable: boolean,
            title: string,
            loadingTitle: string,
            onAddNewValue?: (value: string) => Promise<any>
        }
        /**
         * Option to add a classname for the dropdown
         */
        dropdownClassname?: string
        /**
         * Spacing mode
         */
        spacingMode?: SpacingMode,
    
        /**
       * Option to unselect
       */
        onClear?: () => void
    
        /**
        * This will replace the content in the dropdown.
        * If this is enabled, above options (value, onChange , etc) will not work. You have to handle everything
        * You will need to handle the value and onChange options.
        * and once you select an option, to close the dropdown, call the closeDropdown function
        */
        renderCustomDropdownContent?: (closeDropdown: () => void) => React.ReactNode
    
        /**
         * Option to custom render the placeholder
         */
        renderPlaceholder?: {
            /**
             * render input as a pill
             * work with default select dropdown
             */
            renderAsPill?: {
                minWidth?: number,
                maxWidth?: number
            },
            /**
             * for custom renders
             */
            renderCustomPill?: (onClear: () => void) => React.ReactNode
        }
    
        /**
         * Option to control the min width of the dropdown
         */
        dropdownMinWidth?: number,
        /**
         * Option to control the min height of the dropdown
         */
        dropdownMinHeight?: number,
        /**
         * Optional page size when using a function to load data
         */
        pageSize?: number
    }
        
    
    export interface IOption {
        /**
         * option label
         */
        label: string,
        /**
         * option value
         */
        value: string
    }
        
    /**
     * @export
     */
    export interface IProfileProps {
        hideDetails?: boolean // default false
        hideLogout?: boolean // default false
        className?: string
        children?: React.ReactNode
    }
        
    
    export interface IFormFieldProps {
        /**Set this to true to have multiple fields in a single horizontal line */
        inline?: boolean,
        /**
         * Any extra css classes to attach to the field
         */
        className?: string,
    
        /**
         * A background color to set for the field
         */
        backgroundColor?: string,
        spacingMode?: SpacingMode
    }
        
    
    export interface ILabelProps {
        labelFor?: string,
        className?: string,
        inline?: boolean,
        styles?: React.CSSProperties,
        spacingMode?: SpacingMode,
        icon?:string,
    }
        
    
    export interface ICheckboxProps {
        /**
         * Get or set the current state of the checkbox
         */
        checked: boolean,
    
        /**
         * Called when the checkbox is checked or unchecked by clicking on it
         */
        onChange: (checked: boolean) => void,
    
        /**
         * Any additional text to show next to the checkbox
         */
        label?: string,
    
        /**
         * If set to 'false' the checkbox will show in an 'invalid' state - neither true nor false
         */
        isValid?: boolean,
    
        /**
         * Any additional html attributes to pass to the underlying input field
         */
        inputAttr?: { [key: string]: string | boolean },
    
        /**
         * Determines how the checkbox looks, visually
         */
        type?: ICheckboxType
    
        /**
         * additional styles
         */
        className?: string,
        /**
         * additional styles to pass to the label
         */
        labelStyles?: React.CSSProperties,
        /**
         * tab index. default is 0
         */
        tabIndex?: number,
        /**
         * mark as readonly
         */
        readonly?: boolean,
        spacingMode?: SpacingMode
    }
        
    /**
     * @export
     * Determines how a checkbox field looks
     */
    export type ICheckboxType = "default" | "bordered" | "change-icon" | "switch-line" | "switch-box";
        
    /**
     *
     * @export
     *
     * A checkbox component. This can render a true/value value in multiple ways. Set the type property to determine how it looks visually.
     * types : default, bordered, change-icon, switch-line, switch-box
     *
     * @example
     * ```
     *  <Checkbox
     *      checked={checked}
     *      onChange={(isChecked) => setChecked(isChecked)}
     *      label='Are you sure'
     *  />
     * ```
     *
     * @example
     * ```
     *  <Checkbox
     *      checked={checked}
     *      onChange={(isChecked) => setChecked(isChecked)}
     *      label='Are you sure'
     *      type="switch-box"
     *  />
     * ```
     *
     */
    export interface ICheckboxInstanceProps {
        focus: () => void
    }
        
    /**
     * @export
     *
     */
    export interface IDatePickerProps {
        /**
         * The title
         */
        title: string,
    
        /**
         * The currently selected date. Either a Date object or an ISO8601 string representation of a date
         */
        date: string | Date,
    
        /**
         * Callback that gets executed whenever a date is selected/changed in the date picker
         */
        onChange: (date: Date) => void,
    
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
    
        /**
         * Additional options to control behavior
         */
        options?: IDatePickerOptions,
    
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
    
        /**
         * this will hide the labels in the placeholder (calendar icon)
         */
        hideLabels?: boolean
        /**
         * hide the input box
         */
        hideInput?: boolean,
    
        /**
         * show the full month name in the month selector dropdown
         * default is true
         *
         * if value is false it will show the short name "Jan" ,"Feb" and ect
         */
        showFullMonthName?: boolean,
    
        spacingMode?: SpacingMode
    }
        
    
    export interface IDatePickerOptions {
        /**
         * The minimum selectable date. Either a Date object an an ISO8601 date string
         */
        minDate?: string | Date,
    
        /**
         * The maximum selectable date. Either a Date object an an ISO8601 date string
         */
        maxDate?: string | Date,
    
        /**
         * If set to `true`, you cannot select a weekend date
         */
        disableWeekEnds?: boolean,
    
        /**
         * An array of specific dates that the user cannot select
         */
        disableDates?: Array<Date | String>
    
        /**
         * A list of spacial dates. you can use this to highlight the dates and show a tooltip on hover over it
         */
        specialDates?: (string | Date | ISpecialDate)[],
    
        /**
         * Default background color for all spacial dates. This can be overridden for individual days if required.
         */
        specialDateBackgroundColor?: string
        /**
         * Default text color for all spacial dates. This can be overridden for individual days if required.
         */
        specialDateTextColor?: string
    }
        
    /**
     * export
     */
    export interface ISpecialDate {
        date: string | Date,
        label?: string
        backgroundColor?: string
        color?: string
    }
        
    
    export interface ITimePickerProps {
        /**
        * The title
        */
        title: string
        /**
         * The currently selected time. Either a Date object or an time string (Ex: 01:10:00 pm)
         */
        time: string | Date,
        /**
        * Callback that gets executed whenever a time is selected/changed in the time picker
        */
        onChange: (date: Date) => void,
        /**
        * Set to true to prevent a user from typing in a date
        */
        disableInput?: boolean,
        /**
         * hide the clock icon
         */
        hideLabels?: boolean,
    
        spacingMode?: SpacingMode
    }
        
    
    export interface ITextAreaProps {
        /**
        * The actual text
        */
        value: string,
        /**
         * This function is called whenever the text changes. The new text value is passed as a parameter
         */
        onChange: (value: string) => void,
        /**
         * callback function on focus
         */
        onFocus?: () => void,
        /**
         * callback function on blur
         */
        onBlur?: (vale: string) => void
        /**
         * callback function on key down
         */
        onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>, val: string) => void
    
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
        /**
          * additional styles
          */
        styles?: React.CSSProperties,
        /**
         * mark input as read only
         */
        readOnly?: boolean
        /**
         * tab index. default is 0
         */
        tabIndex?: number
        /**
         * number of rows
         */
        rows?: number,
        /**
         * number of cols
         */
        cols?: number,
        spacingMode?: SpacingMode
    }
        
    /**
     * @export
     * Events/Callbacks to controll the behaviour of the component
     *
     * @example
     * ```
     * // create a ref
     * let inputRef: React.MutableRefObject<ITeaxtareaInstanceProps> = React.useRef(null)
     *
     * // add the ref to input
     * <TextArea
     *  ...
     *  ref ={inputRef}
     * />
     *
     *
     * // use
     * inputRef.current?.focus()
     * let element = inputRef.current?.getElement()
     *
     * ```
     */
    export interface ITextAreaInstanceProps {
        /**
         * focus the input
         * @example
         * ```
         * inputRef.current?.focus()
         * ```
         */
        focus: () => void,
        /**
         * this will return the <TextArea /> element
         * @example
         * ```
         * let input = inputRef.current?.getElement()
         * ```
         */
        getElement: () => React.MutableRefObject<HTMLTextAreaElement>
    }
        
    /**
     * @export
     */
    export interface IDateTimePickerProps {
        title: string,
        /**
        * The currently selected datetime. Either a Date object or an ISO8601 string representation of a date
        */
        datetime: string | Date,
        /**
         * Callback that gets executed whenever a datetime is selected/changed in the datetime picker
         */
        onChange: (date: Date) => void,
        /**
        * Set to true to prevent a user from typing in a datetime
        */
        disableInput?: boolean
    
        /**
        * Additional options to control behavior
        */
        options?: IDatePickerOptions,
    
        /**
         * this will hide the labels in the placeholder (icons and text)
         */
        hideLabels?: boolean
        /**
         * hide the input box
         */
        hideDateInput?: boolean,
    
        /**
         * show the full month name in the month selector dropdown
         * default is true
         *
         * if value is false it will show the short name "Jan" ,"Feb" and ect
         */
        showFullMonthName?: boolean,
    
        spacingMode?: SpacingMode
    }
        
    /**
     * @export
     */
    export interface TabComponentProps {
        /**
         * tabs
         */
        tabs: Tab[]
        /**
         * selected tab id
         */
        selected: string,
        /**
         * on change tab
         */
        onChangeTab: (tab: string) => void,
    
        /**
         * direction of tabs
         */
        direction?: 'vertical' | 'horizontal',
    
        /**
         * position of tabs
         */
        position?: 'top' | 'bottom' | 'left' | 'right'
    
        /**
         * tab component styles
         */
        styles?: TabComponentStyles,
        /**
         * additional classname
         */
        className?: string
    }
        
    
    export interface Tab {
        /**
         * id of the tab
         */
        id: string,
        /**
         * label of the tab
         */
        label: string | React.ReactNode,
        /**
         * tab icon
         */
        icon?: string,
        /**
         * tab content
         */
        content: React.ReactNode,
        highlight?: boolean
        disabled?: boolean
    }
        
    /**
     * @export
     */
    export interface TabComponentStyles {
        /**
         * alignment of the tabs
         * default -left
         */
        align?: 'center' | 'left' | 'right' | 'fill',
        /**
         * background color of the tab header
         * default - primaryBGColor
         */
        tabHeaderBackgroundColor?: string
        /**
         * height of the tab header
         * default - 40px
         */
        tabHeaderHeight?: string,
        /**
         * padding of the tab header
         * default - 0
         */
        tabHeaderPadding?: string
        /**
         * gap between tabs
         * defualt - 0
         */
        tabHeaderGap?: string
        /**
         * padding of the tab
         * default - 15px 20px
         */
        tabPadding?: string
        /**
         * border radius of the tab
         * defualt - 0
         */
        tabBorderRadius?: string
        /**
         * background color of the tab
         * defualt - primaryBGColor
         */
        tabBackgroundColor?: string,
        /**
         * text color of the tab
         * defualt - primaryTextColor
         */
        tabTextColor?: string,
        /**
         * font size of the tab label
         * default - 13px
         */
        tabContentFontSize?: string
        /**
         * icon size
         * default - 20px
         */
        tabContentIconSize?: string
        /**
         * selected tab background color
         * defualt - primaryTextColor
         */
        selectedTabBackgroundColor?: string,
        /**
         * selected tab text color
         * defualt - primaryBGColor
         */
        selectedTabTextColor?: string,
        /**
         * background color of the tab when hovering
         * defualt - secondaryBGColor
         */
        tabHoverBackgroundColor?: string
        /**
         * text color of the tab when hovering
         * defualt - secondaryTextColor
         */
        tabHoverTextColor?: string
        /**
         * aligment of the tab contnet
         * default - left
         */
        tabContentAlignment?: 'center' | 'left' | 'right'
        /**
         * background color of the contnet panel
         * default - primaryBGColor
         */
        contentBackgroundColor?: string,
        /**
         * text color of the content panel
         * default is primaryTextColor
         */
        contentTextColor?: string,
        /**
         * content area padding
         * default - 5px
         */
        contentPadding?: string,
        /**
         * option to hide the indicator at the bottom of the active tab
         * default - false
         */
        hideIndicator?: boolean
        /**
         * height of the indicator
         * default - 2px
         */
        indicatorHeight?: string,
        /**
         * width of the indicator
         * default - 50%
         */
        indicatorWidth?: string,
        /**
         * border radius of the indicator
         * default - 0
         */
        indicatorBorderRadius?: string,
    
        /**
         * colors to highlight tabs other than the selected tab
         */
        tabHighlightBackgroundColor?: string,
        /**
         * colors to highlight tabs other than the selected tab
         */
        tabHighlightTextColor?: string,
    
        /**
         * colors for disabled tabs
         */
        disabledTabBackgroundColor?: string,
        /**
         * colors for disabled tabs
         */
        disabledTabTextColor?: string,
    }
        
    /**
     * @export
     */
    export interface DynamicFormProps {
        formStructure: FormSectionProps[],
        beforeSubmit?: (data: IFormData) => Promise<IFormData>
        onSubmit: (data: IFormData) => Promise<void>
        onCancel?: () => void,
        submitButtonLabel?: string,
        submitButtonLoadingLabel?: string,
        cancelButtonLabel?: string,
        hideCancelButton?: boolean,
        isLoading?: boolean,
        formContainerStyles?: React.CSSProperties,
        renderOptions?: {
            renderStyle: 'standard' | 'tabs' | 'wizard',
            direction?: 'vertical' | 'horizontal' // only applicable to tabs and wizard
            tabBackgroundColor?: string,
            tabTextColor?: string,
            activeTabBackgroundColor?: string,
            activeTabTextColor?: string,
            errorTabBackgroundColor?: string,
            errorTabTextColor?: string,
            disabledTabBackgroundColor?: string,
            disabledTabTextColor?: string,
            previousButtonLabel?: string,
            nextButtonLabel?: string
        }
    }
        
    /**
     * @export
     *
     * Form section properties
     */
    export interface FormSectionProps {
        /**
         * form fields
         */
        fields: DynamicFormFieldProps[]
        /**
         * options to arrange form fields to columns
         */
        columns?: 1 | 2 | 3,
        /**
         * option to dynamically show/hide a section
         */
        show?: (data: IFormData) => boolean
        /**
         * title for the section
         */
        title?: string,
        /**
         * option to show a separator at the bottom of the section
         */
        seperator?: boolean
    }
        
    /**
     * @export
     */
    export interface DynamicFormFieldProps {
        name: string,
        label: string,
        type: 'text' | 'password' | 'number' | 'email' | 'checkbox' | 'toggle' | 'select' | 'date' | 'time' | 'datetime' | 'hidden' | 'textarea' | 'json',
        value?: FormValue,
        placeholder?: string,
    
        renderField?: (data: IFormData, onValueChange: (value: any) => void) => React.ReactNode
    
        // show hide fields
        show?: (data: IFormData) => boolean
    
    
        // for select
        options?: Array<{ label: string | number, value: string | number }>,
        getOptions?: (data: IFormData) => Array<{ label: string | number, value: string | number }>
    
        // for numbers
        allowZero?: boolean
        allowNegative?: boolean,
    
        // a formatter function on value change
        formatter?: (value: any) => any
    
        validate?: {
            required?: boolean // default is false
            allowEmptyString?: boolean // trim value. only for string values
            minLength?: number
            maxLength?: number
            regExp?: RegExp
            allowZero?: boolean // only applicable to numbers
            allowNegative?: boolean,
            minVal?: number
            maxVal?: number
            customValidateFunction?: (value: any, data: IFormData) => { valid: boolean, error?: string }// this is to give a custom validate function, which takes the value and return a boolean indicating value is valid or not
        },
    }
        
    /**
     * @export
     */
    export type FormValue = string | number | boolean | null
        
    /**
     * @export
     */
    export type IFormData = { [key: string]: FormValue }
        
    
    export interface IModalProps {
        /**
         * Set this to true to make the modal visible
         */
        show: boolean,
        /**
         * Called whenever the modal is opened
         */
        onOpen?: () => void,
    
        /**
         * Called when the modal gets closed
         */
        onClose?: () => void,
    
        /**
         * The title set in the title bar of the modal
         * If the `headerContent` attribute is set, then this value will not be used.
         */
        title?: string,
    
        /**
         * any custom component to use to render the dialog close button.
         * If a value is not provided and `showCloseButton` is set to true, the default close button UI will be rendered
         */
        closeButton?: JSX.Element,
    
        /**
         * Any extra css styles to apply
         */
        styles?: any,
    
        /**
         * Any extra css classes to apply
         */
        className?: string,
    
        /**
         * Any custom content to include in the modal header.
         * If this is set, then the `title` property will not be used.
         */
        headerContent?: JSX.Element
    
        /**
         * Set to true to allow the dialog to be closed by clicking outside of it
         */
        backgroundDismiss?: boolean,
    
        /**
         * Set this to 'true' to show the close button in the dialog
         */
        showCloseButton?: boolean,
    
        /**
         * Animation to use when opening/closing a modal
         */
        animation?: IAnimation,
        /**
         * additional styles for backdrop
         */
        backdropStyles?: any,
        /**
         * additional content to render
         */
        renderAdditionalContent?: () => JSX.Element,
        autoSize?: boolean
    }
        
    /**
     * Um - animations. We need to work on this.
     * @export
     */
    export type IAnimation = 'm-slide-ftr' | 'm-slide-ftl' | 'm-slide-fbr' | 'm-slide-fbl' | 'm-zoom-fc';
        
    /**
     * @export
     * Options that can be passed to Loaders
     */
    export interface IWidgetPreloaderLoaderProps {
    }
        
    /**
     * @export
     * Dropdown button props
     */
    export interface IDropDownButtonProps {
        /**
         * The content to show inside the Dropdown
         * @example
         *
         * ```
         * content={() => <div>Dropdown Content</div>}
         * ```
         */
        content: () => JSX.Element,
    
        /**
         * Where the dropdown should be placed relative to the element it is being displayed for
         * default is right
         */
        position?: IDropDownButtonPosition,
        /**
         * If this is true dropdown will show on mouse over & hide n mouse out
         * If this is false dropdown ill show on click
         */
        showOnHover?: boolean
    
        /**
         * this will open the dropdown on hover and keep open even if user takes the mouse away
         * Click on outside to close the dropdown
         */
        keepShowingOnHover?: boolean,
    
        className?: string,
    
        /**
         * callback function when the popup is open
         */
        onOpen?: () => void
        /**
         * callback function when the popup is closed
         */
        onClose?: () => void
        /**
         * an option to force close a popup
         */
        forceClose?: boolean
    
        /**
         * disable scroll on open dropdown
         * true by default
         */
        disableScroll?: boolean,
    
        /**
         * if this is enabled drop down will be automatically positionsed within the view.
         * better to use this option- it has been improved
         * if enabled it will ignore the position param
         */
        autoPosition?: boolean
    }
        
    /**
     * @export
     * dropdown position
     */
    export type IDropDownButtonPosition = "right" | "left" | "top left" | "top right" | "top center" | "bottom left" | "bottom right" | "bottom center" | "left center" | "right center";
        
    
    export interface IAsyncButtonProps {
    
        /**
         * The caption for the button
         */
        title: string,
    
        /**
        * Button icon.
        * you can either use a url or fontawesome icon
        *
        * Here is a example for using fontawesome icons
        * icon={'fas save'}
        */
        icon?: string,
    
        /**
         * icon position
         */
        iconPosition?: 'left' | 'right'
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the button is clicked.
         * It must return a Promise
         */
        onClick: () => Promise<any>,
    
        /**
         * Set button to active state when true
         */
        active?: boolean,
        /**
        * Set button to disabled state when true
        */
        disabled?: boolean,
        /**
         * Text to show when in loading state
         */
        loadingTitle?: string,
        /**
         * a callback function to call on error
         */
        onError?: (e: any) => void
    
        /**
         * any custom inline styles to the button
         */
        styles?: React.CSSProperties,
        /**
         * any custom inline styles for the icon container
         */
        iconStyles?: React.CSSProperties,
    
        /**
         * show loading spinners in place of icons (even if the icon is not there it will show the spinner on the left sides)  when the button is in loading state,
         */
        useLoadingSpinner?: boolean,
        type?: "button" | "submit" | "reset"
    }
        
    /**
     * @export
     *
     */
    export interface IColorPalletProps {
        color: string,
        onChange: (color: string) => void,
        onCancel: () => void
    }
        
    /**
     * @export
     *
     */
    export interface IColorPickerProps {
        /**
         *  default color
        */
        color: string,
        /**
         * callback on select a color
         */
        onChange: (color: string) => void,
        /**
         * picker position.  default is left
         */
        position?: IColorPickerPosition,
        /**
         * class name for additional styles
         */
        className?: string,
        /**
         * close the picker on select a color
         * default is true
         */
        closeOnSelect?: boolean,
        /**
         * change display format
         */
        displayFormat?: IColorTypes
        /**
         * change return format
         */
        returnFormat?: IColorTypes
    }
        
    /**
     * @export
     */
    export type IColorPickerPosition = 'left' | 'right'
        
    /**
     * @export
     */
    export type IColorTypes = "rgb" | "prgb" | "hex6" | "hex3" | "hex8" | "hsl" | "hsv"
        
    
    export interface IToggleFilterProps {
        /**
         * The list of possible options to choose from
         */
        options: IToggleOption[],
    
        /**
         * The current value (selected item)
         */
        value: string,
    
        /**
         * Called whenever an option is selected
         */
        onChange: (newValue: string) => void,
    
        /**
         * Any additional css classes to include
         */
        className?: string,
    
        /**
         * background color of the fill/tab
         * default is white
         */
        backgroundColor?: string,
        /**
         * text color of the tab/fill
         * default is #424242
         */
        textColor?: string,
        /**
         * background color for the selected tab
         * default is white with box shadow
         */
        selectedBackgroundColor?: string,
        /**
         * text color for the selected tab/fill
         * default is #424242
         */
        selectedTextColor?: string,
        /**
         * this will disable the box shadow from the selected tab/fill
         */
        disableShadow?: boolean,
    
        /**
         * Spacing mode
         */
        spacingMode?: SpacingMode
    
        /**
         * This will render the dropdown if the width is less than the min width
         */
        renderAsDropdown?: {
            minWidth: number,
            renderAsPill?: {
                minWidth?: number,
                maxWidth?: number
            }
        }
    
    }
        
    /**
     * @export
     *
     */
    export interface IToggleOption {
        /**
         * The text shown to the user for this option
         */
        label: string,
    
        /**
         * The actual value stored when this option is selected
         */
        value: string
    }
        
    /**
     * @export
     */
    export interface IMultiSelectProps {
        /**
         * List of items to select from.
         * Each option has a label which is displayed and a value which is what we actually select.
         * also you can pass any object as options, then specify the labelField, valueField props
         */
        options: IOption[] | any[] | IDataFunction,
        /**
         * Name of the field you want to display as label
         * If not given default(label) will be used
         */
        labelField?: string,
        /**
         * Name of the field you want to return  as value
         * If not given default(value) will be used
         */
        valueField?: string,
        /**
         * Name if the field to use as icon
         * if a value is passed icon will be displayed.
         */
        iconField?: string
        /**
         * The  currently selected value
         *
         * ['option1', 'option2']
         */
        selected: string[],
    
        /**
         * When loading options dynamically (paginated), we need to pass the selected item labels.
         * either you can pass the selected option labels (you can get the selected options in onchange callback), or can pass a function that will accept the selected values as params and return the selected options details
         */
        selectedLabels?: string[] | ((selected: string[]) => Promise<any[]>)
    
        /**
         * Gets called whenever the selection changes.
         * The value parameter has the newly selected value
         * option parameter has the complete option/ object that you passed
         */
        onChange: (values: string[], options?: IOption[] | any[]) => void,
    
        /**
         * Text to show when no value is selected
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the component
         */
        className?: string,
    
        /**
         * Set this to false to indicate the field doesn't have a valid value
         */
        isValid?: boolean,
    
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        renderOption?: (item: any, key: number) => JSX.Element,
    
        /**
         * Option to wrap selected items to one line
         */
        wrapSelectedItemsToOneLine?: boolean,
    
        /**
         * Option to select all items on load
         */
        selectAllOnLoad?: boolean,
    
        /**
         * Option to hide clear button
         */
        hideClearButton?: boolean,
    
        /**
         * Option to hide done button
         */
        hideDoneButton?: boolean,
    
        /**
         * Option to add a classname for the dropdown
         */
        dropdownClassname?: string,
    
        /**
         * Spacing mode
         */
        spacingMode?: SpacingMode,
    
        /**
         * Option to control the min width of the dropdown
         */
        dropdownMinWidth?: number,
    
        /**
         * Option to control the min height of the dropdown
         */
        dropdownMinHeight?: number,
    
        /**
         * Optional page size when using a function to load data
         */
        pageSize?: number,
    
        /**
         * This will replace the content in the dropdown.
         * If this is enabled, above options (value, onChange , etc) will not work. You have to handle everything
         * You will need to handle the value and onChange options.
         * and once you select options, to close the dropdown, call the closeDropdown function
         */
        renderCustomDropdownContent?: (closeDropdown: () => void) => React.ReactNode,
    
        /**
         * Option to custom render the placeholder
         */
        renderPlaceholder?: {
            /**
             * render input as a pill
             * work with default select dropdown
             */
            renderAsPill?: {
                minWidth?: number,
                maxWidth?: number
            },
            /**
             * for custom renders
             */
            renderCustomPill?: (onRemove: (e: React.MouseEvent<HTMLElement>, opt: any) => void) => React.ReactNode
        }
    }
        
    /**
     * @export
     */
    export interface IWidgetContainerBlockProps {
        widgets: IWidgetInstance[],
        editDashboard: boolean,
        onChangeDashboard: any,
        canEditDashboard: boolean,
        canManageWidgetsAndSettings: boolean,
        openMenu: () => void
        toolbarItems: IToolbarItem[];
        minWidth?: number,
        numberOfColumns?: number,
        onGridResize?: (width: number, height: number, cellWidth: number, margin: [number, number]) => void,
        margin?: number,
        padding?: number
        // to hide the default edit toolbar that comes in edit mode in the dashbaords
        hideDefaultEditToolbar?: boolean,
        onWidgetPropsChange?: (id: string, props: any) => void,
        onResizeStart?: () => void
        onResizeEnd?: () => void,
        onDragStart?: () => void,
        onDragEnd?: () => void,
        allowFreePositioning?: boolean,
        restrictRowsToVisibleArea?: boolean
        transformScale?: number
    }
        
    /**
     * @export
     */
    export interface IPopoverProps {
        /**
         * title of the popup bubble
         *  This can be either a string or a JSX element
         * @example
         *
         * ```
         * title="Popover Title"
         * ```
         *
         * * @example
         *
         * ```
         * title={() => <div>Popover Title</div>
         * ```
         */
        title: string | IContentFunction,
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         * content="Popover Content"
         * ```
         *
         * * @example
         *
         * ```
         * content={() => <div>Popover content</div>
         * ```
         *
         */
        content: string | IContentFunction,
    
        /**
         * Where the bubble should be positioned relative to the element
         */
        position?: IPopoverPosition
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         *  <Popover
         *      title="Popover"
         *      content="This is a popover"
         *  >
         *      <button className="btn showcase" >Click to Show popover</button>
         *  </Popover>
         *
         * ```
         *
         * * @example
         *
         * ```
         *  <Popover
         *      title={() => <div>Popover</div>}
         *      content={() => <div>This is a popover</div>}
         *      position="left"
         *  >
         *      <button className="btn showcase" >Click to Show popover</button>
         *  </Popover>
         * ```
         *
         */
    }
        
    /**
     * @export
     *
     */
    export type IPopoverPosition = "top" | "bottom" | "left" | "right";
        
    /**
     * @export
     */
    export interface IModalWizardProps {
    
        /**
         * Set this to true to show the dialog. False to hide it
         */
        show: boolean;
    
        /**
         * Call this to close the dialog
         */
        onClose:()=>void;
    
        /**
         * The title to show on the top
         */
        title: string;
    
        /**
         * An optional icon to show
         */
        icon?: string;
    
        /**
         * A method to render a subheader just below the title area.
         */
        onRenderHeader?:(currentStep:IModalWizardStepProps)=> JSX.Element;
    
        /**
         * The list of steps that this wizard consists of.
         */
        steps: IModalWizardStep[];
    
        /**
         * This action executes after they hit 'next' on the final page.
         */
        onComplete:()=>Promise<any>;
    
        /**
         * Text to show on the 'next' button in the final stage.
         */
        completionText?: string;
        className?:string;
    }
        
    /**
     * @export
     *
     * Props passed to the wizard step's render function
     */
    export interface IModalWizardStepProps {
        /**
         * Triggers the wizard to move to the next stage
         */
        next:()=>void;
    
        /**
         * Triggers the wizard to move the previous stage
         */
        prev:()=>void;
    
        /**
         * Information about the current stage
         */
        currentStep:IModalWizardStep;
        data?:any;
    }
        
    /**
     * @export
     * An individual step in a modal wizard
     */
    export interface IModalWizardStep {
        /**
         * This function returns the contents of the main area of the wizard
         */
        render:(props:IModalWizardStepProps) => JSX.Element;
    
        /**
         * This function renders the status section on the left sidebar. This will be rendered only if the `showStatus` property is not false.
         * You can return null from this function to prevent the side bar status from being rendered.
         */
        renderStatus:() => JSX.Element;
    
        /**
         * This is called just before the user tries to advance to the next stage. You can use this to validate the current stage.
         * You can return
         * a string - to indicate the id of the next step that should be taken.
         * a number - to indicate the index of the next step to be taken
         * undefined or null - to indicate it should stay on the current step
         */
        onValidateStep?:() =>string|number|undefined|null|boolean;
    
        /**
         * An optional id for this step. This is used by the onValidateStep function to address a specific step to jump to
         */
        id?:string;
    
        /**
         * The title of this step. Currently this is used only in the sidebar to show the status of that stage.
         */
        title?: string;
    
        /**
         * Set this to false to prevent the 'next' button from being shown. If this is false you will have to manually render the 'next' button yourself
         */
        showNext?: boolean;
    
    
        nextTitle?:string;
    
        /**
         * Set to false to prevent the status sidebar from being shown at this stage
         */
        showStatus?:boolean;
    
        /**
         * Render a sub-header below the main dialog header
         *
         */
        renderSubHeader?:()=>JSX.Element;
    }
        
    
    export interface IFilterPanelProps {
        /**
         * Called whenever the panel is opened
         */
        onOpen?: ICallback,
    
        /**
         * Called whenever the panel gets dismissed
         */
        onClose?: ICallback,
    
        /**
         * Called whenever the clear button on the panel is pressed. This button is available only when `enableClear` is set to `true1`
         */
        onClear?: ICallback,
        fillContainer?: React.RefObject<HTMLElement>,
    
        /**
         * Any extra css classes to add to the filter panel
         */
        className?: string,
    
        /**
         * Enabled the clear button on the panel
         */
        enableClear?: boolean
    }
        
    
    export interface ICallback {
        (): void
    }
        
    
    export interface IWidgetTitleBarProps {
        /**
         * The title to show for the widget
         */
        title:string;
    
        /**
         * The url for an icon to be shown next to the title on the top left corner.
         */
        icon?:string;
        className?: string
    }
        
    
    export interface ILinkWidgetContainerProps {
        /**
         *  Set this to true to make the container visible
         */
        show: boolean,
        /**
         * Called whenever the container is opened
         */
        onOpen?: any,
         /**
         * Called when the container gets closed
         */
        onClose?: any,
        /**
         * The title set in the title bar of the container
         */
        title?: any,
        /**
         * Any extra css classes to apply
         */
        className?: string,
         /**
         * Any custom content to include in the container toolbar.
         */
        toolbarContent?: any
    }
        
    
    export interface IPieChartProps {
        /**
         * A list of items that the pie chart is comprised of
         */
        data: IDataItem[],
    
        /**
         * TODO
         */
        fillColor: string,
    
        /**
         * Set to `true` to show the chart legend
         */
        showLegend?: boolean
    }
        
    /**
     * @export
     * An individual pie chart slice
     */
    export interface IDataItem { name: string, value: number, color?: string }
        
    
    export interface IFormFeedbackProps {
        validInput?: boolean,
        className?: string
        spacingMode?: SpacingMode
    }
        
    
    export interface IDataGridProps {
        /**
         * The items to render into a grid. This will be an array of any data.
         * The data is passed into the render function and can be used there to render the actual grid cell.
         *
         */
        data: Array<any>,
    
        /**
         * A function which can be used to return the contents of each cell. The function will be passed 2 parameters:
         *
         * `item`: The individual item from the list of items passed as the `data` prop
         * `key`: The index of the item in the list
         *
         * This function should return a react element
         *
         * @example
         *
         * ```
         * renderItem={(item:any,key:number)=> <div>{'Key Is ' + key}}</div>}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,
    
        /**
         * The number of columns to display. Items will be layed out row by row and the number of columns in each row is specified here
         */
        columns: number,
    
        /**
         * Any additional css class names to include in the component
         */
        className?: string
    }
        
    
    export interface IItemCardProps {
        /**
         * A reference to the data to be rendered as a card.
         */
        item?: any,
    
        /**
         * The name of the field within the `item` that has the url of an image to be shown
         */
        imageField?: string,
    
        /**
         * The name of the field within `item` that has the title of the object
         */
        titleField?: string,
    
        /**
         * The name of the field within 'item' that holds the subtitle of the object
         */
        subTitleField?: string,
    
        /**
         * This name of the field within `item` that contains any 'name' associated with the object.
         * This property is used only if the imageField value is not set. The name is abbreviated and set as the profile image.
         */
        nameField?: string,
    
        /**
         * Any extra css classes to biind to the card.
         */
        className?: string,
    
        /**
         * These parameres will enable option to pass a value for each fields inseat of the field name.
         * Using these, users/developers will be able to provide static values
         */
        image?: string,
        name?: string,
        title?: string,
        subTitle?: string
    }
        
    
    export interface IItemListCardProps {
        /** The title to show on the card */
        title: string,
    
        /**
         * Any optional subtitle content to render. This should be a function that returns a react node
         */
        renderSubTitle?: () => JSX.Element,
    
        /**
         * The object to render in the card
         */
        item: any,
    
        /**
         * The list of fields from within the object that should be shown.
         * For each field in this list - one line gets rendered on the card
         */
        fields: string[],
    
        /** An optional function to control rendering of each field. It takes the item as a parameter along with the name of the field being rendered.
         * You can choose to render whatever you want here
         */
        renderField?: (object: any, field: string, key: number) => JSX.Element,
    
        /**
         * Any background tint to apply to the card. This must be in #RRGGBB hexadecimal format.
         */
        backgroundColor?: string
    
        /**
         * Any additional css classes to apply to the component
         */
        className?: string
    }
        
    /**
     * @export
     */
    export interface ISpaceworxDescriptionTagProps {
        className?: string,
        styles?: React.CSSProperties
    }
        
    /**
     * @export
     */
    export interface IWidgetWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string,
        cssBreakPoints?: {
            width?: {
                default: string,
                [key: number]: string
            },
            height?: {
                default: string,
                [key: number]: string
            }
        },
        /**
         * this will be used to get the widget props
         * this will be used to access the name and description of the widget
         */
        instanceId?: string
        /**
         * sample data label
         */
        sampleData?: {
            /**
             * toggle sample data label
             */
            showLabel?: boolean,
            /**
             * this will be shown in the popup
             */
            description?: string,
            /**
             * this is deprecated - use product ids instead
             * link to buy from spaceworx
             * if not provided button will not be shown
             */
            link?: string,
    
            /**
             * prouct ids to show on spaceworx
             */
            productIds?: string[]
        }
    }
        
    
    export interface IMapComponentProps {
        /**
         * The url of the tile server that will serve up map tiles.
         * This url should have the following placeholders in them:
         * `{x}`, `{y}` and `{z}`
         *
         * `{z}` represents the current zoom level
         *
         * @example
         * ```
         * mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         * ```
         */
        mapUrl: string,
    
        /**
         * A static image to use instead of a map layout.
         * If you are using a static image, specify `mapUrl` as an empty string.
         *
         * The static image consists of a url for the image and a width and height of the image.
         * Note that the width and height values  be relative - just that the ratio should be accurate.
         *
         * @example
         * ```
         * staticImage={{url:'https://myserver/floor-plan.png',width:200,height:400}}
         * ```
         */
        staticImage?: IStaticImage,
    
        /**
         * Where the map is centered.
         */
        center?: { position: IMarker, renderMarker?: boolean },
    
        /**
         * A list of markers to render.
         * Each marker has a `latitude` `longitude` and `data` field.
         * The `data` field can store arbitrary data.
         */
        markers?: IMarker[],
    
        /**
         * This handler gets called whenever a marker is clicked on.
         * The first parameter represents the marker element that was clicked on.
         * The second parameter represents the data associated with the marker
         */
        onMarkerClick?: (el: any, data: any) => void
    
        /**
         * regions to show on map
         */
        regions?: IRegion[],
        /**
         * this handler will get called when a region is clicked
         *
         */
        onRegionClick?: (event: any, data: any) => void,
    
    
    
        /**
         * If you want to overlay a heatmap -  assign this object with some valid value
         */
        heatmap?: IHeatmapConfiguration
    
        /**
         * The default zoom level to show on the map
         */
        zoom?: number,
        /**
         * max zoom level.
         * optional. default is 19
         */
        maxZoom?: number,
        /**
         * min zoom level.
         * optional. default is -19
         */
        minZoom?: number,
        /**
         * zoom on scroll
         * default is false
         */
        zoomOnScroll?: boolean
        /**
         * this handler will get called when the map is clicked
         */
        onClick?: (event: LeafletMouseEvent) => void,
    
        onZoomEnd?: (event: LeafletEvent) => void
        onDragEnd?: (event: DragEndEvent) => void
    }
        
    /**
     * @export
     * A static image to load as the map.
     */
    export interface IStaticImage {
        /**
         * The url of the image
         */
        url: string;
        /**
         * The width of the image in pixels
         */
        width: number;
    
        /**
         * The height of the image in pixels
         */
        height: number;
        /**
         * static image bounds
         * if not provided these will be calculated based on image width and height (NOTE: this may not be accurate)
         *
         */
        bounds?: [[number, number], [number, number]]
    }
        
    /**
     * Represents an individual marker
     * @example
     *  {
     *      latitude:0,
     *      longitude:23.2,
     *      data:{'name':'FooBar'}
     *  }
     *
     * @export
     */
    export interface IMarker extends MarkerEvents, LeafletMarkerOptions {
        /**
         * latitude
         */
        latitude: number,
        /**
         * longitude
         */
        longitude: number,
        /**
         * any data to return when click on the marker
         */
        data?: any,
        /**
         * custom HTML marker
         */
        customHTMLIcon?: IDivIconInterface,
        /**
         * content to display in pop-up
         */
        renderPopup?: IRenderMarkerPopup,
        /**
         * content to display in tooltip
         */
        renderTooltip?: IRenderMarkerTooltip,
    
        /**
         * use image coordinates to calculate bounds
         */
        imageCoordinates?: boolean,
    
    }
        
    /**
     * @export
     *
     * Custom html marker
     * refer https://docs.eegeo.com/eegeo.js/v0.1.780/docs/leaflet/L.DivIcon/
     *
     * @example
     *  {
     *       className: 'custom-marker',
     *       html: '<div>Marker Content</div>
     *  }
     */
    export interface IDivIconInterface {
        /**
         * A custom class name to assign to the icon.
         */
        className: string,
        /**
         * A custom HTML code to put inside the div element.
         */
        html: string,
        /**
         * Size of the icon in pixels. Can be also set through CSS.
         */
        iconSize?: [number, number],
        /**
         * The coordinates of the "tip" of the icon (relative to its top left corner).
         * The icon will be aligned so that this point is at the marker's geographical location.
         * Centered by default if size is specified, also can be set in CSS with negative margins.
         */
        iconAnchor?: [number, number]
        /**
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         */
        popupAnchor?: [number, number]
    }
        
    /**
     * @export
     * Render a popup for marker
     */
    export interface IRenderMarkerPopup {
        /**
         * content to show in popup
         */
        content: () => JSX.Element,
        /**
         * open the popup on load
         */
        showOnLoad?: boolean
    }
        
    /**
     * @export
     * Render tooltip for marker
     */
    export interface IRenderMarkerTooltip {
        /**
         * content to show in tooltip
         */
        content: () => JSX.Element,
        /**
         * direction
         * default is auto
         */
        direction?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto',
        /**
         * keep showing the tooltip
         * default is false
         */
        keepShowing?: boolean
    }
        
    /**
     * @export
     * Region data for maps
     */
    export interface IRegion {
        /**
         * region type,
         * default is polygon
         */
        type?: regionType,
        /**
         * region bounds
         */
        bounds: IPolygonBound | ICircleBound,
        /**
         * show/hide outline of the region
         */
        hideStroke?: boolean,
        /**
         * outline color
         */
        color?: string,
        /**
         * fill color
         */
        fillColor?: string,
        /**
         * any data to return on click a region
         */
        data?: any,
        /**
         * use image coordinates to calculate bounds
         */
        imageCoordinates?: boolean,
        /**
         * A tooltip to be shown when you click on the region
         */
        tooltipContent?: (data: any) => JSX.Element;
    }
        
    /**
     * @export
     */
    export type IPolygonBound = LatLngExpression[] | LatLngExpression[][];
        
    /**
     * @export
     */
    export interface ICircleBound {
        /**
         * center of the circle
         */
        center: [number, number],
        /**
         * radius of the circle
         */
        radius: number
    }
        
    /**
     * @export
     */
    export interface IHeatmapConfiguration {
        /**
         * The values to show on the heatmap. Each value has a coordinate and an intensity.
         * Intensities are relative the heatmap colors will be scaled based on the min/max intensities in the array
         *
         * @example
         * ```
         * heatmap={{values:[{latitude:2.3,longitude:-38.6,intensity:20},{latitude:2.4,longitude:-38.6,intensity:20},]}}
         * ```
         */
        values: IHeatmapPoint[];
    
        /**
         * Optionally - a gradient specified as an object of floating point values as keys from 0-1 and colors as the values
         *
         * @example
         * ```
         * heatmap={{values,gradient:{0.0:'blue',0.4:'yellow',0.7:'orange',0.9:'red'}}}
         * ```
         */
        gradient?: { [stop: number]: string };
    
    
        radius?: number;
    
        blue?: number;
    
        /**
         * The maximum possible intensity value.
         * If not specified, the intensities will be scaled based on the range of values provided.
         * Specify a max to set what the maximum possible value can be and the range will be scaled according to that max value
         */
        max?: number;
    
    
        /**
         * Set to true if the coordinates of the heatmap points are in the image coordinates system.
         */
        imageCoordinates?: boolean;
    }
        
    /**
     * @export
     */
    export interface IHeatmapPoint {
    
        /**
         * The latitude of the point
         */
        latitude: number;
    
        /**
         * The longitude of the point
         */
        longitude: number;
    
        /**
         * The intensity of the point
         */
        intensity: number;
    }
        
    
    export interface IWizardProps {
        /**
         * A list of steps within the wizard.
         */
        steps: IWizardStep[];
    
        /**
         * What title should be shown on the 'next' button when we reach the last screen
         */
        completionTitle?: string;
    
        /**
         * This callback is run whenever they hit the final 'completion' action on the last step. It should be async so we can show a loading animation on the button
         */
        onComplete?: () => Promise<void>;
    }
        
    /**
     * Defines an individual step within a wizard.
     * Each step provides a render method to render the actual step.
     * You also need to specify a unique 'id' and title for the step.
     * You can optionally specify an `onNext` callback  to run whenever the user wants to go to the next step.
     * This can return either `null` - meaning we should not proceed to the next step, or the id of the next step to go to.
     * @export
     */
    export interface IWizardStep {
        onNext?: () => string | null;
        id: string;
        title: string;
        render: (props: IWizardStepProps) => React.ReactNode;
    }
        
    /**
     * @export
     * These props are passed to the render method of each wizard step.
     *
     */
    export interface IWizardStepProps {
        /**
         * Triggers a request to go to the next step in the wizard. You can use this functional to programatically move to the next step (the user can also click the 'Next' action to do the same thing)
         */
        next: (id?: string) => void;
    
        /**
         * Similar to `next`, you can call this function to programatically go to the previous step in the wizard.
         */
        prev: () => void;
    }
        
    /**
     * @export
     */
    export interface IDateRangePickerProps {
        title?: string,
        /**
         * start date of the range. Either a Date object or an ISO8601 string representation of a date
         */
        startDate: string | Date,
        /**
         * end date of the range. Either a Date object or an ISO8601 string representation of a date
         */
        endDate: string | Date,
    
        /**
         * Option to pass selected preset
         */
        preset?: string
        /**
         * Callback that gets executed whenever a date range is selected/changed in the date picker
         */
        onChange: (newStartDate: string | Date, newEndDate: string | Date, preset?: string) => void,
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
        /**
        * Additional options to control behavior
        */
        options?: IDatePickerOptions,
        /**
         * this will hide the labels in the placeholder (calendar icon and text)
         */
        hideLabels?: boolean
        /**
         * hide the input box
         */
        hideInput?: boolean,
    
        /**
         * show the full month name in the month selector dropdown
         * default is true
         *
         * if value is false it will show the short name "Jan" ,"Feb" and ect
         */
        showFullMonthName?: boolean
    
        /**
         * this will set the max width and show a compact picker
         */
        compact?: boolean
    
        spacingMode?: SpacingMode,
    
        renderAsPill?: {
            minWidth?: number,
            maxWidth?: number
        },
    
        presets?: {
            enable: boolean
            customPresets?: DateRangePreset[],
            renderPreset?: (preset: DateRangePreset, index: number, onSelectPreset: (preset: string) => void) => React.ReactNode,
            parseRelativeDatesOnSelect?: boolean // if this is set to true, relative dates will be parsed to dates
        }
    }
        
    
    export interface DateRangePreset {
        label: string,
        startDate: string | RelativeDate | Date // string could be a date string or relative date like 0d, 1d, -7d, etc
        endDate: string | RelativeDate | Date // string could be a date string or relative date like 0d, 1d, -7d, etc
    }
        
    /**
     * export
     */
    export type RelativeDate =
        | `${'+' | '-'}${number}${'d' | 'w' | 'm' | 'y'}${'|start' | '|end'}` // Patterns like +3d, -1w, 2m|start , 2m|end
        | 'startOfDay'
        | 'endOfDay'
        | 'startOfWeek'
        | 'endOfWeek'
        | 'startOfMonth'
        | 'endOfMonth'
        | 'startOfYear'
        | 'endOfYear';
        
    
    export interface ITimeRangePickerProps {
        title: string
        /**
         * Start time . Either a Date object or an time string (Ex: 01:10:00 pm)
         */
        startTime: string | Date,
        /**
        * End time . Either a Date object or an time string (Ex: 01:10:00 pm)
        */
        endTime: string | Date,
        /**
        * Callback that gets executed whenever a time range is selected/changed in the time picker
        */
        onChange: (start: Date, end: Date) => void,
        /**
       * Set to true to prevent a user from typing in a time
       */
        disableInput?: boolean,
    
        spacingMode?: SpacingMode
    }
        
    
    export interface ITrendChartProps {
        /**
         * The series to plot. More than one can be visualized.
         */
        data: ITrendSeries[],
    
        /**
         * Use this to render a custom tooltip that will appear when the user hovers over a data point.
         * The data being hovered over is passed as a parameter.
         *
         * @example
         * onShowTooltip={(data)=><div>{`Temperature: ${data.temp}`}</div>}
         */
        onShowTooltip?: (data: any) => JSX.Element
    
        /**
         * Called whenever a data point is clicked on. The data point being clicked on is passed as a parameter to the function
         */
        onClick?: (data: any) => JSX.Element
    }
        
    /**
     * A single time series line
     */
    export interface ITrendSeries {
        /**
         * Determines whether to visualize the trend as a line or an area plot
         */
        type: ITrendSeriesType
    
        /**
         * Any units associated with this metric. This is shown on the Y-Axis. This is also used to group Y-Axis'
         * So if a trend chart has multiple series, all of them which share the same unit will use the same Y-Axis
         */
        unit: string,
    
        /**
         * The color to show the line
         */
        lineColor: string,
    
        /**
         * If the type of chart is an area chart - this would be the color of the fill area
         */
        fillColor?: string,
    
        /**
         * The actual array of data points to plot
         */
        data: ITrendData[]
    }
        
    // trend chart
    export type ITrendSeriesType = 'line' | 'area';
        
    /**
     * A single data point in a trend visualization
     */
    export interface ITrendData {
    
        /**
         * The time stamp of when this data point was recorded. This should be a Date object a string that can be parsed into a date object
         */
        time: Date | string,
    
        /**
         * The value at that point in time
         */
        value: number
    }
        
    
    export interface IConfirmButtonProps {
        /**
         * The caption for the button
         */
        title: string,
    
        /**
         * The url of an icon to show on the button
         */
        icon?: string,
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the confirm button is clicked
         */
        onConfirm: () => Promise<any>,
        /**
         * The callback that gets invoked when the cancel button is clicked
         */
        onCancel: () => void,
    
        /**
         * Set this to `true` to show the button in its 'loading...' state.
         * In this state, an animation will be shown indicating that work is going on and the user will not be able to click the button
         */
        loading?: boolean,
    
        /**
         * The caption to show on the button when its in loading state
         */
        loadingTitle?: string,
        active?: boolean,
        disabled?: boolean
    }
        
    
    export interface IDynamicSelectProps {
        /**
         * List of options to render.
         * This a function that will generate the array of objects.
         * pagination will be supported.
         * The function expects 2 parameters - max and last and returns a promise that will resolve to the list of objects. max specifies the maximum number of items to be returned.
         */
        options: IDynamicSelectDataFunction,
        /**
         * selected option label
         */
        selected: string,
        /**
         * Callback that gets executed whenever a option is selected/changed
         */
        onChange: (value: any) => void,
        /**
         * placeholder text
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
        /**
         * set to valid state if true
         */
        isValid?: boolean,
        /**
         * page size for pagination
         */
        pageSize?: number,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        renderOption?: (item: any, key: number) => JSX.Element,
        /**
         * name of the field to display
         */
        labelField: string,
        /**
         * Name if the field to use as icon
         * if a value is passed icon will be displayed.
         */
        iconField?: string
        /**
         * number of milliseconds to delay send the request on change query
         * default is 500
         *
         */
        timeout?: number,
        type?: "search-box" | "select-box",
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean
    }
        
    /**
     * @export
     *
     * max: page size
     * last : last page token
     * args: any args to filter items
     * args has a default option 'query'. when you type in the search box, search text ill be set to this 'query'
     */
    export type IDynamicSelectDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>;
        
    
    export interface IDataTableProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,
    
        /**
         * List of columns to render
         * column contains three(3) params
         *  - title : column title. this can be either a string or a function that returns a jsx element
         *  - width : width of the column. this can a percentage (20%), fixed with (100px) or null
         *  - renderColumn : content of the column. this is a function that returns a jsx element. this function will take a single argument item type of any
         *  @example
         *
         * ```
         *  renderColumn={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         * @example
         *
         * ```
         * columns= {[
         *  {
         *      title: "Request Id",
         *      width: "20%",
         *      render: (item) => <div>{item.requestId} </div>
         *  },
         *  {
         *      title: "User",
         *      width: "10%",
         *      render: (item) => <div>{item.user} </div>
         *  }
         * ]}
         * ```
         */
        columns: IDataTableColumn[],
    
        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,
    
        args?: any
    
        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,
    
        /**
         * Any extra class names to be added to the component
         */
        className?: string
        /**
         * show/hide footer (scroll buttons)
         */
        showFooter?: boolean,
        /**
         * mun of rows to scroll
         */
        scrollStep?: number,
        /**
         * show/hide end of content message
         */
        showEndOfContent?: boolean
    
        /**
       * this function will be called every time list get updated
       * this will return total number of items (function should return the total count) and loaded items count
       */
        onItemsLoad?: (total: number, loaded: number) => void
    
        /**
         * this will toggle the headers
         * default is true
         */
        renderHeaders?: boolean,
    
        /**
         * callback function to trigger on click a table row
         */
        onClickRow?: (item: any) => void,
    
        /**
         * active table row styles
         * default is 'active' an has some styles
         * if you give a class here it will be applied
         */
        activeClass?: string
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IDataTableColumn {
        title: string | ITitleFunc,
        width: string,
        renderColumn: (item: any) => JSX.Element
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export type ITitleFunc = () => JSX.Element;
        
    
    export interface IHSListProps {
        /**
         * Array of items
         */
        items: any[],
        /**
         * render method for an item given above
         */
        renderItem: (item: any, key: number) => JSX.Element
        /**
         * number of items to scroll when click on controller buttons
         */
        scrollStep?: number
        /**
         * additional css class names
         */
        className?: string,
        infinite?: boolean,
        autoScroll?: {
            enable: boolean,
            interval?: number // default 5000 (equals to 5s/5000ms)
        }
    }
        
    
    export interface ILinkButtonWidgetProps {
        /**
         * link url
         */
        link: string,
        /**
         * target for link
         * default is _self
         */
        target?: "_self" | "_blank" | "_parent"
        /**
         * icon to show
         */
        icon: string,
        /**
         * label for link
         */
        label: string
    }
        
    /**
     * @export
     */
    export interface ICalendarComponentProps {
        /**
         * array of dates
         */
        dates: Date[]
        /**
         * callback to trigger on click date
         * ill return the clicked date
         */
        onSelectDate: (date: Date) => void
        /**
         * disable weekends
         */
        disableWeekEnds?: boolean,
        /**
         * list of dates to disable
         */
        disableDates?: Array<Date>
        /**
         * min date
         */
        minDate?: Date,
        /**
         * max date
         */
        maxDate?: Date,
        /**
         * class name to use custom styles
         */
        className?: string
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IGaugeProps {
        /**
         * min value of the gauge
         */
        min: number;
        /**
         * max value of the gauge
         */
        max: number;
        /**
         * value of the gauge
         */
        value: number;
    
        /**
         * colors array.
         * color: name of the color.
         * stopAt: length of color distribution.
         *
         * default is blue, green, yellow, red colors at equal length
         */
        colors?: Array<{ color: string, stopAt: number }>;
        /**
         * label
         * no default value
         */
        label?: () => JSX.Element,
        /**
         * if true show legend.
         * default is false
         */
        legend?: boolean,
        /**
         * color of the ticks.
         * default is white
         */
        tickColor?: string,
        /**
         * class name(s) for additional styling
         */
        className?: string,
        /**
         * additional inline styles
         */
        styles?: React.CSSProperties
    
        /**
         * if true show gradient colors
         * default is false
         */
        gradient?: boolean,
        /**
         * thickness of the gauge
         * This value is defend on the radius
         * default is radius * 0.11
         * max value is radius * 0.25
         *
         * if you pass a higher value than the max value, max value will be used
         */
        thickness?: number,
        /**
         * thickness of the large ticks
         * default is 4
         * min value is 1
         * max value is 6
         *
         * if the given value is higher than the max value, max values will be used
         */
        largeTick?: number,
        /**
         * thickness of the small ticks
         * default is 1
         * min values is 1
         * max values is 3
         *
         * if the given values is higher than the max value, max values will be used
         */
        smallTick?: number
        /**
         * backbround color of the gauge
         * default is white
         */
        backgroundColor?: string,
        /**
         * color of the labels
         * default is #424242
         */
        labelColor?: string,
        /**
         * color of the needle
         * default is gray
         */
        needleColor?: string
    }
        
    
    export interface IAutoCompleteInputProps {
        /**
         * value for the
         */
        value: string
        /**
         * callback on value change
         */
        onChange: (val: string) => void
        /**
         * options to auto generate the dropdown list
         */
        options?: string[],
        /**
         * render auto complete dropdown
         */
        autoFill?: () => JSX.Element,
        /**
         * additional class name
         */
        className?: string,
        /**
         * indicate the if the value is valid or not
         */
        isValid?: boolean,
        /**
         * placeholder
         */
        placeholder?: string
        /**
         * this will be used to bind the keybaord inputs.
         * once you add the class you will be able to navigate trhough the options using arrow keys (up and down)
         * you need to add the same classname to the options
         *
         * default is 'uxp-select-option-container'
         * you can use the default class in the drop down option and you will get the default styles
         * <div classname="uxp-select-option-container" ...> a</div>
         *
         * if you pass a custom class name you need write some styles to indicate the selected items
         *
         * in styles (.scss file)
         * --------------------
         * .<custom-class-name> {
         *   &.highlighted {
         *          background-color: #52c4c94a;
         *          color: #424242;
         *  }
         * }
         *
         * @example
         * ```
         * function renderAutoFill() {
         * return <div>
         *      <div classname="custom-class-name" ...> a</div>
         *      <div classname="custom-class-name" ...> b</div>
         *      <div classname="custom-class-name" ...> c</div>
         * </div>
         * }
         * <AtutoCompleteInput
         * ...
         * optionClassName={'custom-class-name'}
         * autoFill={renderAutoFill()}
         * />
         * ```
         */
        optionClassName?: string
        /**
         * tab index. default is 0
         */
        tabIndex?: number
    }
        
    /**
     * @export
     * Events/Callbacks to controll the behaviour of the component
     *
     * @example
     * ```
     * // create a ref
     * let inputRef: React.MutableRefObject<IAutoCompleteInputInstanceProps> = React.useRef(null)
     *
     * // add the ref to input
     * <AutoCompleteInput
     *  ...
     *  ref ={inputRef}
     * />
     *
     *
     * // use
     * inputRef.current?.open()
     * inputRef.current?.close()
     * inputRef.current?.focus()
     * let input = inputRef.current?.getInputElement()
     * inputRef.current?.appendAtCursor('string to append')
     * ```
     */
    export interface IAutoCompleteInputInstanceProps {
        /**
         * this will open the picker
         *
         * @example
         * ```
         * inputRef.current?.open()
         * ```
         */
        open: () => void
        /**
         * this will close the picker
         *
         * @example
         * ```
         * inputRef.current?.close()
         * ```
         */
        close: () => void,
        /**
        * this will focus the input
        *
        * @example
        * ```
        * inputRef.current?.focus()
        * ```
        */
        focus: () => void,
        /**
         * This will return the input element
         * @example
         * ```
         * let input = inputRef.current?.getInputElement()
         * ```
         */
        getInputElement: () => React.MutableRefObject<HTMLInputElement>,
        /**
         * This will append the passed value at the cursor
         * if a selection has made it will be replaced by the passed value
         */
        appendAtCursor: (value: string) => void
    }
        
    /**
     * @export
     *
     *
     */
    export interface IFileInputProps {
        value: File | string
        onChange: (file: File, isValid: boolean) => void,
        allowedTypes?: string[]
        preview?: {
            showName?: boolean // default false,
            showPreview?: boolean // default true
        }
        className?: string,
        dropAreaIcon?: IconProp,
        dropAreaLabel?: string
    }
        
    /**
     * @export
     */
    export interface IFileInputInstanceProps {
    
    }
        
    /**
     * @export
     *
     */
    export interface ISampleDataLabelProps {
        show?: boolean;
        // info?: () => React.ReactElement;
    }
        
    /**
     * @export
     */
    export interface ILocalisationFormProps {
        code: string,
        useGoogleTranslate?: boolean,
        className?: string,
    }
        
    /**
     * @export
     */
    export interface ILocalisationFormModalProps {
        code: string,
        useGoogleTranslate?: boolean,
        beforeOpen?: () => boolean
        className?: string
    }
        
    /**
     * @export
     */
    export interface ILocalisationFormModalInstanceProps {
        open: () => void,
        close: () => void
    }
        
    /**
     * @export
     *
     * pagination component props
     */
    export interface PaginationProps {
        /**
         * Total nunmber of records
         */
        total: number;
        /**
         * Page size. Expected values are 10, 25, 50, 100
         */
        pageSize: number;
        /**
         * Current page
         */
        page: number;
        /**
         * Callback function when page size changes
         */
        onPageSizeChange: (pageSize: number) => void
        /**
         * Callback fucntion when page changes
         */
        onPageChange: (page: number) => void
    }
        
    /**
     * @export
     */
    export interface TableComponentProps {
        /**
         * data for the table
         * can pass a plat list of data or a function that will support pagination
         */
        data: any[] | ((page: number, pageSize: number) => Promise<{ items: any[] }>);
        /**
         * columns definitions
         */
        columns: Column[];
        /**
         * initial page size , can be change from the pagination component
         */
        pageSize: number,
        /**
         * total number of records
         */
        total: number | (() => Promise<number>)
        /**
         * loading state if require
         */
        loading?: boolean,
        /**
         * messge to show when no items found
         */
        noItemsMessage?: string | React.ReactNode,
        /**
         * this adds a edit column in to the table
         */
        editColumn?: {
            enable: boolean,
            label?: string,
            renderColumn?: (item: any) => React.ReactNode,
            onEdit?: (item: any) => void,
        },
        /**
         * this adds a edit column in to the table
         *
         */
        deleteColumn?: {
            enable: boolean,
            label?: string,
            renderColumn?: (item: any) => React.ReactNode,
            onDelete?: (item: any) => Promise<void>,
        }
        minCellWidth?: number,
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, item: any) => void
        onClickColumn?: (e: React.MouseEvent<HTMLDivElement>, item: any, column: Column) => void
    }
        
    /**
     * @export
     */
    export interface Column {
        id: string,
        label: string | React.ReactNode;
        renderColumn?: (item: any) => React.ReactNode,
        minWidth?: number,
        maxWidth?: number
    }
        
    /**
     * @export
     *
     * CRUD component props
     */
    export interface CRUDComponentProps {
        /**
         * list view props
         */
        list: ListProps,
        /**
         * add view props
         */
        add?: FormProps,
        /**
         * option to render a custom add  view
         */
        renderCustomAddView?: RenderCustomFormView
        /**
         * edit view props
         */
        edit?: ExtendedFormProps,
        /**
         * option to render a custom edit view
         */
        renderCustomEditView?: RenderCustomFormView
        /**
         * option to disable views
         */
        disableViews?: {
            add?: boolean;
            edit?: boolean;
            delete?: boolean;
        },
        /**
         * name of the entit, this will be used in notifications
         */
        entityName?: string,
        /**
         * custom class name
         */
        className?: string
    }
        
    /**
     * @export
     */
    export interface ListProps {
        title: string | React.ReactNode,
        columns: Column[],
        defaultPageSize: number,
        data: {
            isPaginated?: boolean // getData function will return paginated data. Therefore that function will handle searching filtering and sorting etc.
            getData: any[] | ((page?: number, pageSize?: number, query?: string, filters?: any) => Promise<{ items: any[] }>)
            getTotal?: (query?: string, filters?: any) => Promise<number>
            isLoading?: boolean
        },
        search?: {
            enabled: boolean
            fields?: string[]
        },
        filters?: any
        renderFilters?: React.ReactNode,
        onChangeFilters?: (data: any[]) => any[] // this will only be applicable to when not using the isPaginated option
    
        noItemsMessage?: string | React.ReactNode,
        addButton?: {
            label: string,
            icon?: string,
            backgroundColor?: string,
            color?: string
        },
        onDeleteItem?: (item: any) => Promise<ActionResponse>,
        minCellWidth?: number,
        onClickRow?: (e: React.MouseEvent<HTMLDivElement>, item: any) => void
        onClickColumn?: (e: React.MouseEvent<HTMLDivElement>, item: any, column: Column) => void
    }
        
    /**
     * @export
     */
    export interface ActionResponse {
        status: 'done' | 'error' | 'no-change',
        message?: string,
        data?: any
    }
        
    /**
     * @export
     */
    export interface FormProps {
        /**
         * title of the form
         */
        title: string
        /**
         * form structure
         */
        formStructure: FormSectionProps[],
        /**
         * submit function
         */
        onSubmit: (data: IFormData) => Promise<ActionResponse>
        /**
         * cancel fucnton
         */
        onCancel?: () => void,
        /**
         * label for submit button
         */
        submitButtonLabel?: string,
        /**
         * loading label for submit button
         */
        submitButtonLoadingLabel?: string,
        /**
         * label for cancel button
         */
        cancelButtonLabel?: string,
        /**
         * option to hide cancel button
         */
        hideCancelButton?: boolean,
        /**
         * callback function after saving
         */
        afterSave?: (savedRecord?: any) => void,
        formContainerStyles?: React.CSSProperties
    }
        
    /**
     * @export
     */
    export type RenderCustomFormView = (show: boolean, onClose: () => void, editInstance?: any) => React.ReactNode;
        
    /**
     * @export
     */
    export interface ExtendedFormProps extends Omit<FormProps, 'onSubmit'> {
        /**
         * submit function for editing
         */
        onSubmit: (data: IFormData, editInstance: any) => Promise<ActionResponse>;
    }
        
    /**
     * @export
     *
     * CRUD component instannce props
     */
    export interface CRUDComponentInstanceProps {
        /**
         * option to refresh the list
         */
        refreshList: () => void
    }
        
    /**
     * @export
     */
    export interface TreeViewProps {
        /**
         * Array of root nodes in the tree
         */
        items: TreeNode[],
        /**
         * Message to display when no items are available
         */
        noItemsMessage?: string,
        /**
         * If true, show connecting paths between nodes
         */
        showPath?: boolean,
        /**
         * If true, render the root nodes horizontally
         */
        renderRootNodesHorizontally?: boolean,
        /**
         * If true, allows multiple nodes to be selected
         */
        multiSelect?: boolean,
        /**
         * Currently selected node or nodes
         */
        selected?: TreeNode | TreeNode[],
        /**
         * Callback function triggered when a node is selected
         */
        onSelect?: (selected: TreeNode | TreeNode[]) => void,
        /**
         * Custom styles for the TreeView component
         */
        styles?: TreeViewStyles,
    
        showHeader?: boolean
        title?: string | React.ReactNode
        enableSearch?: boolean
        onSearch?: (query: string) => void,
    
        expandAllNodes?: boolean,
    
        enableAdd?: boolean
        addButtonLabel?: string,
        enableEdit?: boolean,
        enableDelete?: boolean,
    
        onAdd?: (parentNode?: ExtendedTreeNode) => void,
        onEdit?: (node: ExtendedTreeNode) => void,
        onDelete?: (id: string) => void,
        showActionButtonOnlyOnHover?: boolean
    }
        
    /**
     * @export
     */
    export interface TreeNode {
        /**
         * Unique identifier for the node
         */
        id: string,
        /**
         * Label to display for the node
         */
        label: string,
        /**
         * Optional icon for the node
         */
        icon?: string,
    
        /**
         * path of the node
         */
        path: string
        /**
         * Optional path for display
         */
        displayPath?:string
    
        /**
         * Function to render custom label content
         */
        renderLabel?: () => React.ReactNode,
        /**
         * Function to render custom details for the node
         */
        renderDetails?: () => React.ReactNode,
        /**
         * Children of the node, either as a static array or a function that returns a promise resolving to an array of nodes
         */
        getChildren?: ((node: TreeNode) => Promise<{ nodes: TreeNode[] }>) | TreeNode[],
        /**
         * If true, the node will be expanded on load
         */
        expandOnLoad?: boolean,
        /**
         * Optional styles to customize the appearance of the node
         */
        styles?: any,
        /**
         * If true, this node will be disabled
         */
        disableNode?: boolean,
        /**
         * If true, all child nodes will be disabled
         */
        disableChildNodes?: boolean,
        /**
         * If true, this node will be enabled even if the parent is disabled
         */
        enableNode?: boolean,
        /**
         * If true, child nodes will be enabled even if the parent is disabled
         */
        enableChildNode?: boolean,
    
        enableAddChildren?: boolean,
        enableEditNode?: boolean,
        enableDeleteNode?: boolean
    
        // for any arbitory data
        [key: string]: any
    }
        
    /**
     * @export
     * Styles configuration for the TreeView component
     */
    export interface TreeViewStyles {
        /**
         * Background color for the node
         */
        nodeBGColor?: string,
        /**
         * Color of the node icon
         */
        nodeIconColor?: string,
        /**
         * Border color of the node
         */
        nodeBorderColor?: string,
        /**
         * Color of the path connecting nodes
         */
        pathColor?: string,
        /**
         * Background color of the label
         */
        labelBGColor?: string,
        /**
         * Text color of the label
         */
        labelTextColor?: string,
        /**
         * Border radius of the label
         */
        labelBorderRadius?: number,
        /**
         * Background color of the selected label
         */
        labelSelectedBGColor?: string,
        /**
         * Text color of the selected label
         */
        labelSelectedTextColor?: string,
        /**
         * Background color of the label on hover
         */
        labelHoverBGColor?: string,
        /**
         * Text color of the label on hover
         */
        labelHoverTextColor?: string,
        /**
         * Background color for disabled nodes
         */
        disabledBGColor?: string,
        /**
         * Text color for disabled nodes
         */
        disabledTextColor?: string,
        /**
         * Icon to display for expandable nodes
         */
        expandableIcon?: string,
        /**
         * Icon to display for expanded nodes
         */
        expandedIcon?: string,
        /**
         * Icon to display for nodes with no children
         */
        endNodeIcon?: string,
    }
        
    /**
     * @export
     * Extended version of TreeNode that adds internal properties for node rendering
     */
    export interface ExtendedTreeNode extends TreeNode {
        /**
         * Unique node identifier used internally for tree structure
         */
        nodeId: string,
        /**
         * Array of child nodes, already resolved for rendering
         */
        children: ExtendedTreeNode[],
        /**
         * Indicates if the node is currently in the process of expanding (loading)
         */
        expanding?: boolean,
        /**
         * Indicates if the node is currently expanded
         */
        expanded?: boolean,
    
        parentId?: string,
        parentPath?: string
    }
        
    /**
     * @export
     */
    export interface TreeViewSelectInputProps extends TreeViewProps {
        placeholder?: string,
        showSelectedNodePath?: boolean
        showSelectedNodeDisplayPath?: boolean
    }
        
    /**
     * @export
     */
    export interface TreeViewSelectInputInstanceProps {
    
    }
        
    /**
     * Props for individual Pill component
     */
    export interface PillComponentProps {
        /** The pill's value */
        value: string;
        /** All available field options for context */
        allFields: PillOption[]
        /** Regex to match pill expressions */
        expressionMatcher: RegExp;
        /** Configuration for pill rendering */
        pillConfiguration?: PillConfiguration;
        /** Whether pill can be dragged */
        draggable?: boolean;
        /** Additional CSS classes */
        className?: string;
        /** Click handler */
        onClick?: () => void;
        /** Custom function to split pill values */
        pillValuesSplitFn?: (value: string) => string[];
        /** Index to determine pill type */
        typeIndex?: number
        /** Whether to show formatter controls */
        showFomatters?: boolean,
        /** Callback when formatters change */
        onChangeFormatters?: (value: string) => void
        /** Callback when formatter UI is clicked */
        onClickFormatters?: () => void
    }
        
    /**
     * Represents a selectable option that can become a pill
     */
    export interface PillOption {
        /** Display label for the option */
        label: string;
        /** The actual value used in expressions */
        value: string;
        /** Optional formatters applied to the value */
        formatters?: string[]
    }
        
    /**
     * Map of pill type names to their configurations
     */
    export type PillConfiguration = { [type: string]: PillTypeConfig };
        
    /**
     * Configuration for different pill types, defining how pills should be rendered
     */
    export interface PillTypeConfig {
        /** Index in the split value to use for rendering */
        valueIndex: number;
        /** Custom function to render the pill value */
        renderValue?: (value: string, allFields: PillOption[]) => string | JSX.Element;
        /** Icon to display - can be string or function that returns icon based on value */
        icon: string | ((val: string) => string);
        /** Text color - can be string or function that returns color based on value */
        textColor: string | ((val: string) => string);
        /** Background color - can be string or function that returns color based on value */
        backgroundColor: string | ((val: string) => string);
    }
        
    /**
     *
     * @export
     */
    export type IEventDispatcher = (instanceId: string, eventName: string, data?: { [key: string]: any }) => void;
        
    // toast content
    export interface IPartialContent {
        icon?: string | IToastContent,
        title?: string | IToastContent,
        content: string | IToastContent,
        showCloseBtn?: boolean,
        autoClose?: boolean,
        onClose?: () => void,
        closeAfter?: number,
    }
        
    export type IToastContent = () => JSX.Element;
        
    /**
     * The result of calling the useToast hook. This gives you methods to invoke notifications for success, errors, etc...
     * All notifications work the same way but have different styles.
     * @export
     */
    export interface IToastResult {
        success: IToast,
        error: IToast,
        warning: IToast,
        info: IToast,
        custom: IToast,
        remove: IRemove
    }
        
    // toast
    export interface IToast {
        id: string,
        content: IContent,
        createdAt: number
    }
        
    
    export interface IContent extends IPartialContent {
        type?: IToastType
    }
        
    // types
    export type IToastType = 'success' | 'error' | 'info' | 'warning' | "custom";
        
    /**
     * @export
     */
    export type IRemove = (id: string) => void;
        
    
    export interface TreeNodeOptions {
        leadingSlash?: boolean,
        displayPath?: {
            generate?: boolean,
            pathField?: string,
            leadingSlash?: boolean,
        },
        customLabel?: (item: any) => string
    }
        
    /**
     *
     * @export
     */
    export type IEventSubscriber = (instanceId: string, eventName: string, callback: (data?: { [key: string]: any }) => void) => void;
        
    /**
     * The react hook for creating toasts
     * @export
     */
    export type ToastHook = () => IToastResult;
        
    export type AlertHook = () => IAlertResult;
        
    /**
     * The result of calling the useAlert hook. This gives you methods to invoke a alert or a confirm alert
     * @export
     *
     */
    export interface IAlertResult {
        show: (content: string | IBaseAlertProps) => Promise<any>,
        confirm: (content: string | IConfirmAlertProps) => Promise<boolean>
        form: (content: IFormAlertProps) => Promise<any>
        info: (content: string | IBaseAlertProps) => Promise<any>
        success: (content: string | IBaseAlertProps) => Promise<any>
        warning: (content: string | IBaseAlertProps) => Promise<any>
        error: (content: string | IBaseAlertProps) => Promise<any>
    }
        
    
    export interface IBaseAlertProps {
        icon?: IconProp
        title?: string | IAlertContent,
        content: string | IAlertContent,
        showCloseBtn?: boolean,
        autoClose?: boolean,
        closeAfter?: number,
        closeButtonTitle?: string
    }
        
    // types
    export type IAlertContent = () => JSX.Element;
        
    
    export interface IConfirmAlertProps {
        icon?: IconProp
        title?: string | IAlertContent,
        content: string | IAlertContent,
        confirmButtonTitle?: string,
        cancelButtonTitle?: string
    }
        
    // export interface IAlertFormField extends IDynamicFormFieldProps{
    // }
    export interface IFormAlertProps {
        icon?: IconProp
        title: string | IAlertContent,
        content?: string | IAlertContent,
        formStructure: IAlertFormField[],
        submitButtonTitle?: string,
        cancelButtonTitle?: string,
        hideCancelButton?: boolean
    }
        
    
    export type IAlertFormField = IDynamicFormFieldProps | FormSectionProps
        
    /**
     * @export
     */
    export type IUseUpdateWidgetProps = () => (id: string, props: any) => void;
        
    /**
     * debounce hook will two params
     * first one is the value. Can be a string or a number
     * second one is the timout. This is optional, default is 300(ms)
     */
    export type DebounceHook = (value: any, timeout?: number, returnUpdateFunction?: boolean) => any | [debouncedValue: any, updateValue: (value: any) => void];
        
    /**
     * The react hook for resize effect
     * @export
     */
    export type ResizeEffectHook = (instanceId: string) => boolean;
        
    /**
     * @export
     * React Hook for using the Message Bus
     *
     */
    export type MessageBusHook = (context: IContextProvider, channel: string, callback: (payload:string,channel:string)=>string) => void;
        
    /**
     * @export
     */
    export type FieldsHook = (fields: any) => [any,{[field:string]:(s:any)=>void},any,(s:any)=>void];
        
    /**
     *
     * @export
     */
    export type IUseEffectWithPolling = (context: any, channel: string, interval: number, callback: () => Promise<void>, deps: any[]) => void;
        
    /**
     * Show a simple loading animation indicator
     * @export
     */
    export const LoadingSpinner: React.FunctionComponent<{ message?: string, className?: string }>;
        
    /**
     *
     * @export
     *
     * This component is used to create a react portal.
     *
     *
     * @example
     * ```
     *  <PortalContainer >
     *      {your content}
     *  </PortalContainer>
     * ```
     *
     * @example
     *  <PortalContainer
     *      hasBackdrop
     *      onClickBackdrop={() => {setShow(false)}}
     *      backdropStyles={{backgroundColor: "white"}}
     *  >
     *      {your content}
     *  </PortalContainer>
     */
    export const PortalContainer: React.FunctionComponent<IPortalContainerProps>;
        
    /**
     *
     * @export
     *
     * Default set of buttons with icons
     *
     * @example
     * ```
     *  <IconButton
     *      type="search"
     *      onClick={()=> {alert("Clicked")}}
     *      className="custom-css-class"
     *  />
     * ```
     *
     */
    export const IconButton: React.FunctionComponent<IIconButtonProps>;
        
    /**
     * This component wraps another component and shows a tooltip for the component it is wrapping, whenever the user moves the mouse over it.
     * @export
     */
    export const Tooltip: React.FunctionComponent<ITooltipProps>;
        
    /**
     * @export
     *
     * Sidebar component
     */
    export const SideBar: React.FunctionComponent<ISidebarProps>;
        
    /**
     * Display a profile picture. Alternatively you can specify a name and it will be shown in a colored background as initials
     *
     * @export
     */
    export const ProfileImage: React.FunctionComponent<IProfileImageProps>;
        
    /**
     * Show a simple loading animation indicator
     * @export
     */
    export const Loading: React.FunctionComponent<{}>;
        
    /**
     * This is a basic button component.
     * @export
     *
     * @example
     * ```
     *  <Button
     *      title="Click"
     *      onClick={() => {alert("Clicked")}}
     *  />
     * ```
     *
     * @example
     * ```
     *  <Button
     *      title="Click"
     *      onClick={() => {alert("Clicked")}}
     *      icon="https://static.iviva.com/images/lucy-logo.svg"
     *      loading={isLoading}
     *      loadingTitle="Loading..."
     *      className="custom-css-class"
     * />
     * ```
     *
     *
     * @example
     * ```
     *
     * <Button
     *      title='Save'
     *      loadingTitle='Saving...'
     *      useLoadingSpinner={true}
     * />
     * ```
     *
     *
     */
    export const Button: React.FunctionComponent<IButtonProps>;
        
    /**
     * @example
     * ```
     *  <NotificationBlock message="-- End Of Content --" class="end-of-content" />
     * ```
     * @export
     *
     */
    export const NotificationBlock: React.FunctionComponent<INotificationProps>;
        
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     *
     *
     *
     *
     * @example
     * ```
     *  Using array
     *
     *  let data:any[] = [
     *      {
     *          "id": 1,
     *          "name": "Name 01"
     *      },
     *      {
     *          "id": 2,
     *          "name": "Name 01"
     *      },
     *      {
     *          "id": 3,
     *          "name": "Name 01"
     *      }
     *  ]
     *
     *  function renderItem(item:any, key:number) {
     *      return <div>
     *          <div>{item.name} </div>
     *      </div>
     *  }
     *
     *  <DataList
     *      data={data}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *  />
     * ```
     *
     * @example
     * ```
     *  Using IDataFunction
     *  async function getData(max:number, last: string, args: any) {
     *      if(!last) last = "0";
     *
     *      return new Promise<{items:any[], pageToken: string}>((done, nope) =>{
     *          executeAction("model", "action", {max: max, last: last, args: args})
     *          .then(res => {
     *              done({items: res.data, pageToken: res.lastPageToken })
     *          })
     *          .catch(e => {
     *              done({items: [], pageToken: last})
     *          })
     *      })
     *  }
     *
     *  function renderItem(item:any, key:number) {
     *      return <div>
     *          <div>{item.name} </div>
     *      </div>
     *  }
     *
     *  <DataList
     *      data={(max, last, args) => getData(max, last, args)}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *  />
     *
     * ```
     *
     * @example
     * ```
     *  Using other props
     *
     *  <DataList
     *      data={data}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *      className="custom-css-class"
     *      showFooter={false}
     *      showEndOfContent={false}
     *  />
     *
     * ```
     */
    export const DataListBase: React.ForwardRefExoticComponent<React.RefAttributes<IDataListInstanceProps> & IDataListProps>;
        
    /**
     *
     * A standard text box
     * @export
     */
    export const Input: React.ForwardRefExoticComponent<React.RefAttributes<IInputInstanceProps> & IInputProps>;
        
    /**
     * A searchbox component
     * @export
     */
    export const SearchBox: React.ForwardRefExoticComponent<React.RefAttributes<ISearchBoxInstanceProps> & ISearchBoxProps>;
        
    /**
     *
     * A select control to select one item from a list of multiple items
     * @export
     *
     *  @example
     * ```
     *  // options
     *  let [selectedOption, setSelectedOption] = React.useState<string>(null)
     *  let options = [
     *      {label: "Sri Lanka", value: "SL"},
     *      {label: "India", value: "IN"},
     *      {label: "United State", value: "US"},
     *  ]
     *
     *  <Select
     *      options={options}
     *      selected={selectedOption}
     *      onChange={(newValue, option) => {
     *          setSelectedOption(value)
     *      }}
     *  />
     * ```
     *
     * @example
     * ```
     *  // options
     *  let [selectedOption, setSelectedOption] = React.useState<string>(null)
     *  let options = [
     *      {name: "Sri Lanka", code: "SL"},
     *      {name: "India", code: "IN"},
     *      {name: "United State", code: "US"},
     *  ]
     *
     *  <Select
     *      options={options}
     *      labelField="name"
     *      valueField="code"
     *      selected={selectedOption}
     *      onChange={(newValue, option) => {
     *          setSelectedOption(value)
     *      }}
     *  />
     * ```
     *
     */
    export const SelectBase: React.FunctionComponent<ISelectProps>;
        
    /**
     * @export
     *
     * User Profile component
     *
     * This component can be used when building UI without the default header
     *
     * @example
     *
     * ```
     *  basic usage
     *
     *  <UserProfile>
     *      <your content >
     *  </UserProfile>
     * ```
     *
     *
     * @example
     *
     * ```
     *  hide default details and logout button
     *
     *  <UserProfile
     *      hideDetails={true}
     *      hideLogout={true}
     *  >
     *      <your content >
     *  </UserProfile>
     *
     * ```
     */
    export const UserProfile: React.FunctionComponent<IProfileProps>;
        
    /**
     *
     * This is a generic field used to layout forms. Typically used in conjunction with `<Label>` to show a field with a label
     * @export
     * @example
     * ```
     * <FormField inline>
     *       <Label>Button (active)</Label>
     *       <Button
     *           title="Sample Button"
     *           onClick={() => alert("clicked")}
     *           icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *           active
     *       />
     *   </FormField>
     * ```
     *
     * @example
     * TODO: More Examples
     */
    export const FormField: React.FunctionComponent<IFormFieldProps>;
        
    /**
     * A simple label. Usually used in conjunction with a FormField
     * @export
     *
     * @example
     * ```
     * <Label>Name</Label>
     * ```
     */
    export const Label: React.FunctionComponent<ILabelProps>;
        
    /**
     *
     * Checkbox component
     * @export
     */
    export const Checkbox: React.ForwardRefExoticComponent<React.RefAttributes<ICheckboxInstanceProps> & ICheckboxProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a date.
     *
     * @example
     * ```
     *  <DatePicker
     *    title="Date"
     *    date={date}
     *    onChange={(date) => setDate(date)}
     * />
     * ```
     *
     * @example
     * <DatePicker
     *     title="Date"
     *     date={date}
     *     onChange={(date) => setDate(date)}
     *     options={{
     *         disableWeekEnds: true
     *     }}
     * />
     */
    export const DatePicker: React.FunctionComponent<IDatePickerProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a time.
     *
     * @example
     * ```
     *  <TimePicker
     *      title="Time"
     *      time={date}
     *      onChange={(date) => setDate(date)}
     *  />
     * ```
     */
    export const TimePicker: React.FunctionComponent<ITimePickerProps>;
        
    /**
     *
     * A standard textarea (multi line text box)
     * @export
     */
    export const TextArea: React.ForwardRefExoticComponent<React.RefAttributes<ITextAreaInstanceProps> & ITextAreaProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a datetime.
     *
     * @example
     * ```
     *  <DateTimePicker
     *      datetime={date}
     *      onChange={(date) => { setDate(date); }}
     *  />
     * ```
     */
    export const DateTimePicker: React.FunctionComponent<IDateTimePickerProps>;
        
    /**
     *
     * @export
     *
     * Tab layout component
     *
     * @example
     *
     * ```
     * <TabComponent
     *   tabs={[
     *      {id: 'general' , label:'General', content: <div> General Tab </div>},
     *      {id: 'advanced' , label:'Advanced', content: <div> Advanced Tab </div>},
     *   ]}
     *   selected={selectedTab}
     *   onChangeTab={setSelectedTab}
     * />
     * ```
     *
     */
    export const TabComponent: React.FunctionComponent<TabComponentProps>;
        
    /**
     * @export
     * This component provides a dynamic form component
     * Developer can pass a json structure and it will create a form component
     */
    export const DynamicForm: React.FunctionComponent<DynamicFormProps>;
        
    /**
     * Display a modal dialog. The dialog will be placed in front of a invisible sheet above the main UI.
     * @example
     * ```
     *  <button
     *      className="btn showcase"
     *      onClick={() => setShowModal(true)}
     *  >
     *      Click to Show Modal
     *  </button>
     *
     *  <Modal
     *      show={showModal}
     *      onOpen={() => { }}
     *      onClose={() => setShowModal(false)}
     *  >
     *      This is a sample modal
     *  </Modal>
     * ```
     * @export
     *
     */
    export const Modal: React.FunctionComponent<IModalProps>;
        
    /**
     *
     * @export
     * This is the default pre loader for widgets
     */
    export const DefaultLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * Bar chart loader
     */
    export const BarChartLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * Donut chart loader
     */
    export const DonutChartLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * gauge loader
     */
    export const GaugeLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     *
     * @export
     * heatmap chart loader
     */
    export const HeatmapChartLoader: React.FunctionComponent<IWidgetPreloaderLoaderProps>;
        
    /**
     * This component wraps another component and shows a tooltip for the component it is wrapping, whenever the user moves the mouse over it.
     * @export
     *
     *
     * @example
     * ```
     *  Dropdown button basic example
     *
     *  <DropDownButton
     *      content={() => <div>This is dropdown content</div>}
     *  >
     *      <button className="btn showcase" >Click to Show the dropdown</button>
     *  </DropDownButton>
     * ```
     *
     *
     * @example
     * ```
     *  Dropdown button example with options
     *
     *  <DropDownButton
     *      content={() => <div>This is dropdown content</div>}
     *      position="left"
     *      showOnHover
     *  >
     *      <button className="btn showcase" >Click to Show the dropdown</button>
     *  </DropDownButton>
     * ```
     *
     *
     * @example
     * ```
     *  Dropdown button example with forceClose
     *
     *  // Be carefull when handeling the state. `closePopup` state must reset to default (false) when the popup closes
     *  //state
     *  let [closePopup, setClosePopup] = React.useState(false)
     *
     *  <DropDownButton
     *      content={() => <>
     *                  <h1>Click to close</h1>
     *                  <Button title="Click" onClick={() => { setClosePopup(true) }} />
     *              </>}
     *      onOpen={() => { }}
     *      onClose={() => { setClosePopup(false) }}
     *      forceClose={closePopup}
     *  >
     *      <button className="btn showcase" >Click to Show the dropdown</button>
     *  </DropDownButton>
     *
     * ```
     *
     */
    export const DropDownButton: React.FunctionComponent<IDropDownButtonProps>;
        
    /**
     * This is a button that is meant to be used to execute a async action.
     * The onClick handler should return a promise. The button's behavior is to set the status as 'loading...' until the promise that was returned evluates and returns a result or throws an exception.
     * @export
     *
     * @example
     * ```
     *  <AsyncButton
     *      title="Submit"
     *      onClick={async() => {return executeAction("model", "action", {})}}
     *      icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *      loadingTitle="Submitting..."
     *      className="custom-css-class"
     *  />
     * ```
     *
     */
    export const AsyncButton: React.FunctionComponent<IAsyncButtonProps>;
        
    /**
     *
     * @export
     * Color pallet
     */
    export const ColorPallet: React.FunctionComponent<IColorPalletProps>;
        
    /**
     *
     * @export
     * Color picker input field
     */
    export const ColorPicker: React.FunctionComponent<IColorPickerProps>;
        
    /**
     * This component presents a group of options from which one can be selected.
     * Suitable to select a single item from a list where the list is very small. Most often used for filters.
     * @export
     */
    export const ToggleFilter: React.FunctionComponent<IToggleFilterProps>;
        
    /**
     *
     * A select control to select multiple items from a list of items
     * @export
     *
     *  @example
     * ```
     *  // options
     *  let [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
     *  let options = [
     *      {label: "Sri Lanka", value: "SL"},
     *      {label: "India", value: "IN"},
     *      {label: "United State", value: "US"},
     *  ]
     *
     *  <MultiSelect
     *      options={options}
     *      selected={selectedOptions}
     *      onChange={(newValues, options) => {
     *          setSelectedOptions(values)
     *      }}
     *  />
     * ```
     *
     * @example
     * ```
     *  // options
     *  let [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
     *  let options = [
     *      {name: "Sri Lanka", code: "SL"},
     *      {name: "India", code: "IN"},
     *      {name: "United State", code: "US"},
     *  ]
     *
     *  <MultiSelect
     *      options={options}
     *      labelField="name"
     *      valueField="code"
     *      selected={selectedOptions}
     *      onChange={(newValues, options) => {
     *          setSelectedOptions(values)
     *      }}
     *  />
     * ```
     *
     */
    export const MultiSelectBase: React.FunctionComponent<IMultiSelectProps>;
        
    /**
     * @export
     *
     * Widget container block
     */
    export const WidgetContainerBlock: React.FunctionComponent<IWidgetContainerBlockProps>;
        
    /**
     *
     * Show a popup bubble when clicking on an element.
     * Wrap the element you want to target in the popup bubble.
     *
     * @example
     * ```
     * <Popover title='Details' content={'Name:' + props.name}>
     *      <span>Click to see name</span>
     * </Popover>
     * ```
     * @export
     */
    export const Popover: React.FunctionComponent<IPopoverProps>;
        
    /**
     * This component is used to show a modal dialog that takes the user through as sequence of steps.
     * You define how each step should render.
     * @export
     *
     * @example
     * ```
     *  <ModalWizard
     *      show={show}
     *      title="Sample modal wizard"
     *      steps={[
     *      {
     *          id: "step-1",
     *          render: (props) => <div>
     *              <FormField>
     *                  <Label>Name</Label>
     *                  <Input value={name} onChange={setName} />
     *              </FormField>
     *              <FormField>
     *                  <Label>Email</Label>
     *                  <Input value={email} onChange={setEmail} />
     *              </FormField>
     *          </div>,
     *          renderStatus: () => <div>Personal Details</div>,
     *          onValidateStep: () => "step-2",
     *          showStatus: true
     *      },
     *      {
     *          id: "step-2",
     *          render: (props) => <div>
     *              <FormField>
     *                  <Label>University</Label>
     *                  <Input value={school} onChange={setSchool} />
     *              </FormField>
     *          </div>,
     *          renderStatus: () => <div>Educational Details</div>
     *      }
     *  ]}
     *  onClose={() => { setShow(false) }}
     *  onComplete={async () => { return executeAction("model", "action", {data: data}) }}
     * />
     * ```
     *
     */
    export const ModalWizard: React.FunctionComponent<IModalWizardProps>;
        
    /**
     * Displays a filter button which, when clicked, opens a popup panel.
     * Suitable for hiding filters for widgets or searches
     * @export
     *
     * @example
     * ```
     * <FilterPanel
     *                                enableClear={inputValue?.length > 0 || selected != null}
     *                                onClear={() => { setInputValue(""); setSelected(null) }} >
     *                                <FormField className="no-padding mb-only">
     *                                    <Label>Sort By</Label>
     *                                    <Select
     *                                        selected={selected}
     *                                        options={[
     *                                            { label: "Name", value: "op-1" },
     *                                            { label: "Date", value: "op-2" },
     *                                        ]}
     *                                        onChange={(value) => { setSelected(value) }}
     *                                        placeholder=" -- select --"
     *                                        isValid={selected ? selected?.length > 0 : null}
     *                                    />
     *                                </FormField>
     * </FilterPanel>
     * ```
     *
     */
    export const FilterPanel: React.FunctionComponent<IFilterPanelProps>;
        
    /**
     * Use this to show a title area on widgets. You can set a title on the left side
     * and any arbitrary content on the right side - typically you would use a {@component FilterPanel} there.
     * The content that appears on the right side go as children of this component.
     * @export
     *
     * @example
     *
     * ```
     * <TitleBar title='My Test Widget'>
     *      <div>Active</div>
     * </TitleBar>
     * ```
     *
     */
    export const TitleBar: React.FunctionComponent<IWidgetTitleBarProps>;
        
    /**
     * This is a extended version of modal. this covers the full UI.
     * main purpose is to create a container for sidebar link widgets
     * @example
     * ```
     *  <button className="btn showcase" onClick={() => setShowLinkWidget(true)}>Click to Show Link Widget Container</button>
     *
     *  <LinkWidgetContainer
     *      show={showLinkWidget}
     *      onClose={() => setShowLinkWidget(false)}
     *      title="Link Widget Container"
     *  >
     *      content
     * </LinkWidgetContainer>
     * ```
     * @export
     *
     */
    export const LinkWidgetContainer: React.FunctionComponent<ILinkWidgetContainerProps>;
        
    /**
     *
     * Display a pie chart visualization
     * @export
     */
    export const PieChartComponent: React.FunctionComponent<IPieChartProps>;
        
    /**
     * This is used to provide a success or error summary message for forms
     * @export
     * @example
     * ```
     * FormFeedback validInput>Form feedback ( valid )</FormFeedback>
     * ```
     *
     * @example
     * ```
     * <FormFeedback validInput={false}>Form feedback ( invalid )</FormFeedback>
     * ```
     *
     */
    export const FormFeedback: React.FunctionComponent<IFormFeedbackProps>;
        
    /**
     * @export
     *
     * Used to show data in a matrix or grid. You can give it a list of items and a function to render those items.
     * Items get layed out in a grid and displayed.
     *
     * @example
     * ```
     *  let GridData = [
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "Item Card",
     *          subTitle: "Item card with image/icon Item card with image/icon"
     *      },
     *      {
     *          icon: "",
     *          name: "Dinesh Gamage",
     *          title: "Item Card",
     *          subTitle: "Item card with name"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "Item Card Title & Icon",
     *          subTitle: ""
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "",
     *          subTitle: "Item Card sub Title & Icon"
     *      },
     *      {
     *          title: "Item Card",
     *          subTitle: "Item card without image/icon"
     *      },
     *      {
     *          title: "Item Card Title only",
     *      },
     *      {
     *          subTitle: "Item card sub title only"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "QR Code",
     *          subTitle: "scan your code"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *      },
     *      null
     *  ]
     *
     *
     *  function renderGridItem(item: any, key: number){
     *      return (<ItemCard
     *          item={item}
     *          imageField="icon"
     *          titleField="title"
     *          subTitleField="subTitle"
     *          nameField="name"
     *      />)
     *  }
     *
     *  <DataGrid
     *      data={GridData}
     *      renderItem={renderGridItem}
     *      columns={2}
     *  />
     * ```
     *
     */
    export const DataGrid: React.FunctionComponent<IDataGridProps>;
        
    /**
     * This component is used to render some item in a standard card form.
     * This includes a profile pic, a title, a subtitle and a list of fields and values.
     * @export
     *
     * @example
     * ```
     *  <ItemCard
     *      item={{
     *          request: "AC Extension request #36",
     *          user: "Johnson & Johnson",
     *          section: "Parking 1",
     *          status: "approved",
     *          date: "23/0702020"
     *      }}
     *      titleField="request"
     *      subTitleField="date"
     *      className="data-table-item"
     *  />
     * ```
     *
     * @example
     * ```
     *  <ItemCard
     *      item={{
     *          id: "1",
     *          image: "https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
     *          name: "John Doe",
     *      }}
     *      imageField="image"
     *      titleField="name"
     *      className="data-table-item"
     *  />
     * ```
     *
     * * @example
     * ```
     *  <ItemCard
     *      image="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
     *      title="John Doe"
     *      className="data-table-item"
     *  />
     * ```
     *
     */
    export const ItemCard: React.FunctionComponent<IItemCardProps>;
        
    /**
     * Show a card with a list of fields in it. You need to provide an object as the `item` prop and then a list of fields from within the object to be rendered.
     * You can also provide an optional `renderField` function to customize how fields are rendered.
     * @export
     *
     * @example
     * ```
     *  <ItemListCard
     *      title="System"
     *      item={{
     *          "hvac": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "lighting": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "elevators": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "fire alarm": {
     *              "value": 250,
     *              "percentage": 15
     *          }
     *      }}
     *      renderSubTitle={() => {
     *          return (<div className="sample-subtitle">Savings (AED)</div>)
     *      }}
     *      fields={["hvac", "lighting", "elevators", "fire alarm"]}
     *      renderField={(item, field, key) => {
     *          return (<div className="sample-item-field" key={key}>
     *              <div className="label">{field.toUpperCase()}</div>
     *              <div className="value">
     *                  <div className="amount">{item[field].value}</div>
     *                  <div className="percentage">{item[field].percentage}%</div>
     *              </div>
     *          </div>)
     *      }}
     *      backgroundColor="rgb(209 148 250)"
     *  />
     * ```
     *
     */
    export const ItemListCard: React.FunctionComponent<IItemListCardProps>;
        
    /**
     * This gives a pre defined component to used in configuration panels where we need to explain what is spaceworx is
     *
     * @export
     *
     *
     * @example
     * ```
     * <SpaceworxDescriptionTag />
     * ```
     *
     */
    export const SpaceworxDescriptionTag: React.FunctionComponent<ISpaceworxDescriptionTagProps>;
        
    /**
     *
     * @export
     *
     * This is a standard wrapper for widgets.
     * It provides basic visual styling for common widgets. You should generally wrap all your widgets in this.
     *
     * @example
     * ```
     * <WidgetWrapper>
     *  <Label>My custom widget</Label>
     * </WidgetWrapper>
     * ```
     *
     * @example
     *
     * ```
     * You can define custom break points for the widget and use css to make the widget responsive
     * Uxp will automatically apply the relevant class based on the width or height of the widget wrapper.
     * these class names will be prefixed with either `w-` (for width) or `h-` (for height)
     * then you can write css to make the widgets resposive
     * <WidgetWrapper
     *      cssBreakPoints={{
     *          width: {
     *              default: 'larger',
     *              100: 'smaller',
     *              200: 'small',
     *              300: 'medium'
     *          },
     *          height: {
     *              default: 'larger',
     * 				100: 'smaller',
     *  			200: 'small',
     *  			300: 'medium'
     * 			}
     *  	}}
     * 	>
     *
     *
     * ```
     *
     */
    export const WidgetWrapper: React.FunctionComponent<IWidgetWrapperProps>;
        
    /**
     * A map widget that can show a pannable/zoomable map with markers
     * @export
     *
     */
    export const MapComponent: React.FunctionComponent<IMapComponentProps>;
        
    /**
     * A wizard-style interface to guide users through a journey.
     * You can conditionally skip steps and validate steps before proceeding.
     * @export
     */
    export const Wizard: React.FunctionComponent<IWizardProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a date range.
     *
     * @example
     * ```
     *  <DateRangePicker
     *      startDate={startDate}
     *      endDate={endDate}
     *      closeOnSelect
     *      onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
     *  />
     * ```
     *
     */
    export const DateRangePicker: React.FunctionComponent<IDateRangePickerProps>;
        
    /**
     *
     * @export
     *
     * This component is used to select a time range.
     *
     * @example
     * ```
     *  <TimeRangePicker
     *      startTime={startDate}
     *      endTime={endDate}
     *      onChange={(s, e) => { setStartDate(s); setEndDate(e) }}
     *  />
     * ```
     */
    export const TimeRangePicker: React.FunctionComponent<ITimeRangePickerProps>;
        
    /**
     * A component to show time series based trend or line visualizations
     * @export
     *
     *
     * @example
     * ```
     *  const TrendData: ITrendSeries[] = [
     *      {
     *          unit: "A",
     *          lineColor: "#ff7300",
                data: [
                    { time: "2020/07/20", value: 200 },
                    { time: "2020/08/20", value: 100 },
                    { time: "2020/09/20", value: 50 },
                    { time: "2020/10/20", value: 300 },
                    { time: "2020/11/20", value: 700 },
                    { time: "2020/12/20", value: 90 }
                ],
                type: "line"
            },
            {
                unit: "B",
                lineColor: "#413ea0",
                fillColor: "#8884d8",
                data: [
                    { time: "2014/06/21", value: 50 },
                    { time: "2020/07/20", value: 50 },
                    { time: "2020/08/20", value: 30 },
                    { time: "2020/09/20", value: 90 },
                    { time: "2020/10/20", value: 300 },
                    { time: "2020/11/20", value: 100 },
                    { time: "2020/12/20", value: 90 }
                ],
                type: "area"
            }
        ]
     *
     *  <TrendChartComponent
     *      data={TrendData}
     *  />
     * ```
     */
    export const TrendChartComponent: React.FunctionComponent<ITrendChartProps>;
        
    /**
     * This is a confirm button component.
     * @export
     *
     * @example
     * ```
     *  <ConfirmButton
     *      title="Delete Item"
     *      loading={buttonLoading}
     *      onConfirm={async () => {return executeAction("model", "action", {})}}
     *      onCancel={() => {alert("Canceled")}}
     *  />
     * ```
     */
    export const ConfirmButton: React.FunctionComponent<IConfirmButtonProps>;
        
    /**
     *
     * @export
     *
     * This component is used to create a select box with pagination (infinite scrolling) & search/filter options.
     * Support keyboard interactions
     *  - Arrow Keys (up & down) - navigate through options list
     *  - Enter Key - Select current highlighted option
     *  - Escape Key - Exit select mode & discard changes
     * @example
     * ```
     *  <DynamicSelect
     *      selected={selected}
     *      options={(max: number, pageToken: string, args?: any) => getOptions(max, pageToken, args)}
     *      onChange={(value) => { setSelected(value)}}
     *      placeholder=" -- select --"
     *      labelField="label"
     *      timeout={500}
     *  />
     * ```
     *
     */
    export const DynamicSelect: React.FunctionComponent<IDynamicSelectProps>;
        
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     *
     * @example
     * ```
     *  <DataTable
     *      data={(max, last) => getDataItems(max, last)}
     *      pageSize={10}
     *      columns={[
     *          {
     *              title: "Request",
     *              width: "30%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="request"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "User",
     *              width: "25%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="user"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Zone",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="section"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Status",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="status"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Date",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="date"
     *                  className="data-table-item"
     *              />
     *          }
     *      ]}
     *  />
     * ```
     */
    export const DataTable: React.FunctionComponent<IDataTableProps>;
        
    /**
     * This widget will create a horizontal scroll-able list
     *
     * @example
     * ```
     *  <HorizontalScrollList
     *      items={[...Array(15).keys()]}
     *      renderItem={(item, key) => {
     *      return (<div className="item-thumbnail">
     *              {key}
     *          </div>)
     *      }}
     *  />
     * ```
     * @export
     */
    export const HorizontalScrollList: React.FunctionComponent<IHSListProps>;
        
    /**
     * This widget will give a simple widget with configurable option to create a link button
     *
     * @example
     * ```
     *  <LinkButtonWidget
     *      link="https://google.com"
     *      target="_blank"
     *      icon="path to your icon"
     *      label="Go to Google"
     *  />
     * ```
     * @export
     */
    export const LinkButtonWidget: React.FunctionComponent<ILinkButtonWidgetProps>;
        
    /**
     * @export
     * Calendar component so display range of dates
     */
    export const CalendarComponent: React.FunctionComponent<ICalendarComponentProps>;
        
    /**
     *
     * @export
     *
     * This component is used to create a radial gauge.
     *
     * ## Demo
     * Find a [Demo](https://lucy-uxp.github.io/dev/showcase.html#radial-gauge) here
     *
     *
     * @example
     * ```
     *  <RadialGauge
     *      value={10}
     *      min={0}
     *      max={100}
     *  />
     * ```
     *
     * @example
     * ```
     *  <RadialGauge
     *      value={10}
     *      min={0}
     *      max={100}
     *      label={() => <>Equipment Heat</>}
     *      legend={true}
     *      gradient={true}
     *      thickness={20}
     *      largeTick={5}
     *      smallTick={2}
     *      colors={[
     *          {color: 'cyan', stopAt: 12.5},
     *          {color: 'green', stopAt: 70},
     *          {color: 'orange', stopAt: 87.5},
     *          {color: 'red', stopAt: 100},
     *      ]}
     *
     *  />
     * ```
     */
    export const RadialGauge: React.FunctionComponent<IGaugeProps>;
        
    /**
     * This component allows you to create a custom autocomplete component.
     *
     * @example
     * ```
     *  let [val, setVal] = useState('')
     *  let inputRef = useRef(null)
     *
     *  let data = [
     *      {name: 'India'},
     *      {name: 'Japan'},
     *      {name: 'China'},
     *      {name: 'Singapore'},
     *      {name: 'Italy'},
     *  ]
     *
     *  function renderAutoComplete() {
     *
     *      let options = data.filter(d => d.name.includes(val))
     *
     *      return <>
     *          {options.map((o, i) => {
     *              return <div onClick={() => {
     *                      // to replace the value
     *                      setVal(o.name);
     *
     *                      // if you want to apped at the cursor
     *                      inputRef.current?.appendAtCursor(o.name)
     *
     *                      // close picker when select an item
     *                      inputRef.current?.close()
     *                  }>
     *                          {o.name}
     *                  </div>
     *          })}
     *      </>
     *  }
     *
     *  return <div>
     *
     *      <AutoCompleteInput
     *          value={val}
     *          onChange={setVal}
     *          autoFill={<div >
     *              {renderAutoComplete()}
     *          </div>}
     *          ref={inputRef}
     *      />
     *
     *  </div>
     *
     * ```
     *
     *
     * @example
     * ```
     *  Also you can pass a set of items instead of custom auto fill.
     *  Component will create a the auto fill
     *
    *      <AutoCompleteInput
     *          value={val}
     *          onChange={setVal}
     *          options={['India', 'Japan', 'China', 'Singapore']}
     *          ref={inputRef}
     *      />
     * ```
     *
     * @export
     */
    export const AutoCompleteInput: React.ForwardRefExoticComponent<React.RefAttributes<IAutoCompleteInputInstanceProps> & IAutoCompleteInputProps>;
        
    /**
     * @export
     * This component gives you a file input component.
     *
     *
     */
    export const FileInput: React.ForwardRefExoticComponent<React.RefAttributes<IFileInputInstanceProps> & IFileInputProps>;
        
    /**
     * @export
     *
     * This component will be used to add a label to a widget to show that it's being rendered using sample data
     *
     * @example
     *
     * ```
     * <SampleDataLabel
     *  show={true}
     * />
     * ```
     */
    export const SampleDataLabel: React.FunctionComponent<ISampleDataLabelProps>;
        
    /**
     * @export
     * This component let's you to configure localisation messages for the enabled languages in iviva
     *
     * @example
     *
     * <LocalizationForm
     * code: 'uxp-core.text.save'
     * />
     */
    export const LocalizationForm: React.FunctionComponent<ILocalisationFormProps>;
        
    /**
     * @export
     *
     * This component let's you to configure localisation messages for the enabled languages in iviva and it opens in a modal
     *
     *
     * @example
     *
     * <LocalizationFormModal
     * code: 'uxp-core.text.save'
     * />
     */
    export const LocalizationFormModal: React.ForwardRefExoticComponent<React.RefAttributes<ILocalisationFormModalInstanceProps> & ILocalisationFormModalProps>;
        
    /**
     * @export
     *
     * Pagination component
     *
     * @example
     *
     * ```
     * <PaginationComponent
     *  total={total}
     *  pageSize={pageSize}
     *  page={page}
     *  onPageChange={setPage}
     *  onPageSizeChange={v => { setPageSize(v); setPage(1); }}
     * />
     * ```
     *
     */
    export const PaginationComponent: React.FunctionComponent<PaginationProps>;
        
    /**
     * @export
     *
     * Table component with pagination
     *
     * @example
     *
     * ```
     *  const data = [
     *   {RegNo: 1, Name: 'Jane',...}
     *   {RegNo: 2, Name: 'John',...}
     *   {RegNo: 3, Name: 'Andy',...}
     * ]
     *
     *  <TableComponent
     *   data={data}
     *   columns={[ {id: 'RegNo', label: 'Registration Number' }, {id: 'Name', label: 'User Name'}  ]}
     *   pageSize={10}
     *   total={25}
     *  />
     * ```
     *
     */
    export const TableBaseComponent: React.FunctionComponent<TableComponentProps>;
        
    /**
     * @export
     *
     * CRUD component
     */
    export const CRUDComponentBase: React.ForwardRefExoticComponent<React.RefAttributes<CRUDComponentInstanceProps> & CRUDComponentProps>;
        
    /**
     *
     * @export
     *
     * TreeView component renders a hierarchical structure of nodes with optional icons, labels, and selectable functionality.
     *
     * @example
     *
     * ```
     * <TreeView
     *    items={[
     *      { id: '1', label: 'Root Node', children: [{ id: '1-1', label: 'Child Node' }] }
     *    ]}
     *    selected={selectedNode}
     *    onSelect={handleSelectNode}
     *    showPath={true}
     *    styles={{
     *      nodeBGColor: '#f0f0f0',
     *      labelTextColor: '#333',
     *    }}
     * />
     * ```
     *
     */
    export const TreeView: React.FunctionComponent<TreeViewProps>;
        
    /**
     * @export
     *
     * Select component with treeview
     */
    export const TreeViewSelectInput: React.ForwardRefExoticComponent<React.RefAttributes<TreeViewSelectInputInstanceProps> & TreeViewSelectInputProps>;
        
    /**
     * @export
     * Individual pill component that displays formatted values with optional formatters
     *
     */
    export const Pill: React.FunctionComponent<PillComponentProps>;
        
    /**
     * @export
     * PillInput component - a CodeMirror-based input that converts expressions to visual pills
     * Supports drag/drop, formatting, and contextual value selection
     *
     * @example
     * Basic usage with field options
     * ```tsx
     * <PillInput
     *   value="Hello {user.name}!"
     *   onChange={setValue}
     *   contextDataSections={[
     *     { label: "User", fields: [{ label: "Name", value: "user.name" }] }
     *   ]}
     * />
     * ```
     *
     * @example
     * With custom pill configuration
     * ```tsx
     * <PillInput
     *   value="{field.date|number|2}"
     *   onChange={setValue}
     *   contextDataSections={sections}
     *   pillConfiguration={{
     *     field: {
     *       valueIndex: 1,
     *       icon: "fas calendar",
     *       backgroundColor: "#007bff",
     *       textColor: "#fff"
     *     }
     *   }}
     * />
     * ```
     *
     * @example
     * With ref for programmatic control
     * ```tsx
     * const pillRef = useRef<PillInputRef>(null);
     *
     * <PillInput
     *   ref={pillRef}
     *   value={text}
     *   onChange={setText}
     *   contextDataSections={sections}
     * />
     *
     * // Insert value programmatically
     * pillRef.current?.insertAtCursor("{new.value}");
     * ```
     */
    export const PillInput: React.ForwardRefExoticComponent<React.RefAttributes<any> & any>;
        
    /**
     * This helps you to dispatch a custom event
     * Use useEventSubscriber to listen to these events
     *
     * @example
     * ```
     *  eventDispatcher(props.instanceId, "my-custom-event", {message: "this is a custom event"})
     * ```
     *
     *  @export
     */
    export function eventDispatcher(instanceId: string, eventName: string, data?: { [key: string]: any }): IEventDispatcher;
        
    /**
     * @export
     */
    export function generateTreeNodesFromFlatList(list: any[], query: string, idField: string, labelField: string, parentIdField: string, pathField: string, generatePath?: boolean, options?: TreeNodeOptions): TreeNode[];
        
    /**
     *
     * @export
     */
    export function flattenTreeNodesToOriginalFlatList(treeNodes: TreeNode[]): Promise<any[]>;
        
    /**
     * @export
     */
    export function findTreeNodeById(treeNodes: TreeNode[], id: string): Promise<TreeNode | null>;
        
    /**
     * @export
     */
    export function findTreeNodeByPath(treeNodes: TreeNode[], path: string): Promise<TreeNode | null>;
        
    /**
    * @export
    * Checks if a string contains placeholder expressions that can be parsed
    *
    * @example
    * String with placeholders
    * ```tsx
    * hasPlaceholders("Hello {user.name}!") // Returns: true
    * ```
    *
    * @example
    * Plain string without placeholders
    * ```tsx
    * hasPlaceholders("Hello world!") // Returns: false
    * ```
    */
    export function hasPlaceholders(value: string): boolean;
        
    /**
    * @export
    * Applies formatting transformations to a value based on formatter configuration
    * Uses FormatOptions to transform values (string, number, boolean, etc.)
    *
    * @example
    * Format as number with decimals
    * ```tsx
    * applyFormatters(19.999, ["number", "2"]) // Returns: 19.99
    * ```
    *
    * @example
    * No formatters applied
    * ```tsx
    * applyFormatters("hello", []) // Returns: "hello"
    * ```
    */
    export function applyFormatters(value: any, formatters: string[]): any;
        
    /**
    * @export
    * Extracts and formats a value from data using an expression with optional formatters
    * Supports JSONPath expressions starting with $ and applies formatting options
    *
    * @example
    * Extract nested property
    * ```tsx
    * extractAndFormatValue("$.user.name", { user: { name: "John" } }, "") // Returns: "John"
    * ```
    *
    * @example
    * Apply number formatting
    * ```tsx
    * extractAndFormatValue("$.price|number|2", { price: 19.999 }, "0") // Returns: 19.99
    * ```
    */
    export function extractAndFormatValue(expression: string, data: any, defaultValue: string): any;
        
    /**
    * @export
    * Parses placeholder expressions in a string value and replaces them with actual data
    * Returns the original type if single expression, otherwise returns formatted string
    *
    * @example
    * Single expression returns typed value
    * ```tsx
    * parsePlaceholders("{user.age}", { user: { age: 25 } }) // Returns: 25 (number)
    * ```
    *
    * @example
    * Mixed content returns formatted string
    * ```tsx
    * parsePlaceholders("Hello {user.name}!", { user: { name: "John" } }) // Returns: "Hello John!"
    * ```
    */
    export function parsePlaceholders(value: string, data: any): any;
        
    /**
     * This helps you to subscribe to a custom event dispatched through the eventDispatcher
     *
     * @example
     * ```
     *  useEventSubscriber(props.instanceId, "my-custom-event", (data?: any) => {
     *      console.log(data?.message)
     *  })
     * ```
     *
     * @export
     */
    export function useEventSubscriber(instanceId: string, eventName: string, callback: (data?: { [key: string]: any }) => void): IEventSubscriber;
        
    /**
     * This hook allows you to popup notifications on the bottom right corner of the screen
     * (also known as toasts)
     *
     *  @example
     * ```
     *  let toast = useToast();
     *  toast.success("Item has been added");
     * ```
     *
     * @example
     * ```
     *  let toast = useToast();
     *  toast.success({title:'Info',content:'Item has been added'});
     * ```
     *
     * @example
     * ```
     *  let toast = useToast();
     *  toast.error({title:'Failed!',content:'Failed to add item',closeAfter:5,onClose:()=>{console.log('toast closed')}});
     * ```
     *
     * @example
     * With custom icon
     * ```
     *  let toast = useToast();
     *  toast.success({icon: "path/to/your/image", content: "Toast with custom icon"});
     * ```
     *
     * @example
     * Custom toast example
     * ```
     *  let toast = useToast();
     *  toast.custom({content: "Custom Toast message"});
     * ```
     *
     * @example
     * Custom toast example
     * ```
     *  let toast = useToast();
     *  toast.custom({
     *      content: () => <div className="content">
     *              You custom toast content
     *          </div>
     *  );
     * ```
     *
     *
     * @export
     */
    export function useToast(): ToastHook;
        
    /**
     * The react hook for creating alerts and confirm alerts
     *
     * @example
     *
     * ```
     *  alerts.show("Item updated")
     * ```
     *
     *
     * @example
     * ```
     *  alerts.show({title: "Info", content: "Item updated", cancelButtonTitle: "Ok" })
     * ```
     *
     *
     * @example
     * ```
     * Auto close an alert (disabled by default)
     *
     * alerts.show({content: 'Item updated', autoClose: true, closeAfter: 2000})
     * ```
     *
     *
     *
     * @example
     * ```
     *  wait until alert is closed
     *
     *  await alerts.show("Item updated")
     *  ... execute the rest
     * ```
     *
     *
     * @example
     * ```
     *  let hasConfirmed = await alerts.confirm("Are you sure?")
     *
     *  if(hasConfimed) {
     *      ... execute the rest
     *  }
     *
     * ```
     *
     *
     * @example
     * ```
     *  alerts.confirm("Are you sure?")
     * .then(hasConfirmed => {
     *      if(hasConfirmed) {
     *          ... execute the rest
     *      }
     * })
     * ```
     *
     * @export
     */
    export function useAlert(): AlertHook;
        
    /**
     * This hook is used to update the default props of a given widget instance.
     * This returns a function  (instanceId : string, props : any ) => void
     * instanceId: widget instance. can access this from props of the widget
     * props: default props that you ant to set (
     *      NOTE: you have to specify all the default props here
     *      NOTE: you can pass default props when registering a widget
     * )
     *
     * This function will update the default props. But it won't re-render your widget. you have to handle that manually (maybe for now :))
     * @export
     */
    export function useUpdateWidgetProps(): IUseUpdateWidgetProps;
        
    /**
     * A custom hook that returns a debounced value and a function to update it programmatically.
     *
     * @example
     * ```
     * const [debounced, updateValue] = useDebounceAdvanced(query);
     * ```
     *
     * @example
     * ```
     * const [debounced, updateValue] = useDebounceAdvanced(query, 500);
     * updateValue('manually set value');
     * ```
     * @export
     */
    export function useDebounce(value: any, timeout: any, returnUpdateFunction: any): DebounceHook;
        
    /**
     * This hook allows you to check if the widget has resized.
     * You can update the widget if necessary (if has resized)
     *
     *
     * @example
     * To check if widget has been resized
     * ```
     *  let hasResized = useResizeEffect(props.instanceId);
     * ```
     * @export
     */
    export function useResizeEffect(instanceId: string): ResizeEffectHook;
        
    /**
     * This hook is used to subscribe to a channel on the message bus.
     * The hook takes care of initialization and unsubscribing after the component unmounts
     * @export
     * @param context The Lucy environment context
     * @param channel The channel you want to subscribe to
     * @param callback The function to call when a message comes on the specified channel
     *
     *
     * @example
     * ```
     *
     *  useMessageBus(props.uxpContext, "visitor-arrival", (payload, channel) => {
     *      getVisitorArrivals();
     *      Toast.info("Your visitor is here")
     *      return "updated"
     * })
     * ```
     *
     */
    export function useMessageBus(context: any, channel: any, callback: any): MessageBusHook;
        
    /**
     * This hook is used to set state for multiple values in a dictionary.
     * It returns 4 items -  a getter, setter and the traditional object and a setter for the object.
     * The first getter and setter are to read and write to individual properties.
     *
     * @export
     */
    export function useFields(defaultValues: any): FieldsHook;
        
    /**
     * This is similar to useEffect hook in react.
     * This is more like a advanced version of react useEffect. Here callback function get executed not only when the dependencies changes, but in regular intervals.
     * Also you can push a message through message bus to trigger the callback
     *
     * @export
     *
     * @example
     * ```
     * useEffectWithPolling(props.uxpContext, "visitor-arrivals", 5000, getVisitors, [props])
     * ```
     */
    export function useEffectWithPolling(context: any, channel: string, interval: number, callback: () => Promise<void>, deps: any[]): IUseEffectWithPolling;
    
}

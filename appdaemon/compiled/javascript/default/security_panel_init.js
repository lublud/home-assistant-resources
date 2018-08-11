$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Security");
    content_width = (154 + 5) * 6 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [154, 154],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 6,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-alarm-all" id="default-alarm-all"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-alarm-door" id="default-alarm-door"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-front-door" id="default-front-door"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-alarm-stop" id="default-alarm-stop"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-weather-panel" id="default-load-weather-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-security-panel" id="default-load-security-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 5, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-alarm-all"] = new baseswitch("default-alarm-all", "", "default", {'precision': 1, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.alarm_enabled_all'}, 'namespace': 'default', 'fields': {'icon': '', 'title': 'Alarm (all)', 'icon_style': '', 'state_text': '', 'title2': ''}, 'entity': 'input_boolean.alarm_enabled_all', 'icons': {'icon_on': 'mdi-security-home', 'icon_off': 'mdi-security-off'}, 'icon_style_active': 'font-size: 350%;', 'css': {'icon_style_active': 'color: #aaff00;font-size: 350%;', 'icon_style_inactive': 'color: #888;font-size: 350%;'}, 'title2_style': 'font-size: 120%;', 'icon_off': 'mdi-security-off', 'title_style': 'font-size: 120%;', 'widget_style': 'font-size: 120%;', 'static_icons': [], 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.alarm_enabled_all'}, 'enable': 1, 'icon_style_inactive': 'font-size: 350%;', 'static_css': {'title2_style': 'color: #fff;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;'}, 'widget_type': 'baseswitch', 'icon_on': 'mdi-security-home', 'state_active': 'on', 'use_comma': 0})
    
        widgets["default-alarm-door"] = new baseswitch("default-alarm-door", "", "default", {'precision': 1, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.alarm_enabled'}, 'namespace': 'default', 'fields': {'icon': '', 'title': 'Alarm (doors)', 'icon_style': '', 'state_text': '', 'title2': ''}, 'entity': 'input_boolean.alarm_enabled', 'icons': {'icon_on': 'mdi-security-home', 'icon_off': 'mdi-security-off'}, 'icon_style_active': 'font-size: 350%;', 'css': {'icon_style_active': 'color: #aaff00;font-size: 350%;', 'icon_style_inactive': 'color: #888;font-size: 350%;'}, 'title2_style': 'font-size: 120%;', 'icon_off': 'mdi-security-off', 'title_style': 'font-size: 120%;', 'widget_style': 'font-size: 120%;', 'static_icons': [], 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.alarm_enabled'}, 'enable': 1, 'icon_style_inactive': 'font-size: 350%;', 'static_css': {'title2_style': 'color: #fff;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;'}, 'widget_type': 'baseswitch', 'icon_on': 'mdi-security-home', 'state_active': 'on', 'use_comma': 0})
    
        widgets["default-front-door"] = new baseswitch("default-front-door", "", "default", {'namespace': 'default', 'icon_off': 'mdi-door-closed', 'precision': 1, 'state_inactive': 'off', 'use_hass_icon': 1, 'icon_on': 'mdi-door-open', 'widget_type': 'baseswitch', 'static_icons': [], 'fields': {'icon': '', 'title': 'Front door', 'icon_style': '', 'state_text': '', 'title2': ''}, 'entity': 'binary_sensor.door_window_sensor_158d00012153cf', 'icon_style_inactive': 'color: red;font-size: 350%;', 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'icon_style_active': 'color: green;font-size: 350%;', 'css': {'icon_style_active': 'color: green;font-size: 350%;', 'icon_style_inactive': 'color: red;font-size: 350%;'}, 'icons': {'icon_on': 'mdi-door-open', 'icon_off': 'mdi-door-closed'}, 'state_active': 'on', 'use_comma': 0})
    
        widgets["default-alarm-stop"] = new baseswitch("default-alarm-stop", "", "default", {'namespace': 'default', 'title2_style': 'font-size: 120%;', 'precision': 1, 'title_style': 'font-size: 120%;', 'fields': {'icon': '', 'title': 'Stop alarm', 'icon_style': '', 'state_text': '', 'title2': ''}, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.stop_alarm'}, 'widget_style': 'font-size: 120%;', 'static_icons': [], 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.stop_alarm'}, 'enable': 1, 'entity': 'script.stop_alarm', 'use_comma': 0, 'static_css': {'title2_style': 'color: #fff;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'state_active': 'on', 'widget_type': 'baseswitch'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'icon_inactive_style': 'font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-home', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Main Panel', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #fff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-home', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'main_panel', 'widget_type': 'basejavascript'})
    
        widgets["default-load-weather-panel"] = new basejavascript("default-load-weather-panel", "", "default", {'icon_inactive_style': 'font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-cloud', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Weather', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #fff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-cloud', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'weather_panel', 'widget_type': 'basejavascript'})
    
        widgets["default-load-security-panel"] = new basejavascript("default-load-security-panel", "", "default", {'icon_inactive_style': 'color: #00aaff;font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-shield', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Security', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #00aaff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-shield', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'security_panel', 'widget_type': 'basejavascript'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Security", widgets);

});
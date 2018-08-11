$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Weather Panel");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-weather-frame" id="default-weather-frame"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-weather-condition" id="default-current-weather-condition"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-temperature" id="default-current-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-humidity" id="default-current-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-pollution" id="default-current-pollution"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-daily-high-temperature" id="default-daily-high-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-daily-low-temperature" id="default-daily-low-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-dew-point" id="default-current-dew-point"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-precipitation-probability" id="default-current-precipitation-probability"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-weather-panel" id="default-load-weather-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-security-panel" id="default-load-security-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 5, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-weather-frame"] = new baseiframe("default-weather-frame", "", "default", {'precision': 1, 'img_list': ['https://www.cwb.gov.tw/V7/observe/satellite/Data/ts3p/ts3p.jpg'], 'use_hass_icon': 1, 'static_icons': [], 'namespace': 'default', 'widget_type': 'baseiframe', 'fields': {'frame_src': '', 'title': '', 'img_src': '', 'frame_style': ''}, 'icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;background-color: rgba(0, 0, 0, 0.5);'}, 'refresh': 600, 'css': {}, 'use_comma': 0})
    
        widgets["default-current-weather-condition"] = new basedisplay("default-current-weather-condition", "", "default", {'unit_style': 'color: #00aaff;', 'sub_entity_to_entity_attribute': '', 'precision': 1, 'title_style': 'font-size: 120%;', 'use_hass_icon': 1, 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Condition', 'title2': '', 'state_text': '', 'unit': ''}, 'namespace': 'default', 'entity': 'sensor.dark_sky_summary', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'icons': [], 'use_comma': 0})
    
        widgets["default-current-temperature"] = new basedisplay("default-current-temperature", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Temperature', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '&deg;C', 'entity': 'sensor.dark_sky_temperature', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-current-humidity"] = new basedisplay("default-current-humidity", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Humidity', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '%', 'entity': 'sensor.dark_sky_humidity', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-current-pollution"] = new basedisplay("default-current-pollution", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Outside Pollution', 'title2': '', 'state_text': '', 'unit': ''}, 'units': 'pm2.5', 'entity': 'sensor.waqi_zhongshan_taiwan', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-daily-high-temperature"] = new basedisplay("default-daily-high-temperature", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Daily High', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '&deg;C', 'entity': 'sensor.dark_sky_daily_high_temperature', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-daily-low-temperature"] = new basedisplay("default-daily-low-temperature", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Daily Low', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '&deg;C', 'entity': 'sensor.dark_sky_daily_low_temperature', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-current-dew-point"] = new basedisplay("default-current-dew-point", "", "default", {'unit_style': 'color: #00aaff;', 'sub_entity_to_entity_attribute': '', 'precision': 1, 'title_style': 'font-size: 120%;', 'use_hass_icon': 1, 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Dew Point', 'title2': '', 'state_text': '', 'unit': ''}, 'namespace': 'default', 'entity': 'sensor.dark_sky_dew_point', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'icons': [], 'use_comma': 0})
    
        widgets["default-current-precipitation-probability"] = new basedisplay("default-current-precipitation-probability", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Precipitation Probability', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '%', 'entity': 'sensor.dark_sky_precip_probability', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'icon_inactive_style': 'font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-home', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Main Panel', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #fff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-home', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'main_panel', 'widget_type': 'basejavascript'})
    
        widgets["default-load-weather-panel"] = new basejavascript("default-load-weather-panel", "", "default", {'icon_inactive_style': 'color: #00aaff;font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-cloud', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Weather', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #00aaff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-cloud', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'weather_panel', 'widget_type': 'basejavascript'})
    
        widgets["default-load-security-panel"] = new basejavascript("default-load-security-panel", "", "default", {'icon_inactive_style': 'font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-shield', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Security', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #fff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-shield', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'security_panel', 'widget_type': 'basejavascript'})
    

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
    ha_status(stream_url, "Weather Panel", widgets);

});
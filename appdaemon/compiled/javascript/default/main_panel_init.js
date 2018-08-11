$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Main Panel");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-tv-lights" id="default-tv-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-sofa-lights" id="default-sofa-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-kitchen-lights" id="default-kitchen-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-vacuum-switch" id="default-vacuum-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-temperature" id="default-current-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-humidity" id="default-current-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-current-pollution" id="default-current-pollution"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-indoor-temperature" id="default-indoor-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-indoor-humidity" id="default-indoor-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-indoor-pollution" id="default-indoor-pollution"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-weather-panel" id="default-load-weather-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-security-panel" id="default-load-security-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 2, 1, 5, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'date_style': 'font-size: 150%;', 'time_style': 'color: orange;font-size: 380%;', 'use_hass_icon': 1, 'namespace': 'default', 'widget_style': 'font-size: 120%;', 'static_icons': [], 'fields': {'date': '', 'time': ''}, 'use_comma': 0, 'precision': 1, 'static_css': {'date_style': 'color: #fff;font-size: 150%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'time_style': 'color: orange;font-size: 380%;'}, 'css': {}, 'icons': [], 'widget_type': 'baseclock'})
    
        widgets["default-tv-lights"] = new baselight("default-tv-lights", "", "default", {'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.tv_lights'}, 'namespace': 'default', 'fields': {'level': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'title': 'TV Lights', 'icon_style': ''}, 'entity': 'light.tv_lights', 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'level_up_style': 'font-size: 120%;', 'level_down_style': 'font-size: 120%;', 'icon_style_active': 'font-size: 350%;', 'css': {'icon_style_active': 'color: #aaff00;font-size: 350%;', 'icon_style_inactive': 'color: #888;font-size: 350%;'}, 'level_style': 'font-size: 120%;', 'title2_style': 'font-size: 120%;', 'icon_off': 'mdi-lightbulb', 'title_style': 'font-size: 120%;', 'text_style': 'font-size: 120%;', 'widget_style': 'font-size: 120%;', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.tv_lights'}, 'icon_style_inactive': 'font-size: 350%;', 'static_css': {'unit_style': 'color: #fff;', 'title2_style': 'color: #fff;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'level_up_style': 'color: #888;font-size: 120%;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'level_style': 'color: #fff;font-size: 120%;'}, 'icon_on': 'mdi-lightbulb', 'widget_type': 'baselight'})
    
        widgets["default-sofa-lights"] = new baselight("default-sofa-lights", "", "default", {'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.sofa_lights'}, 'namespace': 'default', 'fields': {'level': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'title': 'Sofa Lights', 'icon_style': ''}, 'entity': 'light.sofa_lights', 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'level_up_style': 'font-size: 120%;', 'level_down_style': 'font-size: 120%;', 'icon_style_active': 'font-size: 350%;', 'css': {'icon_style_active': 'color: #aaff00;font-size: 350%;', 'icon_style_inactive': 'color: #888;font-size: 350%;'}, 'level_style': 'font-size: 120%;', 'title2_style': 'font-size: 120%;', 'icon_off': 'mdi-lightbulb', 'title_style': 'font-size: 120%;', 'text_style': 'font-size: 120%;', 'widget_style': 'font-size: 120%;', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.sofa_lights'}, 'icon_style_inactive': 'font-size: 350%;', 'static_css': {'unit_style': 'color: #fff;', 'title2_style': 'color: #fff;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'level_up_style': 'color: #888;font-size: 120%;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'level_style': 'color: #fff;font-size: 120%;'}, 'icon_on': 'mdi-lightbulb', 'widget_type': 'baselight'})
    
        widgets["default-kitchen-lights"] = new baselight("default-kitchen-lights", "", "default", {'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.kitchen_lights'}, 'namespace': 'default', 'fields': {'level': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'title': 'Kitchen Lights', 'icon_style': ''}, 'entity': 'light.kitchen_lights', 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'level_up_style': 'font-size: 120%;', 'level_down_style': 'font-size: 120%;', 'icon_style_active': 'font-size: 350%;', 'css': {'icon_style_active': 'color: #aaff00;font-size: 350%;', 'icon_style_inactive': 'color: #888;font-size: 350%;'}, 'level_style': 'font-size: 120%;', 'title2_style': 'font-size: 120%;', 'icon_off': 'mdi-lightbulb', 'title_style': 'font-size: 120%;', 'text_style': 'font-size: 120%;', 'widget_style': 'font-size: 120%;', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.kitchen_lights'}, 'icon_style_inactive': 'font-size: 350%;', 'static_css': {'unit_style': 'color: #fff;', 'title2_style': 'color: #fff;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'level_up_style': 'color: #888;font-size: 120%;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'level_style': 'color: #fff;font-size: 120%;'}, 'icon_on': 'mdi-lightbulb', 'widget_type': 'baselight'})
    
        widgets["default-vacuum-switch"] = new baseswitch("default-vacuum-switch", "", "default", {'precision': 1, 'use_hass_icon': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'vacuum.xiaomi_vacuum_cleaner'}, 'namespace': 'default', 'fields': {'icon': '', 'title': 'Xiaomi Vacuum', 'icon_style': '', 'state_text': '', 'title2': ''}, 'entity': 'vacuum.xiaomi_vacuum_cleaner', 'icons': {'icon_on': 'mdi-roomba', 'icon_off': 'mdi-roomba'}, 'icon_style_active': 'font-size: 350%;', 'css': {'icon_style_active': 'color: #aaff00;font-size: 350%;', 'icon_style_inactive': 'color: #888;font-size: 350%;'}, 'title2_style': 'font-size: 120%;', 'icon_off': 'mdi-roomba', 'title_style': 'font-size: 120%;', 'widget_style': 'font-size: 120%;', 'static_icons': [], 'state_inactive': 'off', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'vacuum.xiaomi_vacuum_cleaner'}, 'enable': 1, 'icon_style_inactive': 'font-size: 350%;', 'static_css': {'title2_style': 'color: #fff;font-size: 120%;', 'widget_style': 'background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;'}, 'widget_type': 'baseswitch', 'icon_on': 'mdi-roomba', 'state_active': 'on', 'use_comma': 0})
    
        widgets["default-current-temperature"] = new basedisplay("default-current-temperature", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Outside Temperature', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '&deg;C', 'entity': 'sensor.dark_sky_temperature', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-current-humidity"] = new basedisplay("default-current-humidity", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Outside Humidity', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '%', 'entity': 'sensor.dark_sky_humidity', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-current-pollution"] = new basedisplay("default-current-pollution", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Outside Pollution', 'title2': '', 'state_text': '', 'unit': ''}, 'units': 'pm2.5', 'entity': 'sensor.waqi_zhongshan_taiwan', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-indoor-temperature"] = new basedisplay("default-indoor-temperature", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Indoor Temperature', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '&deg;C', 'entity': 'sensor.bedroom_temperature', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-indoor-humidity"] = new basedisplay("default-indoor-humidity", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Indoor Humidity', 'title2': '', 'state_text': '', 'unit': ''}, 'units': '%', 'entity': 'sensor.bedroom_humidity', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-indoor-pollution"] = new basedisplay("default-indoor-pollution", "", "default", {'unit_style': 'color: #00aaff;', 'icons': [], 'sub_entity_to_entity_attribute': '', 'precision': 0, 'title_style': 'font-size: 120%;', 'namespace': 'default', 'widget_style': 'color: #00aaff;font-size: 120%;', 'static_icons': [], 'widget_type': 'basedisplay', 'entity_to_sub_entity_attribute': '', 'fields': {'value': '', 'title': 'Indoor Pollution', 'title2': '', 'state_text': '', 'unit': ''}, 'units': 'pm2.5', 'entity': 'sensor.bedroom_aqi', 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: #444;font-size: 120%;', 'title_style': 'color: #fff;font-size: 120%;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'icon_inactive_style': 'color: #00aaff;font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-home', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Main Panel', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #00aaff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-home', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'main_panel', 'widget_type': 'basejavascript'})
    
        widgets["default-load-weather-panel"] = new basejavascript("default-load-weather-panel", "", "default", {'icon_inactive_style': 'font-size: 350%;', 'precision': 1, 'use_comma': 0, 'title_style': 'font-size: 160%;', 'icon_active_style': 'font-size: 400%;', 'icon_inactive': 'fa-cloud', 'static_icons': [], 'namespace': 'default', 'fields': {'icon': '', 'icon_style': '', 'title': 'Weather', 'title2': ''}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;font-size: 160%;'}, 'css': {'icon_active_style': 'color: #fff;font-size: 400%;', 'icon_inactive_style': 'color: #fff;font-size: 350%;'}, 'icons': {'icon_inactive': 'fa-cloud', 'icon_active': 'fa-spinner fa-spin'}, 'dashboard': 'weather_panel', 'widget_type': 'basejavascript'})
    
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
    ha_status(stream_url, "Main Panel", widgets);

});
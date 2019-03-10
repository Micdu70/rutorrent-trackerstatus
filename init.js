plugin.loadLang();

plugin.onLangLoaded = function() {
	if (plugin.canChangeColumns()) {
		plugin.config = theWebUI.config;
		theWebUI.config = function(data) {
			theWebUI.tables.trt.columns.push({text: theUILang.Tracker_status, width: "200px", id: "msg", type: TYPE_STRING});
			plugin.config.call(this, data);
		}
	}
}

plugin.onRemove = function() {
	theWebUI.getTable("trt").removeColumnById("msg");
}

plugin.langLoaded = function() {
	if(plugin.enabled)
		plugin.onLangLoaded();
}

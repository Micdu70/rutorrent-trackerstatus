plugin.loadLang();

if (plugin.canChangeColumns()) {
	plugin.config = theWebUI.config;
	theWebUI.config = function(data) {
		this.tables.trt.columns.push({text: 'Tracker - Status', width: '200px', id: 'msg', type: TYPE_STRING});
		plugin.config.call(this, data);
		plugin.trtRenameColumn();
        }

	plugin.trtRenameColumn = function() {
		if(plugin.allStuffLoaded)
			theWebUI.getTable("trt").renameColumnById("msg",theUILang.Tracker_status);
		else
			setTimeout(arguments.callee,1000);
	}
}

plugin.onRemove = function() {
	theWebUI.getTable("trt").removeColumnById("msg");
}

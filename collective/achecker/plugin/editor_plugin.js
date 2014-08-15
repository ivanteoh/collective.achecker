/**
 * $Id: editor_plugin_src.js 201 2008-04-17 15:56:56Z cindy $
 *
 * @author Cindy Li
 * @copyright Copyright ? 2008, ATutor, All rights reserved.
 */

(function() {
    // Load plugin specific language pack
    //tinymce.PluginManager.requireLangPack('acheck');

	tinymce.create('tinymce.plugins.PloneAcheckPlugin', {
		init : function(ed, url) {
            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceACheck');
			ed.addCommand('mceACheck', function() {

					var theCode = '<html><body onLoad="document.accessform.submit();"> \n';
					theCode += '<h1>Submitting Code for Accessibility Checking.....</h1>\n';
					theCode += '<form action="http://achecker.ca/checker/index.php" name="accessform" method="post"> \n';
					theCode += '<input type="hidden" name="gid[]" value="8" /> \n';
					theCode += '<textarea name="validate_content">' + tinyMCE.activeEditor.getContent({format : 'raw'}) + '</textarea>\n';
					theCode += '<input type="submit" /></form> \n';
					theCode += '</body></html> \n';
					accessWin = window.open('', 'accessWin',  '');
					accessWin.document.writeln(theCode);
					accessWin.document.close();
			});

			// Register ACheck button
			ed.addButton('ploneachecker', {
				title : 'AChecker',
				cmd : 'mceACheck',
                image : url + '/img/achecker.gif'
			});

		},

        createControl : function(n, cm) {
            return null;
        },

		getInfo : function() {
			return {
				longname : 'ACheck Plugin',
				author   : 'ATutor',
				authorurl : 'http://www.atutor.ca',
				infourl : 'http://www.atutor.ca',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('plone_achecker', tinymce.plugins.PloneAcheckPlugin);
})();

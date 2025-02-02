document.addEventListener('DOMContentLoaded', () => {
    (function() {

    	"use strict"

    	const $BlockEditors = document.querySelectorAll('.block-code-editor')

		if ($BlockEditors?.length) {
		    $BlockEditors.forEach(($e) => {
		    	const dm = $e.getAttribute('data-mode')
		    	let m = dm ? dm : 'javascript'

		        ace.edit($e, {
		            theme: "ace/theme/monokai",
		            mode: "ace/mode/" + m,
		            fontSize: 16,
		            selectionStyle: "text",
		            maxLines: 30,
		            minLines: 2,
		            readOnly: true,
		            enableAutoIndent: true,
		            displayIndentGuides: false,
		            showLineNumbers: true,
		            showGutter: true,
		            showInvisibles: false,
		            highlightGutterLine: false
		        })     

		    })
		}

		
       
    })();
})

        
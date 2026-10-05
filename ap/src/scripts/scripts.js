/*
 * Copyright (c) 2016 Milan Kyncl
 * Licensed under the MIT license.
 * jquery.copy-to-clipboard plugin
 * https://github.com/mmkyncl/jquery-copy-to-clipboard
 */
$.fn.CopyToClipboard = function() {
    var textToCopy = false;
    if(this.is('select') || this.is('textarea') || this.is('input')){
        textToCopy = this.val();
    }else {
        textToCopy = this.text();
    }
    CopyToClipboard(textToCopy);
};
function CopyToClipboard( val ){
    var hiddenClipboard = $('#_hiddenClipboard_');
    if(!hiddenClipboard.length){
        $('body').append('<textarea readonly style="position:absolute;top: -9999px;" id="_hiddenClipboard_"></textarea>');
        hiddenClipboard = $('#_hiddenClipboard_');
    }
    hiddenClipboard.html(val);
    hiddenClipboard.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    hiddenClipboard.remove();
}
$(function(){
    $('[data-clipboard-target]').each(function(){
        $(this).click(function() {
            $($(this).data('clipboard-target')).CopyToClipboard();
        });
    });
    $('[data-clipboard-text]').each(function(){
        $(this).click(function(){
            CopyToClipboard($(this).data('clipboard-text'));
        });
    });
});


$('.copyonclipboard').click(function(){
  $(this).CopyToClipboard();
  $("#notification-copied").show().delay(2000).fadeOut();
});

/* Themes */

    var thehours = new Date().getHours();
	var themessage;
	if (thehours >= 0 && thehours < 6) {
		$( "#theme-nox" ).prop('checked', true );
	} else if (thehours >= 6 && thehours < 12) {
		$( "#theme-aurora" ).prop('checked', true );
	} else if (thehours >= 12 && thehours < 18) {
		$( "#theme-meridianus" ).prop('checked', true );
	} else if (thehours >= 18 && thehours < 20) {
		$( "#theme-vesperum" ).prop('checked', true );	
	} else if (thehours >= 20 && thehours < 24) {
		$( "#theme-nox" ).prop('checked', true );
	}
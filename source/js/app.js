/**
 * Created by zhg on 15/12/15.
 */

$(function () {
    var $container = $('.js_container');
    function hideActionSheet(weuiActionsheet, mask) {
        weuiActionsheet.removeClass('weui_actionsheet_toggle');
        mask.removeClass('weui_fade_toggle');
        weuiActionsheet.on('transitionend', function () {
            mask.hide();
        }).on('webkitTransitionEnd', function () {
            mask.hide();
        })
    }
    $container.on('click','#showActionSheet', function () {
        var mask = $('#mask');
        var weuiActionsheet = $('#weui_actionsheet');
        weuiActionsheet.addClass('weui_actionsheet_toggle');
        mask.show().addClass('weui_fade_toggle').click(function () {
            hideActionSheet(weuiActionsheet, mask);
        });
        $('#actionsheet_cancel').click(function () {
            hideActionSheet(weuiActionsheet, mask);
        });
        weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');
    });


});
window.onscroll = function(){
    yScroll = self.pageYOffset;
    if(yScroll > 20){
        $('#menu').css({
            "position": "fixed",
            "width": "100%",
            "top": "-20px",
            "background":"#FBF9FE",
        })
    }else {
        $('#menu').css({
            "position": "stati",
            "width": "100%",
            "top": "20px",
            "background":"#FBF9FE",
        })
    }
};
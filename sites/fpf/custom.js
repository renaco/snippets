jQuery('.projects_holder article:first-child div a').attr('target', '_blank');
jQuery('.baner1 div div .vc_empty_space').height('30');
jQuery('.header_top #searchform input[type=text], .widget.widget_search form input[type=text]').css('margin', '0').css('background-color', 'transparent');
jQuery('#qode-homeslide2').css('height', '0').css('display', 'none');
jQuery('.slides li>img').css('height', 'auto');
if (jQuery('body').width() < 767) {
    jQuery('.qode_icon_font_awesome').css('font-size', 24);
};
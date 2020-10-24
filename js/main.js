$(document).ready(function() {

    new WOW().init();

    function scrollTo(div) {
        $('html, body').animate({
            scrollTop: $("#" + div).offset().top
        }, 500);
        // $('html, body').scrollTop($("#" + div).offset().top);

        if (div == 'intro') {
            window.location.hash = '';
        }
        else {
            window.location.hash = $("#" + div).attr("id");
        }
    };

    $( "a.scrollable" ).on('click', function(event) {
        scrollTo($(this).attr("href").substring(1));
    });

    $('.carousel').flickity({
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        lazyLoad: 2,
        fullscreen: true,
        // wrapAround: true,
        // pageDots: false
    });

    $('.collapse-button').on('click', function() {
        var name = $(this).attr('id').split('-')[0];
        var collapsible = $('#' + name + '-collapsible');
        collapsible.toggleClass('expanded');
        $(this).toggleClass('expanded');
        if (collapsible.hasClass('expanded')) {
            collapsible.css('max-height', collapsible[0].scrollHeight + 'px');
        } else {
            collapsible.css('max-height', '0px');
            scrollTo(name);
        }
    });

    // scrollTo(Url.hash() || 'intro');
});

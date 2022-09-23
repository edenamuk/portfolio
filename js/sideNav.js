$(document).ready(function() {

    // Side Navbar scroll effect
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            $('.sideNav a,.sideNav::before').css('color', 'white');
            $('.sideNav-scroll').fadeIn(1000);
        } else {
            $('.sideNav a,.sideNav::before').css('color', 'black');
            $('.sideNav-scroll').fadeOut(1000);
        }
    });

    // Side Navbar list hover effect
    $('.sideNav-list a').hover(function() {
            $(this).css('padding-left', '6px');
            $(this).find('span').fadeIn(500);
        },
        function() {
            $(this).css('padding-left', '0');
            $(this).find('span').fadeOut(200);
        })
});
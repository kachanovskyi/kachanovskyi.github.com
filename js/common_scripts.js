$(document).ready(function () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if (matchMedia('all and (orientation:landscape)').matches) {
            // console.log($(window).height());
            $('.navbar-collapse').css('min-height', $(window).height());
            $('#navbar').css('height', $(window).height());
            $('.nav.navbar-nav').css('overflow', 'visible');
            $('.nav.navbar-nav').css('max-height', 'none');

            var itemHeight = (($(window).height() - 50) / 5);
            var paddingTop = ((itemHeight - 18) / 2);
            // console.log(paddingTop);
            $('.nav.navbar-nav.navbar-right>li>a.menu-item').each(function () {
                $(this).css('height', itemHeight);
                $(this).css('padding-top', paddingTop)
            })
        }
    }
});

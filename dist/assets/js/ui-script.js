$(function(){
    //header 메뉴 클릭시
    $(".header-menu__link").click(function(){
        $(this).parent().siblings().removeClass("is-active");
        $(this).parent().toggleClass("is-active");
    })

    // left menu open hide, filter show hide
    $(".left-menu__button").click(function(){
        $(".left-menu").toggleClass("is-open");
        if($(".left-menu").hasClass("is-open")){
            $(".is-filter.is-filter__open .filter-lists").slideDown();
        } else {
            $(".is-depth2").removeClass("is-active");
            $(".filter-lists").slideUp();
        }
    });
    $(".left-menu__list.is-filter").find('.left-menu__link').click(function(){
        var filterOpenButton = $(this).children().find(".button-filter__show");
        $(".is-filter").toggleClass("is-filter__open");
        $(".filter-lists").slideToggle();
        //$(this).toggleClass("is-active");
    });

    // right menu open hide
    $(".right-menu__button").click(function(){
        $(".right-menu").toggleClass("is-open");
    });

    // toggle 메뉴 추가
    $('.menu-toggle__switch--input').change(function(){
		var checked = $('.menu-toggle__switch--input').is(':checked');
		
		if(checked){
            //alert();
            $('.menu-toggle__text').text('Skin Care');
            $('.left-menu__item--global').hide();
            $('.left-menu__item--skin').show();
        } else{
            $('.menu-toggle__text').text('Global menu')
            $('.left-menu__item--global').show();
            $('.left-menu__item--skin').hide();
        }
			
	});

})
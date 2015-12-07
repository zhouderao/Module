$(function() {
    // 左侧信息栏目鼠标滑过的显示
    $(".list").hover(function() {
        $(this).find(".lesson-list-show").show();
        $(this).css("border-right","2px solid green");
    }, function() {
        $(this).find(".lesson-list-show").hide();
        $(this).css("border-right","1px solid transparent");
    });

    // 当搜索文本框焦点
    $(".headsearch .search-text").focus(
        function() {
            $(".headsearch .hot-words").hide();
        }
    );

    // 当搜索文本框失焦点
    $(".headsearch .search-text").blur(
        function() {
            $(".headsearch .hot-words").show();
        }
    );


    $(".hot-lesson ul li").hover(function() {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var selectedIndex = $(this).index();
        var items = $(".lesson-list");
        items.hide();
        $(".hot-lessonbox").find(items[selectedIndex]).show();
    });


    $(".lesson-list ul li").hover(function() {
        $(this).find(".lesson-infor").addClass("lesson-hover");
        $(this).find(".lesson-infor").css("height", "137px");

        $(this).find("p").css({
            "height": "52px",
            "opacity": "1"
        });
        $(this).find("p").slideDown(100);
    }, function() {
        $(this).find(".lesson-infor").removeClass("lesson-hover");
        $(this).find(".lesson-infor").css("height", "88px");
        $(this).find("p").css({
            "height": "52px",
            "opacity": "0"
        });
        $(this).find("p").slideUp(100);
    });
});

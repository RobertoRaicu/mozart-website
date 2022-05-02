$(document).ready(function () {
    var closeHeight = "10em";
    var moreText = "Read More";
    var lessText = "Read Less";
    var duration = "1000";
    var easing = "linear";



    $(
        ".page-template-page_blog-php #content .entrymusic, .containermusic #content .entrymusic"
    ).each(function () {
        var current = $(this).children(".entry-contentmusic");
        current.data("fullHeight", current.height()).css("height", closeHeight);

        current.after(
            '<a href="javascript:void(0);" class="more-linkmusic closed">' +
            moreText +
            "</a>"
        );
    });

    var openSlider = function () {
        link = $(this);
        var openHeight = "100%";
        link
            .prev(".entry-contentmusic")
            .animate({ height: openHeight }, { duration: duration }, easing);
        link.text(lessText).addClass("open").removeClass("closed");
        link.unbind("click", openSlider);
        link.bind("click", closeSlider);
    };

    var closeSlider = function () {
        link = $(this);
        link
            .prev(".entry-contentmusic")
            .animate({ height: closeHeight }, { duration: duration }, easing);
        link.text(moreText).addClass("closed").removeClass("open");
        link.unbind("click");
        link.bind("click", openSlider);
    };

    $(".more-linkmusic").bind("click", openSlider);
});


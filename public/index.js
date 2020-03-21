document.addEventListener("DOMContentLoaded", event => {
    $("#event_toggle").click(function() {
        var active = $(".fold.active");
        console.log("blablabla");
        // if there is visible fold element on page (user already clicked at least once on link)
        if (active.length) {
            $(".fold.active").animate({ height: "0" }, 1000, function() {
                // this happens after above animations are complete
                $(this).removeClass("active");
            });
            // clicking for the first time
        } else {
            $("#hide_open")
                .addClass("active")
                .animate({ height: "250px" }, 1000);
        }
    });
});

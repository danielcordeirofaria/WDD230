document.addEventListener("DOMContentLoaded", function () {
    var eventBanner = document.getElementById("weekly-event-banner");
    var closeBtn = document.querySelector(".close-btn");

    function isAWeekdayValid() {
        var today = new Date();
        var dayOfWeek = today.getDay(); 
        return dayOfWeek >= 1 && dayOfWeek <= 3; 
    }

    function showBannerIfWeekday() {
        if (isAWeekdayValid()) {
            eventBanner.style.display = "block";
        } else {
            eventBanner.style.display = "none";
        }
    }

    function hideBanner() {
        eventBanner.style.display = "none";
    }

    closeBtn.addEventListener("click", function () {
        hideBanner();
    });

    showBannerIfWeekday();
});

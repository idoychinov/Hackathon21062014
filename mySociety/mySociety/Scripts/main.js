/// <reference path="libs/jquery-2.1.1.js" />
var MainJS = (function ($) {
    function loadStaticContent(userLoggedIn) {
        $("#wrapper").prepend("<header / >");
        $("#wrapper").append("<footer / >");

        $("#wrapper>header").load("header.html", onHeaderLoad);
        $("#wrapper>footer").load("footer.html");
        function onHeaderLoad() {
            loadUserSection(userLoggedIn);
            var showBtn = $('#show-log-in')
             .on('click', showLogIn);

            function showLogIn() {
                var logInForm = $('#log-in-form')
                    .removeClass('hidden');
                showBtn.addClass('hidden');
            }
        }
    }

    function loadUserSection(isLoggedIn) {
        var template = Handlebars.compile($("#user-section-template").html());

        if (isLoggedIn) {
            $("#user-section").html(template({ registered: true, user: "Пешо" }));
            addEvents("#exit-button", false);
        } else {
            $("#user-section").html(template({ registered: false }));
            addEvents("#log-in-button", true);
        }
        loadMainNav(isLoggedIn);

        function addEvents(buttonSelector, state) {
            $(buttonSelector).on("click", function () {
                loadUserSection(state);
                return false;
            });
        };
    }

    function loadMainNav(isLoggedIn) {
        var links = [
            { display: true, href: "signal.html", text: "Подай Сигнал", className: "signal-btn" },
            { display: true, href: "current-problems.html", text: "Помогни", className: "signal-btn" },
            { display: isLoggedIn, href: "your-signals.html", text: "Твойте Сигнали" },
            { display: isLoggedIn, href: "#", text: "Съобщения" }
        ],
        template = Handlebars.compile($("#main-nav-template").html());

        $("#main-nav").html(template({ links: links }));
    }

    function loadSlider() {
        $('#slider-section').load("slider-main.html");
    }

    return {
        loadStaticContent: loadStaticContent,
        loadSlider: loadSlider
    }
}(jQuery))
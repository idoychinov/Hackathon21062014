/// <reference path="libs/jquery-2.1.1.js" />
jQuery(document).ready(function ($) {
    loadUserSection(false);
    $("#wrapper").append($("<footer />")
        .append($("<ul />")
            .append($("<li />").text("За нас"))
            .append($("<li />").text("Проблеми")
                .append($("<ul />")
                    .append($("<li />").text("Текущи"))
                    .append($("<li />").text("Разрешени"))))
            .append($("<li />").text("Инициативи"))
            .append($("<li />").text("Правила за ползване"))
        ))


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
            { display: true, href: "index.html", text: "Начало" },
            { display: true, href: "signal.html", text: "Подай Сигнал" },
            { display: isLoggedIn, href: "your-signals.html", text: "Твойте Сигнали" },
        ],
        template = Handlebars.compile($("#main-nav-template").html());

        $("#main-nav").html(template({ links: links }));
    }
})
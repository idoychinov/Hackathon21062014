/// <reference path="libs/jquery-2.1.1.js" />
var MainJS = (function ($) {
    function loadStaticContent(userLoggedIn) {
        $("#wrapper").prepend($("<header />")
            .append($("<div />").attr("id", "logo").text("Somе logo here"))
            .append($("<h1 />").attr("id", "site-name").text("Site name here"))
            .append($("<div />").attr("id", "user-section"))
            .append($("<div />").attr("id", "main-nav"))
            );

        $("#wrapper").append($("<footer />")
            .append($("<ul />")
                .append($("<li />").append($("<a />").attr("href","about.html").text("За нас")))
                .append($("<li />").text("Проблеми")
                    .append($("<ul />")
                        .append($("<li />").append($("<a />").attr("href","current-problems.html").text("Текущи")))
                        .append($("<li />").append($("<a />").attr("href","solved-problems.html").text("Разрешени")))))
                .append($("<li />").append($("<a />").attr("href","initiatives.html").text("Инициативи")))
                .append($("<li />").append($("<a />").attr("href","terms.html").text("Правила за ползване")))
            ))

        loadStaticTemplates();
        loadUserSection(userLoggedIn);
        
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
            { display: true, href: "index.html", text: "Начало" },
            { display: true, href: "signal.html", text: "Подай Сигнал" },
            { display: isLoggedIn, href: "your-signals.html", text: "Твойте Сигнали" },
        ],
        template = Handlebars.compile($("#main-nav-template").html());

        $("#main-nav").html(template({ links: links }));
    }

    function loadStaticTemplates() {
        var userSectionTemplate = [
            '<script id="user-section-template" type="text/x-handlebars-template">',
            '{{#if registered}}',
            'Здравей, {{user}}',
            '<a id="profile-buttonn" href="#">Профил</a>',
            '<a id="exit-button" href="#">Изохд</a>',
            '{{/if}}',
            '{{#unless registered}}',
            '<label for="user-name">Потребителско име:</label>',
            '<input id="user-name" type="text" />',
            '<label for="user-password">Парола:</label>',
            '<input id="user-password" type="text" />',
            '<a id="log-in-button" href="#">Вход</a>',
            '<a id="register-button" href="#">Регистрация</a>',
            '{{/unless}}',
            '</script> '].join('\n'),
           mainNavTemplate = [
            '<script id="main-nav-template" type="text/x-handlebars-template">',
            '<ul>',
            '{{#each links}}',
            '{{#if display}}',
            '<li><a href="{{href}}">{{text}}</a></li>',
            '{{/if}}',
            '{{/each}}',
            '</ul>',
            '</script>'].join('\n');

        $(document.body).append(userSectionTemplate);
        $(document.body).append(mainNavTemplate);
    }

    function loadProblemsListTemplate() {
        var template = [
            '<script id="problems-list" type="text/x-handlebars-template">',
            '<div class="problemst-list-container">',
            '</div>',
            '</script>',
        ].join('\n')
    }

    return {
        loadStaticContent: loadStaticContent,
        loadProblemsListTemplate: loadProblemsListTemplate
    }
}(jQuery))
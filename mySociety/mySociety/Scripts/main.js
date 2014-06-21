/// <reference path="libs/jquery-2.1.1.js" />
var MainJS = (function ($) {
    function loadStaticContent(userLoggedIn) {
        $("#wrapper").prepend($("<header />")
            .append($("<div />").attr("id", "logo").append($("<img />").attr("src","").attr("alt","logo")))
            .append($("<a />").attr("id", "site-name").attr("href", "index.html").text("mySociety"))
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
            .append($("<span />").addClass("copyright").text("Team Golden Ages"))));

   

        loadStaticTemplates();
        loadUserSection(userLoggedIn);


        var showBtn = $('#show-log-in')
              .on('click', showLogIn);

        function showLogIn() {
            var logInForm = $('#log-in-form')
                .removeClass('hidden');
            showBtn.addClass('hidden');
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
            '<div id="log-in">',
            '<div id="log-in-form" class="hidden">',
            '<label for="user-name">Потребителско име:</label>',
            '<input id="user-name" type="text" />',
            '<label for="user-password">Парола:</label>',
            '<input id="user-password" type="text" />',
            '<a id="log-in-button" href="#">Влез</a>',
            '</div>',
            '<a id="show-log-in" href="#">Вход</a>',
            '<a id="register-button" href="#">Регистрация</a>',
            '</div>',
            '{{/unless}}',
            '</script> '].join('\n'),
           mainNavTemplate = [
            '<script id="main-nav-template" type="text/x-handlebars-template">',
            '<ul>',
            '{{#each links}}',
            '{{#if display}}',
            '<li class="{{className}}"><a href="{{href}}">{{text}}</a></li>',
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
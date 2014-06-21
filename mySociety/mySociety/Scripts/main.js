/// <reference path="libs/jquery-2.1.1.js" />
jQuery(document).ready(function ($) {
    loadUserSection(false);


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
        $mainNav = $("#wrapper>header>nav>ul");
        if (isLoggedIn) {
            $mainNav.append($("<li />"));
        }
        
    }
})
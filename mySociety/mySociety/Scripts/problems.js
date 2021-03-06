﻿window.onload = function () {
    var problemDetailsContainer,
        problemDetailsTemplate,
        problemsListContainer,
        problemsListTemplate,
        problems;
    problems = [{
        id: 1,
        date: "16.03.2014",
        image: "Resources/images/problems/beach.jpg",
        title: "Изхвърлен боклук",
        status: "Неприключен",
        user: 'LSvilenov',
        location: "Синеморец",
        summary: "Плажът на устието на река Валека в Синеморец е превърнат в сметище.",
        category: "Почистване",
        tags: ["боклук", "почистване", "море", "плаж"],
        finished: false
    }, {
        id: 2,
        date: "6.05.2014",
        image: "Resources/images/problems/bridge.jpg",
        title: "Блокиран мост",
        status: "Неприключен",
        user: 'SvetlaI',
        location: "Ловеч",
        summary: "Старият пешеходен мост над реката не може да бъде преминат заради изхвърлени чували.",
        category: "Почистване",
        tags: ["боклук", "почистване", "реки"],
        finished: false
    }, {
        id: 3,
        date: "17.09.2013",
        image: "Resources/images/problems/park.jpg",
        title: "Изпочупени пейки",
        status: "Неприключен",
        user: 'Пешо',
        location: "София",
        summary: "Пейките при кучешката градинка за изпочипени и имат нужда от боядисване.",
        category: "Почистване",
        tags: ["парк", "поправка"],
        finished: false
    }, {
        id: 4,
        date: "26.03.2014",
        image: "Resources/images/problems/river-1.jpg",
        title: "Нерегламентирано сметище",
        status: "Неприключен",
        user: 'IDoychinov',
        location: "В. Търново",
        summary: "Коритото на река Янтра при село Леденик се зиползва за сметище от местна фирма.",
        category: "Почистване",
        tags: ["боклук", "почистване", "река"],
        finished: false
    }, {
        id: 5,
        date: "14.05.2009",
        image: "Resources/images/problems/blocked-river.jpg",
        title: "Запушен канал",
        status: "Неприключен",
        user: 'Пешо',
        location: "Кресна",
        summary: "На завоя след село ... някой е изхвърлил голямо количество боклук, което заплашва да запуши реката.",
        category: "Почистване",
        tags: ["боклук", "почистване", "реки"],
        finished: false
    }, {
        id: 6,
        date: "16.03.2014",
        image: "Resources/images/problems/sea-1.jpg",
        title: "Замърсен плаж",
        status: "Неприключен",
        user: 'LSvilenov',
        location: "Тюленово",
        summary: "Плаж тюленово е заринат с боклуци.",
        category: "Почистване",
        tags: ["боклук", "почистване", "река"],
        finished: false
    }, {
        id: 7,
        date: "06.06.2014",
        image: "Resources/images/Success/bench-painting.jpg",
        title: "Разкрасяване на пейките в Западния парк",
        status: "Приключен",
        user: 'Пешо',
        location: "София",
        summary: "Екип от 7 доброволеца се събра и за един уикенд успя да лакира и боядиса 20 пейки по централната алея на Западния парк.",
        category: "Разкрасяване",
        tags: ["парк", "боядисване"],
        finished: true
    }, {
        id: 8,
        date: "16.03.2014",
        image: "Resources/images/Success/garbage-collection-1.jpg",
        title: "Почистване на Витоша",
        status: "Приключен",
        user: 'LSvilenov',
        location: "Тюленово",
        summary: "Плаж тюленово е заринат с боклуци.",
        category: "Почистване",
        tags: ["боклук", "почистване", "река"],
        finished: true
    }, {
        id: 9,
        date: "16.03.2014",
        image: "Resources/images/Success/garbage-collection-2.jpg",
        title: "Събиране на боклук в Стара Планина",
        status: "Приключен",
        user: 'LSvilenov',
        location: "Тюленово",
        summary: "Плаж тюленово е заринат с боклуци.",
        category: "Почистване",
        tags: ["боклук", "почистване", "река"],
        finished: true
    }, {
        id: 10,
        date: "16.03.2014",
        image: "Resources/images/Success/garden.jpg",
        title: "Засаждане на цветя",
        status: "Приключен",
        user: 'LSvilenov',
        location: "Тюленово",
        summary: "Плаж тюленово е заринат с боклуци.",
        category: "Почистване",
        tags: ["боклук", "почистване", "река"],
        finished: true
    }, {
        id: 11,
        date: "16.03.2014",
        image: "Resources/images/Success/planed-trees.jpg",
        title: "Засаждане на фиданки",
        status: "Приключен",
        user: 'LSvilenov',
        location: "Тюленово",
        summary: "Плаж тюленово е заринат с боклуци.",
        category: "Почистване",
        tags: ["боклук", "почистване", "река"],
        finished: true
    }, {
        id: 12,
        date: "20.05.2014",
        image: "Resources/images/Success/bautified-beach.jpg",
        title: "Почистен плаж",
        status: "Приключен",
        user: 'LSvilenov',
        location: "Силистар",
        summary: "Обществено отговорна фирма почисти плажът и след това служителите оформиха този надпис.",
        category: "Почистване",
        tags: ["боклук", "почистване", "плаж"],
        finished: true
    }];

    problemsListContainer = document.getElementById('problem-items-container');
    problemDetailsContainer = document.getElementById('problem-details-container');

    problemsListTemplate = Handlebars.compile((document.getElementById('problems-list-template')).innerHTML);
    problemDetailsTemplate = Handlebars.compile((document.getElementById('problem-details-template')).innerHTML);

    //empty the problemsListContainer
    while (problemsListContainer.firstChild) {
        problemsListContainer.removeChild(problemsListContainer.firstChild);
    }

    problemsListContainer.innerHTML = problemsListTemplate({
        problems: problems
    });
    //initially show the first problem in the list
    //problemDetailsContainer.innerHTML = problemDetailsTemplate(problems[0]);


    function findParentOfType(el, type, beforeEl) {
        var node;
        beforeEl = beforeEl || document.body;
        node = el;
        while (!(node instanceof type && node !== beforeEl)) {
            node = node.parentNode;
        }
        if (node instanceof type) {
            return node;
        }
        return null;
    }

    function findById(id, items) {
        var item,
            i;
        for (i = 0; i < items.length; i += 1) {
            item = items[i];
            if (item.id === id) {
                return item;
            }
        }
        return null;
    }

    function showproblemDetails(id) {
        var problem;
        problem = findById(id, problems);
        problemDetailsContainer.innerHTML = problemDetailsTemplate(problem);
    }
    problemsListContainer.addEventListener('mouseover', function (ev) {
        var problemItem, target;
        ev = ev || window.event;
        target = ev.target;
        ev.preventDefault();
        problemItem = findParentOfType(target, HTMLAnchorElement, problemsListContainer);
        if (problemItem === null) {
            return false;
        }
        showproblemDetails(Number(problemItem.getAttribute('data-id')));
    });
};
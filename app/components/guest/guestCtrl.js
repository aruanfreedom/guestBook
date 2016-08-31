'use strict';

angular.module('guestApp').controller('guestCtrl', function($scope, $mdSidenav, $log) {

    var imagePath = 'img/person-flat.png';

    $scope.data = [
        {
            id : 0,
            face : imagePath,
            position: 'Фронтенд-разработчик',
            who: 'Аруан',
            when: '18:21:17',
            comment: "Работаю в компании уже 3 года. Все условия для продуктивной работы. Коллектив просто супер!"
        },
        {
            id : 1,
            face : imagePath,
            position: 'Фронтенд-разработчик',
            who: 'Айгерим',
            when: '18:21:17',
            comment: "Работаю в компании уже 3 года. Все условия для продуктивной работы. Коллектив просто супер!"
        },
        {
            id : 2,
            face : imagePath,
            position: 'Фронтенд-разработчик',
            who: 'Аруан',
            when: '18:21:17',
            comment: "Работаю в компании уже 3 года. Все условия для продуктивной работы. Коллектив просто супер!"
        },
        {
            id : 3,
            face : imagePath,
            position: 'Фронтенд-разработчик',
            who: 'Аруан',
            when: '18:21:17',
            comment: "Работаю в компании уже 3 года. Все условия для продуктивной работы. Коллектив просто супер!"
        }
    ];

    $scope.form = {
        id: Math.floor(Math.random() * 10000),
        face: imagePath,
        when: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    };

    $scope.addComment = function (form) {

        if (typeof $scope.form.who !== 'undefined' &&
            typeof $scope.form.position !== 'undefined' &&
            typeof $scope.form.comment !== 'undefined') {

            $scope.form = {
                id: Math.floor(Math.random() * 10000),
                face: imagePath,
                when: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
            };

            $scope.data.push(form);
            console.log($scope.data);
        }
    };

    $scope.edit = {
        who: null,
        position: null,
        comment: null
    };

    $scope.editing = function (id, formData) {
        $scope.edit.id = formData.id;
        $scope.edit.who = formData.who;
        $scope.edit.position = formData.position;
        $scope.edit.comment = formData.comment;
        $mdSidenav('right').toggle();
    };

    $scope.editComment = function (formEdit) {
        for (var data = $scope.data.length - 1; data >= 0; data--){
            if ( formEdit.id === $scope.data[data].id ) {
                $scope.data[data].who = formEdit.who;
                $scope.data[data].position = formEdit.position;
                $scope.data[data].comment = formEdit.comment;
                $scope.data[data].when = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
            }
        }
        $mdSidenav('right').close();
    };

    $scope.del = function (index) {
        $scope.data.splice(index, 1)
    };

    $scope.load = 5;
    $scope.visibleLoad = true;

    $scope.moreLoad = function (data) {
        if ( $scope.data.length === data.length ) {
            $scope.visibleLoad = false;
        }
        $scope.load = $scope.load + $scope.load;
    };

});
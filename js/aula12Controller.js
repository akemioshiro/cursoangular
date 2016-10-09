// injetando dependencia ngSanitize
var app = angular.module("app", ['ngSanitize']);

// outra forma de criação de controllers
function Aula12Controller($scope, $filter) {
    $scope.mostrar = true;
    $scope.variavelHtml = "<h1> Seja bem vindo ao nosso site</h1>";
    $scope.minhaClass = "";
    $scope.variavelCloak = "teste teste teste teste  teste teste teste teste teste";
    $scope.minhaFoto = "foto1.jpg";
}
app.controller("Aula12Controller", Aula12Controller);
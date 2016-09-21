//declaração da aplicação, declaração de um modulo
// dentro de [] injeta dependencias, algo que nao eh nativo do angular, pode ser um plugin
var appSaudacao = angular.module("appSaudacao", []);

// incrementando o modulo, criando um filtro
appSaudacao.filter("ola", function () {
    return function (nome) {
        return "Olá " + nome + "!";
    }
});
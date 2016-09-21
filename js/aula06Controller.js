// nome do controller e uma function, depois injetar uma var scope (var do angular que vai ter todas var e funções)
app.controller("aula06Controller", function ($scope) {
    $scope.nome = "Curso Angular JS DevMedia";
    
    $scope.olaMundo = function (nome) {
        alert("Olá Mundo " + nome + " !");
    }
});

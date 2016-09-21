// outra forma de criação de controllers
function Aula10Controller($scope, $filter) {
    console.log("Iniciou o controller");
    console.log($filter('retornaOi')("Patricia"));

    $scope.pessoa = {
        nome: "Devmedia",
        idade:31
    };

}
app.controller("Aula10Controller", Aula10Controller);
app.controller("aula07Controller", function ($scope) {
    // var do angular que concentra variaveis e funcoes, sera disponivel na camada de vsualizaçãp
    $scope.nomes = ["Patricia", "Daniel", "Maria", "Tiago", "Marcela", "Karoline"]; 

    // array de objetos
    $scope.pessoas = [];
    $scope.pessoas.push(
        { nome: "Pedro", idade:31, status: false }
    );
    $scope.pessoas.push(
        { nome: "Mateus", idade: 31, status: false }
    );
    $scope.pessoas.push(
        { nome: "Joao", idade: 50, status: true }
    );

    console.log($scope.pessoas);

    $scope.adicionaPessoas = function()
    {
        var nome = document.getElementById("nomepessoa");
        var idade = document.getElementById("idadepessoa");

        $scope.pessoas.push(
                { nome: nome.value, idade: idade.value, status: true }
        );

        nome.value = "";
        idade.value = "";
    }

});
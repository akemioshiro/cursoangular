app.controller("aula08Controller", function ($scope) {

    $scope.estados = ["ES","SP", "RS", "RJ", "SC", "MG"];

    $scope.pessoa = novaPessoa();
    $scope.pessoas = [];
    
    $scope.salvarPessoa = function (pessoa) {
        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();

        // como se os campos nao estivessem com interação, removem a interação
        $scope.frm.$setUntouched();

        //voltando a situação original do formulario
        $scope.frm.$setPristine();
    };
    
});

function novaPessoa()
{
    return{
        nome: "",
        email:"",
        sexo: "f",
        estado:"RJ"
    };
}
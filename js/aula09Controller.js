// uma unica funcionalidade (service) esta disponibilizada para duas controllers
// injeção de service e factory fabrica de objetos
app.controller("aula09Ctrl1Controller", ['$scope', 'operacoes', 'Pessoa', function ($scope, operacoes, Pessoa) {

    $scope.pessoa = new Pessoa();

    console.log("Entrou no controle aula 09 1");

    console.log(operacoes.somar(10, 6));

    $scope.teste = "testando var em controller";
}]);

app.controller("aula09Ctrl2Controller", ['$scope', 'operacoes','Pessoa', function ($scope, opercoes,Pessoa) {

    $scope.outrapessoa = new Pessoa();
    $scope.outrapessoa.nome = "devmedia";

    console.log("Entrou no controller aula 09 2");
    
    console.log(opercoes.subtrair(20,15));
}]);
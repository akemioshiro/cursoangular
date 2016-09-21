// nome do serviço: operacoes, pode conter metodos
app.service("operacoes", function () {

    console.log("criou o service operacoes");


    // this faz referencia ao objeto operacoes
    this.somar = function (valor1, valor2) {
        return valor1 + valor2;
    };

    this.subtrair = function (valor1, valor2)
    {
        return valor1 - valor2;
    };

});
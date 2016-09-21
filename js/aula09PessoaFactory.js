// cria objetos e disponibiliza
app.factory("Pessoa", function () {

    console.log("Criou o objeto pessoa")

    var Pessoa = function () {

        console.log("Instanciou o objeto pessoa");

        this.nome = "Pedro",
        this.idade = 31,
        this.cumprimentar = function ()
        {
            return "Olá " + this.nome + " !";
        };
    };
    return Pessoa;
});
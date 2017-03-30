app.controller("Aula13Controller", function ($scope) {

});

// nome da diretiva
app.directive("ngOla", function () {
    return  {
    	// A significa que será renderizado num formato de html ex: <div ng-ola></div>
    	// E em elemento personalizado ex: <ng-ola></ng-ola>
    	// C formato de classe ex: <div class="ng-ola"></ng-ola>
        restrict: 'AEC',

        // scope local
        scope:{
            ngNome:"@" // referencia ao atributo do elemento
        },

        template:'<h1>Olá {{ngNome}}</h1>',

        // adiciona funcionalidade
        controller: ['$scope', function($scope){

        	$scope.digaOla = function(nome)
        	{
        		alert("ola " + nome + " !");
        	}
        }],

        // tem acesso ao dom da página, chama funcionalidade dentro do controller
        link: function(scope, iElement, iAttrs){
        	console.log(iElement);
        	console.log(iAttrs);
        	scope.digaOla(iAttrs.ngNome);
        }
    }
});
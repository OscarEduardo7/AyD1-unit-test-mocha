const assert = require('chai').assert;
const app = require('../201602469');

// Resultados
describe('201602469', function(){

  describe('cuadrado()', function(){
    it('Deberia de devolver un tipo entero', function(){
        let resultado = app.cuadrado(2)
        assert.typeOf(resultado, 'number');
      });

    it('Cuadrado deberia de devolver 16 como resultado', function(){
        let resultado = app.cuadrado(4);
        assert.equal(resultado, 16);
    });
      
  });
  

  describe('factorial()', function(){

    it('Factorial debe de devolver un numero como resultado', function(){
        let resultado = app.factorial(3);
        assert.typeOf(resultado, 'number');
    });

    it('Factorial debe de devolver 6 como resultado', function(){
        let resultado = app.factorial(3);
        assert.equal(resultado, 6);
    });
  });


  describe('mayor()', function(){
    it('mayor deberia de devolver 0 como resultado', function(){
        let resultado = app.mayor(1,1);
        assert.equal(resultado, 0);
    });
  });

  describe('primerLetra()', function(){
    it('deberia de ser tipo string', function(){
        let result = app.primerLetra("Hola mundo")
        assert.typeOf(result, 'string');
    });

  });

  describe('conPalabra()', function(){
    it('deberia de ser de devolver la frase Hola mundo', function(){
        let resultado = app.conPalabra('hola','mundo')
        assert.equal(resultado, 'hola mundo');
    });

  });


});

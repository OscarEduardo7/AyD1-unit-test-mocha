module.exports = {
    // Funcion 1
    cuadrado: function(num){
        return num * num
    },    

    // Funcion 2
    factorial: function(num){
        return num < 2 ? 1 : num * this.factorial(num - 1);
    },

    // Funcion 3
    mayor: function(num1, num2){
        if(num1 > num2){
            return num1
        }else if(num2 > num1){
            return num2
        }else{
            return 0
        }
    },

    // Funcion 4
    primerLetra: function(palabra) {
        return palabra.substr(0,1)
    },

    // Funcion 5
    conPalabra: function(p1, p2){
        r = p1.concat(' ',p2)
        return r
    }
  
  }
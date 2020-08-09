# URL
https://julsarmiento.github.io/javaScript-Class-practice.github.io/

# Challenge 

1. Crea una clase Aviones como la siguiente:

    class Aviones {
    
    }

2. Crea tu primer objeto a partir de aviones: a319 = new Aviones 

3. Crea tu primera propiedad y asígnale un valor: a319.peso = 75000;


Hasta aquí nada nuevo, ¿cierto? Comienza a crearle métodos a tu clase:


    class Aviones {
        saludo(){
            return “Hola a todos”;
    }
    }

    a319 = new Aviones
    console.log(a319.saludo()) //Imprime “Hola a todos”
    a340 = new Aviones
    console.log(a340.saludo()) //Imprime “Hola a todos”


Es muy común tener que acceder a alguna propiedad desde adentro del objeto. Por ejemplo, si a tu saludo quisieras añadirle el nombre del avión, deberías acceder al nombre para concatenarlo en el saludo. La palabra reservada this te permitirá acceder a las propiedades en la definición de la clase:


    class Aviones {
        saludo(){
            return “Bienvenidos al avión ” + this.nombre;
    }
    }

    a319 = new Aviones
    a319.nombre = “A319”;
    console.log(a319.saludo()); //Imprime “Bienvenidos al avión A319”
    a340 = new Aviones
    a340.nombre = “A340”;
    console.log(a340.saludo()); //Imprime “Bienvenidos al avión A340”


4. Observa el código fuente que te mostramos en la bitacora. Allí encontrarás cómo creamos una clase “Aviones” con las      funcionalidades de acelerar y frenar. Luego, creamos 2 objetos. Uno para el avión A319 y otro para A340. Este último tiene más poder de aceleración y frenado y al ejecutar el método “acelerar”, la velocidad del avión se incrementará más rápidamente.

5. Toma alguna de las propiedades y métodos que creaste en tu clase “Aviones” y genera un objeto a partir de la definición de tu clase.
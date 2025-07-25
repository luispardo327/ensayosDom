   // cambiar el titulo
    let titulo = document.getElementById('miTitulo');
    titulo.innerText = "Bienvenido a la manipulación del DOM";

    //cambiar el texto 
    let cambiarParrafo = document.getElementById('parrafo')
    let arr = [
      'La practica hace al maestro',
      'No te rindas',
      'A programar se aprende programando '
    ]
    function alHacerClic(){
      switch (parrafo.innerText){
        case arr[0]:
          parrafo.innerText = arr[1]
          break
          case arr[1]:
          parrafo.innerText = arr[2]
          break
          case arr[2]:
          parrafo.innerText = arr[0]
          break
          default:
            parrafo.innerText = arr[0]
      }
    }
    cambiarParrafo.addEventListener('click', alHacerClic)

    // cambiar color de cada cuadro 


    let cuadro1 = document.getElementById('cuadroOne');
    let cuadro2 = document.getElementById('cuadroTwo');

    cuadro1.addEventListener('click', cambiarColorCuadroOne);
    cuadro2.addEventListener('click', cambiarColorCuadroTwo);
   

    function cambiarColorCuadroOne(){
        let color1 = cuadro1.style.backgroundColor;
        let newColor = adquirirColor(color1);
        cuadro1.style.backgroundColor = newColor;
    }


      function cambiarColorCuadroTwo(){
        let color2 = cuadro2.style.backgroundColor;
        let newColor = adquirirColor(color2);
        cuadro2.style.backgroundColor = newColor;
    }

    function adquirirColor(color){
        if (color === 'gray'){
            return 'coral'
        }else {
            return 'gray'
        }
    }



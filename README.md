# carrusel

Este es un carrusel simple hecho con javascript y css no se necesita ninguna dependencia externa. Se adapta a cualquier dispositivo, su contenido puede variar y funcionar con imágenes, texto, o ambas.


## example


**html**

```
<div class="carrusel">
    <div class="items">
        <div class="items__item">
            TU CONTENIDO
        </div>
        <div class="items__item">
            TU CONTENIDO
        </div>
        <div class="items__item">
            TU CONTENIDO
        </div>
        <div class="items__item">
            TU CONTENIDO
        </div>
    </div>
    <div class="arrows">
        <button id="arrows__btn-left"><img width="24px" height="24px" src="./assets/img/icons/chevron_left-24px.svg" alt=""></button>
        <button id="arrows__btn-right"><img width="24px" height="24px" src="./assets/img/icons/chevron_right-24px.svg" alt=""></button>
    </div>
    <div class="circles">
    </div>
</div>

```


**js**

importamos el archivo carrusel.js

Creamos una nueva instacia ```new Carrusel(param,param)```

1. primer párametro: el elemento padre en este caso .carrusel *puede tener otro nombre de clase a execepción de los hijos*.

2. segundo párametro: el temporizador que va a tener el carrusel, cada vez a cambiar a la siguiente imagen, si se deja en **false** siempre quedara estático y funcionara con las flecha o círculos.

```
<script src="./assets/js/carrusel.js"></script>
<script>
    
    document.addEventListener('DOMContentLoaded', () => {
        const carruselElement = document.querySelector('.carrusel')

        const carrusel = new Carrusel(carruselElement, 4000); //4s       

    })
 
</script>



## Carrusel de Imágenes

En caso de que vayas hacer un contenido de solo imagen te recomiendo crear cada item de imagen de la siguiente manera, siguiendo los pasos anteriores

```
<div class="items__item">
    <figure class="items__item-figure">
        <img width="100%" height="100%" src="tu url" alt="">
    </figure>
</div>

```


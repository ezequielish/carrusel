class Carrusel{
    constructor(el, timer){
        this.el = el
        this.itemsContainer = this.el.querySelector('.items') //contenedor de los items del carrusel
        this.btnLeft = this.el.querySelector('#arrows__btn-left') //boton de flecha
        this.btnRight = this.el.querySelector('#arrows__btn-right') //boton de flecha
        this.itemCircleContainer = this.el.querySelector('.circles') //contendor de circulos que representa un item
        this.itemActive = 1 //items activo
        this.itemsTotal = 0 //total de items que se van a iterar en el carrusel
        this.circleColor = '#191919'//color de fondo de circulos
        this.size = 0 //tamaño del conetendor de los items
        this.timer = parseInt(timer) 
        this.run()
    }

    /**
    * Esta funcion se encarga de mover el carrusel
    **/
    scrollTo(xMove){
        this.itemsContainer.scrollTo({
            top: 0,
            left: xMove,//lleva el scroll al item que este activo
            behavior: 'smooth'
        });  
    }

    /**
    * Esta funcion maneja cuando el contenedor carrusel hace resize para que sea responsive
    **/  
    handleSize(){

        this.size = this.itemsContainer.clientWidth
        this.scrollTo(this.size * (this.itemActive - 1)) //lleva el scroll al item que este activo
    }
 

    /**
    * Esta funcion maneja la creación de los item circulares
    **/  
    createItenCircle(){
        this.handleSize() //confirmamos el tamaño antes de comenzar          
        for (let index = 0; index < this.itemsTotal; index++) {
            this.itemCircleContainer.innerHTML+= `<div data-id=${(index + 1)}></div>` // colocamos los circulos del numero de imagenes
        }  
        this.printCircle()
    }

    /**
    * Esta funcion maneja cuando se pinta un item circular
    **/  
    printCircle(){
        const itemsCircle = this.itemCircleContainer.querySelectorAll('div')             
        itemsCircle.forEach(e => {//quitamos el color a todos
            e.style.background = 'none'
        })
                    
        this.itemCircleContainer.children[this.itemActive - 1].style.background = this.circleColor // le colocamos el color al activo
    }

    /**
    * Esta funcion maneja el evento click en las flechas
    **/
    eventLeft(){
        
       if(this.itemActive == 1){
        this.itemActive = this.itemsTotal
       }else{
        this.itemActive =  this.itemActive - 1 
       }

        this.printCircle()
        this.scrollTo(this.size * (this.itemActive - 1)) //lleva el scroll al item que este activo

    }

    /**
    * Esta funcion maneja el evento click en las flechas
    **/
    eventRight(){
        
        if(this.itemActive == this.itemsTotal){
         this.itemActive = 1
        }else{
         this.itemActive =  this.itemActive + 1 
        }

        this.printCircle()
        this.scrollTo(this.size * (this.itemActive - 1)) //lleva el scroll al item que este activo

     }

    /**
    * Esta funcion maneja el evento click en los items circulares
    **/
     eventCircle(itemActive){
        this.itemActive = itemActive
        
        this.printCircle()

        this.scrollTo(this.size * (this.itemActive - 1)) 
     }

    run(){
        const _this = this
        this.itemsTotal = this.itemsContainer.children.length//total de items que se van a iterar en el carrusel
        this.createItenCircle()

        if(!isNaN(this.timer)){
            const timer = (this.timer < 1500) ? 2500 : this.timer
                setInterval(() => {
    
                    if(this.itemActive == this.itemsTotal){
                        this.scrollTo(0)
                        this.itemActive = 1                    
                    }else{
                        this.scrollTo((this.size * this.itemActive))
                        this.itemActive = this.itemActive + 1                
                    }
                    this.printCircle()
                }, timer);            
        }
        
        //evento si se hace click en un circulo de los items        
        this.itemCircleContainer.querySelectorAll('div').forEach(element => {
            element.addEventListener('click', (e) => {
                this.eventCircle(parseInt(e.target.dataset.id))
            })
        });
    
        this.btnLeft.addEventListener('click', () => {
            this.eventLeft()
        })

        this.btnRight.addEventListener('click', () => {
            this.eventRight()
        })

        //Observa si el contenedor principal cambia de tamaño
        const observer = new window.ResizeObserver(function(entries) {  
            _this.handleSize()
        });
        observer.observe(this.el); // le pasamos el elemento al observe
    }
}
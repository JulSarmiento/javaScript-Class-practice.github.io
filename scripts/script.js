const sayHi = document.querySelector('.btn-say-hi');
const saySpeed = document.querySelector('.btn-show-speed')
const results = document.querySelector('.game-result-content');
const sayflightTime = document.querySelector('.btn-show-timeFlight')

class Airplanes {
    constructor(flight, name, speed, capacity, crew) {
        this.flight = flight
        this.name = name
        this.speed = speed
        this.capacity = capacity
        this.crew = crew
    }

    saludo(){
        return `<p class="text" >Bienvenidos al vuelo ${this.flight} en el avión ${this.name}. Hoy nos acompaña nuestra tripulación, que esta compuesta por ${this.crew} profesionales que lo atenderan con gusto.</p>`;
    }

    showSpeed() {
        return `<p class="text">La velocidad máxima que alcanzaremos es ${this.speed} km/h</p>`
    }

    showtimeFlight() {
        const disntanceKm = 1400; 
        const time = disntanceKm / this.speed;
        return `<p class="text">El tiempo total del vuelo es de ${time} horas.</p>`
    }
    
}

const a319 = new Airplanes(123, 'a319', 350, 450, 20); 


sayHi.addEventListener('click', () => {
    results.innerHTML = a319.saludo()
})

saySpeed.addEventListener('click', () => {
    results.innerHTML = a319.showSpeed();
})

sayflightTime.addEventListener('click', () => {
    results.innerHTML = a319.showtimeFlight()
})



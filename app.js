
let input = document.querySelector('#numeroHeroe');
let form = document.querySelector('#formularioHero');
let nombre = document.querySelectorAll('.nombre')
let coneccion = document.querySelector('.conecciones')
let publicacion = document.querySelector('.publicado')
let ocupacion = document.querySelector('.ocupacion')
let primeraAparicion = document.querySelector('.primera')
let altura = document.querySelector('.altura')
let peso = document.querySelector('.peso')
let alianza = document.querySelector('.alianzas')
let foto = document.querySelector('.rounded')
//let nomEstadistica = document.querySelector('nom2')

form.addEventListener('submit', async function(ev){
    ev.preventDefault()
    let numero = input.value
    console.log(numero);
    // llamar a la api
    let heroe = await fetch (`https://superheroapi.com/api.php/${clave}/${numero}`)
    heroe = await heroe.json() // se desempaqueta
    
    nombre.textContent = `${heroe.name}`
    coneccion.textContent = `${heroe.connections['group-affiliation']}` 
    publicacion.textContent= `${heroe.biography.publisher}`
    ocupacion.textContent = `${heroe.work.occupation}`
    primeraAparicion.textContent = `${heroe.biography['first-appearance']}` 
    altura.textContent = `${heroe.appearance.height.map(altura => altura + '  ')}`
    peso.textContent = `${heroe.appearance.weight.map(peso => peso + '  ')}`
    alianza.textContent = `${heroe.biography.aliases.map( alia => alia + ' ')}`
    foto.src = `${heroe.image.url}`
    //nomEstadistica.textContent = `${heroe.name}`
})

// estadisticas

window.onload = function () {

    let inteligencia = `${heroe.powerstats.intelligence}`

    let heroe = await fetch (`https://superheroapi.com/api.php/${clave}/${numero}`)
    heroe = await heroe.json() // se desempaqueta
    

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Estadisticas de poder para"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: 26, name: "Inteligencia", exploded: true },
                { y: 20, name: "Fuerza" },
                { y: 5, name: "Durabilidad" },
                { y: 3, name: "Rapidez" },
                { y: 7, name: "Durabilidad" },
                { y: 17, name: "Poder" },
                { y: 22, name: "combat"}
            ]
        }]
    });
    chart.render();
    }
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    
    }
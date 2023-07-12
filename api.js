function graficar(peso, altura) {
    var data = [
        {
            x: [0.1, peso, 950],
            y: [0.1, altura, 20],
            mode: 'markers',
            text: ['Flabébé', 'Tu pokemón', 'Eternatus',],
            marker: {
                size: [10, 35, 85,],
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(93, 164, 214)'],
                symbol: ['circle', 'cross', 'circle'], 

            }
        }
    ];

    var layout = {
        title: 'Tamaño del pokemon',
        xaxis: {
            title: 'Peso en kilogramos'
        },
        yaxis: {
            title: 'Altura en metros'
        },


        plot_bgcolor: 'rgba(0,0,0,0)', //eliminar el fondo de las gráficas
        paper_bgcolor: 'rgba(0,0,0,0)',
        margin: {
            l: 50, //Left margin
            r: 50, //Right margin
            b: 90, //Bottom margin
            t: 50, //Top margin
            //pad: 4, //Padding between content and border
        }
    };

    Plotly.newPlot('graphic_1', data, layout);
}

function consumir() {
    var endPoint = document.getElementById('endPoint').value;

    // Llamado a la API graphic_1
    fetch(endPoint)

        // Promesa cuando se cumple o cuando la respuesta es exitosa
        .then(function (respuesta) {
            return respuesta.json();
        })

        // Promesa recibe los datos en formato JSON
        .then(function (datos) {
            var peso = datos.weight;
            var altura = datos.height;
            var nombre = datos.name;

            peso = (peso / 10).toFixed(1);
            altura = (altura / 10).toFixed(1);
            nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
            
            
            graficar(peso, altura);
            console.log(datos)
        })
}

const myCollapseEl = document.querySelector('#all-graphics') //para eliminar las instrucciones

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("instructions").style.display = "none";
    // Action to execute once the collapsible area is expanded
})
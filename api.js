function graficar(peso, altura) {
    var data = [
        {
            x: [0.1, peso, 950],
            y: [0.1, altura, 20],
            mode: 'markers',
            text: ['Flabébé', 'Tu pokemón', 'Eternatus',],
            marker: {
                size: [10, 35, 85,],
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(93, 164, 214)'],
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

// Gráfica tipo scatter plot con experiencia base (mínimo: 20 puntos de experiencia, máximo: 255 o 608 según la generación)
function graficarScatter(experiencia) {
    var trace1 = [
        {
            x: [experiencia],
            y: [0, 100, 200, 300, 400, 500, 600, 700],
            mode: 'markers',
            //type: 'scatter',
            symbol: 'diamond'
        }
    ];

    var layout = {
        title: 'Experiencia base',
        xaxis: {
            title: 'Pokémon',
        },
        yaxis: {
            title: 'Cantidad de experiencia base',
        }
    };

    Plotly.newPlot('graphic_2', trace1, layout);
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
            var experiencia = datos.base_experience;
            var pokemonName = document.getElementById('card-title')

            peso = (peso / 10).toFixed(1);
            altura = (altura / 10).toFixed(1);
            nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

            var nuevaImg = document.getElementById("card_2");
            var img = datos.sprites.front_default;
            nuevaImg.innerHTML = `<img id="img" src="${img}">`


            // var imgContainer = document.getElementById('img');
            // var newImageSrc = img;
            // var newImgElement = `<img id="img" src="${img}">`;
            // newImgElement.innerHTML = img;

            pokemonName.innerHTML = nombre


            graficar(peso, altura);
            graficarScatter(experiencia);
            graficarBarraV(altura);
            graficarBarraH(peso);
            console.log(datos)
            // alert(img)
        })
}

// Gráfica tipo scatter plot con experiencia base (mínimo: 20 puntos de experiencia, máximo: 255 o 608 según la generación)
function graficarScatter(experiencia) {
    var trace1 = [
        {
            x: [experiencia],
            y: [0, 100, 200, 300, 400, 500, 600, 700],
            mode: 'markers',
            type: 'scatter',
            marker: {
                symbol: 'diamond',
                size: 50
            }
        }
    ];

    var layout = {
        title: 'Experiencia base',
        xaxis: {
            title: 'Pokémon',
        },
        yaxis: {
            title: 'Cantidad de experiencia base',
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

    Plotly.newPlot('graphic_2', trace1, layout);
}

// Gráfica de barra vertical con altura del pokémon
function graficarBarraV(altura) {
    var data3 = [
        {
            x: ['Cutiefly', 'Tu Pokémon', 'Eternamax Eternatus'],
            y: [0.1, altura, 100],
            type: 'bar',
            marker: {
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(93, 164, 214)'],
            }

        }
    ];
    var layout = {
        title: 'Altura',
        xaxis: {
            title: 'Pokémon',
        },
        yaxis: {
            title: 'Altura en metros',
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
    Plotly.newPlot('graphic_3', data3, layout);
}

// Gráfica de barra horizontal con peso del pokémon
function graficarBarraH(peso) {
    var data4 = [
        {
            type: 'bar',
            x: [0.2, peso, 950],
            y: ['Cutiefly', 'Tu Pokémon', 'Eternamax Eternatus'],
            orientation: 'h',
            marker: {
                color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(93, 164, 214)'],
            }
        }
    ];
    var layout = {
        title: 'Peso',
        xaxis: {
            title: 'Pokémon',
        },
        yaxis: {
            title: 'Peso en kilogramos',
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
    Plotly.newPlot('graphic_4', data4, layout);
}

const myCollapseEl = document.querySelector('#all-graphics') //para eliminar las instrucciones

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("instructions").style.display = "none";
    // Action to execute once the collapsible area is expanded
})

const card = document.getElementById
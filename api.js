function graficar(personas, calificacion) {
    var data = [
        {
            x: personas,
            y: calificacion,
            type: 'scatter',
        }
    ];

    var layout = {
        plot_bgcolor: 'rgba(0,0,0,0)', //eliminar el fondo de las gráficas
        paper_bgcolor: 'rgba(0,0,0,0)',
        margin: {
            l: 50, //Left margin
            r: 50, //Right margin
            b: 50, //Bottom margin
            t: 50, //Top margin
            pad: 4, //Padding between content and border
        }
    };

    Plotly.newPlot('graphic_1', data, layout);
}

function consumir() {
    var endPoint = document.getElementById('endPoint').value;

    // Llamado a la API
    fetch(endPoint)

        // Promesa cuando se cumple o cuando la respuesta es exitosa
        .then(function (respuesta) {
            return respuesta.json();
        })

        // Promesa recibe los datos en formato JSON
        .then(function (datos) {
            var calificacion = [];
            var personas = [];
            for (var i = 0; i < datos.length; i++) {
                if ((datos[i].rating['rate'] != undefined) && (datos[i].rating['count'] != undefined))
                    personas.push(datos[i].rating['count']);
                calificacion.push(datos[i].rating['rate']);
            }
            graficar(personas, calificacion);
            console.log(datos)
            // alert(calificacion)
        })
}

// Lectura de varios pokémon a la vez
//let URL = "https://pokeapi.co/api/v2/pokemon/";
//for(let i =1; i <= 10; i++){
//   fetch(URL + i)
//    .then((response) => response.json())
//   .then(data => traerPokemon(data))
//}

// Concatenación de los tipos de los pokémon solicitados al mismo tiempo
//function traerPokemon(pokeT){
//    let types = pokeT.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
//    types = types.join('');
//    console.log(types) 
//}

// Gráfica treemap, a editar, de los tipos de pokémon
//function graficarTM(tipo, types){   //Cambiar parámetros
//    var labels = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"];
//    var parents = ["Tipo"];
//    var data2 = [
//        {
//        type: "treemap",
//        labels: labels,
//        parents: parents,
//        }
//    ];
//    var layout = {
//        treemapcolorway: ["blue", "red"],
//       plot_bgcolor: 'rgba(0,0,0,0)',
//            paper_bgcolor: 'rgba(0,0,0,0)',
//            margin: {
//                l: 50,
//                r: 50,
//                b: 50,
//                t: 50,
//                pad: 4,
//            }   
//    };     
//Plotly.newPlot('myDiv', data2);
//}

// Gráfica tipo scatter plot con experiencia base (mínimo: 20 puntos de experiencia, máximo: 255 o 608 según la generación)
function graficarBurbuja(){
    var trace1 = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        symbol: 'diamond'
        }
    };

    var data2 = [trace1];

    var layout = {
        title: 'Experiencia base',
        xaxis: {
            title: 'Número de Pokémon',
        },
        yaxis: {
            title: 'Cantidad de experiencia base',
        }
        showlegend: false,
        height: 600,
        width: 600
    };

    Plotly.newPlot('myDiv', data2, layout);
}

// Gráfica de barra vertical con altura del pokémon
function graficarBarraV(){
    var data3 = [
        {
        x: ['Cutiefly', 'Tu Pokémon', 'Eternamax Eternatus'],
        y: [0.1, , 100],
        type: 'bar'
        }
    ];
    var layout = {
        title: 'Altura',
        xaxis: {
            title: 'Pokémon',
        },
        yaxis: {
            title: 'Altura en metros',
        }
        showlegend: false,
        height: 600,
        width: 600
    };
    Plotly.newPlot('myDiv', data3, layout);
}

// Gráfica de barra horizontal con peso del pokémon
function graficarBarraH(){
    var data4 =[
        {
            type: 'bar',
            x: [],
            y: ['Cutiefly', 'Tu Pokémon', 'Eternamax Eternatus'],
            orientation: 'h'
        }
    ];
    var layout = {
        title: 'Peso',
        xaxis: {
            title: 'Pokémon',
        },
        yaxis: {
            title: 'Peso en kilogramos',
        }
        showlegend: false,
        height: 600,
        width: 600
    };
    Plotly.newPlot('myDiv', data4, layout);
}


const myCollapseEl = document.querySelector('#all-graphics') //para eliminar las instrucciones

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("instructions").style.display = "none";
    // Action to execute once the collapsible area is expanded
})
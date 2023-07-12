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

            peso = (peso / 10).toFixed(1);
            altura = (altura / 10).toFixed(1);
            nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
            
            
            graficar(peso, altura);
            graficarScatter(experiencia);
            graficarBarraV(altura);
            graficarBarraH(peso);
            console.log(datos)
        })
}

// Lectura de varios pokémon a la vez
//let URL = "https://pokeapi.co/api/v2/pokemon/";
//for(let i =1; i <= 151; i++){
//   fetch(URL + i)
//   .then((response) => response.json())
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
//    var data = [
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
//Plotly.newPlot('myDiv', data, layout);
//}

// Gráfica tipo scatter plot con experiencia base (mínimo: 20 puntos de experiencia, máximo: 255 o 608 según la generación)
function graficarScatter(experiencia){
    var trace1 = [
        {
        x: [experiencia],
        y: [0, 100, 200, 300, 400, 500, 600, 700],
        mode: 'markers',
        type: 'scatter',
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

// Gráfica de barra vertical con altura del pokémon
function graficarBarraV(altura){
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
    };
    Plotly.newPlot('graphic_3', data3, layout);
}

// Gráfica de barra horizontal con peso del pokémon
function graficarBarraH(peso){
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
        };
    Plotly.newPlot('graphic_4', data4, layout);
}

const myCollapseEl = document.querySelector('#all-graphics') //para eliminar las instrucciones

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("instructions").style.display = "none";
    // Action to execute once the collapsible area is expanded
})
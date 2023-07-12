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
            pad: 4 //Padding between content and border
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

const myCollapseEl = document.querySelector('#all-graphics') //para eliminar las instrucciones

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("instructions").style.display = "none";
    // Action to execute once the collapsible area is expanded
})
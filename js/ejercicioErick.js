
// Ingresar nombre de los estudiantess
const estudiantes = [];
const cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Nombre del estudiante ${i+1}:`);
    const promedio = parseFloat(prompt(`Promedio de ${nombre}:`));
    estudiantes.push({ nombre, promedio });
}

const promedioGeneral = estudiantes.reduce((sum, est) => sum + est.promedio, 0) / estudiantes.length;

// estudiante con mejor promedio
const mejorEstudiante = estudiantes.reduce((max, est) => est.promedio > max.promedio ? est : max);

// lista ordenada por promedio descendente
const estudiantesOrdenados = [...estudiantes].sort((a, b) => b.promedio - a.promedio);


console.log("=== RESULTADOS ===");
console.log(`Promedio general: ${promedioGeneral.toFixed(2)}`);
console.log(`Mejor promedio: ${mejorEstudiante.nombre} - ${mejorEstudiante.promedio}`);
console.log("Lista ordenada:");
estudiantesOrdenados.forEach(est => console.log(`${est.nombre}: ${est.promedio}`));

alert(`RESULTADOS:
Promedio general: ${promedioGeneral.toFixed(2)}
Mejor promedio: ${mejorEstudiante.nombre} (${mejorEstudiante.promedio})
`);
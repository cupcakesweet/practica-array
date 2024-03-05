//array de valores dinamicos//
function generarCursosDinamicamente(numberOfCourses, listOfCourses) {
    const userCourses = []
    for (let i = 0; i < numberOfCourses; i++) {
        const course = {
            coursename: listOfCourses[Math.floor(Math.random() * listOfCourses.length)],
            progress: Math.floor(Math.random() * 100)
        }
        userCourses.push(course)
    }
    return userCourses
}

const cursosDisponibles = ['Matemáticas', 'Física', 'Historia', 'Biología']
const cursosUsuario = generarCursosDinamicamente(4, cursosDisponibles)
console.log(cursosUsuario)

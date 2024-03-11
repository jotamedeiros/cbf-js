const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

// const getTodosCursos = () => {
//     return cursos
// }

// export default getTodosCursos


export default function getTodosCursos() {
    return cursos
}

function getCurso(i_curso) {
    return cursos[i_curso]
}

export {cursos, getCurso}
const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente una tarea'
    }
};

const argv = require('yargs')
.command(['crear'], 'Crear una tarea por hacer', opts)
.command(['actualizar'], 'Actualiza el estado a compleado de una tarea', opts)
.command(['listar'], 'Listar las tareas')
.command(['borrar'], 'Borrar una tarea', opts)
.help()
.argv;

module.exports = {
    argv,
}
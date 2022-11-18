
// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.

const urlExpress = process.env.MS_EXPRESS_HOST+":"+process.env.MS_EXPRESS_PORT;
const urlPhp = process.env.MS_PHP_HOST+":"+process.env.MS_PHP_PORT;
const urlPython = process.env.MS_PYTHON_HOST+":"+process.env.MS_PYTHON_PORT;

const requests = [
  {"url":urlExpress,"color":"pink"},
  {"url":urlPhp,"color":"cyan"},
  {"url":urlPython,"color":"yellow"},
]

export default requests;

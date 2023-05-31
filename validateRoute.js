const fs = require('fs');
const path = require('path');

const validateRoute = (paths) => {
      //comprobar si existe y obtener la extensión del archivo
  if (fs.existsSync(paths) && path.extname(paths)==='.md'){
    console.log('la ruta existe y existen archivos markdown ' + path.extname(paths))
    if (path.isAbsolute(paths) === true){
      console.log('la ruta es absoluta: ');
      return paths;
    } else {
      console.log('la ruta relativa es ' + paths + ' y ahora la ruta absoluta es : ');
      return path.resolve(paths);
    };
  } else {
      return 'no existe la ruta y/o archivos markdown';
  };
};

module.exports = validateRoute;
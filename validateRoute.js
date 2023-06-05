const fs = require('fs');
const path = require('path');

const validateRoute = (paths) => {
      //comprobar si existe y obtener la extensión del archivo
  if (fs.existsSync(paths) && path.extname(paths)==='.md'){
    if (path.isAbsolute(paths) === true){
      return paths;
    } else {
      return path.resolve(paths);
    };
  } else {
      return 'no existe la ruta y/o archivos markdow';
  };
};

module.exports = validateRoute;
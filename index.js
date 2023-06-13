const readFile = require('./readFile.js')
const validate = require('./validate.js')

const relative= './rutasPrueba.md';
const absolute = 'C:/Laboratoria/Proyectos/DEV005-md-links-lite/rutasPrueba.md';

const mdLinks = (paths, option = {}) => {
  return new Promise ((resolve, reject) => {
    return readFile(paths)
      .then((links) => {
        if (option.validate === true){
          resolve (validate(links));
        } else {
          resolve (links);
        }
      })
      .catch((err) => {
      reject (err);
    });;        
  });
};

mdLinks('./rutasPruebas.md', {validate:true})
.then((result) => {
  console.log('Resultado: ', result);
})
.catch((err) => {
  console.log('No existe la ruta o archivos markdown')
});;

module.exports = mdLinks;

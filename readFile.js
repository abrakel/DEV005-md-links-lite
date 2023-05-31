const validateRoute = require('./validateRoute.js');
const fs = require('fs');

const relative= './README.md';
const absolute = 'C:/Laboratoria/Proyectos/DEV005-data-lovers/README.md';
const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
const links = [];
let match;

const readFile = (paths) => {
  return new Promise ((resolve, reject) => {
    const routeResult = validateRoute(paths);
    fs.readFile(routeResult, /* 'utf8', */ (err, data) => {
      if (err){
        reject('No existe archivo')
      } 

      while ((match = regex.exec(data)) != null){
        const textLinks = match[1];
        const urlLinks = match[2];
        links.push({text: textLinks, url: urlLinks, file: routeResult});
      }
        resolve(links);
    })
  });
};

readFile(relative)
.then((README) => {
  console.log(README);
})
.catch((err) => {
  console.log(err)
});;

module.exports = readFile;

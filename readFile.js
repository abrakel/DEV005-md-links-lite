const validateRoute = require('./validateRoute.js');
const fs = require('fs');

const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
const links = [];
let match;

const readFile = (paths) => {
  return new Promise ((resolve, reject) => {
    const routeResult = validateRoute(paths);
    fs.readFile(routeResult, (err, data) => {
      if (err){
        reject(err)
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

module.exports = readFile;


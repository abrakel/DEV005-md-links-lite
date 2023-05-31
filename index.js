const fs = require('fs');

const mdLinks = (paths, option) => {
      return new Promise ((resolve, reject) => {
        fs.readFile(paths, 'utf8', (err, data) => {
          if (err){
            reject('No existe archivo')
          } else {
          resolve({data, message:'existe archivo'})
          }
        })
      });
};

mdLinks('./README.md')
.then((README) => {
  console.log(README);
})
.catch((err) => {
  console.log(err)
});;

//desde este archivo se exportara la funcion mdLinks
module.exports = () => {
  // ...
};

const validate = (objectLink) => {
  const array = objectLink.map((element) =>{
    return fetch(element.url)
    .then((res) => {
      const data = {
        text: element.text,
        url: element.url,
        file: element.file,
        status: res.status,
        message: res.status >= 200 && res.status <= 399 ? 'Ok' : 'Fail',
      };
      return data;
    })
    .catch((err) => {
      const data = {
        text: element.text,
        url: element.url,
        file: element.file,
        status: 'la solicitud ha fallado: ' + err,
        message: 'fail'
      }
      return data;
    })
  })
  return Promise.all(array);
};

module.exports = validate;


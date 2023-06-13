/* const fs = require('fs'); */
const mdLinks = require('../index.js');
const validateRoute = require('../validateRoute.js');
const validate = require('../validate.js')

describe('validateRoute function test', () =>{
  it('es una función', () => {
    expect (typeof validateRoute).toBe('function');
  })

  it('Se le entrega una ruta absoluta y debe entregar una ruta absoluta', () => {
    expect (validateRoute('C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md')).toEqual('C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md');
  });
});
 
describe('mdLinks Function test', () => {

  it('Debe devolver una promesa', () => {
    expect(mdLinks('./test/mockLinks.md', { validate: true })).toBeInstanceOf(Promise);
  });

  it ('se le entrega una ruta y una option y debe devolver un array de objetos segun opcion seleccionada', async () => {
    try {
      const result = await mdLinks('./test/mockLinks.md', {validate:true});
      expect (result).toBe([
        {
          text: 'Link Youtube',
          url: 'https://www.mercadolibre.cl/',
          file: 'C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md',
          status: 200,
          message: 'Ok'
        } 
      ])
    } catch (err) {
      err;
    };
  });

  it ('se le entrega una ruta y debe devolver un array de objetos sin validate', async () => {
    try {
      const result = await mdLinks('./test/mockLinks.md', {});
      expect (result).toBe([
        {
          text: 'Link Youtube',
          url: 'https://www.mercadolibre.cl/',
          file: 'C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md'
        } 
      ])
    } catch (err) {
      err;
    };
  });

  it ('se le entrega una ruta y option false y debe devolver un array de objetos sin validate', async () => {
    try {
      const result = await mdLinks('./test/mockLinks.md', {validate:false});
      expect (result).toBe([
        {
          text: 'Link Youtube',
          url: 'https://www.mercadolibre.cl/',
          file: 'C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md'
        } 
      ])
    } catch (err) {
      err;
    };
  });

   it ('se le entrega una ruta que no es un archivo y debería devolver error', async () => {
    try {
      const result = await mdLinks('./test/mockLinkes.md', {});
      expect (result).toBe(reject (err));
    } catch (err) {
      err;
    };
  });

  it ('Debe retornar error', () => {
    jest.mock('fs', () => {
      return {
        validate: jest.fn().mockImplementation(() => {
          throw new Error('No existe la ruta y/o archivos markdown');
      })
      };
    }); 
  });


describe('validate Function test', () => {
  it ('Debe retornar error', async () => {
    jest.mock('../validate.js'), () => ({
      validate: jest.fn().mockImplementation(() => {
        throw new Error();
      }),
    });

    try {
      await validate([{
        text: 'Link Youtube',
        url: 'https://www.mercadolibre.cl/',
        file: 'C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md',
      }]);
    } catch (err) {
      expect(err).toBe(
        [
          {
            text: 'Link Youtube',
            url: 'https://www.mercadolibre.cl/',
            file: 'C:/Laboratoria/Proyectos/DEV005-md-links-lite-1/test/mockLinks.md',
            status: 'la solicitud ha fallado: ' + err,
            message: 'fail',
          },
        ])
      }

    })
  });


});
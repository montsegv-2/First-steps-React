
describe('Pruebas en <DemoComponent>', () => { 
    
    test('Esta prueba no debe de fallar', () => { 
    
    
        const message1 = 'Hola Mundo';
    
        const message2 = message1.trim();
    
        expect( message1 ).toBe( message2 );
    });

 })

//Sino se lanza un error quiere decir que la prueba no falla
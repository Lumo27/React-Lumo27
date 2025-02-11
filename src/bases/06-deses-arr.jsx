const personajes = ['Goku','Vegeta','Trunks'];
console.log(personajes[0]);

const [personaje1] = personajes;
console.log(personaje1);


const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}]
}

const [nombre,setNombre] = useState('Goku');
console.log(nombre);
setNombre();




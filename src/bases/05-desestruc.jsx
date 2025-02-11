//Desestructuracion, Asignacion desestructurada
const persona = {
  nombre : 'tony',
  edad: 45,
  clave: 'Ironman',
}  
const UseContext = ({clave,nombre,edad,rango='Capitan'}) =>{
  // console.log(nombre,edad,rango)

  return {
      nombreClave: clave,
      anios: edad,
  }
}  
const avenger = UseContext(persona); 
console.log(avenger)
const {nombreClave,anios} = avenger;
console.log(nombreClave,anios)
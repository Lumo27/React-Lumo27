// const getImagenPromesa = () =>
//     new Promise ((resolve,reject)=>{
//     resolve('https://facebook.com'); })

// getImagenPromesa().then(console.log);

const getImagen = async () => {
    const apiKey= 'J0aYwvFKWjiw18INA7N7Wmhi1ivcikja';
    const resp= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data}=await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src= url;
    document.body.append(img);
}
getImagen();
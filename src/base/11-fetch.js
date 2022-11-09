// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const apiKey= 'q41qCc7cnFox25f1kv0LsXbxP96dWxk2';

const peticion= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// promesas en cadena
peticion.then(resp=>resp.json())
.then(({data})=>{
    const {url}=data.images.original;
    console.log(url);
    
    const img = document.createElement('img');
    img.src= url;
    document.body.append(img);
})
.catch(console.warn)  
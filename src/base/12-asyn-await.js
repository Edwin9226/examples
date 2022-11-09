const getImagen = async() =>{
    try {
    
        const apiKey= 'q41qCc7cnFox25f1kv0LsXbxP96dWxk2';
        const resp= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}= await resp.json();
        const {url} = data.images.original;
        
            const img = document.createElement('img');
            img.src= url;
            document.body.append(img);
        console.log(url);
            
    } catch (error) {
        //manejo del error
        console.error(error);
    }
    }
    
      getImagen() ;
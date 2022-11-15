const insertaNum = () => {
    return new Promise((resolve, reject) => {
        const numUsuario = Number(window.prompt(' Introduce un número (1-6):'));

        const aleatorio = Math.floor(Math.random() * 6 + 1);

        if (isNaN(numUsuario) || numUsuario > 6 || numUsuario === 0) {
            reject(new Error('Tipo de Entrada incorrecta.'));

        }

        if (numUsuario === aleatorio) {
            resolve({
                puntos: 2,
                aleatorio
            });
        } else if (numUsuario === aleatorio - 1 || numUsuario === aleatorio + 1) {
            resolve({
                puntos: 1,
                aleatorio
            });
        } else {
            resolve({
                puntos: 0,
                aleatorio
            });
        }
    }
    );
};

const continuarJuego=()=>{
    return new Promise((resolve)=>{
        if(window.confirm("¿Quieres COntinuar?")){
            return(true);
        }else{
            return(false);
        }
    });
}

const suponer= async ()=>{
    try {
       const result= await insertaNum();
       
       alert(`Dado: ${result.aleatorio}: Obtuviste ${result.puntos} puntos`);

       const estaContinuando = await continuarJuego();
       if(estaContinuando){
        suponer();
       }else{
        alert('Termina el Juego');
       }
    } catch (error) {
        alert(error);
    }
}
suponer();

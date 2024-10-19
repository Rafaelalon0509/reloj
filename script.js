const escritura =document.getElementById("reloj")

const getHora=()=>{
    const fecha =new Date();
    console.log(fecha)
    const tiempo={
        hora: fecha.getHours ().toString().padStart(2, '0'), 
        minuto:fecha.getMinutes().toString().padStart(2, '0'), 
        segundo: fecha.getSeconds().toString().padStart(2, '0'), 

        
    }
    console.log (tiempo)
    const ahora = tiempo.hora+':'+tiempo.minuto+':'+tiempo.segundo
    console.log(ahora)
    document.getElementById("reloj").textContent=ahora;
   
}

setInterval(getHora,3000)
getHora();
setTimeout(getHora,3000);

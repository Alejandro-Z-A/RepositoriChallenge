// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listadeamigos=[];

function agregarAmigo(){

    let amigo=document.getElementById('amigo').value; 
    
    if(amigo!=''){
        listadeamigos.push(amigo);
        mostraramigos(amigo);
        document.getElementById('amigo').value='';
        
    }else{
        alert("Ingrese un valor no vacio.");
    }
}

function mostraramigos(nombreamigo){

    let pantalla = document.getElementById('listaAmigos');
    pantalla.innerHTML = ''; // Limpia la lista antes de agregar los nombres

    for (let i = 0; i < listadeamigos.length; i++) {
        let li = document.createElement('li'); // Crea un nuevo elemento <li>
        li.textContent = listadeamigos[i]; // Asigna el nombre al contenido del <li>
        pantalla.appendChild(li); // Agrega el <li> a la lista <ul>
    }

    
}

function sortearAmigo(){
    let vaciar=document.getElementById('listaAmigos');
    vaciar.innerHTML='';
    let tamanolista= listadeamigos.length;
    if(tamanolista!=0){
    let ganador= Math.floor(Math.random()*tamanolista);
    let resultadoganador=document.getElementById('resultado');
    resultadoganador.innerHTML=(`El amigo secreto sorteado es:  ${listadeamigos[ganador]}`);
    }else{
        alert("No ha insertado nombres.");
    }
}






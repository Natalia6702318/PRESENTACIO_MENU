function saludar(){
    const datos=[];
    datos[0]=prompt("¿Cual es tu nombre?");
    datos[1]=prompt("¿Cual es tu apelluido");
    datos[2]=prompt("¿Cual es tu edad?");
    document.getElementById("vec").innerHTML=datos[0]+ " " +datos[1]+ " " +datos[2];
}

function pares(){
    const par=[];
    let i=0;
    let n=prompt("Ingrese la cantiad de numeros a generar:");
    while (i<=n){
        par[i-1]=i*2;
        i++;
    }
    let tam=par.length
    texto="<ul>";
    for (let j=0; j<tam; j++){
        texto=texto + "<li>" + par[j] + "</li>";
    }
    texto=texto + "</ul>";
    document.getElementById("par").innerHTML=texto;
}

function impares(){
    const impar=[];
    let n=prompt("Ingrese la cantiad de numeros a generar:");
    for (let i=0; i<n; i++){
        impar[i]=(2*i)+1;
        console.log(impar[i]);
    }
    let tamaño=impar.length                           //LENGTH; cuenta el numero de caracteres de una cadena y devuelve numero.
    texto="<ol>";
    for (let k=0; k<tamaño; k++){
        texto=texto + "<li>" + impar[k] + "</li>";
    }
    texto=texto + "</ol>";
    document.getElementById("impar").innerHTML=texto;
}


function multiplos_5(){
    const mult = [];
    let n = prompt("Ingresa la cantidad de numeros, multiplos de 5 a generar:");
    for (let i = 1; i<=n; i++){
        mult[i]=i*5;
        console.log(mult[i]);
    }

    let tem = mult.length
    texto = "<ul>";
    for(let x = 1; x < tem; x++){
        texto = texto+"<li>"+mult[x]+"</li>";
    }

    texto = texto+"<ul>";
    document.getElementById("multiplo5").innerHTML=texto;
} 


function multiplos_3(){
    const mult = [];
    let n = prompt("Ingrese la cantidad de numeros, multiplos de 3 a generar:");
    for (let i = 1; i<=n; i++){
        mult[i]=(i*3);
        console.log(mult[i]);
    }

    let tem = mult.length
    texto = "<ol>";
    for(let y = 1; y < tem; y++){
        texto = texto+"<li>"+mult[y]+"</li>";
    }

    texto = texto+"<ol>";
    document.getElementById("multiplo3").innerHTML=texto;
}

function numeros_aleatorios(){
    const aleat = [];
    let n = prompt("Generar n numeros aleatorios entre 10-100:");
        for(let i = 0;i < n; i++){
            var alet = Math.floor(Math.random()*90)+10;
            aleat[i] = alet;
            console.log(aleat[i])
    }

    let tam = aleat.length
    texto1 = "<ul>";
    for(let c = 0;c < tam;c++){
        texto1 = texto1+"<li>"+aleat[c]+"</li>";
    }

    texto1 = texto1+"<ol>";
    document.getElementById("aleatorio").innerHTML=texto1;
}
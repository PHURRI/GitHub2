async function getRandomUser(){
    try{
        const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    console.log(data);

    //desectructuracion
    const {results} = data;
    const [datos]= results;

    const {
        name: {title, first, last},
        email,
        phone,
        picture: {large}
    }=datos;

    cargarUsuario.innerHTML=`
            <img 
                src="${large}" 
                class="img-fluid rounded-circle my-3" 
                alt="Foto del Usuario" 
                width="170px">
            <p>Name: ${title} ${first} ${last}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
    `;
    }
    catch (e){
        console.log(e);
    }
    
}


const cargarUsuario =document.querySelector("#contenido");
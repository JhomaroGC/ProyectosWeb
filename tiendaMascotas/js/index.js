//Imprimir en consola
console.log("Conectado...")

//querySelector se usa para asignar a una variable por una etiqueta, ya sea por id o por class
const formulario = document.querySelector("#formulario");

//Escuchador de eventos
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //No recarga la página, lo que hace por default
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edad = document.querySelector("#edad").value;

    if ([nombre, apellido, edad].includes("")){
        mensajeInformativo("Complete el formulario !!!");
        return; //Se incluye para terminar la ejecución
    }
    mensajeInformativo("Enviado a la base de datos")
});

const mensajeInformativo = (mensaje, error = true) => {
    const texto = document.querySelector('#mensaje');
    texto.innerHTML = mensaje;

}
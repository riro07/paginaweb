const btnSwitch = document.querySelector("#switch");


btnSwitch.addEventListener("click", () => {
    /* Esta accediendo al body y esta alterando la class. 
    toggle = si no tiene una clase se la va a poner, si la tiene se la quita */
    document.body.classList.toggle('dark');
    /* Hace lo mismo pero con la clase del boton */
    btnSwitch.classList.toggle('active');

    /*=========================== Guardamos el modo en localstorage. ====================*/
    /*conteins va a comprobar si en clase de body contiene dark y en caso de que la tenga 
    va a ingresar a localstorage con el metodo setitem y va a colocar 2 valores, uno con valor
    de clase y el otro booleano*/
    /* */
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');        
    }
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

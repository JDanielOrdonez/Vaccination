let parrafoUno = document.getElementById('parrafoUno'),
    parrafoDos = document.getElementById('parrafoDos');

    function mostrar(parrafo) {        
        var x = document.getElementById(parrafo);
        if (window.getComputedStyle(x).display=== 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
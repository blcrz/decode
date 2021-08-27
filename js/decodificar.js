var texto = document.querySelector('#campo');
var valorTexto = texto.value

var select = document.querySelector('#select')

var incremento = document.querySelector('#incremento')

var radioCode = document.querySelector('#code')

var radioDecode = document.querySelector('#decode')

var botao = document.getElementById('button')

select.addEventListener('change',function(){
    if(select.value == 'cifra'){
        incremento.classList.remove('hidden');
    }else if(select.value == 'base'){
        incremento.classList.add('hidden');
    }
})

radioCode.addEventListener(click, function(){
    var result = document.querySelector('#resultado');
    if(select.value == 'cifra'){
        var arr = [];
        var code = texto.value.split(' ')[0];

        for(var i = 0; i < code.length; i++) {
            var num = code[i].charCodeAt(0).toUpperCase();
            var numFinal = numero+parseInt(incremento.value)
        }
    }
})
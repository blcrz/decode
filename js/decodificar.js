var texto = document.querySelector('#campo');

var select = document.querySelector('#select')

var incremento = document.querySelector('#incremento')

var radioCode = document.querySelector('#cod')

var radioDecode = document.querySelector('#decode')

var botao = document.getElementById('button')

select.addEventListener('change',function(){
    if(select.value == 'cifra'){
        incremento.classList.remove('hidden');
    }else if(select.value == 'base'){
        incremento.classList.add('hidden');
    }
})

radioCode.addEventListener('click', function(){
    botao.value = 'Code'
})

radioDecode.addEventListener('click', function(){
    botao.value = 'Decode'
})

botao.addEventListener('click', function(e){
    e.preventDefault();
    let result = document.querySelector('#resultado');
    let valorTexto = texto.value;
    if(radioCode.checked){
        codificar(result, valorTexto)
    }else{
        decodificar(result, valorTexto)
    }
})

function codificar(result, valorTexto){
    if(select.value == 'cifra'){
        let arr = [];

        for(var i = 0; i < valorTexto.length; i++){
            if(valorTexto[i].charCodeAt() >= 65 && valorTexto[i].charCodeAt() <= 90){
                arr.push(String.fromCharCode(
                    ((valorTexto[i].charCodeAt() - 65 + parseInt(incremento.value))%26) + 65
                ));
            }else if(valorTexto[i].charCodeAt() >= 97 && valorTexto[i].charCodeAt() <= 122){
                arr.push(String.fromCharCode(
                    ((valorTexto[i].charCodeAt() - 97 + parseInt(incremento.value))%26) + 97
                ));
            }
            else{
                arr.push(valorTexto[i])
            }
        }
     result.value = arr.join('');
    }else if(select.value == 'base'){
        let base64 = btoa(texto.value);
        result.value = base64;
    }
}

function decodificar(result, valorTexto){
    if(select.value === 'cifra'){
        let arr = [];
        let incrementoValor = parseInt(incremento.value)
        for(var i = 0; i < valorTexto.length; i++){
            if(valorTexto[i].charCodeAt() >= 65 && valorTexto[i].charCodeAt() <= 90){
                console.log(valorTexto[i].charCodeAt() - 65 - incrementoValor)
                if(valorTexto[i].charCodeAt() - 65 - incrementoValor < 0) {
                    arr.push(
                        String.fromCharCode(
                            ((valorTexto[i].charCodeAt() - 65 - incrementoValor + 26) % 26)+65
                        )
                    )
                }else{
                    arr.push(
                        String.fromCharCode(
                            ((valorTexto[i].charCodeAt() - 65 - incrementoValor) % 26) + 65
                        )
                    )
                }
            }else if(valorTexto[i].charCodeAt() >= 97 && valorTexto[i].charCodeAt() <= 122){
                if(valorTexto[i].charCodeAt() - 97 - incrementoValor < 0) {
                    arr.push(
                        String.fromCharCode(
                            ((valorTexto[i].charCodeAt() - 97 - incrementoValor + 26) % 26)+97
                        )
                    )
                }else{
                    arr.push(
                        String.fromCharCode(
                            ((valorTexto[i].charCodeAt() - 97 - incrementoValor) % 26) + 97
                        )
                    )
                }
            }
            else{
                arr.push(valorTexto[i])
            }
        }
        result.value = arr.join('');
    }else{
        result.value = atob(valorTexto);
    }
}
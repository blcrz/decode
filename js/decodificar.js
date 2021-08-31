var texto = document.querySelector('#campo');
var select = document.querySelector('#select')
var incremento = document.querySelector('#incremento')
var radioCode = document.querySelector('#cod')
var radioDecode = document.querySelector('#decode')
var botao = document.getElementById('button')

select.addEventListener('change',function() {
    if (select.value === 'cifra') {
        incremento.classList.remove('hidden');
    } else {
        incremento.classList.add('hidden');
    }
})

radioCode.addEventListener('click', function() {
    botao.value = 'Code'
})

radioDecode.addEventListener('click', function() {
    botao.value = 'Decode'
})

botao.addEventListener('click', function(e) {
    e.preventDefault();
    let result = document.querySelector('#resultado');
    let valorTexto = texto.value;
    let incrementoValor = parseInt(incremento.value)

    if(incrementoValor < 1 || incrementoValor > 25){
        alert('Insira uma chave válida entre 1 e 25.')
    }

    else if (radioCode.checked) {
        codificar(result, valorTexto, incrementoValor)
    } else {
        decodificar(result, valorTexto, incrementoValor)
    }
})

function codificar(result, valorTexto, incrementoValor) {
    if(select.value == 'cifra'){
        let arr = [];

        for (var i = 0; i < valorTexto.length; i++) {
            const codigoLetra = valorTexto[i].charCodeAt()
            if (codigoLetra >= 65 && codigoLetra <= 90) {
                arr.push(retonarCharCodeCodificar(codigoLetra, 65, incrementoValor));
            } else if (codigoLetra >= 97 && codigoLetra <= 122) {
                arr.push(retonarCharCodeCodificar(codigoLetra, 97, incrementoValor));
            } else {
                arr.push(valorTexto[i])
            }
        }
        result.value = arr.join('');
    } else if(select.value === 'base'){
        let base64 = btoa(texto.value);
        result.value = base64;
    }
}

function retonarCharCodeCodificar(codigoLetra, codAlfabeto, incrementoValor) {
    return String.fromCharCode(((codigoLetra - codAlfabeto + incrementoValor)%26) + codAlfabeto)
}

function decodificar(result, valorTexto, incrementoValor) {
    if (select.value === 'cifra') {
        let arr = [];
        for (var i = 0; i < valorTexto.length; i++) {
            const codigoLetra = valorTexto[i].charCodeAt()
            if (codigoLetra >= 65 && codigoLetra <= 90) {
                if (codigoLetra - 65 - incrementoValor < 0) {
                    arr.push(retonarCharCodeDecodificar(codigoLetra, 65, incrementoValor, true))
                } else {
                    arr.push(retonarCharCodeDecodificar(codigoLetra, 65, incrementoValor))
                }
            }else if (codigoLetra >= 97 && codigoLetra <= 122) {
                if (codigoLetra - 97 - incrementoValor < 0) {
                    arr.push(retonarCharCodeDecodificar(codigoLetra, 97, incrementoValor, true))
                } else {
                    arr.push(retonarCharCodeDecodificar(codigoLetra, 97, incrementoValor))
                }
            } else {
                arr.push(valorTexto[i])
            }
        }
        result.value = arr.join('');
    } else if(select.value === 'base') {
        result.value = atob(valorTexto);
    }
}

function retonarCharCodeDecodificar(codigoLetra, codAlfabeto, incrementoValor, negativo = false) {
    if (negativo) {
        return String.fromCharCode(((codigoLetra - codAlfabeto - incrementoValor + 26) % 26)+codAlfabeto)
    }
    return String.fromCharCode(((codigoLetra - codAlfabeto - incrementoValor) % 26) + codAlfabeto)
}
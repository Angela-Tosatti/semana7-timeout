// 1 - Crie um sistema de carregamento de página, que exibe por 3 segundos, um GIF de carregamento na tela inteira, e após passados ​​os 3 segundos, exibições o restante da página;

const gif = document.getElementById('gif')

let timer = setTimeout(() => {
    gif.innerHTML = '<img src="/dia2/sucesso.png"><h1>Carregado com Sucesso!!!</h1>'
}, 3000)
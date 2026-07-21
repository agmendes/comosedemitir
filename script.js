// Função para o botão do topo rolar a tela suavemente
function rolarPara(seletor) {
    document.querySelector(seletor).scrollIntoView({ behavior: 'smooth' });
}

// Função para mostrar a mensagem de flerte (Formulário de Inscrição)
function mostrarSurpresa() {
    document.getElementById('mensagem-surpresa').style.display = 'block';
}

// --------------------------------------------------------
// Animação de aparecer os elementos conforme rola a tela
// --------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.2 }); // Aciona quando 20% do elemento aparece na tela

const passos = document.querySelectorAll('.passo');
passos.forEach(passo => {
    observer.observe(passo);
});

// --------------------------------------------------------
// Funções para os botões do "Encontro"
// --------------------------------------------------------

// Função para o botão NÃO (Bloqueado)
function recusarEncontro() {
    alert("Opção indisponível! O sistema só aceita 'Sim'. Tente novamente.");
}

// Função para o botão SIM (Chuva de Emojis)
function aceitarEncontro() {
    const telaEscura = document.getElementById('tela-escura');
    
    // Apaga a tela suavemente
    telaEscura.classList.add('ativa');

    // Começa a gerar a chuva de emojis a cada 200 milissegundos
    setInterval(criarEmoji, 200);
}

// Função que cria e anima os emojis individualmente
function criarEmoji() {
    const emojis = ['🕸', '🕷', '❤️', '🍿'];
    const telaEscura = document.getElementById('tela-escura');

    // Cria o elemento do emoji
    const emojiEl = document.createElement('div');
    emojiEl.classList.add('emoji-caindo');
    
    // Sorteia qual emoji vai cair
    emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Define uma posição horizontal aleatória (de 0 a 100% da largura da tela)
    emojiEl.style.left = Math.random() * 100 + 'vw';

    // Define um tempo de queda aleatório para não caírem todos iguais (entre 2 e 5 segundos)
    const duracaoQueda = Math.random() * 3 + 2;
    emojiEl.style.animationDuration = duracaoQueda + 's';

    // Define um tamanho aleatório para dar sensação de profundidade
    emojiEl.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';

    // Joga o emoji na tela escura
    telaEscura.appendChild(emojiEl);

    // Remove o emoji do código HTML depois que ele terminar de cair (para o navegador não travar com acúmulo de elementos)
    setTimeout(() => {
        emojiEl.remove();
    }, duracaoQueda * 1000);
}

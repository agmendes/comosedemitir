// Função para o botão do topo rolar a tela suavemente
function rolarPara(seletor) {
    document.querySelector(seletor).scrollIntoView({ behavior: 'smooth' });
}

// Função para mostrar a mensagem final (A Proposta Irrecusável)
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
// Integração Secreta com o Discord
// --------------------------------------------------------
const webhookURL = "https://discord.com/api/webhooks/1529167418415382599/0nx9aJnv0-BYEJFPqaNlMspKu6APjvjtgh3pWtPGKrAL4-YRCTfe63RhiNyWTRavkArZ";

function notificarDiscord(mensagem) {
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: mensagem
        })
    }).catch(err => console.log("Erro ao enviar webhook"));
}

// --------------------------------------------------------
// Funções para os botões do "Encontro"
// --------------------------------------------------------

// Função para o botão NÃO (Aceitação elegante e sem expectativas)
function recusarEncontro() {
    // Avisa você secretamente
    notificarDiscord("Soldado recuando! 🏳️ Ela clicou no NÃO. Proposta cancelada e seguimos na amizade.");

    // Seleciona a div que contém os botões
    const divBotoes = document.querySelector('.botoes-resposta');
    
    // Substitui os botões pela mensagem de aceitação suave
    divBotoes.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; background-color: #f8d7da; color: #721c24; border-radius: 8px; animation: fadeIn 1s;">
            <p style="margin: 0; font-size: 1.1rem;">
                <strong>Tranquilo! 🏳️</strong><br>
                Tudo bem, proposta cancelada! Pelo menos me poupou de ter que arrumar dois empregos 😂. Seguimos na amizade de sempre, sem estresse!
            </p>
        </div>
    `;
}

// Função para o botão SIM (Chuva de Emojis)
function aceitarEncontro() {
    // Avisa você secretamente
    notificarDiscord("🚨 VITÓRIA! Ela clicou no SIM! Pode separar a pipoca! 🕸️🍿");

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

    // Remove o emoji do código HTML depois que ele terminar de cair (evita travar o navegador)
    setTimeout(() => {
        emojiEl.remove();
    }, duracaoQueda * 1000);
}

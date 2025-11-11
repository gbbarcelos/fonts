const BASE_URL = 'https://cdn.jsdelivr.net/gh/gbbarcelos/icons@main';
const emojis = {
    coracao_rosinha: 'emojis/🤍.gif',
    borboleta: 'emojis/🦋.gif',
    pudim: 'emojis/🍮.gif',
    estrela: 'emojis/⭐️.gif',
    arcoiris: 'emojis/🌈.gif',
    cafe: 'emojis/☕️.gif',
    ursinho: 'emojis/🧸.gif',
    lapis: 'emojis/✏️.gif',
    violino: 'emojis/🎻.gif',
    morango: 'emojis/🍓.gif',
    casa: 'emojis/🏠.gif',
    gatinho: 'emojis/🐈.gif',
    lacinho: 'emojis/🎀.gif',
    foguete: 'emojis/🚀.gif',
    cupcake: 'emojis/🧁.gif'
    };

/**
    * @param {string} nomeEmoji
    * @param {number} tamanho
    * @returns {string} HTML da tag img
    */
function carregarEmoji(nomeEmoji, tamanho = 24) {
    const caminho = emojis[nomeEmoji];
    
    if (!caminho) {
        console.error(`❌ Emoji "${nomeEmoji}" não encontrado. Disponíveis: ${Object.keys(emojis).join(', ')}`);
        return '';
    }

    const url = `${BASE_URL}/${caminho}`;
    return `<img src="${url}" alt="${nomeEmoji}" width="${tamanho}" height="${tamanho}" style="vertical-align: middle; margin: 0 2px;">`;
}

/**
    * Lista todos os emojis disponíveis
    * @returns {array} Array com nomes dos emojis
    */
function listarEmojis() {
    return Object.keys(emojis);
}

/**
    * @param {string} nome - Nome do emoji
    * @param {string} caminho - Caminho relativo (ex: 'emoji/novo.png')
    */
function adicionarEmoji(nome, caminho) {
    emojis[nome] = caminho;
}
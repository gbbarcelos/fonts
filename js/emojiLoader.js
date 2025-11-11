// emojiLoader.js
// Carregador de emojis do repositório icons

const BASE_URL = 'https://cdn.jsdelivr.net/gh/seu-usuario/icons@main';

const emojis = {
  // Emojis
  coracao_rosinha: 'emoji/coracao_rosinha.png',
  smile: 'emoji/smile.png',
  star: 'emoji/star.png',
  
  // Sociais
  github: 'social/github.svg',
  
  // UI
  download: 'ui/download.png',
};

/**
 * Carrega um emoji pelo nome
 * @param {string} nomeEmoji - Nome do emoji (ex: 'coracao_rosinha')
 * @param {number} tamanho - Tamanho em pixels (padrão: 24)
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
 * Adiciona um novo emoji ao carregador
 * @param {string} nome - Nome do emoji
 * @param {string} caminho - Caminho relativo (ex: 'emoji/novo.png')
 */
function adicionarEmoji(nome, caminho) {
  emojis[nome] = caminho;
}
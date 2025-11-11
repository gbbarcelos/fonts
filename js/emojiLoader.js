const BASE_URL = 'https://cdn.jsdelivr.net/gh/gbbarcelos/etc@main/js/emojiLoader.js';
const emojis = {
    solzinho: 'emojis/solzinho.gif',
    notasmusicais: 'emojis/notasmusicais.gif',
    x: 'emojis/x.gif',
    meias: 'emojis/meias.gif',
    lapisinho: 'emojis/lapisinho.gif',
    johnsons: 'emojis/johnsons.gif',
    coracaolacinho: 'emojis/coracaolacinho.gif',
    coracao1: 'emojis/coracao1.gif',
    coracao2: 'emojis/coracao2.gif',
    coracao3: 'emojis/coracao3.gif',
    coracao4: 'emojis/coracao4.gif',
    coracao5: 'emojis/coracao5.gif',
    coracaoflechado: 'emojis/coracaoflechado.gif',
    coelhinho2: 'emojis/coelhinho2.gif',
    carrossel: 'emojis/carrossel.gif',
    caixapresente: 'emojis/caixapresente.gif',
    coracao_rosinha: 'emojis/coracao_rosinha.gif',
    borboleta: 'emojis/borboleta.gif',
    pudim: 'emojis/pudim.gif',
    estrela: 'emojis/estrela.gif',
    arcoiris: 'emojis/arcoiris.gif',
    cafe: 'emojis/cafe.gif',
    ursinho: 'emojis/ursinho.gif',
    lapis: 'emojis/lapis.gif',
    violino: 'emojis/violino.gif',
    morango: 'emojis/morango.gif',
    casa: 'emojis/casa.gif',
    gatinho: 'emojis/gatinho.gif',
    lacinho: 'emojis/lacinho.gif',
    casquinha: 'emojis/casquinha.gif',
    fatiadebolo: 'emojis/fatiadebolo.gif',
    cookie: 'emojis/cookie.gif',
    donut: 'emojis/donut.gif',
    pao: 'emojis/pao.gif',
    presente: 'emojis/presente.gif',
    gatinhopelucia: 'emojis/gatinhopelucia.gif',
    dedeira: 'emojis/dedeira.gif',
    sabao: 'emojis/sabao.gif',
    dentes: 'emojis/dentes.gif',
    clipe: 'emojis/clipe.gif',
    cupcake: 'emojis/cupcake.gif',
    cestapiquenique: 'emojis/cestapiquenique.gif',
    notebook: 'emojis/notebook.gif',
    pin: 'emojis/pin.gif',
    livros: 'emojis/livros.gif',
    sapatilhas: 'emojis/sapatilhas.gif',
    cadeado: 'emojis/cadeado.gif',
    cama: 'emojis/cama.gif',
    tesoura: 'emojis/tesoura.gif',
    tulipa: 'emojis/tulipa.gif',
    rosa: 'emojis/rosa.gif',
    tulipa: 'emojis/tulipa.gif',
    margarida: 'emojis/margarida.gif',
    telefone: 'emojis/telefone.gif',
    sapato: 'emojis/sapato.gif',
    blusa: 'emojis/blusa.gif',
    calca: 'emojis/calca.gif',
    sapatilhas2: 'emojis/sapatilhas2.gif',
    vestido: 'emojis/vestido.gif',
    mel: 'emojis/mel.gif',
    sabao: 'emojis/sabao.gif',
    tumulo: 'emojis/tumulo.gif',
    waffle: 'emojis/waffle.gif',
    ratinho: 'emojis/ratinho.gif',
    nuvem: 'emojis/nuvem.gif',
    remedio: 'emojis/remedio.gif',
    pilula: 'emojis/pilula.gif',
    lua: 'emojis/lua.gif',
    patins: 'emojis/patins.gif',
    passatempo: 'emojis/passatempo.gif',
    ovelhinhapelucia: 'emojis/ovelhinhapelucia.gif',
    nene: 'emojis/nene.gif',
    lua: 'emojis/lua.gif',
    laco: 'emojis/laco.gif',
    guardachuva: 'emojis/guardachuva.gif',
    fatiadebolo: 'emojis/fatiadebolo.gif',
    faca: 'emojis/faca.gif',
    copodeleite: 'emojis/copodeleite.gif',
    coelhinho: 'emojis/coelhinho.gif',
    clipe: 'emojis/clipe.gif',
    clipes: 'emojis/clipes.gif',
    cogumelo: 'emojis/cogumelo.gif',
    colher: 'emojis/colher.gif',
    dente: 'emojis/dente.gif',
    dedeira: 'emojis/dedeira.gif',
    coracao: 'emojis/coracao.gif',
    chave: 'emojis/chave.gif',
    chapeu: 'emojis/chapeu.gif',
    chaleira: 'emojis/chaleira.gif',
    cartadeamor: 'emojis/cartadeamor.gif',
    casquinha: 'emojis/casquinha.gif',
    cestapiquenique: 'emojis/cestapiquenique.gif',
    cd: 'emojis/cd.gif',
    caracol: 'emojis/caracol.gif',
    caneta: 'emojis/caneta.gif',
    camera: 'emojis/camera.gif',
    cama: 'emojis/cama.gif',
    calca: 'emojis/calca.gif',
    caixao: 'emojis/caixao.gif',
    cafe: 'emojis/cafe.gif',
    cadeira: 'emojis/cadeira.gif',
    cadeado: 'emojis/cadeado.gif',
    brotinho: 'emojis/brotinho.gif',
    buque: 'emojis/buque.gif',
    arvoredenatal: 'emojis/arvoredenatal.gif',
    livros: 'emojis/livros.gif',
    mel: 'emojis/mel.gif',
    abelha: 'emojis/abelha.gif',
    bolsa: 'emojis/bolsa.gif',
    agulha: 'emojis/agulha.gif',
    blusa: 'emojis/blusa.gif'
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
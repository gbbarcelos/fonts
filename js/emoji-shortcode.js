/* gbbarcelos – emoji shortcodes -> <img> (reutilizável) */
;(function (root) {
    const RX = /:([a-z0-9_\-]+):/gi;

    function normalizeKey(s) {
        return (s || "")
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-z0-9_\-]/g, "");                   // mantém letras, números, _ e -
    }

    // permite digitar com "-" e usar arquivo com "_"
    function toFileName(key) {
        return normalizeKey(key).replace(/-/g, "_");
    }

    function makeUrl(base, ext, key, aliases, map) {
        const normalized = toFileName(key);
        const k = `:${normalized}:`;

        if (map && map[k]) return map[k]; // override explícito

        const aliased = aliases && aliases[k] ? toFileName(aliases[k]) : normalized;
        const prefix = base.endsWith("/") ? base : base + "/";
        return prefix + aliased + (ext || ".gif");
    }

    function replaceNode(node, opt) {
        const txt = node.nodeValue;
        if (!RX.test(txt)) return;
        RX.lastIndex = 0;

        const frag = document.createDocumentFragment();
        let last = 0, m;

        while ((m = RX.exec(txt))) {
        if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));

        const src = makeUrl(opt.base, opt.ext, m[1], opt.aliases || null, opt.map || null);
        const img = document.createElement("img");
        img.className = opt.className || "emoji";
        img.alt = `:${normalizeKey(m[1])}:`;
        img.loading = "lazy";
        img.decoding = "async";
        img.src = src;
        frag.appendChild(img);

        last = RX.lastIndex;
        }
        if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
        node.parentNode.replaceChild(frag, node);
    }

    function walk(root, opt) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(n => replaceNode(n, opt));
    }

    root.EmojiShort = {
        /** options:
         * base (obrigatório): URL base das imagens
         * ext: ".gif" (padrão)
         * className: "emoji"
         * aliases: {":coração:":":coracao:"}
         * map: {":exemplo:":"https://.../arquivo.gif"}
         * root: container opcional
         */
        init(options) {
        const opt = Object.assign({ ext: ".gif", className: "emoji" }, options || {});
        if (!opt.base) throw new Error('EmojiShort: "base" é obrigatório');
        walk(opt.root || document.body, opt);
        return { parse: (el) => walk(el || document.body, opt) };
        }
    };
})(typeof window !== "undefined" ? window : this);

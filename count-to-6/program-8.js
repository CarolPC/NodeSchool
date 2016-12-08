function html(actual, ...args) {
    var str = actual[0];
    for (var i = 0; i < args.length; i++) {
        str = str + escape(args[i]) + actual[i + 1];
    };
    return str;
}

function escape(raw) {
    return raw.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;");
};

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
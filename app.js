const botaosimples = document.getElementById("simples")

// ao abrir a página, lembra a escolha anterior
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("escuro")
}

botaosimples.onclick = trocaTema

function trocaTema() {
    // se o body tem a classe "escuro", tira; se não tem, coloca
    document.body.classList.toggle("escuro")

    // salva a escolha no navegador
    if (document.body.classList.contains("escuro")) {
        localStorage.setItem("tema", "escuro")
    } else {
        localStorage.setItem("tema", "claro")
    }
}
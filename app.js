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


// ===== ANIMAÇÃO AO ROLAR (fade-in) =====

// observa cada elemento com a classe .fade-in e adiciona .visible
// quando ele entra na tela, disparando a transição definida no CSS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target) // anima só uma vez
        }
    })
}, { threshold: 0.15 }) // dispara quando 15% do elemento estiver visível

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el))
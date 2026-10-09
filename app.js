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


// ===== EFEITO DE DIGITAÇÃO NO SUBTÍTULO DO HERO =====

const frasesTyping = [
    "Estudante e Técnica em informática para internet.",
    "Futura Dev Front-end.",
    "Sempre aprendendo."
]

const elTyping = document.getElementById("typingSub")
const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches

if (elTyping && !semMovimento) {
    elTyping.textContent = "" // limpa o fallback antes de começar a digitar

    let frase = 0
    let letra = 0
    let apagando = false

    function digitar() {
        const atual = frasesTyping[frase]

        elTyping.textContent = apagando ? atual.slice(0, letra--) : atual.slice(0, letra++)

        let atraso = apagando ? 35 : 70

        if (!apagando && letra === atual.length + 1) {
            atraso = 1600 // pausa no final da frase antes de apagar
            apagando = true
        } else if (apagando && letra === 0) {
            apagando = false
            frase = (frase + 1) % frasesTyping.length
            atraso = 400 // pausa antes de começar a próxima frase
        }

        setTimeout(digitar, atraso)
    }

    digitar()
}
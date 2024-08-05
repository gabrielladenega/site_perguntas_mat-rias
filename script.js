const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Resolva log de 0,5 na base 2",
        alternativas: [
            {
                texto: "1",
                afirmacao: "Incorreto. Tente novamente! "
            },
            {
                texto: "-1",
                afirmacao: "Correto. Parabéns!"
            }
        ]
    },
    {
        enunciado: "Converta 122°C em F°",
        alternativas: [
            {
                texto: "187,6 F°",
                afirmacao: "Incorreto. Tente novamente!"
            },
            {
                texto: "251,6 F°",
                afirmacao: "Correto. Parabèns!"
            }
        ]
    },
    {
        enunciado: "Qual oração tem a seguinte estrutura: sujeito + verbo de ligação + predicato do sujeito?",
        alternativas: [
            {
                texto: "A comida está muito gostosa.",
                afirmacao: "Correto. Parabéns!"
            },
            {
                texto: "Ela canta lindamente.",
                afirmacao: "Incorreto. Tente novamente!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

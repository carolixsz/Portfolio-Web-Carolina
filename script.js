// apresentando o conteúdo atraves do JavaScript

//fazendo animação de mudança de sessões (TERMINAR DE PREENCHER)

//elementos dos ids apresentacao e resumo (Inicio)
document.getElementById("apresentacao").textContent = "Sou uma estudante curiosa pelo mundo da tecnologia em geral. Tenho interesses em desenvolvimento web e estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para meu futuro.";
document.getElementById("resumo").textContent = "Estou em constante evolução no campo de desenvolvimento web e pelo design gráfico, buscando sempre aprimorar minhas competências técnicas e colaborar com equipes multidisciplinares em projetos inovadores.";

//elementos dos ids trajetoria, competencias e tecnologias (Sobre Mim)

//----criando lista para trajetória profissional--------------
const listaTrajetoria = document.getElementById("trajetoria");
const itensTrajetoria = document.createElement("ul");

//itens da lista
const trajetoria1 = document.createElement("li");
trajetoria1.textContent = "Atualmente estudante do curso de TI no IF Sudeste MG - Campus Barbacena";
const trajetoria2 = document.createElement("li");
trajetoria2.textContent = "Atualmente estágiaria no setor pedagógico atuando como auxiliar pedagógico na Microlins Barbacena";
const trajetoria3 = document.createElement("li");
trajetoria3.textContent = "Suporte de TI e atendimento pelo INSS - Agência Barbacena em 2024";

//adicionando os itens à lista de trajetória
itensTrajetoria.appendChild(trajetoria1);
itensTrajetoria.appendChild(trajetoria2);
itensTrajetoria.appendChild(trajetoria3);


//----criando lista para competências--------------
const listaCompetencias = document.getElementById("competencias");
const itensCompetencias = document.createElement("ul");

//itens da lista de competências
const competencias1 = document.createElement("li");
competencias1.textContent = "Proatividade";
const competencias2 = document.createElement("li");
competencias2.textContent = "Trabalho em equipe";
const competencias3 = document.createElement("li");
competencias3.textContent = "Comprometimento";
const competencias4 = document.createElement("li");
competencias4.textContent = "Eficiencia na resolução de problemas";
const competencias5 = document.createElement("li");
competencias5.textContent = "Assertiva na comunicação";

//adicionando os itens à lista de competências
itensCompetencias.appendChild(competencias1);
itensCompetencias.appendChild(competencias2);
itensCompetencias.appendChild(competencias3);
itensCompetencias.appendChild(competencias4);
itensCompetencias.appendChild(competencias5);

//----criando lista para tecnologias estudadas--------------
const listaTecnologias = document.getElementById("tecnologias");
const itensTecnologias = document.createElement("ul");

//itens da lista de tecnologias
const tecnologias1 = document.createElement("li");
tecnologias1.textContent = "HTML";
const tecnologias2 = document.createElement("li");
tecnologias2.textContent = "CSS";
const tecnologias3 = document.createElement("li");
tecnologias3.textContent = "JavaScript";
const tecnologias4 = document.createElement("li");
tecnologias4.textContent = "C";
const tecnologias5 = document.createElement("li");
tecnologias5.textContent = "SQL";

itensTecnologias.appendChild(tecnologias1);
itensTecnologias.appendChild(tecnologias2);
itensTecnologias.appendChild(tecnologias3);
itensTecnologias.appendChild(tecnologias4);
itensTecnologias.appendChild(tecnologias5);


//apresentando as listas no HTML
document.getElementById("trajetoria").appendChild(itensTrajetoria);
document.getElementById("competencias").appendChild(itensCompetencias);
document.getElementById("tecnologias").appendChild(itensTecnologias);

//elementos dos ids projetos e experiencia (Projetos)
document.getElementById("pro1").textContent = "Primeiro projeto criado na disciplina de Construções de Páginas Web, com desenvolvimento do primeiro Hello Word em HTML, dando um grande início pela linguagem de marcação.";
document.getElementById("pro2").textContent = "Projeto criado na disciplina de Construções de Páginas Web, com desenvolvimento de um mini portfolio utilizando HTML e CSS, demonstrando habilidades em estilização e layout, além de boas práticas de design juntamente com o CSS.";
document.getElementById("pro3").textContent = "Terceiro projeto criado na disciplina de Lógica de Programação, com intuito de desenvolvimento de um sistema de controle de funcionários e departamentos em linguagem C, demonstrando habilidades em programação estruturada e manipulação de dados.";

//validação do formulário com o js
function validarForm(){

//definindo variáveis pra mudanças
    let n = document.getElementById("nome").value;
    let t = document.getElementById("telefone").value;

    let mostra = ""; //definindo uma variavel para apresentar na pagina

        if(n.length < 2){ //verificando se tem mais de uma letra
            mostra = "Digite um nome com pelo menos 2 letras!!";
        } else

        if(isNaN(t)){  //verificando se tem somente números 
            mostra = "No campo Contato,digite apenas números!!";
        }else {
             alert("Obrigada por entrar em contato!! :)");
        }
        
    document.getElementById("mensagem").textContent = mostra;
}
   

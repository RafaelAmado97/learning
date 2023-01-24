/** 
 * Exercício
 * 
 * Treinamento: if, else, objetos
 * 
 * Imagine 2 alunos de auto escola e eles fizeram o teste de avaliação.
 * Cada um deles tirou uma nota diferente na avaliação que vai de 0 até 10.
 * 
 * [x] Crie um objeto simbolizando cada um dos alunos (Pode escolher qualquer nome de variável válida)
 * [x] Crie uma propriedade em cada um dos objetos e dê o nome de nota
 * [x] Crie uma constante com a nota mínima para ser aprovado e dê o nome de notaDeCorte
 * [x] Verifique a nota de cada aluno e se eles forem aprovados exiba uma mensagem simbolizando o resultado
 * 
 */

const notaDeCorte = 6;

let aluno1 = {
    nota : 10,
    nome : "Gabriel"

}

let aluno2 = {
    nota : 5,
    nome : "Rafael"
}

if (aluno1.nota >= 6) {
    console.log("Parabéns", aluno1.nome,  "você passou no teste de avaliação.")
} else {
    console.log("Que pena,", aluno1.nome, "você não teve pontuação suficiente para passar.")
}

if (aluno2.nota >= 6) {
    console.log("Parabéns", aluno2.nome,  "você passou no teste de avaliação.")
} else {
    console.log("Que pena,", aluno2.nome ,"você não teve pontuação suficiente para passar.")
}
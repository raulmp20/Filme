class Filme {
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = [];
        this.avaliacao = [];
    }

    exibirDetalhes(){
        console.log(`Titulo: ${this.titulo}, \n `);
        console.log(`Ano: ${this.ano}, \n `);
        console.log(`Genero: ${this.genero}, \n `);
        console.log(`Duracao: ${this.duracao}, \n `);
    }

    filmeAssistido(){
        this.assistido = true;
        console.log(`O filme ${this.titulo} foi asssistido pelo usuario`)
    }

    avaliar(nota){
        this.avaliacao = nota
        console.log(`O usuario atribuiu uma nota ${this.avaliacao} para o filme ${this.titulo}`)
    }


}

const filme1 = new Filme('Harry Potter', '2011', 'Aventura', '2h11min');
const filme2 = new Filme('Barbie', '2023', 'Comédia', '2h');
const filme3 = new Filme('Oppenheimer', '2023', 'Suspense', '3h');

filme1.exibirDetalhes();
filme2.exibirDetalhes();
filme3.exibirDetalhes();

filme1.filmeAssistido();
filme2.filmeAssistido();
filme3.filmeAssistido();

filme1.avaliar(10);
filme2.avaliar(9);
filme3.avaliar(10);



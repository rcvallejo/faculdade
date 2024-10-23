import { Livro } from "@/classes/modelo/Livro";

export class ControleLivros {
  private livros: {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
  }[];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "O Enigma das Sombras",
        resumo:
          "Um grupo de arqueólogos descobre uma civilização antiga com segredos que podem mudar o destino da humanidade.",
        autores: ["Júlio Verne Filho", "Ana Clara Souza"],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "O Último Guardião",
        resumo:
          "Em um mundo devastado, um guerreiro solitário é o último defensor de um segredo que pode restaurar a paz.",
        autores: ["Miguel Silva", "Carla Dias"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "Além do Horizonte",
        resumo:
          "Uma jornada épica por terras desconhecidas, onde os viajantes enfrentam criaturas míticas e desafios inimagináveis.",
        autores: ["Lucas Pereira", "Fernanda Lima"],
      },
    ];
  }
  getLivros(): {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
  }[] {
    return this.livros;
  }
  incluir(livro: Livro): void {
    livro.codigo =
      this.livros.length > 0
        ? Math.max(...this.livros.map((l) => l.codigo)) + 1
        : 1;
    this.livros.push(livro);
    console.log("Livro a ser incluído:", livro);
  }
  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}

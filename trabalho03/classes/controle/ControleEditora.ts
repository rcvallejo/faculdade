export class ControleEditora {
  private editoras: { codEditora: number; nome: string }[];

  constructor() {
    this.editoras = [
      { codEditora: 1, nome: "Alta Books" },
      { codEditora: 2, nome: "Bookman" },
      { codEditora: 3, nome: "Addison Wesley" },
      { codEditora: 4, nome: "Pearson" },
    ];
  }
  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras
      .filter((e) => e.codEditora === codEditora)
      .map((e) => e.nome)[0];
    return editora;
  }
  getEditoras(): { codEditora: number; nome: string }[] {
    return this.editoras;
  }
}

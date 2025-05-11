export interface IMonument {
  id: number;
  x: number;
  y: number;
  nom: string;
}

export interface IDecoration {
  type: string;
  x: number;
  y: number;
}

export interface ILampadaire {
  type: string;
  x: number;
  y: number;
}

export interface ICemeteryGridConfig {
  cols?: number;
  spacing?: number;
  offsetLampadaire?: number;
  numDecorations?: number;
  numLampadaires?: number;
  typesDecorations?: string[];
}

export class CemeteryGrid {
  cols: number;
  spacing: number;
  centerX: number;
  offset: number;
  offsetLampadaire: number;
  numDecorations: number;
  numLampadaires: number;
  typesDecorations: string[];

  private monuments: IMonument[] = [];
  private decorations: IDecoration[] = [];
  private lampadaires: ILampadaire[] = [];

  constructor(config: ICemeteryGridConfig = {}) {
    this.cols = config.cols ?? 8;
    this.spacing = config.spacing ?? 250;
    this.centerX = (this.cols * this.spacing) / 2;
    this.offset = this.spacing / 2;
    this.offsetLampadaire = config.offsetLampadaire ?? 300;
    this.numDecorations = config.numDecorations ?? 300;
    this.numLampadaires = config.numLampadaires ?? 6;
    this.typesDecorations = config.typesDecorations ?? ['splash', 'bush', 'ground_6'];

    // Génération initiale de quelques monuments
    for (let i = 0; i < 20; i++) {
      this.addMonument(i);
    }

    // Génération des décorations aléatoires
    for (let i = 0; i < this.numDecorations; i++) {
      const type = this.typesDecorations[Math.floor(Math.random() * this.typesDecorations.length)];
      const x = Math.floor(Math.random() * this.cols) * this.spacing + this.offset;
      const y = Math.floor(Math.random() * (this.monuments.length / this.cols)) * this.spacing + this.offset;
      this.addDecoration(type, x, y);
    }

    // Génération des lampadaires symétriques
    for (let i = 0; i < this.numLampadaires; i++) {
      const y = Math.floor(Math.random() * (this.monuments.length / this.cols)) * this.spacing;
      this.addLampadaire('lantern_1', this.centerX - this.offsetLampadaire, y);
      this.addLampadaire('lantern_2', this.centerX + this.offsetLampadaire, y);
    }
  }

  addMonument(id: number, nom?: string) {
    const x = (id % this.cols) * this.spacing;
    const y = Math.floor(id / this.cols) * this.spacing;
    this.monuments.push({ id, x, y, nom: nom ?? `Défunt ${id}` });
  }

  getMonuments(): IMonument[] {
    return this.monuments;
  }

  addDecoration(type: string, x: number, y: number) {
    this.decorations.push({ type, x, y });
  }

  getDecorations(): IDecoration[] {
    return this.decorations;
  }

  addLampadaire(type: string, x: number, y: number) {
    this.lampadaires.push({ type, x, y });
  }

  getLampadaires(): ILampadaire[] {
    return this.lampadaires;
  }

  clear() {
    this.monuments = [];
    this.decorations = [];
    this.lampadaires = [];
  }
}

const grid = new CemeteryGrid();
console.table(grid.getMonuments(), ['id', 'x', 'y', 'nom']);

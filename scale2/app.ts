interface IScalable {
    getTitle(): string;

    getScale(): number;
}

class Tomato implements IScalable {
    constructor(
        private title: string,
        private weight: number
    ) {
    }

    public getTitle = (): string => {
        return `tomato ${this.title}`;
    }

    public getScale(): number {
        return this.weight;
    }
}

class Apple implements IScalable {
    constructor(
        private title: string,
        private weight: number
    ) {
    }

    public getTitle = (): string => {
        return `apple ${this.title}`;
    }

    public getScale(): number {
        return this.weight;
    }
}

class Scales {
    constructor(
        private products: Array<IScalable> = []
    ) {
    }

    public add(...products: Array<IScalable>): void {
        products.forEach((product: IScalable) => this.products.push(product));
    }

    public getSumScale(): number {
        return this.products.reduce((acc: number, product: IScalable) => acc + product.getScale(), 0);
    }

    public getTitleList(): Array<string> {
        return this.products.map((product: IScalable) => product.getTitle());
    }
}

const scales: Scales = new Scales();

const tomato1: Tomato = new Tomato('heirloom', 100);
const tomato2: Tomato = new Tomato('cherry', 50);

const apple1: Apple = new Apple('akane', 155);
const apple2: Apple = new Apple('ariane', 128);
const apple3: Apple = new Apple('bismarck', 180);

scales.add(tomato1, tomato2, apple1, apple2, apple3);

console.log(`Products: [${scales.getTitleList()}]
Weight: ${scales.getSumScale()} grams`);

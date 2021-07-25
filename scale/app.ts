class Product {
    protected title: string;
    protected weight: number;

    constructor(title: string, weight: number) {
        this.title = title;
        this.weight = weight;
    }

    public getTitle(): string {
        return this.title;
    }

    public getScale(): number {
        return this.weight;
    }
}

class Tomato extends Product {
    constructor(title: string, weight: number) {
        super(title, weight);
    }

    getTitle = (): string => {
        super.getTitle();
        return `tomato ${this.title}`;
    }
}

class Apple extends Product {
    constructor(title: string, weight: number) {
        super(title, weight);
    }

    getTitle = (): string => {
        super.getTitle();
        return `apple ${this.title}`;
    }
}

class Scales {
    private products: Array<Product> = [];

    public add(...products: Array<Product>): void {
        products.forEach((product: Product) => this.products.push(product));
    }

    public getSumScale(): number {
        return this.products.reduce((acc: number, product: Product) => acc + product.getScale(), 0);
    }

    public getTitleList(): Array<string> {
        return this.products.map((product: Product) => product.getTitle());
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

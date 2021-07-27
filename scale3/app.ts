/**
 * @class Product
 */
class Product {
    constructor(
        private title: string,
        private weight: number
    ) {
    }

    public getTitle(): string {
        return this.title;
    }

    public getScale(): number {
        return this.weight;
    }
}

/**
 * @interface IStorageEngine
 */
interface IStorageEngine {
    addItem(item: Product): void;

    getItem(index: number): Product;

    getCount(): number;
}

/**
 * @class Scales
 */
class Scales<StorageEngine extends IStorageEngine> {
    constructor(
        private storageEngine: StorageEngine
    ) {
    }

    public add(product: Product): void {
        this.storageEngine.addItem(product);
    }

    public getSumScale(): number {
        const length = this.storageEngine.getCount();
        let totalWeight = 0;

        for (let i = 0; i < length; i++) {
            totalWeight += this.storageEngine.getItem(i).getScale();
        }

        return totalWeight;
    }

    public getTitleList(): Array<string> {
        const length = this.storageEngine.getCount();
        const namesList = [];

        for (let i = 0; i < length; i++) {
            namesList.push(this.storageEngine.getItem(i).getTitle());
        }

        return namesList;
    }
}

/**
 * @class ScalesStorageEngineArray
 */
class ScalesStorageEngineArray implements IStorageEngine {
    constructor(
        private products: Array<Product> = []
    ) {
    }

    public addItem(item: Product): void {
        this.products.push(item);
    }

    public getCount(): number {
        return this.products.length;
    }

    public getItem(index: number): Product {
        return this.products[index];
    }
}

/**
 * @class ScalesStorageEngineLocalStorage
 */
class ScalesStorageEngineLocalStorage implements IStorageEngine {
    constructor(
        private localStorageKey: string = localStorageKey,
    ) {
    }

    private getLocalStorageItems(): Array<Product> {
        return localStorage.getItem(this.localStorageKey) ?
            JSON.parse(localStorage.getItem(this.localStorageKey)) :
            [];
    }

    addItem(item: Product): void {
        const items = this.getLocalStorageItems();
        items.push(item);

        localStorage.setItem(this.localStorageKey, JSON.stringify(items));
    }

    getCount(): number {
        const items = this.getLocalStorageItems();

        return items.length;
    }

    getItem(index: number): Product {
        const items = <any>this.getLocalStorageItems();

        return new Product(items[index].title, items[index].weight);
    }
}

const product1: Product = new Product('heirloom', 100);
const product2: Product = new Product('cherry', 50);
const product3: Product = new Product('slivka', 80);

const scalesArray = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray);
scalesArray.add(product1);
scalesArray.add(product2);
scalesArray.add(product3);

console.log(`Products: [${scalesArray.getTitleList()}]
Weight: ${scalesArray.getSumScale()} grams`);


const product4: Product = new Product('akane', 155);
const product5: Product = new Product('ariane', 128);
const product6: Product = new Product('bismarck', 180);

const scalesLS = new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage('products'));
scalesLS.add(product4);
scalesLS.add(product5);
scalesLS.add(product6);

console.log(`Products: [${scalesLS.getTitleList()}]
Weight: ${scalesLS.getSumScale()} grams`);
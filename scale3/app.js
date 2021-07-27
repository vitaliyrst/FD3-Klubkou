/**
 * @class Product
 */
var Product = /** @class */ (function () {
    function Product(title, weight) {
        this.title = title;
        this.weight = weight;
    }
    Product.prototype.getTitle = function () {
        return this.title;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
/**
 * @class Scales
 */
var Scales = /** @class */ (function () {
    function Scales(storageEngine) {
        this.storageEngine = storageEngine;
    }
    Scales.prototype.add = function (product) {
        this.storageEngine.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var length = this.storageEngine.getCount();
        var totalWeight = 0;
        for (var i = 0; i < length; i++) {
            totalWeight += this.storageEngine.getItem(i).getScale();
        }
        return totalWeight;
    };
    Scales.prototype.getTitleList = function () {
        var length = this.storageEngine.getCount();
        var namesList = [];
        for (var i = 0; i < length; i++) {
            namesList.push(this.storageEngine.getItem(i).getTitle());
        }
        return namesList;
    };
    return Scales;
}());
/**
 * @class ScalesStorageEngineArray
 */
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray(products) {
        if (products === void 0) { products = []; }
        this.products = products;
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    return ScalesStorageEngineArray;
}());
/**
 * @class ScalesStorageEngineLocalStorage
 */
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage(localStorageKey) {
        if (localStorageKey === void 0) { localStorageKey = localStorageKey; }
        this.localStorageKey = localStorageKey;
    }
    ScalesStorageEngineLocalStorage.prototype.getLocalStorageItems = function () {
        return localStorage.getItem(this.localStorageKey) ?
            JSON.parse(localStorage.getItem(this.localStorageKey)) :
            [];
    };
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var items = this.getLocalStorageItems();
        items.push(item);
        localStorage.setItem(this.localStorageKey, JSON.stringify(items));
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var items = this.getLocalStorageItems();
        return items.length;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var items = this.getLocalStorageItems();
        return new Product(items[index].title, items[index].weight);
    };
    return ScalesStorageEngineLocalStorage;
}());
var product1 = new Product('heirloom', 100);
var product2 = new Product('cherry', 50);
var product3 = new Product('slivka', 80);
var scalesArray = new Scales(new ScalesStorageEngineArray);
scalesArray.add(product1);
scalesArray.add(product2);
scalesArray.add(product3);
console.log("Products: [" + scalesArray.getTitleList() + "]\nWeight: " + scalesArray.getSumScale() + " grams");
var product4 = new Product('akane', 155);
var product5 = new Product('ariane', 128);
var product6 = new Product('bismarck', 180);
var scalesLS = new Scales(new ScalesStorageEngineLocalStorage('products'));
scalesLS.add(product4);
scalesLS.add(product5);
scalesLS.add(product6);
console.log("Products: [" + scalesLS.getTitleList() + "]\nWeight: " + scalesLS.getSumScale() + " grams");
//# sourceMappingURL=app.js.map
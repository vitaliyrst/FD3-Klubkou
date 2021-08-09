var Tomato = /** @class */ (function () {
    function Tomato(title, weight) {
        var _this = this;
        this.title = title;
        this.weight = weight;
        this.getTitle = function () {
            return "tomato " + _this.title;
        };
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var Apple = /** @class */ (function () {
    function Apple(title, weight) {
        var _this = this;
        this.title = title;
        this.weight = weight;
        this.getTitle = function () {
            return "apple " + _this.title;
        };
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Scales = /** @class */ (function () {
    function Scales(products) {
        if (products === void 0) { products = []; }
        this.products = products;
    }
    Scales.prototype.add = function () {
        var _this = this;
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        products.forEach(function (product) { return _this.products.push(product); });
    };
    Scales.prototype.getSumScale = function () {
        return this.products.reduce(function (acc, product) { return acc + product.getScale(); }, 0);
    };
    Scales.prototype.getTitleList = function () {
        return this.products.map(function (product) { return product.getTitle(); });
    };
    return Scales;
}());
var scales = new Scales();
var tomato1 = new Tomato('heirloom', 100);
var tomato2 = new Tomato('cherry', 50);
var apple1 = new Apple('akane', 155);
var apple2 = new Apple('ariane', 128);
var apple3 = new Apple('bismarck', 180);
scales.add(tomato1, tomato2, apple1, apple2, apple3);
console.log("Products: [" + scales.getTitleList() + "]\nWeight: " + scales.getSumScale() + " grams");
//# sourceMappingURL=app.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(title, weight) {
        this.title = title;
        this.weight = weight;
    }
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(title, weight) {
        var _this = _super.call(this, title, weight) || this;
        _this.getTitle = function () {
            return "tomato " + _this.title;
        };
        return _this;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(title, weight) {
        var _this = _super.call(this, title, weight) || this;
        _this.getTitle = function () {
            return "apple " + _this.title;
        };
        return _this;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}(Product));
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
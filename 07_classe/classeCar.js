var Car = /** @class */ (function () {
    // private isHybrid: boolean;
    // constructor(private isHybri: boolean, color: string ='red') {
    //     this.isHybrid = isHybri;
    //     this.color = color;
    // }
    function Car(isHybrid, color) {
        if (color === void 0) { color = 'red'; }
        this.isHybrid = isHybrid;
        this.distance = 0;
        this.color = color;
    }
    Car.prototype.getConsommationEssence = function () {
        return this.isHybrid ? 'Faible Conso' : 'Forte Conso!';
    };
    Car.prototype.drive = function (trajet) {
        this.distance += trajet;
    };
    Car.immatriculation = function () {
        return 'ABCD-1234!';
    };
    Object.defineProperty(Car.prototype, "distance", {
        get: function () {
            return this.distance;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());

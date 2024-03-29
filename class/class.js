var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shape = (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shoutout = function () {
    };
    return Shape;
})();

var Shape3D = (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        _super.call(this, name, width, height);
        this.name = name;
        this.volume = length * this.area;
    }
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };

    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
})(Shape);

var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());

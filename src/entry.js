// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
    }, Object.create(null));
}
console.log(strEnum(["a", "b"]));
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var a = new Test();
console.log(a.name);
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var people1 = {
    name: "1"
};

function overload(a) {
    return a;
}
var overloadIns = overload;
var num = overloadIns(1);
var str = overloadIns("1");

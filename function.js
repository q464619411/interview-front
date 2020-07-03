function CISDI_JS(n) {
    var fn = function(x) {
        return CISDI_JS(n + x);
    };
    fn.toString = function() {
        return n;
    };
    return fn;
}
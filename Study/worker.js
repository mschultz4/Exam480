onmessage = function (e) {

    postMessage(calculatePI(e.data));

    function calculatePI(loops) {
        var Pi = 0, n = 1, c = loops;
        for (var i = 0; i <= c; i++) {
            Pi = Pi + (4 / n) - (4 / (n + 2));
            n = n + 4;
        }
        return Pi;
    }
};
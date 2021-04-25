function moneyFormat(n) {
    if (n == null || n === "" || typeof n == "object") { return "" }
    else if (typeof n == "number") { n = n.toString() }

    var a, x, reverseTemp = "", reverse = "";

    a = parseFloat(n.replace(",", ".")).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.');

    x = a.substr(a.length - 3).replace(".", ",");

    for (i = a.length - 1; i >= 0; i--) { reverseTemp += a[i]; }

    reverseTemp = reverseTemp.replace(".", ",");

    for (i = reverseTemp.length - 1; i >= 0; i--) { reverse += reverseTemp[i]; }

    if (x == ",00") {
        reverse = reverse.slice(0, a.length-3)
    }
    
    return reverse;
}

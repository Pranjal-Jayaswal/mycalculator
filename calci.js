var op1 = null;
var op2 = null;
var ope = null;
var scrn = document.getElementById("screen");
var btn = document.getElementsByClassName("btn");
var main = function () {
    var type = this.getAttribute('data-type');
    if (type == 'digit') {
        var value = this.getAttribute('data-value');
        scrn.append(value);
    } else if (type == 'operand') {
        var value = this.getAttribute('data-value');
        op1 = parseFloat(scrn.textContent);
        ope = value;
        scrn.innerText = "";
    } else if (type == 'equal') {
        var value = this.getAttribute('data-value');
        op2 = parseFloat(scrn.textContent);
        var ans = eval(op1 + " " + ope + " " + op2);
        scrn.innerText = ans;
    } else if (type == 'AC') {
        scrn.innerText = "";
    } else if (type == '+-') {
        var pn = parseFloat(scrn.textContent);
        if (scrn.textContent == "") {
            scrn.innerText = '-';
        } else if (scrn.textContent == "-") {
            scrn.innerText = " ";
        } else { pn = parseFloat('-' + pn); }

        scrn.innerText = pn;
    }
};
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click', main)
}


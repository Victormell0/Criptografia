function encrypt() {
    var input = document.getElementById("input").value.toLowerCase();
    if (!/^[a-z]+$/.test(input)) {
        alert("Por favor, insira apenas letras minúsculas do alfabeto.");
        return;
    }
    var output = input.replace(/e/g, "enter")
                      .replace(/i/g, "imes")
                      .replace(/a/g, "ai")
                      .replace(/o/g, "ober")
                      .replace(/u/g, "ufat");
    document.getElementById("input").value = output;
}

function decrypt() {
    var input = document.getElementById("input").value.toLowerCase();
    if (!/^[a-z]+$/.test(input)) {
        alert("Por favor, insira apenas letras minúsculas do alfabeto.");
        return;
    }
    var output = input.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ai/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");
    document.getElementById("input").value = output;
}

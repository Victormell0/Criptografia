function encrypt() {
    var input = document.getElementById("input").value.toLowerCase();
    if (!/^[a-z]+$/.test(input)) {
        alert("Por favor, insira apenas letras minúsculas.");
        return;
    }
    var output = document.getElementById("output");
    output.value = input.replace(/e/g, "enter")
                      .replace(/i/g, "imes")
                      .replace(/a/g, "ai")
                      .replace(/o/g, "ober")
                      .replace(/u/g, "ufat");
}

function decrypt() {
    var input = document.getElementById("input").value.toLowerCase();
    if (!/^[a-z]+$/.test(input)) {
        alert("Por favor, insira apenas letras minúsculas.");
        return;
    }
    var output = document.getElementById("output");
    output.value = input.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ai/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");
}

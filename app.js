function encrypt() {
    var input = document.getElementById("input").value;
    
    // Verifica se há letras maiúsculas no texto de entrada
    if (/[A-Z]/.test(input)) {
        alert("Por favor, insira apenas letras minúsculas e sem acento.");
        return;
    }
    
    var output = input.replace(/e/g, "enter")
                      .replace(/i/g, "imes")
                      .replace(/a/g, "ai")
                      .replace(/o/g, "ober")
                      .replace(/u/g, "ufat");
    document.getElementById("output").value = output; // Atualiza o valor da caixa de texto
    checkOutputText(); // Verifica se há texto na caixa de resultado
}

function decrypt() {
    var input = document.getElementById("input").value;
    
    // Verifica se há letras maiúsculas no texto de entrada
    if (/[A-Z]/.test(input)) {
        alert("Por favor, insira apenas letras minúsculas e sem acento.");
        return;
    }
    
    var output = input.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ai/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");
    document.getElementById("output").value = output; // Atualiza o valor da caixa de texto
    checkOutputText(); // Verifica se há texto na caixa de resultado
}

function copyToClipboard() {
    var outputText = document.getElementById("output").value;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert("Texto copiado para a área de transferência.");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}


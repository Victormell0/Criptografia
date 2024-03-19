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
    document.getElementById("input").value = output;
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
    document.getElementById("input").value = output;
}

function copyToClipboard() {
    var outputText = document.getElementById("output").innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert("Texto copiado para a área de transferência.");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

// Função para verificar se há texto na caixa de resultado e exibir/ocultar o botão de cópia conforme necessário
function checkOutputText() {
    var outputText = document.getElementById("output").innerText.trim();
    var copyButton = document.getElementById("copyButton");
    if (outputText.length > 0) {
        copyButton.style.display = "inline-block"; // Mostra o botão
    } else {
        copyButton.style.display = "none"; // Oculta o botão
    }
}

// Chama a função de verificação quando houver uma mudança na caixa de resultado
document.getElementById("output").addEventListener("input", checkOutputText);

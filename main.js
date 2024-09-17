document.getElementById("numForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido! O valor de B é maior que o valor de A.");
    } else {
        alert("Formulário inválido! O valor de B deve ser maior que o valor de A.");
    }
});
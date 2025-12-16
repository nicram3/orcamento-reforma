function calcular() {
    var metros = document.getElementById("metros").value;
    var casa = document.getElementById("casa").value;
    var varanda = document.getElementById("varanda").value;
    var reforma = document.getElementById("reforma").value;

    if (metros ==="" || metros <= 0) {
        alert("Informe a metragem corretamente");
        return;
    }


var precoPorMetro = 800

if (reforma === "completa") {
    precoPorMetro = 1500;
}

var total = metros*precoPorMetro;

if (varanda === "sim") {
    total += 5000;
}

document.getElementById("resultado").innerText = "Orçamento aproximado: R$" + total.toFixed(2);
}

function enviarWhatsApp() {
    var metros = document.getElementById("metros").value;
    var varanda = document.getElementById("varanda").value;
    var tipo = document.getElementById("tipo").value;
    var whatsapp = document.getElementById("whatsapp").value;

    if (whatsapp === "") {
        alert("Informe o número do WhatsApp");
        return;
    }

    var precoPorMetro = 800;
    if (tipo === "completa") {
        precoPorMetro = 1500;
    }

    var total = metros * precoPorMetro;
    if (varanda === "sim") {
        total += 5000;
    }

    var mensagem =
        "Olá! Segue o orçamento aproximado da reforma:%0A%0A" +
        "Metragem: " + metros + " m²%0A" +
        "Varanda: " + varanda + "%0A" +
        "Tipo de reforma: " + tipo + "%0A%0A" +
        "Valor estimado: R$ " + total.toFixed(2) + "%0A%0A" +
        "Obs: valor aproximado, sujeito à visita técnica.";

    var link = "https://wa.me/" + whatsapp + "?text=" + mensagem;

    window.open(link, "_blank");
}

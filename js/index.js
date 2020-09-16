function openCall(form) {
    let text = '';
    let inputs = form.querySelectorAll("input[type='text']");

    inputs.forEach(element => {
        element.value.trim();
        if (element.id == 'phone') {
            text += 'Telefone para contato: \n' + element.value + '\n';
        } else if (element.id == 'cell') {
            text += element.value + '\n';
        } else {
            if (element.value.length < 1) {
                element.value = 'x';
            }
            text += document.querySelector("label[for='" + element.id + "']").textContent + ": " + titleize(element.value) + "\n";
        }

    });

    // Pega o incidente
    text += document.querySelector("label[for='" + form.request.id + "']").textContent + ": " + form.request.options[request.selectedIndex].text + "\n";

    // Pega a observação
    text += document.querySelector("label[for='" + form.observation.id + "']").textContent + ": " + form.observation.value + "\n";
    form.result.value = text;
    copyResult(form.result);
    return false;
}

function closeCall(form) {
    let text = '';
    let inputs = form.querySelectorAll("input[type='text']");

    let equipchange = form.querySelector('label[for="equipchange"').textContent;
    let equip = form.querySelector('input[name="equipchange"]:checked').value;
    text += equipchange + "\n R: " + equip + "\n";

    let solution = form.querySelector('label[for="solution"]').textContent;
    let sol = form.querySelector('input[name="solution"]:checked').value;
    text += solution + "\n R: " + sol + "\n";


    inputs.forEach(element => {
        element.value.trim();
        if (element.value.length < 1) {
            element.value = 'x';
        }
        text += form.querySelector("label[for='" + element.id + "']").textContent + "\n R:" + titleize(element.value) + "\n";
    });

    // Pega o incidente
    text += document.querySelector("label[for='" + form.requestClose.id + "']").textContent + "\n R: " + form.requestClose.options[request.selectedIndex].text + "\n";

    // Pega a observação
    text += document.querySelector("label[for='" + form.resolution.id + "']").textContent + "\n R: " + form.resolution.value + "\n";
    form.resultClose.value = text;
    copyResult(form.resultClose);
    return false;
}

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

function copy(element) {
    let copyText = element.parentNode;
    copyText = copyText.getElementsByTagName('textarea');
    let result = undefined;
    for (let i = 0; i < copyText.length; i++) {
        if (copyText[i].name == 'result') {
            result = copyText[i];
        }
    }
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    clearSelection();
}

function copyResult(element) {
    let copyText = element;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    clearSelection();
}

function clearSelection() {
    if (window.getSelection) { window.getSelection().removeAllRanges(); } else if (document.selection) { document.selection.empty(); }
}

let phoneMask = IMask(document.getElementById('phone'), { mask: '(00)0000-0000' });

let cellMask = IMask(document.getElementById('cell'), { mask: '(00)00000-0000' });

let contractMask = IMask(document.getElementById('contract'), { mask: '00000' });

let fixCallMask = IMask(document.getElementById('fixedCall'), { mask: '000000000' });


function defaultMessage(element) {
    if (element.id === "ind") {
        document.getElementById("observation").value = "O cliente entrou em contato afirmando indisponibilidade de link.";
    } else if (element.id === "len") {
        document.getElementById("observation").value = "O cliente entrou em contato afirmando lentidão na rede.";
    } else {
        document.getElementById("observation").value = "O cliente entrou em contato afirmando problemas na telefonia."
    }

}
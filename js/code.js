const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const getText = () => {
    let stringInput = document.getElementById("inputText").value.toLowerCase();
    let textWithoutAccents = removeAccents(stringInput);
    return textWithoutAccents;
};

const showInfoStyle = (textEncoded) => {
    document.getElementById("imgDoll").style.display = "none";
    document.getElementById("titleText").style.display = "none";
    document.getElementById("paragraph").innerHTML = textEncoded;
    document.getElementById("paragraph").style.marginTop = "30px";
    document.getElementById("paragraph").style.textAlign = "justify";
    document.getElementById("btn-copy").style.display = "initial";
    document.getElementById("btn-copy").style.marginBottom = "30px";
    document.querySelector("aside").style.justifyContent = "space-between";
};

const sortText = (textEncoded, chars) => {
    for (const char in chars) {
        textEncoded = textEncoded.replaceAll(chars[char], char);
    }
    showInfoStyle(textEncoded);
    return textEncoded;
};

const encrypt = () => {
    let chars = { imes: "i", ai: "a", ober: "o", ufat: "u" };
    let text = getText();
    if (text.length <= 0) {
        alert("El texto a encriptar debe tener al menos un carácter.");
        return;
    }
    if (text.length) {
        let textEncoded = text.replaceAll("e", "enter");
        sortText(textEncoded, chars);
        return;
    }
};

const decrypt = () => {
    let chars = { i: "imes", a: "ai", o: "ober", u: "ufat" };
    let text = getText();
    if (text.length <= 0) {
        alert("El texto a desencriptar debe tener al menos un carácter.");
        return;
    }
    if (text.length) {
        let textEncoded = text.replaceAll("enter", "e");
        sortText(textEncoded, chars);
        return;
    }
};

const copy = () => {
    let copyText = document.getElementById("paragraph").innerText;
    navigator.clipboard
        .writeText(copyText)
        .then(() => alert("Text has been copied!"));
};

let btnEncrypt = document.getElementById("btn-encrypt");
btnEncrypt.onclick = encrypt;

let btnDecrypt = document.getElementById("btn-decrypt");
btnDecrypt.onclick = decrypt;

let btnCopy = document.getElementById("btn-copy");
btnCopy.onclick = copy;

const nomorInput = document.querySelector('[data-input="nomor"]');
const lanjutButton = document.querySelector('[data-button="lanjut"]');

lanjutButton.onclick = () => {
    firebase.database().ref().push({
        nomor: nomorInput.value
    });
};


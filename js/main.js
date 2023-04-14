const encryptBtn = document.getElementById('encrypt');
const decryptBtn = document.getElementById('decrypt');
const copyBtn = document.getElementById('copy');

const resultText = document.getElementById('result_text');

const encryptKeys = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

const decryptKeys = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
}

copyBtn.addEventListener('click', () => {
  const text = document.getElementById('result_text').innerText;
  navigator.clipboard.writeText(text);
});

encryptBtn.addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const encryptedText = encryptOrDecrypt(text, encryptKeys);
  if (!encryptedText.isEmpty) {
    document.getElementById('without_text').style.display = 'none';
    document.getElementById('with_text').style.display = 'flex';
  }
  resultText.innerHTML = encryptedText;
});

decryptBtn.addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const decryptedText = encryptOrDecrypt(text, decryptKeys);
  if (!decryptedText.isEmpty) {
    document.getElementById('without_text').style.display = 'none';
    document.getElementById('with_text').style.display = 'flex';
  }
  resultText.innerHTML = decryptedText;
});

function encryptOrDecrypt(text, keys) {
  
  text = text.toLowerCase();

  const regex = new RegExp(Object.keys(keys).join("|"), "g");

  return text.replace(regex, match => keys[match]);
}
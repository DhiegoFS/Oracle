function decodeText() {
  const encodedText = document.getElementById('encoded-text').value.trim();
  const decodedText = decodeURIComponent(encodedText);
  document.getElementById('decoded-text').value = decodedText;
}

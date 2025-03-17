window.addEventListener('load', (event) => {
  document.getElementById('bi_value').addEventListener('change', goToTab);
  function goToTab() {
    const inputValue = this.value;
    var links = document.getElementById('pills-tab');
    switch (inputValue) {
      case '1':
        document.getElementById('bi_txt').innerHTML = inputValue;
        break;
      case '2':
        document.getElementById('bi_txt').innerHTML = inputValue;
        break;
      case '3':
        document.getElementById('bi_txt').innerHTML = inputValue;
        break;
      default:
        document.getElementById('bi_txt').innerHTML = inputValue;
    }
  }
});
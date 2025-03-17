document.getElementById('bi_value').addEventListener('change', function(){
  setTimeout(function(){
    goToTab()
  }, 3000);
});
document.getElementById('bi_value').addEventListener('keyup', function(){
  goToTab();
});

// setTimeout(function(){
    goToTab()
  // }, 3000);

function goToTab() {
        var inputValue = document.getElementById('bi_value').value;
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

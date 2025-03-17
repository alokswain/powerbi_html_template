goToTab()

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

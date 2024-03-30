document.addEventListener('keydown', function(event) {
    let selectedText = window.getSelection().toString();
    let sym = ['.', ',', '/', '_', '~', '@', '#', '&', '^', ':', ';', '*', '«', '»']

    sym.forEach(function(s) {
        selectedText.replace(s, " ");
    });

    if(event.key == "ArrowUp"){
        chrome.runtime.sendMessage({data: selectedText});
    }
});
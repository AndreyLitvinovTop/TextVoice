chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    const data = message.data;
    let speech = new SpeechSynthesisUtterance(data);
    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
});
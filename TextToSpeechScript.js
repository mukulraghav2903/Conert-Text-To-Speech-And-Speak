const userText=document.getElementById("InputText");
const SpeechBtn=document.getElementById("speech");

SpeechBtn.addEventListener('click',function() {
    speechText=userText.value;
    
    let speechData=new SpeechSynthesisUtterance();
    speechData.text=speechText;
    speechSynthesis.speak(speechData);
});
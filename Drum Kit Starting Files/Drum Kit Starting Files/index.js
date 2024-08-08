const soundPaths = ['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/crash.mp3', 
                   'sounds/kick-bass.mp3','sounds/snare.mp3'];
                    
let index=0;
function handleClick(index) {
    const audio = new Audio(soundPaths[index]);
    audio.play();
    
}                    
const buttons = document.querySelectorAll('.drum');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        handleClick(i);
        this.style.color="green";
      });
}

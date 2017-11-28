// Play sound associated with keyboard key
function playSound(e){
    const audio = document.querySelector("audio[data-key='" + e.keyCode + "']");
    const key = document.querySelector(".key[data-key='" + e.keyCode + "']");
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    // Add playing animation
    key.classList.add("playing");
}

// Add event listener to all keys for when transition has ended
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// Remove playing animation
function removeTransition(e){
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

// Add Event Listener to play sound when keydown
window.addEventListener("keydown", playSound);
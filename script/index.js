const keys = document.querySelectorAll(".key")

const play = (note) => {
    const audio = new Audio(`../notas/${note}.wav`)
    audio.play()
}

const handle_mousedown = key => {
    play(key.getAttribute('data-note'))
    if(key.className.includes('black')) {
        key.style.background = 'linear-gradient(#333, #090909)'
    } else {
        key.style.background = "#ddd"
    }
    
}
const handle_mouseup = key => {
    if(key.className.includes('black')) {
        key.style.background =  'linear-gradient(#090909, #333)'
    } else {
        key.style.background = "#fff"
    }
   
}

keys.forEach(key => {
    key.addEventListener("mousedown", () => {
        handle_mousedown(key)
    })
    key.addEventListener("mouseup", () => {
        handle_mouseup(key)
    })
    key.addEventListener("touchstart", () => {
        handle_mousedown(key)
    })

})

function share() {
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(window.location.href);
  
    // Alert the copied text
    alert("Copied the text");
  }
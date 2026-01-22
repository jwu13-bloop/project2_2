const textDisplay = document.getElementById('overlay');

const blob = document.getElementById("blob");


let scale = 1; //normal//

// Initialize SpeechRecognition//
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.lang = 'en-US'; // English (United States)//

recognition.interimResults = true;
recognition.continuous = true;


// Display recognized text//
recognition.onresult = function (event) {

    let transcript = event.results[event.results.length - 1][0].transcript;

    //declare constants and set variable
    // /keyword/=text it is searching for, i = case insensitive, returns true if found//
    // follow this format: const hasKeyword = /keyword/i.test(transcript)

    const hasGrow = /grow/i.test(transcript);
    const hasShrink = /shrink/i.test(transcript);
    const hasSleep = /\bsleep\b/i.test(transcript);
    const hasWake = /\bwake up\b/i.test(transcript);
    const hasBlush = /\bblush\b/i.test(transcript);
    const hasHappy = /\bhappy\b/i.test(transcript);
    const hasRainbow = /\brainbow\b/i.test(transcript);
    const hasLilac = /\blilac\b/i.test(transcript);


//removes previous statements
    textDisplay.classList.remove("lilac", "sleep", "wake", "blush", "happy", "rainbow", "shrink", "grow");

 //blob scales
 //--scale was declared before in css
    if (hasGrow) {
        scale += 0.1;
        blob.style.setProperty('--scale', scale);
        textDisplay.classList.add("grow")
    }
    if (hasShrink) {
        scale -= 0.1;
        blob.style.setProperty('--scale', scale);
        textDisplay.classList.add("shrink")

    }

//blob color change and text change
//??how do i only highlight the word

//recalls variable, if variable is true
    if (hasSleep) {
        blob.style.background = 'radial-gradient(circle at 30% 30%, #56615e, #171717)';
        document.body.classList.add("sleep2");
        textDisplay.classList.add("sleep");
    }
    if (hasWake) {
        blob.style.background = 'radial-gradient(circle at 30% 30%, #7fffd4, #1e90ff)';
        document.body.classList.add("wake2");
        textDisplay.classList.add("wake");

    }
    if (hasBlush) {
        blob.style.background = 'radial-gradient(circle at 30% 30%, #f6ccd9, #ff1e65)';
        textDisplay.classList.add("blush");

    }
    if (hasHappy) {
        blob.style.background = 'radial-gradient(circle at 30% 30%, #f6eecc, #fff81e)';
        textDisplay.classList.add("happy")
    }
    if (hasRainbow) {
        blob.style.background = 'radial-gradient(circle at 30% 30%, #ff82a1 20%, #fff676 40%, #2ad7fe 70%)';
        textDisplay.classList.add("rainbow")
    }
    if (hasLilac) {
        blob.style.background = 'radial-gradient(circle at 30% 30%, #d9ccf6, #781eff)';
        textDisplay.classList.add("lilac")
    }

    textDisplay.innerHTML = transcript;

};



// Error handling//
recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

// Start speech recognition//
recognition.start();

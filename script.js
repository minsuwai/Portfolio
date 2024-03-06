window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
    }
}

document.getElementById("mode-toggle-checkbox").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    
    // Change text color based on mode
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.color = "white"; // Set text color to white for dark mode
    } else {
        document.body.style.color = "#27afdc"; // Set text color to #27afdc for light mode
    }
});




particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const texts = ['Developer', 'Creator', 'Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    // Compares Count to Text length, when it get to 3 resets it
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    // Select the class and change its content to letter
    document.querySelector( '.txt-type' ).textContent = letter;

    // As soon as letter length is the same as our currentText, we go to the next one
    if (letter.length === currentText.length) {
        count++;
        // Reset starting from the beginnin of the word
        index = 0;
    }
    setTimeout(type, 400);
})();

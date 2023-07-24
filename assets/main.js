let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.addEventListener("DOMContentLoaded", function(event) { 
    let circle = document.getElementById('circle');
    circle.classList.remove('hidden');
    document.querySelectorAll('[id=hacker-animation]').forEach(text => {
        text.onmouseover = event => {  
            let iteration = 0;

            clearInterval(interval);
            
            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                    return event.target.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
                
                if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
                }
                
                iteration += event.target.dataset.value.length / 12;
            }, 40);
        }
    });

    document.addEventListener('mousemove', function(e) {
        gsap.to(circle, 0.3, {
            css: {
                left: e.pageX - 120,
                top: e.pageY - 120,
            },
        });
    });
});
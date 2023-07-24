<template>
  <div class="min-h-screen overflow-hidden">
    <div id="circle" class="bg-third absolute w-60 h-60 hidden rounded-full blur-3xl opacity-40 z-20 pointer-events-none"></div>
    <BaseNavbar />
    <div class="px-6 overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap';
  export default { 
    mounted: () => {
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
        let circle = this.document.getElementById('circle');
        circle.classList.remove('hidden');
        this.document.querySelectorAll('[class=hacker-animation]').forEach(text => {
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

        this.document.addEventListener('mousemove', function(e) {
          gsap.to(circle, 0.2, {
            css: {
              left: e.pageX - 120,
              top: e.pageY - 120,
            },
          });
        });
    }
  }
</script>
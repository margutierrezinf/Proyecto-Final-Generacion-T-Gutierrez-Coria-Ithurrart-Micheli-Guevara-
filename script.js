 window.addEventListener("scroll", function() {
            const video = document.getElementById('background-video');
            const otraSeccion = document.getElementById('Tefacilitamoselviajar');
            const rect = otraSeccion.getBoundingClientRect();
            
            // Verifica si la sección está visible
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                video.pause(); // Detiene el video
            } else {
                video.play(); // Reproduce el video
            }
        });
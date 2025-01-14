// script.js
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const modal = document.getElementById("modal");
    const doneBtn = document.getElementById("doneBtn");
    const bulbCountInput = document.getElementById("bulbCount");
    const bulbContainer = document.getElementById("bulbContainer");
    const resetBtn = document.getElementById("resetBtn");

    startBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    doneBtn.addEventListener("click", () => {
        const count = parseInt(bulbCountInput.value);
        if (count > 0) {
            modal.style.display = "none";
            bulbContainer.innerHTML = "";
            for (let i = 0; i < count; i++) {
                const wrapper = document.createElement("div");
                wrapper.classList.add("bulb-wrapper");
                
                const img = document.createElement("img");
                img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
                img.classList.add("bulb");
                
                const switchBtn = document.createElement("div");
                switchBtn.classList.add("switch");
                switchBtn.addEventListener("click", () => {
                    if (img.src.includes("2102")) {
                        img.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
                        switchBtn.style.background = "green";
                    } else {
                        img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
                        switchBtn.style.background = "red";
                    }
                });
                
                wrapper.appendChild(img);
                wrapper.appendChild(switchBtn);
                bulbContainer.appendChild(wrapper);
            }
            bulbContainer.classList.remove("hidden");
            resetBtn.classList.remove("hidden");
        }
    });

    resetBtn.addEventListener("click", () => {
        bulbContainer.innerHTML = "";
        bulbContainer.classList.add("hidden");
        resetBtn.classList.add("hidden");
        modal.style.display = "none";
    });
});
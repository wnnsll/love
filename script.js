let currentIndex = 0;
const images = ["./bb1.jpg", "./bb2.jpg", "./bb3.jpg", "./bb4.jpg", "./bb5.jpg", "./bb6.jpg", "./bb7.jpg", "./bb8.jpg"];
const messages = [
    " I LOVE YOUR SMILE ",
    " I LOVE YOUR LIPS AND EYES ",
    " I LOVE YOUR HAIR ",
    " I LOVE WHEN YOU ARE BITING MY HAND AND ARMS ",
    " I LOVE WHEN YOU ARE CLINGY TO ME ",
    " I LOVE WHEN YOU ARE SO STUBBORN ",
    " I LOVE WHEN YOU ARE AT THE LOWEST POINT IN YOUR LIFE AND YOU WILL SAY THAT YOU NEED A HUG",
    " I LOVE EVERYTHING ABOUT YOU ",
];

const flipCard = document.getElementById("flipCard");

// Add both click and touch support
flipCard.addEventListener("click", flipImage);
flipCard.addEventListener("touchstart", flipImage);

function flipImage() {
    flipCard.classList.toggle("flipped");

    // Change image & message after flip animation
    setTimeout(() => {
        if (flipCard.classList.contains("flipped")) {
            currentIndex = (currentIndex + 1) % images.length;
            document.getElementById("image").src = images[currentIndex];
            document.getElementById("message").textContent = messages[currentIndex];

            // Show beautiful popup when last image is reached
            if (currentIndex === 0) {
                setTimeout(() => {
                    Swal.fire({
                        title: "💖I Love You Forever 💖",
                        text: "You’ve seen all the messages po! I hope you felt the love. \ Balik ka na bab hehe  💞",
                        imageUrl: "./patrick.gif", // Replace with a cute image
                        imageWidth: 150,
                        imageHeight: 150,
                        background: "#C2B280",
                        color: "#d63384",
                        confirmButtonText: "NEXT MESSAGE! 🥰",
                        confirmButtonColor: "#ff4d6d",
                        showClass: {
                            popup: "animate__animated animate__zoomIn"
                        },
                        hideClass: {
                            popup: "animate__animated animate__zoomOut"
                        }
                    }).then(() => {
                        // SECOND MESSAGE BOX APPEARS AFTER "Awww! 🥰" BUTTON IS CLICKED
                        Swal.fire({
                            title: "💌 A Special Message for You 💌",
                            html: "<p style='font-size: 18px; color:rgb(0, 0, 0);'>From the moment I met you, my life changed forever. Every moment with you is magical, and I cherish every second by your side. Sorry ulit sa mga pagkukulang ko. Sana bumalik na tayo sa dati, sana maging okay na lahat. If may hindi ka pa nasasabi about sakin o sama ng loob, p'wede mong sabihin sa akin. This will serve as a lesson for me na gawin yung best ko araw araw. tama ka nga nmn wala akong pera nung time na iyon pero dapat gumawa ako ng paraan para makabawi sa'yo like mga letter and DIY gifts. I want you back babs, I want to be with you again. I LOVE YOU SO MUCH 💞</p>",
                            imageUrl: "./me.gif", // Replace with a romantic image
                            imageWidth: 300,
                            imageHeight: 300,
                            background: "#C2B280",
                            color: "#d63384",
                            confirmButtonText: "❤️",
                            confirmButtonColor: "#ff4d6d",
                            showClass: {
                                popup: "animate__animated animate__fadeInDown"
                            },
                            hideClass: {
                                popup: "animate__animated animate__fadeOut"
                            }
                        });
                    });
                }, 500); // Small delay for better timing
            }
        }
    }, 400); // Matches animation timing
}

// Function to play music on page load
function playMusic() {
    let audio = new Audio("./Palagi.mp3"); // Replace with your song file
    audio.loop = true; // Loop the music
    audio.play().catch(error => console.log("Autoplay blocked, requires user interaction."));
}
// Check if the song has already played
window.onload = function() {
    if (!sessionStorage.getItem("songPlayed")) {
        setTimeout(playMusic, 1000); // Small delay for smooth start
        sessionStorage.setItem("songPlayed", "true"); // Store info so it doesn't replay
    }
};
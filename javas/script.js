const { createApp } = Vue;

const app = createApp({

    data() {
        return {
            currentIndex: 0,

            

            slides: {
                images: [
                    '../img/05.webp',
                    '../img/02.webp',
                    '../img/03.webp',
                    '../img/04.webp',
                    '../img/05.webp',
                ],
                titles: [
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers",
                ],
                text: [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                ]
            }
            
        };
    },
    methods: {
        goPrev() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.slides.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        goNext() {
            if (this.currentIndex === this.slides.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        onthumbImageClick(clickedImageIndex) {
            this.currentIndex = clickedImageIndex
        },

    },
    mounted() {
    
    }
}).mount('#app');
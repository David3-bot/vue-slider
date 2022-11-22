const { createApp } = Vue;

const app = createApp({
  data () {
    return {
      currentImagesIndex: 0,
      currentTitlesIndex: 0,
      currentTextIndex: 0,
      
      slides: {
        images: [
            'img/05.webp',
            'img/02.webp',
            'img/03.webp',
            'img/04.webp',
            'img/05.webp',
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
    goPrev () {
      // Se currentImageIndex é 0, facendo il decremento andrei in negativo.
      // per evitare questo, imposto l'indice all'ultima immagine dell'array
      if (this.currentImagesIndex === 0) {
        this.currentImagesIndex = this.slides.images.length - 1;
      } else {
        this.currentImagesIndex--;
      }
    },
    goNext () {
      // Se currentImageIndex è l'ultima immagine dell'array, non posso più incrementarlo
      // altrimenti andrei fouri dall'array.
      // Per evitare questo problema, reimposto l'indice a 0
      if (this.currentImagesIndex === this.slides.images.length - 1) {
        this.currentImageIndex = 0;
      } else {
        this.currentImagesIndex++;
      }
    },
    onThumbnailClick (clickedImagesIndex) {
      this.currentImagesIndex = clickedImagesIndex;
    },
    /* thumbnailImageClass (imageIndex) {
      const toReturn = [];
      // condizione che eventualmente aggiungono un valore all'array toReturn
      return toReturn.join(" ");
    } */
  },
  mounted() {
  
  }
}).mount('#app');
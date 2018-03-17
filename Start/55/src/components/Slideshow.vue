<template>

  <div class="slides-wrapper" :class="{'loading': isLoading}">

    <button class="btn btn-primary btn-action btn0lg slides-prev" @click="changeSlide(-1)" :disabled="active === 0 || isLoading">
      <i class="icon icon-arrow-left"></i>
    </button>

    <div class="slides">
      <Slide :url="activeUrl" :number="number" :class="{'dimmed': isLoading}"></Slide>
    </div>

    <button class="btn btn-primary btn-action btn0lg slides-next" @click="changeSlide(+1)" :disabled="active === images.length-1 || isLoading">
      <i class="icon icon-arrow-right"></i>
    </button>

  </div>

</template>

<script>

  import { preloadImage } from '../helpers/helpers';

  import Slide from './Slide.vue';

    export default {
      name: "Slideshow",
      props: {
          images: Array
      },
      data() {
          return {
              active: 0,
            isLoading: false
          }
      },
      computed: {
          activeUrl() {
              return this.images[this.active].url;
          },
        number() {
              return `${this.active + 1}/${this.images.length}`
        }
      },
      methods: {
          changeSlide(dir) {
              let index = this.active + dir;
              if(this.images[index] !== undefined) {

                this.isLoading = true;

                preloadImage(this.images[index].url)
                  .then(()=>{
                    this.active = index;
                    this.isLoading = false;
                  })
                  .catch(() => {
                    this.isLoading = false;
                  })
              }
          }
      },
      components: {
          Slide
      }
    }
</script>

<style scoped>
  .slides-wrapper {
    min-height: 300px;
    position: relative;
  }

  .slides-next, .slides-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .slides-prev {
    left: 0;
  }

  .slides-next {
    right: 0;
  }
</style>

<template>

    <div class="slides-wrapper">

        <button class="btn btn-primary btn-action btn-lg slides-prev" :disabled="start" @click="changeSlide(-1)">
            <i class="icon icon-arrow-left"></i>
        </button>

        <div class="slides">
            <slide :url="activeUrl" :number="number" />
        </div>

        <button class="btn btn-primary btn-action btn-lg slides-next" :disabled="end" @click="changeSlide(1)">
            <i class="icon icon-arrow-right"></i>
        </button>

    </div>

</template>

<script>

    import Slide from "./Slide";

    export default {
        name: "Slideshow",
        props: {
            images: Array
        },
        data() {
            return {
                active: 0
            }
        },
        computed: {
            activeUrl() {
                return this.images[this.active].url
            },
            number() {
                return `${this.active + 1}/${this.images.length}`;
            },
            start() {
                return this.active === 0;
            },
            end() {
                return this.active === this.images.length - 1;
            }
        },
        methods: {
            changeSlide(dir) {

                let index = this.active + dir;
                let slide = this.images[index];

                if(slide !== undefined) {
                    this.active = index;
                }

            }
        },
        components: {
            Slide
        }
    };

</script>

<style scoped>

    .slides-wrapper {
        min-height: 300px;
        position: relative;
    }

    .slides-next,
    .slides-prev {
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
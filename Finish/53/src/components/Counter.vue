<template>

    <div>
        <div class="toast toast-primary text-center" v-if="!inProgress">Wciśnij <strong>Start</strong>, aby rozpocząć odliczanie.</div>

        <br>

        <div class="text-center">
            <h1>{{ counter }}</h1>
            <button class="btn btn-primary btn-counter" @click="start" :disabled="inProgress">Start</button>
        </div>
    </div>

</template>

<script>

    export default {
        props: ["initValue"],
        data() {
            return {
                counter: this.initValue,
                inProgress: false
            };
        },
        watch: {
            initValue: function(newValue) {
                this.counter = newValue;
            }
        },
        methods: {
            start: function() {
                this.countdown();
                this.inProgress = true;
                this.$emit("progress", this.inProgress);
            },
            countdown: function() {

                this.counter--;

                if(this.counter > 0) {
                    setTimeout(this.countdown, 1000);
                } else {
                    setTimeout(() => {
                        this.counter = this.initValue;
                        this.inProgress = false;
                        this.$emit("progress", this.inProgress);
                    }, 1000);
                }

            }
        }
    };

</script>

<style lang="scss" scoped>

    .btn-counter {
        height: 2.5rem;
        padding: 0 30px;

        font-size: 24px;
        color: lighten(blue, 40);
    }

</style>
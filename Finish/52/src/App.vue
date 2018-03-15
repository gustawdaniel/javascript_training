<template>

    <div id="app">

        <form action="#" class="form-horizontal">
            <div class="form-group">
                <div class="col-3">
                    <label class="form-label">Wybierz wartość startową</label>
                </div>
                <div class="col-3">
                    <select class="form-select" v-model="initValue" :disabled="inProgress">
                        <option v-for="i in 10" :value="i">{{ i }}</option>
                    </select>
                </div>
            </div>
        </form>

        <br><br>

        <counter :init-value="initValue" @progress="toggleState" />

    </div>

</template>

<script>

import Counter from "./components/Counter";

export default {
    data() {
        return {
            initValue: 10,
            inProgress: false
        }
    },
    methods: {
        toggleState: function(value) {
            this.inProgress = value;
        }
    },
    components: {
        Counter
    }
};

</script>
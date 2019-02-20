<template>
    <div class="form-group">
        <label for="rate-control-range">Rate: {{ rate }}</label>

        <input
            id="rate-control-range"
            type="range"
            class="form-control-range"
            min="0"
            max="5"
            step=".5"
            :value="rate"
            @change="handleChange"
        >
    </div>
</template>

<script>
import { RATE } from "@/constants/controlValues";

export default {
    props: {
        setInstanceRate: { type: Function, required: true }
    },

    data() {
        return {
            rate: RATE
        };
    },

    methods: {
        handleChange({ target }) {
            this.rate = target.value;
            this.setInstanceRate(target.value);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
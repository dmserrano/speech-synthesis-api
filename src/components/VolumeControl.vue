<template>
    <div class="form-group">
        <label for="formControlRange">Volume: {{ volume }}</label>

        <input
            id="formControlRange"
            type="range"
            class="form-control-range"
            min="0"
            max="1"
            step=".1"
            :value="volume"
            @change="handleChange"
        >
    </div>
</template>

<script>
import { VOLUME } from "@/constants/controlValues";

export default {
    props: {
        setInstanceVolume: { type: Function, required: true }
    },

    data() {
        return {
            volume: VOLUME
        };
    },

    methods: {
        handleChange({ target }) {
            this.volume = target.value;
            this.setInstanceVolume(target.value);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
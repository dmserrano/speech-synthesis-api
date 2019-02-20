<template>
    <div class="form-group">
        <label for="pitch-control-range">Pitch: {{ pitch }}</label>

        <input
            id="pitch-control-range"
            type="range"
            class="form-control-range"
            min="0"
            max="2"
            step=".25"
            :value="pitch"
            @change="handleChange"
        >
    </div>
</template>

<script>
import { PITCH } from "@/constants/controlValues";

export default {
    props: {
        setInstancePitch: { type: Function, required: true }
    },

    data() {
        return {
            pitch: PITCH
        };
    },

    methods: {
        handleChange({ target }) {
            this.pitch = target.value;
            this.setInstancePitch(target.value);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
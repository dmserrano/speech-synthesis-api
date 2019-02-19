<template>
    <div class="form-group">
        <label for="voice-select">
            Select a Voice
        </label>

        <select
            name="voice-select"
            class="form-control"
            @change="setSelectedVoice"
        >
            <option
                v-for="({ name, lang }) in VOICES"
                :key="name"
                :value="name"
                v-text="`${name} ${lang}`"
            />
        </select>
    </div>
</template>

<script>
export default {
    props: {
        setSelectedVoice: { type: Function, required: true }
    },

    data() {
        return {
            /**
             * NOTE: on page load and via development, getVoices will not have yet loaded.
             * Initializing the voices array with "getVoices" for HMR
            */
            VOICES: window.speechSynthesis ? speechSynthesis.getVoices() : []
        };
    },

    mounted() {
        if (typeof speechSynthesis === "undefined") {
            throw new Error("This browser does not support the speech synthesis API.");
        }

        // Speech synthesis functionality available via this method
        speechSynthesis.onvoiceschanged = () => {
            this.VOICES = speechSynthesis.getVoices();
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
}
</style>
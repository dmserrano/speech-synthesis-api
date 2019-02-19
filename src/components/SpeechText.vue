<template>
    <div class="form-group">
        <label for="speech-text-input">
            What do you want to say?
        </label>

        <input
            type="text"
            name="speech-text-input"
            class="form-control"
            placeholder="Say hello!"
            @keyup="setInstanceText"
        >

        <small>Try pasting in the matching language for the selected voices.</small>
    </div>
</template>

<script>
export default {
    props: {
        setInstanceText: { type: Function, required: true }
    }
};
</script>

<style lang="scss" scoped>
</style>
<template>
    <div
        id="app"
        class="container"
        @keyup.enter="speak"
    >
        <div class="row mt-4">
            <h2 class="col-12">
                <a
                    class="link"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"
                    target="blank"
                >
                    Speech Synthesis API
                </a>
            </h2>

            <VoiceSelect
                class="col-md-6 mt-4"
                :set-selected-voice="setSelectedVoice"
            />

            <SpeechText
                class="col-md-6 mt-4"
                :set-instance-text="setInstanceText"
            />

            <VolumeControl
                class="col-md-6 mt-4"
                :set-instance-volume="setInstanceVolume"
            />

            <PitchControl
                class="col-md-6 mt-4"
                :set-instance-pitch="setInstancePitch"
            />

            <RateControl
                class="col-md-6 mt-4"
                :set-instance-rate="setInstanceRate"
            />

            <div class="col-12 mt-4">
                <div class="d-flex justify-content-center">
                    <button
                        class="btn btn-primary"
                        :disabled="isSpeaking"
                        @click="speak"
                    >
                        Speak
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createUtterance, findVoice } from "./services/speech";
import { PITCH, RATE, TEXT, VOICE, VOLUME } from "./constants/controlValues";

import PitchControl from "./components/PitchControl";
import RateControl from "./components/RateControl";
import SpeechText from "./components/SpeechText";
import VoiceSelect from "./components/VoiceSelect";
import VolumeControl from "./components/VolumeControl";

export default {
	name: "App",

	components: {
		PitchControl,
		RateControl,
		SpeechText,
		VoiceSelect,
		VolumeControl
	},

	data() {
		return {
			isSpeaking: false,
			instancePitch: PITCH,
			instanceRate: RATE,
			instanceText: TEXT,
			instanceVoice: findVoice(VOICE),
			instanceVolume: VOLUME,
			synthInstance: null,
		};
	},

	methods: {
		setInstance() {
			this.synthInstance = createUtterance();
			this.setInstanceListeners();
			this.synthInstance.pitch = this.instancePitch;
			this.synthInstance.rate = this.instanceRate;
			this.synthInstance.text = this.instanceText;
			this.synthInstance.voice = this.instanceVoice;
			this.synthInstance.volume = this.instanceVolume;
		},

		setInstanceListeners() {
			// Set listeners to toggle the "Speak" buttons disabled attribute
			this.synthInstance.addEventListener("start", () => this.setIsSpeaking(true));
			this.synthInstance.addEventListener("end", () => this.setIsSpeaking(false));

			// Set event listener for speech synthesis errors
			this.synthInstance.addEventListener("error", (event) => {
				alert(`An error has occurred with the speech synthesis: ${event.error}`);
			});
		},

		setInstancePitch(pitch) {
			this.instancePitch = pitch;
		},

		setInstanceRate(rate) {
			this.instanceRate = rate;
		},

		setInstanceText({ target }) {
			this.instanceText = target.value;
		},

		setInstanceVolume(volume) {
			this.instanceVolume = volume;
		},

		setIsSpeaking(value) {
			this.isSpeaking = value;
		},

		setSelectedVoice({ target }) {
			this.instanceVoice = findVoice(target.value);
		},

		speak() {
			if (this.isSpeaking) return;
			else if (!this.instanceText) {
				return alert("Please enter some text to speak.");
			}

			this.setInstance();
			speechSynthesis.speak(this.synthInstance);
		}
	}
};
</script>

<style lang="scss">
</style>

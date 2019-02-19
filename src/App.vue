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
import { findVoice } from "./services/speech";

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
			synthInstance: new SpeechSynthesisUtterance()
		};
	},

	mounted() {
		// Set listeners to toggle the "Speak" buttons disabled attribute
		this.synthInstance.addEventListener("start", () => this.setIsSpeaking(true));
		this.synthInstance.addEventListener("end", () => this.setIsSpeaking(false));

		// Set event listener for speech synthesis errors
		this.synthInstance.addEventListener("error", (event) => {
  			alert(`An error has occurred with the speech synthesis: ${event.error}`);
		});

		this.synthInstance.onerror = function(event) {
			console.log("An error has occurred with the speech synthesis: ", event.error);
		};
	},

	methods: {
		setInstanceText({ target }) {
			this.synthInstance.text = target.value;
		},

		setInstancePitch(pitch) {
			this.synthInstance.pitch = pitch;
		},

		setInstanceRate(rate) {
			this.synthInstance.rate = rate;
		},

		setInstanceVolume(volume) {
			this.synthInstance.volume = volume;
		},

		setIsSpeaking(value) {
			this.isSpeaking = value;
		},

		setSelectedVoice({ target }) {
			this.synthInstance.voice = findVoice(target.value);
		},

		speak() {
			if (this.isSpeaking) return;
			else if (!this.synthInstance.text) {
				return alert("Please enter some text to speak.");
			}

			speechSynthesis.speak(this.synthInstance);
		}
	}
};
</script>

<style lang="scss">
</style>

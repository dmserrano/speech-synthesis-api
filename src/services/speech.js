const synth = window.speechSynthesis && window.speechSynthesis;

export const findVoice = voiceName => {
    const voices = synth.getVoices();

    return voices.find(({ name }) => name === voiceName);
};
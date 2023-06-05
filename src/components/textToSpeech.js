import { useState, useEffect } from 'react'

export default function TextToSpeech({text}) {

    const [speech, setSpeech] = useState(null);

    useEffect(() => {
        // synthesis is what is going to do the talking
        const synthesis = window.speechSynthesis;
        
        // SpeechSynthesisUtterance sets up volume, pitch, and more
        const s = new SpeechSynthesisUtterance(text);
        setSpeech(s);

        return () => {
            synthesis.cancel();
        }
    }, [text]);

    // To Do: The component get speech data but does not speak (possibly because synthesis.speak is called before speech to set)
    useEffect(() => {
        const synthesis = window.speechSynthesis;
        synthesis.speak(speech);
    
    }, [speech]);

}

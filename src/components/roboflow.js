import { useRef, useEffect } from "react";
import Webcam from "react-webcam";

const Roboflow = (props) => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    var inferRunning = useRef(true);

    // Text to Speech
    const synthesis = window.speechSynthesis;

    const startInfer = () => {
        window.roboflow
            .auth({
                publishable_key: "rf_t9mHaUugI8h0ruL8OEjCrY6RGYc2"
            })
            .load({
                model: props.modelName,
                version: props.modelVersion,
                onMetadata: function (m) {
                    console.log("model loaded");
                }
            }).then((model) => {
                setInterval(() => {
                    if (inferRunning) detect(model);
                }, 10);
            });
    };

    // Runs once
    useEffect(startInfer);

    const detect = async (model) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {

            // Get camera demonsions
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            adjustCanvas(videoWidth, videoHeight);

            // Detect the object (ex. person) so we can draw boxes around it
            const detections = await model.detect(webcamRef.current.video);

            // ctx is the drawing itself
            const ctx = canvasRef.current.getContext("2d");
            drawBoxes(detections, ctx);
        }
    };

    const adjustCanvas = (w, h) => {
        canvasRef.current.width = w * window.devicePixelRatio;
        canvasRef.current.height = h * window.devicePixelRatio;

        canvasRef.current.style.width = w + "px";
        canvasRef.current.style.height = h + "px";

        canvasRef.current.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawBoxes = (detections, ctx) => {

        // Reset previous rectangle detection
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        detections.forEach((row) => {
            if (true) {
                //video
                var temp = row.bbox;
                temp.class = row.class;
                temp.color = row.color;
                temp.confidence = row.confidence;
                row = temp;
            }

            if (row.confidence < 0) return;

            //dimensions
            var x = row.x - row.width / 2;
            var y = row.y - row.height / 2;
            var w = row.width;
            var h = row.height;

            //box
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = row.color;
            ctx.rect(x, y, w, h);
            ctx.stroke();

            //shade
            ctx.fillStyle = "black";
            ctx.globalAlpha = 0.2;
            ctx.fillRect(x, y, w, h);
            ctx.globalAlpha = 1.0;

            //label
            var fontColor = "black";
            var fontSize = 12;
            ctx.font = `${fontSize}px monospace`;
            ctx.textAlign = "center";
            var classTxt = row.class;
            var confTxt = (row.confidence * 100).toFixed().toString() + "%";
            var msgTxt = classTxt + " " + confTxt;
            const textHeight = fontSize;
            var textWidth = ctx.measureText(msgTxt).width;

            // Text to Speech metadata
            var utterance = new SpeechSynthesisUtterance(classTxt);

            // synthesis.cancel clears the thing currently spoken AND the queue
            // making it wait one second allows tts to quickly say "person" and then clear everything
            if (synthesis.speaking === false){
                synthesis.speak(utterance);
            }
            else{
                // setTimeout is async so the detections will still render
                setTimeout(() => {
                    synthesis.cancel();
                }, 1000);
            }

            if (textHeight <= h && textWidth <= w) {
                ctx.strokeStyle = row.color;
                ctx.fillStyle = row.color;
                ctx.fillRect(
                    x - ctx.lineWidth / 2,
                    y - textHeight - ctx.lineWidth,
                    textWidth + 2,
                    textHeight + 1
                );
                ctx.stroke();
                ctx.fillStyle = fontColor;
                ctx.fillText(msgTxt, x + textWidth / 2 + 1, y - 1);
            } else {
                textWidth = ctx.measureText(confTxt).width;
                ctx.strokeStyle = row.color;
                ctx.fillStyle = row.color;
                ctx.fillRect(
                    x - ctx.lineWidth / 2,
                    y - textHeight - ctx.lineWidth,
                    textWidth + 2,
                    textHeight + 1
                );
                ctx.stroke();
                ctx.fillStyle = fontColor;
                ctx.fillText(confTxt, x + textWidth / 2 + 1, y - 1);
            }
        });
    };

    return (
        <div className="roboflowCam">
            <Webcam
                ref={webcamRef}
                muted={true}
                className="absolute mx-auto left-0 right-0 text-center z-10"
            />
            <canvas ref={canvasRef} className="absolute mx-auto left-0 right-0 text-center z-20" />
        </div>
    );
};

export default Roboflow;

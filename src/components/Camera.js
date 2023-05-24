import React, { useEffect, useRef } from 'react'

export default function Camera() {

  // Set videoRef to reference the video element
  const videoRef = useRef();

  const getVideo = () => {

    // Get access to the camera, tell browser we want the video
    navigator.mediaDevices.getUserMedia({ 
      video: 
        { width: 300 }
      }
    )

    // Stream is the video feed
    .then((stream) => {
      // Get the video element
      let vid = videoRef.current;
      // Display the video feed
      vid.srcObject = stream;
    })
    .catch((err) => {
      console.log("error: ", err);
    })
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <>

      {/* Camera where the video will be displayed */}
      <div className="camera">
        <video ref={videoRef} autoPlay={true} />
      </div>
    </>
    )
}

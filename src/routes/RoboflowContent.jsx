import React, { useState } from 'react';
import '../App.css';
import Roboflow from "../components/roboflow.js";
import Modal from "../components/Modal.js";

import ReactPlayer from 'react-player';
import Video from "../content/here-charlie-video.mp4";

export default function RoboflowContent() {

  const [modalState, changeModalState] = useState(0);

  // This function is passed to the Modal component as a prop.
  function alterModalState(newState) {
    changeModalState(newState);
  }

  console.log(modalState);

  return (
    <div className="App">

      {   
        modalState >= 0 &&     
        <Modal         
          header={"The Here Charlie! Project"}
          subtext={"In one sentence, Here Charlie! is an autonomous robot to counter vision impairment. Watch our video showcase to learn more!"}
          content={<ReactPlayer url={Video} width="50%" height="50%" controls />}

          changeModalState={alterModalState}
        />
      }

      {
        modalState === -1 &&
        <>        
          <Roboflow 
            modelName="whsnet"
            modelVersion="14"
          />
          <p>Here Charlie! A Robot Dog for guidance.</p>
        </>
      }
    </div>
  );
}

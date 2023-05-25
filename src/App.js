import './App.css';
import Camera from './components/Camera';

function App() {

  const axios = require("axios");
  const fs = require("fs");

const image = fs.readFileSync("./logo.svg", {
    encoding: "base64"
});

axios({
    method: "POST",
    url: "https://detect.roboflow.com/whsnet/3",
    params: {
        api_key: "YbQoDWJZi4w5hx63SpTt"
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});
  
  return (
    <div className="App">
        <Camera />
        <p>
          Here Charlie! A Robot Dog for guidance.
        </p>

    </div>
  );
}

export default App;

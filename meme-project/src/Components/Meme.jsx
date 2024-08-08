import { useState } from "react";
import { useEffect } from "react";

export default function Meme() {
  //state for image
  const [memeImg, setMemeImg] = useState("https://i.imgflip.com/30b1gx.jpg");

   //state for form data
   const [formData, setFormData] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
  });

  //State for all memes
  const [allMemes, setAllMemes]=useState({})

  //useEffect function for API Call
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
     .then(res=>res.json())
      .then(memesData =>setAllMemes(memesData.data.memes))
  },[]);

  //function to get random image on click of button
  function getMemeImage() {
    
    let randomIndex = Math.floor(Math.random() * allMemes.length);
    setMemeImg(allMemes[randomIndex].url);
  }

 

  //function to handle on change event on input fields
  function handleChangeEvent(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

    

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="top-text">Top Text</label>
          <input
            id="top-text"
            type="text"
            placeholder="Shut up"
            className="form--input"
            name="topText"
            value={formData.topText}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
              name="bottomText"
              value={formData.bottomText}
              onChange={handleChangeEvent}
            />
          </label>
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="image-container">
          <img src={memeImg} alt="Meme Image" className="meme--image" />
          <h2 className="meme--text top">
            {formData.topText}
          </h2>
          <h2 className="meme--text bottom">
            {formData.bottomText}
          </h2>
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";
import memesData from "./memesData"

export default function Meme() {
    const [memeImg, setMemeImg] = useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        let randomIndex = Math.floor(Math.random() * memesArray.length);
        setMemeImg(memesArray[randomIndex].url)

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
                    />
                </div>
                <div>
                    <label>Bottom Text
                        <input
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    </label>
                </div>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <img src={memeImg} alt="Meme Image" />
            </div>
        </main>
    )
}
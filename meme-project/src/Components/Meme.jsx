import memesData from "./memesData"

export default function Meme() {
    function handleClickBtn(){
        console.log("You clicked meme button");
        console.log(memesData.data.memes.url);


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
                    onClick={handleClickBtn}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}
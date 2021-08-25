import { useState } from "react";
import "./styles.css";

var emoji = {
  "😊": "Smiling",
  "😂": "Laughing",
  "😎": "Cool",
  "😢": "Sad",
  "😀": "Grinning Face",
  "🙃": "Upside-Down Face",
  "🤡": "Clown Face",
  "😨": "Fearful Face",
  "😱": "Face Screaming in Fear",
  "👋": "Waving Hand",
  "👌": "OK Hand",
  "✌️": "Victory Hand",
  "👍": "Thumbs Up"
};

var emojiesWeKnow = Object.keys(emoji);

export default function App() {
  var [renderEmoji, setEmoji] = useState("");

  function checkEmoji(inputEmoji) {
    var em = emoji[inputEmoji];
    if (em === undefined) {
      em = "We currently don't have this in our database!";
    }
    setEmoji(em);
  }

  function emojiClicked(emoji) {
    console.log(emoji);
    checkEmoji(emoji);
  }

  function inputStateChange() {
    var inputEmoji = event.target.value;
    checkEmoji(inputEmoji);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>
        Enter an <span class="emoji">Emoji</span> to detect!
      </h2>
      <div>
        <input
          placeholder="Search your Emoji"
          class="inputArea"
          onInput={inputStateChange}
        ></input>
      </div>
      <div class="div-render">{renderEmoji}</div>
      <div class="div-lower">
        <h3>Emojis we currently have:</h3>
        {emojiesWeKnow.map(function (emoji) {
          return (
            <span
              class="span-emoji"
              onClick={() => emojiClicked(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

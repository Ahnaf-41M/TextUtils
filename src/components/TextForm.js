import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleToUpper() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleToLower() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function resetText() {
    setText("");
  }

  function handleCopyText() {
    var text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  function handleRemoveExtraSpaces() {
    setText(text.replace(/\s{2,}/g, " ").trim());
  }

  function handleCountWords() {
    var ar = text.split(/\s+/);
    var numOfWords = 0;
    for (var i = 0; i < ar.length; i++) {
      if (ar[i].length === 0) continue;
      numOfWords++;
    }
    return numOfWords;
  }

  function handleCountChars() {
    var ar = text.split(/\s+/); //spliting the text according to white spaces and new lines
    var numOfChars = 0;
    for (var i = 0; i < ar.length; i++) {
      numOfChars += ar[i].length;
    }
    return numOfChars;
  }

  return (
    <>
      <div className={`container text-${props.textCol}`}>
        <h2 className="my-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>

        {/* Text Manipulating Button Functions */}
        <div className="text-center">
          <button className="btn btn-primary me-2 mb-3" onClick={handleToUpper}>
            To UpperCase
          </button>
          <button className="btn btn-primary me-2 mb-3" onClick={handleToLower}>
            To LowerCase
          </button>
          <button
            className="btn btn-primary me-2 mb-3"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary me-2 mb-3"
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary me-2 mb-3" onClick={resetText}>
            Reset
          </button>
        </div>
      </div>

      {/* Text Summary */}
      <div className={`container text-${props.textCol}`}>
        <h2 className="my-3">Your text summary</h2>
        <h6 className="d-inline">Words: </h6>
        <p className="d-inline">{handleCountWords()}</p>
        <br />
        <h6 className="d-inline">Characters: </h6>
        <p className="d-inline">{handleCountChars()}</p> <br />
        <h6 className="d-inline">Time to read: </h6>
        <p className="d-inline">{handleCountWords() * 0.008} minutes</p>
        <br />
        <h2 className="my-3">Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text above to preview"}</p>
      </div>
    </>
  );
}

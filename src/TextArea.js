import React, { useState } from 'react'


export default function TextArea(props) {
    const [text, setText] = useState("")

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.alert("Converted to uppperCase!", "success")
    }
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.alert("Converted to lowerCase!", "success")

    }
    const clearText = () => {
        setText("")
        props.alert("Cleared text!", "success")

    }
    const copyText = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.alert("Text copied to clipboard!", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Removed Extra spaces!", "success")
    }
    const texts = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h1 className='my-3'>Enter the text to analyze below</h1>
                <textarea className="form-control" id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={texts}></textarea>
                <button disabled={text.length === 0} type="submit" className="btn btn-primary  my-2 mx-2" onClick={handleUpCase}>Upper Case</button>
                <button disabled={text.length === 0} type="submit" className="btn btn-primary my-2 mx-2" onClick={handleLowCase}>Lower Case</button>
                <button disabled={text.length === 0} type="submit" className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear-text</button>
                <button disabled={text.length === 0} type="submit" className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy-Text</button>
                <button disabled={text.length === 0} type="submit" className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace}>Remove Extra space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters.</p>
                <p>Read in {0.008 * text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} minutes.</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}

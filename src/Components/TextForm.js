import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleCopy = () => {
        let newText = document.getElementById('textBox')
        newText.select();
        navigator.clipboard.writeText(newText.value)
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8" placeholder='Enter your text here'></textarea>
                </div>
                <div className="buttons">
                    <button className='btn btn-dark my-2' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-dark mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className="btn btn-dark mx-3 my-2" onClick={handleExtraSpace}>Remove extra spaces</button>
                    <button className="btn btn-dark mx-3 my-2" onClick={handleClearClick}>Clear text</button>
                    <button className="btn btn-dark mx-3 my-2" onClick={handleCopy}>Copy text</button>
                </div>
            </div>

            <div className="container my-3">
                <h1>Summary</h1>
                <p><b>{text.trim() === '' ? 0 : text.match(/\S+/g).length}</b> words and <b>{text.replace(/\s+/g, '').length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> minutes to read</p>
                <h3>Preview your text</h3>
                <p>{text.length>0?text:'Enter something in text box to preview it here'}</p>
            </div>
        </>
    )
}

import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('')
    const handleUpperCase = () => {
        //console.log('Upper case' + Text)
        let newText = Text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        //console.log('On change')
        setText(event.target.value)
    }
    const handleLowerCase = () => {
        let newText = Text.toLowerCase()
        setText(newText)
    }
    return (
        <>
            <div className="container">
                <h3>
                    {props.heading}
                </h3>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        id="myBox" 
                        rows="8"
                        value={Text}
                        onChange={handleOnChange} //FOR TYPING INTO TEXTAREA if we are not using onChange() then we can't type any thing into textarea so we need to set onChange() method because we are using a state variable here i.e. Text
                    >
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
                    Convert To UpperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
                    Convert To LowerCase
                </button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{Text.split(" ").length} words and {Text.length} characters.</p>
                <p>{ 0.008 * Text.split(" ").length} Minutes To Read</p>
                <h3>Preview</h3>
                <p>{Text}</p>
            </div>
        </>
    )
}

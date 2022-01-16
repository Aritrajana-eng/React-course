import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('Enter your text here')
    const handleUpperCase = () => {
        //console.log('Upper case' + Text)
        let newText = Text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        //console.log('On change')
        setText(event.target.value)
    }
    return (
        <form>
            <div>
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
                <button type="button" className="btn btn-primary" onClick={handleUpperCase}>
                    Convert To UpperCase
                </button>
            </div>
        </form>
    )
}

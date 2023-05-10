import React,{useState} from 'react'

export default function Textform(props) {

    let handelupclick=()=>{
        
        let uptext=text.toUpperCase()
        setText(uptext)
    }
    let handellowclick=()=>{
        let lotext=text.toLowerCase()
        setText(lotext)
    }

    let handelonchange=(event)=>{

        setText(event.target.value)
    }

    let empty=()=>{
        setText("")
    }

let [text,setText]=useState("enter your text here");

  return (
    <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onClick={empty} onChange={handelonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelupclick}>Convert to upper-case</button>
        <button className="btn btn-primary mx-2" onClick={handellowclick}>Convert to lower-case</button>
        </div>
        <div className='container'my-3>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length}minutes to read</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>
    </>
  )
}

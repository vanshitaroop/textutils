  
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleclick = ()=>{
        props.showAlert("Converted to upper case",'success');
        let result = text.toUpperCase();
        setText(result);
    }
    const handleOnChange=(event)=>{
        // console.log("onchange");
        setText(event.target.value);
       
    }
    const handleLoClick=()=>{
        props.showAlert("Converted to lower case",'success');
        let result = text.toLowerCase();
        setText(result);
    }
    const clear=()=>{
        let result = " "
        setText(result);
        props.showAlert("text cleared!!" , 'success');
    }
    const [text, setText] = useState('');
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!" , 'success');
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed" , 'success');
    }
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='light'?"white":"grey",
        color:props.mode==='dark'?"white":"#042743"}}  onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary mx-2 my-3" onClick={handleclick}>Convert to upper case</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleLoClick}>Convert to lower case</button>
            <button className='btn btn-primary mx-2 my-3' onClick={clear}>Clear</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?"white":"#042743"}}>
        <h3>Your Text Summary</h3>
        <p>your text have {text.split(" ").length} words and {text.length} character</p>
        <p>{0.08 * text.split(" ").length} Minutes read </p>
        <h3 className='my-2'>Preview</h3>
        <p>{text.length>0?text:"Enter text above to preview your text here"}</p>
    </div>
    </>
  )
}

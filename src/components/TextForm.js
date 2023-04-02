import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpperCaseClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase","success")
  }
  const handleLowerCaseClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase","success")

}
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleClearingText = (event) =>{
    setText('');
    props.showalert("Cleared text","success")

  }
  const [text,setText] = useState('');

  return (
    <>
        <div className='container' style={{color:props.mode==='dark'? 'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white', colors: props.mode==='dark'? 'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Covert to uppercase </button>
            <button className="btn btn-primary mx-2"  onClick={handleLowerCaseClick}>Covert to lowercase</button>
            <button className="btn btn-primary mx-2"  onClick={handleClearingText}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
          <h2> Your text summary </h2>
          <p> {text.split(" ")[text.split(" ").length - 1]===''? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>
        
          <p> {0.008 * (text.split(" ")[text.split(" ").length - 1]===''? text.split(" ").length - 1 : text.split(" ").length)} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0? text:"Enter something to analyze above"}</p>
        </div>
    </>
  )
}

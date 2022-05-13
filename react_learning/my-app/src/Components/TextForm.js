import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
      }
   
      const handleLowercase = () => {
       let newText1 = text.toLowerCase();
       setText(newText1)
      }

    const handleChange= (event) => {
        setText(event.target.value)
    }




  
   
    const [text, setText] = useState('Enter Text Here');
  //  setText('Enter Text'); - right way to change the value


  return (
    <div>
        <div className="container">
            <div className="py-3">
               <h1>{props.heading} </h1>
                <textarea className="form-control" id="exampleFormControlTextarea1"  rows="8" value={text}  onChange={handleChange} ></textarea>
                <button type="submit" className="btn btn-primary mt-3 " onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mt-3 mx-3" onClick={handleLowercase}>Convert to Lowercase</button>
             </div>
        </div>
    </div>
  )
}

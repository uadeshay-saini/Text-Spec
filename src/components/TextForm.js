import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpperCase = () =>{
         let temp = text.toUpperCase();
         setText(temp);
    };
    const handleLowerCase = () =>{
         let temp = text.toLowerCase();
         setText(temp);
    };
    const handleChange = (event) =>{
        setText(event.target.value)
   };

    const[text, setText] = useState("");

 //   const[backgroundColor3, setbackgroundColor3] = useState({backgroundColor : "white", color: "black"})
//console.log(props.mode)
  // if(props.mode==="white"){
  //   setbackgroundColor3({backgroundColor : "#2b2410", color: "white"})
   
  //  }else{
  //    setbackgroundColor3({backgroundColor : "white", color: "black"})
  //  }
  return (
    <div className='container' style={props.backgroundColor1}>
     <div className="mb-3"style={props.backgroundColor1}  >
        <label style={props.backgroundColor1} htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter Your Text Here</h1></label>
        <textarea style={props.backgroundColor1} className="form-control" id="textValue" value={text} onChange={handleChange} rows="10"></textarea>
        <button className='btn btn-outline-success my-3' onClick={handleUpperCase}>To Upper Case</button>
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleLowerCase}>To Lower Case</button>
    </div>
  </div>
  )
}
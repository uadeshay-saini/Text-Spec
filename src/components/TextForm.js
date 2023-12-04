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
   const handleClearClick = ()=>{ 
     let newText = '';
     setText(newText);
 }
   const handleExtraSpaces = () => {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
 }
 const handleCopy = () => {
     navigator.clipboard.writeText(text); 
 }
 const handleReverseCase = () =>{
     let temp = text.split("").reverse().join("");
     setText(temp);
};
//  this converts text to sentence case meaning the first word starts with a captial letter the rest of the words are lowercase
 const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");

    setText(newText);
  };
  //this function converts the first letter of every word to uppercase the rest of letters are lower case
const handleCapitalizeWordClick = () => {
     let lowercase = text.toLowerCase();
     let words = lowercase.split(" ");
     let newWords = words.map((word) => {
       return word.charAt(0).toUpperCase() + word.slice(1);
     });
     let newText = newWords.join(" ");
     setText(newText);
   };
   // Function to count Vowels:
   let [count, setCount] = useState(0);
   let [count1, setCount1] = useState(0);
   let countChar = 0,
   countCons = 0;

const handleVoClick = () => {
     for (count = 0; count <= text.length; count++) {
       if (text.charAt(count).match(/[aeiouAEIOU]/)) {
         countChar++;
         setCount (countChar);
     //     alert(countChar)
       }
     }
     // console.log("No. of Vowels are: " + countChar);
   };
 
  // Function to count Consonants:
   const handleCoClick = () => {
     for (count1 = 0; count1 <= text.length; count1++) {
       if (
         text
           .charAt(count1)
           .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
       ) {
         countCons++;
         setCount1(countCons);
       }
     }
}
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
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleClearClick}>Clear Text</button>
        <button title='Convert First letter of every sentence to Capital' className='btn btn-outline-success my-3 mx-3' onClick={handleSentenceCaseClick}>Text to Sentence</button>
        <button title='Convert First letter of every word uppercase ' className='btn btn-outline-success my-3 mx-3' onClick={handleCapitalizeWordClick}>First Letter Uppercase</button>
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleReverseCase}>Reverse String</button>
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleVoClick}>Count No. of Vowels</button>
        <button className='btn btn-outline-success my-3 mx-3' onClick={handleCoClick}>Count No.of Consonants</button>

    
    </div>
    <div>
     No. of Vowels are :- {count}
    </div>
    <div>
     No. of Consonants are :- {count1}
    </div>
  </div>
  )
}
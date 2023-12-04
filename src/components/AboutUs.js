import React, {useState} from 'react'

export default function AboutUs(props) {
 // const[backgroundColor2, setbackgroundColor2] = useState({backgroundColor : "white", color: "black"})

  // const toogle = () =>{
  // if(props.mode==="white"){
  //   setbackgroundColor2({backgroundColor : "#2b2410", color: "white"})
   
  //  }else{
  //    setbackgroundColor2({backgroundColor : "white", color: "black"})
  //  }}
    console.log(props.backgroundColor1)

   return (
    <> 
    <h2 style={props.backgroundColor1} >About Us</h2>
    <div className='container' style={props.backgroundColor1}> 
        <div className="accordion" id="accordionExample">
    <div className="accordion-item"style={props.backgroundColor1}>
      <h2 className="accordion-header" style={props.backgroundColor1}>
        <button style={props.backgroundColor1} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div style={props.backgroundColor1} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div style={props.backgroundColor1} className="accordion-body" >
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div style={props.backgroundColor1} className="accordion-item">
      <h2 style={props.backgroundColor1} className="accordion-header">
        <button style={props.backgroundColor1} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div style={props.backgroundColor1} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div style={props.backgroundColor1} className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div style={props.backgroundColor1} className="accordion-item">
      <h2 className="accordion-header">
        <button style={props.backgroundColor1} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div style={props.backgroundColor1} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div style={props.backgroundColor1} className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

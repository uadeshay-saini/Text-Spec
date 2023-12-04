import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  // const[backgroundColor1, setbackgroundColor] = useState({backgroundColor : "white", color: "black"})
  const[color, setColor] = useState({backgroundColor : "grey", color: "black"})
  // console.log(props.mode)
    // console.log(props.backgroundColor1)

  const modeSelect=() =>{
    if(props.mode==="white"){
     props.setbackgroundColor({backgroundColor : "#894409", color: "white"})
     props.setMode("black")
    }else{
      props.setbackgroundColor({backgroundColor : "white", color: "black"})
      props.setMode("white")
    }
    props.backgroundColor1.backgroundColor !== "#894409"? setColor({backgroundColor : "#2b2410", color: "white"}) : setColor({backgroundColor : "grey", color: "black"})
  }
  const modeSelect1 =() =>{props.setbackgroundColor({backgroundColor : "#AF0171", color: "white"})
  setColor({backgroundColor : "#790252", color: "white"})}
  const modeSelect2 =() =>{props.setbackgroundColor({backgroundColor : "#519872", color: "white"})
  setColor({backgroundColor : "#3B5249", color: "white"})}
  const modeSelect3 =() =>{props.setbackgroundColor({backgroundColor : "#064663", color: "white"})
  setColor({backgroundColor : "#04293A", color: "white"})}
  const modeSelect4 =() =>{props.setbackgroundColor({backgroundColor : "#5B4B8A", color: "white"})
  setColor({backgroundColor : "#4C3575", color: "white"})}

  return (
    <div >  <nav className= "navbar navbar-expand-lg " style={color}>
    <div className="container-fluid" >
      <Link className="navbar-brand" style={color} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" style={color} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={color} to="/about">{props.about}</Link>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="d-flex" style={color} >
          <div className=" rounded mx-2" onClick={modeSelect1} style={{height: "30px", width : "30px", backgroundColor: '#790252'}}>
          </div>
        </div>
        <div className="d-flex" style={color} >
          <div className=" rounded mx-2" onClick={modeSelect2} style={{height: "30px", width : "30px", backgroundColor: '#3B5249'}}>
          </div>
        </div>
        <div className="d-flex" style={color} >
          <div className=" rounded mx-2" onClick={modeSelect3} style={{height: "30px", width : "30px", backgroundColor: '#04293A'}}>
          </div>
        </div>
        <div className="d-flex" style={color} >
          <div className=" rounded mx-2" onClick={modeSelect4} style={{height: "30px", width : "30px", backgroundColor: '#4C3575'}}>
          </div>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input mx-2" type="checkbox" onClick={modeSelect} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
};

Navbar.defaultProps = {
    title : "Navbar",
    about : "About"
};
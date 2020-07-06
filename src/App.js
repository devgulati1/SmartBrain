import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from "clarifai"
import SignIn from "./Components/SignIn/SignIn"
import Register from "./Components/Register/Register"
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Rank from './Components/Rank/Rank'
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition"

import './App.css'


const app = new Clarifai.App({
  apiKey: 'a31150ce6dcd4dacb6dab13a7ea1d92b'
 });


const particlesOption={
  
    particles: {
      number:{
        value:30,
        density:{
         enable:true,
         value_are:800,
        }
      }
      }
    }
  
  
class App extends Component{
  constructor(){
    super()
    this.state={
      input:"",
      imageurl:"",
      box:"",
      route:"signin"
    }
  }

  calculateFace=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById("inputimage")
    const height=Number(image.height)
    const width=Number(image.width)
    
    return{
      leftCol:clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row * height,
      rightCol:width-(clarifaiFace.right_col * width),
      bottomRow:height-(clarifaiFace.bottom_row * height),
    }
  }
  displayFaceBox=(box)=>{
    console.log(box)
    this.setState({box:box})
  }
  

    onInputChange=(event)=>{
      this.setState({input:event.target.value})
    }

  onButtonClick=(event)=>{
    this.setState({imageurl:this.state.input})
    console.log("click")
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    (response)=> {
      // do something with response
      this.displayFaceBox(this.calculateFace(response))
    }).catch(error=>console.log(error))
   

  }
  //function to change route 
  onRouteChange=(route)=>{
    this.setState({route:route})
  }
  //function to signout
 

  render() {
  return(
    
  <div className="">
  <Particles  className="particles"
    params={particlesOption} />

  <Navigation onRouteChange={this.onRouteChange}/>
  {
    this.state.route==="home" ?
      
        <div>
        
  <Logo/>
  <Rank/>
  <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
  <FaceRecognition box={this.state.box} imageurl={this.state.imageurl}/>
  
        </div>
        :( this.state.route==="signin"
          ?<SignIn onRouteChange={this.onRouteChange}/>
    
          :<Register onRouteChange={this.onRouteChange}/>
        )
      
    
 
  }

  </div>
  
  )
}
}



export default App;

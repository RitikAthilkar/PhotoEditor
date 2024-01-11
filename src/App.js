
import { useState } from 'react';
import './App.css';
import img from "./img1.jpg"
import Download from './download';
import Anounce from './Anouncement';
import NavBar from './Navbar';
// import { saveAs } from 'file-saver';
function App() {

const [brightness,setbrightness] = useState({
  name:'Brightness',
  property:'brightness',
  value:100,
  range : {
     min:0,
     max:200
  },
  unit:'%'
})
const [contrast,setcontrast] = useState({
  name:'Contrast',
  property:'contrast',
  value:100,
  range : {
     min:0,
     max:200
  },
  unit:'%'
})
const [grayscale,setgrayscale] = useState({
  name:'Grayscale',
  property:'grayscale',
  value:0,
  range : {
     min:0,
     max:100
  },
  unit:'%'
})
const [sepia,setsepia] = useState({
  name:'Sepia',
  property:'sepia',
  value:0,
  range : {
     min:0,
     max:100
  },
  unit:'%'
})
const [huerotate,sethueRotate] = useState({
  name:'Hue Rotate',
  property:'hue-rotate',
  value:0,
  range : {
     min:0,
     max:360
  },
  unit:'deg'
})
const [blur,setblur] = useState({
  name:'Blur',
  property:'blur',
  value:0,
  range : {
     min:0,
     max:20
  },
  unit:'px'
})

const [background,setBackground] = useState('https://cdn.pixabay.com/photo/2013/07/25/11/52/rajiv-gandhi-sea-link-166867_1280.jpg')

function reset(){
  return (
    setbrightness({...brightness,value:100}),
    setblur({...blur,value:0}),
    setcontrast({...contrast,value:100}),
    setgrayscale({...grayscale,value:0}),
    setsepia({...sepia,value:0}),
    sethueRotate({...huerotate,value:0})

  )
}
// function download(){
//   //  var url ={img};
//   // var img_name = prompt("Enter img name");
//   var img_name=prompt("Enter image name");
//   return (
//       <a href={img} download={img_name}>download</a>
//     );

// }
return (
    <div className="App">
      <div className='Anounce'>
      <Anounce/>
      </div>
      <NavBar setBackground={setBackground}/>
      <div className='wrapper'>
        <div className='image-wrapper'>
          <div className='image'>
       <img src={background} alt='error' style={{filter:`${brightness.property}(${brightness.value}${brightness.unit})${blur.property}(${blur.value}${blur.unit})${contrast.property}(${contrast.value}${contrast.unit})${grayscale.property}(${grayscale.value}${grayscale.unit}) ${sepia.property}(${sepia.value}${sepia.unit})${huerotate.property}(${huerotate.value}${huerotate.unit})`}}/>
       </div>
        </div>
       <div className='modes'>
        <span>Brightness</span>
       <input type="range" max={brightness.range.max} min={brightness.range.min} value={brightness.value} onChange={(e)=>{setbrightness({...brightness,value:`${e.target.value}`})}} />
       <span>Blur</span>
       <input type="range" max={blur.range.max} min={blur.range.min} value={blur.value} onChange={(e)=>{setblur({...blur,value:`${e.target.value}`})}} />
       </div>
       <div className='modes'>
       <span>Contrast</span>
       <input type="range" max={contrast.range.max} min={contrast.range.min} value={contrast.value} onChange={(e)=>{setcontrast({...contrast,value:`${e.target.value}`})}} />
       <span>Grayscale</span>
       <input type="range" max={grayscale.range.max} min={grayscale.range.min} value={grayscale.value} onChange={(e)=>{setgrayscale({...grayscale,value:`${e.target.value}`})}} />
       </div>
       <div className='modes'>
       <span>Sepia</span>
       <input type="range" max={sepia.range.max} min={sepia.range.min} value={sepia.value} onChange={(e)=>{setsepia({...sepia,value:`${e.target.value}`})}} />
       <span>HueRotation</span>
       <input type="range" max={huerotate.range.max} min={huerotate.range.min} value={huerotate.value} onChange={(e)=>{sethueRotate({...huerotate,value:`${e.target.value}`})}} />
       </div> 
      <div className='action'>
      <div className='rest'>
       <button onClick={reset}>Reset</button>
      </div>
      <Download/>
      </div>
      </div>
    </div>
  );
}

export default App;

//${huerotate.property}(${huerotate.value}${huerotate.unit})
// ${blur.property}(${blur.value}${blur.unit})

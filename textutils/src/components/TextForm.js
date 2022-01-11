import React ,{useState} from 'react';



export default function TextForm(props) {
    const upperCase=()=>
    {
        // console.log("bt clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.sendAlert("Converted to Upper Case","success")
    }
    const lowerCase=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.sendAlert("Converted to Lower Case","success")
    }
    const rev=()=>
    {
        let newText=text.split('').reverse().join('');
        setText(newText);
        props.sendAlert("Text reversed","success")

    }
    const onUpdate=(event)=>
    {
        
        console.log("onc clicked");
        setText(event.target.value);
    }
    const newText=()=>{
        if (text==="Enter Text here!")
        {
            setText("");
        }
    }
    const [text,setText]=useState("Enter Text here!");
  return (
        <>
      <div className='container' style={{color:(props.mode==='light')?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'black'}}>
        <textarea className="form-control" id="mybox" rows="15" onChange={onUpdate} onClick={newText} value={text} style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#000033'}} ></textarea>
       
        </div>
        <button className='btn my-3' style={{backgroundColor:(props.mode==='dark')?'#7cfc00':"#1e90ff",color:(props.mode==='light')?'white':'black'}} onClick={upperCase}>Convert to Uppercase</button>
        <button className='btn  my-3 mx-2' style={{backgroundColor:(props.mode==='dark')?'#7cfc00':"#1e90ff",color:(props.mode==='light')?'white':'black'}} onClick={lowerCase}>Convert to Lowercase</button>
        <button className='btn  my-3 ' style={{backgroundColor:(props.mode==='dark')?'#7cfc00':"#1e90ff",color:(props.mode==='light')?'white':'black'}} onClick={rev}>Reverse Text</button>
    </div>
    <div className="container" style={{color:(props.mode==='light')?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.trim()===""?0:text.trim().split(" ").length} Words and {text.length} characters </p>
    </div>
    </>
    
  );
}

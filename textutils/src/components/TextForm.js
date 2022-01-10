import React ,{useState} from 'react';



export default function TextForm(props) {
    const upperCase=()=>
    {
        // console.log("bt clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const lowerCase=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const rev=()=>
    {
        let newText=text.split('').reverse().join('');
        setText(newText);

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
        <button className='btn btn-primary my-3' onClick={upperCase}>Convert to Uppercase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={lowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={rev}>Reverse Text</button>
    </div>
    <div className="container" style={{color:(props.mode==='light')?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.trim()===""?0:text.trim().split(" ").length} Words and {text.length} characters </p>
    </div>
    </>
    
  );
}

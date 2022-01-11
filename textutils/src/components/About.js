import React from 'react'

function About(props) {
    return (
        <div className='container' style={{color:(props.mode==='light')?'black':'white'}}>
            <h1>About the functions</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#2b1b5c'}} >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#251C8B'}}>
                    Convert to UpperCase
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Converts the given text to upperCase.</strong> Developed using toUpperCase function of the javascript
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#2b1b5c'}}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#251C8B'}}>
                    Convert to LowerCase
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Converts the given text to lowerCase.</strong> Developed using toLowerCase function of the javascript
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#2b1b5c'}}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color:(props.mode==='light')?'black':'white', backgroundColor:(props.mode==='light')?'white':'#251C8B'}}>
                    Reverse Text
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Reverses the given text.</strong> first it splits the given text based on empty symbol ie by character then reverses the array and hence joins it by the empty character again
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About

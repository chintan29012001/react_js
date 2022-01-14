import React, { Component } from 'react'

export class Newsitem extends Component {
    short(title,len) {
        return title?title.length<len?title:title.slice(0,len):"demo"
    };
    render() {
        let {title,description,image,storyUrl}=this.props;
        return (
                
                    <div className="card d-md-flex flex-column align-items-center " style={{margin:"2%"}}>
                        <div className="card d-flex flex-direction-column align-items-center " style={{height:"40%",maxWidth:"90%",margin:"3%",padding:"1%"}}>
                            <img src={image?image:"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/333200/333221.6.jpg"} className="card-img-top" style={{maxWidth:"100%",maxHeight:"100%"}} alt="..." />
                        </div>
                        <div className='flex-fill d-flex flex-column align-items-center' >
                            <div className="card-body d-flex flex-column align-items-center flex-grow-1" style={{textAlign:"center"}} >
                                <h5 className="card-title">{this.short(title,50)}</h5>
                                <p className="card-text flex-grow-1">{this.short(description,70)}</p>
                            </div>
                            <div className="card-body flex-column flex-justify-content-center mt-auto" >
                                <a href={storyUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
                            </div>
                        </div>
                    </div>
                

        )
    }
}

export default Newsitem

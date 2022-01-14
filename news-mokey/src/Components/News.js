import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    
    constructor()
    {
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    {
                        this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title} description={element.description} image={element.urlToImage} storyUrl={element.url} />
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default News

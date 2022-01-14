import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
    articles=[]
    
    async componentDidMount()
    {
        this.setState({loading:true});
        let news_api=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a3c2b747e744da78b5bd14e40cfa428&page=${this.state.page}&pageSize=${this.props.itemsPerPage}`);
        
        let news_response=await news_api.json()
        console.log(news_response);
        this.setState({articles:news_response.articles,totalArticles:news_response.totalResults,loading:false});
    }
    constructor()
    {
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1,
            totalArticles:0,
            
        }
    }
    handleNextClick= async ()=>
    {
        let totalPages=Math.ceil(this.state.totalArticles/this.props.itemsPerPage)
        console.log(totalPages);
        if(this.state.page+1<=totalPages)
        {
            this.setState({loading:true});
            let news_api=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a3c2b747e744da78b5bd14e40cfa428&page=${this.state.page+1}&pageSize=${this.props.itemsPerPage}`);
            console.log("ne");
            let news_response=await news_api.json()
            console.log(news_response);
            // this.setState({ page: this.state.page + 1 })
            this.setState({articles:news_response.articles,page: this.state.page + 1,loading:false});
        }
    }
    handlePrevClick=async ()=>
    {
        if(this.state.page-1>=1)
        {
            this.setState({loading:true});
            let news_api=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7a3c2b747e744da78b5bd14e40cfa428&page=${this.state.page-1}&pageSize=${this.props.itemsPerPage}`);
            
            let news_response=await news_api.json()
            // console.log(news_response);
            // this.setState({ page: this.state.page + 1 })
            this.setState({articles:news_response.articles,page: this.state.page - 1,loading:false});
        }
        
    }

    render() {
        return (
            <div className='container text-center' >
                <h1>Top Headlines</h1>
                {this.state.loading && <Spinner />}
                {!this.state.loading &&<div className="row">
                    {
                        this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title} description={element.description} image={element.urlToImage} storyUrl={element.url} />
                            </div>
                        })
                    }
                </div>
                }
                <div className="container d-flex justify-content-evenly my-2">
                <button type="button" disabled={this.state.page<2} onClick={this.handlePrevClick} className="btn btn-dark btn-lg">&larr; Prev</button>
                <button type="button" disabled={this.state.page===Math.ceil(this.state.totalArticles/this.props.itemsPerPage)} onClick={this.handleNextClick} className="btn btn-dark btn-lg">&rarr; Next</button>
                    
                </div>
            </div>
        )
    }
}

export default News

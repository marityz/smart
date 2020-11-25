import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import React, { Component } from 'react';
import Api from "../components/Api/Api";



class Home extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="home">
                <Header currentPage = {true}/>
                <Search api = {new Api()}/>

            </div>
        )
    }

}



export default Home;

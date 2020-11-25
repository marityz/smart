import Header from "../components/Header/Header";
import CreateItem from "../components/CreateItem/CreateItem";
import React, { Component } from 'react';
import Api from "../components/Api/Api";



class Create extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create">
                <Header currentPage = {false} />
                <CreateItem api = {new Api()}/>
            </div>
        )
    }


}


export default Create;

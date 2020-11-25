import React from 'react';
import './Search.css';
import FormSearch from "../FormSearch/FormSearch";

class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <section className="section-search">
                    <FormSearch api={this.props.api}/>


                </section>
            </>
        )
    }
}


export default Search;

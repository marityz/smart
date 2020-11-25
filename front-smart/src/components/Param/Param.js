import React from 'react';
import './Param.css'


class Param extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <p className='item__text-key item__title'>{this.props.keyParam}: <span
                className='item__text-params item__text'>{this.props.value}</span></p>
            </>
        )
    }
}


export default Param;

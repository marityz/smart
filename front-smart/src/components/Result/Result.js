import React from 'react';
import './result.css'
import Item from "../Item/Item";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRender: false,
        }
    }




    render() {

        return (
            <section className="result result_margin">
                <h2 className="result__title">
                    Результаты поиска
                </h2>
                <div className="result__item">
                    {(this.props.items.length === 0)?
                        <div className="result__text"> Ничего не найдено</div> :
                   this.props.items.map((item, index) => {
                        return <Item item={item} key={index} api={this.props.api}/>
                    })}

                </div>


            </section>

        )
    }
}

export default Result;

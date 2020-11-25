import React from 'react';
import './Item.css';
import Param from "../Param/Param";
import iconDelete from "../../images/trash.svg"


class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idItem: this.props.item._id,
        }
    }

    // deleteItem = () => {
    //     this.props.api.removeItem(this.state.idItem)
    //         .then((res)=> {
    //             console.log(res)
    //         })
    //
    // };


    render() {
        return (
            <>
                <div className='item'>
                    <img className="item__close"/>
                    <img className='item__img'/>
                    <div className='item__content'>
                        <h3 className='item__name item__title'>Название: <span
                            className='item__text-params item__text'>{this.props.item.name}</span></h3>
                        <p className='item__description item__title'> Описание: <span
                            className='item__text-params item__text'>{this.props.item.description}</span>
                        </p>
                        {!!this.props.item.params ?
                            Object.entries(this.props.item.params).map((array, index) => {
                            return <Param keyParam={array[0]} value={array[1]} key={index}/>
                        }): ""
                        }

                    </div>
                </div>


            </>
        )
    }
}


export default Item;

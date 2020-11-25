import React from 'react';
import './FormSearch.css'
import arrow from "../../images/double-down-arrows-svgrepo-com.svg"
import Result from "../Result/Result";
import ITEM_MAIN_FIELD from "../../const/const-form"


class FormSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formParams: {},
            items: [],
            isOpenAdvancedForm: false,
            isGetItem: false,
            isSubmit: false,
        };
    }


    handleInputForm = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let formParams = this.state.formParams;

        formParams[name] = value.trim();

        this.setState({
            formParams: formParams,
        });


    };

    // clearForm = () => {
    //     document.getElementById("search").reset();
    //     this.setState({formParams: {}});
    // };

    handlerClickOpenAdvancedForm = () => {
        this.setState({isOpenAdvancedForm: !this.state.isOpenAdvancedForm});

    };

    handleSubmit = (event) => {
        event.preventDefault();

        const cleanParams = this.sanitazerParams(this.state.formParams);

        this.props.api.getItem(this.generateApiParams(cleanParams))
            .then((items) => {

                this.setState({items: items});
                return items;
            })

            .then((items) => {
                this.setState({isGetItem: true});
               // this.clearForm();
            })

    };


    sanitazerParams = (formInputs) => {
        //удалить все пусте строки, сформировать типовой запрос
        for (let propName in formInputs) {
            if (formInputs[propName] === null || formInputs[propName] === undefined || formInputs[propName] === "") {
                delete formInputs[propName];
            }
        }
        return formInputs;
    };


    generateApiParams = (formInputs) => {
        let apiParams = {};
        let params = {};

        for (let keyInput in formInputs) {
            const isMainKey = ITEM_MAIN_FIELD.includes(keyInput);
            if (isMainKey) {
                apiParams[keyInput] = formInputs[keyInput];

            } else {
                params[keyInput] = formInputs[keyInput];
            }

        }
        apiParams.params = params;

        return apiParams;

    };


    changeIisGetItem = () => {
        this.setState({isGetItem: !this.state.isGetItem})
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.isGetItem) {
            this.changeIisGetItem()
        }

    }

    render() {

        return (

            <>
                <form className="search" name="search" id="search" onSubmit={this.handleSubmit}>
                    <div className='search__form'>
                        <input id="inputtag" type="text" name="name" className="search__input"
                               placeholder="Введите название товара" onChange={this.handleInputForm}/>
                        <button type="submit" className="button search__button">Искать</button>
                    </div>
                    <img src={arrow} className="search__img" onClick={this.handlerClickOpenAdvancedForm}/>
                    {this.state.isOpenAdvancedForm ? (
                        <div className="search__advanced">
                            <label>Описание: <br/>
                                <input className="search__input_params" minLength={2} name="description"
                                       onChange={this.handleInputForm}/>
                            </label>
                            <label>Фирма:<br/>
                                <input className="search__input_params" minLength={2} name="Фирма"
                                       onChange={this.handleInputForm}/>
                            </label>

                            <label>Страна производитель:<br/>
                                <input className="search__input_params" minLength={2} name="Страна производитель"
                                       onChange={this.handleInputForm}/>
                            </label>
                            <label>Цвет: <br/>
                                <input className="search__input_params" minLength={2} name="Цвет"
                                       onChange={this.handleInputForm}/>
                            </label>
                        </div>) : (
                        " "
                    )}
                </form>
                {this.state.isGetItem ? <Result items={this.state.items} api={this.props.api}/> : " "}
            </>
        )
    }
}

export default FormSearch;

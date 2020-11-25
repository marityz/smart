import React from 'react';
import './CreateItem.css';


class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            item: "",
            isCreateItem: false,
        };

    }

    handleInputForm = (event) => {
        event.preventDefault();
        this.setState({
            isCreateItem: false,
        });


        const target = event.target;
        const value = target.value;
        const name = target.name;
        let form = this.state.form;

        form[name] = value.trim();

        this.setState({
            form: form,
        });


    };


    clearForm = () => {
        document.getElementById("form-item").reset();
        this.setState({form: {}});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const saveData = this.deleteParams(this.state.form);

        this.props.api.createItem(this.generateParams(saveData))
            .then((res) => {
                this.setState({
                    item: res,
                });
                return res;
            })
            .then((items) => {
                this.setState({isCreateItem: true});
                this.clearForm()
            })

            .catch((err)=>{
                console.log(err)
            })


    };

    generateParams = (obj) => {
        let params = {};
        for (let propName in obj) {
            if (!(propName === "name") && !(propName === "description")) {
                //нужно добавить в объект params ключ значение
                params[propName] = obj[propName];
                delete obj[propName];
            }
        }
        obj.params = params;
        return obj;
    };

    deleteParams = (formInputs) => {
        //удалить все пусте строки, сформировать типовой запрос
        for (let propName in formInputs) {
            if (formInputs[propName] === null || formInputs[propName] === undefined || formInputs[propName] === "") {
                delete formInputs[propName];
            }
        }
        return formInputs;
    };


    render() {
        return (
            <div className="create-item">
                <h2 className="create-item__title">Добавление товара</h2>
                <form className='create-item__form ' onSubmit={this.handleSubmit} id="form-item">
                    <p className='create-item__param'>Название: </p>< input className='create-item__input' minLength={2}
                                                                            name="name" onChange={this.handleInputForm}
                                                                            required/>
                    <p className='create-item__param'>Описание: </p>< input className='create-item__input'
                                                                            minLength={2} name="description"
                                                                            onChange={this.handleInputForm} required/>
                    <p className='create-item__param'>Фирма: </p>< input className='create-item__input' minLength={2}
                                                                         name="Фирма" onChange={this.handleInputForm}/>
                    <p className='create-item__param'>Страна производитель: </p> < input className='create-item__input'
                                                                                         minLength={2}
                                                                                         name='Страна производитель'
                                                                                         onChange={this.handleInputForm}/>
                    <p className='create-item__param'>Цвет: </p>< input className='create-item__input' minLength={2}
                                                                        name="Цвет" onChange={this.handleInputForm}/>
                    <button className='create-item__button'>Добавить</button>
                </form>
                {this.state.isCreateItem ? <div className="create-item__result">Товар успешно добавлен</div> : " "}

            </div>
        )
    }
}


export default CreateItem;

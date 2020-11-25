import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (

            <div className="header">
                {this.props.currentPage ? (
                    <>
                        <Link className="header__link header__link__active" to={'/home'}> Найти товар </Link>
                        <Link className="header__link" to={"/create"}>Добавить товар</Link>
                    </>
                ) : (
                    <>
                        <Link className="header__link " to={'/home'}> Найти товар </Link>
                        < Link className="header__link header__link__active" to={"/create"}>Добавить товар</Link>
                    </>
                )}
            </div>

        )
    }
}

export default Header

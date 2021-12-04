import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

import ModalLog from '../Modals/ModalLog';

import { connect } from 'react-redux';
import uiAction from '../../store/actionCreators/uiAction';

const Menu = ({setDefault, toggleLogModal}) => {
    React.useEffect(() => {
        setDefault();
    }, []);

    const openModal = () => {
        toggleLogModal();
    }
    return (
        <div className="menu">
                <div className="menu__wrapper wrapper">
                    <h2 className="menu__title title">Меню биржи!</h2>
                    <button className="menu__link link" onClick={openModal}>Участник</button>
                    <Link className="menu__link link" to="/admin">Администратор</Link>
                </div>
                <ModalLog />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {ui: state['uiReducer']}
}

export default connect(mapStateToProps, uiAction)(Menu);
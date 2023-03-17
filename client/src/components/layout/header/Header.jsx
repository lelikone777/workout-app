import React from 'react';
import styles from './header.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import {FiArrowLeft} from "react-icons/fi";
import Hamburger from "../hamburger/Hamburger";

const Header = ({backLink}) => {

    // const {} = useAuth()

    return (
        <header className={styles.header}>
            <button onClick={() => {}}></button>
            <FiArrowLeft/>
            <Hamburger/>
        </header>
    );
};

export default Header;
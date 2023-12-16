'use client'
import HomePage from "../components/home/Home";
import {useState} from "react";
import FullScreenMobileMenu from "../components/header/FullScreenMobileMenu";

export default function Home() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            <FullScreenMobileMenu isVisible={menuVisible} onClose={toggleMenu}/>
            <HomePage toggleMenu={toggleMenu} menuVisible={menuVisible}/>

        </>


    )
}

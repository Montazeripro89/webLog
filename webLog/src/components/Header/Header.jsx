import NavList from "./UCategory/NavList";
import '../../css/Header/Header.css';
import { useState, useEffect } from "react";
import Moon from "./UCategory/Moon";
import Sun from "./UCategory/Sun";

function Header(props) {

    const [navigation, setNavigation] = useState([
        { id: 1, name: 'Home', Information: 'Home', status: false },
        { id: 2, name: 'Blog', Information: 'Blog', status: false },
        { id: 3, name: 'Product', Information: 'Product', status: false },
        { id: 4, name: 'Contact Us', Information: 'Contact Us', status: false }
    ]);

    const [drawer, setDrawer] = useState(false);
    const [drawerInfo, setDrawerInfo] = useState('');
    const [handleMouseEnterValue, setHandleMouseEnterValue] = useState(false);
    const [navsHover, setNavsHover] = useState(false);
    const [infoDisplay, setInfoDisplay] = useState(false);


    const darkMode = props?.Mode;

    const handlerDarkMode = props?.Functions.find(item => item.name === 'handlerDarkMode')?.function;

    const Functions = [

        {
            id: 1,
            name: 'OpenDrawer',
            function: function openDrawer(informations) {
                const thatLi = navigation.find(item => item.name === informations.name);
                if (thatLi) {
                    thatLi.status = true;
                    setDrawerInfo(thatLi.Information);
                    setDrawer(true);
                    setNavsHover(true);
                    setInfoDisplay(true);
                }
            },
            for: 'HeaderF',
            section: 'NavList',
            how: 'hovering'
        },

        {
            id: 2,
            name: 'CloseDrawer',
            function: function closeDrawer(informations) {
                const thatLi = navigation.find(item => item.name === informations.name);
                if (thatLi) {
                    thatLi.status = false;
                    setTimeout(() => setNavsHover(false), 500);
                }
            },
            for: 'HeaderF',
            section: 'NavList',
            how: 'hovering'
        }
    ];

    const handleMouseEnter = () => {
        setDrawer(true);
        setHandleMouseEnterValue(true);
        setInfoDisplay(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setHandleMouseEnterValue(false);
        }, 500);
    };

    useEffect(() => {
        if (!navsHover && !handleMouseEnterValue) {
            setDrawer(false);
            setInfoDisplay(false);
        }
    }, [handleMouseEnterValue, navsHover]);

    const handleSearch = (e) => {
        if (e.key !== 'Enter') return;
        const q = e.target.value.trim().toLowerCase();
        const found = navigation.find(i => i.name.toLowerCase() === q);
        if (found) {
            setDrawerInfo(found.Information);
            setInfoDisplay(true);
            setTimeout(() => setInfoDisplay(false), 1400);
        }
    };



    return (
        <div className="Nav">
            <div className="up" onMouseMove={handleMouseLeave}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="in-search"
                    onKeyDown={handleSearch}
                />

                <div className="btns">
                    {!darkMode
                        ? <Moon onClick={handlerDarkMode} />
                        : <Sun onClick={handlerDarkMode} />}
                    <button className="btnS">Sign Up</button>
                    <button className="btnL">Log in</button>
                </div>
            </div>

            <div className="down">
                <NavList Info={navigation} Functions={Functions.filter(item => item.section === 'NavList')} />
            </div>

            <div
                className="drawer"
                onMouseMove={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    height: drawer ? '15vw' : '0vw',
                    borderTop: drawer ? '0.125vw solid #9e9e9e' : 'none'
                }}
            >
                <li
                    style={{
                        listStyleType: !drawer ? 'none' : 'revert-layer',
                        display: !infoDisplay ? 'none' : 'flex'
                    }}
                >
                    {drawerInfo}
                </li>
            </div>
        </div>
    );
}

export default Header;

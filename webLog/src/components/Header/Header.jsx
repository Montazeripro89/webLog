import NavList from "./UCategory/NavList";
import '../../css/Header/Header.css';
import { useState } from "react";

function Header() {

    let [ navigation , setNavigation ] = useState(
        [
            {
                id : 1,
                name : 'Home',
                Information : 'Home',
                status : false
            },

            {
                id : 2,
                name : 'Blog',
                status : false
            },

            {
                id : 3,
                name : 'Product',
                status : false
            },

            {
                id : 4,
                name : 'Contact Us',
                status : false
            }
        ]
    )

    let Functions = [
        {
            id : 1,
            name : 'Search',
            function : function search (event) {
                if (event.key === 'Enter') {
                console.log(event.target.value);
                }
            },
            for : 'HeaderF',
            section : 'inputS',
            how : 'searching'
        },

        {
            id : 2,
            name : 'OpenDrawer',
            function : function openDrawer (informations) {
                let thatLi = navigation.find(item => item.name === informations.name);
                thatLi.status = !thatLi.status;
                setDrawerInfo(thatLi.Information)
                setdrawer(true)
            },
            for : 'HeaderF',
            section : 'NavList',
            how : 'hovering'
        },

        {
            id : 3,
            name : 'CloseDrawer',
            function : function closeDrawer (informations) {
                let thatLi = navigation.find(item => item.name === informations.name);
                thatLi.status = !thatLi.status;
                setTimeout(() => {
                    if(!handleMouseEnter) {
                        setdrawer(false)
                        setDrawerInfo('')
                    }else {
                        setdrawer(true)
                    }
                }, 150);
            },
            for : 'HeaderF',
            section : 'NavList',
            how : 'hovering'
        },
    ]

    let search = Functions.find(item => item.name === 'search');
    let [ drawer , setdrawer ] = useState(false);
    let [ drawerInfo , setDrawerInfo ] = useState('');
    let closeTimeout;

    const handleMouseEnter = () => {
        if(closeTimeout) clearTimeout(closeTimeout);
        setdrawer(true);
    };

    const handleMouseLeave = () => {
        closeTimeout = setTimeout(() => {
            setdrawer(false);
            setDrawerInfo('');
        }, 150);
    };


    return ( 
        <>
            <div className="Nav">
                <div className="up" onMouseMove={handleMouseLeave}>
                    <input type="text" placeholder="Search..." className="in-search" onKeyDown={search?.function ? Search?.function : console.log('Function is not defind') } />
                    <div className="btns">
                        <button className="btnS">Sign Up</button>
                        <button className="btnL">Log in</button>
                    </div>
                </div>
                <div className="down">
                    <NavList Info = {navigation} Functions= {Functions.filter(item => item.section === 'NavList')}/>
                </div>
                <div className="drawer" onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{height: drawer ? '15vw' : '0vw'}}><li style={{listStyleType : !drawer ? 'none' : 'revert-layer'}}>{drawerInfo}</li></div>
            </div>
        </>
    );
}

export default Header;
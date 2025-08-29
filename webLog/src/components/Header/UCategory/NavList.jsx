import Navs from "./Navs";
import '../../../css/Header/UCategory/NavList.css';

function NavList(props) {
    return (
        <>
            <div className="NavBar">
                {
                    props?.Info?.map((item) => <Navs Info = {item} Function = {props?.Functions.filter(item => item.how === 'hovering')} key = {item.id}/>)
                }
            </div>
        </> 
    );
}

export default NavList;
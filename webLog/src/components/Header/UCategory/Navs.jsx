import '../../../css/Header/UCategory/Navs.css';

function Navs(props) {

    let openDrawer = props?.Function.find(item => item.name === 'OpenDrawer')?.function;
    let closeDrawer = props?.Function.find(item => item.name === 'CloseDrawer')?.function;

    return ( 
        <>

            <div className='lies'>
                <li className="li" onMouseMove={() => openDrawer && openDrawer(props?.Info)} onMouseLeave={() => closeDrawer && closeDrawer(props?.Info)}>
                    {props?.Info?.name}
                </li><br />
            </div>
        
        </>
    );
}

export default Navs;
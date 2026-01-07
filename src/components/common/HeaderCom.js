import { Link, Outlet } from "react-router-dom";

function HeaderCom(){
    return(
    <div>
        <header>
            <Link to="/">HOME</Link> &nbsp;
            <Link to="/member/list">MEMBER</Link>
            <hr />
        </header>
        <main>
            <Outlet></Outlet>
        </main>

    </div>)
}

export default HeaderCom;


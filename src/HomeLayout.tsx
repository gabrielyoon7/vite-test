import {Outlet} from "react-router-dom";

function HomeLayout(){
    return (
        <div style={{border:'yellow 1px solid'}}>
          <Outlet />
        </div>
    )
}
export default HomeLayout;

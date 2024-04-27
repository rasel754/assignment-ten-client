import { useContext } from "react";
import { Link , NavLink} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user ,logout }=useContext(AuthContext);

    const handleSignOut = () => {
        logout()
        .then( result => {
           console.log(result.user)})
           
        .catch( error => {
           console.error(error);
        })
  
    };
    const navLinks =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addCraftItem">Add Craft Item</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/userInformation">User Information</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl animate__bounce  "><span className="text-blue-600">RS</span > RESIDENCE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              <button onClick={handleSignOut} className="btn"><Link to="/login">sign out</Link></button>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            </>
            :<button className="btn "><Link to="/login">Login</Link></button>
      
      
          }
        </div>
      </div>
    );
};

export default Navbar;
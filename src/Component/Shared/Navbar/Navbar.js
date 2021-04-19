import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>


      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/'>House Builder</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
              <Link class="nav-link active" to=''>about Us</Link>
              <Link class="nav-link active" to=''>Project</Link>
              <Link class="nav-link active" to='' >Contact</Link>
              <Link class="nav-link active" to='/booksPay/:name' >Admin Panel</Link>
              <Link className="nav-link text-primary" ><FontAwesomeIcon icon={faUser} /> {loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</Link>
              <Link class="nav-link active" to="/login" >Login</Link>
              <Link class="nav-link active" onClick={() => setLoggedInUser({})} to='/' >Sign Out</Link>
            </div>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Navbar;
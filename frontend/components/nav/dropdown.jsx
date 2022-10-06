import React, { useState } from "react";
import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { Link } from "react-router-dom";
import { HiOutlineMenu } from 'react-icons/hi';
import { FaUserCircle, FaRegSmile } from 'react-icons/fa'

const DropDown = ({ openModal, currentUser, logout }) => {
  const [toggledDropDown, setToggledDropDown] = useState(false);

  const styles = {
    dropdown: {
      size: 26,
      paddingLeft: 3,
      paddingRight: 3,
      color: '#717171',
    },
    link: {
      textDecoration: 'none',
      color: '#222222',
    }
  }

  const sessionModal = (formType) => {
    return e => {
      e.preventDefault();
      openModal({
        type: formType,
      });
      setToggledDropDown(false);
    };
  };

  const sessionLogout = () => {
      logout();
      setToggledDropDown(false);
  }

  const handleClick = (e) => {
    console.log('on click')
    e.preventDefault();
    e.stopPropagation();
    setToggledDropDown(!toggledDropDown)
  };
  
  // const handleBlur = (e) => {
  //   if (e.relatedTarget === null || (e.relatedTarget.className != "dropdown-content")) {
  //     setToggledDropDown(false);
  //   }
  // }


  const loggedOutMenu = () => {
    return (  
      <div className="dropdown-content">
          <div className="greeting">
            <p>Welcome to yourbnb! <span><FaRegSmile style={{color: '#00a699'}}/></span></p>
          </div>
          <div className="nav-login-signup" onClick={sessionModal('login')}>
            Log In
          </div>
          <div className="nav-login-signup" onClick={sessionModal('signup')}>
            Sign Up
          </div>
      </div>
    );  
  };

  const loggedInMenu = () => {
    return (
      <div className="dropdown-content">
        <div className="greeting">
          <p>Hi, {currentUser.firstName}! <span><FaRegSmile style={{color: '#ff385c'}}/></span></p>
        </div>
        <Link to="/reservations" style={styles.link}>
          <div className="nav-trips">Trips</div>
        </Link>
        <div className="nav-wishlists">
          Wishlists
        </div>
        <div className="nav-logout-button" onClick={sessionLogout}>
          Logout
        </div>
      </div>
    );
  };
    
  return (
    <>
      <button className="nav-dropdown-button" onClick={handleClick}>
          <HiOutlineMenu size={styles.dropdown.size} style={styles.dropdown} />
          <FaUserCircle size={styles.dropdown.size} style={styles.dropdown} />
      </button>
      <div className="dropdown-container">
        {
          toggledDropDown ? (
            <>
              {
                currentUser ? loggedInMenu() : loggedOutMenu()
              }
            </>
          ) : null
        }
      </div>
    </>
  )
}

const mapStateToProps = ({ session, entities: { users }}) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: formType => dispatch(openModal(formType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
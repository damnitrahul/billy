import React, { useState } from 'react';

//Material UI
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//Styled Component
import { AppBar } from '../styledComponents/layout/header/AppBar';

//Router
import { signOut } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { confirmLogoutAction } from '../../redux/actions/alertDialogActions';
import { isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

//Component
function Header({ title }) {
  const profile = useSelector(
    (state) => state.firebase.profile && state.firebase.profile
  );
  const { firstName, lastName } = profile;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(confirmLogoutAction(signOut()));
  };

  return (
    <AppBar>
      <h2>{title}</h2>
      <div>
        {isLoaded(profile) && (
          <Link to="/settings">
            <img
              src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&color=2e5bff&background=e0e7ff`}
              alt="User Logo"
            />
          </Link>
        )}
        <Link to="/settings">
          {firstName} {lastName}
        </Link>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>
            <p>Logout</p>
          </MenuItem>
        </Menu>
      </div>
    </AppBar>
  );
}

export default Header;

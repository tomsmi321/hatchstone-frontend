import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const DropdownMenu = ({ isOpen, onClose, anchorEl, menuItems }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      getContentAnchorEl={null}
    >
      { menuItems.map((item, i) => (
        <MenuItem key={i} onClick={item.onClick}>{item.label}</MenuItem>
      ))}
    </Menu>
  );
}

export default DropdownMenu
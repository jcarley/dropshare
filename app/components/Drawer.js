import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { mainListItems, secondaryListItems } from './listItems';

const drawer = props => {
  const { classes, open, handleDrawerClose } = props;
  const { drawerPaper, drawerPaperClose, toolbarIcon } = classes;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(drawerPaper, !open && drawerPaperClose)
      }}
      open={open}
    >
      <div className={toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};

drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired
};

export default drawer;

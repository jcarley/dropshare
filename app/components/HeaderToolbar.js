import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const HeaderToolbar = props => {
  const { title, classes, open, handleDrawerOpen } = props;
  const { toolbar, menuButton, menuButtonHidden } = classes;

  return (
    <Toolbar disableGutters={!open} className={toolbar}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerOpen}
        className={classNames(menuButton, open && menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        {title}
      </Typography>

      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  );
};

HeaderToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default HeaderToolbar;

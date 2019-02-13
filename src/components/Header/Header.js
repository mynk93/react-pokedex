import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
    root: {
      width: '100%',
    },
    title: {
      display: 'none',
      [theme.breakpoints.up ('sm')]: {
        display: 'block',
      },
    },
});

const Header = props => {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              React Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)

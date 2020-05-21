import * as React from 'react';
import { AppBar, Link as LinkM, Button, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const Navbar: React.FunctionComponent = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Box className={classes.container}>
        <AppBar position='static' className={classes.appBar}>
          <ul className={classes.linksUL}>
            <LinkM variant='overline' underline='none' className={classes.linkStyle}>
              HOME
            </LinkM>

            <LinkM variant='overline' underline='none' className={classes.linkStyle}>
              DOCUMENTATION
            </LinkM>

            <LinkM variant='overline' underline='none' className={classes.linkStyle}>
              ABOUT
            </LinkM>
          </ul>
          <ul className={classes.loginButton}>
            <LinkM variant='overline' underline='none'>
              <Button variant='outlined' size='small'>
                SIGN IN WITH
                <GitHubIcon style={{ fontSize: 'large', marginLeft: '8px' }}></GitHubIcon>
              </Button>
            </LinkM>
          </ul>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

const useStyles = makeStyles(() => ({
  appBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: 'black',
    padding: '25px',

    margin: '0 10%',
  },
  linksUL: {
    display: 'flex',
    padding: 0,
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#7209b7',
    },
    padding: '5px',
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    '&:hover': {
      color: '#7209b7',
      backgroundColor: 'black',
    },
  },
}));

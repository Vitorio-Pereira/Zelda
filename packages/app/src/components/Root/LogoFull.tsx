import { makeStyles } from '@material-ui/core';
import ZeldaLogo from '../../assets/logo-zelda.png';
const useStyles = makeStyles({
  png: {
    width: '170px',
    height: 'auto',
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return <img src={ZeldaLogo} alt="Logo!" className={classes.png} />;
};

export default LogoFull;

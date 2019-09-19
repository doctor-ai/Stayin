import { styles as toolbarStyles } from '../Headerpages/Toolbar';

const style = theme => ({
  title: {
    fontSize: 24
  },
  root: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70
    }
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: 'red'
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});
export default style;

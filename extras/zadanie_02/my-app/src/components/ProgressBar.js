import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useOwnStyles = makeStyles( theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function LinearBuffer() {
    const classes = useOwnStyles();
  
    return (
      <div className={classes.root}>
          <div>Progress:</div>
  
        <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} color="secondary" />
  
      </div>
    );
};
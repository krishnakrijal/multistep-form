import React from 'react';
import { Container, FormControlLabel, Checkbox, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    textfield:{
        width:'100%',
        padding:'10px 0 12px'
    }
});

const SignIn = () => {
    const classes = useStyles();
    return (
       <Container maxWidth="sm" align="center">
           <Typography variant="h5" align="center" gutterBottom>
               Sign In
           </Typography>
           <form>
           <Grid container direction="column">
               <Grid item>
               <TextField variant="outlined" label="First Name" required className={classes.textfield}/>
               </Grid>
               <Grid item>
               <TextField variant="outlined" label="Last Name" required className={classes.textfield}/>
               </Grid>
               <Grid item>
               <TextField variant="outlined" label="Email" required className={classes.textfield}/>
               </Grid>
               <Grid item>
               <TextField variant="outlined" label="Password" required className={classes.textfield}/>
               </Grid>
               <Grid item>
               <TextField variant="outlined" label="Confirmed Password" required className={classes.textfield}/>
               </Grid>
               <Grid item>
               <FormControlLabel
                control={<Checkbox checked onChange name="checkedA" color="primary" />}
                 label="Send SMS"
      />
               </Grid>


           </Grid>
           </form>
           

       </Container>
    )
}

export default SignIn

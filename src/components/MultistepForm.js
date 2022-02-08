import { Button, Container, makeStyles, Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import SignIn from './SignIn';

const useStyles = makeStyles({
    root:{
        margin:'6rem auto',
        border:'1px solid #999',
        "& .MuiStepIcon-root.MuiStepIcon-active":{
            color:'green'
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed":{
            color:'red'
        }
    }
})

const MultistepForm = () => {
    const[activeStep, setActiveStep]= useState(0);
    const classes = useStyles();
    
    function getStep(){
        return ["Sign In","CHOOSE PLAN","CHECKOUT"];
    }
    const steps = getStep();

    function getStepContent(stepIndex){
        switch (stepIndex) {
            case 0:
                return <SignIn/>;
                case 1:
                    return "Step Two (CHOOSE PLAN)";
                    case 2:
                        return "Step Three (CHECKOUT)"
                        default:
                            return "UnKnown option"
                
    }
}
    const handleNext = ()=>{
        setActiveStep(prevStep=>prevStep+1)
    }
    return (
        <>
        <Container maxWidth="md" >
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label)=>(<Step key={label}>
                  <StepLabel>
                      {label}
                  </StepLabel>
              </Step>))}
             
         </Stepper>
          
        
         {activeStep === steps.length ? "Steps are completed" :
         (<>
         {getStepContent(activeStep)}
         
         <Button onClick={handleNext}>
             {activeStep === steps.length-1 ? "Finish" : "Next"}
        </Button>
        
         </>)}
         
        </div>
        </Container>
        </>
       
    )
}

export default MultistepForm

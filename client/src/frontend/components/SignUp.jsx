import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import axios from 'axios';
import { setGlobalState,useGlobalState } from '../state/Global';
import { useNavigate } from "react-router-dom";
function SignIn() {
  //{
//   "email": "govind1234@gmail.com",
//   "password": "12345678"
// }
const navigate = useNavigate();

  const [sent, setSent] = React.useState(false);
  const [id, setId] = useGlobalState("id");
  const [isAuth,setIsAuth] = useGlobalState("isAuth");
  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = async (formData) => {
    try {
      
     
      const response = await axios.post('http://localhost:4000/auth/register', formData);
      setGlobalState("id",formData.email);
      // setId(formData.email);
      console.log(formData.email);
      
      navigate("/");
      setSent(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up - {id}
            
            {/* <div>{useGlobalState(id)}</div> */}
          </Typography>
          <Typography variant="body2" align="center">
            {'Are you a member? '}
            <Link
              href="/signin/"
              align="center"
              underline="always"
            >
              Sign In here
            </Link>
          </Typography>
        </React.Fragment>
        {/* <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        > */}
        <Form
  onSubmit={(formData) => handleSubmit(formData)}
  subscription={{ submitting: true }}
  validate={validate}
>
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 4 }}>
              <Field
                
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="careplace"
                margin="normal"
                name="careplace"
                type="text"
                required
                
              />
              <Field
                fullWidth
                
                component={RFTextField}
               
                required
                name="supname"
                
                label="supname"
                type="text"
                margin="normal"
              />
               <Field
                fullWidth
                
                component={RFTextField}
               
                required
                name="email"
                
                label="email"
                type="email"
                margin="normal"
              />
               <Field
                fullWidth
                
                component={RFTextField}
               
                required
                name="password"
                
                label="password"
                type="password"
                margin="normal"
              />
               <Field
                fullWidth
                
                component={RFTextField}
               
                required
                name="phone"
             
                label="phone"
                type="number"
                margin="normal"
              />
               <Field
                fullWidth
                
                component={RFTextField}
               
                required
                name="add"
               
                label="address"
                type="text"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                
                size="large"
                color="secondary"
                fullWidth
              >
                Sign Up
              </FormButton>
            </Box>
          )}
        </Form>
        
      </AppForm>
     
    </React.Fragment>
  );
}

export default withRoot(SignIn);





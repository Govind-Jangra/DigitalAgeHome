import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import toast, { Toaster } from 'react-hot-toast';
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
import { useNavigate } from "react-router-dom";

import { setGlobalState,useGlobalState } from '../state/Global';
function SignIn() {
  const navigate = useNavigate();
  // const history = useHistory();
  //{
//   "email": "govind1234@gmail.com",
//   "password": "12345678"
// }
  const [sent, setSent] = React.useState(false);
  const [id]=useGlobalState("id");
  const [isAuth] = useGlobalState("isAuth");
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
      console.log(formData);
      const response = await axios.post('/auth/login', formData);
      toast.success("Details added successfully");
     
      localStorage.setItem('id', formData.phone);
localStorage.setItem('isAuth', "true");
      console.log(response.data);
      console.log(id);
      navigate('/');
      
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <React.Fragment>
    <div><Toaster/></div>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/signup/"
              align="center"
              underline="always"
            >
              Sign Up here
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
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />

               <Field
                
                autoFocus
                component={RFTextField}
                
                fullWidth
                label="phone"
                margin="normal"
                name="phone"
                required
                size="large"
              />

              <Field
                fullWidth
                size="large"
                component={RFTextField}
               
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
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
                Sign In
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);

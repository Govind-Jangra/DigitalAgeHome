import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const navigate = useNavigate();
  const id1 = localStorage.getItem('id');
const isAuth1 = localStorage.getItem('isAuth');
const [id,setId]=useState(id1);
const [isAuth,setIsAuth]=useState(isAuth1);
function handleSignOut() {
  
localStorage.setItem('isAuth', "");
setId(1);
toast.success("sign out successfully");
setIsAuth(false);
console.log(isAuth);
navigate('/');
}
  return (
    <div>
     <div><Toaster/></div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'Digital Age Home'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          {isAuth && 
          <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/problems"
              sx={rightLink}
            >
              {'Problems'}
            </Link>
          }
          {isAuth &&
         <button onClick={handleSignOut}> <Link
              color="inherit"
              variant="h6"
              underline="none"
              sx={rightLink}
              
            >
              {'SignOut'}
            </Link>
            </button>
          }
          <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/dashboard/home"
              sx={rightLink}
            >
              {'Dashboard'}
            </Link>

          
            {!isAuth && (
  <Link
    color="inherit"
    variant="h6"
    underline="none"
    href="/signin/"
    sx={rightLink}
  >
    {'Sign In'}
  </Link>
)}
{!isAuth && (
  <Link
    color="inherit"
    variant="h6"
    underline="none"
    href="/signup/"
    sx={rightLink}
  >
    {'SignUp'}
  </Link>
)}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;

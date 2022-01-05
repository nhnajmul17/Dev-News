
import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Login.css'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const Login = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (

<>
<Header></Header>
<Grid container spacing={1} className='Regi__item' maxWidth="md">
      <Grid item xs={12} md={8}>
        <img className='Regi__img' src="https://thumbs.dreamstime.com/b/online-news-update-breaking-news-banner-tiny-people-laptop-flat-cartoon-vector-illustration-announcements-189844354.jpg" alt="" />
      </Grid>
      <Grid item xs={12} md={4} >
          <h2>Login ..</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
                            
                            <TextField 
                            sx={{ width: '90%', mx:1}}
                            required
                            id="standard-basic" 
                            label="Your Email" 
                            {...register("email")}
                            variant="standard" />
                            <TextField 
                            sx={{ width: '90%', mx:1}}
                            required
                            id="standard-basic" 
                            label="Password" 
                            {...register("password")}
                            variant="standard" />
                           



                
               
               <Button type="submit" style={{backgroundColor:'#6a2b36',marginTop:'20px',marginLeft:'5px'}} variant="contained">Login</Button>
               <br />

               

               <br />
               <NavLink
               style={{textDecoration:'none'}}
               to='/Signup'
               ><Button variant="text"style={{textAlign:'left',fontSize: '12px'}}>Already Registered? please Signup</Button></NavLink> <br />
               
               </form>
      </Grid>
      
    </Grid>

    <Footer></Footer>
</>
      
       
    
      
    );
};

export default Login;
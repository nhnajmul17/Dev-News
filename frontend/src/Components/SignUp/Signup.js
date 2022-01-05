



import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Signup.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const Signup = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (

<>

<Header></Header>

<Grid container spacing={1} className='Regi__item' maxWidth="md">
      <Grid item xs={12} md={8}>
        <img className='Regi__img' src="https://previews.123rf.com/images/tudmeak/tudmeak1804/tudmeak180400054/100329950-news-update-online-illustration-vector-newspaper-website-concept-announcements-internet-social-netwo.jpg" alt="" />
      </Grid>
      <Grid item xs={12} md={4} >
          <h2>Signup ..</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
                            <TextField 
                            sx={{ width: '90%', mx:1}}
                            required
                            id="standard-basic" 
                            label="Your Full name" 
                            {...register("firstName")}
                            variant="standard" />
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
                            <TextField 
                            sx={{ width: '90%', mx:1}}
                            required
                            id="standard-basic" 
                            label="Confrim Password" 
                            {...register("confrimpass")}
                            variant="standard" />



                
               
               <Button type="submit" style={{backgroundColor:'#6a2b36',marginTop:'20px',marginLeft:'5px'}} variant="contained">Register</Button>
               <br />

               

               <br />
               <NavLink
               style={{textDecoration:'none'}}
               to='/Login'
               ><Button variant="text"style={{textAlign:'left',fontSize: '12px'}}>Already Registered? please Login</Button></NavLink> <br />
               
               </form>
      </Grid>
      
    </Grid>

    <Footer></Footer>
</>
      
        
    
      
    );
};

export default Signup;
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';

import { useForm } from "react-hook-form";
import './MakeAdmin.css'

const MakeAdmin = () => {

	const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => (
	  
	
	console.log(data)
	
	);
	return (
	
		<Grid container spacing={1} className='admin__item' maxWidth="md">
		<Grid item xs={12} md={5}>
		  <img className='admin__img' src="https://image.shutterstock.com/image-vector/business-technology-storage-cloud-computing-260nw-1913649118.jpg" alt="" />
		</Grid>
		<Grid item xs={12} md={7} >
			<h2>MakeAdmin ..</h2>
		<form  onSubmit={handleSubmit(onSubmit)}>
							
							  <TextField 
							  sx={{ width: '90%', mx:1}}
							  required
							  id="standard-basic" 
							  label="Your Email" 
							  {...register("email")}
							  variant="standard" />
				  
				 <Button type="submit" style={{backgroundColor:'#6a2b36',marginTop:'20px',marginLeft:'5px'}} variant="contained">Admin Submit</Button>
				
				 </form>
		</Grid>
		
	  </Grid>
	
		);
};

export default MakeAdmin;

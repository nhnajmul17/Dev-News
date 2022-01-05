import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import axios from "axios";
import { useForm } from "react-hook-form";
import './MakeAdmin.css'
import { REACT_API_URL } from '../../../Utils';
import swal from 'sweetalert';

const MakeAdmin = () => {

	const { register, handleSubmit, } = useForm();
  const onSubmit = data => {

 
	console.log(data.email)

	axios
	.post(`${REACT_API_URL}/users/make-admin`, data,{
		headers: {
					"x-access-token": localStorage.getItem("token")
			 	}
		})

		
	.then((res) => {
		console.log(res.data);
		if (res.data.status === "success") {
			swal({
				title: "Good job!",
				text: "Registration successful!",
				icon: "success",
			});
			
		}
		if (res.data.status === "error") {
			console.log(res.data.errors);
		}
	})
	.catch((err) => console.log(err))
	




// 	fetch(`${REACT_API_URL}/users/make-admin`,{
//     method:'POST',
//     headers: {
// 		"x-access-token": localStorage.getItem("token")
// 	},
//     body:JSON.stringify(data.email)
// })
// 	.then(res=>res.json())
// 	.then(data=>{console.log(data)})





}




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

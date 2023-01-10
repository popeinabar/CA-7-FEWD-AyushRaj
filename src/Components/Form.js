// import { useState } from "react";
// import "./RegistrationForm.css";


// function Form() {


//   const initialValues = { username: "", email: "", number:"", password: "", repeatPass:"" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [passwordShown] = useState(false);
//   const [repeatPasswordShown] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   const validate = (values) => {
//     const errors = {};

//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/i;
//     const regexNum = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/i;


//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     else if (values.username.length < 3) {
//       errors.username = "Name must be more than 3 characters";
//     } else if (values.username.length > 30) {
//       errors.username = "Name cannot exceed more than 30 characters";
//     }
  
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regexEmail.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }


//     if(!values.number){
//       errors.number = "Number can't be empty!"
//     }
//     else if(!regexNum.test(values.number)){
//       errors.number = "Invalid Number!";
//     }

//         if (!va



import { useState } from "react";
import {useForm} from 'react-hook-form';
import { Link } from "react-router-dom";
import "./RegistrationForm.css";
import React from "react";

function Form() {
  //difining initial states as an object
  const initialValues = { username: "", email: "", number:"", password: "", repeatPass:"" };

  //using useState hook
  const {register, handleSubmit} = useForm()
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  //for onChange event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // for onSubmit event handler
  const handleSubmitForm = () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    //difining an object for errors
    const errors = {};

    //regex conditions
    const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/i;

    const regexNum = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/i;


    //conditions and the error messages if conditions doesn;t matches


    //conditions and error messages for username
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (values.username.length < 3) {
      errors.username = "Name must be more than 3 characters";
    } else if (values.username.length > 30) {
      errors.username = "Name cannot exceed more than 30 characters";
    }
  


    //conditions and error messages for mail
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)){
      errors.email = "Please enter a valid email format!";
    }

    //conditions and error messages for number
    if(!values.number){
      errors.number = "Enter a number"
    }
    else if(!regexNum.test(values.number)|| values.number.length>10 ){
      errors.number = "Invalid Number!";
    }

    
    //conditions and error messages for password
    if (!values.password) {
      errors.password = "Password cannot be left empty";
    } 
    else if(!regexPass.test(values.password)){
      errors.password = "Password should be 10 digit long, should include ateast one letter, one number and one special character!"
    }

    //conditions and error messages for repeatPassword
    if(!values.repeatPass){
      errors.repeatPass = "Confirm Your Password!"
    }
    else if(values.repeatPass !==values.password){
      errors.repeatPass = "Password Doesn't match!"
    }

    return errors;
  };

  const save=()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      sessionStorage.setItem('name', formValues.username)

    }
   
  }
 
        

  
const efg = sessionStorage.getItem('name')

  return (
    <div className="container">
      {/* if keys in the object error is 0 and all the fields are filled then conditon */}
      
  
         { efg /*&& mail && number && password && resetpass && password === resetpass */?(
           <>
                <h1 className="message">Thank You! You for logging in </h1>
                 
                 <Link to="/">
                 <button className="button" >Lets read something</button>
                   </Link>
            </>
        ):(
        

      <form onSubmit={handleSubmit(handleSubmitForm)}>
      
      
        
        <div className="form">
        { Object.keys(formErrors).length === 0 && isSubmit  ?(
       <h1>You are logged in</h1>
      ):( <h1>Login please</h1>)}

<div className="field">
            
            <input
              type="text"
              {...register("username")}
              placeholder="Your Name"
              value={formValues.username}
              onChange={handleChange}/>

          </div>
          {/* p for if any errors */}
          <p>{formErrors.username}</p>


          <div className="field">
            
            <input
              type="text"
              {...register("email")}
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}/>

          </div>
          <p>{formErrors.email}</p>


          <div className="field">
           
            <input
              type="text"
              {...register("number")}
              placeholder="PhoneNumber"
              value={formValues.number}
              onChange={handleChange}/>

          </div>
          <p>{formErrors.number}</p>


          <div className="field">
            
            <input
            className="pass-input"
            // type according to state {to show hide pass}
              type={passwordShown ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}/>
              {/* changing true to false and false to true while pressing h2*/}
              <h2 id="pass" onClick={()=>setPasswordShown(!passwordShown)}>👁</h2>
          </div>
          <p>{formErrors.password}</p>


          <div className="field">
            
            <input
            // type according to state {to show hide pass}
              type={repeatPasswordShown ? "text" : "password"}
             {...register("repeatPass")}
              placeholder="Re enter your passcode"
              value={formValues.repeatPass}
              onChange={handleChange}/>
              {/* changing true to false and false to true while pressing h2*/}
              <h2 id="pass" onClick={()=>setRepeatPasswordShown(!repeatPasswordShown)}>👁</h2>
              

          </div>
          <p>{formErrors.repeatPass}</p>
          {Object.keys(formErrors).length === 0 && isSubmit  ?(
             <Link to="/">
                  <button className="button" onClick={()=>save()}>Back To Home</button>
                    </Link>
          ):
          
           <button className="button" onClick={()=>save()}>Register</button>
           }
        </div>
      </form>
     
     )}
    </div>
      
  );
}

export default Form;
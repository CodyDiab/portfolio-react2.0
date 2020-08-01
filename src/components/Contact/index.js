import React, {useState} from 'react'
import {validateEmail} from '../../utils/helpers'


function Contact() {
    const [formState, setFormState] = useState({ name:'', email: '', message:'' });
    //destructure formState object
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
          
            if(!isValid) {
                setErrorMessage( ' Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
        }
               //use spread operator ... to retain other key value pairs
             if (!errorMessage){
                setFormState({...formState,[e.target.name]: e.target.value})
         }
     }
     function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }
    return(
        <form onBlur={handleSubmit}>
               {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <div className="row">
          <div className="six columns">
            <label htmlFor="email">Your email</label>
            <input className="u-full-width" type="email" name="email" defaultValue={email} id="emailInput" onBlur={handleChange}  ></input>
          </div>
          <div className="six columns">
            <label htmlFor="name">Your name</label>
            <input className="u-full-width" type="name" name="name" defaultValue={name} id="nameInput" onBlur={handleChange}></input>
          </div>
        </div>
        <label htmlFor="message">Message</label>
        <textarea className="u-full-width" placeholder="message…" name="message" defaultValue={message} id="exampleMessage" onBlur={handleChange}></textarea>
     
        <input className="button" type="submit" value="Submit"></input>
        <p> or email:<a className="link-btn"href="mailto: emailcodydiab@gmail.com">emailcodydiab@gmail.com</a></p>
      </form>
    )
}

export default Contact;
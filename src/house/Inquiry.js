import React from 'react';
import {useState} from "react";
import emailjs from 'emailjs-com';

const Inquiry = () => {

    const [contactInfo,setContactInfo]= useState( { 
        name: "",
        email:"",
        remarks:""
    }
    );

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(contactInfo);

        emailjs.sendForm('service_6tr4g6t','template_aljnkvr',e.target,'user_SIeyHGaHOeIbN4WsxK7rN')
        .then( (result) => { 
         console.log(result.text);
         console.log(result);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };


    return (
        <form className="mt-2"  onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name"> Name  </label>
                <input  id="name" type="text" name="name"
                placeholder="Name"
                value={contactInfo.name}
                onChange={onChange}
                className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email" name="email"
                value={contactInfo.email}
                placeholder="Email"
                className="form-control"
                onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks  </label>
                <input id="remarks" type="text" name="remarks"
                value={contactInfo.remarks}
                className="form-control"
                placeholder="Remarks"
                onChange={onChange}/>
            </div>
            <input type="submit" className="btn btn-primary mt-2"
            disabled={ !contactInfo.name || !contactInfo.email }
            value="submit" /> 
            
           
        </form>
    );
};

export default Inquiry;
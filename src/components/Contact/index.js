import React from 'react';
import {ContactSection,ContactTitle,Input,Form,InputEmail,InputForm,InputSub,InputSubmit,InputText,TextArea,Span} from './Style'
import Footer from './../Footer'



const Contact = () =>{
    return(
        <React.Fragment>
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Us A line</ContactTitle>
                <Form action="">
                    <InputForm>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </InputForm>
                    <InputSub type="text"  placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>

        <Footer/>

        </React.Fragment>
    )
}
export default Contact ;
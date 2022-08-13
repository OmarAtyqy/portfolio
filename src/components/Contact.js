import './Contact.css'
import { useRef } from 'react';
import { Input, Button, FormControl, Textarea } from '@chakra-ui/react';
import { Fade, Zoom } from 'react-reveal';
import emailjs from '@emailjs/browser';


export default function Contact(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jm3lpta', 'template_0fatspu', form.current, '4zL5cWeaLfx0mgiSg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };


    return (
        <div className='Contact grid place-items-center p-20' id={props.id}>
            <div className='Contact-container grid gap-y-10'>
                <Fade right>
                    <div className='Contact-title grid place-items-center gap-y-4'>
                        <h1 className='text-center'>
                            CONTACT
                        </h1>
                        <hr className="border-2 rounded border-solid border-emerald-500 bg-emerald-500 w-16" />
                        <p className='text-emerald-600 text-center'>Have a question or want to work together?</p>
                    </div>
                </Fade>
                <Zoom delay={500}>
                    <div className='Contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <FormControl isRequired className='grid gap-y-2'>
                                <Input placeholder='Name' name="user_name" type='text' />
                                <Input placeholder='Email' name="user_mail" type='email' />
                                <Textarea placeholder='Message' name="user_msg" className='Contact-message' />
                                <div className='Submit-container'>
                                    <Button type='submit' colorScheme='teal' className='float-right'>
                                        Submit
                                    </Button>
                                </div>
                            </FormControl>
                        </form>
                    </div>
                </Zoom>
            </div>
        </div>
    );
}
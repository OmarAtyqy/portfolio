import './Contact.css'
import { Input, Button, FormControl, Textarea } from '@chakra-ui/react';
import { Fade, Zoom } from 'react-reveal';


export default function Contact(props) {
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
                <Zoom>
                    <div className='Contact-form'>
                        <form>
                            <FormControl isRequired className='grid gap-y-2'>
                                <Input placeholder='Name' type='text' />
                                <Input placeholder='Email' type='email' />
                                <Textarea placeholder='Message' className='Contact-message' />
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
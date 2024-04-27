import { useToast } from "@/components/ui/use-toast"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { Description } from "@radix-ui/react-toast";

const Form = () => {
    const form = useRef();
    const { toast } = useToast()
    const public_key = import.meta.env.VITE_PUBLIC_KEY;
    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(service_id, template_id, form.current, {
                publicKey: public_key,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    toast({
                        title: 'Email sent successfully',
                        Description: "Thank you for reaching out! , We will get back to you soon.",
                        duration: 5000,
                        isClosable: true,
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast({
                        title: 'Email failed to send',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                },
            );
    };
    return (
        <div>
            <form
                ref={form}
                onSubmit={sendEmail}
            >
                <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col'>
                        <label id='user_name' >Name</label>
                        <input
                            required
                            name="user_name"
                            type='text'
                            className='border-b border-gray-300 p-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label id='user_phone' >Phone Number</label>
                        <input
                            required
                            type='phone'
                            name="user_phone"
                            className='border-b border-gray-300 p-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label id='user_email' >Email</label>
                        <input
                            required
                            name="user_email"
                            type='email'
                            className='border-b border-gray-300 p-2 outline-none'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label id='message' >Message</label>
                        <textarea
                            name='message'
                            required
                            className='border-b border-gray-300 p-2 outline-none'
                            rows={4}
                        />
                    </div>
                    <button
                        className='bg-[#3C506D] text-white p-2 rounded-md'
                    >Submit
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Form
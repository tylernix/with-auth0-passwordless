import { useState } from 'react'
import axios from 'axios'
import LoadingSpinner from './loading-spinner';
import ErrorMessage from './message-error';
import SuccessMessage from './message-success';
import UnderlinedLink from './underlined-link';

//import fetcher from '../lib/fetcher';
//import useSWR from 'swr';

export default function PasswordlessLogin({funFactText}) {
    const [form, setForm] = useState(false);
    const funFact = (funFactText) ? funFactText : <>This is also a way to <UnderlinedLink href="/profile" target="_blank" text="login" /> to my website.</>

    console.log("testing");
    //const { data } = useSWR('/api/subscribers', fetcher);
    //const subscriberCount = new Number(data?.count);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm({ state: 'loading' });

        const { elements } = e.target;
        const email = elements.email.value;
    
        // Subscribe user to newsletter
        axios.post('/api/email/signup', {
            email: email
        }).then(function(response) {            
            // Send a passwordless authentication link to subscribed email
            axios.post('/api/auth0/login', {
                email: email
            })
            setForm({
                state: 'success',
                message: 'WooHoo! Check your email for a "magic" link.'
            });
            
        }).catch(function (error) {
            axios.post('/api/auth0/login', {
                email: email
            })
            setForm({
                state: 'error',
                message: 'Welp. Seems like this email is already subscribed, but you can still sign in.'
            });
            console.log(error.message);
        })
    }
  
    return (
        <form onSubmit={handleSubmit} className="pb-4">
            <h4 className="text-sm md:text-base lg:text-xl text-prussian-blue md:max-w-3xl mb-4">
                I semi-frequently write about frontend web dev + auth + app security, so if you are a nerd like me and find these things interesting, we should become friends.
            </h4>
            <div className="flex flex-row bg-white p-1 md:p-2 border md:border-2 rounded-md border-accent-2 hover:border-light-steel-blue">
                <input 
                    name='email' 
                    aria-label="Email for newsletter"
                    type='email' 
                    placeholder="your.favorite@email.com" 
                    required
                    className="text-sm md:text-base text-prussian-blue focus:outline-none w-full pl-7 pr-10 rounded-md"  />
                <button type="submit" className="bg-imperial-red hover:bg-prussian-blue rounded-md text-white text-sm md:text-base py-2 px-4 my-0 lg:px-8 duration-200 transition-colors self-start">
                    {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
                </button>
            </div>
            {form.state === 'error' ? (
                <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === 'success' ? (
                <SuccessMessage>{form.message}</SuccessMessage>
            ) : (
                <p className="flex flex-row text-sm px-0 md:px-2 py-2">
                    <b className="min-w-max pr-2">Fun fact:</b> 
                    <p className="max-w-prose">{funFact}</p>
                </p>
            )}
        </form>
    )
}
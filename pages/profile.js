import React from 'react';
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
//import EmailSignupAuth0 from "../components/subscribe-auth0"
//import SectionSeperator from "../components/section-separator"
//import UnderlinedLink from '../components/underlined-link'

//import useUser from '../lib/hooks'

export default function Profile() {
  //const { user, error } = useUser();
  //if (error) return <div>{error.message}</div>;

  return (
    <>
        <Head>
          <title>Profile</title>
        </Head>
          <Header />
          <Container>
          <h1 className="md:flex text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight text-light-steel-blue">
            Your session
          </h1>
          <p className="font-bold text-sm md:text-base lg:text-base md:max-w-4xl mb-4">Your are not currently logged in to see your session details.</p>
            
                 
          </Container>
    </>
  )
}

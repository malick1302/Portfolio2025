import React from 'react'
  import Layout from '../components/layout';
  import EmailForm from '../components/EmailForm';
  import LogoContact from '../components/logoContact';
import Navbar from './Navbar';


const Contacts = () => {
  
  

    return (
        <Layout className="w-screen">
          <div className='flex md:flex-col'>
          <Navbar />
          <LogoContact />
          </div>
          <div className=' lg:ml-40 lg:mr-40'>
          
         <EmailForm />
         </div>
        </Layout>
    )
  };
  

  

export default Contacts

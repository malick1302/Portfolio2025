import React, { useState } from "react";
import emailjs from 'emailjs-com';


const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const serviceId = 'service_gkjwj69';
    const templateId = 'template_3o3w5do';
    const publicKey = 'JWMvoJSPAbLpP0KxR';

    const templateParams = {
      from_name: name, 
      from_email: email, 
      to_name: 'Madame, Monsieur,',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email envoyé avec succès', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Erreur lors de l envoi du mail', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 ml-12 mr-12 sm:ml-30 sm:mr-30 ">
      <input
        type="text"
        placeholder="Votre Nom"
        className="border-1 w-body h-12"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Votre Email"
        value={email}
        className=" border-1 w-body h-12 "
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10" 
        className="border-1 sm:h-50"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" className="border-1">Envoyer l'email</button>
    </form>
  );
};

export default EmailForm;

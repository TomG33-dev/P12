import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import "./contact.scss";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Veuillez remplir tous les champs.');
            return;
        }
        setStatus('');
        setIsModalOpen(true);
    };

    return (
        <div className="contact">
            <h1>CONTACT</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nom et prénom"
                        style={{opacity: formData.name ? '1' : '0.5'}}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        style={{opacity: formData.email ? '1' : '0.5'}}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        style={{opacity: formData.message ? '1' : '0.5'}}
                    />
                </div>
                {status && <div className="status">{status}</div>}
                <button type="submit">Envoyer</button>
            </form>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>MESSAGE ENVOYÉ AVEC SUCCÉS !</p>
            </Modal>
        </div>
    );
}

export default Contact;
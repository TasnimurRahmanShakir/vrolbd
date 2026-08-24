import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Contact Us</h2>
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        required
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className={styles.success}>Thank you! Your message has been sent.</p>}
      {status === 'error' && <p className={styles.error}>Oops! Something went wrong. Please try again.</p>}
    </form>
  );
}

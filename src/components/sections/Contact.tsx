'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: 'Email',
      value: 'aldyansatyafausta99@gmail.com',
      href: 'mailto:aldyansatyafausta99@gmail.com',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      label: 'WhatsApp',
      value: '+62 813-3931-4198',
      href: 'https://wa.me/6281339314198',
    },
    {
      icon: <LinkedinIcon className="w-5 h-5 text-purple-400" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aldyansatya',
      href: 'https://linkedin.com/in/aldyansatya',
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-purple-400" />,
      label: 'GitHub',
      value: 'github.com/aldyan1',
      href: 'https://github.com/aldyan1',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status back to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary"
          >
            {t('contactHeading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-muted mt-4 max-w-xl mx-auto text-sm"
          >
            {t('contactSub')}
          </motion.p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-5 rounded-xl border border-border-line bg-cardBg/10 hover:border-purple-500/35 glow-card-purple transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-300">
                  {/* Clone icon and switch color on hover */}
                  {React.cloneElement(info.icon, {
                    className: 'w-5 h-5 text-purple-400 group-hover:text-white transition-colors duration-300',
                  })}
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
                    {info.label}
                  </h4>
                  <p className="text-sm font-semibold text-text-primary mt-0.5 group-hover:text-purple-400 transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 rounded-xl border border-border-line relative">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <CheckCircle className="w-16 h-16 text-purple-400 mb-4 animate-bounce" />
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {t('contactSuccess')}
                  </h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-primary">
                      {t('contactName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border-line bg-background/50 text-text-primary text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-primary">
                      {t('contactEmail')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. johndoe@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border-line bg-background/50 text-text-primary text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-primary">
                      {t('contactMsg')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-lg border border-border-line bg-background/50 text-text-primary text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-cyan-500/50 disabled:to-purple-500/50 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-md shadow-purple-500/10 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>{status === 'submitting' ? t('contactSending') : t('contactSend')}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

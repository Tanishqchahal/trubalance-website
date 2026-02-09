import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        } as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container relative bg-white pb-32">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10"></div>
      
      <div className="text-center mb-20 animate-fadeInUp">
        <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Get Started Today</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-accent mb-6">
          Ready to Balance Your <span className="text-primary italic">Future</span>?
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-soft max-w-2xl mx-auto font-light">
          Connect with our experts. Whether personal or corporate, we're here to guide you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch max-w-7xl mx-auto">
        {/* Contact Info Panel */}
        <div className="lg:col-span-2 space-y-8 animate-fadeInUp delay-100">
          <div className="glass-card p-10 bg-accent text-white h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-10 relative z-10">
              <div className="flex items-start space-x-6 group">
                <div className="bg-white/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-medium">info@trubalance.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-xl font-medium">123 Financial District<br />Toronto, ON M5H 2N2</p>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10 pt-10 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IN</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">TW</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">FB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="lg:col-span-3 animate-fadeInUp delay-200">
          <div className="glass-card p-10 bg-white shadow-premium border-gray-100">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-accent uppercase tracking-wider mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-100'
                    }`}
                    placeholder="Enter full name"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-600 font-medium flex items-center"><AlertCircle size={14} className="mr-1" /> {errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-accent uppercase tracking-wider mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-100'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-600 font-medium flex items-center"><AlertCircle size={14} className="mr-1" /> {errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-accent uppercase tracking-wider mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-accent uppercase tracking-wider mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-5 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-100'
                  }`}
                  placeholder="How can we help your business thrive?"
                ></textarea>
                {errors.message && <p className="mt-2 text-xs text-red-600 font-medium flex items-center"><AlertCircle size={14} className="mr-1" /> {errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-5 text-lg flex items-center justify-center space-x-3 group disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              <div className="flex items-center justify-center space-x-2 text-white/30 text-xs uppercase tracking-tighter">
                <Shield size={12} />
                <span>Secure SSL Encrypted & 100% Confidential</span>
              </div>


              {submitStatus === 'success' && (
                <div className="p-5 bg-green-50 border border-green-100 text-green-800 rounded-xl flex items-center space-x-3 animate-fadeInUp">
                  <CheckCircle2 className="text-green-600" size={24} />
                  <p className="text-sm font-medium">Success! Our team will reach out to you within 24 hours.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-5 bg-red-50 border border-red-100 text-red-800 rounded-xl flex items-center space-x-3 animate-fadeInUp">
                  <AlertCircle className="text-red-600" size={24} />
                  <p className="text-sm font-medium">Failed to send. Please check your connection or contact us directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


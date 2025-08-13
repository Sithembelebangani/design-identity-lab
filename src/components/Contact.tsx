
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { LinkedinIcon, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Email sent successfully:', data);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon. A confirmation email has been sent to your email address.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: error.message || "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "0734382698";
    const message = "Hi Sithembele, I'd like to connect with you! Please use the contact form on your website to send me your details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    const linkedinUrl = "https://www.linkedin.com/in/sithembele-bangani-2323a3300/";
    window.open(linkedinUrl, '_blank');
  };

  const handleGitHubClick = () => {
    const githubUrl = "https://github.com/Sithembelebangani";
    window.open(githubUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-blue">
      <div className="container mx-auto px-4">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-green-300" />
                  <div>
                    <h4 className="text-sm font-medium text-green-300">Email</h4>
                    <p className="text-white">banganisithembele1307@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-green-300" />
                  <div>
                    <h4 className="text-sm font-medium text-green-300">Phone</h4>
                    <p className="text-white">0734382698</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-green-300" />
                  <div>
                    <h4 className="text-sm font-medium text-green-300">Location</h4>
                    <p className="text-white">Salt River Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-white/20" />
              
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-white/10 p-2 rounded-full text-white hover:text-green-300 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </button>
                <button 
                  onClick={handleLinkedInClick}
                  className="bg-white/10 p-2 rounded-full text-white hover:text-green-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={24} />
                </button>
                <button 
                  onClick={handleGitHubClick}
                  className="bg-white/10 p-2 rounded-full text-white hover:text-green-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-green-300"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-green-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-green-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-green-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-blue hover:bg-portfolio-accent text-green flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

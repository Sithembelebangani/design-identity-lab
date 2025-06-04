
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
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
                    <p className="text-white">Saltrive Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-white/20" />
              
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {/* Social Icons */}
                {['github', 'twitter', 'linkedin', 'dribbble'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-white/10 p-2 rounded-full text-white hover:text-green-300 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {/* Placeholder for social icon */}
                      <div className="w-5 h-5 rounded-full bg-green-200" />
                    </div>
                  </a>
                ))}
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
                    className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-green-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-accent text-green flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
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

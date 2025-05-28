
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-gray mb-16">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-portfolio-gray mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-portfolio-accent" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-portfolio-blue">banganisithembele1307@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-portfolio-accent" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="text-portfolio-gray">0734382698</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-portfolio-accent" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                    <p className="text-portfolio-gray">Saltrive Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-gray-200" />
              
              <h3 className="text-lg font-semibold text-portfolio-gray mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {/* Social Icons */}
                {['github', 'twitter', 'linkedin', 'dribbble'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-gray p-2 rounded-full text-portfolio-gray hover:text-portfolio-accent transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {/* Placeholder for social icon */}
                      <div className="w-5 h-5 rounded-full bg-gray-200" />
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
                    className="border-gray-300 focus-visible:ring-portfolio-accent"
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
                    className="border-gray-300 focus-visible:ring-portfolio-accent"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus-visible:ring-portfolio-accent"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] border-green-300 focus-visible:ring-portfolio-accent"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-accent text-gray flex items-center justify-center gap-2"
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

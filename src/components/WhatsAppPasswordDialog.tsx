
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MessageCircle, Phone } from 'lucide-react';

interface WhatsAppPasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (visitorNumber: string) => void;
}

const WhatsAppPasswordDialog = ({ isOpen, onClose, onSuccess }: WhatsAppPasswordDialogProps) => {
  const [password, setPassword] = useState('');
  const [visitorNumber, setVisitorNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const correctPassword = "sithembele2024"; // You can change this to any password you want

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate phone number format (basic validation)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
    if (!phoneRegex.test(visitorNumber.trim())) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate checking password
    setTimeout(() => {
      if (password === correctPassword) {
        toast({
          title: "Access granted!",
          description: "Redirecting to WhatsApp...",
        });
        onSuccess(visitorNumber.trim());
        onClose();
        setPassword('');
        setVisitorNumber('');
      } else {
        toast({
          title: "Access denied",
          description: "Incorrect password. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  const handleClose = () => {
    setPassword('');
    setVisitorNumber('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-500" />
            WhatsApp Access Request
          </DialogTitle>
          <DialogDescription>
            Please provide your phone number and the access password to contact me via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <label className="text-sm font-medium">Your Phone Number</label>
            </div>
            <Input
              type="tel"
              placeholder="e.g., +27 73 438 2698 or 0734382698"
              value={visitorNumber}
              onChange={(e) => setVisitorNumber(e.target.value)}
              disabled={isLoading}
              className="w-full"
              autoFocus
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Access Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !password.trim() || !visitorNumber.trim()}
              className="bg-green-500 hover:bg-green-600"
            >
              {isLoading ? 'Verifying...' : 'Access WhatsApp'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppPasswordDialog;

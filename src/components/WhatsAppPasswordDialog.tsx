
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
import { MessageCircle } from 'lucide-react';

interface WhatsAppPasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const WhatsAppPasswordDialog = ({ isOpen, onClose, onSuccess }: WhatsAppPasswordDialogProps) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const correctPassword = "sithembele2024"; // You can change this to any password you want

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate checking password
    setTimeout(() => {
      if (password === correctPassword) {
        toast({
          title: "Access granted!",
          description: "Redirecting to WhatsApp...",
        });
        onSuccess();
        onClose();
        setPassword('');
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
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-500" />
            WhatsApp Access
          </DialogTitle>
          <DialogDescription>
            Please enter the password to access WhatsApp contact.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full"
              autoFocus
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
              disabled={isLoading || !password.trim()}
              className="bg-green-500 hover:bg-green-600"
            >
              {isLoading ? 'Checking...' : 'Access WhatsApp'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppPasswordDialog;

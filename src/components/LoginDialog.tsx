
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

interface LoginDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const LoginDialog = ({ isOpen, setIsOpen }: LoginDialogProps) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const { toast } = useToast();
  const { login, register } = useAuth();

  const toggleMode = () => {
    setIsRegister(!isRegister);
    // Reset fields
    setEmail("");
    setPassword("");
    setName("");
    setHostelBlock("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRegister) {
      if (!name || !email || !password || !hostelBlock) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }
      
      register(name, email, password, hostelBlock);
      toast({
        title: "Registration successful!",
        description: "You can now log in with your credentials",
      });
      setIsRegister(false);
    } else {
      if (!email || !password) {
        toast({
          title: "Error",
          description: "Please enter both email and password",
          variant: "destructive",
        });
        return;
      }
      
      login(email, password);
      toast({
        title: "Login successful!",
        description: "Welcome back to CampusBite",
      });
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] animate-zoom-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-food-red">
            {isRegister ? "Create an account" : "Login to your account"}
          </DialogTitle>
          <DialogDescription>
            {isRegister
              ? "Sign up to order delicious food from campus outlets."
              : "Login to access your account and order food."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {isRegister && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {isRegister && (
            <div className="space-y-2">
              <Label htmlFor="hostelBlock">Hostel Block</Label>
              <select
                id="hostelBlock"
                value={hostelBlock}
                onChange={(e) => setHostelBlock(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select your hostel block</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={`C${i + 1}`}>
                    C{i + 1}
                  </option>
                ))}
              </select>
            </div>
          )}
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <Button type="submit" className="w-full bg-food-orange hover:bg-food-red">
              {isRegister ? "Register" : "Login"}
            </Button>
          </DialogFooter>
        </form>
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </span>
          <Button
            variant="link"
            className="text-food-orange hover:text-food-red p-0 ml-1"
            onClick={toggleMode}
          >
            {isRegister ? "Login" : "Register"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;

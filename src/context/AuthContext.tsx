
import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string, hostelBlock: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  const login = (email: string, password: string) => {
    // In a real app, this would be an API call
    // For demo purposes, we'll just simulate a successful login
    setUser({
      id: "user1",
      name: "Demo User",
      email: email,
      hostelBlock: "C5",
    });
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const register = (name: string, email: string, password: string, hostelBlock: string) => {
    // In a real app, this would be an API call to register the user
    // For demo purposes, we'll just simulate a successful registration
    console.log("User registered:", { name, email, hostelBlock });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

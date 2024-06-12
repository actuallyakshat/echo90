"use client";
import { useUser } from "@clerk/nextjs";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  loading: boolean;
  userDetails: any;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setLoading(true);
    try {
      if (user) {
        setUserDetails(user);
        setIsLoggedIn(true);
      } else {
        setUserDetails(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ loading, userDetails, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useClientAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useClientAuth must be used within an AuthProvider");
  }
  return context;
};

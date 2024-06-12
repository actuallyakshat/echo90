"use client";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React, { createContext } from "react";
const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(true);
  const [userDetails, setUserDetails] = React.useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { user } = useUser();

  React.useEffect(() => {
    setLoading(true);
    try {
      if (!user) return;
      const fetchUser = async () => {
        console.log(user?.id);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ loading, userDetails, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useClientAuth = () => {
  if (!React.useContext(AuthContext)) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return React.useContext(AuthContext);
};

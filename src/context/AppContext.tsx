import React, { createContext, useContext, useState } from 'react';

interface AppContextProps {
  // Define your context types here
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // Add state and context values here
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

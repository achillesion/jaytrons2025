"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  activeTab: 'talent' | 'consulting';
  setActiveTab: (tab: 'talent' | 'consulting') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<'talent' | 'consulting'>('talent');

  return (
    <ThemeContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ThemeContext.Provider>
  );
};

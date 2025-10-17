"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect } from 'react';

const DynamicBackground = () => {
  const { activeTab } = useTheme();

  useEffect(() => {
    // Apply background color to the body element
    if (activeTab === 'consulting') {
      document.body.style.backgroundColor = '#090A0C';
    } else {
      // Reset to default background color from globals.css
      document.body.style.backgroundColor = '';
    }
  }, [activeTab]);

  return null;
};

export default DynamicBackground;

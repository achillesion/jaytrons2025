"use client";

import { useEffect } from 'react';

export default function HydrationFix() {
  useEffect(() => {
    // Remove any attributes added by browser extensions that cause hydration mismatches
    const removeExtensionAttributes = () => {
      const html = document.documentElement;
      const body = document.body;
      
      // Remove common extension attributes
      const extensionAttributes = [
        'data-arp',
        'data-adblock',
        'data-ublock',
        'data-ghostery',
        'data-adguard'
      ];
      
      extensionAttributes.forEach(attr => {
        if (html.hasAttribute(attr)) {
          html.removeAttribute(attr);
        }
        if (body.hasAttribute(attr)) {
          body.removeAttribute(attr);
        }
      });
    };

    // Run immediately and also after a short delay
    removeExtensionAttributes();
    const timeoutId = setTimeout(removeExtensionAttributes, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}


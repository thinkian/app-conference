import { useEffect } from 'react';

let WOW;

if (typeof window !== 'undefined') {
  WOW = require('wowjs/dist/wow').WOW;
}

export const useAnimations = dependency => {
  useEffect(() => {
    if (WOW) {
      new WOW({ live: false }).init();
    }
  }, [dependency]);
};

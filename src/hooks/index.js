import { useEffect } from 'react';
import { WOW } from 'wowjs/dist/wow';

export const useAnimations = dependency => {
  useEffect(() => {
    new WOW({ live: false }).init();
  }, [dependency]);
};

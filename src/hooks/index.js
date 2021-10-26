import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { NavContext } from '../context';
import { getBase } from '../helpers';

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

export const useOnScreen = ref => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: [0.25, 0.5, 0.75]
    }
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};

export const useNav = navLinkId => {
  const ref = useRef(null);

  const { setActiveNavLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId]);

  return ref;
};

export const useContactForm = () => {
  const [message, setMessage] = useState('');
  const handleSubmit = async event => {
    const form = event.target;
    const { elements, parentNode } = form;
    const isValid = form.checkValidity();
    const invalidInputs = form.querySelectorAll(':invalid');
    const validInputs = form.querySelectorAll(':valid');

    event.preventDefault();

    validInputs.forEach(input => {
      input.classList.remove('is-invalid');
    });

    if (!isValid) {
      parentNode.addEventListener('animationend', () => {
        parentNode.classList.remove('animated', 'shakeX');
      });

      parentNode.classList.add('animated', 'shakeX');

      invalidInputs.forEach(input => {
        input.classList.add('is-invalid');
      });

      return;
    }

    // TODO: Handle submit
    setMessage('Message submitted!');
    form.reset();
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [message]);

  return [handleSubmit, message];
};

export const useCountdown = start => {
  const calculateTimeLeft = () => {
    const difference = +new Date(start) - +new Date();
    const defaultTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (Number.isNaN(difference)) {
      return defaultTime;
    }

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return defaultTime;
  };

  const [countdown, setCountdown] = useState(calculateTimeLeft());
  const callback = useCallback(calculateTimeLeft, [start]);

  useEffect(() => {
    if (!start) {
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(callback());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return countdown;
};

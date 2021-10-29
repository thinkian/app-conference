import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { NavContext } from '../context';
import { getBase, getFields } from '../helpers';

let WOW;

if (typeof window !== 'undefined') {
  WOW = require('wowjs/dist/wow').WOW;
}

export const useAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const container = useRef();
  const handleClickOutside = useCallback(
    event => {
      const ref = container.current;

      if (ref && !ref.contains(event.target)) {
        setExpanded(false);
      }
    },
    [container]
  );

  const handleClick = () => {
    setExpanded(!expanded);

    if (!expanded) {
      document.body.addEventListener('click', handleClickOutside);
    } else {
      document.body.removeEventListener('click', handleClickOutside);
    }
  };

  return [expanded, container, handleClick];
};

export const useAnimations = dependency => {
  useEffect(() => {
    if (WOW) {
      new WOW({ live: false }).init();
    }
  }, [dependency]);
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

    await getBase('📧 Contact').create({
      Name: elements.name.value,
      Email: elements.email.value,
      Subject: elements.subject.value,
      Message: elements.message.value
    });

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

export const useNewsletter = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async event => {
    const { target } = event;
    const { value } = target.elements.email;

    event.preventDefault();

    if (!value) {
      target.addEventListener('animationend', () => {
        target.classList.remove('animated', 'shakeX');
      });

      target.classList.add('animated', 'shakeX');
      return;
    }

    await getBase('🗞 Subscribers').create({ Email: value.trim() });

    setMessage('Thanks for signing up!');
    target.reset();
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

export const useOnScreen = ref => {
  const [isOnScreen, setOnScreen] = useState(false);

  if (typeof window === 'undefined') {
    // Exit early on server side
    return false;
  }

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: [0.25, 0.5, 0.75]
    }
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};

export const useSmoothScroll = () => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = event => {
    const target = event.target;
    const navLinkId = target.getAttribute('href').slice(1);

    event.preventDefault();

    if (window.location.pathname !== '/') {
      window.location.replace('/');
      return;
    }

    setActiveNavLinkId(navLinkId);

    document.getElementById(navLinkId).scrollIntoView({ behavior: 'smooth' });
  };

  return [handleClick, activeNavLinkId];
};

export const useSpeakers = () => {
  const defaultSpeakers = [
    {
      name: 'Jonathon Doe',
      role: 'Product Designer',
      company: 'Tesla',
      index: 0
    },
    {
      name: 'Patricia Green',
      role: 'Front-end Developer',
      company: 'Dropbox',
      index: 1
    },
    {
      name: 'Paul Kowalsy',
      role: 'Lead Designer',
      company: 'TNW',
      index: 2
    },
    {
      name: 'Jhon Doe',
      role: 'Back-end Developer',
      company: 'ASUS',
      index: 3
    },
    {
      name: 'Daryl Dixon',
      role: 'Full-stack Developer',
      company: 'Google',
      index: 4
    },
    {
      name: 'Kris Adams',
      role: 'UI Designer',
      company: 'Apple',
      index: 5
    }
  ];
  const [speakers, setSpeakers] = useState(defaultSpeakers);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBase('🎤 Speakers')
        .select({
          view: 'All speakers',
          fields: ['Name', 'Role', 'Company', 'Image'],
          filterByFormula: 'AND({Confirmed?}, {Speaking at})'
        })
        .firstPage();
      const speakers = getFields(data);
      setSpeakers(speakers);
    };

    fetchData();
  }, []);

  return speakers;
};

export const useTabs = initialTab => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const handleClick = event => {
    const target = event.currentTarget;
    event.preventDefault();

    setActiveTab(target.getAttribute('aria-controls'));
  };

  return [activeTab, handleClick];
};

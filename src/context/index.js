import { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('#header');

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

type navState = {
  children: React.ReactChild,
};

function NavState({ children } : navState) {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu: toggleMenuMode }}>{children}</MenuContext.Provider>
  );
}

export {NavState};
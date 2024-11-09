import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProviderComponent: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('☀️');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = (newTheme: string) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeProvider = React.memo(ThemeProviderComponent);
export { ThemeContext };
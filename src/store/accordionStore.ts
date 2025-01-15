import { createContext, useContext, useState } from 'react';

interface AccordionCotextProps {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionCotextProps | undefined>(
  undefined
);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'useAccordionContext must be used within an AccordionProvider',
    );
  }
  return context;
}

  export const AccordionProvider = ({ children }: { children: React.ReactNode }) => {   
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <AccordionContext.Provider value={{ isOpen, toggle }}>
        {children}
      </AccordionContext.Provider>
    );  
};

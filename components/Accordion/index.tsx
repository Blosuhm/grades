import { useState } from "react";
import { AccordionContext } from "../AccordionContext";

interface AccordionProps {
  children: React.ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  const hasCorrectParent = true;

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionContext.Provider
      value={{ hasCorrectParent, expanded, toggleExpanded }}
    >
      <div className="w-full shadow-md">{children}</div>
    </AccordionContext.Provider>
  );
};

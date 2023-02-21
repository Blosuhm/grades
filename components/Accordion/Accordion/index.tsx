import { useState, useMemo, useCallback, useEffect } from "react";
import { AccordionContext } from "../AccordionContext";

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  const hasCorrectParent = true;

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    console.log("toggleExpanded");
    setExpanded(!expanded);
  }, [expanded]);

  const contextValue = useMemo(
    () => ({ hasCorrectParent, expanded, toggleExpanded }),
    [hasCorrectParent, expanded, toggleExpanded]
  );

  useEffect(() => {
    console.log("Context Value changed");
  }, [contextValue]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className="w-full shadow-md">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;

import React from "react";

interface AccordionContextType {
  hasCorrectParent: boolean;
  expanded: boolean;
  toggleExpanded: () => void;
}

export const AccordionContext = React.createContext<AccordionContextType>({
  hasCorrectParent: true,
  expanded: false,
  toggleExpanded: () => {},
});

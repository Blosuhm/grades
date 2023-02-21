import { useContext } from "react";
import { Collapse } from "react-collapse";
import { AccordionContext } from "../AccordionContext";

interface AccordionContentProps {
  children: React.ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  const { hasCorrectParent, expanded } = useContext(AccordionContext);

  if (!hasCorrectParent) {
    throw new Error("AccordionContent must be a child of Accordion");
  }

  return (
    <>
      <Collapse isOpened={expanded}>
        <div className="bg-gray-100 px-4 pt-2 pb-4 dark:bg-gray-700 dark:text-white">
          {children}
        </div>
      </Collapse>
    </>
  );
};

export { AccordionContent };

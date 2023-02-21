import { useContext, useRef, useEffect } from "react";
import { AccordionContext } from "../AccordionContext";

interface AccordionTitleProps {
  children: React.ReactNode;
  expandIcon?: React.ReactNode;
  expandIconTransform?: string;
}

const AccordionTitle = ({
  children,
  expandIcon,
  expandIconTransform,
}: AccordionTitleProps) => {
  const { toggleExpanded, expanded } = useContext(AccordionContext);
  const expandIconRef = useRef<HTMLDivElement>(null);

  let transform = "";
  if (expanded) {
    transform = expandIconTransform ? expandIconTransform : "";
  }

  useEffect(() => {
    if (expanded && expandIconRef.current) {
      const expandIconDiv = expandIconRef.current;
      expandIconDiv.classList.add(transform);
      return () => {
        expandIconDiv.classList.remove(transform);
      };
    }
  });

  return (
    <>
      <div
        className="flex cursor-pointer select-none justify-between bg-white px-4 dark:bg-gray-800 dark:text-white"
        onClick={toggleExpanded}
      >
        <div className="my-4 flex-grow">
          <p>{children}</p>
        </div>
        <div
          ref={expandIconRef}
          className="flex items-center transition-all duration-100 ease-out"
        >
          {expandIcon ? expandIcon : ""}
        </div>
      </div>
    </>
  );
};

export default AccordionTitle;

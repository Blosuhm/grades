import { useContext } from "react";
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
  let transform = "";
  if (expanded) {
    transform = expandIconTransform ? expandIconTransform : "";
  }

  return (
    <>
      <div
        className="flex justify-between bg-white dark:bg-gray-800 dark:text-white cursor-pointer px-4 select-none"
        onClick={toggleExpanded}
      >
        <div className="flex-grow my-4">
          <p>{children}</p>
        </div>
        <div
          className={`flex items-center transition-all duration-100 ease-out ${transform}`}
        >
          {expandIcon ? expandIcon : ""}
        </div>
      </div>
    </>
  );
};

export { AccordionTitle };

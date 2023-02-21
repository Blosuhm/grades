"use client";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { students, subjects } from "@/grades-data/data/grades.json";
import GradesSchema from "@/app/(schema)/schema";
import { Accordion } from "@/components/Accordion";
import { AccordionTitle } from "@/components/AccordionTittle";
import { AccordionContent } from "@/components/AccordionContent";

export default function StudentPage() {
  const studentsObject = GradesSchema.students.parse(students);
  const subjectsObject = GradesSchema.subjects.parse(subjects);

  return (
    <>
      <div className="rotate rounded-md">
        {Object.entries(studentsObject).map(([nmec, student]) => {
          return (
            <Accordion key={nmec}>
              <AccordionTitle
                expandIcon={<ExpandMoreIcon />}
                expandIconTransform="rotate-180"
              >
                {`${student.name}: ${nmec}`}
              </AccordionTitle>
              <AccordionContent>
                {Object.entries(student.subjects).map(([subject, grade]) => {
                  return (
                    <div key={subject}>
                      {subjectsObject[subject].name}: {grade}
                    </div>
                  );
                })}
              </AccordionContent>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}

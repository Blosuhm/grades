"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { students, subjects } from "@/grades-data/data/grades.json";
import GradesSchema from "@/app/schema";

export default function StudentPage() {
  const studentsObject = GradesSchema.students.parse(students);
  const subjectsObject = GradesSchema.subjects.parse(subjects);

  return (
    <div>
      {Object.entries(studentsObject).map(([nmec, student]) => {
        return (
          <Accordion key={nmec}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {nmec}: {student.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.entries(student.subjects).map(([subject, grade]) => {
                return (
                  <div key={subject}>
                    <Typography>
                      {subjectsObject[subject].name}: {grade}
                    </Typography>
                  </div>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

import { students } from "@/grades-data/data/grades.json";
import GradesSchema from "@/app/(schema)/schema";
import z from "zod";

const studentsObject = GradesSchema.students.parse(students);

const Props = z.object({
  params: z.object({
    nmec: z.string(),
  }),
});

type Props = z.infer<typeof Props>;

export default function NmecPage({ params: { nmec } }: Props) {
  if (!studentsObject.hasOwnProperty(nmec)) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-center">Student not found!</h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-center">
        Student Name: {studentsObject[nmec].name}
        {Object.entries(studentsObject[nmec].subjects).map(
          ([subject, value]) => {
            return (
              <div key={subject}>
                <h2>
                  {subject}: {value}
                </h2>
              </div>
            );
          }
        )}
      </h1>
    </div>
  );
}

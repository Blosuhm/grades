import { students } from "./grades.json";
import { StudentSchema } from "@/app/schema";
import { record } from "zod";

const FullStudentSchema = record(StudentSchema);

const studentsObject = FullStudentSchema.parse(students);

type Params = {
  nmec: string;
};

interface Props {
  params: Params;
}

export default function NmecPage({ params }: Props) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-center">
        Best Average: {studentsObject[params.nmec].name}
      </h1>
    </div>
  );
}

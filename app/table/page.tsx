import { students, subjects } from "@/grades-data/data/grades.json";
import GradesSchema from "@/app/schema";

export default function TablePage() {
  const subjectsObject = GradesSchema.subjects.parse(subjects);
  const studentsObject = GradesSchema.students.parse(students);

  const nmecs: string[] = Object.keys(studentsObject);

  function formatGlobalAverage(average: number): number | "No data" {
    return average === -1 ? "No data" : average;
  }

  function formatGlobalSubjects(data: [number, string[] | []]): string {
    if (data[0] === -1) return "No data";
    const subjects = `(${data[1]
      .map((subject: string) => subjectsObject[subject].name)
      .join(", ")})`;
    return `${data[0]} ${subjects}`;
  }

  return (
    <div className="container mx-auto px-4">
      <h1>Table</h1>
      {nmecs.map((nmec: string) => {
        const { name, global } = studentsObject[nmec];
        return (
          <div key={nmec}>
            <h2>
              {name} ({nmec})
            </h2>
            <hr />
            <h3>Grades</h3>
            <h3>Global</h3>
            <p>
              Global Average:
              {formatGlobalAverage(global.average)}
            </p>
            <p>Global Best: {global.best}</p>
            <p>Global Worst: {global.worst}</p>
            <p>
              Best Global Subjects: {formatGlobalSubjects(global.subjects.best)}
            </p>
            <p>
              Worst Global Subjects:{" "}
              {formatGlobalSubjects(global.subjects.worst)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

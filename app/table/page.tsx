import grades from "../../grades-data/data/grades.json";

export default function TablePage() {
  return (
    <div className="container mx-auto px-4">
      <h1>Table</h1>
      {Object.entries(grades.students).map(([nmec, data]) => (
        <div key={nmec}>
          <h2>
            {data.name} ({nmec})
          </h2>

          <hr />

          <h3>Grades</h3>

          <h3>Global</h3>

          <p>
            Global Average:{" "}
            {data.global.average === -1 ? "No data" : data.global.average}
          </p>
          <p>Global Best: {data.global.best}</p>
          <p>Global Worst: {data.global.worst}</p>
          <p>
            Best Global Subjects: {data.global.subjects.best[0]}
            {data.global.subjects.best[1]?.map((subject: string) => (
              <span key={subject}>, {grades.subjects[subject].name}</span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

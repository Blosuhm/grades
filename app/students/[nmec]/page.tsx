import grades from "./grades.json";

export default function NmecPage({ params }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-center">
        Best Average: {grades.students[params.nmec].name}
      </h1>
    </div>
  );
}

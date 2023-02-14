import z from "zod";

const StudentSchema = z.object({
  name: z.string(),
  global: z.object({
    average: z.number(),
    best: z.number(),
    worst: z.number(),
    subjects: z.object({
      best: z.tuple([z.number(), z.array(z.string())]),
      worst: z.tuple([z.number(), z.array(z.string())]),
    }),
    year: z.record(
      z.object({
        average: z.number(),
        semester: z.record(
          z.object({
            average: z.number(),
            best: z.number(),
            worst: z.number(),
          })
        ),
      })
    ),
  }),
  subjects: z.record(z.number()),
});

const SubjectsSchema = z.object({
  name: z.string(),
  average: z.number(),
  best: z.tuple([z.number(), z.array(z.string())]),
  worst: z.tuple([z.number(), z.array(z.string())]),
});

const SemesterSubjectsSchema = z.record(z.record(z.array(z.string())));

const GlobalSchema = z.object({
  average: z.number(),
  best: z.tuple([z.number(), z.array(z.string())]),
  worst: z.tuple([z.number(), z.array(z.string())]),
  subject: z.object({
    best: z.tuple([z.number(), z.array(z.string())]),
    worst: z.tuple([z.number(), z.array(z.string())]),
  }),
  year: z.record(
    z.object({
      average: z.number(),
      semester: z.record(
        z.object({
          average: z.number(),
          best: z.number(),
          worst: z.number(),
        })
      ),
    })
  ),
});

const GradesSchema = {
  students: z.record(StudentSchema),
  subjects: z.record(SubjectsSchema),
  "semester-subjects": SemesterSubjectsSchema,
  global: GlobalSchema,
};

export default GradesSchema;

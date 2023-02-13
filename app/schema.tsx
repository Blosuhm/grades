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

const GradesSchema = z.object({
  students: z.record(StudentSchema),
  subjects: z.record(
    z.object({
      name: z.string(),
      average: z.number(),
      best: z.tuple([z.number(), z.array(z.string())]),
      worst: z.tuple([z.number(), z.array(z.string())]),
    })
  ),
  "semester-subjects": z.record(z.record(z.array(z.string()))),
  global: z.object({
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
        best: z.tuple([z.number(), z.array(z.string())]),
        worst: z.tuple([z.number(), z.array(z.string())]),
        semester: z.record(
          z.object({
            average: z.number(),
            best: z.tuple([z.number(), z.array(z.string())]),
            worst: z.tuple([z.number(), z.array(z.string())]),
          })
        ),
      })
    ),
  }),
});

export { GradesSchema, StudentSchema };

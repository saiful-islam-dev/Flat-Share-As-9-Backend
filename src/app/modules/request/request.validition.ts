import { z } from "zod";

export const createRequestSchema = z.object({
  body: z.object({
    flatId: z
      .string()
      .nonempty({ message: "Flat ID must be provided as a non-empty string" }),
    message: z.string().min(1, { message: "Message is required" }).optional(),
  }),
});

export const updateRequestSchema = z.object({
  body: z.object({
    status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  }),
});

export const deleteRequestSchema = z.object({
  body: z.object({
    id: z
      .string()
      .nonempty({ message: "ID must be provided as a non-empty string" }),
  }),
});

export const RequestValidationSchema = {
  createRequestSchema,
  updateRequestSchema,
  deleteRequestSchema,
};

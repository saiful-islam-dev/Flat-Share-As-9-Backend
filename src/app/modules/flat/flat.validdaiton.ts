import { z } from "zod";

export const createFlatSchema = z.object({
  body: z.object({
    location: z.string().min(1, "Location is required"),
    description: z.string().min(1, "Description is required"),
    rent: z.number().positive("Rent must be a positive number"),
    bedrooms: z
      .number()
      .int()
      .positive("Number of bedrooms must be a positive integer"),
    amenities: z.string().min(1, "Amenities are required"),
    photos: z.string(),
    //   postedById: z.string().uuid("PostedBy ID must be a valid UUID"),
  }),
});

export const updateFlatSchema = z.object({
  body: z.object({
    location: z.string().min(1, "Location is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
    rent: z.number().positive("Rent must be a positive number").optional(),
    bedrooms: z
      .number()
      .int()
      .positive("Number of bedrooms must be a positive integer")
      .optional(),
    amenities: z.string().min(1, "Amenities are required").optional(),
    photos: z.string().url("Photos must be a valid URL").optional(),
  }),
});

export const FlatValidationSchema = {
  createFlatSchema,
  updateFlatSchema,
};

import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido." })
    .min(3, { message: "La longitud mínima es 3." }),
  lastname: z
    .string({ required_error: "El apellido es requerido." })
    .min(3, { message: "La longitud mínima es 3." }),
});

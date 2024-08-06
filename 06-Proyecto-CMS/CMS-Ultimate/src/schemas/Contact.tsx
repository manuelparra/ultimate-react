import { z } from "zod";

export const contactTypeOptions = [
  "Trabajo",
  "Personal",
  "Familiar",
  "Otros",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nmobre es requerido." })
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  lastname: z
    .string()
    .min(1, { message: "El nmobre es requerido." })
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  email: z
    .string()
    .min(1, { message: "El correo es requerido." })
    .email("El correo es inválido."),
  type: z.enum(contactTypeOptions, {
    errorMap: () => ({ message: "Seleccione un tipo valido." }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };

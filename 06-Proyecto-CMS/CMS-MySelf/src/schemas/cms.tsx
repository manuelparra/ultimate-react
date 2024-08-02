import { z } from "zod";

export const cmsSchema = z.object({
  name: z.string().min(1, { message: "El Nombre es requerido" }),
  lastname: z.string().min(1, { message: "El Apellido es requerido" }),
  email: z.string().email({ message: "El Correo es requerido" }),
});

export type cmsForm = z.infer<typeof cmsSchema>;

import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  // Usamos el loader de contenido de Astro
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Campos personalizados para tus cursos
      empresa: z.string().optional(),
      tipo: z.string().optional(),
      botonTexto: z.string().optional(),
      // Gestión de imágenes
      image: image().optional(),
      imageAlt: z.string().optional(),
      // Orden de las tarjetas
      weight: z.number().optional(),
    }),
});

// Exportamos la colección 'docs' que es la que usas para tus carpetas de tele y gestión
export const collections = {
  docs: docs,
};
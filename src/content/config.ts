import { defineCollection, z } from 'astro:content';

// Colección para los Cursos (Carpeta content/docs)
const docs = defineCollection({
  schema: () => z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(),
    botonTexto: z.string().optional(),
    image: z.any().optional(), // Acepta cualquier formato de imagen sin quejarse
    weight: z.number().optional(),
  }),
});

// Colección para la Página de Inicio (Carpeta content/indexCards)
const indexCards = defineCollection({
  schema: () => z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.any().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  'docs': docs,
  'indexCards': indexCards,
};
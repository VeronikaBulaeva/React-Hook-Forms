import { z } from 'zod';
import { projectSchema } from '@/components/schemas/ProjectSchemas.ts';

const textSchema = z
  .string()
  .min(2, 'Значение не должно быть короче 2-х символов')
  .max(20, 'Значение не должно быть длиннее 20 символов')
  .regex(/^[-а-яА-ЯёЁ\s]+$/, 'Значение должно содержать только буквы');

export const formSchema = z.object({
  surname: textSchema,
  name: textSchema,
  lastName: textSchema.or(z.literal('')),
  phone: z.string().min(12, 'Проверьте корректность номера телефона'),
  email: z.string().email('Проверьте корректность email-адреса').or(z.literal('')),
  checkbox: z.literal<boolean>(true, {
    errorMap: () => ({ message: 'Примите условия движа' }),
  }),
  projects: z.array(projectSchema),
});

export type FormFields = z.infer<typeof formSchema>;

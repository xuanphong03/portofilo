import {z} from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

export const contactFormSchema = {
  build: (t: (key: string) => string) =>
    z.object({
      fullname: z.string().min(1, t('emptyErrorFullnameMessage')),
      email: z
        .string()
        .min(1, t('emptyErrorEmailMessage'))
        .email(t('invalidErrorEmailMessage')),
      phone: z
        .string()
        .min(1, t('emptyErrorPhoneMessage'))
        .regex(phoneRegex, t('invalidErrorPhoneMessage')),
      message: z.string().min(1, t('emptyErrorMessageMessage')),
    }),
}

// 👇 buộc TS infer đúng kiểu, không phải unknown
export type ContactFormSchemaType = ReturnType<typeof contactFormSchema.build>
export type ContactFormValuesType = z.infer<ContactFormSchemaType>

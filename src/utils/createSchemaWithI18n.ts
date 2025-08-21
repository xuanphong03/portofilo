// src/utils/createSchemaWithI18n.ts
import {z} from 'zod'

// T là namespace keys (ví dụ: ContactFormKey)
export function createSchemaWithI18n<TKey extends string, TSchema extends (t: (key: TKey) => string) => z.ZodTypeAny>(
  schemaFactory: TSchema,
) {
  return {
    build: (t: (key: TKey) => string) => schemaFactory(t),
    // 👇 Helper type để lấy ra form values
    getValuesType: () => null as unknown as z.infer<ReturnType<TSchema>>,
  }
}

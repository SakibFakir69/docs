
import z, { string } from 'zod'

// schema primitive

const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean()
const nullSchema  = z.null();
const undefinedSchema = z.undefined();
const dateSchema =z.date();
const objSchema = z.object({
    id:z.string(),
    age:z.number(),
    isStudent:z.boolean(),
    


})
const result =stringSchema.parse(20);


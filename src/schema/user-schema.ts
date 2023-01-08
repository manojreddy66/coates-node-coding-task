import { object ,string,TypeOf} from "zod";


export const createUserSchema = object({
body: object({
    name: string({
        required_error:"Name is required"
    }),
    email: string({
        required_error: "email is required"
    }).email('Not a valid email'),
    dob:string({
        required_error: "dob is required"
    })
})

  });

  export type CreateUserInput=TypeOf<typeof createUserSchema>;
  
import * as Yup from 'yup';

export const SigninSchema = Yup.object({
    email: Yup.string().email('Email is required.'),
    password: Yup.string().required('Password is required').min(6)
});

export type SigninSchemaType = Yup.InferType<typeof SigninSchema>
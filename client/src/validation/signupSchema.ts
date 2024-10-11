import * as Yup from 'yup';

export const SignupSchema = Yup.object({
    firstName: Yup.string().required('First name is required.').min(3),
    lastName: Yup.string().required('Last name is required.').min(3),
    email: Yup.string().email('Email is required.'),
    password: Yup.string().required('Password is required').min(6)
});

export type SignupSchemaType = Yup.InferType<typeof SignupSchema>
import * as Yup from 'yup';

export const ContactSchema = Yup.object({
    name: Yup.string().required('Name is required').min(8),
    email: Yup.string().email('Email is required'),
    phoneNumber: Yup.string().optional(),
    subject: Yup.string().required('Provide the reason of contacting us'),
    message: Yup.string().required('Message is required')
});

export type ContactSchemaType = Yup.InferType<typeof ContactSchema>
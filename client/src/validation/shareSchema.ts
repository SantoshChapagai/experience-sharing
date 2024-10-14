import * as Yup from 'yup';

export const ShareSchema = Yup.object ({
    name: Yup.string().required('Name is required').min(5, 'Name should have atleast 5 characters'),
    country: Yup.string().required('Country is required'). min(3),
    title: Yup.string().required('Title is rerquired').min(5),
    experience: Yup.string().required('Experience is required')
});

export type ShareSchemaType = Yup.InferType<typeof ShareSchema>
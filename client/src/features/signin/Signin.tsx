import { Form, Formik } from 'formik';
import { SigninSchema, SigninSchemaType } from '../../validation/signinSchema';

export const Signin = () => {
  const handleSignin = (values: SigninSchemaType) => {
    console.log('Signin values:', values);
  };

  return (
    <div className='max-w-[820px] w-full mx-auto mt-16 bg-sky-300 rounded-xl'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={handleSignin}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form className='p-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                placeholder='Email address'
                className='p-2 rounded border'
                {...getFieldProps('email')}
              />
              {errors.email && touched.email && (
                <div className='text-red-500'>{errors.email}</div>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Your password'
                className='p-2 rounded border'
                {...getFieldProps('password')}
              />
              {errors.password && touched.password && (
                <div className='text-red-500'>{errors.password}</div>
              )}
            </div>
            <div className='text-center mt-4'>
              <button type='submit' className='bg-sky-800 text-white p-2 rounded w-1/4'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

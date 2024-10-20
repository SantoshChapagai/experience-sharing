import { Form, Formik } from "formik"
import { SignupSchema, SignupSchemaType } from "../../validation/signupSchema";


export const Signup = () => {
    const handleSignup = (values: SignupSchemaType) => {
        console.log('sign up values', values);
    }
  return (
    <div className='max-w-[820px] w-full mx-auto mt-16 bg-sky-300 rounded-xl'>
        <Formik
          initialValues={
            {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            }

          }
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({getFieldProps, errors, touched}) => (
            <Form className='p-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  id='firstName'
                  placeholder='Enter your First name'
                  {...getFieldProps('firstName')}
                  className='p-2 rounded border'
                />
                {errors.firstName && touched.firstName && (
                <div className='text-red-500'>{errors.firstName}</div>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  id='lastName'
                  placeholder='Enter your last name'
                  {...getFieldProps('lastName')}
                  className='p-2 rounded border'
                />
                {errors.lastName && touched.lastName && (
                <div className='text-red-500'>{errors.lastName}</div>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  placeholder='Email address'
                  {...getFieldProps('email')}
                  className='p-2 rounded border'
                />
                {errors.email && touched.email && (
                <div className='text-red-500'>{errors.email}</div>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  placeholder='Your phone number'
                  {...getFieldProps('password')}
                  className='p-2 rounded border'
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
  )
}

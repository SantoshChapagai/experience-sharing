import { Form, Formik } from "formik"
import { SigninSchema } from "../../validation/signinSchema";
export const Signin = () => {
  const handleSignin = () => {
    console.log('signin')
  }
  return (
    <div className='max-w-[820px] w-full mx-auto mt-16 bg-sky-300 rounded-xl'>
      <Formik
        initialValues={
          {
            email: '',
            password: '',
          }
        }
        validationSchema={SigninSchema}
        onSubmit={handleSignin}
      >
        <Form className='p-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input id='cemail' placeholder='Email address'  className='p-2 rounded border'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Your phone number'  className='p-2 rounded border'/>
          </div>
          <div className='text-center mt-4'>
            <button type='submit' className='bg-sky-800 text-white p-2 rounded w-1/4'>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

import { Form, Formik } from "formik"
import { SignupSchema } from "../../validation/signupSchema";


export const Signup = () => {
    const handleSignup = () => {
        console.log('hello');
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
            <Form className='p-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='firstName'>First Name</label>
                <input id='firstName' placeholder='Enter your First name'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='lastName'>Last Name</label>
                <input id='lastName' placeholder='Enter your last name'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email</label>
                <input id='cemail' placeholder='Email address'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='password'>Phone number</label>
                <input type='password' id='password' placeholder='Your phone number'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='subject'>Subject</label>
                <input id='subject' placeholder='Subject'  className='p-2 rounded border'/>
              </div>
              <div className='text-center mt-4'>
                <button type='submit' className='bg-sky-800 text-white p-2 rounded w-1/4'>Submit</button>
              </div>
            </Form>
        </Formik>
    </div>
  )
}

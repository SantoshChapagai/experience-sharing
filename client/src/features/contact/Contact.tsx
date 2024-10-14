import { Form, Formik } from "formik"
import { ContactSchema } from "../../validation/ContactSchema"

export const Contact = () => {
  const handleContact = () => {
    console.log('handle contact')
  }
  return (
    <div className='max-w-[820px] w-full mx-auto mt-16 bg-sky-300 rounded-xl'>
      <Formik
        initialValues={
          {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: ''
          }
        }
        validationSchema={ContactSchema}
        onSubmit={handleContact}
      >
        <Form
          className='flex flex-col py-4 px-8 gap-4'
        >
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Name</label>
              <input id='name' placeholder='Enter your full name'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input id='cemail' placeholder='Email address'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='phone'>Phone number</label>
              <input id='phone' placeholder='Your phone number'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='subject'>Subject</label>
              <input id='subject' placeholder='Subject'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label>Message</label>
              <textarea
                placeholder='Write your message'
                rows={5}
                className='border p-2 overflow-y-auto rounded'
              />
            </div>
            <div className='text-center mt-2'>
                <button type='submit' className='bg-sky-800 text-white p-2 rounded w-1/4'>Submit</button>
            </div>
        </Form>
        </Formik>
    </div>
  )
}

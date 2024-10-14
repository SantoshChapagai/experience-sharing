import { Form, Formik } from "formik"
import { ShareSchema } from "../../validation/shareSchema";

export const Share = () => {
  const handleShare = () => {
    console.log('shared successfully');
  }
    return (
      <div className='max-w-[820px] w-full mx-auto mt-16 bg-sky-300 rounded-xl'>
        <Formik
          initialValues={
            {
              name: '',
              country: '',
              title: '',
              experience: '',
            }
          }
          validationSchema={ShareSchema}
          onSubmit={handleShare}
        >
          <Form
            className='flex flex-col p-4 gap-4'
          >
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <input id='name' placeholder='Enter your full name'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='country'>Country</label>
                <input id='country' placeholder='Country'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='title'>Title</label>
                <input id='title' placeholder='Enter your experience heading'  className='p-2 rounded border'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label>Experience</label>
                <textarea
                  placeholder='Enter your experience'
                  rows={8}
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
  
export const Contact = () => {
  return (
    <div className='max-w-[820px] w-full mx-auto mt-16 bg-sky-300 rounded-xl'>
        <form
          className='flex flex-col p-4 gap-4'
        >
            <div className='flex flex-col'>
              <label htmlFor='name'>Name</label>
              <input id='name' placeholder='Enter your full name'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='country'>Country</label>
              <input id='country' placeholder='Country'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='title'>Title</label>
              <input id='title' placeholder='Enter your experience heading'  className='p-2 rounded border'/>
            </div>
            <div className='flex flex-col rounded'>
              <label>Experience</label>
              <textarea
                placeholder='Enter your experience'
                rows={8}
                className='border p-2 overflow-y-auto'
              />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

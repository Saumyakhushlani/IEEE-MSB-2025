import React from 'react'
import { useForm } from "react-hook-form"
import Timeline from './Timeline.jsx'

const Form = () => {
   const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm()

    function onSubmit(data){
       let participants = JSON.parse(localStorage.getItem('participants')) || [];
            participants.push(data);
            localStorage.setItem('participants', JSON.stringify(participants));
    }

  return (
    <div className='p-[3rem] md:p-[5rem]  flex flex-col md:flex-row justify-evenly items-center bg-gray-600'>
      <Timeline />
        <form className='mt-[3rem] self-start p-[2rem] md:p-[5rem] bg-[rgba(255,255,255,0.2)]  text-black rounded-xl' onSubmit={handleSubmit(onSubmit)}>
      <div className='border-white border-2 p-[0.5rem] md:p-[1rem] text-[0.7rem] md:text-xl rounded-xl'>
        <input
          placeholder='Name'
          className={errors.Name ? "border-red-500 border-4" : ""}
          {...register("Name",
            {
              required: true,
              minLength: { value: 3, message: 'Min length is 3' },
            })} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <br />

      <div className='border-white border-2 p-[0.5rem] md:p-[1rem] text-[0.7rem] md:text-xl rounded-xl'>
        <input
        placeholder='Number'
          className={errors.number ? "border-red-500 border-4" : ""}
          {...register("number", { required: true})} />
      </div>
      <br />
      <br />

      <div className='border-white border-2 p-[0.5rem] md:p-[1rem] text-[0.7rem] md:text-xl rounded-xl'>
        <input
        placeholder='Institute'
          className={errors.institute ? "border-red-500 border-4" : ""}
          {...register("institute",
            { required: true})} />
      </div>
      <br />
      <button className="bg-[#00BFFF] rounded-xl px-[0.7rem] md:px-[1rem] py-[0.3rem] md:py-[0.5rem] hover:bg-amber-50 ease-in-out hover:text-black duration-120" type='submit' disabled={isSubmitting} >{isSubmitting?"Submitting":"submit"}</button>
    </form>
    </div>
  )
}

export default Form

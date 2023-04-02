import React from 'react'
import CustomButton from '../../../../components/button'

const Newsletter = () => {
  return (
    <section class="bg-gray-100">
      <div class="container px-4 py-12 mx-auto flex flex-col items-center font-poppins">
        <h2 class="text-3xl font-bold mb-6">Subscribe to our Newsletter</h2>
        <p class="max-w-lg text-center mb-8">Get the latest news, updates, and special offers delivered directly to your inbox.</p>
        <form class="flex flex-col md:flex-row max-w-lg">
          <input class="w-full md:w-3/4 bg-white rounded-md py-3 px-4 mb-4 md:mb-0 md:mr-2 text-gray-800 font-medium" type="email" placeholder="Enter your email address" />
          <CustomButton text="Subscribe" variation='secondary' />
        </form>
      </div>
    </section>

  )
}

export default Newsletter
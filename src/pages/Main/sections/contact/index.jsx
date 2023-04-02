import React from 'react'
import CustomButton from '../../../../components/button'

const Contact = () => {
    return (
        <section id='contact' class="min-h-screen flex items-center justify-center bg-white">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
                <div class="max-w-xl mx-auto">
                    <h2 class="text-3xl font-bold leading-tight text-center text-gray-800">Contact Us</h2>
                    <p class="mt-2 text-xl text-center text-gray-600">Have questions or comments? We'd love to hear from you!</p>
                    <form class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label for="name" class="block text-lg font-medium text-gray-700">Full name</label>
                            <div class="mt-1">
                                <input type="text" name="name" id="name" class="block w-full border shadow-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Enter your full name" />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-lg font-medium text-gray-700">Email address</label>
                            <div class="mt-1">
                                <input type="email" name="email" id="email" class="block w-full border shadow-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-lg font-medium text-gray-700">Message</label>
                            <div class="mt-1">
                                <textarea name="message" id="message" rows="4" class="block w-full border shadow-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <CustomButton text="Send a message" />
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact
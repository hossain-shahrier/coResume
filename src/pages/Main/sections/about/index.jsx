import React from 'react'
import FeatureOne from '../../../../assets/one.svg'
import FeatureTwo from '../../../../assets/two.svg'
import FeatureThree from '../../../../assets/three.svg'
const About = () => {
    return (
        <section id='about' className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-poppins">
                    <div className="max-w-xs mx-auto">
                        <div className="mb-4">
                            <img src={FeatureOne} alt="" className="w-24 mx-auto" />
                        </div>
                        <h5 className="text-2xl font-bold text-gray-800 mb-2">Make a resume that wins interviews!</h5>
                        <p className="text-sm text-gray-600">Use our resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers, and even CEOs.</p>
                    </div>
                    <div className="max-w-xs mx-auto">
                        <div className="mb-4">
                            <img src={FeatureTwo} alt="" className="w-24 mx-auto" />
                        </div>
                        <h5 className="text-2xl font-bold text-gray-800 mb-2">Resume writing made easy!</h5>
                        <p className="text-sm text-gray-600">Resume writing has never been this effortless. Pre-generated text, visual designs, and more - all already integrated into the resume maker. Just fill in your details.</p>
                    </div>
                    <div className="max-w-xs mx-auto">
                        <div className="mb-4">
                            <img src={FeatureThree} alt="" className="w-24 mx-auto" />
                        </div>
                        <h5 className="text-2xl font-bold text-gray-800 mb-2">A recruiter-tested CV maker tool</h5>
                        <p className="text-sm text-gray-600">Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
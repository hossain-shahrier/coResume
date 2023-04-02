// import HomeImageBlob from '../../assets/blob.png'

import CustomButton from "../../../../components/button";

// import HomeImage from '../../assets/any.png'
const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container relative mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/2 lg:w-5/12 xl:w-6/12 flex flex-col items-start">
                    <h6 className="text-blue-dark uppercase text-lg font-semibold tracking-widest">Online Resume Builder</h6>
                    <h1 className="text-3xl lg:text-6xl font-bold leading-tight mt-4 mb-8">
                        Only <span className='gradient-text text-8xl'>2%</span> of resumes make it past the first round. Be in the top <span className='gradient-text'>2%</span>.
                    </h1>
                    <p className="text-md lg:text-lg mb-8 font-poppins">
                        Use professional field-tested resume templates that follow the exact <span className='font-semibold'>resume rules</span> employers look for. Easy to use and done within minutes. <br /><span className='font-bold text-blue-600'>Try now for free!</span>
                    </p>
                    <CustomButton text="Create my resume" variation="secondary" className="mb-8" />
                </div>
                <div className="w-full md:w-1/2 lg:w-7/12 xl:w-5/12 flex flex-col items-center justify-center relative ">
                    {/* <img src={HomeImageBlob} alt="" className='md:w-1/2' />
                    <img src={HomeImage} alt="" className='md:w-1/2 absolute left-24' /> */}
                </div>
            </div>
        </section>
    );
};

export default Home;

import GuideImage from '../../../../assets/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg';
import CustomButton from '../../../../components/button';

const Guide = () => {
    return (
        <section id='guide' className="min-h-screen w-full flex items-center justify-between">
            <div >
                <div className="w-full flex flex-col md:flex-row gap-10 items-center">
                    <div className="md:w-full flex justify-center">
                        <img src={GuideImage} alt="GuideImage" className="w-full max-w-xl" />
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 font-poppins">
                        <h2 className="text-5xl font-bold mb-4 text-center md:text-left">Use the best resume maker as your <span className='gradient-text'>guide.</span></h2>
                        <p className="text-lg mb-6 text-center md:text-left max-w-lg">Achieving your dream job may feel like an insurmountable task, but our platform is here to help. Gain a competitive edge with our top-tier resume maker, crafted by seasoned professionals, refined through data analysis, and trusted by millions of successful job-seekers.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-2 md:justify-start">
                            {/* <CustomButton text="CREATE MY RESUME" /> */}
                            <CustomButton text="WATCH VIDEO" variation='secondary' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guide;

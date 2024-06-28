import serve from "../../assets/image/s.png"
import { MdOutlinePersonalInjury } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={serve} className="rounded-lg shadow-2xl max-w-sm" />
                        <div className="">
                            <h1 className="text-5xl font-bold">WEBSITE DESIGN AND SERVICES</h1>
                            <p className="py-6 text-lg">reating content about services on a website involves presenting your services in a way that is clear, compelling, and easy for potential customers to understand. Here are some key components and best practices for effectively showcasing services on your website.</p>
                            <button className="btn bg-teal-950 border-none text-base text-white">View Website<FaArrowRight className="mt-1 items-center"></FaArrowRight></button>
                            <button className="btn mx-6 bg-violet-950 border-none text-base text-white">Book A free Service</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-3/4 mx-auto">
                <div className="text-center pb-12">
                    <h1 className="text-4xl font-bold text-white">Consulting and Professional Services</h1>
                    <p className="text-lg font-semibold text-white pt-8">Our Expertise and Commitment to Your Success Sets Us Apart</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="card w-96 bg-slate-900 shadow-xl items-center mb-12">
                        <p className="items-center text-6xl pt-4"><MdOutlinePersonalInjury></MdOutlinePersonalInjury></p>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold pb-4">Personalized Business Package!</h2>
                            <p className="text-lg font-semibold">
                                Choose from a wide range of web solutions that you need to ensure effective, efficient, and sustainable growth of your business. BrandCurb works on the smallest to largest detail of your website---from mobile and speed
                                optimization, to landing page designs, and even SEO---basically, everything under the digital sun!
                            </p>
                            <button className="btn bg-teal-950 mt-4 text-lg">Go Now</button>
                        </div>
                    </div>
                    <div className="card w-96 bg-slate-900 shadow-xl items-center mb-12">
                        <p className="items-center text-6xl pt-4"><FaClockRotateLeft></FaClockRotateLeft></p>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold pb-4">Results-Driven Solutions</h2>
                            <p className="text-lg font-semibold">
                                At BrandCurb, we are committed to delivering measurable results for our clients. We leverage the latest technologies
                                and marketing tools to create data-driven campaigns that are optimized for performance and ROI. Our team is constantly monitoring and analyzing campaign performance, making adjustments as needed.
                            </p>
                            <button className="btn bg-teal-950 mt-4 text-lg">Go Now</button>
                        </div>
                    </div>

                    <div className="card w-96 bg-slate-900 shadow-xl items-center mb-12">
                        <p className="items-center text-6xl pt-4"><MdOutlinePhoneAndroid></MdOutlinePhoneAndroid></p>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold pb-4">Customized Approach</h2>
                            <p className="text-lg font-semibold">
                                Clients from around the globe have raved and benefited from our responsive WordPress and WooCommerce websites. These SMEs are able to stand-up and even surpass bigger and heavier competition at a lower cost here at BrandCurb---all because our services
                                are tailored and uniquely-made for you and your specific vision for your company.
                            </p>
                            <button className="btn bg-teal-950 mt-4 text-lg">Go Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
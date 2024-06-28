import feat from "../../assets/image/TrelloUICollage_4x.webp.png"
import { MdIntegrationInstructions } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaSearchLocation } from "react-icons/fa";
import img1 from "../../assets/images/gulp.png";
import img2 from "../../assets/images/vector (1).png";
import img3 from "../../assets/images/saas.png";
import { useState } from "react";
const Review = () => {
    const [IsMessageVisible, SetIsMessageVisible] = useState(false);

    const handleButton = () => {
        SetIsMessageVisible(true);
    };
    const handleMessageClose = () =>{
        SetIsMessageVisible(false);
    };
    return (
        <div className="py-20">
            <div className="w-3/4 mx-auto">
                <div className="hero bg-base-1000 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={feat}
                            className="rounded-lg shadow-2xl w-3/5 lg:w-1/2" />
                        <div>
                            <h1 className="text-5xl font-bold">Empowering You with Cutting-Edge Technology.</h1>
                            <p className="py-6 text-xl font-semibold">
                                Explore our comprehensive suite of innovative solutions crafted to empower your business with cutting-edge technology, delivering enhanced efficiency,
                                seamless integration, and scalable performance to drive sustainable growth and success.
                            </p>
                            <div>
                                <button onClick={handleButton} className="btn bg-teal-900 text-bold text-lg">Products</button>
                            </div>
                            {IsMessageVisible && (
                                <div className="bg-slate-900 max-w-36 p-4 items-center rounded-lg mt-2">
                                    <div className="text-lg font-semibold ">
                                        <li>Cotton</li>
                                        <li>Fibre</li>
                                        <li>Concrete</li>
                                    </div>
                                    <div className="mt-2">
                                        <button className="bg-teal-900 text-lg font-bold py-1 px-2 rounded-lg" onClick={handleMessageClose}>Cancel</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* features content */}
            <div className="w-3/4 mx-auto">
                <div className="space-y-4 py-10">
                    <h3 className="text-2xl font-semibold">POWERFUL WAYS TO GROW</h3>
                    <h1 className="text-5xl font-bold">Do more with Features</h1>
                    <p className="text-lg mb-10">Discover our suite of innovative solutions designed to empower your business with cutting-edge technology,
                        enhancing efficiency and driving growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div className="card card-compact bg-base-100 w-96 shadow-xl py-6 space-y-2 space-x-2">
                        <span className="text-8xl text-teal-600 text-center"><MdIntegrationInstructions></MdIntegrationInstructions></span>
                        <h2 className="card-title text-3xl font-bold">Butler Automation</h2>
                        <p className="text-lg font-medium">No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
                        <div>
                            <button className="btn bg-teal-900 text-lg font-semibold">Get Automation</button>
                        </div>
                    </div>
                    {/*  card no. 1 */}
                    <div className="card card-compact bg-base-100 w-96 shadow-xl py-6 space-y-2">
                        <span className="text-8xl text-teal-600 text-center"><FaSearchLocation></FaSearchLocation></span>

                        <h2 className="card-title text-3xl font-bold">Search Features</h2>
                        <p className="text-lg font-medium">The productivity tool teams love, paired with the features and security needed for scale where company satisfied.</p>
                        <div>
                            <button className="btn bg-teal-900 text-lg font-semibold">Search Now</button>
                        </div>
                    </div>
                    {/*  card no. 2 */}
                    <div className="card card-compact bg-base-100 w-96 shadow-xl py-6 space-y-2">
                        <span className="text-8xl text-teal-600 text-center"><IoSettings></IoSettings></span>
                        <h2 className="card-title text-3xl font-bold">Integration</h2>
                        <p className="text-lg font-medium">Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
                        <div>
                            <button className="btn bg-teal-900 text-lg font-semibold">Integrations</button>
                        </div>
                    </div>
                    {/*  card no. 2 */}
                </div>
            </div>
            {/* team works */}
            <div className="w-3/4 mx-auto mt-20">
                <div className="space-y-5 w-3/4 mx-auto py-20">
                    <h1 className="text-5xl font-bold">Teams large and small rely on Slack</h1>
                    <p className="text-lg font-semibold">Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                    <button className="btn bg-purple-900 text-lg font-semibold">Meet Our Team</button>
                    <button className="btn ml-5 bg-yellow-900 text-lg font-semibold">Meet Our Team</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div className="card card-compact bg-base-100 w-96 shadow-xl py-6 space-y-2">
                        <img className="w-24" src={img1} alt="" />
                        <h1 className="text-6xl font-bold">85%</h1>
                        <p className="text-lg font-medium">of users say Slack has improved communication*</p>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl py-6 space-y-2">
                        <img className="w-24" src={img2} alt="" />
                        <h1 className="text-6xl font-bold">86%</h1>
                        <p className="text-lg font-medium">feel their ability to work remotely has improved*</p>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl py-6 space-y-2">
                        <img className="w-24" src={img3} alt="" />
                        <h1 className="text-6xl font-bold">88%</h1>
                        <p className="text-lg font-medium">feel more connected to their teams*</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
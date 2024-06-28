import { useState } from 'react';
import img1 from '../../assets/image/Untitled design.png';
const Home = () => {
    const [isMessageVisible, SetIsMessageVisible] = useState(false);
    const handleHire = () => {
        SetIsMessageVisible(true);
    };
    const handleMessageClose = () => {
        SetIsMessageVisible(false);
    };
    return (
        <div>
            <div className="w-3/4 mx-auto py-8 lg:py-10">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='space-y-4'>
                            <h1 className="text-3xl font-bold">My Name Is MD Shaheenur Rashid</h1>
                            <h2 className="text-4xl font-bold">I am Web Developer And Software Engineer</h2>
                            <div className='space-y-3 py-5 font-semibold text-xl'>
                                <li>Frontend Development: Focuses on building the user interface and user experience of a website or web application using HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.</li>
                                <li>Core Technologies: Proficiency in HTML, CSS, JavaScript, and popular frameworks (React, Angular, Vue.js).</li>
                                <li>Application Development: Designs, develops, and maintains software applications using various programming languages (Java, C++, Python, etc.).</li>
                                <li>Programming Languages: Proficiency in one or more high-level programming languages (Java, C++, Python, C#, etc.).</li>
                            </div>
                            <div>
                                <button onClick={handleHire} className="btn bg-teal-950 font-semibold text-lg text-white">Hire Me</button>
                            </div>
                            {isMessageVisible && (
                                <div className='bg-gray-900 p-6 rounded-lg shadow-lg text-center grid grid-cols-1 max-w-36'>
                                    <p className='text-lg font-semibold py-2'>Contact with me by 01823673869</p>
                                    <button onClick={handleMessageClose} className='bg-slate-800 text-xl rounded-lg py-2 text-white font-bold'>OK</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto py-10'>
                <div className='pb-6 text-center max-w-2xl mx-auto space-y-6 mb-10'>
                    <h2 className='text-5xl font-bold'>About Me</h2>
                    <p className='text-lg'>When aiming to build a career as a web developer or software engineer, having experience in JavaScript, Python, and C/C++ can be highly beneficial. Here's a breakdown of what experience you should have with each language and how they contribute to your skill set:</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table text-xl">
                        {/* head */}
                        <thead className='text-xl'>
                            <tr>
                                <th>No.</th>
                                <th>Language</th>
                                <th>Experience</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>JavaScript</td>
                                <td>Almost 3 years</td>
                                <td>$154</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Python</td>
                                <td>Almost 2 years</td>
                                <td>$145</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>C/C++</td>
                                <td>Almost 4 years</td>
                                <td>$167</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
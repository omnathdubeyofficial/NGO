import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { HeartIcon, AcademicCapIcon, SparklesIcon, GlobeAltIcon, UserGroupIcon, ScaleIcon } from '@heroicons/react/24/outline';

interface DataType {
    heading: string;
    icon: JSX.Element;
    paragraph: string;
    link: string;
}

const aboutData: DataType[] = [
    {
        heading: "Spreading Education & Awareness for Community Development",
        icon: <AcademicCapIcon className="h-10 w-10 text-blue-600" />,
        paragraph: "Our organization is consistently working to spread education and awareness across diverse sections of society.",
        link: 'Learn More'
    },
    {
        heading: "Empowering Society Through Healthcare Services",
        icon: <HeartIcon className="h-10 w-10 text-red-500" />,
        paragraph: "We aim to provide accessible healthcare to all, focusing on health empowerment initiatives.",
        link: 'Learn More'
    },
    {
        heading: "Special Initiatives for Women Empowerment",
        icon: <UserGroupIcon className="h-10 w-10 text-pink-600" />,
        paragraph: "We organize dedicated programs and services for the upliftment and empowerment of women.",
        link: 'Learn More'
    },
    {
        heading: "Promoting Natural Resource Conservation",
        icon: <GlobeAltIcon className="h-10 w-10 text-green-600" />,
        paragraph: "We run awareness campaigns to conserve and manage natural resources effectively.",
        link: 'Learn More'
    },
    {
        heading: "Fostering Child Development & Education",
        icon: <SparklesIcon className="h-10 w-10 text-yellow-500" />,
        paragraph: "Our programs support the mental and physical development of children through education and care.",
        link: 'Learn More'
    },
    {
        heading: "Establishing Equality & Peace in Society",
        icon: <ScaleIcon className="h-10 w-10 text-indigo-600" />,
        paragraph: "We continuously strive to promote equality and peace within the community.",
        link: 'Learn More'
    },
];

const AboutUs = () => {
    return (
        <div id="aboutus-section" >
            <div className='mx-auto max-w-7xl px-4  my-32 lg:px-10 bg-gray-100 rounded-3xl relative'>
                <h1 className='text-center text-4xl lg:text-6xl font-bold text-gray-800 mb-16'>Our Services and <a className="bg-navyblue text-white pl-3 pr-3">Commitments</a></h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {aboutData.map((item, i) => (
                        <div
                            key={i}
                            className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 group'
                        >
                            <div className="mb-6">
                                {item.icon}
                            </div>
                            <h4 className='text-xl font-semibold text-gray-900 group-hover:text-blue-700 mb-4'>{item.heading}</h4>
                            <p className='text-gray-700 mb-4'>{item.paragraph}</p>
                            <Link href="#" className='text-blue-600 font-medium flex items-center hover:underline'>
                                {item.link}
                                <ChevronRightIcon className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

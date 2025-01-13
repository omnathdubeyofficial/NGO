import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "सामुदायिक विकास के लिए शिक्षा और जागरूकता फैलाना",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'समाज के विभिन्न वर्गों में शिक्षा और जागरूकता फैलाने के लिए संस्थान निरंतर प्रयासरत है।',
        link: 'अधिक जानें'
    },
    {
        heading: "स्वास्थ्य सेवाओं के माध्यम से समाज को सशक्त बनाना",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'स्वास्थ्य सुविधाओं को सभी तक पहुँचाने के लिए हमारी पहल स्वास्थ्य सशक्तिकरण पर केंद्रित है।',
        link: 'अधिक जानें'
    },
    {
        heading: "महिला सशक्तिकरण के लिए विशेष पहल करना",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'महिलाओं के उत्थान के लिए विशेष कार्यक्रमों और सेवाओं का आयोजन किया जाता है।',
        link: 'अधिक जानें'
    },
    {
        heading: "प्राकृतिक संसाधनों की सुरक्षा और संरक्षण को बढ़ावा देना",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'संस्थान प्राकृतिक संसाधनों के संरक्षण और प्रबंधन के लिए जागरूकता अभियान चलाता है।',
        link: 'अधिक जानें'
    },
    {
        heading: "बाल विकास और उनकी शिक्षा के लिए निरंतर प्रयास करना",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'बालकों के मानसिक और शारीरिक विकास के लिए शिक्षा और अन्य कार्यक्रम चलाए जाते हैं।',
        link: 'अधिक जानें'
    },
    {
        heading: "समाज में समानता और शांति स्थापित करना",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'समाज में समानता और शांति को बढ़ावा देने के लिए हमारे प्रयास हमेशा जारी रहते हैं।',
        link: 'अधिक जानें'
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section" style={{ fontFamily: 'Hind, sans-serif' }}>
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <img src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                {/* <h3 className='text-center text-blue text-lg tracking-widest'>मुख्य उद्देश्य</h3> */}
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>भागीरथ सहयोग सेवा संस्थान के उद्देश्य</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-x-16 lg:gap-x-5'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <img src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;

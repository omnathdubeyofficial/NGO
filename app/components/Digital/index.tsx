
const Digital = () => {
    return (
        <div className="mx-2" style={{ fontFamily: 'Hind, sans-serif' }}>
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        {/* <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">हम कौन हैं ?</h3> */}
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">हम एक समाजसेवी संस्था हैं, जो लोगों के जीवन में सकारात्मक बदलाव लाने के लिए समर्पित हैं।</h4>
                        <p className="text-xl text-white mb-8 text-center lg:text-start">
                            भागीरथ सहयोग सेवा संस्थान समाज के हर वर्ग की सहायता और उत्थान के लिए काम करता है। हम गरीब, असहाय और जरूरतमंद लोगों को शिक्षा, स्वास्थ्य, रोजगार और अन्य आवश्यक सेवाएं प्रदान करते हैं, ताकि वे अपनी जिंदगी को बेहतर बना सकें। हमारा उद्देश्य समाज में एक सशक्त और समान अवसरों का वातावरण बनाना है।
                        </p>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">हमसे जुड़ें</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute girldoodle">
                            <img src="/images/digital/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Digital;

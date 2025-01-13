
const Dedicated = () => {
    return (
        <div className="relative" style={{ fontFamily: 'Hind, sans-serif' }}>
            <img src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />
            
            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>
                    {/* COLUMN-1 */}
                    <div>
                        <img src="/images/logo.jpg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <img src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">हमारी सेवा समाज की सेवा के लिए समर्पित है।</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">हमारा उद्देश्य समाज में बदलाव लाना है और जरूरतमंद लोगों को सहारा देना है। हम हर वर्ग के लोगों के लिए काम करते हैं, ताकि उनकी ज़िंदगी में सकारात्मक बदलाव आ सके।</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-35 preline text-center lg:text-start">भागीरथ सहयोग सेवा संस्थान</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dedicated;

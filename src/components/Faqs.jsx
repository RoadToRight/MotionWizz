import React, { useEffect, useState } from 'react'

const Faqs = () => {

    const FaqsData = [
        { question: "What exactly is an explainer video?", answer: "An explainer video is a short, engaging piece of content that makes your product, service, or idea easy to understand in just a minute or two. It combines visuals, motion, and sound to turn complex information into a clear, memorable story. Most explainer videos run between 60–90 seconds and are designed to quickly capture attention and leave a lasting impression. You’ll often see them on homepages, landing pages, or in sales presentations because they simplify what words alone can’t." },
        { question: "What exactly is an explainer video?", answer: "An explainer video is a short, engaging piece of content that makes your product, service, or idea easy to understand in just a minute or two. It combines visuals, motion, and sound to turn complex information into a clear, memorable story. Most explainer videos run between 60–90 seconds and are designed to quickly capture attention and leave a lasting impression. You’ll often see them on homepages, landing pages, or in sales presentations because they simplify what words alone can’t." }
    ]

    const [faqsState, setfaqsState] = useState(FaqsData.map(() => false));
    useEffect(() => {
        console.log(faqsState)
    }, [faqsState])


    const handleFaqs = (faqIndex) => {
        setfaqsState((prev, i) => {
            let updatedArr = [...prev];
            updatedArr[faqIndex] = !updatedArr[faqIndex];
            return updatedArr
        })
    }

    return (
        <div>
            <div className="container">
                <h2>FAQ's</h2>
                <div className="accordian_wrapper">
                    {FaqsData?.map(({ question, answer }, i) => {

                        return (
                            <div className="accordian" key={question + i}>
                                <h4 className='ques' onClick={() => handleFaqs(i)}>{question}</h4>
                                {

                                }
                                <p className='ans'>{answer}</p>
                            </div>
                        )

                    })}

                </div>
            </div>
        </div>
    )
}

export default Faqs

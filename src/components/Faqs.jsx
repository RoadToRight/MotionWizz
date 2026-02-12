import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
        <FaqsWrapper>
            <div className="container">
                <h2>FAQ's</h2>
                <div className="accordian_wrapper">
                    {FaqsData?.map(({ question, answer }, i) => {

                        return (
                            <div className={`accordian ${faqsState[i] ? 'active' : ''}`} key={question + i}>
                                <h4 className='ques' onClick={() => handleFaqs(i)}>
                                    <span>{question}</span>
                                    <div className='icon'>+</div>
                                </h4>
                                {faqsState[i] && <p className='ans'>{answer}</p>}
                            </div>
                        )

                    })}

                </div>
            </div>
        </FaqsWrapper>
    )
}

export default Faqs

const FaqsWrapper = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -15%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 102, 34, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(100, 150, 255, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite reverse;
    z-index: 0;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
  }

  .container {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 60px;
    text-align: center;
    letter-spacing: -0.5px;
    animation: slideDown 0.8s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .accordian_wrapper {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .accordian {
    background: #fff;
    border: 2px solid #e8e8f0;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    animation: fadeInUp 0.6s ease-out;

    &:hover {
      border-color: #ff6622;
      box-shadow: 0 8px 25px rgba(255, 102, 34, 0.12);
      transform: translateY(-2px);
    }

    &.active {
      border-color: #ff6622;
      box-shadow: 0 12px 35px rgba(255, 102, 34, 0.15);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ques {
    padding: 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a2e;
    transition: all 0.3s ease;
    user-select: none;

    &:hover {
      color: #ff6622;
    }

    span {
      flex: 1;
      line-height: 1.6;
      letter-spacing: 0.3px;
    }

    .icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #ff6622 0%, #ff5500 100%);
      color: #fff;
      border-radius: 50%;
      font-size: 20px;
      font-weight: 300;
      flex-shrink: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .accordian.active .ques .icon {
    transform: rotate(45deg);
    background: linear-gradient(135deg, #ff5500 0%, #ff6622 100%);
  }

  .ans {
    padding: 0 24px 24px;
    color: #5a5a70;
    line-height: 1.8;
    font-size: 15px;
    letter-spacing: 0.3px;
    font-weight: 400;
    animation: expandDown 0.4s ease-out;
    max-height: 500px;
  }

  @keyframes expandDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 500px;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 60px 0;

    h2 {
      font-size: 36px;
      margin-bottom: 40px;
    }

    .accordian_wrapper {
      gap: 12px;
    }

    .ques {
      padding: 18px;
      font-size: 16px;
    }

    .ans {
      padding: 0 18px 18px;
      font-size: 14px;
    }

    .ques .icon {
      width: 28px;
      height: 28px;
      font-size: 18px;
    }
  }
`

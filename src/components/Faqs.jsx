import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Faqs = () => {

  const FaqsData = [
    {
      question: "What exactly is an explainer video?",
      answer: "An explainer video is a short, engaging piece of content that makes your product, service, or idea easy to understand in just a minute or two. It combines visuals, motion, and sound to turn complex information into a clear, memorable story. Most explainer videos run between 60–90 seconds and are designed to quickly capture attention and leave a lasting impression. You’ll often see them on homepages, landing pages, or in sales presentations because they simplify what words alone can’t."
    },
    {
      question: "Why are explainer videos so effective?",
      answer: "Explainer videos work because they turn information into an experience. People retain far more when they both see and hear something—video blends both, making your message stick. Instead of asking viewers to read long paragraphs, you’re showing them why your idea matters. Videos also perform better online: they get shared more often, keep people on your page longer, and dramatically improve conversion rates."
    },
    {
      question: "Are Explainer Videos Profitable?",
      answer: "Explainer videos work because they turn information into an experience. People retain far more when they both see and hear something—video blends both, making your message stick. Instead of asking viewers to read long paragraphs, you’re showing them why your idea matters. Videos also perform better online: they get shared more often, keep people on your page longer, and dramatically improve conversion rates."
    },
    {
      question: "What can I achieve using explainer videos?",
      answer: "Explainer videos can drive real results across your business. They help people quickly understand what you do, build trust, boost brand awareness, and turn curious visitors into customers. They can also reduce support questions, improve engagement on your website, and even strengthen your SEO. In short, they make your brand easier to remember, understand, and believe in."
    },
    {
      question: "How much does an explainer video cost?",
      answer: "The cost depends on your goals, style, and level of detail. A high-quality 60-second animated explainer typically ranges between $3,000 and $10,000. Projects that involve 3D animation, custom illustration, or complex storytelling can go higher. Most businesses find the sweet spot around $5,000 for a fully produced video with professional voiceover, sound design, and polished animation that reflects their brand."
    },
    {
      question: "How long should an explainer video be?",
      answer: "The best explainer videos usually run between 60 and 90 seconds—long enough to explain your message but short enough to hold attention. For social media, shorter clips (30–60 seconds) often work better, while website or presentation videos can stretch to about two minutes if the story needs more space. The key is to keep every second valuable."
    },
    {
      question: "How long does it take to make an explainer video?",
      answer: "A typical explainer video takes about 4–6 weeks from concept to delivery. That includes time for scripting, storyboarding, voiceover, animation, sound design, and revisions. More detailed or 3D-heavy projects can take longer, while simple ones can be done faster. If you’re on a tight deadline, some studios (including ours) can speed things up with a rush option."
    },
    {
      question: "What are the different types/styles of explainer videos?",
      answer: "There are several popular styles, each suited to different goals: 2D Character Animation for storytelling and emotion, Motion Graphics for tech and corporate messaging, Whiteboard Animation for simple educational content, and Screencast videos for software or app demos. For most businesses, 2D animation or motion graphics strike the right balance of impact and cost."
    },
    {
      question: "Should I use animation or live action for my explainer video?",
      answer: "It depends on your message. Animation is perfect for explaining abstract ideas or processes that are hard to film. It’s flexible, scalable, and easy to update later. Live action adds a human touch and works well for showcasing real people, products, or spaces. Many of the most effective explainer videos combine both approaches."
    },
    {
      question: "Can explainer videos help with SEO?",
      answer: "Absolutely. Videos keep people on your website longer, which signals to search engines that your content is valuable. When optimized with the right keywords, titles, and descriptions, explainer videos can help pages rank higher. Hosting videos on YouTube and embedding them on your site boosts visibility in both video and web search results."
    },
    {
      question: "What is the explainer video production process?",
      answer: "The process is collaborative from start to finish. It includes briefing and research, scriptwriting, storyboarding and styleframes, voiceover selection, illustration and animation, sound design, and final delivery. Clients are involved at every stage, with opportunities to review and refine the video so it perfectly represents their brand."
    }
  ];


  const [faqsState, setfaqsState] = useState(FaqsData.map(() => false));


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
        <h2>Frequently Asked Questions</h2>

        <div className="image_faqs_wrapper">
          <div className="image_section">
            <img src="/faqs.webp" alt="" />
          </div>

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



      </div>
    </FaqsWrapper>
  )
}

export default Faqs

const FaqsWrapper = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  position: relative;


  .container {
    position: relative;
    z-index: 1;
  }
  .image_faqs_wrapper{
    display: flex;
    gap: 10px;
    .image_section{
      width: 50%;
    position: relative;
      display: flex;
      justify-content: center;
    }
    .image_section img{
      transition: all 300ms ease;
      width: 100%;
      height: max-content;
      position: sticky;
      top: 20px;
      left: 0px;
      object-fit: contain;
      max-width: 450px;
      margin: 0 auto;
    }
    .accordian_wrapper{
      width: 50%;
      margin-top: 55px;
    }
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: -0.5px;
    animation: slideDown 0.8s ease-out;
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
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
      border-color: #EF5527;
      box-shadow: 0 8px 25px rgba(255, 102, 34, 0.12);
      transform: translateY(-2px);
    }

    &.active {
      border-color: #EF5527;
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
      color: #EF5527;
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
      background: linear-gradient(135deg, #EF5527 0%, #ff5500 100%);
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
    background: linear-gradient(135deg, #ff5500 0%, #EF5527 100%);
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

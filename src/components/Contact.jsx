import React from 'react'
import styled from 'styled-components'
import IconList from './IconList'
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import Map from './Map';
import Snake from './Snake';

const Contact = () => {
  return (
    <ContactSec>


      <div className="container contact_container">

        <div className="left_side_contact">
          <Snake />

          <h2>Let's Connect</h2>
          <p>Fill out this form to get started. Whether you have a script ready or just an idea, this helps us understand your goals, timeline, and vision so we can recommend the best approach and give you an accurate quote for your video.</p>
          <div className="icon_list_Wrapper">
            <IconList icon={<LuPhoneCall color='white' />} text={"+447956305106"} />
            <IconList icon={<IoIosMail color='white' />} text={"hello@motionwizz.com"} />
            <IconList icon={<FaMapLocationDot color='white' />} text={"BASE, Greenheys Ln, Manchester M15 6LR, United Kingdom"} />
          </div>

          <Map />
        </div>

        <div className="right_side_contact">

          <form action="">

            <div className="inputs">
              <div className="input">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' />
              </div>
              <div className="input">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' />
              </div>
            </div>

            <div className="input">
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Email' />
            </div>

            <div className="inputs">
              <div className="input">
                <label htmlFor="">Industry</label>
                <select name="" id="">
                  <option value="Industry" defaultChecked>Select Industry</option>
                  <option value="Educational">Educational</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="">Budget</label>
                <select name="" id="">
                  <option value="" defaultChecked disabled hidden>Select Budget Range</option>
                  <option value="1k-5k">$1K - $5K</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>
            </div>

            <div className="input">
              <label htmlFor="">Comments</label>
              <textarea placeholder='Tell us about your project...'></textarea>
            </div>

            <button type="submit" className="submit-btn">Get a Quote</button>

          </form>

        </div>

      </div>
    </ContactSec>
  )
}

export default Contact

const ContactSec = styled.section`
  padding: 80px 0;
  /* background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%); */
  position: relative;
  overflow: hidden;

  .left_side_contact {
    background: url("https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122690/Group_60_2_bgl8on.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  padding: 30px 20px 30px 20px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #eceaea;
}

.icon_list_Wrapper a{
    color: white;
}

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -15%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 102, 34, 0.1) 0%, transparent 70%);
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
    background: radial-gradient(circle, rgba(100, 150, 255, 0.05) 0%, transparent 70%);
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

  .contact_container {
    display: flex;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .left_side_contact {
    width: 50%;
    animation: slideInLeft 0.8s ease-out;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .left_side_contact h2 {
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
    line-height: 1.2;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    background-clip: text;
  }

  .left_side_contact > p {
    font-size: 16px;
    color: white;
    line-height: 1.8;
    margin-bottom: 40px;
    font-weight: 400;
    letter-spacing: 0.3px;
    
    
  }

  .icon_list_Wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 50px;
    max-width: 300px;
  }

  .right_side_contact {
    width: 50%;
    animation: slideInRight 0.8s ease-out;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .inputs {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: flex-start;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .inputs .input {
    width: 100%;
  }

  .input label {
    font-size: 14px;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  input, select {
    padding: 16px 24px;
    border-radius: 12px;
    border: 2px solid #2a2a3e;
    background: rgba(255, 255, 255, 0.05);
    color: #000;
    font-size: 15px;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    outline: none;

    &::placeholder {
      color: #7a7a8e;
    }

    &:focus {
      border-color: #ff6622;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 0 3px rgba(255, 102, 34, 0.1),
                  0 8px 24px rgba(255, 102, 34, 0.15);
      transform: translateY(-2px);
    }

    &:hover:not(:focus) {
      border-color: rgba(255, 102, 34, 0.5);
      background: rgba(255, 255, 255, 0.06);
    }
  }

  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 20px;
    padding-right: 45px;
    appearance: none;
  }

  textarea {
    min-height: 120px;
    resize: none;
    padding: 16px 24px;
    border-radius: 12px;
    border: 2px solid #2a2a3e;
    background: rgba(255, 255, 255, 0.05);
    color: #000;
    font-size: 15px;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    outline: none;

    &::placeholder {
      color: #7a7a8e;
    }

    &:focus {
      border-color: #ff6622;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 0 3px rgba(255, 102, 34, 0.1),
                  0 8px 24px rgba(255, 102, 34, 0.15);
      transform: translateY(-2px);
    }

    &:hover:not(:focus) {
      border-color: rgba(255, 102, 34, 0.5);
      background: rgba(255, 255, 255, 0.06);
    }
  }

  button, .submit-btn {
    padding: 18px 48px;
    background: linear-gradient(135deg, #ff6622 0%, #ff5500 100%);
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 30px rgba(255, 102, 34, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-top: 10px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(255, 102, 34, 0.4),
                  inset 0 -2px 8px rgba(0, 0, 0, 0.2);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-1px);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 60px 0;

    .contact_container {
      flex-direction: column;
      gap: 40px;
    }

    .left_side_contact,
    .right_side_contact {
      width: 100%;
    }

    .left_side_contact h2 {
      font-size: 36px;
    }

    .inputs {
      flex-direction: column;
      gap: 20px;
    }

    .inputs .input {
      width: 100%;
    }
  }
`
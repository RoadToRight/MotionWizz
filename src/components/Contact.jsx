import React from 'react'
import styled from 'styled-components'
import IconList from './IconList'
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import Map from './Map';

const Contact = () => {
  return (
    <ContactSec>

      <div className="container contact_container">
        <div className="left_side_contact">
          <h2>Let's Connect</h2>
          <p>Fill out this form to get started. Whether you have a script ready or just an idea, this helps us understand your goals, timeline, and vision so we can recommend the best approach and give you an accurate quote for your video.</p>
          <div className="icon_list_Wrapper">
            <IconList icon={<LuPhoneCall />} text={"+447956305106"} />
            <IconList icon={<IoIosMail />} text={"hello@motionwizz.com"} />
            <IconList icon={<FaMapLocationDot />} text={"BASE, Greenheys Ln, Manchester M15 6LR, United Kingdom"} />
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
                  <option value="Industry" defaultChecked>Industry</option>
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
                  <option value="Educational">Educational</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>


          </form>

        </div>

      </div>
    </ContactSec>
  )
}

export default Contact

const ContactSec = styled.section`
  .contact_container{
  display: flex;

  }
  .left_side_contact{
    width:50%;
  }
  .right_side_contact{
    width: 50%;
  }
  .inputs{
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  .inputs .input{
    width: 50%;
    
  }

  input,select{
    padding: 20px;
    border-radius: 30px;
  }
`
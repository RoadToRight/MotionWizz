import React from 'react'
import styled from 'styled-components'
import IconList from './IconList'
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <ContactSec>
      <div className="left_side_contact">
        <h2>Let's Connect</h2>
        <p>Fill out this form to get started. Whether you have a script ready or just an idea, this helps us understand your goals, timeline, and vision so we can recommend the best approach and give you an accurate quote for your video.</p>
        <div className="icon_list_Wrapper">
          <IconList icon={<LuPhoneCall />} text={"+447956305106"} />
          <IconList icon={<IoIosMail />} text={"hello@motionwizz.com"} />
          <IconList icon={<FaMapLocationDot />} text={"BASE, Greenheys Ln, Manchester M15 6LR, United Kingdom"} />
        </div>
      </div>
      <div className="right_side_contact"></div>
    </ContactSec>
  )
}

export default Contact

const ContactSec = styled.section`
  
`
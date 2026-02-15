import React from 'react'
import styled from 'styled-components'
import { MdOutlineCancel } from "react-icons/md";

const VideoPopup = ({ videoUrl, setPopupOpen }) => {
    return (
        <Popup>
            <MdOutlineCancel className='cancel_icon' onClick={() => setPopupOpen(false)} />

            <iframe
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen={true}
                loading="lazy"
            ></iframe>

        </Popup>
    )
}

export default VideoPopup


const Popup = styled.div`
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    .cancel_icon{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        color: white;
        cursor: pointer;
    }

`
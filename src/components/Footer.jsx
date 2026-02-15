import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Ready from "./readytoMake"

const Footer = () => {

  const menus = [
    { head: "Company", links: [{ label: "About", url: "#" }, { label: "Process", url: "#" }, { label: "Portfolio", url: "#" }, { label: "Talk To Us", url: "#" }] },

    { head: "Industries", links: [{ label: "Educational", url: "#" }, { label: "Whiteboard", url: "#" }, { label: "SAAS", url: "#" }, { label: "Infographics", url: "#" }, { label: "Explainer", url: "#" }, { label: "AI Products", url: "#" },] },

    { head: "Resources", links: [{ label: "Blogs", url: "#" }, { label: "Process", url: "#" }, { label: "Portfolio", url: "#" }, { label: "Talk To Us", url: "#" }, { label: "How we work", url: "#" }] },

    { head: "Join Us", links: [{ label: "Facebook", url: "#" }, { label: "LinkedIn", url: "#" }, { label: "YouTube", url: "#" }, { label: "Instagram", url: "#" }] }
  ]

  return (
    <FooterSec>
      <Ready />
      <div className="container">
        <div className="footer_top">
          <div className="sec logo_section">
            <img src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1770498867/Logo-2-1.png_1_uaok4j.webp" alt="Motion Wizz Logo" />
          </div>
          <div className="list_footer_menus">
            {menus?.map((item, idx) => (
              <div className="sec" key={idx}>
                <h5>{item.head}</h5>
                <ul>
                  {item?.links?.map(({ label, url }, i) => (
                    <li key={i}>
                      <Link to={url}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer_bottom">
          <div className="policies">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Sitemap</Link>
          </div>
          <div className="copyright">
            &copy; 2025 Motion Wizz. All Rights Reserved.
          </div>
        </div>
      </div>
    </FooterSec>
  )
}

export default Footer

const FooterSec = styled.footer`
  background: url("https://res.cloudinary.com/dp6b6emb9/image/upload/v1770500261/Footer_eyglgx.webp") no-repeat bottom/cover;
  padding: 80px 0 30px;
  color: #ddd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg , #ffffff,#ffffff,#ffffff,#ff5e00);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  } 
  .list_footer_menus{
    display: flex;
    justify-content: space-between;
    
    width: 100%;
  }

  .footer_top {
    display: flex;
    gap: 50px;
    justify-content: flex-start;
    margin-bottom: 40px;
  }

  .sec {


    h5 {
      color: #ff5e00; /* Vibrant accent */
      font-size: 1.25rem;
      margin-bottom: 15px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        a {
          text-decoration: none;
          color: black;
          font-size: 0.95rem;
          transition: color 0.3s ease;

          &:hover {
            color: #ff5e00;
          }
        }
      }
    }
  }

  .logo_section {
    img {
      width: 90px;
      height: 90px;
      object-fit: contain;
      filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.3));
    }
  }

  .footer_bottom {
    border-top: 1px solid black;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: black;

    .policies {
      display: flex;
      gap: 20px;

      a {
        color: black;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #ff5e00;
        }
      }
    }

    .copyright {
      margin-top: 10px;
      opacity: 0.7;
    }
  }

  @media (max-width:1024px){
    .list_footer_menus{
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media (max-width: 767px) {
    .footer_top {
      gap: 30px;
        grid-template-columns: repeat(1,1fr);
        padding-left: 20px;
        flex-direction: column;
    }
    .footer_bottom {
      flex-direction: column;
      gap: 10px;
      text-align: center;

      .policies {
        justify-content: center;
      }
    }
  }
`

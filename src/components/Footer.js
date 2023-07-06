import React from "react";
import { footers } from "../utils/footers";
import { BiWorld } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper className="footer-bg flex">
      <div className="footer-top container">
        <ul>
          {footers.map((footer) => (
            <li>{footer.name}</li>
          ))}
        </ul>
        <ul>
          {footers.map((footer) => (
            <li>{footer.name}</li>
          ))}
        </ul>
        <ul>
          {footers.map((footer) => (
            <li>{footer.name}</li>
          ))}
        </ul>
        <button>
          <BiWorld /> English
        </button>
      </div>
      <div className="footer-bottom container">
        <Link to="/" className="footer-brand text-uppercase ls-1 fw-8">
          <span>U</span>demyy
        </Link>
        <p>© 2023 Udemy, Inc.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  color: white;
  .container {
    ul {
      li {
        padding: 4px 0;
      }
    }
  }
  .footer-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  button {
    display: flex;
    gap: 8px;
    position: relative;
    align-items: center;
    border: none;
    cursor: pointer;
    padding: 0 1.2rem;
    justify-content: center;
    border: 1px solid white;
    height: 4rem;
    justify-content: flex-start;
    width: 14rem;
    color: white;
  }
`;

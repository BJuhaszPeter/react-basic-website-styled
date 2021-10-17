import React from 'react';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialMediaLogo, WebsiteRights, SocialMediaIcons, SocialMediaLink } from './FooterStyledComponents';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const FotterElements = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destination</FooterLink>
              <FooterLink to='/'>Sponsoreship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialMediaLogo onClick={toggleHome} to='/'>dolla</SocialMediaLogo>
            <WebsiteRights>dolla © {new Date().getFullYear()}</WebsiteRights>
            <SocialMediaIcons>
              <SocialMediaLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialMediaLink>
              <SocialMediaLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialMediaLink>
              <SocialMediaLink href='/' target='_blank' aria-label='Youtube'><FaYoutube /></SocialMediaLink>
              <SocialMediaLink href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialMediaLink>
              <SocialMediaLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin /></SocialMediaLink>
            </SocialMediaIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default FotterElements;

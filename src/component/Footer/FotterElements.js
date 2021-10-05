import React from 'react';
import classes from './FooterElements.module.css';
import { Link as LinkR } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const FotterElements = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterWrapper}>
        <div className={classes.FooterLinksContainer}>
          <div className={classes.FooterLinksWrapper}>
            <div className={classes.FooterLinkItems}>
              <h1 className={classes.FooterLinkTitle}>About Us</h1>
              <LinkR className={classes.FooterLink} to='/'>How it works</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Testimonials</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Careers</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Investors</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Terms of service</LinkR>
            </div>
            <div className={classes.FooterLinkItems}>
              <h1 className={classes.FooterLinkTitle}>Contact Us</h1>
              <LinkR className={classes.FooterLink} to='/'>Contact</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Support</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Destination</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Sponsoreship</LinkR>
            </div>
            <div className={classes.FooterLinkItems}>
              <h1 className={classes.FooterLinkTitle}>Videos</h1>
              <LinkR className={classes.FooterLink} to='/'>Submit Video</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Ambassadors</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Agency</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Influencer</LinkR>
            </div>
            <div className={classes.FooterLinkItems}>
              <h1 className={classes.FooterLinkTitle}>Social Media</h1>
              <LinkR className={classes.FooterLink} to='/'>Instagram</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Facebook</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Youtube</LinkR>
              <LinkR className={classes.FooterLink} to='/'>Twitter</LinkR>
            </div>
          </div>
        </div>
        <section className={classes.SocialMedia}>
          <div className={classes.SocialMediaWrapper}>
            <LinkR onClick={toggleHome} className={classes.SocialMediaLogo} to='/'>dolla</LinkR>
            <small className={classes.WebsiteRights}>dolla © {new Date().getFullYear()}</small>
            <div className={classes.SocialMediaIcons}>
              <a className={classes.SocialMediaLink} href='/' target='_blank' aria-label='Facebook'><FaFacebook /></a>
              <a className={classes.SocialMediaLink} href='/' target='_blank' aria-label='Instagram'><FaInstagram /></a>
              <a className={classes.SocialMediaLink} href='/' target='_blank' aria-label='Youtube'><FaYoutube /></a>
              <a className={classes.SocialMediaLink} href='/' target='_blank' aria-label='Twitter'><FaTwitter /></a>
              <a className={classes.SocialMediaLink} href='/' target='_blank' aria-label='Linkedin'><FaLinkedin /></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FotterElements;

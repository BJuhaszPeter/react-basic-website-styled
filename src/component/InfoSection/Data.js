import img1 from '../../images/svg-1.svg';
import img2 from '../../images/svg-2.svg';
import img3 from '../../images/svg-3.svg';

export const data = [
  {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: img1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
  },
  {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Unlimited Access',
    headline: 'Endless opportunities for financial growth',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: img2,
    alt: 'Pig',
    dark: false,
    primary: false,
    darkText: false
  },
  {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Personal counselling',
    headline: 'Meet your highly qualified personal adviser',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Contact Us',
    imgStart: true,
    img: img3,
    alt: 'Data',
    dark: false,
    primary: false,
    darkText: true
  }
]
;

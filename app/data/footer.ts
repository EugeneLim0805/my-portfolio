import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface FooterLink {
  name: string;
  url: string;
  icon: IconType;
}

export const footerLinks: FooterLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/uijinlim/',
    icon: FaLinkedin
  },
  {
    name: 'Email',
    url: 'mailto:uijinlim0805@gmail.com',
    icon: FaEnvelope
  },
  {
    name: 'GitHub',
    url: 'https://github.com/EugeneLim0805',
    icon: FaGithub
  }
];

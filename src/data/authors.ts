export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
  linkedin: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Syed Muzamil",
    slug: "syed-muzamil",
    image: "https://assets.blackkalu.com/blackkalu/logo",
    bio: "Syed Muzamil is a FullStack Web Developer. He is current working at a FinTech startup wealthup",
    linkedin: 'https://www.linkedin.com/in/syedmuzamilm'
  },
  {
    name: "Israel Famakinde",
    slug: 'isreal-famakinde',
    image: 'https://media.licdn.com/dms/image/D4D35AQHaMkON-Cp6Yg/profile-framedphoto-shrink_800_800/0/1683089377084?e=1703426400&v=beta&t=r1oIUXqaDf12Io7E1e37QAhRKPVOasIVG14soA0cBVc',
    bio: 'Frontend developer proficient in html, JavaScript, css, React, Tailwindcss, React Routers, Redux, python.',
    linkedin: 'https://www.linkedin.com/in/israel-famakinde-a138ab239'
  }
];

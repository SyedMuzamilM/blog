export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Syed Muzamil",
    slug: "syed-muzamil",
    image: "https://assets.blackkalu.com/blackkalu/logo",
    bio: "Syed Muzamil is a FullStack Web Developer. He is current working at a FinTech startup wealthup"
  }
];

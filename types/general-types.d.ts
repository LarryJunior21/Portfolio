export interface NavNode {
  name: string;
  type: string;
  href?: string;
  isOpen?: boolean;
  items?: [{ name: string; href: string }];
}

export interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  token_type: string;
}

export interface User {
  id: string;
  email: string;
  email_verified: boolean;
  role: string;
  created_at: string;
}

export const Routes = {
  PokePage: '/poke-gen',
  Home: '/',
  About: '/#about',
  Projects: '/#projects',
  Contact: '/#contact',
};

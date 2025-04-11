export interface NavNode {
  name: string;
  type: string;
  href?: string;
  isOpen?: boolean;
  items?: [{ name: string; href: string }];
}

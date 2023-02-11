export type ExperienceType = {
  title: string;
  company: string;
  start_date: string;
  end_date?: string;
  responsabilities: string[];
};

export type NavItemType = {
    href: string; value: string 
}

export type SkillsCardType = { Icon: JSX.Element; name: string }
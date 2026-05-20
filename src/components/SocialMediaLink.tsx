interface SocialMediaLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}
const SocialMediaLink = ({ title, href, icon }: SocialMediaLinkProps) => {
  return (
    <a href={href} target="_blank" className="flex cursor-pointer gap-2">
      {icon}

      <span className="hidden text-muted-foreground lg:inline">{title}</span>
    </a>
  );
};

export default SocialMediaLink;

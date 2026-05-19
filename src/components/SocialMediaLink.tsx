interface SocialMediaLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}
const SocialMediaLink = ({ title, href, icon }: SocialMediaLinkProps) => {
  return (
    <a href={href} target="_blank" className="flex gap-2 cursor-pointer">
      {icon}

      <span className="text-muted-foreground">{title}</span>
    </a>
  );
};

export default SocialMediaLink;

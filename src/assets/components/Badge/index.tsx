interface BadgeProps {
    name: string;
    icon: string[];
}

const Badge = ({
    name,
    icon,
}: BadgeProps) => {
  return (
    <div className="flex items-center h-7 rounded-full overflow-hidden text-sm font-medium w-min">
      <div className="bg-graySecondary text-white px-3 h-full flex items-center">
        {icon}
      </div>
      <div>
        <p className="bg-pinkPrimary text-white px-3 py-1 h-full flex items-center rounded-r-full">
            {name}
        </p>
      </div>
    </div>
  );
};

export default Badge;
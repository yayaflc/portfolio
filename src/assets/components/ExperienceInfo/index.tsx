
interface ExperienceInfoProps {
    title: string;
    text: string;
    date: string;
    icon: string[];
}

const ExperienceInfo = ({
    title,
    text,
    date,
    icon,
}: ExperienceInfoProps) => {
  return (
    <div className="flex items-start gap-4 p-4 w-fit max-w-full">
      <div className="text-pinkPrimary p-2 rounded-md">
        {icon}
      </div>
      <div className="text-left">
        <h1 className="text-blackSecondary font-bold text-lg">
            {title}
        </h1>
        <h2 className="text-blackSecondary font-semibold text-sd">
            {text}
        </h2>
        <p className="text-blackSecondary text-sm">
            {date}
        </p>
      </div>
    </div>
  );
};

export default ExperienceInfo;
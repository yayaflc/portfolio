
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
    <div className="flex items-start gap-4 p-4 w-fit max-w-full dark:text-whiteSecondary">
      <div className="text-pinkPrimary p-2 rounded-md dark:text-redPrimary">
        {icon}
      </div>
      <div className="text-left">
        <h1 className="text-blackSecondary font-bold text-lg dark:text-whiteSecondary">
            {title}
        </h1>
        <h2 className="text-blackSecondary font-semibold text-sd dark:text-whiteSecondary">
            {text}
        </h2>
        <p className="text-blackSecondary text-sm dark:text-whiteSecondary">
            {date}
        </p>
      </div>
    </div>
  );
};

export default ExperienceInfo;
import react from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const CompCard = ({ title, color, description, link }) => {
  const colorClasses = {
    blue: "bg-cardBlue",
    orange: "bg-cardOrange",
    pink: "bg-cardPink",
  };

  // Use the full class name from the map based on the bgColor prop
  const colorClass = colorClasses[color] || "bg-secondary"; // Default to "bg-primary" if no match

  return (
    <div
      className={`${colorClass} relative h-24 md:h-36 w-72 md:w-96 p-5 flex-shrink-0 `}
      style={{ boxShadow: "6px 6px rgba(0, 0, 0, 1)" }}
    >
      <h1 className="font-medium text-3xl w-5/6 pb-1">{title}</h1>
      <p className="w-5/6 font-medium invisible md:visible">{description}</p>
      <a className="absolute bottom-0 right-0  p-6" href={link}>
        <ArrowCircleDownIcon className="scale-250" />
      </a>
    </div>
  );
};

export default CompCard;

import react from "react";
import CompCard from "./CompCard";

const ElectricalCompetition = () => {
  const compData = [
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "orange",
    },
    {
        title: "Code Wars",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "orange",
      },
      {
        title: "Code Wars",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "orange",
      },
      {
        title: "Code Wars",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "orange",
      },
      {
        title: "Code Wars",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "orange",
      },
      {
        title: "Code Wars",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "orange",
      },
    
  ];

  return (
    <div className="max-w-screen-2xl m-auto pl-12 pr-12 mt-16">
      <div className="border-b border-gray-300 w-full mb-8"></div>
      <h1 className="pl-8 pb-8 text-primary font-extrabold text-5xl text-right pr-16">
      ELECTRICAL ENGINEERING
      </h1>

      <div className="border relative overflow-x-auto sm:overflow-x-hidden  ">
        <div className="flex flex-nowrap  md:flex-wrap  p-8 gap-16">
            {compData.map((comp) => (
            <CompCard
                title={comp.title}
                description={comp.description}
                color={comp.color}
                link={comp.link}
            />
            ))}
        </div>
    </div>
    </div>
  );
};

export default ElectricalCompetition;

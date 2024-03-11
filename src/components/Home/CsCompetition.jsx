import react from "react";
import CompCard from "./CompCard";

const CsCompetition = () => {
  const compData = [
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Code Wars",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
        title: "Code Wars",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
  ];

  return (
    <div className="max-w-screen-2xl m-auto pl-12 pr-12 ">
      <div className="w-full mb-8"></div>
      <h1 className="pl-8 pb-8 text-primary font-extrabold text-5xl">
        COMPUTER SCIENCE
      </h1>

      <div className="relative overflow-x-auto sm:overflow-x-hidden  ">
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
        {/* <img src={homestyle} alt="" className="scale-65 border absolute bottom-0 right-0" /> */}
    </div>
    </div>
  );
};

export default CsCompetition;

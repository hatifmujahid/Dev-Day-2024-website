import react from "react";

const TeamColor = ({ bgColor }) => {
  const colorClasses = {
    purple: "bg-purple",
    skyblue: "bg-skyblue",
    orange: "bg-orange",
  };
  console.log(bgColor);
  const colorClass = colorClasses[bgColor] || "bg-secondary";
  return <div className={`${colorClass} rounded-full h-24 w-24`}></div>;
};

const ExtendedTeam = () => {
  const extended = [
    {
      color: "purple",
      title: "Participant Relations",
      members: [
        {
          position: "Head",
          id: "22k-1234",
          name: "John Wick1",
        },
        {
          position: "Co-Head",
          id: "22k-1234",
          name: "John Wick2",
        },
      ],
    },

    {
      color: "skyblue",
      title: "Guest Relations",
      members: [
        {
          position: "Head",
          id: "22k-1234",
          name: "John Wick1",
        },
        {
          position: "Co-Head",
          id: "22k-1234",
          name: "John Wick2",
        },
        {
          position: "Mentor",
          id: "22k-1234",
          name: "John Wick3",
        },
      ],
    },

    {
      color: "orange",
      title: "Animations",
      members: [
        {
          position: "Head",
          id: "22k-1234",
          name: "John Wick1",
        },
        {
          position: "Co-Head",
          id: "22k-1234",
          name: "John Wick2",
        },
        {
          position: "Mentor",
          id: "22k-1234",
          name: "John Wick3",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-11/12">
        <div className="m-16 grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {extended.map((team) => {
            return (
              <>
              <div className="min-w-[282px]">
                <div className="p-4 rounded-3xl bg-slate-50 flex flex-row items-start">
                  <div>
                    <TeamColor bgColor={`${team.color}`} />
                  </div>
                  <div className="ml-12">
                    <h1 className="pt-3 text-5xl font-bold">{team.title}</h1>
                    {team.members.map((member) => {
                      return (
                        <>
                          <div className="pt-6">
                            <p className="text-3xl font-semibold">
                              {member.position}
                            </p>
                            <p className="pt-1 text-3xl text-slate-500 font-semibold">
                              {member.id} {member.name}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExtendedTeam;

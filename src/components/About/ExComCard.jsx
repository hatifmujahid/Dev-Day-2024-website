import react from "react";

const ExComCard = ({ imgUrl, title, name }) => {
  return (
    <div
      className={`
        bg-primary
        relative
        border-4 border-black
        row-span-1
        col-span-1
        h-[300px] w-[300px]
        p-4

        md:h-[375px] md:w-[375px]
        md:p-6

        lg:h-[450px] lg:w-[450px]
        lg:p-8
    `}
    >
      <img className="" src={imgUrl} alt={`${title} ${name}`} />
      <div
        className={`bg-[#006984] absolute w-full h-auto border-4 border-black pt-4 pb-4 pl-3
        bottom-4 right-4

        md:pt-5 md:pb-5 md:pl-4
        
        lg:pt-6 lg:pb-6 lg:pl-5
      `}
      >
        <p
          className={`
          text-white
            text-xl font-normal

            md:text-2xl md:pb-2

            lg:text-2xl lg:pb-4
        `}
        >
          {title}
        </p>
        <p
          className={`
          text-white
            text-xl font-bold

            md:text-3xl

            lg:text-3xl
        `}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ExComCard;

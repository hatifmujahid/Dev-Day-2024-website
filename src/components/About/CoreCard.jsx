import { alertTitleClasses } from "@mui/material";
import react from "react";

const ExComCard = ({ imgUrl, title, name }) => {
  return (
    <div
      className={`
        bg-primary
        border-4 border-black
        relative
        h-[300px] w-[300px]
        p-4

        md:h-[375px] md:w-[375px]
        md:p-6

        lg:h-[450px] lg:w-[450px]
        lg:p-8
    `}
    >
      <img
        className={`
            absolute
            m-auto
            border-4 border-black
            rounded-full
            left-0
            bottom-0
            top-[-40px]
            object-cover
        `}
        src={imgUrl}
        alt={`${title} ${name}`}
      />
      <div
        className={`
            absolute
            h-auto
            w-full
            bottom-0
            left-0
            text-center
        `}
      >
        <p
          className={`

            text-3xl text-white font-bold

            md:text-5xl

            lg:text-7xl
        `}
        >
          {name}
        </p>
        <p
          className={`
            text-2xl text-white font-normal

            md:text-4xl md:pb-2

            lg:text-6xl lg:pb-4
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ExComCard;

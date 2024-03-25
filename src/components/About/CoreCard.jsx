import { alertTitleClasses } from "@mui/material";
import react from "react";

const ExComCard = ({ imgUrl, title, name }) => {
  return (
    <div
      className={`
        mt-10
        mb-10
        bg-gradient-to-b from-[#0075AF] to-[#003149]
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
      <div className="">
      <img
        className={`
            absolute
            m-auto
            w-60
            border-4 border-black
            rounded-full
            left-28
            bottom-34
            top-[-40px]
            md:h-60
            sm:h-52
        `}
        src={imgUrl}
        alt={`${title} ${name}`}
      />
      </div>
      {/* <div className="absolute inset-0">
        <img
          className="object-fill w-full h-full rounded-t-full"
          src={imgUrl}
        />
      </div> */}
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

            lg:text-2xl
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

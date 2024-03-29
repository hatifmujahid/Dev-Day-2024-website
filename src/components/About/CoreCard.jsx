import { alertTitleClasses } from "@mui/material";
import react from "react";

const ExComCard = ({ imgUrl, title, name }) => {
  return (
    <div
      className={`
        mt-10
        mb-10
        bg-gradient-to-b from-[#0075AF] to-[#003149]
        relative
        min-h-[160px] w-[160px]
        p-4

        md:h-[300px] md:w-[300px]
        md:p-6

        lg:h-[325px] lg:w-[325px]
        lg:p-8
        rounded-2xl
    `}
    >
      <div className="">
      <img
        className={`
            object-cover
            w-32
            h-32

            md:w-60
            rounded-full
            mx-auto
            mt-[-80px]

            md:mt-[-100px]
            md:h-60
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
            text-center
            flex flex-col justify-center mt-5 items-center
        `}
      >
        <p
          className={`

            text-lg text-white font-bold

            md:text-3xl

            lg:text-3xl
        `}
        >
          {name}
        </p>
        <p
          className={`
            text-sm text-white font-normal

            md:text-lg md:pb-2

            lg:text-lg lg:pb-4
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ExComCard;

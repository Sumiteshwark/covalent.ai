import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { AboutHomeData } from "../../data/data";

const AboutHome = () => {
  return (
    <div className="bg-primary p-6 lg:p-10">
      <div className="text-2xl lg:text-4xl text-white font-bold">About</div>
      <div className="text-white text-sm md:text-base mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam
        nisi, fringilla nec sem at, bibendum aliquam urna. Proin sem magna,
        porttitor sit amet rutrum et, rhoncus non mauris. Integer eget magna
        leo. Duis ac augue massa. Vivamus commodo sagittis tortor ut varius.
        Duis lectus lacus, vestibulum vel aliquet vitae, volutpat at mi. Fusce
        id est in metus dictum mollis. Aenean eu vulputate quam. Proin eros
        dolor, dictum a arcu id, dapibus scelerisque diam.
      </div>
      <div className="my-12 md:my-20 lg:my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AboutHomeData.map((data, index) => (
          <div key={index} className="flex flex-row gap-4 justify-start items-start">
            <div className="bg-white p-2 rounded-md mt-1">
              <IoRocketOutline />
            </div>
            <div>
              <div className="text-white text-xl">{data.heading}</div>
              <div className="text-white text-sm md:text-base mt-2">
                {data.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHome;

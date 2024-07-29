import React from "react";
import { Button } from "@material-tailwind/react";
import { BlogHomeData } from "../../data/data";

const BlogHome = () => {
  return (
    <div className="bg-[#1E1E1E] p-6 lg:p-10 lg:py-16">
      <div className="text-2xl lg:text-4xl text-white font-bold mb-8">Blog</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {BlogHomeData?.map((data, index) => (
          <div
            key={index}
            className="bg-[#292929] flex flex-col justify-between rounded-2xl"
          >
            <div>
              <img
                className="rounded-t-2xl h-[200px] md:h-[250px] w-full"
                src={data.image}
              ></img>
              <div className="px-4 pt-8">
                <div className="text-xl text-white font-bold">{data.title}</div>
                <div className="flex flex-row gap-2">
                  {data?.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="p-1 bg-secondary mt-4 text-white w-fit rounded-md text-xs"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="text-gray-500 mt-4">{data.content}</div>
              </div>
            </div>
            <div className="px-4 pb-8 mt-4">
              <Button className="bg-green-400">View</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;

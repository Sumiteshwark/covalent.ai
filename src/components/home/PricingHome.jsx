import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { PricingHomeData } from "../../data/data";

const PricingHome = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-purple-200 to-indigo-300 p-6 lg:p-10 lg:py-16">
      <div className="text-2xl lg:text-4xl text-black font-bold mb-8">Pricing</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {PricingHomeData.map((data, index) => (
          <div key={index} className="bg-white rounded-md">
            <div className="bg-blue-200 rounded-t-md p-4 md:p-8">
              <div className="font-bold text-xl">{data.heading}</div>
              <div className="mt-2 text-sm text-gray-700">{data.content}</div>
            </div>
            <div className="p-4 md:p-8">
              <div className="flex flex-row items-baseline gap-2">
                <div className="text-4xl font-bold">{data.price}</div>
                <div className="text-gray-500 text-sm">/ user / month</div>
              </div>
              <div className="my-4">
                <Button className="bg-secondary w-full" >
                  get started
                </Button>
              </div>
              {
                data.features.map((feature, index) => (
                  <div className="flex flex-row items-center gap-4 my-2" key={index}>
                    <div className="text-green-200">
                      <FaRegCheckCircle />
                    </div>
                    <div className="text-gray-700">{feature}</div>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingHome;
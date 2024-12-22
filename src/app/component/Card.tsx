'use client';

import React from 'react';
import Image from 'next/image';

const Card = (props: any) => {
  return (
    <div className="w-full max-w-[300px] h-96 border rounded-xl bg-[#FFFFFF] px-6 py-6 flex flex-col justify-between md:6/12">

      {/* Top icon and header */}
      <div className="flex justify-between ">
        <p className="font-semibold font-jakarta text-lg">{props.name}</p>
        <Image
          src={props.heart}
          alt="heart"
          width={24}
          height={24}
        />
      </div>

      <div>
        <p className="text-[#90A3BF] font-jakarta text-sm">{props.type}</p>
      </div>

      {/* Image Section */}
      <div className="relative mt-4">
        <Image
          src={props.car}
          alt="car"
          width={232}
          height={72}
          className="mx-auto"
        />
        <Image
          src="/shadow.svg"
          alt="shadow"
          width={304}
          height={80}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </div>

      {/* Icons and features */}
      <div className="flex justify-between mt-4">
        {/* Gas */}
        <div className="text-[#90A3BF] flex justify-center items-center">
          <Image
            src="/gas-station.svg"
            alt="gas station"
            width={24}
            height={24}
          />
          <p className="text-[#90A3BF] text-sm ml-1">{props.liter}</p>
        </div>

        {/* Manual */}
        <div className="text-[#90A3BF] flex justify-center items-center">
          <Image
            src="/mannual.svg"
            alt="manual"
            width={24}
            height={24}
          />
          <p className="text-[#90A3BF] text-sm ml-1">Manual</p>
        </div>

        {/* People */}
        <div className="text-[#90A3BF] flex justify-center items-center">
          <Image
            src="/people.svg"
            alt="people"
            width={24}
            height={24}
          />
          <p className="text-[#90A3BF] text-sm ml-1">{props.people} People</p>
        </div>
      </div>

      {/* Price and Rent Now Button */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex-col">
          <p className="text-[#1A202C] font-jakarta font-bold text-lg">
            ${props.price} <span className="text-xs text-[#90A3BF]">day</span>
          </p>
          <p className="text-[#90A3BF] text-sm line-through">{props.discount}</p>
        </div>

        <button className="bg-[#3563E9] text-[#FFFFFF] px-4 py-2 rounded-[4px] w-[116px] h-[44px] text-center">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default Card;

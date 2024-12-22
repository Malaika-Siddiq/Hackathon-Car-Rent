'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <footer className="w-full  bg-[#ffffff] px-6 sm:px-10 lg:px-16">
        {/* Footer Content */}
        <div className="w-full flex flex-wrap justify-between pb-4 border-b-[1px] border-[#c3d4e9]">
          {/* Left Section */}
          <div className="w-full md:w-1/3 lg:w-[292px] mb-6 md:mb-0">
            <div className="flex flex-col items-start gap-4">
              <Image src="/logo.svg" alt="logo" width={148} height={44} />
              <p className="text-[#13131399] font-jakarta">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
          </div>

          {/* Right Sections */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-8">
            {/* About Section */}
            <div className="w-1/2 md:w-[152px]">
              <h1 className="text-[#1A202C] font-semibold text-xl mb-4">About</h1>
              <ul className="text-[#13131399] space-y-2">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>

            {/* Community Section */}
            <div className="w-1/2 md:w-[152px]">
              <h1 className="text-[#1A202C] font-semibold text-xl mb-4">Community</h1>
              <ul className="text-[#13131399] space-y-2">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            {/* Socials Section */}
            <div className="w-1/2 md:w-[152px]">
              <h1 className="text-[#1A202C] font-semibold text-xl mb-4">Socials</h1>
              <ul className="text-[#13131399] space-y-2">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-wrap justify-between items-center mt-6">
          {/* Left Text */}
          <div className="text-center md:text-left text-base font-semibold leading-6 text-[#1A202C] w-full md:w-auto mb-4 md:mb-0">
            ©2022 MORENT. All rights reserved
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 w-full md:w-auto">
            <div className="text-base font-semibold leading-6 text-[#1A202C]">
              Privacy & Policy
            </div>
            <div className="text-base font-semibold leading-6 text-[#1A202C]">
              Terms & Condition
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

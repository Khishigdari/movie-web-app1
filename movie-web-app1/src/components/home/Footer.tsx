import React from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mt-[51px] py-10 px-20 bg-[#4338CA] text-[14px] leading-5 text-[#FAFAFA] flex justify-between">
      <div>
        <Link href={"/"}>
          <Image src={"/images/Logo.svg"} alt="" width={92} height={20} />
        </Link>

        <p className="mt-3">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-24">
        <div className="mb-[64px]">
          <p>Contact Information</p>
          <div className="flex items-center gap-3 mb-6 mt-3">
            <HiOutlineMail className="w-4 h-4" />
            <div>
              <p className="font-[500]">Email:</p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone className="w-4 h-4" />
            <div>
              <p className="font-[500]">Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div>
          <p>Follow us</p>
          <div className="font-[500] flex gap-3 mt-3">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

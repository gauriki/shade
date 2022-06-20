import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex bg-[#E3EEF8] justify-between p-18">
      <div className="p-20 ">
        <p className="font-normal text-[16px] text-[#666666]">
          Big. small, online, offline, local. Size doesn't<br></br>
          matter. We work on diverse projects for top<br></br>
          brands as well as for cool startups.
        </p>
        <div className="flex">
          <GrFacebookOption className="my-4 mx-2" />
          <AiOutlineTwitter className="my-4 mx-2" />
          <AiOutlineGoogle className="my-4 mx-2" />
        </div>
      </div>
      <div className="">
        <p className="font-bold text-sm text-[#666666] px-2 py-8 pr-6">
          Help menu
        </p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">About</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Features</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Works</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Career</p>
      </div>
      <div className="">
        <p className="font-bold text-sm text-[#666666] px-2 py-8 pl-4">
          Support
        </p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Contact</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Help & Support</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">
          Privacy and Policy
        </p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">
          Terms & Conditions
        </p>
      </div>
      <div className="">
        <p className="font-bold text-sm text-[#666666] px-2 py-8 pl-4">
          Products
        </p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Shades Pro</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Essentiol Blocks</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">Avasta Dash</p>
        <p className="text-[#1f1f1f] font-bold text-[15px]">
          VApp Landing Page
        </p>
      </div>
    </footer>
  );
};

export default Footer;

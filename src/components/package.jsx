
import Pricing from "./pricing";


const Package = () => {
  return (
    <section className="bg-[#182E47] text-center flex justify-center	items-center flex-col">
      <p className="font-bold text-[15px] text-[#ffffff] py-6 ">
        IT'S TIME TO TASTE IT
      </p>
      <p className="font-bold text-[48px] text-[#ffffff]">
        Ready to use our service? <br></br>
        Choose a package.
      </p>
      <Pricing/>
    </section>
  );
};

export default Package;

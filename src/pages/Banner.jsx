import { useState } from "react";
import banner from "../../public/Images/Earpods.png";
import arrow from "../../public/icons/servicebackarrow.png";
import plus from "../../public/icons/plus.png";
const Banner = () => {
  const Banner = [
    {
      img: banner,
    },
    {
      img: banner,
    },
    {
      img: banner,
    },
    {
      img: banner,
    },
    {
      img: banner,
    },
    {
      img: banner,
    },
  ];

  const [detailsPopup, setDetailsPopup] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  return (
    <div className="w-[100vw] h-full p-4">
      <div className="flex justify-between  mt-5 items-center">
        <h1 className="text-[36px] font-medium  ">Banner</h1>
        <div className="w-[43px] h-[39.16px] rounded-md bg-[#571f6f] flex items-center justify-center">
          <img
            src={plus}
            className="w-[18px] h-[18px] cursor-pointer"
            onClick={() => setDetailsPopup(true)}
          />
        </div>
      </div>

      <div className=" flex flex-wrap gap-2 mt-4 ">
        {Banner.map((pic, index) => (
          <div className="" key={index}>
            <img
              src={pic.img}
              alt={pic.title}
              className="h-[172px] w-[350px]"
            />
          </div>
        ))}
      </div>
      {detailsPopup && (
        <div className="fixed top-0 left-0 inset-0 bg-black/40 flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-[463px] h-auto md:h-[483px] rounded-md px-4 py-2">
            <div className="flex gap-2 p-4">
              <p
                className="cursor-pointer w-[31px] h-[32px] rounded-lg flex items-center justify-center"
                onClick={() => setDetailsPopup(false)}
              >
                <img src={arrow} className="w-full h-full" alt="Close" />
              </p>
              <h1 className="font-medium text-xl md:text-2xl">
                Add New Banner
              </h1>
            </div>
            <div className="border h-36 mt-2 border-[#000000] rounded-lg p-6 flex flex-col items-center w-full md:w-[370px] justify-center mb-4 mx-auto">
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <span className="text-gray-500 text-lg">
                  {selectedPdf ? `{${selectedPdf.name}}` : "Upload Document"}
                </span>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  className={`${selectedPdf !== undefined ? "hidden" : ""}`}
                />
              </label>
            </div>
            <div className="flex flex-col px-4 md:px-7 justify-center">
              <label className="text-lg md:text-xl font-medium">Name</label>
              <input
                type="text"
                className="w-full h-10 border border-[#000000] outline-none mt-1 px-2 rounded-lg"
              />
              <label className="text-lg md:text-xl font-medium">
                Website URL
              </label>
              <input
                type="url"
                className="w-full h-10 mt-1 border border-[#000000] outline-none rounded-lg px-2"
              />
              <div className="flex items-center justify-center">
                <button className="bg-[#571F6F] text-lg md:text-xl text-white h-10 w-full rounded-lg mt-5">
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;

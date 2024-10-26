const ContactUs = () => {
  return (
    <div className="bg-[#F6F6F6] w-full h-full rounded-md p-4">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="font-medium text-[24px] md:text-[32px]">Contact Us</h1>
        <button className="w-[100px] h-[35px] rounded-3xl bg-[#571f6f] text-white font-medium text-[14px] md:text-[15px] mt-4 md:mt-0">
          Update
        </button>
      </div>
      <p className="text-[14px] md:text-[16px] mt-5 w-full md:w-[675px]">
        Lorem ipsum dolor sit amet. In doloribus inventore aut tenetur autem aut
        excepturi harum ut fuga error. Sed nostrum rerum non consectetur esse ut
        aliquam accusamus quo quod aliquid ut tenetur internos eos sunt aperiam
        et iure consequuntur. Vel nostrum dolorem est voluptates deserunt et
        dolorum sint et nobis facere. Qui quae obcaecati non delectus velit aut
        dolor perspiciatis sed iste earum aut mollitia velit.
      </p>
      <div className="border border-[#B5B8BF] w-full md:w-[675px] mt-7 bg-white px-5 h-[53px] text-[16px] md:text-[20px] flex items-center justify-start rounded-xl">
        <span className="text-black">Email to :</span>
        <span className="text-[#571F6F] ml-2">
          <u>Onereducation@gmail.com</u>
        </span>
      </div>
      <div className="border border-[#B5B8BF] w-full md:w-[675px] mt-3 bg-white px-5 h-[53px] text-[16px] md:text-[20px] flex items-center justify-start rounded-xl">
        <input
          type="text"
          className="w-full text-black outline-none placeholder:text-black"
          placeholder="Subject"
        ></input>
      </div>
      <div>
        <textarea
          id="message"
          rows="4"
          className="block p-2 w-full md:w-[675px] text-sm md:text-[16px] mt-3 outline-none border border-[#B5B8BF] rounded-xl placeholder:text-black placeholder:text-[16px] md:placeholder:text-[20px] px-5"
          placeholder="Message"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactUs;

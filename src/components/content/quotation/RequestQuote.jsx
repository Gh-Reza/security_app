function Form() {
  return (
    <form action="#">
      <div className="space-y-4 text-[#707070] px-3">
        <input
          type="text"
          className="mt-[30px] w-full leading-[50px] px-[20px] h-[50px] border border-[#e1e1e1] outline-brand_color font-light"
          placeholder="Name*"
        />
        <input
          type="text"
          className="w-full px-[20px] h-[50px] border border-[#e1e1e1]  outline-brand_color font-light"
          placeholder="Subject*"
        />
        <textarea
          name="message"
          className="w-full p-[20px] min-h-[145px] border border-[#e1e1e1] outline-brand_color font-light "
          placeholder="Your Message*"
        />
        <input
          type="submit"
          className="uppercase w-full px-[20px] h-[50px] bg-brand_color text-white font-semibold text-[14px] cursor-pointer hover:opacity-75 transition-all duration-500"
          value="Submit inquiry"
        />
      </div>
    </form>
  );
}

export default function RequestQuoteForm() {
  return (
    <div className="px-3 form-container lg:w-1/2">
      <div className="form-wrapper bg-[#f4f4f4] py-[65px] px-[60px]">
        <h2 className="text-[#3d3d3d] text-[30px] font-semibold leading-10 mb-2 text-center">
          Request a Quote
        </h2>
        <Form />
      </div>
    </div>
  );
}

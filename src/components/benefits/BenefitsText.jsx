import CircleBtn from '../common/CircleBtn';

export default function BenefitsTextContent() {
  return (
    <div className="">
      <h2
        className="relative capitalize text-[30px] text-[#1d2736]
                      font-semibold leading-8
                      lg:leading-[50px] lg:text-[36px]
                      pb-5
                      before:w-[120px] before:h-[2px]
                    before:bg-brand_color before:content-['']
                      before:absolute before:left-0 before:bottom-0
                      after:w-[60px] after:h-[2px]
                    after:bg-[#333] after:content-['']
                      after:absolute after:left-0 after:bottom-0
                    "
      >
        We Have 21 Years of Experience
      </h2>
      <p className="mt-[30px] mb-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimg
        veniam, quis nostrud exerci ullamco laboris nisi ut aliquip ex ea commo
        consequat. Duis aute irure dolor
      </p>
      <p className="mt-[30px] mb-4 text-justify">
        in reprehen in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur Excepteur sint occaecat cupidata non proident.
      </p>
      <div className="mt-[20px]">
        <CircleBtn link="#" text="contact us" p={30} />
      </div>
    </div>
  );
}

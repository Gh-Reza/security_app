import c01 from '../../../../assets/images/icon/c-01.png';

function ResonCard() {
  return (
    <div className="mt-3">
      <div className="icon-wrapper float-left mt-[10px] mr-[22px]">
        <img className="max-w-full" src={c01} alt="Reason card" />
      </div>
      <div className="overflow-hidden content">
        <h4 className="text-[#3d3d3d] text-2xl font-semibold mb-2 leading-8">
          24/7 Services
        </h4>
        <p className="max-w-[390px] text-[#585757] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod
          tempor incididunt ut labor et dolore magna aliqua.
          {' '}
        </p>
      </div>
    </div>
  );
}

export default function Reasons() {
  return (
    <div>
      <p className="max-w-[530px] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore
      </p>
      <ResonCard />
      <ResonCard />
      <ResonCard />
    </div>
  );
}

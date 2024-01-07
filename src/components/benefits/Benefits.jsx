import BenefitsTextContent from './BenefitsText';
import BenefitsVid from './BenefitsVideo';

export default function Benefits() {
  return (
    <div className="py-[120px] relative">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center px-4">
          <div className="w-full lg:w-1/2">
            <BenefitsTextContent />
          </div>
          <div className="w-full lg:w-1/2">
            <BenefitsVid />
          </div>
        </div>
      </div>
    </div>
  );
}

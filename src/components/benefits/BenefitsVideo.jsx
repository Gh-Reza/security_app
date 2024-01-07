import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import thumb from '../../assets/images/about/about-01.png';
import VideoPopUp from './videoPopup/VideoPopup';

export default function BenefitsVid() {
  const [popupSwitch, setPopupSwitch] = useState({ link: '', status: false });
  const embedSrc = '//www.youtube.com/embed/G_G8SdXktHg';

  const switchHandler = (l, s) => {
    setPopupSwitch({ link: l, status: s });
  };

  return (
    <>
      <div className="relative mt-[40px] lg:mt-0">
        <img src={thumb} alt="thumb" className="max-w-full mx-auto" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <button
            className="w-[100px] h-[100px] rounded-full
                          text-[28px] text-white
                          flex items-center justify-center bg-brand_color
                          outline-none
                          "
            onClick={() => switchHandler(embedSrc, true)}
            aria-label="play video"
            type="button"
          >
            <FaPlay fill="white" />
          </button>
        </div>
      </div>
      <div className={popupSwitch.status ? 'block' : 'hidden'}>
        <VideoPopUp switchHandler={switchHandler} embedSrc={popupSwitch.link} />
      </div>
    </>
  );
}

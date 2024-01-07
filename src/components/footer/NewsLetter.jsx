import { FaPaperPlane } from 'react-icons/fa';
import FtTitle from './FtCardTitle';
import SocialMedia from './FtSocialMedia';

function SubscribeNewsbox() {
  return (
    <div className="ft_newsletter_box my-[17px] relative">
      <form action="">
        <input
          type="email"
          className="w-full leading-[50px] pl-[10px] pr-[50px] h-[36px] border border-[#e1e1e1] outline-none font-light text-[#222]"
          placeholder="Emial*"
          name="email"
          autoComplete="off"
        />
        <button
          // CHECKME: Note sure about this aria-label
          aria-label="button"
          type="submit"
          className="submit bg-brand_color text-white h-full px-[13px] absolute top-0 right-0"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default function Newsletter() {
  return (
    <div className="text-left ft_wrapper">
      <FtTitle normal="newsletter" highlight="now" />
      <div className="content mt-[30px] text-[14px] leading-[25px]">
        <p>There are many variations ofof reavalable, but the majority </p>
        <SubscribeNewsbox />
        <SocialMedia />
      </div>
    </div>
  );
}

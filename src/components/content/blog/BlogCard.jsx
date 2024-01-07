import { FaRegCalendarCheck } from 'react-icons/fa';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import thumb01 from '../../../assets/images/blog/thum-01.jpg';
import CircleBtn from '../../common/CircleBtn';

function DateUserBlog() {
  return (
    <ul className="flex mb-[10px] items-center">
      <li className="mr-[15px] text-[14px]">
        <FaRegCalendarCheck className="inline-block mr-[3px] text-brand_color -mt-1" />
        <span className=""> Sep 14, 2018 </span>
      </li>
      <li className="mr-[15px] text-[14px]">
        <RiAccountPinCircleFill className="inline-block mr-[3px] text-brand_color -mt-1" />
        {/* FIXME: The value of href must be fixed */}
        <a href="https://...">
          By:
          <span className="transition-all duration-500 hover:text-brand_color ">
            {' '}
            Admin
            {' '}
          </span>
        </a>
      </li>
    </ul>
  );
}

export default function BlogCard() {
  return (
    <div className="blog_card_wrapper mx-[15px] mb-[30px]">
      <div className="blog_thumb">
        {/* FIXME:The value of href must be fixed */}
        <a href="https....." className="block">
          <img className="w-full" src={thumb01} alt="Blog" />
        </a>
      </div>
      <div className="blog_content text-[#1d2736] pt-[20px]">
        <h4 className="font-semibold pt-1 mb-1 text-[24px] leading-8 hover:text-brand_color transition-all duration-500">
          {/* FIXME: The value of href must  fixed */}
          <a href="https...">Webcam Security sit amet.</a>
        </h4>
        <DateUserBlog />
        <p className="mb-4 text-justify max-w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eius
          tempor incididu ut labore et dolore
        </p>
        <div className="circle_btn">
          <CircleBtn link="#" text="read more" p={30} />
        </div>
      </div>
    </div>
  );
}

import MainSectionTitle from '../../common/MainSectionTitle';
import BlogSlider from './BlogSlider';

export default function Blogs() {
  return (
    <div className="py-[120px] relative">
      <section className="container mx-auto md:px-12">
        <div className="blogs_wrapper">
          <MainSectionTitle title="latest blog" />
        </div>
        <div className="blog_slider">
          <BlogSlider />
        </div>
      </section>
    </div>
  );
}

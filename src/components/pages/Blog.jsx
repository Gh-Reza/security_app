import CommonHero from '../hero/CommonHero';
import BlogCard from '../content/blog/BlogCard';
import MainSectionTitle from '../common/MainSectionTitle';

export default function Blog() {
  return (
    <section>
      <CommonHero text="Blog" />
      <div className="py-24 content md:px-12">
        <MainSectionTitle title="Latest Posts" />
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
}

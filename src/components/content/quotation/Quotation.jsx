import ChooseUs from './chooseUs/ChooseUs';
import RequestQuoteForm from './RequestQuote';

export default function Quotation() {
  return (
    <section className="choose_us pt-[120px] pb-[90px]">
      <div className="container mx-auto md:px-12">
        <div className="flex flex-wrap items-center">
          <ChooseUs />
          <RequestQuoteForm />
        </div>
      </div>
    </section>
  );
}

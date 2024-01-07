import ChooseUs from './chooseUs/ChooseUs';
import RequestQuoteForm from './RequestQuote';

export default function Quotation() {
  return (
    <section className="choose_us pt-[120px] pb-[90px]">
      <div className="container px-12 mx-auto">
        <div className="flex flex-wrap items-center">
          <ChooseUs />
          <RequestQuoteForm />
        </div>
      </div>
    </section>
  );
}

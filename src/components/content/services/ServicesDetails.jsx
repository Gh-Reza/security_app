export default function ServiceDetails() {
  const details = {
    img: '/assets/images/services/service-01.jpg',
    id: 1,
    title: 'webcam security',
    info: 'Access complete visability through your phone or device. We provide a complete range of security solutions, day and night vision to improve security &amp; enhance capabilities. Access complete visability through your phone or device. We provide a complete range of security solutions, day and night vision to improve security &amp; enhance capabilities. Access complete visability through your phone or device. We provide a complete range of security solutions, day and night vision to improve security &amp; enhance capabilities.',
  };

  return (
    <div className="container md:px-6">
      <div>
        <img src={details.img} alt={details.title} className="w-full" />
      </div>
      <div className="py-6">
        <h2 className="capitalize">{details.title}</h2>
        <p className="leading-7">{details.info}</p>
      </div>
    </div>
  );
}

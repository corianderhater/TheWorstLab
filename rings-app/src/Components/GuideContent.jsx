import React from "react";
import "../index.scss";

function GuideContent() {
  return (
    <>
      <div className="guide-container">
        <div className="guide-item">
          <h1>Welcome to the shopping guide: </h1>
          <h5>
            It is important for me to clear things out before order so you are
            the best informed. And if you are not sure, please, don't hesitete
            to ask me directly.
          </h5>
        </div>
        <div className="guide-item guide-scroll">
          <h3>How to order</h3>
          <p>
            Select “Rings” tab from the bottom menu. Select the size and contact
            me via Instagram, telephone number or WhatsApp.
          </p>
          <h3>What is the production waiting time?</h3>
          <p>
            Right now we are in the pre-order phase. We will manufacture your
            ring/s by the end of February. We can promise shipping before March
            2023. It's worth the wait! And the reason for the waiting time is
            that we have production vacations in January.
          </p>
          <h3>Shipping</h3>
          <p>
            We ship globally from Gdańsk, Poland. Estimated delivery time /
            Price:
            <ul>
              <li>Poland: under 7 days from shipping / 30 PLN</li>
              <li>Europe: under 14 days from shipping / 15 EUR</li>
              <li>Outside of Europe: under 30 days from shipping / Depends</li>
            </ul>
          </p>
          <h3>Guarantee</h3>
          <p>
            We will do our best to make you happy with the purchase. And of
            course we apply to EU Guarantee and returns law: "Under EU rules, a
            trader must repair, replace, reduce the price or give you a refund
            if goods you bought turn out to be faulty or do not look or work as
            advertised. If you bought a product or a service online or outside
            of a shop (by telephone, mail order, from a door-to-door
            salesperson), you also have the right to cancel and return your
            order within 14 days, for any reason and without a justification.""
          </p>
          <h3>Materials</h3>
          <p>
            All material used for jewellery is recycled. Silver. Right now we
            use only Silver XXX. It's known for its shininess and durability.
            Gold. Right now we produce rings out of yellow and white gold 14k
            (585) because it is beautiful and robust.
          </p>
        </div>
      </div>
    </>
  );
}

export default GuideContent;

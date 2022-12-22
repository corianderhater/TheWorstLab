import React from "react";
import "../index.scss";

function Guide() {
  return (
    <>
      <div className="guide-container">
        <div className="guide-item">
          <h1>Welcome to the shopping guide: </h1>
          <h5>
            It is important for me to clear things out before order, so you are
            the best informed. If you are not sure, please, don't hesitete to
            ask me directly.
          </h5>
        </div>
        <div className="guide-item guide-scroll">
          <h3>How do I order?</h3>
          <p>
            Select “Rings” tab from the bottom menu. Select the size and contact
            me via Instagram, telephone number or WhatsApp.
          </p>
          <h3>What is my ring size?</h3>
          <p>
            The easiest is to go to the closest to you jewelry shop and ask to
            meassure the finger you would like to order the ring for. It is
            crucial to order a ring of your size because complex geometry of our
            designs is hard to resize. Make sure about your size!
          </p>
          <h3>How long will I wait for my ring?</h3>
          <p>
            Right now we are in the pre-order phase. We will manufacture your
            ring/s by the end of February 2023.
            <em>We promise shipping before March 2023. </em>It's worth the wait!
            And the reason for the waiting time is that we have production
            vacations in January.
          </p>
          <h3>Payment method</h3>
          <p>
            We accept PayPal, bank transfer and we think of including some
            crypto currencies soon.
          </p>
          <h3>Global delivery</h3>
          <p>
            We ship globally from Gdańsk, Poland. Estimated delivery time /
            Price:
            <ul>
              <li>Poland: under 7 days from shipping / 30 PLN</li>
              <li>Europe: under 14 days from shipping / 15 EUR</li>
              <li>Outside of Europe: under 30 days from shipping / Depends</li>
            </ul>
          </p>
          <h3>Materials</h3>
          <p>
            All material used for jewellery is recycled. And can me bade of:
            <ul>
              <li>Silver 925. It's known for its shininess and durability.</li>
              <li>
                Gold 14k (585). We choose this type of gold because it is
                beautiful and robust.
              </li>
            </ul>
          </p>
          <h3>Guarantee</h3>
          <p>
            First of all, we will use all out powers to make you happy with your
            choice. <br />
            <br /> And of course we apply to EU Guarantee and returns law:
            <br />
            "Under EU rules, a trader must repair, replace, reduce the price or
            give you a refund if goods you bought turn out to be faulty or do
            not look or work as advertised. If you bought a product or a service
            online or outside of a shop (by telephone, mail order, from a
            door-to-door salesperson), you also have the right to cancel and
            return your order within 14 days, for any reason and without a
            justification."
          </p>
        </div>
      </div>
    </>
  );
}

export default Guide;

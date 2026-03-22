import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <section id="contact" className="contactPage">
      <div className="contact-image-wrap">
        <img
          className="contact-image"
          src={`${process.env.PUBLIC_URL}/images/3.webp`}
          alt="Mansion"
        />
      </div>

      <div className="contact-content">
        <div className="contact-columns">
          <div className="contact-section contact-info">
            <h3 className="contact-heading">Information</h3>

            <div className="contact-info-list">
              <div className="contactPage-info-line">
                <span className="contactPage-info-label" aria-hidden="true">
                  A:
                </span>
                <span>131 Hardford Road, Manchester CT 06040</span>
              </div>
              <div className="contactPage-info-line">
                <span className="contactPage-info-label" aria-hidden="true">
                  T:
                </span>
                <span>203-565-3539</span>
              </div>
              <div className="contactPage-info-line">
                <span className="contactPage-info-label" aria-hidden="true">
                  E:
                </span>
                <span>info@ccmansioninn.com</span>
              </div>
            </div>
          </div>

          <div className="contact-section contact-form-section contact-embed-wrap">
            <h3 className="contact-heading">Contact</h3>
            <p className="contact-embed-note">
              Complete the form below to reach our team. Your message is sent securely through our booking platform.
            </p>
            <iframe
              title="Contact form"
              src={`${process.env.PUBLIC_URL}/contact-embed.html`}
              className="contact-embed-iframe"
            />
          </div>
        </div>

        <div className="faq-wrap">
          <h3 className="faq-title">Frequently Asked Questions</h3>

          <div className="faq-section">
            <h4 className="faq-section-title">Event Logistics &amp; Timing</h4>
            <ol className="faq-list">
              <li>
                <div className="faq-q">How long do we have to get ready and prepare the space?</div>
                <div className="faq-a">
                  You have 12 hours to use the space, providing ample time for decorating and getting ready.
                </div>
              </li>
              <li>
                <div className="faq-q">Will there be a staff member on site during our ceremony/reception?</div>
                <div className="faq-a">
                  The Charles Cheney Mansion Inn crew is included with every package to assist with decorating, vendor coordination, and other needs.
                </div>
              </li>
              <li>
                <div className="faq-q">Are we able to have our rehearsal on site?</div>
                <div className="faq-a">On-site rehearsals are permitted within two days of your ceremony, subject to availability.</div>
              </li>
              <li>
                <div className="faq-q">Is there a noise ordinance?</div>
                <div className="faq-a">A noise ordinance is in effect from 10:00 PM to 7:00 AM.</div>
              </li>
              <li>
                <div className="faq-q">How many events are on site per day?</div>
                <div className="faq-a">Yours will be the only event on-site, and you will have full access to the property.</div>
              </li>
            </ol>
          </div>

          <div className="faq-section">
            <h4 className="faq-section-title">Facilities &amp; Access</h4>
            <ol className="faq-list">
              <li>
                <div className="faq-q">Is there a getting ready location?</div>
                <div className="faq-a">
                  We offer a bridal suite with a private bathroom and lounge. The groom and his party may use an unoccupied bedroom and the billiards room.
                </div>
              </li>
              <li>
                <div className="faq-q">Is there disability access?</div>
                <div className="faq-a">Disability access is available via a ramp located at the back side porch.</div>
              </li>
              <li>
                <div className="faq-q">Is there parking?</div>
                <div className="faq-a">
                  Options include self-parking (with guidance), valet parking, or a shuttle service from a lot across the street.
                </div>
              </li>
              <li>
                <div className="faq-q">Is there a coat check?</div>
                <div className="faq-a">
                  A coat closet is available in the billiards room; we can provide check services during cooler months.
                </div>
              </li>
              <li>
                <div className="faq-q">Is there a tent option for outdoor receptions?</div>
                <div className="faq-a">
                  Outdoor reception tents can be rented through our partner, Taylor Rental Party Plus (
                  <a href="https://taylorrentalpartyplusct.com" target="_blank" rel="noreferrer">
                    https://taylorrentalpartyplusct.com
                  </a>
                  ).
                </div>
              </li>
            </ol>
          </div>

          <div className="faq-section">
            <h4 className="faq-section-title">Requirements &amp; Restrictions</h4>
            <ol className="faq-list">
              <li>
                <div className="faq-q">Do we need Liability insurance?</div>
                <div className="faq-a">
                  Yes, we recommendation using
                  <a href="https://www.theeventhelper.com" target="_blank" rel="noreferrer">
                    https://www.theeventhelper.com
                  </a>
                  . It costs approximately $1 per person.
                </div>
              </li>
              <li>
                <div className="faq-q">Is security needed if alcohol is being served?</div>
                <div className="faq-a">Security is required if alcohol is being served and your guest count exceeds 100.</div>
              </li>
              <li>
                <div className="faq-q">Do we need to use the preferred caterers?</div>
                <div className="faq-a">
                  You may use outside caterers. There is a one-time $200 fee and a requirement to provide a certificate of insurance.
                </div>
              </li>
              <li>
                <div className="faq-q">Are there alcohol restrictions?</div>
                <div className="faq-a">There are no restrictions as long as you utilize a licensed bartender.</div>
              </li>
              <li>
                <div className="faq-q">Are there restrictions on decoration?</div>
                <div className="faq-a">
                  We do not allow double-sided tape or anything that creates holes in the walls or trim. We recommend using zip ties or twine.
                  Please note that rose petals are allowed, but confetti is not. All decorations should be removed upon departure.
                </div>
              </li>
              <li>
                <div className="faq-q">What rentals are included?</div>
                <div className="faq-a">
                  Depending on the package you choose, tables, chairs, linens and dinnerware is included. We also have extra furniture for rent if you'd like to have a lounge area set up outdoors and for photo ops.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;


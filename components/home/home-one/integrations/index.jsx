import Icon10 from "@/public/images/v1/icon10.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
import HeroThumbs from "../hero/HeroThumbs";

function Integrations() {
  return (
    <section className="sofax-section-padding7 dark-bg" id="fuel-partners">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <FadeInUp className="integration-social-icon">
              <Image src={Icon10} alt="Icon" />
            </FadeInUp>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="sofax-default-content tac heading-color">
              <div className="tg-heading-subheading animation-style3">
                <h2>Nationwide Fuel Access</h2>
              </div>
              <p>
                Refuel anywhere in South Africa—KiloMITA works seamlessly across
                all major fuel brands, giving you the freedom to drive without
                limits.
              </p>
              <FadeInUp className="extra-mt">
                <Link
                  className="sofax-default-btn pill"
                  data-text="Schedule a consultation"
                  href="/contact-us"
                >
                  <span className="button-wraper">Ready to Fuel Anywhere?</span>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;

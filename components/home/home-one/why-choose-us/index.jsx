import Card from "@/public/images/v1/card.png";
import CheckCircle from "@/public/images/v1/check-circle.png";
import Contentimg2 from "@/public/images/v1/contentimg2.png";
import Contentimg3 from "@/public/images/v1/scooter.png";
import ContentThumb from "@/public/images/v1/contentthumb1.jpg";
import EasyOnboarding from "@/public/images/v1/icon4.png";
import ImmediateFuel from "@/public/images/v1/icon14.png";
import RepaymentOptions from "@/public/images/v1/icon15.png";
import CreditGrowth from "@/public/images/v1/icon16.png";
import Shape3 from "@/public/images/v1/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function WhyChooseUs() {
  return (
    <div className="sofax-section-padding2" id="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInLeft className="sofax-content-img box-shadow mb-130">
              <Image src={ContentThumb} alt="ContentThumb" />
              <div className="sofax-card-shape">
                <Image src={Card} alt="Card" />
              </div>
            </FadeInLeft>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
              <div className="tg-heading-subheading animation-style3">
                <h2>Fuel your business without the stress</h2>
              </div>
              <p>
                KiloMITA offers smart fuel financing with real-time tracking,
                nationwide access, and scalable credit—so you can focus on
                driving income while we handle the fuel.{" "}
              </p>
              <div className="extra-mt">
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>High Repayment Rates</h4>
                    <p>
                      Reflecting the reliability and trust in our services.​
                    </p>
                  </div>
                </div>
                {/* <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Strong Financial Backing</h4>
                    <p>
                      Supported by leading investors in the African fintech
                      space.
                    </p>
                  </div>
                </div> */}
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Proven Partnerships</h4>
                    <p>
                      Collaborations with major ride-hailing platforms
                      demonstrate our commitment to the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
              <Image src={Contentimg2} className="app-screen" alt="kilomita app screen" />
              <Image src={Contentimg3} className="scooter" alt="kilomita scooter delivery" />
              <div className="sofax-content-shape-v1">
                <Image src={Shape3} alt="shape" />
              </div>
            </FadeInRight>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content mr-80 tac fs-19">
              <div className="tg-heading-subheading animation-style3">
                <h2>Here&apos;s how KiloMITA keeps you moving</h2>
              </div>
              {/* <p>
								These are just a few examp & the best choice for you will depend on the factors such as
								your budget your team & the specific features you need.
							</p> */}
              <div className="extra-mt">
                <div className="sofax-iconbox-wrap2">
                <div className="sofax-iconbox-icon2">
                    <Image src={EasyOnboarding} alt="Easy Onboarding by kiloMITA" />
                    <Image />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Easy Onboarding</h4>
                    <p>Quick and straightforward registration process.</p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image src={ImmediateFuel} alt="Immediate Fuel Access with kiloMITA" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Immediate Fuel Access</h4>
                    <p>Quick and straightforward registration process.</p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image src={RepaymentOptions} alt="Choose repayment options" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Choose Repayment Options</h4>
                    <p>Choose a repayment schedule that aligns with your business needs.</p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image src={CreditGrowth} alt="Credit can grow in kiloMITA" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Growth Oriented Credit</h4>
                    <p>Increase your fuel credit as your business scales.</p>
                  </div>
                </div>
              </div>
              <FadeInUp className="extra-mt">
                <Link
                  className="sofax-default-btn pill"
                  data-text="Get started"
                  href="/contact-us"
                >
                  <span className="button-wraper">Join kiloMITA today</span>
                </Link>
              </FadeInUp>
              <div className="sofax-content-shape-v1">
                <Image src={Shape3} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

import Shape4 from "@/public/images/v1/shape4.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
function Cta() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2>Drive. Fuel. Repeat.</h2>
					</div>
					<p>
					KiloMITA is committed to supporting businesses that keep Africa moving. Our tailored fuel
					financing solutions are designed to meet the unique needs of your operations.
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text="Contact our team" href="/contact-us">
							<span className="button-wraper">Contact our team</span>
						</Link>
						<span className="cta-bottom">Instant fuel access. No credit card needed.</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<Image src={Shape4} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;

import Rattingful from "@/public/images/v1/rattingful.svg";
import Rattinghalf from "@/public/images/v1/rattinghalf.svg";
import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
function HeroSection() {
	return (
		<div className="sofax-hero-section overflow-hidden" id="hero">
			<div className="container">
				<HeroContent />
				<div className="sofax-subscription-field blog-details-subscribe-btn">
					<input type="email" placeholder="Enter your email " />
					<button id="sofax-subscription-btn" type="submit">
						Discover our solutions
					</button>
				</div>
				{/* <div className="sofax-rating-icon">
					<ul>
						<li>
							<Image src={Rattingful} alt="Rating" />
						</li>
						<li>Trusted by 10 000+ drivers nationwide</li>
						<li>
							<Image src={Rattingful} alt="Rating" />
						</li>
					</ul>
				</div> */}
				<HeroThumbs />
			</div>
		</div>
	);
}

export default HeroSection;

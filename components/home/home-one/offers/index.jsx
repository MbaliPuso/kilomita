import Icon1 from "@/public/images/v1/icon1.png";
import Icon2 from "@/public/images/v1/icon2.png";
import Icon3 from "@/public/images/v1/icon3.png";
import Icon5 from "@/public/images/v1/icon5.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Fuel Now, Pay Later",
		description:
			"Flexible repayment terms to suit your cash flow.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Nationwide Acceptance",
		description:
			"Use our services at any petrol station across South Africa.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Scalable Credit Limits",
		description:
			"Grow your credit line as your business expands.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon5,
		title: "Real-Time Tracking",
		description:
			"Monitor fuel usage and expenses effortlessly.",
	},
];
function Services() {
	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						<div className="col-xl-8 col-lg-10">
							<div className="tg-heading-subheading animation-style3">
								<h2>Empowering Mobility and Delivery Businesses</h2>
							</div>
						</div>
						{/* <div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text="View all services" href="/service">
									<span className="button-wraper">View all services</span>
								</Link>
							</FadeInUp>
						</div> */}
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-6 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;

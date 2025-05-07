import Icon11 from "@/public/images/v1/icon11.png";
import Icon12 from "@/public/images/v1/icon12.png";
import Icon13 from "@/public/images/v1/icon13.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon11,
		title: "Ride-Hailing Platforms & Fleets",
		description:
			"Ensure your drivers stay on the road with our seamless fuel financing options.​",
	},
	{
		id: crypto.randomUUID(),                                                                                                                                                                              
		icon: Icon12,
		title: "E-commerce Delivery Operators",
		description:
			"Scale your delivery operations without the upfront fuel costs.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon13,
		title: "Independent Contractors:",
		description:
			"Access the fuel you need to keep your business running smoothly.",
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
								<h2>We Serve Drivers, Couriers & Fleets</h2>
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
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;

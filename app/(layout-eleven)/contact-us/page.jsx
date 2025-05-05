import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import MyMap from "@/components/contact-us-page/MyMap";
export const metadata = {
	title: "Kilomita: Fuel Financing for Mobility Businesses",
	description: "Empower your fleet with instant fuel financing solutions tailored for ride-hailing platforms, e-commerce delivery services, and independent contractors across Africa.",
};
function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<Contact />
		</>
	);
}

export default ContactUs;

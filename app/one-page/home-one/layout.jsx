import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/one-page";
export const metadata = {
	title: "Kilomita: Fuel Financing for Mobility Businesses",
	description: "Empower your fleet with instant fuel financing solutions tailored for ride-hailing platforms, e-commerce delivery services, and independent contractors across Africa.",
};
function OnePageLayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutOne;

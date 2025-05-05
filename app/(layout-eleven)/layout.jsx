import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/one-page";
function LayoutEleven({ children }) { 
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;

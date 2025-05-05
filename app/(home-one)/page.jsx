import Cta from "@/components/home/home-one/cta";
import HeroSection from "@/components/home/home-one/hero";
import Integrations from "@/components/home/home-one/integrations";
import LogoSlider from "@/components/home/home-one/logo-slider";
import Offers from "@/components/home/home-one/offers";
import Services from "@/components/home/home-one/services";
import WhyChooseUs from "@/components/home/home-one/why-choose-us";

function HomeOne() {
	return (
		<>
			<HeroSection />
			<LogoSlider />
			<Offers />
			<WhyChooseUs />
			<Services />
			<Integrations />
			<Cta />
		</>
	);
}

export default HomeOne;

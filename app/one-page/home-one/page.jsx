import Cta from "@/components/home/home-one/cta";
import HeroSection from "@/components/home/home-one/hero";
import Integrations from "@/components/home/home-one/integrations";
import LogoSlider from "@/components/home/home-one/logo-slider";
import PricePlan from "@/components/home/home-one/price-plan";
import Services from "@/components/home/home-one/offers";
import PlatformSlider from "@/components/home/home-one/platforms-slider";
import WhyChooseUs from "@/components/home/home-one/why-choose-us";

function HomeOne() {
	return (
		<>
			<HeroSection />
			<LogoSlider />
			<Services />
			<WhyChooseUs />
			<PlatformSlider />
			<Integrations />
			<Cta />
		</>
	);
}

export default HomeOne;

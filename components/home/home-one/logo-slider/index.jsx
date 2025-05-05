"use client";
import InDrive from "@/public/images/v1/indrive-logo.png";
import Droppa from "@/public/images/v1/droppa-logo.png";
import Zulzi from "@/public/images/v1/zulzi-logo.png";
import Onfleet from "@/public/images/v1/onfleet-logo.png";
import StandardBank from "@/public/images/v1/standard-bank-logo.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: InDrive,
	},
	{
		id: crypto.randomUUID(),
		img: Droppa,
	},
	{
		id: crypto.randomUUID(),
		img: Onfleet,
	},
	{
		id: crypto.randomUUID(),
		img: StandardBank,
	},
	{
		id: crypto.randomUUID(),
		img: Zulzi,
	},
	{
		id: crypto.randomUUID(),
		img: InDrive,
	},
	{
		id: crypto.randomUUID(),
		img: Droppa,
	},
	{
		id: crypto.randomUUID(),
		img: Onfleet,
	},
	{
		id: crypto.randomUUID(),
		img: StandardBank,
	},
	{
		id: crypto.randomUUID(),
		img: Zulzi,
	},
	{
		id: crypto.randomUUID(),
		img: InDrive,
	},
	{
		id: crypto.randomUUID(),
		img: Droppa,
	},
	{
		id: crypto.randomUUID(),
		img: Onfleet,
	},
	{
		id: crypto.randomUUID(),
		img: StandardBank,
	},
	{
		id: crypto.randomUUID(),
		img: Zulzi,
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider() {
	return (
		<section className="sofax-slider-section">
			<div className="container">
				<div className="sofax-title-section">
					<h4>Trusted by 4+ of the world&apos;s most popular companies</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item">
										<Image src={item.img} alt="logo slider" />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;

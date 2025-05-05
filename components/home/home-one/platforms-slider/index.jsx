"use client";
import InDrive from "@/public/images/v1/indrive-logo.png";
import Uber from "@/public/images/v1/uber-logo.png";
import UberEats from "@/public/images/v1/uber-eats.png";
import Bolt from "@/public/images/v1/bolt-logo.png";
import MrDelivery from "@/public/images/v1/mr-d.svg";
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
		img: Uber,
	},
	{
		id: crypto.randomUUID(),
		img: UberEats,
	},
	{
		id: crypto.randomUUID(),
		img: Bolt,
	},
	{
		id: crypto.randomUUID(),
		img: MrDelivery,
	},
	{
		id: crypto.randomUUID(),
		img: InDrive,
	},
	{
		id: crypto.randomUUID(),
		img: Uber,
	},
	{
		id: crypto.randomUUID(),
		img: UberEats,
	},
	{
		id: crypto.randomUUID(),
		img: Bolt,
	},
	{
		id: crypto.randomUUID(),
		img: MrDelivery,
	},
	{
		id: crypto.randomUUID(),
		img: InDrive,
	},
	{
		id: crypto.randomUUID(),
		img: Uber,
	},
	{
		id: crypto.randomUUID(),
		img: UberEats,
	},
	{
		id: crypto.randomUUID(),
		img: Bolt,
	},
	{
		id: crypto.randomUUID(),
		img: MrDelivery,
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
					<h4>Driver Platforms we Support</h4>
				</div>
				<div className="sofax-brand-slider d-flex align-items-center">
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

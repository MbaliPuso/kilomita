"use client";
import React, { useState } from "react";
import FadeInUp from "@/components/animation/FadeInUp";
import Link from "next/link";
import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import Hero from "../../../../public/images/v1/hero.png";
import Video from "./Video";

function HeroSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="sofax-hero-section overflow-hidden" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <HeroContent />
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <FadeInUp>
                  <Link
                    className="sofax-default-btn pill hero-default-btn"
                    data-text="Get started >>"
                    href="/contact-us"
                  >
                    <span className="button-wraper">Join kiloMITA</span>
                  </Link>
                </FadeInUp>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <FadeInUp>
                  <Link
                    className="sofax-default-btn pill hero-default-btn-video"
                    data-text="Watch Video"
                    onClick={() => setOpen(true)}
                    href="#"
                  >
                    <span className="button-wraper">
                      Discover Our Solutions
                    </span>
                  </Link>
                </FadeInUp>
				<Video isOpen={isOpen} onClose={() => setOpen(false)} />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-none d-md-block">
            <div className="hero-section-image">
              <Image src={Hero} alt="kilomita hero image" />
            </div>
          </div>
        </div>
        {/* <div className="sofax-subscription-field blog-details-subscribe-btn">
					<input type="email" placeholder="Enter your email " />
					<button id="sofax-subscription-btn" type="submit">
						Discover our solutions
					</button>
				</div> */}
        <HeroThumbs />
      </div>
    </div>
  );
}

export default HeroSection;

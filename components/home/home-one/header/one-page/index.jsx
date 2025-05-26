"use client";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItemsData = [
	{
		title: "Home",
		url: "#hero",
	},
	{
		title: "What We Offer",
		url: "#service",
	},
	{
		title: "Why Us",
		url: "#why-us",
	},
	{
		title: "Fuel Partners",
		url: "#fuel-partners",
	},
];
function Header() {
	const pathname = usePathname();
	const isContactPage = pathname === "/contact-us";
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<nav className="menu-block" id="append-menu-header">
							<ul className="site-menu-main">
								<li className="nav-item">
									<Link href="/" className="nav-link-item">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link href={`${isContactPage ? "/#service" : "#service"}`} className="nav-link-item">
										What We Offer
									</Link>
								</li>
								<li className="nav-item">
									<Link href={`${isContactPage ? "/#why-us" : "#why-us"}`} className="nav-link-item">
										Why Us
									</Link>
								</li>
								<li className="nav-item">
									<Link href={`${isContactPage ? "/#fuel-partners" : "#fuel-partners"}`} className="nav-link-item">
										Fuel Partners
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="kiloMITA" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;

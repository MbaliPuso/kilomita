import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
import Link from "next/link";
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
									<a href="#service" className="nav-link-item">
										What We Offer
									</a>
								</li>
								<li className="nav-item">
									<a href="#why-us" className="nav-link-item">
										Why Us
									</a>
								</li>
								<li className="nav-item">
									<a href="#fuel-partners" className="nav-link-item">
										Fuel Partners
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;

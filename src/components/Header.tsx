"use client";

import { useEffect, useState } from "react";
import {
	Box,
	Burger,
	Button,
	Center,
	Container,
	Group,
	Menu,
} from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { IconArrowRight, IconChevronDown } from "@tabler/icons-react";
import LogoImage from "next/image";
import classes from "../styles/Header.module.css";

const links = [
	{
		link: "#1",
		label: "Products",
		links: [
			{ link: "/resources", label: "Resources" },
			{ link: "/community", label: "Community" },
			{ link: "/blog", label: "Blog" },
		],
	},
	{
		link: "#2",
		label: "Solutions",
		links: [
			{ link: "/community", label: "Community" },
			{ link: "/blog", label: "Blog" },
		],
	},
	{
		link: "#3",
		label: "Resources",
		links: [
			{ link: "/docs", label: "Documentation" },
			{ link: "/resources", label: "Resources" },
			{ link: "/community", label: "Community" },
			{ link: "/blog", label: "Blog" },
		],
	},
	{
		link: "#4",
		label: "Pricing",
		links: [
			{ link: "/faq", label: "FAQ" },
			{ link: "/demo", label: "Book a demo" },
			{ link: "/forums", label: "Forums" },
		],
	},
];

const Header = () => {
	const [opened, { toggle }] = useDisclosure(false);
	const icon = <IconArrowRight size={16} />;
	const [scrolled, setScrolled] = useState(false);
	const isMobile = useMediaQuery("(max-width: 1035px)");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); 
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`${classes.header} ${scrolled ? classes.scrolled : ""}`}>
			<Container size="xl">
				<Box className={classes.inner}>
					<LogoImage
						src="/images/logo.svg"
						alt="Logo image"
						width={191}
						height={34}
					/>
					<Box className={classes.links}>
						{/* Desktop navigation */}
						{!isMobile && (
							<Group gap="xs" visibleFrom="xl">
								{links.map(link => {
									const hasSubLinks = link.links?.length > 0;
									return hasSubLinks ? (
										<Menu
											key={link.label}
											trigger="hover"
											transitionProps={{ exitDuration: 0 }}
											withinPortal
										>
											<Menu.Target>
												<a
													href={link.link}
													className={classes.link}
													onClick={e => e.preventDefault()}
												>
													<Center>
														<span className={classes.linkLabel}>{link.label}</span>
														<IconChevronDown stroke={1} width={19} />
													</Center>
												</a>
											</Menu.Target>
											<Menu.Dropdown>
												{link.links.map(item => (
													<Menu.Item key={item.link}>{item.label}</Menu.Item>
												))}
											</Menu.Dropdown>
										</Menu>
									) : (
										<a
											key={link.label}
											href={link.link}
											className={classes.link}
											onClick={e => e.preventDefault()}
										>
											{link.label}
										</a>
									);
								})}
							</Group>
						)}

						{/* Mobile navigation - opened on burger click */}
						{isMobile && opened && (
							<Box className={classes.mobileLinks}>
								{links.map(link => {
									const hasSubLinks = link.links?.length > 0;
									return hasSubLinks ? (
										<Box key={link.label}>
											<span className={classes.mobileLinkLabel}>{link.label}</span>
											{link.links.map(item => (
												<a
													key={item.link}
													href={item.link}
													className={classes.mobileSublink}
												>
													{item.label}
												</a>
											))}
										</Box>
									) : (
										<a key={link.label} href={link.link} className={classes.mobileLink}>
											{link.label}
										</a>
									);
								})}
							</Box>
						)}

						{/* Buttons */}
						<Box className={classes.buttons} visibleFrom="sm">
							<Button
								className={classes.button}
								variant="filled"
								color="rgba(255, 228, 146, 1)"
								fz={18}
								size="sm"
							>
								Button
							</Button>
							<Button
								variant="filled"
								rightSection={icon}
								size="sm"
								color="indigo"
								fz={18}
							>
								Try Whitepace free
							</Button>
						</Box>

						<Burger
							opened={opened}
							onClick={toggle}
							color="white"
							size="md"
							hiddenFrom="xl"
						/>
					</Box>
				</Box>
			</Container>
		</header>
	);
};

export default Header;

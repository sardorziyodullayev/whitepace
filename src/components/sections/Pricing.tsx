"use client";

import { Container, Stack, Text, Title, Box, Button } from "@mantine/core";
import Image from "next/image";
import { PRICING_DATA } from "@/constants/pricing-data";
import { Carousel } from "@mantine/carousel";
import TrueIcon from "../../shared/assets/true_icon.svg";

export const Pricing = () => {
	return (
		<Container py={80} size="xl">
			<Stack align="center" mb={40}>
				<Title
					order={1}
					fw={800}
					ta="center"
					fz={{ base: 40, sm: 44, md: 48, lg: 54, xl: 72 }}
				>
					Choose Your Plan
				</Title>
				<Text
					c="dimmed"
					ta="center"
					maw={600}
					fz={{ base: 14, sm: 15, md: 16, lg: 18 }}
				>
					Whether you want to get organized, keep your personal life on track, or
					boost workplace productivity, Evernote has the right plan for you.
				</Text>
			</Stack>

			<Carousel
				slideSize="33.3%"
				slideGap="md"
				controlsOffset="sm"
				withControls={false}
				withIndicators={false}
			>
				{PRICING_DATA.map(
					({ id, plan, price, text, features, borderColor, highlighted }) => (
						<Carousel.Slide key={id}>
							<Box
								style={{
									width: "100%",
									maxWidth: 350,
									padding: 20,
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									height: "100%",
									border: `1px solid ${borderColor}`,
									borderRadius: 10,
									backgroundColor: highlighted ? "#043873" : "#fff",
									color: highlighted ? "#fff" : "#000",
									transform: highlighted ? "scale(1.05)" : "scale(1)",
									transition: "all 0.3s ease-in-out",
									boxShadow: highlighted ? "0 8px 20px rgba(0, 0, 0, 0.3)" : "none",
								}}
							>
								<div>
									<Text fw={600} fz="lg" mb={8}>
										{plan}
									</Text>
									<Text fw={700} fz="32px" mb={8}>
										{price}
									</Text>
									<Text c={highlighted ? "gray.3" : "dimmed"} mb={16}>
										{text}
									</Text>

									<Stack gap={8} mb={16}>
										{features.map((feature, index) => (
											<Text
												key={index}
												c={highlighted ? "gray.3" : "dimmed"}
												fz="sm"
												style={{ display: "flex", alignItems: "center", gap: 8 }}
											>
												<Image src={TrueIcon} alt="Check" width={16} height={16} />
												{feature}
											</Text>
										))}
									</Stack>
								</div>

								<Button
									variant={highlighted ? "filled" : "outline"}
									color={highlighted ? "gray.0" : "dark"}
									style={{
										backgroundColor: highlighted ? "#fff" : "#fff",
										color: highlighted ? "#043873" : "#043873",
										borderColor: highlighted ? "#fff" : borderColor,
										marginTop: 16,
									}}
								>
									Get Started
								</Button>
							</Box>
						</Carousel.Slide>
					),
				)}
			</Carousel>
		</Container>
	);
};

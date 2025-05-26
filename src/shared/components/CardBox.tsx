"use client";

import { Box, Button, Container, Grid, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import classes from "../../styles/CardBox.module.css";

type Props = {
	data: {
		id: string;
		image: string;
		title: string;
		description: string;
		buttonTitle: string;
		bgImage?: string;
		textColor?: string;
		bgColor?: string;
		reversed: boolean;
	};
};

export const CardBox = ({
	data: {
		image,
		title,
		description,
		textColor,
		buttonTitle,
		bgImage,
		bgColor,
		reversed,
	},
}: Props) => {
	const icon = <IconArrowRight size={16} />;

	return (
		<Box
			style={{
				padding: "140px 0",
				background: bgColor,
				backgroundImage: bgImage,
			}}
		>
			<Container size="xl">
				<Grid align="center" gutter="50px" justify="center">
					<Grid.Col span={{ base: 12, md: 6 }} order={reversed ? 2 : 1}>
						<Box
							style={{
								gap: "24px",
							}}
							className={classes.textBox}
						>
							<Title
								fz={{ base: 40, sm: 44, md: 48, lg: 54, xl: 64 }}
								c={textColor}
								mb={24}
							>
								{title}
							</Title>
							<Text fz={{ base: 18, sm: 20, md: 22, lg: 24 }} c={textColor}>
								{description}
							</Text>
							<Button
								variant="filled"
								rightSection={icon}
								color="indigo"
								fz={18}
								size="md"
								mt={24}
							>
								{buttonTitle}
							</Button>
						</Box>
					</Grid.Col>

					<Grid.Col
						span={{ base: 12, md: 6 }}
						order={reversed ? 1 : 2}
						style={{ textAlign: "center" }}
					>
						<Image src={image} alt="" width={640} layout="responsive" />
					</Grid.Col>
				</Grid>
			</Container>
		</Box>
	);
};

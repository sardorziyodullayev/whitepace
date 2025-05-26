"use client";

import { Box, Button, Container, Grid, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from '../../styles/Hero.module.css'

const Hero = () => {
	const icon = <IconArrowRight size={16} />;

	return (
		<Box className={classes.heroBg}>
			<Container size="xl">
				<Grid justify="center" align="center">
					<Grid.Col span={{ base: 12, md: 6 }}>
						<Box style={{gap: '24px'}}>
							<Title fz={64} c={'#fff'} mb={24}>Get More Done with whitepace</Title>
							<Text fz={18} c={'#fff'}>
								Project management software that enables your teams to collaborate,
								plan, analyze and manage everyday tasks
							</Text>
							<Button variant="filled" rightSection={icon} color="indigo" fz={18} size="md" mt={24}>
								Try Whitepace free
							</Button>
						</Box>
					</Grid.Col>

					<Grid.Col span={{ base: 12, md: 6 }}>
						<Box bg={"#C4DEFD"} w={"100%"} h={549}></Box>
					</Grid.Col>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;

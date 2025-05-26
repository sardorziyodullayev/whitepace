import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const metadata = {
	title: "My Landing Page",
	description: "Awesome site with Mantine + Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<MantineProvider>
					<Header />
					<Suspense fallback={<div>Loading...</div>}>
						<main>{children}</main>
					</Suspense>
					<Footer />
				</MantineProvider>
			</body>
		</html>
	);
}

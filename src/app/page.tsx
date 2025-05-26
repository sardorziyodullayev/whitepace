import { HERO_DATA, MANAGEMENT_DATA, EXTENSION_DATA, WORK_DATA } from "@/constants";
import { CUSTOMISE_DATA } from "@/constants/customise-data";
import { Pricing } from "@/components/sections/Pricing";
import { CardBox } from "@/shared/components/CardBox";

export default function HomePage() {
	return (
		<>
			<CardBox data={HERO_DATA} />
			<CardBox data={MANAGEMENT_DATA} />
			<CardBox data={WORK_DATA} />
			<CardBox data={EXTENSION_DATA} />
			<CardBox data={CUSTOMISE_DATA} />
			<Pricing />
		</>
	);
}

import { Category } from "../types";
import { Heading, VStack, Link, SkeletonText } from "@chakra-ui/react";

type Props = {
	categories: Category[];
	loading: boolean;
	selectedCategory: Category;
	setSelectedCategory: (category: Category) => void;
};

const seletedProps = {
	bgColor: "blue.400",
	color: "white",
	fontWeight: "bold",
};

function SideNav({
	categories,
	selectedCategory,
	setSelectedCategory,
	loading,
}: Props) {
	return loading ? (
		<SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
	) : (
		<>
			<Heading color="blue.400" fontSize={14} fontWeight="bold" mb={4}>
				CATEGORIAS
			</Heading>
			<VStack align="stretch">
				{categories.map((category) => (
					<Link
						onClick={() => setSelectedCategory(category)}
						px={2}
						py={1}
						borderRadius={5}
						key={category.strCategory}
						_hover={{ textDecoration: "none" }}
						{...(selectedCategory.strCategory == category.strCategory &&
							seletedProps)}
					>
						{category.strCategory}
					</Link>
				))}
			</VStack>
		</>
	);
}

export default SideNav;

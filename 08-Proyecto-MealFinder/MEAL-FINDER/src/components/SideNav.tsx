import { Heading, Link, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

function SideNav({
  categories,
  loading,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIA
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
              selectedProps)}
          >
            {category.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;

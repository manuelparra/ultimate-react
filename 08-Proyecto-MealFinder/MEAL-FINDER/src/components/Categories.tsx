import { Heading, Link, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  handleClick: (category: Category) => void;
};

const seletedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
  _hover: { bgColor: "blue.300" },
};

function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
  handleClick,
}: Props) {
  return (
    <>
      <Heading color="blue.400" fontSize={14} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((category) => (
          <Link
            onClick={() => {
              handleClick(category);
              setSelectedCategory(category);
            }}
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

export default Categories;

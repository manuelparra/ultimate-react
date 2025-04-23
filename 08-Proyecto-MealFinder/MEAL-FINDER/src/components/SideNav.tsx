import { Category } from "../types";
import { SkeletonText } from "@chakra-ui/react";
import Categories from "./Categories";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  handleClick: (category: Category) => void;
};

function SideNav({
  categories,
  selectedCategory,
  setSelectedCategory,
  loading,
  handleClick,
}: Props) {
  return loading ? (
    <SkeletonText mt="1" noOfLines={2} />
  ) : (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      handleClick={handleClick}
    />
  );
}

export default SideNav;

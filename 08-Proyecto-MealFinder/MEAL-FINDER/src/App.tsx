import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { Category, CategoriesResponse, Meal } from "./types";
import useHttpData from "./hooks/useHttpData";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;
const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category, CategoriesResponse>(url);

  const { loading: loadingMeal, data: dataMeal } = useHttpData<
    Meal,
    CategoriesResponse
  >(makeMealUrl(defaultCategory));

  return (
    <Grid
      templateAreas={`"header header"
											"nav main"`}
      gridTemplateRows={"95px 1fr"}
      gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      fontSize={14}
    >
      <GridItem
        boxShadow="sm"
        zIndex="1"
        pos="sticky"
        top="0"
        pt="7"
        bg="white"
        area={"header"}
      >
        <Header />
      </GridItem>
      <GridItem
        pos="sticky"
        top="56px"
        left="0"
        p="5"
        bg="white"
        area={"nav"}
        height="calc(100vh - 95px)"
        overflowY="auto"
      >
        <SideNav
          categories={data}
          loading={loading}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </GridItem>
      <GridItem p="4" bg="white" area={"main"}>
        <MainContent loading={loadingMeal} meals={dataMeal} />
      </GridItem>
    </Grid>
  );
}

export default App;

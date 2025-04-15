import { useState } from "react";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import useFetch from "./hooks/useFetch";

const baseURL = "https://www.themealdb.com/api/json/v1/1/";

const defaultCategory = {
  strCategory: "Beef",
};

const url = `${baseURL}list.php?c=list`;

const makeMealUrl = (category: Category) =>
  `${baseURL}filter.php?c=${category.strCategory}`;

const makeSearchUrl = (search: string) => `${baseURL}search.php?s=${search}`;

function App() {
  const [search, setSearch] = useState("");

  const [currentCategory, setCurrentCategory] =
    useState<Category>(defaultCategory);

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loadingResponse: loadingCategory, dataResponse: dataCategory } =
    useHttpData<Category>(url);

  const {
    loadingResponse: loadingMeal,
    setLoadingResponse: setLoadingMeals,
    dataResponse: dataMeals,
    setDataResponse: setMeals,
  } = useHttpData<Meal>(makeMealUrl(currentCategory));

  const searchApi = (searchForm: SearchForm) => {
    const urlSearch = makeSearchUrl(searchForm.search);

    setLoadingMeals(true);
    axios
      .get<{ meals: Meal[] }>(urlSearch)
      .then(({ data }) => {
        setMeals(data.meals);
      })
      .finally(() => setLoadingMeals(false));
  };

  const {
    fetch,
    loading: loadingMealDetails,
    data: mealDetailsData,
  } = useFetch<MealDetails>();

  const seachMealDetail = (mealId: string) => {
    fetch(`${baseURL}lookup.php?i=${mealId}`);
  };

  const handleClickNav = (category: Category) => {
    setCurrentCategory(category);
    setSearch("");
  };

  return (
    <>
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
          <Header search={search} setSearch={setSearch} onSubmit={searchApi} />
        </GridItem>
        <GridItem
          pos="sticky"
          top="95px"
          left="0"
          p="5"
          bg="white"
          area={"nav"}
          height="calc(100vh - 95px)"
          overflowY="auto"
        >
          <SideNav
            categories={dataCategory}
            loading={loadingCategory}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleClick={handleClickNav}
          />
        </GridItem>
        <GridItem p="4" bg="white" area={"main"}>
          <MainContent
            loading={loadingMeal}
            loadingMealDetails={loadingMealDetails}
            meals={dataMeals}
            mealDetailsData={mealDetailsData}
            handleClick={seachMealDetail}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

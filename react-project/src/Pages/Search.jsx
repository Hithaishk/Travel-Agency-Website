export const searchData = [
  { keyword: "gokarna", route: "./Places" },
{ keyword: "mangalore", route: "./Mangalore" },
{ keyword: "bangalore", route: "./Bangalore" },
{ keyword: "hampi", route: "./Hampi" },
{ keyword: "mysuru", route: "./Mysuru" }



];

const generateRandomSearchData = (keyword) => {
  return searchData.find((item) => item.keyword === keyword.toLowerCase());
};

const Search = {
  searchData,
  generateRandomSearchData,
};

export default Search;

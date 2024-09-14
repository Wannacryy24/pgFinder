import { useContext, useEffect, useState } from "react";
import { NewsContext } from "./NewsContext";
import { useSearchParams } from "react-router-dom";

export default function Searchbar() {
  const { state, dispatch } = useContext(NewsContext);
  const [query, setQuery] = useState("");
  const [searchParams , setSearchParams] = useSearchParams();


  useEffect(()=>{
    const query = searchParams.get('q');
    if(query){
      setValue(query);
      console.log(query);
    }
  },[searchParams, setValue , value])

  
  const handleSearch = (event) => {
      const searchQuery = event.target.value.toLowerCase();
      setSearchParams({q:searchQuery});
        setQuery(searchQuery);

    const filtered = state.news.filter((article) =>
      article.title.toLowerCase().includes(searchQuery)
    );
    dispatch({ type: "Set_news", news: state.news, filteredNews: filtered });
  };

  return (
    <div className="searchbar-div">
      <input
        type="text"
        placeholder="Search News..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  const handleSearchInputChange = (value) => {
    setSearchQuery(value);
    setShowSuggestions(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Navigate");
    navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
    setShowSuggestions(false);
  };


  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        console.log(searchQuery);
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    suggestions,
    handleSubmit,
    showSuggestions,
    setShowSuggestions,
    handleSearchInputChange,
    handleSearchSubmit,
    handleSuggestionClick,
  };
};

export default useSearch;

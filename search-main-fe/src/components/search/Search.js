import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdHistory } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useHistory từ react-router-dom

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestTerm, setSuggestTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestList, setSuggest] = useState([]);
  const navigate = useNavigate(); // sử dụng useHistory để điều hướng đến đường dẫn mới

  const sampleData = ['Document 1', 'Document 2', 'Document 3', 'Document 4', 'Document 5'];

  // Suggestion
  useEffect(() => {
    // Gọi API từ ứng dụng Spring Boot
    if (suggestTerm == '') {
      // setShowResults(false);
    } else {
      axios
        .get(`http://127.0.0.1:5000/suggest?q=${suggestTerm}`)
        .then((response) => {
          setSuggest(response.data);
        })
        .catch((error) => {
          // setError(error);
          console.log('error when suggestion api');
        });
    }
  }, [suggestTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(event.target.value !== '');
    setSuggestTerm(event.target.value);
  };

  const handleDropdownItemClick = (item) => {
    // setSearchTerm(value);
    console.log('Hello', item);
    navigate('/result', { state: { searchTerm } });
    setShowDropdown(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/result', { state: { searchTerm } });
  };

  const handleInputBlur = (event) => {
    // if (!event.currentTarget.contains(event.relatedTarget)) {
    //   setShowDropdown(false);
    // }
  };

  const handleInputFocus = () => {
    if (searchTerm !== '') {
      setShowDropdown(true);
    }
  };

  // javascript
  window.addEventListener('click', (e) => {
    if (
      !document.querySelector('#voice-search')?.contains(e.target) &&
      !document.querySelector('.search__list')?.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  });

  return (
    <div className="block max-w-2xl w-[50%] m-auto">
      <div className="flex items-center">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400 z-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search the documents which you want to read..."
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSearch(e);
              }
            }}
            autoComplete="off"
            required
          />
          {showDropdown && (
            <ul className="search__list absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-lg shadow-lg pb-1">
              <div className="font-medium ml-4 mt-1 text-gray-400 border-b-[1px] text-sm">Suggestions</div>
              {suggestList.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer mx-2 px-2 py-[1px] hover:bg-[#3F96FE] text-base rounded hover:text-[white] hover:font-medium"
                  onClick={() => handleDropdownItemClick(item)}
                >
                  <AiOutlineSearch className="inline-block m-1" />
                  {item}
                </li>
              ))}
              <div className="font-medium ml-4 mt-1 mr-4 text-gray-400 border-b-[1px] text-sm">Histories</div>
              {sampleData
                .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer mx-2 px-2 py-[1px] hover:bg-[#3F96FE] text-base rounded hover:text-[white] hover:font-medium"
                    onClick={() => handleDropdownItemClick(item)}
                  >
                    <MdHistory className="inline-block m-1" />
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="inline-flex items-center py-2 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus-visible:outline-none focus:outline-none"
        >
          <svg
            className="mr-2 -ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;

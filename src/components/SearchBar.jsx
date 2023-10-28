import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    
    const handlerChange = evt => {
        setInputValue(evt.target.value);
    };
    
    const handlerSubmit = evt => {
        evt.preventDefault();

        searchParams.set('query', evt.target.elements.inputSearch.value);
        setSearchParams(searchParams);

        setInputValue('');
    };

    return (
        <form onSubmit={handlerSubmit}>
            <input
                type="text"
                name="inputSearch"
                value={inputValue}
                onChange={handlerChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};
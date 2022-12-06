import React from 'react';
import '../index.css'
import {TodoContext} from '../TodoContext';

function TodoSearch(){
    
    const {searchValue, setSearchValue} =  React.useContext(TodoContext);
    const onSearchValueChange = (event) => {	
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return(
    [
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <input className="TodoSearch border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" 
                            name="search" 
                            placeholder="Buscar"
                            value={searchValue}
                            onChange={onSearchValueChange}>
                    </input>
                </div>
            </div>
        </div>
    ]
    );
}

export {TodoSearch};
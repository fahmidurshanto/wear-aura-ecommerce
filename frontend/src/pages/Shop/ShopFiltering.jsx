import React from 'react';

const ShopFiltering = ({filters, filtersState, setFiltersState, clearFilters}) => {
    return (
        <div className='space-y-5 flex-shrink-0'>
            <h3>Filters</h3>
            {/* categories */}
            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Categories</h4>
                <hr />
                {
                    filters.categories.map((category) => (
                        <label className='capitalize cursor-pointer' key={category}>
                            <input type="radio" name="category" id='category' value={category} checked={filtersState.category === category}
                            onChange={(e) => setFiltersState({...filtersState, category: e.target.value})} />
                            <span className='ml-1'>{category}</span>
                        </label>
                    ))
                }
            </div>

            {/* sizes */}
            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Sizes</h4>
                <hr />
                {
                    filters.sizes.map((size) => (
                        <label className='capitalize cursor-pointer' key={size}>
                            <input type="radio" name="size" id='size' value={size} checked={filtersState.size === size}
                            onChange={(e) => setFiltersState({...filtersState, size: e.target.value})} />
                            <span className='ml-1'>{size}</span>
                        </label>
                    ))
                }
            </div>

        </div>
    );
};

export default ShopFiltering;
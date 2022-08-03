import { useEffect, useState } from 'react';
import { Flex, Box, Select, text, Input, Spinner, Icon, Button} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel} from 'react-icons/md';
import Image from 'next/image';
import {filterData, getFilterValues} from '../utils/filterData'



const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)
    const router = useRouter()
    //add location search. GET auto complete

    const searchProperties = (filterValues) => {
        //updating the url
const path = router.pathname;
const { query } = router;
const values = getFilterValues(filterValues)
git 
//loop over the values, updating the query
values.forEach((item) => {
    //only apply the selected value
    if(item.value && filterValues?.[item.name]) {
       
        query[item.name] = item.value
    }
})

//pathname equals to path, and query equals to query
router.push({ pathname:path, query})
    }

  return (
  <Flex p="4" justifyContent="center" flexWrap="wrap" bg="gray.100">
{filters.map((filter) => (
    <Box key={filter.queryName}>
    {/* only working at a specific filter at the moment */}
        <Select 
        placeholder={filter.placeholder}
        w="fit-content"
        p="2"
        onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}>
        {filter?.items?.map((item) => (
            <option value={item.value} key={item.value}>{item.name}</option>
        ))}
        </Select>

    </Box>
))}
  </Flex>
  )
}

export default SearchFilters
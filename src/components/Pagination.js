import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StoreContext from '../context/store/StoreContext';

export const PaginationRounded = () => {
    const { totalPages, changePage } = useContext(StoreContext);

    return (
        <Stack spacing={ 2 }>
            <Pagination 
                count={ Math.ceil(totalPages) } 
                shape="rounded" 
                onChange={ (ev, page) => changePage(page) }
                sx={{ justifyContent: 'center', alignItems: 'center' }}
            />
        </Stack>
    );
}
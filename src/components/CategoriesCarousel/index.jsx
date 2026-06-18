import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function CategoriesCarousel() {
    const [categpries, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories(){
            const response = await api.get('/categories');

            
        }
    }, []);

    return(
        <div>

        </div>
    );
}

import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function CategoriesCarousel() {
    const [categpries, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories(){
            const { data } = await api.get('/categories');

            setCategories(data);
        }

        loadCategories();
    }, []);

    return(
        <div>
            certo
        </div>
    );
}

import { useMemo, useState } from "react"

// Question 1:
// The following component is a search input that filters an array of fruits.

export default function Question1() {
    const fruits = useMemo(() => [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry',
        'Fig',
        'Grape',
        'Honeydew',
        'Kiwi',
        'Lemon',
        'Mango'
    ], [])

    const [searchTerm, setSearchTerm] = useState('')

    const filteredFruits = useMemo(() => {
        return fruits.filter(fruit =>
            fruit.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [fruits, searchTerm])

    // Highlight the search term in the fruit name
    const highlightSearchTerm = (fruit: string) => {
        if (!searchTerm) return fruit;

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return fruit.split(regex).map((part, index) =>
            part.toLowerCase() === searchTerm.toLowerCase() ? (
                <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div>
            <input type="text" placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)} />

            <div>
                {filteredFruits.length === 0 && <p>No fruits found</p>}
                {filteredFruits.map(fruit => (
                    <p key={fruit}>{highlightSearchTerm(fruit)}</p>
                ))}
            </div>
        </div>
    )
}

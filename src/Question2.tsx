import { useState } from "react"
import { useDebounce } from "./hooks/useDebounce"

// Question 1:
// The following component is a search input displays debounced values.

export default function Question2() {
    const [searchTerm, setSearchTerm] = useState('')
    const SEARCH_DELAY = 2000

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const debouncedSearchTerm = useDebounce(searchTerm, SEARCH_DELAY)

    return (
        <div>
            <input type="text" placeholder="Search here..." onChange={handleInputChange} />

            <p>
                Search term: {debouncedSearchTerm}
            </p>
        </div>
    )
}

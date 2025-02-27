import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import { FaFilter } from "react-icons/fa";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items to display per page

    // Loading data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:6001/menu");
                const data = await response.json();
                setMenu(data);
                setFilteredItems(data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    // Filtering data based on category
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);

        setCurrentPage(1);
    };

    // Show all data function
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");

        setCurrentPage(1);
    };

    // Sorting based on A-Z, Z-A, Low to High pricing
    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        // Sorting logic
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilteredItems(sortedItems);

        setCurrentPage(1);
    };

    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem )
    const paginate = (pageNumber) => setCurrentPage (pageNumber);

    return (
        <div>
            {/* Menu banner */}
            <div className='section-container bg-black'>
                <div className='py-48 flex flex-col justify-center items-center gap-8'>
                    {/* Text */}
                    <div className='text-center space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug text-white leading-snug'>
                        Find Your Best
                        Dream Bike for Rent 
                            <span className='text-orange'> ChamaBikes</span>
                        </h2>
                        <p className='text-xl text-white md:w-4/5 mx-auto'>
                        Start by browsing our bike fleet on our website. Choose the bike that suits your adventure style and preferences.
                        </p>
                        <button className='btn bg-orange px-8 py-3 font-semibold text-white rounded-full'>Book Now</button>
                    </div>
                </div>

                {/* Menu shop section */}
                <div className='section-container'>
                    {/* Filtering and sorting */}
                    <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                        {/* All category buttons */}
                        <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-white'>
                            <button onClick={showAll} className={selectedCategory === "all" ? "active" : ""}>All</button>
                            <button onClick={() => filterItems("bikes")} className={selectedCategory === "bikes" ? "active" : ""}>Bikes</button>
                            <button onClick={() => filterItems("scooters")} className={selectedCategory === "scooters" ? "active" : ""}>Scooters</button>
                            <button onClick={() => filterItems("bicycles")} className={selectedCategory === "bicycles" ? "active" : ""}>Bicycles</button>
                            
                        </div>

                        {/* Sorting options */}
                        <div className='flex justify-end mb-4 rounded-sm'>
                            <div className='bg-orange p-2'>
                                <FaFilter className='h-4 w-4 text-white'/>
                            </div>
                            <select name="sort" id="sort" onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='bg-orange text-white px-2 py-1 rounded-sm'>
                                <option value="default">Default</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Product card */}
                    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {currentItems.map((item) => (
                            <Cards key={item._id} item={item}/>
                        ))}
                    </div>
                </div>

                {/* pagination */}
                <div className='flex justify-center my-8'>
                    {
                        Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-orange text-white" : "bg-gray-200"}`}
                            >
                                {index + 1}
                            </button>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Menu;

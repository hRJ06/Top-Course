import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { toast } from "react-toastify";
import {apiUrl,filterData} from './data'
const App = () => {
  
  const [courses,setCourses] = useState('');
  const [loading,setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(typeof(data.data));
      setCourses(data.data);
      console.log(courses);
    }
    catch(err){
      toast.error("Something went wrong")
    }
    setLoading(false);
  }
  useEffect(() => {fetchData();},[]);
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter category = {category} setCategory = {setCategory} filterData = {filterData}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
          {
            loading ? <Spinner/> : <Cards courses = {courses} category={category}></Cards>
          }
        </div>
      </div>
    </div>
  );
};

export default App;

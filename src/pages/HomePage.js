import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";

const HomePage = ({ search }) => {
  return (
    <div className="holder">
      <Hero />
      <CoursesList search={search} />
      <CategoriesList />
    </div>
  );
};

export default HomePage;

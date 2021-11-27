import { useEffect, useState } from "react";

const useTour = () => {
  const [tour, setTour] = useState([]);
  console.log(tour);
  useEffect(() => {
    fetch("https://grisly-monster-73892.herokuapp.com/tour")
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  return { tour, setTour };
};
export default useTour;

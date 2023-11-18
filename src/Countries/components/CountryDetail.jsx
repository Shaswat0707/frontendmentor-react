/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
const CountryDetail = () => {
  const location = useLocation();
  const data = location.state?.country;
  console.log(data);
  return <div>{}</div>;
};

export default CountryDetail;

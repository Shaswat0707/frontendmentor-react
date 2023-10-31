import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Error Not A Page" });
    }, 1000);
  }, []);
  return (
    <>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </>
  );
};

export default NotFound;

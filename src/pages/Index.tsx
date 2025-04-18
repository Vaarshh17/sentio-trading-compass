
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// This is just a redirect component
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default Index;

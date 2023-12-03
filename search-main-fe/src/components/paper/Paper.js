import { useNavigate } from 'react-router-dom';

function Paper({ keyword, children }) {
  const navigate = useNavigate();

  const handleSearchByTopHit = () => {
    navigate('/result', { state: { searchTerm: keyword } });
  };

  return (
    <div onClick={() => handleSearchByTopHit()} className="p-2 shadow-md rounded-[8px] hover:cursor-pointer hover:bg-[]">
      {children}
    </div>
  );
}

export default Paper;

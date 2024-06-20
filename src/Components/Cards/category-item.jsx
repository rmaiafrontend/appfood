const CategoryItem = ({ nomeCategoria, onClick }) => {
  return (
    <a className=" m-2 flex items-center justify-center gap-5 rounded-full bg-white px-4 py-3 shadow-md" onClick={onClick}>
      <span className="text-sm font-semibold">{nomeCategoria}</span>
    </a>
  );
};

export default CategoryItem;

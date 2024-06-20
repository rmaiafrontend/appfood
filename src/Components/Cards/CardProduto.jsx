export function CardProduto() {
  return (
    <>
      <a className="w-[180px] h-[255px] mb-10 cursor-pointer">
        <div className="w-[180px] h-[180px] bg-[url('/produto.jpg')] bg-cover bg-no-repat bg-center bg-w-full "></div>
        <div>
          <h4 className="font-medium mt-1">Frango ao molho</h4>
          <span className="font-bold">R$ 28,00</span>
          <p className="text-slate-500">Bistro verdejante</p>
        </div>
      </a>
    </>
  );
}

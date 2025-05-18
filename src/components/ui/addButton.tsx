
export function AddButton({name}:{name:string}) {
  return (
    <button
      className="bg-primary text-white text-[16px] h-8 md:h-10 w-24 rounded-md grid items-center 
    justify-center font-semibold "
    >
      {name}
    </button>
  );
}

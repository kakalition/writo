import SearchIcon from '../../../../common-component/icons/SearchIcon';

type Params = {
  isSmall?: boolean
};

export default function SearchbarComponent({ isSmall = false }: Params) {
  const iconClass = `${isSmall ? 'w-6 h-6' : 'w-10 h-10'} stroke-gray-500 stroke-[0.1rem]`;

  return (
    <div
      id="searchbar"
      className={`flex z-[1] flex-row justify-start items-center w-full border-b-2 border-b-gray-200 shadow-md
      ${isSmall ? 'py-3 px-6' : 'py-4 px-12'}
      `}
    >
      <div className={iconClass}><SearchIcon /></div>
      <div className="w-4" />
      <form className="w-full h-full">
        <input
          aria-label="search query"
          id="query"
          className={`w-full h-full text-gray-500 placeholder:text-gray-500 bg-transparent focus:outline-0
          ${isSmall ? 'text-base' : 'text-xl'}`}
          type="text"
          name="query"
          placeholder="Covalent bonding"
        />
      </form>
    </div>
  );
}

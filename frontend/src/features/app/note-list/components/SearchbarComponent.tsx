import SearchIcon from '../../../../common-component/icons/SearchIcon';

export default function SearchbarComponent() {
  const iconClass = 'w-10 h-10 stroke-gray-500 stroke-[0.1rem]';

  return (
    <div id="searchbar" className="flex z-[1] flex-row justify-start items-center py-4 px-12 w-full border-b-2 border-b-gray-200 shadow-md">
      <div className={iconClass}><SearchIcon /></div>
      <div className="w-4" />
      <form className="w-full h-full">
        <input
          aria-label="search query"
          id="query"
          className="w-full h-full text-xl text-gray-500 placeholder:text-gray-500 focus:outline-0"
          type="text"
          name="query"
          placeholder="Covalent bonding"
        />
      </form>
    </div>
  );
}

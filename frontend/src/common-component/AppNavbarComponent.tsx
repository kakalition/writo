import GridIcon from './icons/GridIcon';
import PlusIcon from './icons/PlusIcon';
import TagIcon from './icons/TagIcon';
import UserIcon from './icons/UserIcon';

export default function AppNavbarComponent() {
  const iconClass = 'w-8 h-8 stroke-white stroke-[0.1rem]';

  return (
    <div id="navbar" className="flex flex-col justify-start items-center p-4 h-full bg-gray-900">
      <div className="p-2 w-12 h-12 bg-white rounded-lg stroke-gray-900 stroke-[0.12rem]"><PlusIcon /></div>
      <div className="h-12" />
      <div className={iconClass}><GridIcon /></div>
      <div className="h-12" />
      <div className={iconClass}><TagIcon /></div>
      <div className="h-full" />
      <div className={iconClass}><UserIcon /></div>
      <div className="h-4" />
    </div>
  );
}

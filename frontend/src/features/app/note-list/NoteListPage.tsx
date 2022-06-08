import GridIcon from '../../../common-component/icons/GridIcon';
import PlusIcon from '../../../common-component/icons/PlusIcon';
import SearchIcon from '../../../common-component/icons/SearchIcon';
import TagIcon from '../../../common-component/icons/TagIcon';
import UserIcon from '../../../common-component/icons/UserIcon';
import { NoteType } from '../typedefs/NoteType';
import NoteTileComponent from './components/NoteTileComponent';

const dummyData: NoteType[] = [
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653978464000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Test', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653892064000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653978464000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Test', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653892064000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653978464000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Test', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653892064000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653978464000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Test', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653892064000,
  },
];

function AppNavbar() {
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

function SearchbarComponent() {
  const iconClass = 'w-10 h-10 stroke-gray-500 stroke-[0.1rem]';

  return (
    <div id="searchbar" className="flex flex-row justify-start items-center py-4 px-12 w-full border-b-2 border-b-gray-200">
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

export default function NoteListPage() {
  const generatedComponent = dummyData.map(
    (data) => <NoteTileComponent key={data.timestamp} noteType={data} />,
  );

  return (
    <div id="page-container" className="flex flex-row w-screen h-screen">
      <AppNavbar />
      <div id="app-content" className="flex flex-col w-full h-full">
        <SearchbarComponent />
        <div className="grid grid-cols-5 gap-4 p-8 px-12 w-full">
          {generatedComponent}
        </div>
      </div>
    </div>
  );
}

import { useMemo, useState } from 'react';
import AppNavbarComponent from '../../../common-component/AppNavbarComponent';
import { NoteType } from '../typedefs/NoteType';
import { TagCollectionType } from '../typedefs/TagCollectionType';
import NoteListTabComponent from './components/NoteListTabComponent';
import SearchbarComponent from './components/SearchbarComponent';
import TagCardComponent from './components/TagCardComponent';
import TagListTabComponent from './components/TagListTabComponent';
import NoteListPageTabEnum from './typedefs/NoteListPageTabEnum';
import NoteDataMapper from './utils/NoteDataMapper';

const dummyData: NoteType[] = [
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#E8CBA9', text_color: '#615547' },
      { name: 'Project', body_color: '#E5CEE0', text_color: '#4B4049' },
    ],
    timestamp: 1653978467000,
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
    timestamp: 1653792064000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653988464000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Test', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1653892024000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1693978464000,
  },
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Test', body_color: '#000000', text_color: '#FFFFFF' },
    ],
    timestamp: 1553892064000,
  },
];

const dummyTags: TagCollectionType[] = [
  {
    name: 'Project',
    body_color: '#4F4F4F',
    text_color: '#FFFFFF',
    total: 12,
  },
  {
    name: 'Chemistry',
    body_color: '#E8CBA9',
    text_color: '#615547',
    total: 12,
  },
  {
    name: 'Physics',
    body_color: '#E5CEE0',
    text_color: '#4B4049',
    total: 12,
  },
  {
    name: 'Algorithm',
    body_color: '#8EA47E',
    text_color: '#F8FFEF',
    total: 12,
  },
];

export default function NoteListPage() {
  const [currentTab, setCurrentTab] = useState<NoteListPageTabEnum>(NoteListPageTabEnum.Note);

  const sortedData = dummyData.sort((a, b) => b.timestamp - a.timestamp);
  const generatedComponent = useMemo(() => NoteDataMapper(sortedData), [sortedData]);
  const generatedTags = useMemo(() => dummyTags.map(
    (element) => <TagCardComponent tag={element} />,
  ), []);

  const tabComponent = useMemo(() => {
    if (currentTab === NoteListPageTabEnum.Note) {
      return <NoteListTabComponent noteComponents={generatedComponent} />;
    }
    return <TagListTabComponent tagComponents={generatedTags} />;
  }, [currentTab, generatedComponent, generatedTags]);

  return (
    <div id="page-container" className="flex flex-row w-screen h-screen">
      <AppNavbarComponent
        currentTab={currentTab}
        onNewNoteClick={() => console.log('implement')}
        onNoteTabClick={() => setCurrentTab(NoteListPageTabEnum.Note)}
        onTagTabClick={() => setCurrentTab(NoteListPageTabEnum.Tag)}
        onUserClick={() => console.log('implement')}
      />
      <div id="app-content" className="flex flex-col w-full h-full">
        <SearchbarComponent />
        {tabComponent}
      </div>
    </div>
  );
}

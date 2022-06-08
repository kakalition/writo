import { useMemo, useState } from 'react';
import AppNavbarComponent from '../../../common-component/AppNavbarComponent';
import { NoteType } from '../typedefs/NoteType';
import SearchbarComponent from './components/SearchbarComponent';
import NoteListPageTabEnum from './typedefs/NoteListPageTabEnum';
import NoteDataMapper from './utils/NoteDataMapper';

const dummyData: NoteType[] = [
  {
    title: 'Covalent Bonding',
    body: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive an...',
    tag: [
      { name: 'Chemistry', body_color: '#000000', text_color: '#FFFFFF' },
      { name: 'Project', body_color: '#000000', text_color: '#FFFFFF' },
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

export default function NoteListPage() {
  const [currentTab, setCurrentTab] = useState<NoteListPageTabEnum>(NoteListPageTabEnum.Note);

  const sortedData = dummyData.sort((a, b) => b.timestamp - a.timestamp);
  const generatedComponent = useMemo(() => NoteDataMapper(sortedData), [sortedData]);

  const tabComponent = useMemo(() => {
    if (currentTab === NoteListPageTabEnum.Note) {
      return (
        <div className="flex overflow-y-scroll flex-col py-8 px-12 w-full">
          {generatedComponent}
        </div>
      );
    }
    return (
      <div><h1>Reserved for tab</h1></div>
    );
  }, [currentTab, generatedComponent]);

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

import { useMemo, useState } from 'react';
import AppNavbarComponent from '../../common-component/AppNavbarComponent';
import NoteListPage from './note-list/NoteListPage';
import NoteListPageTabEnum from './note-list/typedefs/NoteListPageTabEnum';
import NotePage from './note-page/NotePage';
import { NoteType } from './typedefs/NoteType';
import { TagCollectionType } from './typedefs/TagCollectionType';
import TagListPage from './tag-list/TagListPage';

const dummyData: NoteType[] = [
  {
    title: 'Advanced Covalent Bonding',
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

export default function AppPage() {
  const [currentTab, setCurrentTab] = useState<NoteListPageTabEnum>(NoteListPageTabEnum.NoteList);

  const tabComponent = useMemo(() => {
    if (currentTab === NoteListPageTabEnum.NoteList) {
      return <NoteListPage notesData={dummyData} />;
    }

    if (currentTab === NoteListPageTabEnum.TagList) {
      return <TagListPage tagCollectionData={dummyTags} />;
    }

    return <NotePage notesData={dummyData} />;
  }, [currentTab]);

  return (
    <div id="page-container" className="flex overflow-hidden flex-row w-screen h-screen">
      <AppNavbarComponent
        currentTab={currentTab}
        onNewNoteClick={() => console.log('implement')}
        onNoteListTabClick={() => setCurrentTab(NoteListPageTabEnum.NoteList)}
        onTagListTabClick={() => setCurrentTab(NoteListPageTabEnum.TagList)}
        onNoteTabClick={() => setCurrentTab(NoteListPageTabEnum.Note)}
        onUserClick={() => console.log('implement')}
      />
      <div className="w-full h-full">
        {tabComponent}
      </div>
    </div>
  );
}

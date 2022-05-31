import { Form, FormGroup } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import GridIcon from '../../../common-component/icons/GridIcon';
import PlusIcon from '../../../common-component/icons/PlusIcon';
import SearchIcon from '../../../common-component/icons/SearchIcon';
import TagIcon from '../../../common-component/icons/TagIcon';
import UserIcon from '../../../common-component/icons/UserIcon';
import { BackgroundStyles, FontStyles, SpacerStyles } from '../../../common-component/JSSUtilities';

const NoteListStyles = createUseStyles({
  pageClass: {
  },
  navbarClass: {
    padding: '0.5rem',
  },
  iconClass: {
    width: '2rem',
    height: '2rem',
    color: 'white',
    strokeWidth: '2px',
    margin: '0.5rem',
  },
  searchIconClass: {
    width: '2rem',
    height: '2rem',
    color: 'gray',
    strokeWidth: '2px',
    margin: '0.5rem',
  },
  ctaIconClass: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3rem',
    height: '3rem',
    padding: '0.5rem',
    margin: '0.5rem',
    backgroundColor: 'white',
    borderRadius: '0.8rem',
    color: 'black',
    strokeWidth: '0.1rem',
  },
  searchbarClass: {
    padding: '1rem 3rem 1rem 3rem',
    borderTop: '1px solid transparent',
    borderBottom: '1px solid gray',
  },
  searchbarInputClass: {
    width: '100%',
    height: '100%',
    color: 'gray',
    fontSize: '1.5rem',
    outlineColor: 'transparent',
    borderColor: 'transparent',
    '&:focus': {
      color: 'gray',
      outlineColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
    },
  },
});

function AppNavbar() {
  const noteListStyles = NoteListStyles();
  const fontStyles = FontStyles();
  const spacerStyles = SpacerStyles();
  const backgroundStyles = BackgroundStyles();

  return (
    <div id="navbar" className={`d-flex flex-column justify-content-start align-items-center vh-100 ${noteListStyles.navbarClass} ${backgroundStyles.bgDark}`}>
      <div className={noteListStyles.ctaIconClass}><PlusIcon /></div>
      <div className={spacerStyles.h2} />
      <div className={noteListStyles.iconClass}><GridIcon /></div>
      <div className={spacerStyles.h2} />
      <div className={noteListStyles.iconClass}><TagIcon /></div>
      <div className="h-75" />
      <div className={`${noteListStyles.iconClass}`}><UserIcon /></div>
      <div className={spacerStyles.h1} />
    </div>
  );
}

function SearchBar() {
  const noteListStyles = NoteListStyles();
  const fontStyles = FontStyles();
  const spacerStyles = SpacerStyles();
  const backgroundStyles = BackgroundStyles();

  return (
    <div id="searchbar" className={`d-flex flex-row w-100 align-items-center justify-content-start ${noteListStyles.searchbarClass}`}>
      <div className={`${noteListStyles.searchIconClass}`}><SearchIcon /></div>
      <div style={{ width: '1rem' }} />
      <div className="w-100 h-100">
        <Form className="h-100">
          <Form.Group controlId="search" className="h-100">
            <Form.Control
              className={`${fontStyles.roboto} ${noteListStyles.searchbarInputClass} h-100`}
              id="search-query"
              name="search-query"
              placeholder="Covalent Bonding"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default function NoteListPage() {
  const noteListStyles = NoteListStyles();
  const fontStyles = FontStyles();
  const spacerStyles = SpacerStyles();
  const backgroundStyles = BackgroundStyles();

  return (
    <div id="page-container" className="d-flex flex-row vh-100 vw-100">
      <AppNavbar />
      <div id="app-content" className="d-flex flex-column w-100 h-100">
        <SearchBar />
      </div>
    </div>
  );
}

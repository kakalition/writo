/* import { BackgroundStyles, FontStyles, SpacerStyles } from '../../../../common-component/JSSUtilities';
import { NoteType } from '../../typedefs/NoteType';

type Params = {
  noteType: NoteType
};

export default function NoteTileComponent({ noteType }: Params) {
  const fontStyles = FontStyles();
  const spacerStyles = SpacerStyles();
  const backgroundStyles = BackgroundStyles();

  return (
    <div
      className="d-flex flex-column bg-light"
    >
      <h2
        className={`${fontStyles.libreBaskerville}`}
        style={{
          width: '100%',
          fontSize: '2.3rem',
          color: 'black',
        }}
      >
        {noteType.title}
      </h2>
      <div style={{ height: '1rem' }} />
      <p
        className={`${fontStyles.roboto}`}
        style={{
          width: '100%',
          fontSize: '1.3rem',
          color: 'black',
          fontWeight: 300,
        }}
      >
        {noteType.body}
      </p>
      <div style={{ height: '1rem' }} />
      <p
        className={`${fontStyles.roboto}`}
        style={{
          width: '100%',
          fontSize: '1.2rem',
          color: 'gray',
        }}
      >
        {(new Date(noteType.timestamp).toDateString())}
      </p>
    </div>
  );
}
 */
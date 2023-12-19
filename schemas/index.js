// schemas/index.js
import selectedWorks from './selectedWorks';
import singleSelectedWork from './singleSelectedWork';
import archive from './archive';
import singleArchive from './singleArchive';
import limitedEditions from './limitedEditions';
import singleLimitedEdition from './singleLimitedEdition';
import selfPortraits from './selfPortraits';
import singleSelfPortrait from './singleSelfPortrait';
import about from './about';
import start from './start';

export const schemaTypes = [
  start,
  about,
  selectedWorks,
  archive,
  limitedEditions,
  selfPortraits,
  singleSelectedWork,
  singleArchive,
  singleSelfPortrait,
  singleLimitedEdition,
];

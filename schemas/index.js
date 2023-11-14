// schemas/index.js
import selectedWorks from './selectedWorks';
import singleSelectedWork from './singleSelectedWork';
import archive from './archive';
import singleArchive from './singleArchive';
import limitedEditions from './limitedEditions';
import selfPortraits from './selfPortraits';
import singleSelfPortrait from './singleSelfPortrait';

export const schemaTypes = [
  selectedWorks,
  archive,
  limitedEditions,
  selfPortraits,
  singleSelectedWork,
  singleArchive,
  singleSelfPortrait,
];

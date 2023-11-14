// This script was used to upload the documents
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Only for development use

const fs = require('fs');
const path = require('path');
const util = require('util');
const { createClient } = require('@sanity/client');

const setTimeoutPromise = util.promisify(setTimeout);

const client = createClient({
  projectId: 'zik8v5tb',
  dataset: 'production',
  token: 'sk4XjqydlDbqL28tdG1yEMo9WofmcH7bdcRRxp3lv4U7goxPtfoeFDWIRshTtpYBcMBNCmSIgDgwlXvHhx0JQgSV3AWldI7xWyVokgf0IoLu1ooDQcC0ntkE1Q2TLvDitKlAsWnQw350nxHYhOPfWskRifJDEfG63ZhSnUQoLCI0IIoDrh77',

  useCdn: false,
  apiVersion: '2023-11-13', // Replace with the current date or the version you are targeting
});

const dirPath = 'schemas/self_portraits_to_web'; // Make sure this is the correct path to your images directory

async function uploadImageToSanity(filePath) {
  const asset = await client.assets.upload('image', fs.createReadStream(filePath));
  return asset._id;
}

async function processUploads() {
  try {
    const filenames = await fs.promises.readdir(dirPath);

    for (const filename of filenames) {
      if (path.extname(filename).toLowerCase() !== '.jpg') continue;

      const title = path.basename(filename, '.jpg').replace(/_/g, '-');
      const documentId = `selfPortrait-${title}`;
      const imagePath = path.resolve(dirPath, filename);

      try {
        const assetId = await uploadImageToSanity(imagePath);
        const doc = {
          _type: 'singleSelfPortrait',
          _id: documentId,
          title: title,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: assetId,
            },
          },
        };

        await client.createOrReplace(doc);
        console.log(`Document for ${filename} uploaded with ID: ${doc._id}`);
      } catch (err) {
        console.error('Upload failed:', err.message);
      }

      await setTimeoutPromise(40); // Delay to avoid rate limit
    }
  } catch (err) {
    console.error('Error processing uploads:', err);
  }
}

processUploads();

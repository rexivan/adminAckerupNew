// This script was used to update/patch/populate the documents

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Only for development use

const fs = require('fs');
const path = require('path');
const util = require('util');
const { createClient } = require('@sanity/client');


const client = createClient({
  projectId: 'zik8v5tb',
  dataset: 'production',
  token: 'sk4XjqydlDbqL28tdG1yEMo9WofmcH7bdcRRxp3lv4U7goxPtfoeFDWIRshTtpYBcMBNCmSIgDgwlXvHhx0JQgSV3AWldI7xWyVokgf0IoLu1ooDQcC0ntkE1Q2TLvDitKlAsWnQw350nxHYhOPfWskRifJDEfG63ZhSnUQoLCI0IIoDrh77',

  useCdn: false,
  apiVersion: '2023-11-13', // Replace with the current date or the version you are targeting
});


async function updateSelfPortraits() {
    // Fetch all singleSelfPortrait document IDs
    const query = '*[_type == "singleSelfPortrait"]._id';
    const documentIds = await client.fetch(query);
  
    // Create a reference array from those IDs
    const references = documentIds.map(id => ({
      _type: 'reference',
      _ref: id,
      _key: id // Using the document ID as the unique key
    }));
  
    // Update the specific selfPortraits document
    const result = await client.patch("4a51eb93-6a23-4e51-8ec3-5b58f566fb42") // Your specific document ID
      .set({ works: references })
      .commit()
      .then(updatedDocument => {
        console.log('selfPortraits updated:', updatedDocument);
      })
      .catch(error => {
        console.error('Error updating document:', error.message);
      });
  
    return result;
  }
  
  updateSelfPortraits().catch(console.error);
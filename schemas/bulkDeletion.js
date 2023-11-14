process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

require('dotenv').config();
const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'zik8v5tb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03', 
  token: 'sk4XjqydlDbqL28tdG1yEMo9WofmcH7bdcRRxp3lv4U7goxPtfoeFDWIRshTtpYBcMBNCmSIgDgwlXvHhx0JQgSV3AWldI7xWyVokgf0IoLu1ooDQcC0ntkE1Q2TLvDitKlAsWnQw350nxHYhOPfWskRifJDEfG63ZhSnUQoLCI0IIoDrh77',
});


async function updateSelfPortraits() {
  // Remove references from selfPortraits document
  const patch = client.patch('selfPortraits') // Replace with the actual ID of your selfPortraits document
    .unset(['works']) // Assuming 'works' is the field holding the references
    .commit()
    .then(updatedDocument => {
      console.log('Removed references from selfPortraits', updatedDocument);
    })
    .catch(err => {
      console.error('Failed to update selfPortraits:', err.message);
    });

  return patch;
}

async function deleteDocuments() {
  await updateSelfPortraits(); // Ensure references are removed first

  // Fetch the IDs of documents to delete
  const query = '*[_type == "singleSelfPortrait"][0...3500]._id';
  const docsToDelete = await client.fetch(query);

  // Bulk delete operation
  const transaction = docsToDelete.reduce(
    (tx, docId) => tx.delete(docId),
    client.transaction()
  );

  await transaction.commit();
  console.log('Deleted all singleSelfPortrait documents.');
}

deleteDocuments().catch((err) => {
  console.error('Delete failed:', err.message);
});
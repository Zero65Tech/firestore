const firestore = require('@google-cloud/firestore');

exports.init = async ({ projectId, collections }) => {

  const Firestore = new firestore.Firestore({ projectId });

  exports.FieldValue = firestore.FieldValue;
  exports.Timestamp  = firestore.Timestamp;

  exports.getAll = (...refs) => Firestore.getAll(...refs);
  exports.batch  = () => Firestore.batch();

  for(let collection of collections)
    exports[collection] = Firestore.collection(collection);

  delete exports.init;

}

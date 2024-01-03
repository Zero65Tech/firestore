const firestore = require('@google-cloud/firestore');

exports.init = async ({ projectId, collections }) => {

  const Firestore = new firestore.Firestore({ projectId });

  exports.Firestore = {
    FieldValue: firestore.FieldValue,
    Timestamp: firestore.Timestamp,
    getAll: (...refs) => Firestore.getAll(...refs),
    batch: () => Firestore.batch()
  };

  for(let collection of collections)
    exports.Firestore[collection] = Firestore.collection(collection);

  delete exports.init;

}

// const admin = require('firebase-admin');
// admin.initializeApp();

// exports.updateVisitorCount = async (req, res) => {
//   const docRef = admin.firestore().collection('visitor_count').doc('counter');
//   const doc = await docRef.get();
//   const count = doc.exists ? doc.data().count + 1 : 1;
//   await docRef.set({ count });
//   res.status(200).send(`Visitor count: ${count}`);
// };
// headers = {
//     'Access-Control-Allow-Origin': '*' 
// };

// const admin = require('firebase-admin');
// admin.initializeApp();

// exports.updateVisitorCount = async (req, res) => {
//   const docRef = admin.firestore().collection('visitor_count').doc('counter');
//   const doc = await docRef.get();
//   const count = doc.exists ? doc.data().count + 1 : 1;
//   await docRef.set({ count });
  
//   const headers = {
//     'Access-Control-Allow-Origin': '*' 
//   };

//   res.status(200).set(headers).send(`Visitor count: ${count}`);
// };

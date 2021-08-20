export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}

// export function idbPromise(storeName, method, object) {
//   return new Promise((resolve, reject) => {
//     const request = window.indexedDB.open('shop-shop', 1);
//     let db, tx, store;
//     request.onupgradeneeded = function(e) {
//       const db = request.result;
//       db.createObjectStore('products', { keyPath: '_id' });
//       db.createObjectStore('categories', { keyPath: '_id' });
//       db.createObjectStore('cart', { keyPath: '_id' });
//     };

//     request.onerror = function(e) {
//       console.log('There was an error');
//     };

//     request.onsuccess = function(e) {
//       db = request.result;
//       tx = db.transaction(storeName, 'readwrite');
//       store = tx.objectStore(storeName);

//       db.onerror = function(e) {
//         console.log('error', e);
//       };

//       switch (method) {
//         case 'put':
//           store.put(object);
//           resolve(object);
//           break;
//         case 'get':
//           const all = store.getAll();
//           all.onsuccess = function() {
//             resolve(all.result);
//           };
//           break;
//         case 'delete':
//           store.delete(object._id);
//           break;
//         default:
//           console.log('No valid method');
//           break;
//       }

//       tx.oncomplete = function() {
//         db.close();
//       };
//     };
//   });
// }
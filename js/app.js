'use strict';

// Our app controller
var App = (function App() {

  var contactsList;

  // Initialises the ui elements and ask for contacts
  var init = function init() {
    contactsList = document.getElementById('contacts');

    if (!window.navigator.mozContacts) {
      alert('No hay API de contacts :(');
    } else {
      loadContacts();
    }
  };

  // Ask the api for contacts in the system
  // and append them to the list
  function loadContacts() {
    // Create a filter, in this case find all
    // and sort by given name
    var filter = {
      sortBy: 'familyName',
      sortOrder: 'descending'
    };

    // We use a cursor, since it will allow us to
    // start painting quickly
    var cursor = navigator.mozContacts.getAll(filter);
    cursor.onerror = function() {
      alert('Algo ha salido mal con la API');
    };
    cursor.onsuccess = function(evt) {
      var contact = evt.target.result;
      processContact(contact);
      cursor.continue();
    }
  }

  // Given a mozContact object, generate the DOM
  // for a contact and append to the list
  function processContact(contact) {
    /*
      <li>
      <aside class="pack-end">
        <img alt="placeholder" src="myimage.jpg">
      </aside>
      <a href="#">
        <p>Travis Gray</p>
        <p>077235678</p>
      </a>
    </li>
    */
  }
})();


window.addEventListener('load', function() {
  App.init();
});

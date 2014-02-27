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
      sortOrder: 'ascending'
    };

    // We use a cursor, since it will allow us to
    // start painting quickly
    var cursor = navigator.mozContacts.getAll(filter);
    cursor.onerror = function () {
      alert('Algo ha salido mal con la API');
    };
    cursor.onsuccess = function (evt) {
      var contact = evt.target.result;
      if (!contact) {
        return;
      }
      processContact(contact);
      cursor.continue();
    };
  }

  // This is an alternative way of loading contacts,
  // instead of a cursor, we just get a whole array at once.
  // It's slower returning the first contact, but quicker returning
  // all of them (specially if we have a huge amount of contacts)
  function alternativeLoad() {
    var filter = {
      sortBy: 'familyName',
      sortOrder: 'ascending'
    };

    // We use a cursor, since it will allow us to
    // start painting quickly
    var request = navigator.mozContacts.find(filter);
    request.onerror = function () {
      alert('Algo ha salido mal con la API');
    };
    request.onsuccess = function (evt) {
      var contacts = request.result;
      contacts.forEach(function onContact(contact) {
        processContact(contact);
      });
    };
  }

  // Given a mozContact object, generate the DOM
  // for a contact and append to the list
  function processContact(contact) {
    /*
      <li data-contact-id="1" data-phone-number="077235678">
      <aside>
        <img src="myimage.jpg">
      </aside>
      <a href="#">
        <p>Travis Gray</p>
        <p>077235678</p>
      </a>
    </li>
    */
    var li = document.createElement('li');
    // Add extra information to identify this li
    // with the contact object
    li.dataset.contactId = contact.id;
    if (contact.tel && contact.tel[0]) {
      li.dataset.phoneNumber = contact.tel[0].value;
    }
    var aside = document.createElement('aside');
    var img = document.createElement('img');

    // Put the photo if any or the default one
    if (contact.photo && contact.photo[0]) {
      updateContactPhoto(img, contact.photo[0]);
    } else {
      img.src = '/style/img/default.png';
    }
    aside.appendChild(img);
    li.appendChild(aside);
    var a = document.createElement('a');
    var pDisplay = document.createElement('p');
    pDisplay.textContent = getContactDisplay(contact);
    var pExtra = document.createElement('p');
    pExtra.textContent = getExtraInfo(contact);
    a.appendChild(pDisplay);
    a.appendChild(pExtra);
    li.appendChild(a);

    // Append to the list
    contactsList.appendChild(li);
  }

  // Utility method to setup a blob to a img element
  function updateContactPhoto(imgElem, photo) {
    var url = window.URL.createObjectURL(photo);
    imgElem.src = url;
  }

  // Utility method to get the text we display as
  // contact information
  function getContactDisplay(contact) {
    var components = [];

    if (contact.name && contact.name[0]) {
      components.push(contact.name[0]);
    } else {
      if (contact.givenName && contact.givenName[0]) {
        components.push(contact.givenName[0]);
      }
      if (contact.familyName && contact.familyName[0]) {
        components.push(contact.familyName[0]);
      }
      if (components.length === 0) {
        components.push = ['Sin nombre'];
      }
    }

    return components.join(' ');
  }

  function getExtraInfo(contact) {
    var extra = '';

    if (contact.tel && contact.tel[0]) {
      extra = contact.tel[0].value;
    } else if (contact.email && contact.email[0]) {
      extra = contact.email[0].value;
    }

    return extra;
  }

  return {
    init: init
  };
})();


window.addEventListener('load', function () {
  App.init();
});

/* TODO: How to make an input markdown file, 
 * and store it into indexedDB;
 */

(function () {
    var db, inputText, inputSubmit;
    databaseOpen(function () {
        console.log("TextThe database has been opened");
        var inputs = document.querySelectorAll('input');
        [inputText, inputSubmit] = inputs;
        inputSubmit.addEventListener('click', onSubmit);
    })
    function onSubmit(e) {
        e.preventDefault();
        databaseTodosAdd(inputText.value, function(){
            inputText.value = '';
        });
    }
    function databaseOpen(callback) {
        var version = 1;
        var request = indexedDB.open('todos', version);
        request.onupgradeneeded = function (e) {
            db = e.target.result;
            e.target.transaction.onerror = databaseError;
            db.createObjectStore('todo', { keyPath: 'timeStamp' });
        };
        request.onsuccess = function (e) {
            db = e.target.result;
            callback();
        };
        request.onerror = databaseError;
    }
    function databaseError(e) {
        console.log('An IndexedDB error has occured', e);
    };
    function databaseTodosAdd(text, callback) {
        var transaction = db.transaction(['todo'], 'readwrite');
        var store = transaction.objectStore('todo');
        var request = store.put({
            text: text,
            timeStamp: Date.now()
        })
        transaction.oncomplete = function(e) { callback(); };
        request.onerror = databaseError;
        console.log('todo added');
    }
}());

window.onload = function () {
    var appWrapper = document.getElementsByClassName('app-wrapper');
    var sideNav = document.getElementsByClassName('side-nav');
    var content = document.getElementsByClassName('content');

    sideNav[0].onclick = function () {
        appWrapper[0].style.gridTemplateColumns = '1fr';
        sideNav[0].hidden = true;
    }
    content[0].onmouseenter = function () {
        appWrapper[0].style.gridTemplateColumns = '0.5fr 1fr';
        sideNav[0].hidden = false;
    }
}




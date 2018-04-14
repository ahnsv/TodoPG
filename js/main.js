(function () {
    var db, input;
    databaseOpen(function () {
        console.log("The database has been opened");
        input = document.querySelector('input');
        document.body.addEventListener('submit', onSubmit);
    })
    function onSubmit(e) {
        e.preventDefault();
        databaseTodosAdd(input.value, function(){
            input.value = '';
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
    }
}());

window.onload = function () {
    var appWrapper = document.getElementsByClassName('app-wrapper');
    var sideNav = document.getElementsByClassName('side-nav');
    var content = document.getElementsByClassName('content');
    var input = document.getElementsByTagName('input');

    sideNav[0].onclick = function () {
        appWrapper[0].style.gridTemplateColumns = '1fr';
        sideNav[0].hidden = true;
    }
    content[0].onmouseenter = function () {
        appWrapper[0].style.gridTemplateColumns = '0.5fr 1fr';
        sideNav[0].hidden = false;
    }
    input[0].onsubmit = function() {
        console.log('hi');
    }
}




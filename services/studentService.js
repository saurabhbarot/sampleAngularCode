angular
    .module('mainApp')
    .service('studentService', studentService);  

    function studentService(){
        var studentSrv = {
            setData: setData,
            getData: getData,
            getLastId: getLastId,
            setLastId: setLastId
        };
        return studentSrv;

        function setData(data) {
            localStorage.setItem('StdList', JSON.stringify(data));
        };

        function getData() {
            return (localStorage.getItem('StdList') !== null && localStorage.getItem('StdList') !== 'undefined') ? JSON.parse(localStorage.getItem('StdList')) : [];
        };

        function setLastId(data) {
            localStorage.setItem('LastId', JSON.stringify(data));
        };

        function getLastId() {
            return (localStorage.getItem('LastId') !== null && localStorage.getItem('LastId') !== 'undefined') ? JSON.parse(localStorage.getItem('LastId')) : 0;
        };
    };
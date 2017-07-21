angular
    .module('mainApp')
    .controller('studentCtrl', studentCtrl); 

    studentCtrl.$inject = ['studentService'];
    function studentCtrl(studentService) { 

        var vm = this; 

        vm.student = {};  
        vm.isEdit = false;

        vm.stdList = studentService.getData();  

        vm.addData = function () { 
            var lastId = studentService.getLastId(); 

            vm.student.Id = angular.copy(lastId + 1);
            vm.stdList.push(vm.student);  
            studentService.setData(vm.stdList);
            studentService.setLastId(vm.student.Id);

            resetForm();  
        }  

        vm.deleteData = function (std) {  
            var _index = vm.stdList.indexOf(std);  
            vm.stdList.splice(_index, 1);  
            studentService.setData(vm.stdList);
        }  

        vm.edit = function (std) {  
            vm.isEdit = true;
            vm.student = angular.copy(std);
        }  

        vm.updateData = function () {  

            var _index = vm.stdList.map(function (val) {return val.Id}).indexOf(vm.student.Id);

            vm.stdList[_index] = vm.student;
            studentService.setData(vm.stdList);
            vm.isEdit = false;
            resetForm();  
        }  

        function resetForm() {
            vm.student = {};
        }  
    }; 
/**
 * Created by betha on 5/16/2016.
 */
Router.configure({
    notFoundTemplate: 'notFoundTemplate',
    layoutTemplate:'mainNav'
});

Router.map(function(){
    this.route('employees', {
        path: '/',
        controller: "EmployeesController",
    });

    this.route('createEmployee', {
        path: '/createEmployee',
        controller: "CreateEmployeeController",
    });


    this.route('editEmployee', {
        path: '/editEmployee',
        controller: "EditEmployeeController",
    });

    this.route('viewEmployee', {
        path: '/viewEmployee',
        controller: "viewEmployeeController",
    });

});
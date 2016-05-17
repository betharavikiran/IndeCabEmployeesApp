/**
 * Created by betha on 5/16/2016.
 */
this.EditEmployeeController = RouteController.extend(
    {
        template:"editEmployee",

        onBeforeAction: function() {
            this.next();
        },

        action: function() {
            var employeeId = Session.get("editEmployeeID");
            if(!employeeId){
                alert("Select an employee first!");
                Router.go("employees");
            }
            else{
                this.render();
            }
        },

        subscriptionSetup: function() {
            var subs = [];
            var ready = true;
            _.each(subs, function(sub) {
                if(!sub.ready())
                    ready = false;
            });
            return ready;
        },

        data: function() {
            return {
                params: this.params || {}
            };
            /*DATA_FUNCTION*/
        },

        onAfterAction: function() {
        }
    }
);

Template.editEmployee.helpers({
    employee:function () {
        var employeeId = Session.get("editEmployeeID");
        var employee = employees.findOne({_id:employeeId});
        return employee;
    },
});

Template.editEmployee.events({
    'submit form#editEmployee':function(event){
        event.preventDefault();
        
        var employeeId = Session.get("editEmployeeID");

        var updateEmployee = {
            employee_id:employeeId,
            street:$("#street").val(),
            area:$("#area").val(),
            city:$("#city").val() ,
            state:$("#state").val(),
            postalCode: $("#postalCode").val(),
            email:$("#email").val(),
            mobile:$("#mobile").val()
        };

        Meteor.call('updateEmployeeRequest', {data: updateEmployee}, function(err, response) {
            if (err) {
                alert("Error:" + err.reason);
                return;
            } else {
                var result = JSON.parse(response);

                if(result.status=="SUCCESS"){
                    alert(result.Message);
                    // Return to Employees list screen
                    Router.go('employees');
                }
            }
        });
    }
});
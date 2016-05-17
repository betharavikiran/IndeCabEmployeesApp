/**
 * Created by betha on 5/16/2016.
 */
this.CreateEmployeeController = RouteController.extend(
    {
        template:"createEmployee",

        onBeforeAction: function() {
            this.next();
        },

        action: function() {
            this.render();
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

Template.createEmployee.events({
    'submit form#createEmployee':function(event){
        event.preventDefault();

         var newEmployee = {

            first_name:$("#first_name").val() ,
            last_name:$("#last_name").val(),
            gender:$("#gender").val(),
            street:$("#street").val(),
            area:$("#area").val(),
            city:$("#city").val() ,
            state:$("#state").val(),
            postalCode: $("#postalCode").val(),
            email:$("#email").val(),
            mobile:$("#mobile").val() ,
            salary:$("#salary").val()
        };

        Meteor.call('createEmployeeRequest', {data: newEmployee}, function(err, response) {
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
})
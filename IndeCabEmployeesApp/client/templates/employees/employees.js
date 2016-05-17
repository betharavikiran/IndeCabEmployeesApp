/**
 * Created by betha on 5/16/2016.
 */
this.EmployeesController = RouteController.extend(
    {
        template:"employees",

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

Template.employees.helpers({
    employees:function () {
        return employees.find().fetch();
    },
});
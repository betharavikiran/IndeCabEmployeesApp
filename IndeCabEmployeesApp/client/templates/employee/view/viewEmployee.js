/**
 * Created by betha on 5/16/2016.
 */
this.viewEmployeeController = RouteController.extend(
    {
        template:"viewEmployee",

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

Template.viewEmployee.events({
    'click #editEmployee':function(){
        Session.set("editEmployeeID",this._id);
        Router.go('editEmployee');
    }
});
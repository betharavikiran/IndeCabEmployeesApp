/**
 * Created by betha on 5/17/2016.
 */
// run this when the meteor app is started
Meteor.startup(function() {

    // if there are no employees, create sample data
    if (employees.find().count() === 0) {

        // create sample employees
        var sample_employees = [
            {
                first_name:"Rakesh",
                last_name:"Jain",
                gender:"Male",
                street:"41",
                area:"Bhandup",
                city:"Mumbai",
                state:"Maharashtra",
                postalCode:"110001",
                email:"Rakesh.jain@gmail.com",
                mobile:"71316464",
                salary:15000
            },
            {
                first_name:"Akash",
                last_name:"sharma",
                gender:"Male",
                street:"54",
                area:"Malad",
                city:"Mumbai",
                state:"Maharashtra",
                postalCode:"110051",
                email:"Akash.sharma@gmail.com",
                mobile:"71316475",
                salary:15050
            },
            {
                first_name:"Anupam",
                last_name:"Gupta",
                gender:"Male",
                street:"854",
                area:"Kandhivali",
                city:"Mumbai",
                state:"Maharashtra",
                postalCode:"110055",
                email:"Anupam.Gupta@gmail.com",
                mobile:"71318475",
                salary:16000
            },
        ];

        // loop over each sample employee and insert into database
        _.each(sample_employees, function(employee) {
            employees.insert(employee);
        });

    }

});
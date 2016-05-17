/**
 * Created by betha on 5/16/2016.
 */
employees = new Mongo.Collection("employees");

Schema ={};

Schema.employees = new SimpleSchema({
    first_name: {
        type: String,
        label: "First Name *"
    },
    last_name: {
        type: String,
        label: "Last Name *"
    },
    gender:{
        type: String,
        label: "Gender *",
        allowedValues: ["Male","Female"],
        autoform: {
            afFieldInput: {
                firstOption: "Select Gender"
            }
        },
    },
    street: {
        type: String,
    },
    area: {
        type: String,
    },
    city: {
        type: String,
        label: 'City *',
        allowedValues: ["Mumbai","Delhi","Kolkata","Chennai"],
        autoform: {
            afFieldInput: {
                firstOption: "Select City"
            }
        },
    },
    state: {
        type: String,
        allowedValues: ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi/NCR","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttaranchal","Uttar Pradesh","West Bengal"],
        autoform: {
            afFieldInput: {
                firstOption: "Select State"
            }
        },
        label: 'State *'
    },
    postalCode: {
        type: String,
        label: "ZIP",
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail",
    },
    mobile: {
        type: String,
        label: "Mobile No. *",
        max: 10,
        min: 10,
        regEx: /^[0-9]{1,10}$/,
    },
    salary: {
        type: Number,
        label: "Salary",
        decimal: true,
    }
});

employees.attachSchema(Schema.employees, {transform: true});

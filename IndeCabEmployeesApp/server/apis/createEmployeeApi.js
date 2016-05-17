/**
 * Created by betha on 5/16/2016.
 */
if(Meteor.isServer){
    Meteor.methods({
       createEmployeeRequest: function(doc){
           var rtrn="";

           var first_name = doc.data.first_name;
           var last_name = doc.data.last_name;
           var gender = doc.data.gender;
           var street = doc.data.street;
           var area = doc.data.area;
           var city = doc.data.city;
           var state = doc.data.state;
           var postalCode = doc.data.postalCode;
           var email = doc.data.email;
           var mobile = doc.data.mobile;
           var salary = doc.data.salary;

           // perform data validation to make sure the data is in acceptable form
           // Any logic or rules before the data goes into persistence
          
           try{
               var employee = employees.insert({
                   first_name:first_name,
                   last_name:last_name,
                   gender:gender,
                   street:street,
                   area:area,
                   city:city,
                   state:state,
                   postalCode:postalCode,
                   email:email,
                   mobile:mobile,
                   salary:salary}
               );

               console.log(employee);
               rtrn = '{"status" : "SUCCESS", "Message":"Employee record was stored Successfully"}';

           }
           catch (e) {
               console.log(e);
               rtrn = '{"status" : "ERROR", "Message":"System error, Please contact Employee System Admin for support."}';
           }

           return rtrn;
       }
    });
}
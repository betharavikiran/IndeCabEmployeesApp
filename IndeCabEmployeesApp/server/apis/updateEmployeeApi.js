/**
 * Created by betha on 5/17/2016.
 */
/**
 * Created by betha on 5/16/2016.
 */
if(Meteor.isServer){
    Meteor.methods({
        updateEmployeeRequest: function(doc){

            var rtrn="";
            
            var employee_id = doc.data.employee_id;
            var street = doc.data.street;
            var area = doc.data.area;
            var city = doc.data.city;
            var state = doc.data.state;
            var postalCode = doc.data.postalCode;
            var email = doc.data.email;
            var mobile = doc.data.mobile;

            // perform data validation to make sure the data is in acceptable form
            try{
                var updateEmployee = employees.update({_id:employee_id},
                    
                    {$set:
                      {street: street,
                          area:area,
                          city:city,
                          state:state,
                          postalCode:postalCode,
                          email:email,
                          mobile:mobile
                      }
                    },
                    {multi: true});

                rtrn = '{"status" : "SUCCESS", "Message":"Employee record was updated successfully"}';
            }
            catch (e) {
                console.log(e);
                 rtrn = '{"status" : "ERROR", "Message":"System error, Please contact Employee System Admin for support."}';
            }
            return rtrn;
        }
    });
}
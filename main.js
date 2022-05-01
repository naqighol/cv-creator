var rowcount = 4;



    function genPDF() {
     
	var doc = new jsPDF();   
    let startPointNameLine =20;
    let spaceBetweenNameField = 7;
    let sizeOfFirstName = document.getElementById("fname").value.length * 2.8;
    let mNameStartPoint = startPointNameLine + sizeOfFirstName +spaceBetweenNameField  
    let sNameStartPoint = mNameStartPoint + (document.getElementById("m-name").value.length * 2.8) + spaceBetweenNameField
    // Personal Information
    doc.setFontType("Bold");
    doc.setFontSize("15");
    doc.text(20,20,document.getElementById("fname").value);

    doc.setFontType("Bold");
    doc.setFontSize("15");
    doc.text(mNameStartPoint,20,document.getElementById("m-name").value);

    doc.setFontType("Bold");
    doc.setFontSize("15");
    doc.text(sNameStartPoint,20,document.getElementById("s-name").value);

// //     doc.setFontType("normal");
// //     doc.setFontSize("12");
// //     doc.text(20,30,document.getElementById("m-email").value);

// //     doc.setFontType("normal");
// //     doc.setFontSize("12");
// //     doc.text(20,37,document.getElementById("my-number").value);


// //     // Address
// //     doc.setFontType("normal");
// //     doc.setFontSize("12");
// //     doc.text(160,25,document.getElementById("m-address").value);

// //     doc.setFontType("normal");
// //     doc.setFontSize("12");
// //     doc.text(160,30,document.getElementById("city").value);

// //     doc.setFontType("normal");
// //     doc.setFontSize("12");
// //     doc.text(160,35,document.getElementById("p-code").value);


// //     // Personel Summary
// //     doc.setFontType("bold");
// //     doc.setFontSize(16);
// //     doc.text(20,50,"Personel Summary");
// //     doc.setFontType("normal");
// //     doc.setFontSize(12);
// //     let pSummaryValue = document.getElementById("p-summary").value;
// //     summaryProfileLines = doc.splitTextToSize(pSummaryValue, 160);
// //     // const personalSummaryArray = pSummaryValue.split("");
// //     doc.text(20,57, summaryProfileLines);
    

// //     // Qualification
// //     doc.setFontType("bold");
// //     doc.setFontSize(16);
// //     doc.text(20,115,"Qualification");
// //     doc.setFontSize(14);
// //     doc.text(20,125,"Course");
// //     doc.text(70,125,"Institution");
// //     doc.text(120,125,"Year");
// //     doc.text(170,125,"Grade");

// //     doc.setFontType("normal");
// //     doc.setFontSize(12);
// //     doc.text(20,130,document.getElementById("co-1").value);
// //     doc.text(70,130,document.getElementById("i-1").value);
// //     doc.text(120,130,document.getElementById("year-1").value);
// //     doc.text(170,130,document.getElementById("grade-1").value);

  
// //     doc.setFontSize(12);
// //     doc.text(20,140,document.getElementById("co-2").value);
// //     doc.text(70,140,document.getElementById("i-2").value);
// //     doc.text(120,140,document.getElementById("year-2").value);
// //     doc.text(170,140,document.getElementById("grade-2").value);
  
// //     doc.setFontSize(12);
// //     doc.text(20,150,document.getElementById("co-3").value);
// //     doc.text(70,150,document.getElementById("i-3").value);
// //     doc.text(120,150,document.getElementById("year-3").value);
// //     doc.text(170,150,document.getElementById("grade-3").value);

// //     doc.setFontSize(12);
// //     doc.text(20,160,document.getElementById("co-4").value);
// //     doc.text(70,160,document.getElementById("i-4").value);
// //     doc.text(120,160,document.getElementById("year-4").value);
// //     doc.text(170,160,document.getElementById("grade-4").value);


// //     // Work Experience     
// //     doc.setFontType("bold");
// //     doc.setFontSize(16);
// //     doc.text(20,180,"Work Experience");    
// //     doc.setFontType("normal");
// //     doc.setFontSize(12);
// //     // doc.text(20,190,document.getElementById("w-experience").value);
// //     let workExperienceString = document.getElementById("w-experience").value;
// //     const workExperienceLine = doc.splitTextToSize(workExperienceString, 160);
// //     // const personalSummaryArray = pSummaryValue.split("");
// //     doc.text(20,190, workExperienceLine);


// //     // Work Hobbies     
// //     doc.setFontType("bold");
// //     doc.setFontSize(16);
// //     doc.text(20,240,"Hobbies and Interests");    
// //     doc.setFontType("normal");
// //     doc.setFontSize(12);
// //     let hobbeisAndInterestString = document.getElementById("in-hobby").value;
// //     const hobbeisAndInterestLine = doc.splitTextToSize(hobbeisAndInterestString, 160)
// //     doc.text(20,250,hobbeisAndInterestLine);
// //     [workExperienceLine,  hobbeisAndInterestLine, ]


    doc.save('CV.pdf');
}

// // form Validation 
// $(function () {
//     $('#fname_error_message').hide();
//     $('#sname_error_message').hide();
//     $('#email_error_message').hide();

//     let error_fname, erro_sname, error_email = false;
    
//     $('#form_fname').focusout(function(){
//         check_fname();
//     });
//     $('#form_sname').focusout(function(){
//         check_sname();
//     });
//     $('#form_email').focusout(function(){
//         check_email();
//     });

//     function check_fname() {
//         let pattern = /^[a-zA-Z]*$/;
//         let fname = $('#form_fname').val();
//         if (pattern.test(fname) && fname !== "") {
//             $('#fname_error_message').hide();
//             $('#forn_fname').css("border-bottom", "2px solid #34F458");
//         }else {
//             $('#fname_error_message').html("should contain only letters");
//             $('#fname_error_message').show();
//             $('#form_fname').css("border-bottom", "2px solid #F90A0A");
//             error_fname = true
//         }
//     }
//     function check_sname() {
//         let pattern = /^[a-zA-Z]*$/;
//         let sname = $('#form_sname').val();
//         if (pattern.test(sname) && sname !== "") {
//             $('#sname_error_message').hide();
//             $('#form_sname').css("border-bottom", "2px solid #34F458");
//         }else {
//             $('#sname_error_message').html("should contain only letters");
//             $('#sname_error_message').show();
//             $('#form_sname').css("border-bottom", "2px solid #F90A0A");
//             error_fname = true
//         }
//     }

//     function check_email() {
//         let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})? *$/;
//         let email = $('#form_email').val();
//         if (pattern.test(email) && email !== "") {
//             $('#email_error_message').hide();
//             $('#form_email').css("border-bottom", "2px solid #34F458");
//         }else {
//             $('#email_error_message').html("Invalid Email");
//             $('#email_error_message').show();
//             $('#form_email').css("border-bottom", "2px solid #F90A0A");
//             error_fname = true
//         }
//     }


//     $('#regisgtrationForm').submit(function () {
//         error_fname, erro_sname, error_email = false;

//         check_fname();
//         check_sname();
//         check_email();
//         if (error_fname === false && erro_sname === false && error_email === false){
//             alert("registration successfully")
//             return true;
//         }else {
//             alert("please fill the form correctly");
//             return false;
//         }
//     })



// })

$().ready(function() {
    $("#signupForm").validate({
        rules: {
            fname: {
                required: true,
                maxlength: 18
            },
            mname: {
                required: true,
                maxlength: 18
            },
            sname: {
                required: true,
                maxlength: 18
            }


                
            // sname: "required",
          
        },
        messages: {
            name: {
                required: "Please enter your first name",
                maxlength: "name cannot be more than 18 charcters"
            },
            mname: {
                required: "Please enter your first name",
                maxlength: "name cannot be more than 18 charcters"
            },
            sname:  {
                required: "Please enter your first name",
                maxlength: "name cannot be more than 18 charcters"
            } 
            // sname: "Please enter your sur name",
        },

        submitHandler: function (form) {
            genPDF();
            form.submit();
        }
    })
})
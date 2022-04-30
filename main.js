var rowcount = 4;



    function genPDF() {
	var doc = new jsPDF();   

    // Personal Information
    doc.setFontType("Bold");
    doc.setFontSize("15");
    doc.text(20,20,document.getElementById("name").value);

    doc.setFontType("Bold");
    doc.setFontSize("15");
    doc.text(45,20,document.getElementById("m-name").value);

    doc.setFontType("Bold");
    doc.setFontSize("15");
    doc.text(50,20,document.getElementById("s-name").value);

    doc.setFontType("normal");
    doc.setFontSize("12");
    doc.text(20,30,document.getElementById("m-email").value);

    doc.setFontType("normal");
    doc.setFontSize("12");
    doc.text(20,37,document.getElementById("my-number").value);


    // Address
    doc.setFontType("normal");
    doc.setFontSize("12");
    doc.text(160,25,document.getElementById("m-address").value);

    doc.setFontType("normal");
    doc.setFontSize("12");
    doc.text(160,30,document.getElementById("city").value);

    doc.setFontType("normal");
    doc.setFontSize("12");
    doc.text(160,35,document.getElementById("p-code").value);


    // Personel Summary
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20,50,"Personel Summary");
    doc.setFontType("normal");
    doc.setFontSize(12);
    let pSummaryValue = document.getElementById("p-summary").value;
    summaryProfileLines = doc.splitTextToSize(pSummaryValue, 160);
    // const personalSummaryArray = pSummaryValue.split("");
    doc.text(20,57, summaryProfileLines);
    

    // Qualification
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20,115,"Qualification");
    doc.setFontSize(14);
    doc.text(20,125,"Course");
    doc.text(70,125,"Institution");
    doc.text(120,125,"Year");
    doc.text(170,125,"Grade");

    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20,130,document.getElementById("co-1").value);
    doc.text(70,130,document.getElementById("i-1").value);
    doc.text(120,130,document.getElementById("year-1").value);
    doc.text(170,130,document.getElementById("grade-1").value);

  
    doc.setFontSize(12);
    doc.text(20,140,document.getElementById("co-2").value);
    doc.text(70,140,document.getElementById("i-2").value);
    doc.text(120,140,document.getElementById("year-2").value);
    doc.text(170,140,document.getElementById("grade-2").value);
  
    doc.setFontSize(12);
    doc.text(20,150,document.getElementById("co-3").value);
    doc.text(70,150,document.getElementById("i-3").value);
    doc.text(120,150,document.getElementById("year-3").value);
    doc.text(170,150,document.getElementById("grade-3").value);

    doc.setFontSize(12);
    doc.text(20,160,document.getElementById("co-4").value);
    doc.text(70,160,document.getElementById("i-4").value);
    doc.text(120,160,document.getElementById("year-4").value);
    doc.text(170,160,document.getElementById("grade-4").value);


    // Work Experience     
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20,180,"Work Experience");    
    doc.setFontType("normal");
    doc.setFontSize(12);
    // doc.text(20,190,document.getElementById("w-experience").value);
    let workExperienceString = document.getElementById("w-experience").value;
    const workExperienceLine = doc.splitTextToSize(workExperienceString, 160);
    // const personalSummaryArray = pSummaryValue.split("");
    doc.text(20,190, workExperienceLine);


    // Work Hobbies     
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20,240,"Hobbies and Interests");    
    doc.setFontType("normal");
    doc.setFontSize(12);
    let hobbeisAndInterestString = document.getElementById("in-hobby").value;
    const hobbeisAndInterestLine = doc.splitTextToSize(hobbeisAndInterestString, 160)
    doc.text(20,250,hobbeisAndInterestLine);
    [workExperienceLine,  hobbeisAndInterestLine, ]


    doc.save('CV.pdf');
}

// form Validation 
$('#formValidation').validate({
    rules:{
        name: {
            minlength: 2
        }
    }, 
    messeges: {
        name: {
            required: "Please enter your name",
            minlength: "Name must be at least 2 characters"
        }
    },

    submitHandler: function (form ) {
        // form.genPDF();
        genPDF();
    }
})

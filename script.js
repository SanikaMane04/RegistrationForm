function input() {
    
    let fullName = prompt("Enter your full name:");
    let aadharNumber = prompt("Enter your Aadhar Number:");
    let pancardaNumber = prompt("Enter your Pancard Number:");
    let mobileNumber = prompt("Enter your Mobile Number:");
    let birthDate = prompt("Enter your birth date (DD/MM/YYYY):");
    
    let nameParts = fullName.split(" ");
    let firstName = nameParts[0];
    let lastName = nameParts[nameParts.length - 1];
    let middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : "";

    
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name: ${middleName}`);
    console.log(`Last Name: ${lastName}`);

    // Aadhar number
    if (!/^\d{12}$/.test(aadharNumber)) 
    {
        console.error("Error: Aadhar number must be 12 digits.");
        return;
    }
    console.log(`Aadhar Number :${aadharNumber}`);

    //Mobile number
    if(!/^[6-9]\d{9}$/.test(mobileNumber))
    {
        console.error("Error: Mobile number must be 10 digits and starts from(6-9)");
        return;
    }
    console.log(`Mobile Number:${mobileNumber}`);

    // Pancard number
    if(!/^[A-Z]{4}\d{4}[A-Z]$/.test(pancardaNumber))
    {
        console.error("Pancard number must starts with 4 capital letters, after that 4 digit, and end with one alphabate");
        return;
    }
    console.log(`Pancard Number: ${pancardaNumber}`);

    //date of birth
    let birthDateObj = new Date(birthDate.split('/').reverse().join('-'));
    let currentDate = new Date();
    if (birthDateObj > currentDate) 
     {
        console.error("Error: Birth date cannot be in the future.");
        return;
    }
    console.log(`Date of Birth: ${birthDate}`);

    // marks of 5 subject and persentage

    let mark1 =prompt("Enter marks for Subject 1:");
    if (isNaN(mark1) || mark1 < 0 || mark1 > 100) 
    {
        console.error("Error: Please enter valid marks between 0 and 100 for Subject 1");
        return;
    }
    let mark2 = prompt("Enter marks for Subject 2:");
    if (isNaN(mark2) || mark2 < 0 || mark2 > 100) 
    {
        console.error("Error: Please enter valid marks between 0 and 100 for Subject 2");
        return;
    }
    let mark3 = prompt("Enter marks for Subject 3:");
    if (isNaN(mark3) || mark3 < 0 || mark3 > 100) 
    {
        console.error("Error: Please enter valid marks between 0 and 100 for Subject 3");
        return;
    }
    let mark4 = prompt("Enter marks for Subject 4:");
    if (isNaN(mark4) || mark4 < 0 || mark4 > 100)
    {
        console.error("Error: Please enter valid marks between 0 and 100 for Subject 4");
        return;
    }
    let mark5 = prompt("Enter marks for Subject 5:");
    if (isNaN(mark5) || mark5 < 0 || mark5 > 100) 
    {
        console.error("Error: Please enter valid marks between 0 and 100 for Subject 5");
        return;
    }
    let mark6 = prompt("Enter marks for Subject 6:");
    if (isNaN(mark6) || mark6 < 0 || mark6 > 100) 
    {
        console.error("Error: Please enter valid marks between 0 and 100 for Subject 6");
        return;
    }

    
    let marks = [parseFloat(mark1), 
                parseFloat(mark2), 
                parseFloat(mark3), 
                parseFloat(mark4), 
                parseFloat(mark5), 
                parseFloat(mark6)];

                
    // Sort the marks in descending order to get the best 5 marks
    marks.sort((a, b) => b - a);

    
    let bestFiveMarks = marks.slice(0, 5);
    let totalMarks = bestFiveMarks.reduce((acc, mark) => acc + mark, 0);
    let percentage = (totalMarks / 500) * 100; 

    
    console.log(`Marks for Subjects: ${marks}`);
    console.log(`Best 5 Marks: ${bestFiveMarks}`);
    console.log(`Total Marks for Best 5 Subjects: ${totalMarks}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);

}



input();

function coursesPrices(isFundamentals, isAdvanced, isApplications, educationForm) {

    const courses = {
        'Fundamentals' : 170,
        'Advanced' : 180,
        'Apps' : 190,
    };

    let totalPrice = 0

    if (isFundamentals) {
        totalPrice += courses['Fundamentals'];
    } 
    if (isAdvanced) {
        totalPrice += courses['Advanced'];
    }
    if (isApplications) {
        totalPrice += courses['Apps'];
    }
    
    if (isFundamentals && isAdvanced) {
        totalPrice -= courses['Advanced'] * 0.1;
    }    
    if (isFundamentals && isAdvanced && isApplications) {
        totalPrice -= totalPrice * 0.06;
    }
    if (educationForm === 'online') {
        totalPrice -= totalPrice * 0.06;
    }

    console.log(Math.round(totalPrice));
}

coursesPrices(true, true, false, "onsite");
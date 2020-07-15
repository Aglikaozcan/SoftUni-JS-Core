function bmi(name, age, weight, height) {
    let patient = {
        name: name,
        personalInfo: { age, weight, height },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: ''
    };

    if (patient.BMI < 18.5) {
        patient.status = 'underweight';
    } else if (patient.BMI < 25) {
        patient.status = 'normal';
    } else if (patient.BMI < 30) {
        patient.status = 'overweight';
    } else {
        patient.status = 'obese';
        patient.recommendation = 'admission required';
    }

    return patient;
}

console.log(bmi('Honey Boo Boo', 9, 57, 137));
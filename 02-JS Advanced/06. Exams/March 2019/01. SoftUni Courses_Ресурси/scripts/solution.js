function solve() {
   let courses = {
      'Fundamentals': 170,
      'Advanced': 180,
      'Applications': 190,
      'Web': 490
   };

   let educationForm = ['online', 'onsite'];

   let totalPrice = 0;

   if (courses['Fundamentals']) {
      totalPrice += courses['Fundamentals'];
   }
   if (courses['Advanced']) {
      totalPrice += courses['Advanced'];
   }
   if (courses['Applications']) {
      totalPrice += courses['Applications'];
   }

   if (courses['Fundamentals']
      && courses['Advanced']) {
      totalPrice -= courses['Advanced'] * 0.1;
   }
   if (courses['Fundamentals']
      && courses['Advanced']
      && courses['Applications']) {
      totalPrice -= totalPrice * 0.06;
   }

   if(educationForm['online']) {
      totalPrice -= totalPrice * 0.06;
   }
}

solve();
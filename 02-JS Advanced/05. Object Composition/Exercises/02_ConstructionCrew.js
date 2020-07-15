function constructionCrew(object) {
    if (object.dizziness) {
        let waterIntake = 0.1 * object.weight * object.experience;
        object.levelOfHydrated += waterIntake;
        object.dizziness = false;
    }

    return object;
}

constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );
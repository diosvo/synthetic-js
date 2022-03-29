// Single Responsibility Principle

function Logger(message) {
  console.log(message);
}

class CaloriesTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  track(count) {
    this.currentCalories += count;
    if (this.currentCalories > this.maxCalories) {
      Logger("Max calories exceed");
    }
  }
}

const tracker = new CaloriesTracker(10000);
tracker.track(20000);

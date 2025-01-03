const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const g = document.querySelector("input[name='g']:checked")?.value;
    const weight = parseFloat(document.querySelector("#weight").value);
    const height = parseFloat(document.querySelector("#height").value);
    const age = parseFloat(document.querySelector("#age").value);
    const activity_level = document.querySelector("#activity-level").value;

    let bmr;
    let activity_factor;
    let maintenanceCalories;

    if (g && weight && height && age && activity_level) {
        if (g == "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        }
        else if (g == "female") {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        
        if (activity_level == "sedentary") {
            activity_factor = 1.2;
            maintenanceCalories = bmr * activity_factor;
        }
        else if (activity_level == "lightly-active") {
            activity_factor = 1.375;
            maintenanceCalories = bmr * activity_factor;
        }
        else if (activity_level == "moderately-active") {
            activity_factor = 1.55;
            maintenanceCalories = bmr * activity_factor;
        }
        else if (activity_level == "very-active") {
            activity_factor = 1.725;
            maintenanceCalories = bmr * activity_factor;
        }
        else if (activity_level == "super-active") {
            activity_factor = 1.9;
            maintenanceCalories = bmr * activity_factor;
        }
        results.innerHTML = `${maintenanceCalories.toFixed(2)} calories/day`;
    }
});

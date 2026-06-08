

function trackInternet() {

    let plan = prompt("Enter monthly internet fee:");
    let months = prompt("Enter number of months:");

    let total = Number(plan) * Number(months);

    alert("Total Internet Subscription Cost: ₱" + total);

}


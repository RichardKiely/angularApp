const index = function (req, res) {
  res.render("index", { title: "Hotel Finder" });
};
const register = function (req, res) {
  res.render("register", {
    title: "Register",
    pageHeader: {
      title: "Signup",
    },
    details: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email address",
      password: "Password",
      startFree: "Get Started for free",
      alreadyHave: "Already have an account?",
    },
  });
};
const content = function (req, res) {
  res.render("content", {
    title: "Hotel Info",
    pageHeader: {
      title: "Hotel Finder",
      strapline: "Hotels that cater for weddings near you!",
    },
    locations: [
      {
        name: "Brandon Hotel",
        address: "Prince's St, Tralee, Co. Kerry, V92 PVK6",
        rating: 5,
        facilities: ["Dance Hall", "Good Food ", "Premium wedding room"],
        cost: "€100",
      },
      {
        name: "Ballygarry Hotel",
        address: "Leebrook, Tralee, Co. Kerry, V92 W279",
        rating: 2,
        facilities: ["Chapel", "Excellent Food", "Premium service"],
        cost: "€200",
      },
      {
        name: "Meadowlands Hotel",
        address: "Oakpark, Tralee, Co. Kerry",
        rating: 1,
        facilities: ["DJ", "Food", "Premium rooms"],
        cost: "€99",
      },
    ],
  });
};

const about = function (req, res) {
  res.render("generic-text", { title: "About" });
};

module.exports = {
  index,
  register,
  content,
  about,
};

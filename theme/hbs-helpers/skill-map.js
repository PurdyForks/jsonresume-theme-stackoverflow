const Handlebars = require('handlebars');

function skillMap(str) {
  switch(str) {
    case "master":
      return "Mentored others"
    case "advanced":
      return "Used professionally"
    case "intermediate":
      return "Used privately"
    case "beginner":
      return "Learning"
  }
}

Handlebars.registerHelper('skillMap', str => skillMap(str.toLowerCase()));

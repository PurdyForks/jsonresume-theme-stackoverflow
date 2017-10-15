const skillMap = (str) => {
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

module.exports = { skillMap };

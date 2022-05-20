// @desc:   View dashboard
// @path:   GET /dashboard
// @access: PRIVATE
const dashboardHome = (req, res) => {
  res.render("dashboard", {title: "Dashboard"})
}

// @desc:   View classes in dashboard
// @path:   GET /dashboard
// @access: PRIVATE
const dashboardClasses = (req, res) => {
  res.render("classes", {title: "classes"})
}

export { dashboardHome }

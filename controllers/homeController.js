// @desc:   View homepage
// @path:   GET /
// @access: PUBLIC
const home = (req, res) => {
  res.render("index")
}

export { home }

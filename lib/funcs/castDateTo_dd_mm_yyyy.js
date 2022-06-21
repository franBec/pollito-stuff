const castDateTo_dd_mm_yyyy = (dateAsString) => {
  //expects a string like: 2002-04-16T23:16:30.859Z

  var date = new Date(dateAsString)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var dt = date.getDate()

  if (dt < 10) {
    dt = '0' + dt
  }
  if (month < 10) {
    month = '0' + month
  }
  return dt + '/' + month + '/' + year
}

export default castDateTo_dd_mm_yyyy

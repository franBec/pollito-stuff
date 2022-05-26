const castDateTo_dd_mm_yyyy = (date) => {
    var dd = String(date.getDate()).padStart(2, '0')
    var mm = String(date.getMonth() + 1).padStart(2, '0')
    var yyyy = String(date.getFullYear())
    return dd + '/' + mm + '/' + yyyy
  }

export default castDateTo_dd_mm_yyyy
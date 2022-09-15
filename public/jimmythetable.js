fetch('/api/jimmythe', {
  method: 'POST'
}).then((res) => {
  res.json().then(result => {
    console.table(result)
    for (const [key, value] of Object.entries(result)) {
      const input = document.getElementsByName(key)[0];
      if (input) {
        input.value = value;
      }
    }
  })
})
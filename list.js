$.ajax({
  url: "./assets/DB/listData.json",
  dataType: "json",
  success: (data) => {
    console.log(data);

    if (data) {
      $.each(data, (idx, elem) => {
         const dataList = `
      <img src=${elem.url} alt=${elem.title}>
      <h3>${elem.title}</h3>
      <p>${elem.price}</p>
     `;
        $('.sub-products ul li').eq(idx).append(dataList);
      });
    }
  },
  error: (xhr, status, error) => {
    console.log('AJAX 요청 실패:', xhr, status, error);
  }
});
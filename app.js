//a function get aimtell dashborad sites list
function showSites() {
  $.ajax({
    url: "https://aimtell.com/files/sites.json",
    dataType: "json",
    success: function(resp) {
      var html = "";
      if (resp.count > 0) {
        // We're going to loop here
        $.each(resp.sites, function(i, data) {
          html += "<tr>";
          html += "<td>" + data.id + "</td>";
          html += "<td>" + data.uid + "</td>";
          html += "<td>" + data.url + "</td>";
          html += "<td>" + data.name + "</td>";
          html +=
            "<td><img src='" +
            data.icon +
            "' width='25px' height='25px' /></td>";
          html += "<td>" + data.promptId + "</td>";
          html += "<td>" + data.webPushID + "</td>";
          html += "<td>" + data.auto_prompt + "</td>";
          html += "<td>" + data.createdAt + "</td>";
          html += "<td>" + data.active + "</td></tr>";
        });
      } else {
        //empty results
        html += '<tr><td colspan="10">No Records found</td></tr>';
      }
      $("#siteslist").html(html);
    },
    error: function(err) {
      //Get ajax error status code and message into console
      let error = `Ajax error: ${err.status} - ${err.statusText}`;
      console.log(error);
    }
  });
}

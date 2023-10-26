function getUsers(type) {
    var xhr = new XMLHttpRequest();
    var url = "/src/scoreSender.php";
    xhr.open("Post", url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            var tableBody = document.getElementById("userTableBody");
            if (tableBody) {
                while (tableBody.rows.length > 0) {
                    tableBody.deleteRow(0);
                }
            }

            for (var i = 0; i < users.length; i++) {
                var row = tableBody.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);

                cell1.innerHTML = users[i].user_name;
                cell2.innerHTML = users[i].width + "/" + users[i].height;
                cell3.innerHTML = users[i].speed;
                cell4.innerHTML = users[i].score;
                cell5.innerHTML = users[i].timestamp;
            }
        }
    };
    var data = "type=" + type;
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
}
function changeType(){
    getUsers("user");
    console.log("s");
}
var scoreButton = document.getElementById("myScoreButton");
scoreButton.addEventListener("click", this.changeType);
getUsers("all");
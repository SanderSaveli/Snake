function getUsers() {
    var xhr = new XMLHttpRequest();
    var url = "/src/scoreSender.php";
    xhr.open("Post", url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("good");
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            var tableBody = document.getElementById("userTableBody");

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

    xhr.send();
}

getUsers();
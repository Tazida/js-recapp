document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "lightblue";
  }
});
document.getElementById("third").addEventListener("click", function () {
  const third = document.getElementById("third_friend");
  third.style.textAlign = "center";
});

document.getElementById("add").addEventListener("click", function () {
  const friendContainer = document.getElementById("friend");
  const friend = document.createElement("div");
  friend.classList.add("friend");
  friend.innerHTML = `
  <h3 class="friend-name">New Friend</h3>
  <p>Something new add</p> 
  
  `;
  friendContainer.appendChild(friend);
});

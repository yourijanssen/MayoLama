function eventLogOut() {
  const logout = document.getElementById("logoutId");
  logout?.addEventListener("click", localstorageClear);
}
eventLogOut()

function localstorageClear() {
  localStorage.clear();
  alert("You are logged out !");
  window.location.href = "index.html";
}
/**
 * 
 * 
 */
function eventEditPage() {
  const edit = document.getElementById("editAccountId");
  edit?.addEventListener("click", sendToMyAccountPage);
}
eventEditPage()

function sendToMyAccountPage() {
  window.location.href = "account.html";
}

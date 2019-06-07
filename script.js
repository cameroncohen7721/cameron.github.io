document.getElementById("toronto").addEventListener("click",changeSite1)
document.getElementById("goldenstate").addEventListener("click",changeSite2)
function changeSite1()
{
    window.location.replace('https://www.espn.com/nba/team/roster/_/name/tor/toronto-raptors')
}
function changeSite2()
{
  window.location.replace('https://www.espn.com/nba/team/roster/_/name/gs/golden-state-warriors') 
}
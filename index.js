const userName = 'mguevara717'
const uri = `https://api.github.com/`
const results = document.getElementById("results")
const repo = '/learn-co-curriculum/javascript-fetch-lab'
const fork = `${userName}/javascript-fetch-lab`
const issuesContainer = document.getElementById("issues")

function getIssues(data) {
  fetch(`${uri}repos/${fork}/issues`)
    .then((response) => {
      return response.json()
    })
    .then((jsonObj) => {
      jsonObj.forEach((item) => {
        issuesContainer.innerHTML += `<li>Title: <a href="${item.url}">${item.title} </a><span> | Body: ${item.body}</span></li>`
    })
  })
}

function createIssue() {
  const titleText = document.getElementById('title').value //get string
  const bodyText = document.getElementById('body').value //get string


  fetch(`${uri}/repos/${fork}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${getToken()}`
      },
      body: ({
        title: titleText,
        body: bodyText
      })
    })
    .then(response => getIssues(data))



} //end of createIssue()

function Repo(attributes) {
  this.url = attributes.url;
}

function forkRepo() {
  fetch(`${uri}repos${repo}/forks`, {
    method: 'POST',
    Authorization: `token ${getToken()}`
  })
  .then((response) => {
    let myRepo = new Repo(response)
    results.innerHTML += `<h3>Forked Successfully!</h3><a href="${myRepo.url}">${myRepo.url}</a>`
  })

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");


/*siteNameInputEl.addEventListener("change",function(event)
{
    if(event.target.value==="")
    {
        siteNameInputEl.textContent = "Required*";
        siteNameInputEl.classList.add("errorcolor");
    }
    else{
         siteNameErrMsgEl.textContent = "";
    }
    
});

siteUrlInputEl.addEventListener("change",function(event)
{
    if(event.target.value==="")
    {
        siteUrlInputEl.textContent = "Required*";
        siteUrlInputEl.classList.add("errorcolor");
    }
    else{
         siteUrlInputEl.textContent = "";
    }
    
});
  */

let validate = function() {
    event.preventDefault();
    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    console.log(siteName);
    console.log(siteUrl);
    if (siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteNameErrMsgEl.classList.add("errorcolor");
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    if (siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.classList.add("errorcolor");
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
    if (siteName !== "" && siteUrl !== "") {
        let divLi = document.createElement("div");
        let site = document.createElement("li");
        let url = document.createElement("a");
        site.textContent = siteName;
        divLi.appendChild(site);

        url.href = siteUrl;
        url.target = "_blank";
        url.textContent = siteUrl;
        divLi.appendChild(url);

        bookmarksListEl.appendChild(divLi);
    }
}
bookmarkFormEl.addEventListener("submit", validate);
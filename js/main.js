const showBase = document.getElementById("showBase");
const showCookie = document.getElementById("showCookie");
const showDoctype = document.getElementById("showDoctype");
const showBrowserMode = document.getElementById("showBrowserMode");
const showRelativeURI = document.getElementById("showRelativeURI");
const showDOMimplementation = document.getElementById("showDOMimplementation");
const showEncodeingType = document.getElementById("showEncodeingType");
const showErrorChecking = document.getElementById("showErrorChecking");
const showTitle = document.getElementById("showTitle");
const showInput = document.getElementById("showInput");
const btn = document.getElementById("btn");

const base = document.baseURI;
showBase.textContent = base;

const cookie = document.cookie;
showCookie.textContent = cookie;

const doctypeName = document.doctype.name;
showDoctype.textContent = doctypeName;

const browserMode = document.documentMode;
showBrowserMode.textContent = browserMode;

const relativeURI = document.documentURI;
showRelativeURI.textContent = relativeURI;

const imp = document.implementation;
showDOMimplementation.textContent = imp;

const encodingType = document.inputEncoding;
showEncodeingType.textContent = encodingType;

let errorChecking = (document.strictErrorChecking = true | false);
showErrorChecking.textContent = errorChecking;

const title = document.title;
showTitle.textContent = title;

function onInput() {
  const inputData = document.getElementById("inputArea").value;
  showInput.textContent = inputData;
}

function onMouseEnter() {
  console.log("onMouseEnter function is excecuted");
  btn.style.display = "none";
}

function onMouseOut() {
  console.log("onMouseOut function is excecuted");
  btn.style.display = "block";
}

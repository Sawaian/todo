(()=>{"use strict";const t=(()=>{let t=document.getElementById("content"),e=document.createElement("div");return e.setAttribute("id","taskBody"),t.appendChild(e),{taskBody:e}})();(()=>{let e=document.createElement("form");e.setAttribute("method","get");let o=document.createElement("input");o.setAttribute("name","title"),o.setAttribute("type","text"),o.setAttribute("id","titleDom");let n=document.createElement("input");n.setAttribute("name","desc"),n.setAttribute("type","text"),n.setAttribute("id","descDom");let i=document.createElement("input");i.setAttribute("type","submit"),i.setAttribute("id","submit"),e.appendChild(o),e.appendChild(n),e.appendChild(i),t.taskBody.appendChild(e)})(),console.log("taskworks"),document.getElementById("submit").addEventListener("click",(()=>{let t=document.getElementById("titleDom").value;localStorage.setItem("title",t),console.log(localStorage.getItem(t))})),console.log("this page is working."),console.log("this update is working."),console.log("second update")})();
(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/profile-image.ffa92d08.jpg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/scatterbrain.882d5bcb.png"},function(e,t,a){e.exports=a.p+"static/media/Screenshot (11).6fad5bab.png"},function(e,t,a){e.exports=a.p+"static/media/IRISscreenshot.d1c91f33.png"},function(e,t,a){e.exports=a.p+"static/media/git-it-done.cffa4673.png"},function(e,t,a){e.exports=a.p+"static/media/acess-boost.c50b97a0.png"},function(e,t,a){e.exports=a.p+"static/media/work-day-sched..a7f6d084.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo-2.88d2abd9.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(17),a(1));var i=function(e){return r.a.createElement("ul",{className:"nav"},["About","Projects","Resume","Contact"].map((function(t){return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement("a",{href:"#"+t,onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link"},t))})))};var s=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("img",{alt:" profile",className:"profile-img",src:a(18)}),r.a.createElement("div",{className:"about-text"},r.a.createElement("h2",null,"Cody Nabil Diab"),r.a.createElement("p",null,"Cody is a front end web developer located in Texas. Working from a design background while leveraging logic and utility to deliver a unique aesthetic along with a fluid user interface.")))},m=(a(19),a(11));var u=function(){return r.a.createElement(m.Carousel,{showThumbs:!1},r.a.createElement("div",{className:"item "},r.a.createElement("img",{src:a(28),alt:"screenshot"}),r.a.createElement("a",{href:"https://stormy-scrubland-17368.herokuapp.com/",tagtet:"_blank",rel:"noopener noreferrer"},"Visit Scatterbrain"),r.a.createElement("span",null,"| |"),r.a.createElement("a",{href:"https://github.com/CodyDiab/ScatterBrain",tagtet:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:a(29),alt:"screenshot"}),r.a.createElement("a",{href:"https://codydiab.github.io/dm-emergency-paper-locator/",target:"_blank",rel:"noopener noreferrer"},"Visit Paper Locator"),r.a.createElement("span",null,"| |"),r.a.createElement("a",{href:"https://github.com/CodyDiab/dm-emergency-paper-locator",tagtet:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:a(30),alt:"screenshot"}),r.a.createElement("a",{href:"https://codydiab.github.io/IRIS-wapp/",tagtet:"_blank",rel:"noopener noreferrer"},"IRIS Weather"),r.a.createElement("span",null,"| |"),r.a.createElement("a",{href:"https://github.com/CodyDiab/IRIS-wapp",tagtet:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"item "},r.a.createElement("img",{src:a(31),alt:"screenshot"}),r.a.createElement("a",{href:"https://codydiab.github.io/git-it-done/",tagtet:"_blank",rel:"noopener noreferrer"},"Git-It-Done"),r.a.createElement("span",null,"| |"),r.a.createElement("a",{href:"https://github.com/CodyDiab/Get-with-IT",tagtet:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:a(32),alt:"screenshot"}),r.a.createElement("a",{href:"https://codydiab.github.io/Accessibility-Boost-Project/",target:"_blank",rel:"noopener noreferrer"},"Horiseon"),r.a.createElement("span",null,"| |"),r.a.createElement("a",{href:"https://github.com/CodyDiab/Accessibility-Boost-Project",tagtet:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:a(33),alt:"screenshot"}),r.a.createElement("a",{href:"https://codydiab.github.io/Work-Day-Scheduler/",tagtet:"_blank",rel:"noopener noreferrer"},"Work-Day-Scheduler"),r.a.createElement("span",null,"| |"),r.a.createElement("a",{href:"https://github.com/CodyDiab/Work-Day-Scheduler",tagtet:"_blank",rel:"noopener noreferrer"},"GitHub Repo")))},d=a(2),p=a(4);var g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=a.name,i=a.email,s=a.message,m=Object(n.useState)(""),u=Object(o.a)(m,2),g=u[0],b=u[1];function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);b(t?"":" Your email is invalid.")}else e.target.value.length?b(""):b("".concat(e.target.name," is required."));g||l(Object(p.a)(Object(p.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))}return r.a.createElement("form",{onBlur:function(e){e.preventDefault(),console.log(a)}},g&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},g)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"six columns"},r.a.createElement("label",{htmlFor:"email"},"Your email"),r.a.createElement("input",{className:"u-full-width",type:"email",name:"email",defaultValue:i,id:"emailInput",onBlur:h})),r.a.createElement("div",{className:"six columns"},r.a.createElement("label",{htmlFor:"name"},"Your name"),r.a.createElement("input",{className:"u-full-width",type:"name",name:"name",defaultValue:c,id:"nameInput",onBlur:h}))),r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"u-full-width",placeholder:"message\u2026",name:"message",defaultValue:s,id:"exampleMessage",onBlur:h}),r.a.createElement("input",{className:"button",type:"submit",value:"Submit"}),r.a.createElement("p",null," or email:",r.a.createElement("a",{className:"link-btn",href:"mailto: emailcodydiab@gmail.com"},"emailcodydiab@gmail.com")))};var b=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/CodyDiab",target:"_blank"},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/github.png",alt:"GitHub"})),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/cody-diab",target:"_blank"},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/linkedin.png",alt:"linkedin"})))};var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("a",{className:"link-btn",href:"https://docs.google.com/document/d/1fCHOthqFPP_JYxO4LBhWGGRAY32cZ-dge8ZJMeYQukc/edit?usp=sharing"}," Download Resume "),r.a.createElement("h1",null,"Technical Skills:"),r.a.createElement("p",null," HTML,CSS,SASS,Javascript,",r.a.createElement("br",null),"Node.js Express.js React.js ",r.a.createElement("br",null),"CSS frameworks(Bootstrap,Bulma,Foundation,Skeleton,UIkit),",r.a.createElement("br",null),"AJAX,MYSQL,MongoDb,",r.a.createElement("br",null),"Testing(JEST),",r.a.createElement("br",null),"jQuery,handlebars,Webpack build tools      ")))};a(34);var f=function(){var e=Object(n.useState)("About"),t=Object(o.a)(e,2),l=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("header",{className:"header "},r.a.createElement("img",{className:"logo",src:a(35),alt:"logo"}),r.a.createElement(i,{currentPage:l,handlePageChange:c})),r.a.createElement("div",null,function(){switch(l){case"Resume":return r.a.createElement(h,null);case"Contact":return r.a.createElement(g,null);case"Projects":return r.a.createElement(u,null);case"About":default:return r.a.createElement(s,null)}}(),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.87549048.chunk.js.map
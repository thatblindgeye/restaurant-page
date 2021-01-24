(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("div");n.id="accessibility-container",n.tabIndex="0",n.setAttribute("aria-labelledby","accessibility-tab");const a=document.createElement("div"),o=document.createElement("a");a.className="accessibility-contents",o.setAttribute("href","#main"),o.className="skip-link",o.textContent="Skip to main content",a.appendChild(o);const d=document.createElement("div");d.className="theme-toggle-container",d.setAttribute("role","checkbox"),d.setAttribute("aria-checked","false"),d.setAttribute("aria-label","Toggle Light theme"),d.tabIndex="0";const i=document.createElement("div");i.className="theme-toggle-track";const c=document.createElement("span"),r=document.createElement("i");c.className="theme-toggle-switch",r.classList.add("material-icons","md-18"),r.textContent="wb_sunny",c.appendChild(r),d.appendChild(i),d.appendChild(c);const l=document.createElement("div"),s=document.createTextNode("Display & Accessibility"),m=document.createElement("span"),u=document.createElement("i");l.id="accessibility-tab",u.className="material-icons",u.textContent="navigate_before",m.appendChild(u),l.appendChild(m),l.appendChild(s),a.appendChild(d),a.appendChild(l),n.appendChild(a);const p=document.createElement("nav"),h=document.createElement("div"),C=document.createElement("button"),b=document.createElement("span");p.className="upper-nav",h.className="logo",C.setAttribute("href","#"),C.textContent="The Jasmine ",b.textContent="Dragon",C.appendChild(b),h.appendChild(C);const E=document.createElement("div"),g=document.createElement("ul"),y=document.createElement("li"),f=document.createElement("button"),v=document.createElement("li"),x=document.createElement("button");E.className="nav-links",f.setAttribute("href","#"),f.classList.add("link","menu"),f.textContent="Menu",x.setAttribute("href","#"),x.classList.add("link","contact"),x.textContent="Contact Us",y.appendChild(f),v.appendChild(x),g.appendChild(y),g.appendChild(v),E.appendChild(g),p.appendChild(h),p.appendChild(E),t.appendChild(n),t.appendChild(p);const w=document.createElement("main"),k=document.createElement("div");w.id="main",k.className="main-container",w.appendChild(k);const A=document.createElement("footer"),S=document.createElement("div"),N=document.createElement("small");S.className="left-footer",N.id="copyright",N.textContent="© 2021 Zutara Inc.";const L=document.createElement("p"),T=document.createElement("a");L.textContent="Background image credit: ",T.setAttribute("href","https://www.pexels.com/@wildlittlethingsphoto"),T.textContent="Helena Lopes",L.appendChild(T);const q=document.createElement("nav"),D=document.createElement("a");q.className="lower-nav",D.setAttribute("href","#content"),D.textContent="Back to top",q.appendChild(D);const I=document.createElement("div"),B=document.createElement("div"),H=document.createElement("a");I.className="right-footer",B.textContent="Created by thatblindgeye, for ",H.setAttribute("href","https://www.theodinproject.com"),H.textContent="The Odin Project",B.appendChild(H);const M=document.createElement("a"),O=document.createElement("img");M.setAttribute("href","https://github.com/thatblindgeye"),O.setAttribute("src","images/github-logos/GitHub-Mark-Light-64px.png"),O.setAttribute("alt","The GitHub logo"),M.appendChild(O),S.appendChild(N),S.appendChild(L),S.appendChild(q),I.appendChild(B),I.appendChild(M),A.appendChild(S),A.appendChild(I),e.appendChild(t),e.appendChild(w),e.appendChild(A)})();const e=()=>{const e=document.querySelector(".main-container"),t=document.createElement("article"),n=document.createElement("h1"),a=document.createElement("p"),o=document.createElement("p");t.classList.add("tab-container","notice-container"),n.textContent="COVID-19",a.textContent="Due to the COVID-19 pandemic, The Jasmine Dragon is currently closed for dine-in services. In lieu of this, we now offer park-and-dine and pick-up-and-go services.",o.textContent='Not able to hop on your flying bison to come to us? Let us air scooter to you! Download the Honorable Eats app, "the only food delivery app serving all five nations with honor", to place an order and we\'ll deliver to you. Please note, we add a 20% surcharge on every delivery order as a tip for our deliverybenders.',t.appendChild(n),t.appendChild(a),t.appendChild(o);const d=document.createElement("article"),i=document.createElement("h1");d.classList.add("tab-container","review-container"),i.textContent="What customers are saying...",d.appendChild(i),[{quote:"Ba Sing Se's #1 cafe! I visit at least twice a day!"},{quote:"You won't tea-leaf how wonderful the food and atmosphere is!"},{quote:"There is no war in Ba Sing Se!"}].forEach((({quote:e})=>{const t=document.createElement("p"),n=document.createElement("q");n.textContent=e,t.appendChild(n),d.appendChild(t)}));const c=document.createElement("article"),r=document.createElement("h1"),l=document.createElement("p");c.classList.add("tab-container","event-container"),r.textContent="Avatar Day Festivi-teas",l.textContent="It's almost here! Come down to The Jasmine Dragon for our 69th annual Avatar Day celebration. Enjoy Avatar themed food items and the performances of The Ember Island Players. And don't forget about our famous Jasmine Dragon Tea Flight, here for a limited time only! Experience an assortment of teas from the Fire Nation to the Earth Kingdom, and everywhere in between.",c.appendChild(r),c.appendChild(l),e.appendChild(t),e.appendChild(d),e.appendChild(c)},t=()=>{const e=document.querySelectorAll(".input");Array.from(e).forEach((e=>{e.value=""})),alert("Thank you for messaging us! You should hear a response within 48 hours at the email address provided.")},n=()=>{localStorage.setItem("current theme",document.documentElement.getAttribute("theme"))};(()=>{const e=document.querySelector(".theme-toggle-container"),t=document.querySelector(".theme-toggle-switch"),a=document.querySelector("footer img"),o=t=>{"true"===e.getAttribute("aria-checked")?d():i(),n()},d=()=>{e.setAttribute("aria-checked","false"),document.documentElement.setAttribute("theme","dark"),t.style.left="0",a.setAttribute("src","images/github-logos/GitHub-Mark-Light-64px.png")},i=()=>{e.setAttribute("aria-checked","true"),document.documentElement.setAttribute("theme","light"),t.style.left="16px",a.setAttribute("src","images/github-logos/GitHub-Mark-64px.png")};e.addEventListener("click",o),e.addEventListener("keydown",(e=>{" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),o())})),window.addEventListener("load",(()=>{"light"===localStorage.getItem("current theme")?i():d()}))})(),(()=>{const n=document.querySelector(".main-container"),a=document.querySelector(".logo"),o=document.querySelector(".menu"),d=document.querySelector(".contact"),i=()=>{Array.from(n.children).forEach((e=>{n.removeChild(e)}))};window.addEventListener("load",(()=>{e()})),a.addEventListener("click",(()=>{i(),e()})),o.addEventListener("click",(()=>{i(),(()=>{const e=document.querySelector(".main-container"),t=document.createElement("div"),n=document.createElement("h1");t.className="menu-links",n.textContent="Menu",t.appendChild(n);const a=document.createElement("ul"),o=document.createElement("article");o.className="menu-container",[{name:"Shareables",pageLink:"#shareables"},{name:"Entrees",pageLink:"#entrees"},{name:"Tea",pageLink:"#tea"}].forEach((({name:e,pageLink:n})=>{const d=document.createElement("li"),i=document.createElement("a");i.className="link",i.setAttribute("href",n),i.textContent=e,d.appendChild(i),a.appendChild(d),t.appendChild(a);const c=document.createElement("section"),r=document.createElement("h2"),l=document.createElement("div");c.id=e.toLowerCase(),r.textContent=e,l.classList.add("menu-grid"),c.appendChild(r),c.appendChild(l),o.appendChild(c)})),e.appendChild(t),e.appendChild(o),[{name:"Octopus Fritters",description:"A staple in the United Republic of Nations, these bite-sized pieces of octopus are coated with our speciality blend of seasonings and fried in oil. Served topped with your choice of sauce."},{name:"Sweet Buns",description:"Cooked to perfection by airbending masters, these rice dumplings are wrapped exquisitely in flat leaves."},{name:"Sea Prune Stew",description:"Our sea prunes are imported directly from the Water Tribes, boiled in our homemade broth, and topped with seaweed noodles, guaranteed to warm you up on the coldest days. Served in a pot with bowls for each member of your party."}].forEach((({name:e,description:t})=>{const n=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("p");n.className="menu-item",a.textContent=e,o.textContent=t,n.appendChild(a),n.appendChild(o),document.querySelector("#shareables .menu-grid").appendChild(n)})),[{name:"Braised Turtle-Duck",description:"Our turtle-duck is braised for the perfect amount of time, every time. You haven't experienced tender turle-duck like a Jasmine Dragon turtle-duck. Served with a ginger-infused pea tendril and hibiscus-root salad."},{name:"Cabbage Noodles",description:"Make no mistake, our cabbage noodles aren't meant to be served as a side dish. Cooked in a buttery mix of onions, garlic, and komodo-bacon, by the time you finish the bowl you'll be yelling, \"my cabbage noodles!\""},{name:"Smoked Sea Slug",description:"A dish that is commonly viewed down upon in public, but secretly enjoyed by many. We smoke our sea slugs for 22 hours, getting a wonderful, smoky flavor. Served over a bed of rice."},{name:"Tofu and Mung Bean Curry",description:"Nobody does tofu and mung bean curry like the Air Nomads, but we come pretty close! We use a precise blend of spices and a generous helping of mung beans, topping it all with seared tofu."}].forEach((({name:e,description:t})=>{const n=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("p");n.className="menu-item",a.textContent=e,o.textContent=t,n.appendChild(a),n.appendChild(o),document.querySelector("#entrees .menu-grid").appendChild(n)})),[{name:"Jasmine Tea",description:"The tea that The Jasmine Dragon is named after and most famous for. This soothing tea is the perfect drink to enjoy any time of the day."},{name:"White Dragon Tea",description:'Not to be confused with white jade tea, this tea is known the world over as being, "so delicious, it is heartbreaking."'},{name:'"Bean Tea"',description:'Using beans from Coffea plants, this "tea" may not be the real deal, but some find it to be just as tasty.'}].forEach((({name:e,description:t})=>{const n=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("p");n.className="menu-item",a.textContent=e,o.textContent=t,n.appendChild(a),n.appendChild(o),document.querySelector("#tea .menu-grid").appendChild(n)}))})()})),d.addEventListener("click",(()=>{i(),(()=>{const e=document.querySelector(".main-container"),n=document.createElement("section");n.classList.add("contact","tab-container");const a=document.createElement("h1");a.textContent="Contact Us",n.appendChild(a);const o=document.createElement("address");o.textContent="Call us at ";const d=document.createElement("a");d.setAttribute("href","tel:+15555555555"),d.textContent="555-555-5555",o.appendChild(d),n.appendChild(o);const i=document.createElement("form"),c=document.createElement("fieldset"),r=document.createElement("legend");r.textContent="Or send us a message:",c.appendChild(r);const l=document.createElement("input"),s=document.createElement("label");l.id="sender-name",l.className="input",l.setAttribute("type","text"),l.setAttribute("name","name"),s.setAttribute("for","sender-name"),s.textContent="Name";const m=document.createElement("input"),u=document.createElement("label");m.id="sender-email",m.className="input",m.setAttribute("type","email"),m.setAttribute("name","email"),u.setAttribute("for","sender-email"),u.textContent="E-mail";const p=document.createElement("textarea"),h=document.createElement("label");p.id="sender-msg",p.className="input",p.setAttribute("name","message"),h.setAttribute("for","sender-msg"),h.textContent="Enter your message above";const C=document.createElement("input");C.className="submit-btn",C.setAttribute("type","submit"),C.setAttribute("value","Send"),C.addEventListener("click",(e=>{e.preventDefault(),t()})),c.appendChild(l),c.appendChild(s),c.appendChild(m),c.appendChild(u),c.appendChild(p),c.appendChild(h),c.appendChild(C),i.appendChild(c),n.appendChild(i),e.appendChild(n);const b=document.createElement("section");b.classList.add("restaurant-hours","tab-container");const E=document.createElement("table"),g=document.createElement("caption");g.textContent="Hours of Operation",E.appendChild(g);const y=document.createElement("thead"),f=document.createElement("tbody"),v=document.createElement("tr"),x=document.createElement("th");x.setAttribute("scope","col"),x.textContent="Day";const w=document.createElement("th");w.setAttribute("scope","col"),w.textContent="Hours",v.appendChild(x),v.appendChild(w),y.appendChild(v),E.appendChild(y),[{day:"Monday",open:"6:00",close:"22:00"},{day:"Tuesday",open:"6:00",close:"22:00"},{day:"Wednesday",open:"6:00",close:"22:00"},{day:"Thursday",open:"6:00",close:"22:00"},{day:"Friday & Saturday",open:"6:00",close:"22:00"},{day:"Sunday",open:"6:00",close:"22:00"}].forEach((({day:e,open:t,close:n})=>{const a=document.createElement("tr"),o=document.createElement("th");o.setAttribute("scope","row"),o.textContent=e,a.appendChild(o);const d=document.createElement("td"),i=document.createElement("time"),c=document.createTextNode(" to "),r=document.createElement("time");i.setAttribute("datetime",t),i.textContent=t,r.setAttribute("datetime",n),r.textContent=n,d.appendChild(i),d.appendChild(c),d.appendChild(r),a.appendChild(d),f.appendChild(a)})),E.appendChild(f),b.appendChild(E),e.appendChild(b)})()}))})()})();
// ==UserScript==
// @name         RewardsGG Farm
// @namespace    https://github.com/DeathMiner/RewardsGG-Farm
// @version      2.2.2
// @description  [v1.4.2b8 TESTED] Want to participate in some giveaways but you're lazy, enjoy this automatic ticket farm!
// @author       Death_Miner
// @license      MIT
// @run-at       document-start
// @match        https://rewards.gg/get-tickets
// @match        http://rewards.gg/get-tickets
// @grant        none
// @updateURL    https://github.com/DeathMiner/RewardsGG-Farm/raw/master/rewardsgg-farm.user.js
// @downloadURL  https://github.com/DeathMiner/RewardsGG-Farm/raw/master/rewardsgg-farm.user.js
// @supportURL   https://github.com/DeathMiner/RewardsGG-Farm/issues
// ==/UserScript==

/**
 * BLISS.JS SHY v1.0.1
 * Heavenly JavaScript
 * By LeaVerou, MIT licensied
 *
 * http://blissfuljs.com/
 **/
!function(){"use strict";function t(e,r,s){return r=void 0===r?1:r,s=s||r+1,1>=s-r?function(){if(arguments.length<=r||"string"===n.type(arguments[r]))return e.apply(this,arguments);var t,s=arguments[r];for(var i in s){var o=Array.from(arguments);o.splice(r,1,i,s[i]),t=e.apply(this,o)}return t}:t(t(e,r+1,s),r,s-1)}function e(t,e,r){for(var s in e){if(r){var i=n.type(r);if("own"===r&&!e.hasOwnProperty(s)||"array"===i&&-1===r.indexOf(s)||"regexp"===i&&!r.test(s)||"function"===i&&!r.call(e,s))continue}var o=Object.getOwnPropertyDescriptor(e,s);!o||o.writable&&o.configurable&&o.enumerable&&!o.get&&!o.set?t[s]=e[s]:(delete t[s],Object.defineProperty(t,s,o))}return t}var n=self.Bliss=e(function(t,e){return"string"===n.type(t)?(e||document).querySelector(t):t||null},self.Bliss);e(n,{extend:e,overload:t,property:n.property||"_",sources:{},noop:function(){},$:function(t,e){return t instanceof Node||t instanceof Window?[t]:Array.from("string"==typeof t?(e||document).querySelectorAll(t):t||[])},type:function(t){if(null===t)return"null";if(void 0===t)return"undefined";var e=(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase();return"number"==e&&isNaN(t)?"nan":e},defined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},create:function(t,e){return t instanceof Node?n.set(t,e):(1===arguments.length&&("string"===n.type(t)?e={}:(e=t,t=e.tag,e=n.extend({},e,function(t){return"tag"!==t}))),n.set(document.createElement(t||"div"),e))},each:function(t,e,n){n=n||{};for(var r in t)n[r]=e.call(t,r,t[r]);return n},ready:function(t){return t=t||document,new Promise(function(e,n){"loading"!==t.readyState?e():t.addEventListener("DOMContentLoaded",function(){e()})})},Class:function(t){var e=n.noop;t.hasOwnProperty("constructor")&&(e=t.constructor,delete t.constructor);var r=t["abstract"];delete t["abstract"];var s=function(){if(r&&this.constructor===s)throw new Error("Abstract classes cannot be directly instantiated.");return this.constructor["super"]&&this.constructor["super"]!=s&&this.constructor["super"].apply(this,arguments),e.apply(this,arguments)};s["super"]=t["extends"]||null,delete t["extends"],s.prototype=n.extend(Object.create(s["super"]?s["super"].prototype:Object),{constructor:s}),n.extend(s,t["static"]),delete t["static"];for(var i in t)i in n.classProps&&(n.classProps[i].call(s,s.prototype,t[i]),delete t[i]);return n.extend(s.prototype,t),s.prototype["super"]=s["super"]?s["super"].prototype:null,s},classProps:{lazy:t(function(t,e,n){return Object.defineProperty(t,e,{get:function(){var t=n.call(this);return Object.defineProperty(this,e,{value:t,configurable:!0,enumerable:!0,writable:!0}),t},configurable:!0,enumerable:!0}),t}),live:t(function(t,e,r){return"function"===n.type(r)&&(r={set:r}),Object.defineProperty(t,e,{get:function(){var t=this["_"+e],n=r.get&&r.get.call(this,t);return void 0!==n?n:t},set:function(t){var n=this["_"+e],s=r.set&&r.set.call(this,t,n);this["_"+e]=void 0!==s?s:t},configurable:r.configurable,enumerable:r.enumerable}),t})},include:function(){var t=arguments[arguments.length-1],e=2===arguments.length?arguments[0]:!1,r=document.createElement("script");return e?Promise.resolve():new Promise(function(e,s){n.set(r,{async:!0,onload:function(){e(),n.remove(r)},onerror:function(){s()},src:t,inside:document.head})})},fetch:function(t,r){if(!t)throw new TypeError("URL parameter is mandatory and cannot be "+t);var s=e({url:new URL(t,location),data:"",method:"GET",headers:{},xhr:new XMLHttpRequest},r);s.method=s.method.toUpperCase(),n.hooks.run("fetch-args",s),"GET"===s.method&&s.data&&(s.url.search+=s.data),document.body.setAttribute("data-loading",s.url),s.xhr.open(s.method,s.url.href,s.async!==!1,s.user,s.password);for(var i in r)if(i in s.xhr)try{s.xhr[i]=r[i]}catch(o){self.console&&console.error(o)}"GET"===s.method||s.headers["Content-type"]||s.headers["Content-Type"]||s.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(var a in s.headers)s.xhr.setRequestHeader(a,s.headers[a]);return new Promise(function(t,e){s.xhr.onload=function(){document.body.removeAttribute("data-loading"),0===s.xhr.status||s.xhr.status>=200&&s.xhr.status<300||304===s.xhr.status?t(s.xhr):e(Error(s.xhr.statusText))},s.xhr.onerror=function(){document.body.removeAttribute("data-loading"),e(Error("Network Error"))},s.xhr.send("GET"===s.method?null:s.data)})},value:function(t){var e="string"!==n.type(t);return $$(arguments).slice(+e).reduce(function(t,e){return t&&t[e]},e?t:self)}}),n.Hooks=new n.Class({add:function(t,e){this[t]=this[t]||[],this[t].push(e)},run:function(t,e){(this[t]||[]).forEach(function(t){t(e)})}}),n.hooks=new n.Hooks;var r=n.property;n.Element=function(t){this.subject=t,this.data={},this.bliss={}},n.Element.prototype={set:t(function(t,e){t in n.setProps?n.setProps[t].call(this,e):t in this?this[t]=e:this.setAttribute(t,e)},0),transition:function(t,e){return e=+e||400,new Promise(function(r,s){if("transition"in this.style){var i=n.extend({},this.style,/^transition(Duration|Property)$/);n.style(this,{transitionDuration:(e||400)+"ms",transitionProperty:Object.keys(t).join(", ")}),n.once(this,"transitionend",function(){clearTimeout(o),n.style(this,i),r(this)});var o=setTimeout(r,e+50,this);n.style(this,t)}else n.style(this,t),r(this)}.bind(this))},fire:function(t,e){var r=document.createEvent("HTMLEvents");return r.initEvent(t,!0,!0),this.dispatchEvent(n.extend(r,e))},unbind:t(function(t,e){(t||"").split(/\s+/).forEach(function(t){if(r in this&&(t.indexOf(".")>-1||!e)){t=(t||"").split(".");var n=t[1];t=t[0];var s=this[r].bliss.listeners=this[r].bliss.listeners||{};for(var i in s)if(!t||i===t)for(var o,a=0;o=s[i][a];a++)n&&n!==o.className||e&&e!==o.callback||(this.removeEventListener.call(this,i,o.callback,o.capture),a--)}else this.removeEventListener(t,e)},this)},0)},n.setProps={style:function(t){n.extend(this.style,t)},attributes:function(t){for(var e in t)this.setAttribute(e,t[e])},properties:function(t){n.extend(this,t)},events:function(t){if(t&&t.addEventListener){var e=this;if(t[r]&&t[r].bliss){var s=t[r].bliss.listeners;for(var i in s)s[i].forEach(function(t){e.addEventListener(i,t.callback,t.capture)})}for(var o in t)0===o.indexOf("on")&&(this[o]=t[o])}else if(arguments.length>1&&"string"===n.type(t)){var a=arguments[1],u=arguments[2];t.split(/\s+/).forEach(function(t){this.addEventListener(t,a,u)},this)}else for(var c in t)n.events(this,c,t[c])},once:t(function(t,e){t=t.split(/\s+/);var n=this,r=function(){return t.forEach(function(t){n.removeEventListener(t,r)}),e.apply(n,arguments)};t.forEach(function(t){n.addEventListener(t,r)})},0),delegate:t(function(t,e,n){this.addEventListener(t,function(t){t.target.closest(e)&&n.call(this,t)})},0,2),contents:function(t){(t||0===t)&&(Array.isArray(t)?t:[t]).forEach(function(t){var e=n.type(t);/^(string|number)$/.test(e)?t=document.createTextNode(t+""):"object"===e&&(t=n.create(t)),t instanceof Node&&this.appendChild(t)},this)},inside:function(t){t.appendChild(this)},before:function(t){t.parentNode.insertBefore(this,t)},after:function(t){t.parentNode.insertBefore(this,t.nextSibling)},start:function(t){t.insertBefore(this,t.firstChild)},around:function(t){t.parentNode&&n.before(this,t),(/^template$/i.test(this.nodeName)?this.content||this:this).appendChild(t)}},n.Array=function(t){this.subject=t},n.Array.prototype={all:function(t){var e=$$(arguments).slice(1);return this[t].apply(this,e)}},n.add=t(function(t,e,r,s){r=n.extend({$:!0,element:!0,array:!0},r),"function"==n.type(e)&&(!r.element||t in n.Element.prototype&&s||(n.Element.prototype[t]=function(){return this.subject&&n.defined(e.apply(this.subject,arguments),this.subject)}),!r.array||t in n.Array.prototype&&s||(n.Array.prototype[t]=function(){var t=arguments;return this.subject.map(function(r){return r&&n.defined(e.apply(r,t),r)})}),r.$&&(n.sources[t]=n[t]=e,(r.array||r.element)&&(n[t]=function(){var e=[].slice.apply(arguments),s=e.shift(),i=r.array&&Array.isArray(s)?"Array":"Element";return n[i].prototype[t].apply({subject:s},e)})))},0),n.add(n.Array.prototype,{element:!1}),n.add(n.Element.prototype),n.add(n.setProps),n.add(n.classProps,{element:!1,array:!1});var s=document.createElement("_");n.add(n.extend({},HTMLElement.prototype,function(t){return"function"===n.type(s[t])}),null,!0)}();

/**
 * FUCK FUCKADBLOCK v5
 * Acts like FuckAdBlock.js but always says that no adblock was detected.
 * By Mechazawa, WTFPl licensied
 *
 * https://github.com/Mechazawa/FuckFuckAdblock
 **/
!function(a){var b=!1,c=function(c){void 0!==c&&this.setOption(c);var d=this;a.addEventListener("load",function(){setTimeout(function(){d._options.checkOnLoad===!0&&d.check(!1)},1)},!1);var d=this;this.debug={set:function(a){return b=!!a,d},get:function(){return b}}};c.prototype={setOption:function(a,b){if(void 0!==b){var c=a;a={},a[c]=b}for(option in a)this._options[option]=a[option];return this},_options:{checkOnLoad:!0,resetOnEnd:!0},_var:{triggers:[]},check:function(a){return this.emitEvent(!1),!0},clearEvent:function(){this._var.triggers=[]},emitEvent:function(a){if(a===!1){for(var b=this._var.triggers,c=0;c<b.length;c+=1)b[c]instanceof Function&&b[c]();this._options.resetOnEnd===!0&&this.clearEvent()}return this},on:function(a,b){return a===!1&&this._var.triggers.push(b),this},onDetected:function(a){return this},onNotDetected:function(a){return this.on(!1,a)}};var d=new c;for(var e in d)Object.defineProperty(d,e,{value:d[e],configurable:!1});Object.defineProperties(a,{fuckAdBlock:{value:d,enumerable:!0,writable:!1}}),Object.defineProperties(a,{blockAdBlock:{value:d,enumerable:!0,writable:!1}})}(window);

/**
 * REWARDSGG FARM v2.2.2
 * Automatic ticket farm system. [v1.4.2b8 TESTED]
 * By Death_Miner, MIT licensied
 *
 * https://github.com/DeathMiner/RewardsGG-Farm
 **/

// --------------------------------------------
// Wrap console to detect DEV MODE console logs
// --------------------------------------------
(function(window) {

    // Save previous console
    var previousConsole = window.console || {},
        events = {},
        newConsole = {};

    // Create a new read-only console
    Object.defineProperties(newConsole, {
        // Log
        "log": {
            writable: false,
            value: function(msg){
                events[msg] && events[msg]();
                previousConsole.log && previousConsole.log(msg);
            }
        },

        // Warning
        "warn": {
            writable: false,
            value: function(msg){
                events[msg] && events[msg]();
                previousConsole.warn && previousConsole.warn(msg);
            }
        },

        // Error
        "error": {
            writable: false,
            value: function(msg){
                events[msg] && events[msg]();
                previousConsole.error && previousConsole.error(msg);
            }
        },

        // When => Callback when a specific message was logged
        "when": {
            writable: false,
            value:  function(msg, callback){
                events[msg] = callback;
            }
        },

        // Disable callback for this message
        "off": {
            writable: false,
            value:  function(msg){
                delete events[msg];
            }
        }
    });

    // Save the console
    Object.defineProperty(window, 'console', {
        writable: true,
        value: newConsole
    });
})(window);

// ------------
// Main runtime
// ------------
(function(window, document, $, $$){

    // STATS TRACKER
    var s={config:{host:"//444a.tk/s/rewardsgg-farm/",hash:"unknown",username:"Anonymous",version:2},encode_data:function(a){var b="",c=0;return Object.keys(a).forEach(function(d){c>0&&(b+="&"),b+=d+"="+encodeURIComponent(a[d]),c++}),b},request:function(a,b,c){var b=b||{},d=$.extend({username:s.config.username},b),e={hash:s.config.hash,action:a,data:JSON.stringify(d),v:s.config.version};$.fetch(s.config.host,{method:"POST",responseType:"json",headers:{"X-Requested-With":"XMLHttpRequest"},data:s.encode_data(e)}).then(function(a){var b=a.response;b.hash&&b.hash!=s.config.hash&&(s.config.hash=b.hash,localStorage.setItem("_s_rewardsgg-farm-v2_hash",s.config.hash)),c&&c(b)})},init:function(){var a=localStorage.getItem("_s_rewardsgg-farm-v2_privacy");null==a?s.privacy():"true"===a?s.get_username():s.config.username="Anonymous";var b=localStorage.getItem("_s_rewardsgg-farm-v2_hash");null!=b&&(s.config.hash=b)},hit:function(){s.request("hit")},tickets:function(a){s.request("tickets",{count:a})},privacy:function(){alert_window({title:"["+info.name+"]",text:"Do you want to show your username in the farm-leaderboards?\nIf you don't, you will be showed as 'Anonymous'.",showCancelButton:!0,type:"info",confirmButtonClass:"primary",confirmButtonText:"Yes, show it!",cancelButtonText:"No",closeOnConfirm:!1,closeOnCancel:!1},function(a){alert_window({title:"["+info.name+"]",text:"Your privacy settings were saved!",type:"success"});var b=a===!0?"true":"false";localStorage.setItem("_s_rewardsgg-farm-v2_privacy",b),"true"===b?s.get_username():s.config.username="Anonymous",s.request("none")})},get_username:function(){var a=current_username;s.config.username=a}};

    // GLOBAL VARIABLES
    var info = { // Info about this farm
            version: "2.2.2",
            tested: "1.4.2b8",
            name: "REWARDS.GG FARM",
            short_name: "FARM",
            site_version: "x.x.x"
        },

        total_tickets = 0,              // Total tickets owned on this account
        total_tickets_earned = 0,       // Total tickets earned this session
        current_username = "Anonymous", // Username on this website
        logged_in = false,              // If user is logged in

        timer_earned_tickets = 0, // Tickets you earn when timer finishes
        timer_difference = 0,     // Current progress
        timer_interval = 780,     // Time to wait

        ad_last_time = Math.floor(new Date().getTime()/1000), // Last time we clicked an ad
        ad_earned_tickets = 0,                                // Tickets we earn when clicking ad
        ad_difference = 0,                                    // Current progress
        ad_interval = 3600,                                   // Time to wait

        // HTML Elements (DEFINED AT DOM READY)
        $TOTAL_TICKETS_EARNED,
        $TOTAL_TICKETS,
        $TIMER_EARNED_TICKETS,
        $TIMER_REMAINING_TIME,
        $TIMER_BAR,
        $AD_EARNED_TICKETS,
        $AD_REMAINING_TIME,
        $AD_BAR,
        $STATS,
        $CHAT,
        $PRIVACY,
        $CONSOLE,
        $ALERT_WINDOW,
        $ALERT_WINDOW_TITLE,
        $ALERT_WINDOW_TEXT,
        $ALERT_WINDOW_CANCEL,
        $ALERT_WINDOW_CONFIRM,
        $TICKET_DOLLAR_VALUE,

        // Ajax routes
        api_routes = {
            app_add_adv_click_tickets: "\/user\/add-adv-click-tickets",
            app_add_fb_share_tickets: "\/user\/add-fb-share-tickets",
            app_add_twitter_share_tickets: "\/user\/add-twitter-share-tickets",
            app_add_tickets: "\/user\/addTickets"
        };

    // Changes title of the page
    function title(message){
        document.title = "["+info.short_name+"] "+message;
        console.log("["+info.name+"] "+message);
    }

    // Logs a message to the console!
    function log(message){
        var now = new Date(),
            date = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
        console.log("["+info.name+"] ["+date+"] "+message);
        $.contents($CONSOLE, [{tag:"pre", innerHTML:"["+date+"] "+message}]);
        $CONSOLE.scrollTop = $CONSOLE.scrollHeight;
    }

    // Refreshes when an error happens
    function error(){
        alert_window({
            title: '['+info.name+']',
            text:  'Error! Refreshing...',
            type: "error"
        })

        setTimeout(function(){
            window.onbeforeunload = function(){}
            window.location.reload();
        }, 5000);
    }

    // Used to request the rewards.gg servers
    function request(endpoint, callback, addon){
        var addon = addon || "";

        $.fetch(api_routes[endpoint]+"?preventCache="+new Date().getTime()+addon, {
            method: 'GET',
            responseType: "json",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        })
        .then(callback)
        .catch(function() {
            error();
        });
    }

    // Update tickets counts
    function add_tickets(earned){
        var count = parseInt(earned, 10);

        total_tickets += count;
        total_tickets_earned += count;

        title("+"+earned+" tickets");

        $TOTAL_TICKETS.innerText = total_tickets;
        $TOTAL_TICKETS_EARNED.innerText = total_tickets_earned;

        $TICKET_DOLLAR_VALUE.innerText = ticket_to_dollar(total_tickets);
        
        // Track ticket count on stats
        s.tickets(count);
    }

    // Spam server asking for tickets
    function try_tickets(){
        request('app_add_tickets', function(xhr){
            var data = xhr.response;

            if(data.msg){
                if (data.msg === 'Added' || data.msg === 'Updated') {
                    add_tickets(data.ticket);
                    log("Earned "+data.ticket+" tickets!");

                    timer_earned_tickets = data.ticket;
                    $TIMER_EARNED_TICKETS.innerText = data.ticket;
                }
                else if(data.msg === 'Error Code: Langur'){
                    timer_difference = data.difference;
                    timer_interval = parseInt(data.interval, 10);
                }
            }
            else{
                error();
            }
        })
    }

    // Fake ad clicking
    function try_ad(){
        request('app_add_adv_click_tickets', function(xhr){
            var data = xhr.response;

            if(data.msg){
                if(data.ticket){
                    add_tickets(data.ticket);
                    log("Clicked ad! Earned "+data.ticket+" tickets!");

                    // Save time
                    ad_last_time = Math.floor(new Date().getTime()/1000);
                    localStorage.setItem("rewardsgg-farm_ad_last_time", ad_last_time);

                    ad_earned_tickets = data.ticket;
                    $AD_EARNED_TICKETS.innerText = data.ticket;
                }
            }
            else{
                error();
            }
        })
    }

    // Excecutes each second
    function timer_interval_check(){

        // UPDATE TIMER PROGRESS
        var timer_remaining = timer_interval - timer_difference;

        title(timer_remaining+"/"+timer_interval);

        if(timer_remaining > 0){
            $TIMER_BAR.style.width = (timer_difference / timer_interval * 100)+"%";
            $TIMER_REMAINING_TIME.innerText = timer_remaining;
        }
        else{
            $TIMER_BAR.style.width = "100%";
            $TIMER_REMAINING_TIME.innerText = "some";
        }

        // TRY TICKETS
        try_tickets();


        // UPDATE AD PROGRESS
        var ad_difference = Math.floor(new Date().getTime()/1000) - ad_last_time;
        var ad_remaining = ad_interval - ad_difference;

        if(ad_remaining > 0){
            $AD_BAR.style.width = (ad_difference / ad_interval * 100)+"%";
            $AD_REMAINING_TIME.innerText = Math.floor(ad_remaining/60);
        }
        else{
            $AD_BAR.style.width = "100%";
            $AD_REMAINING_TIME.innerText = "some";
        }
    }

    // Excecutes each minute
    function ad_interval_check(){
        var ad_difference = Math.floor(new Date().getTime()/1000) - ad_last_time;
        var ad_remaining = ad_interval - ad_difference;

        if(ad_remaining < 0){

            // Some random-thingy to be "human & real™"
            if(Math.floor(Math.random()*100) == 42){
                try_ad();
            }
        }
    }

    // Check for updates on github
    function check_updates(){

        $.fetch("//api.github.com/repos/DeathMiner/RewardsGG-Farm/releases/latest", {
            method: 'GET',
            responseType: "json",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        })
        .then(function(xhr){
            var data = xhr.response,
                version = data.tag_name.substr(1);

            if(info.version != version){
                alert_window({
                    title: '['+info.name+']',
                    text: "A new update is available!\n\n"+data.name+"\n\nUpdate infos:\n"+data.body,
                    showCancelButton: true,
                    type: "info",
                    confirmButtonClass: 'primary',
                    confirmButtonText: "Update now!",
                    cancelButtonText: "Later",
                    closeOnConfirm: false,
                    closeOnCancel: true
                },
                function(result){

                    if(result){
                        alert_window({
                            title: '['+info.name+']',
                            text: "Updating script...",
                            type: "success"
                        });
                        window.location = "https://github.com/DeathMiner/RewardsGG-Farm/raw/"+data.tag_name+"/rewardsgg-farm.user.js"
                    }
                });
            }
        })
    }

    // Alert window
    function alert_window(options, callback){
        var defaults = {
                title: "",
                text: "",
                showCancelButton: false,
                type: "info",
                confirmButtonText: "OK",
                confirmButtonClass: "",
                cancelButtonText: "Cancel",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            options = $.extend(defaults, options),
            on_confirm = function(){
                $ALERT_WINDOW_CANCEL.removeEventListener("click", on_cancel);
                $ALERT_WINDOW_CONFIRM.removeEventListener("click", on_confirm);

                if(options.closeOnConfirm) $ALERT_WINDOW.setAttribute("hidden", "hidden");

                callback(true);
            },
            on_cancel = function(){
                $ALERT_WINDOW_CANCEL.removeEventListener("click", on_cancel);
                $ALERT_WINDOW_CONFIRM.removeEventListener("click", on_confirm);

                if(options.closeOnCancel) $ALERT_WINDOW.setAttribute("hidden", "hidden");

                callback(false);
            };

        $ALERT_WINDOW_TITLE.innerText = "("+options.type+") "+options.title;
        $ALERT_WINDOW_TEXT.innerHTML = options.text.replace(/\n/g, "<br>");
        $ALERT_WINDOW_CANCEL.innerText = options.cancelButtonText;
        $ALERT_WINDOW_CONFIRM.innerText = options.confirmButtonText;
        $ALERT_WINDOW_CONFIRM.className = options.confirmButtonClass;

        if(options.showCancelButton){
            $ALERT_WINDOW_CANCEL.removeAttribute("hidden");
        }
        else{
            $ALERT_WINDOW_CANCEL.setAttribute("hidden", "hidden");
        }
            
        $ALERT_WINDOW_CANCEL.removeEventListener("click", on_cancel);
        $ALERT_WINDOW_CONFIRM.removeEventListener("click", on_confirm);

        $ALERT_WINDOW_CANCEL.addEventListener("click", on_cancel);
        $ALERT_WINDOW_CONFIRM.addEventListener("click", on_confirm);

        $ALERT_WINDOW.removeAttribute("hidden");
    }

    // Convert ticket count to Dollar currency (EXPERIMENTAL)
    function ticket_to_dollar(total){

        // According to marketplace, 605000 tickets are 55.00$ confirmed
        var dollar = (total*55)/605000;

        // We round for reading pruposes
        return dollar.toFixed(2);
    }

    title("Loading...");

    // DELETE LOADED HTML, SHOW A LOADING MESSAGE
    document.documentElement.innerHTML = `<html>
    <body style='background:#000;color:#0F0;overflow:hidden;'>
        <h1 style='font-size:100px;vertical-align:center;padding:350px 0;text-align:center;margin-bottom:1200px;'>LOADING THIS SHIT!</h1>
    </body>
</html>`;

    // Wait for DOMContentLoaded
    $.ready().then(function(){

        info.site_version = $(".footer-copyrights").innerText.split(" | ")[1].replace(/\s/g, "");

        // We are logged in when there is the ticket count
        logged_in = $(".tickets-count") != null ? true : false;

        total_tickets = logged_in ? parseInt($(".tickets-count").innerText, 10) : 0;
        total_tickets_earned = 0;
        current_username = logged_in ? $(".profile-dropdown > a").innerText : "Anonymous";

        // DELETE ALL THE HTML, STOPPING SCRIPTS BTW, AND SHOW REAL FARM HTML
        document.documentElement.innerHTML = `<html>
    <head>
        <title>[FARM] Loaded.</title>
        <style type="text/css">
            * {
                box-sizing: border-box;
            }
            body{
                background:#000;
                color:#0F0;
                font-family: Pragmata, Menlo, 'DejaVu LGC Sans Mono', 'DejaVu Sans Mono', Consolas, 'Everson Mono', 'Lucida Console', 'Andale Mono', 'Nimbus Mono L', 'Liberation Mono', FreeMono, 'Osaka Monospaced', Courier, 'New Courier', monospace;
                margin: 0;
                font-size: 16px;
            }
            nav{
                background:#0F0;
                color:#000;
                padding: 19px 35px;
                text-align:center;
                max-width:1280px;
                margin:0 auto;
            }
            .right{
                float:right;
            }
            .left{
                float:left;
            }
            nav a{
                padding:19px 0;
                margin-top:-19px;
                color:#000;
            }
            .progress{
                padding: 19px 35px;
                max-width:1280px;
                margin:0 auto;
            }
            .progress .bar-container{
                height:19px;
                border:1px #0F0 solid;
            }
            .progress .bar-container div{
                height:100%;
                width:0;
                background:#0F0;
            }
            .frames{
                height:500px;
                position:relative;
                max-width:1280px;
                margin:0 auto;
            }
            button{
                background:#000;
                border:none;
                cursor:pointer;
                padding: 18px 35px;
                border:1px #0F0 solid;
                height:57px;
                color:#0F0;
                font-family: Pragmata, Menlo, 'DejaVu LGC Sans Mono', 'DejaVu Sans Mono', Consolas, 'Everson Mono', 'Lucida Console', 'Andale Mono', 'Nimbus Mono L', 'Liberation Mono', FreeMono, 'Osaka Monospaced', Courier, 'New Courier', monospace;
                outline:none;
                font-size: 16px;
            }
            button.primary{
                background:#0F0;
                color:#000;
            }
            .frames #PRIVACY{
                position:absolute;
                bottom:19px;
                right:25%;
                right:calc(25% + 35px);
            }
            .frames #STATS{
                border:0;
                width:75%;
                height:100%;
                float:left;
            }
            .frames #CHAT{
                border:0;
                width:25%;
                height:100%;
                float:left;
            }
            .frames #STATS_OVERLAY{
                background:#000;
                position:absolute;
                top:0;
                left:0;
                width:75%;
                height:100%;
                padding: 239px 0px;
                text-align:center;
                border:1px #0F0 solid;
            }
            .frames #CHAT_OVERLAY{
                background:#000;
                position:absolute;
                top:0;
                left:75%;
                width:25%;
                height:100%;
                padding: 239px 0px;
                text-align:center;
                border:1px #0F0 solid;
            }
            .console-container{
                padding: 19px 35px;
                max-width:1280px;
                margin:0 auto;
            }
            .console-container #CONSOLE{
                height: 152px;
                overflow-y:scroll;
            }
            .console-container #CONSOLE pre{
                font-family: Pragmata, Menlo, 'DejaVu LGC Sans Mono', 'DejaVu Sans Mono', Consolas, 'Everson Mono', 'Lucida Console', 'Andale Mono', 'Nimbus Mono L', 'Liberation Mono', FreeMono, 'Osaka Monospaced', Courier, 'New Courier', monospace;
                white-space: pre;
                word-wrap:break-word;
                font-size: 16px;
                margin:0;
            }

            [hidden]{
                display:none !important;
            }

            #ALERT_WINDOW {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.65);
                display: table;
            }
            
            #ALERT_WINDOW .inner {
                display: table-cell;
                vertical-align: middle;
            }
            
            #ALERT_WINDOW .container {
                width: 500px;
                margin: 0 auto;
                background: #000;
                border: 1px #0F0 solid;
                padding: 19px 35px;
                overflow:hidden;
            }

            #ALERT_WINDOW .container > div{
                margin:19px 0;
            }

            #ALERT_WINDOW .container > div:first-child{
                margin-top:0
            }
            
            #ALERT_WINDOW .container > div:last-child{
                margin-bottom:0
            }

            footer{
                background:#0F0;
                color:#000;
                padding: 19px 35px;
                text-align:center;
                height:57px;
                max-width:1280px;
                margin:0 auto;
            }
            footer a{
                padding:19px 0;
                margin-top:-19px;
                color:#000;
            }
            footer iframe{
                margin-top:-5px;
                vertical-align:middle;
            }
            span[title]{
                border-bottom:1px #000 dashed;
                cursor: help;
            }
        </style>
    </head>
    <body>
        <nav>
            <a href="/" class="left" target="_blank">REWARDS.GG FARM</a>
            <span id="TOTAL_TICKETS_EARNED">0</span> tickets farmed
            <div class="right">
                <span id="TOTAL_TICKETS">${total_tickets}</span> tickets <span title="Notice: This ticket to dollar conversion is experimental.">(~<span id="TICKET_DOLLAR_VALUE">${ticket_to_dollar(total_tickets)}</span>$)</span> | ${logged_in ? "logged as "+current_username : "<a href=\"/login\" target=\"_blank\">Please login</a>"}
            </div>
        </nav>
        <div class="progress">
            Getting <span id="TIMER_EARNED_TICKETS">some</span> tickets in <span id="TIMER_REMAINING_TIME">some</span> seconds! (timer)
            <div class="bar-container">
                <div id="TIMER_BAR"></div>
            </div><br>
            Getting <span id="AD_EARNED_TICKETS">some</span> extra tickets in <span id="AD_REMAINING_TIME">some</span> minutes! (ads)
            <div class="bar-container">
                <div id="AD_BAR"></div>
            </div>
        </div>
        <div class="frames">
            <iframe id="STATS" src="${s.config.host}widget/"></iframe>
            <iframe id="CHAT" src="https://kiwiirc.com/client/irc.kiwiirc.com/?nick=${encodeURIComponent(current_username)}&theme=cli#RewardsGG-Farm"></iframe>
            <div id="STATS_OVERLAY">Loading STATS...</div>
            <div id="CHAT_OVERLAY">Loading CHAT...</div>
            <button id="PRIVACY" class="primary">Privacy</button>
        </div>
        <div class="console-container">
            <!-- CONSOLE: -->
            <div id="CONSOLE">
                <pre>  _____ _  _ ___ ___   ___ _  _ ___ _____    ___  ___ _____   _  _   _   ___ _  _____ ___  
 |_   _| || |_ _/ __| / __| || |_ _|_   _|  / __|/ _ \\_   _| | || | /_\\ / __| |/ / __|   \\ 
   | | | __ || |\\__ \\ \\__ \\ __ || |  | |   | (_ | (_) || |   | __ |/ _ \\ (__| ' <| _|| |) |
   |_| |_||_|___|___/ |___/_||_|___| |_|    \\___|\\___/ |_|   |_||_/_/ \\_\\___|_|\\_\\___|___/ 

=> ${info.name} v${info.version}
   Using RewardsGG site v${info.site_version}${info.site_version != info.tested ? " [tested on v"+info.tested+"]" : ""}
   <3 from Death_Miner
</pre>
            </div>
        </div>
        <footer>
            Support me: <a class="github-button" href="https://github.com/DeathMiner/RewardsGG-Farm" data-icon="octicon-star" data-style="mega" data-count-href="/DeathMiner/RewardsGG-Farm/stargazers" data-count-api="/repos/DeathMiner/RewardsGG-Farm#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star DeathMiner/RewardsGG-Farm on GitHub">Star</a> | Report a bug: <a class="github-button" href="https://github.com/DeathMiner/RewardsGG-Farm/issues" data-icon="octicon-issue-opened" data-style="mega" data-count-api="/repos/DeathMiner/RewardsGG-Farm#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue DeathMiner/RewardsGG-Farm on GitHub">Issue</a> | Project & Source: <a class="github-button" href="https://github.com/DeathMiner/RewardsGG-Farm" data-style="mega" aria-label="View DeathMiner/RewardsGG-Farm on GitHub">View on GitHub</a>
        </footer>
        <div id="ALERT_WINDOW" hidden>
            <div class="inner">
                <div class="container">
                    <div id="ALERT_WINDOW_TITLE"></div>
                    <div id="ALERT_WINDOW_TEXT"></div>
                    <div class="right">
                        <button type="button" id="ALERT_WINDOW_CANCEL">Cancel</button>
                        <button type="button" id="ALERT_WINDOW_CONFIRM">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>`;

        // Github buttons
        $.contents($("body"), [{tag: "script", attributes: {"async": "async", "defer": "defer", "src": "https://buttons.github.io/buttons.js"}}]);
        
        // GET DOM ELEMENTS
        $TOTAL_TICKETS_EARNED = $("#TOTAL_TICKETS_EARNED");
        $TOTAL_TICKETS = $("#TOTAL_TICKETS");
        $TIMER_EARNED_TICKETS = $("#TIMER_EARNED_TICKETS");
        $TIMER_REMAINING_TIME = $("#TIMER_REMAINING_TIME");
        $TIMER_BAR = $("#TIMER_BAR");
        $AD_EARNED_TICKETS = $("#AD_EARNED_TICKETS");
        $AD_REMAINING_TIME = $("#AD_REMAINING_TIME");
        $AD_BAR = $("#AD_BAR");
        $STATS = $("#STATS");
        $CHAT = $("#CHAT");
        $PRIVACY = $("#PRIVACY");
        $CONSOLE = $("#CONSOLE");
        $ALERT_WINDOW = $("#ALERT_WINDOW");
        $ALERT_WINDOW_TITLE = $("#ALERT_WINDOW_TITLE");
        $ALERT_WINDOW_TEXT = $("#ALERT_WINDOW_TEXT");
        $ALERT_WINDOW_CANCEL = $("#ALERT_WINDOW_CANCEL");
        $ALERT_WINDOW_CONFIRM = $("#ALERT_WINDOW_CONFIRM");
        $TICKET_DOLLAR_VALUE = $("#TICKET_DOLLAR_VALUE");

        // Set events
        $.once($STATS, {load:function(){$("#STATS_OVERLAY").remove();}});
        $.once($CHAT, {load:function(){$("#CHAT_OVERLAY").remove();}});
        $PRIVACY.addEventListener("click", s.privacy);

        $CONSOLE.scrollTop = $CONSOLE.scrollHeight;

        // Load last ad time
        var result = localStorage.getItem("rewardsgg-farm_ad_last_time");
        if(result != null) ad_last_time = result;


        // WE FINISHED
        title("Loaded!");

        s.init();

        // Alert if not logged in
        if(!logged_in){
            title("Please login!")

            alert_window({
                title: '['+info.name+']',
                text:  'Please login first to farm tickets!',
                type: "warning"
            })

            return;
        }

        // START !
        title("Started!");

        s.hit();

        check_updates();

        setInterval(timer_interval_check, 1000);
        timer_interval_check();

        setInterval(ad_interval_check, 60000);
        ad_interval_check();

        // Prevents user from quitting
        window.onbeforeunload = function(){
            return "Do you really want to stop farming?\nThis will stop your current session, and you won't be able to resume it.";
        };
    })

})(window, document, Bliss, Bliss.$);

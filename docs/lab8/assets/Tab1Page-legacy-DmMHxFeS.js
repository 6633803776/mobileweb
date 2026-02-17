System.register(["./index-legacy-CWDuTT5O.js","./_plugin-vue_export-helper-legacy-BVIICed7.js"],function(t,e){"use strict";var n,i,s,r,o,a,c,h,l,u,d,p,f,g,m,y,v,b,w,_,S,E,C,A,T;return{setters:[t=>{n=t.d,i=t.c,s=t.w,r=t.u,o=t.I,a=t.a,c=t.b,h=t.e,l=t.f,u=t.g,d=t.h,p=t.i,f=t.j,g=t.k,m=t.l,y=t.m,v=t.n,b=t.o,w=t.p,_=t.s,S=t.t,E=t.q,C=t.r,A=t.v},t=>{T=t._}],execute:function(){var e,I=document.createElement("style");I.textContent=".pastel-theme[data-v-cbdb2b3c]{--ion-background-color: #f0f4f8}ion-toolbar[data-v-cbdb2b3c]{--background: linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%);--color: white;border-radius:0 0 20px 20px}.glass-card[data-v-cbdb2b3c]{background:rgba(255,255,255,.8);backdrop-filter:blur(10px);border-radius:30px;padding:20px;box-shadow:0 8px 32px rgba(0,0,0,.05);margin-top:10px;border:1px solid rgba(255,255,255,.3)}.button-group[data-v-cbdb2b3c]{display:flex;gap:10px;margin-bottom:20px}.btn-pastel[data-v-cbdb2b3c]{--border-radius: 20px;--box-shadow: none;font-weight:600;flex:1}.pink[data-v-cbdb2b3c]{--background: #fbc2eb;--background-activated: #f8a5c2;color:#6d5b7b}.blue[data-v-cbdb2b3c]{--background: #a1c4fd;--background-activated: #92b8f9;color:#5d6d7e}.btn-analyze[data-v-cbdb2b3c]{--background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);--border-radius: 25px;--box-shadow: 0 4px 15px rgba(143, 211, 244, .4);margin-top:20px;font-size:1.1rem;font-weight:700}.image-preview-container[data-v-cbdb2b3c]{border-radius:25px;overflow:hidden;border:4px solid white;box-shadow:0 4px 10px rgba(0,0,0,.1);margin:15px 0}.preview-img[data-v-cbdb2b3c]{max-height:300px;object-fit:cover}.result-box[data-v-cbdb2b3c]{background:#fff;border-radius:20px;padding:15px;margin-top:20px;border:1px dashed #a1c4fd}.result-box h3[data-v-cbdb2b3c]{color:#778ca3;font-size:1rem;margin-top:0}pre[data-v-cbdb2b3c]{white-space:pre-wrap;word-wrap:break-word;font-size:.85rem;color:#4b6584}\n/*$vite$:1*/",document.head.appendChild(I),function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"}(e||(e={}));class k extends Error{constructor(t,e,n){super(t),this.message=t,this.code=e,this.data=n}}const O=t=>{const n=t.CapacitorCustomPlatform||null,i=t.Capacitor||{},s=i.Plugins=i.Plugins||{},r=()=>null!==n?n.name:(t=>{var e,n;return(null==t?void 0:t.androidBridge)?"android":(null===(n=null===(e=null==t?void 0:t.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(t),o=t=>{var e;return null===(e=i.PluginHeaders)||void 0===e?void 0:e.find(e=>e.name===t)},a=new Map;return i.convertFileSrc||(i.convertFileSrc=t=>t),i.getPlatform=r,i.handleError=e=>t.console.error(e),i.isNativePlatform=()=>"web"!==r(),i.isPluginAvailable=t=>{const e=a.get(t);return!!(null==e?void 0:e.platforms.has(r()))||!!o(t)},i.registerPlugin=(t,c={})=>{const h=a.get(t);if(h)return console.warn(`Capacitor plugin "${t}" already registered. Cannot register plugins twice.`),h.proxy;const l=r(),u=o(t);let d;const p=s=>{let r;const o=(...o)=>{const a=(async()=>(!d&&l in c?d=d="function"==typeof c[l]?await c[l]():c[l]:null!==n&&!d&&"web"in c&&(d=d="function"==typeof c.web?await c.web():c.web),d))().then(n=>{const a=((n,s)=>{var r,o;if(!u){if(n)return null===(o=n[s])||void 0===o?void 0:o.bind(n);throw new k(`"${t}" plugin is not implemented on ${l}`,e.Unimplemented)}{const e=null==u?void 0:u.methods.find(t=>s===t.name);if(e)return"promise"===e.rtype?e=>i.nativePromise(t,s.toString(),e):(e,n)=>i.nativeCallback(t,s.toString(),e,n);if(n)return null===(r=n[s])||void 0===r?void 0:r.bind(n)}})(n,s);if(a){const t=a(...o);return r=null==t?void 0:t.remove,t}throw new k(`"${t}.${s}()" is not implemented on ${l}`,e.Unimplemented)});return"addListener"===s&&(a.remove=async()=>r()),a};return o.toString=()=>`${s.toString()}() { [capacitor code] }`,Object.defineProperty(o,"name",{value:s,writable:!1,configurable:!1}),o},f=p("addListener"),g=p("removeListener"),m=(t,e)=>{const n=f({eventName:t},e),i=async()=>{const i=await n;g({eventName:t,callbackId:i},e)},s=new Promise(t=>n.then(()=>t({remove:i})));return s.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()},s},y=new Proxy({},{get(t,e){switch(e){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return u?m:f;case"removeListener":return g;default:return p(e)}}});return s[t]=y,a.set(t,{name:t,proxy:y,platforms:new Set([...Object.keys(c),...u?[l]:[]])}),y},i.Exception=k,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i},P=(t=>t.Capacitor=O(t))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),D=P.registerPlugin;class x{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(e);const i=this.windowListeners[t];return i&&!i.registered&&this.addWindowListener(i),n&&this.sendRetainedArgumentsForEvent(t),Promise.resolve({remove:async()=>this.removeListener(t,e)})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,n){const i=this.listeners[t];if(i)i.forEach(t=>t(e));else if(n){let n=this.retainedEventArguments[t];n||(n=[]),n.push(e),this.retainedEventArguments[t]=n}}hasListeners(t){var e;return!!(null===(e=this.listeners[t])||void 0===e?void 0:e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:t=>{this.notifyListeners(e,t)}}}unimplemented(t="not implemented"){return new P.Exception(t,e.Unimplemented)}unavailable(t="not available"){return new P.Exception(t,e.Unavailable)}async removeListener(t,e){const n=this.listeners[t];if(!n)return;const i=n.indexOf(e);this.listeners[t].splice(i,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(e=>{this.notifyListeners(t,e)}))}}const L=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),R=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class j extends x{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(t=>{if(t.length<=0)return;let[n,i]=t.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=R(n).trim(),i=R(i).trim(),e[n]=i}),e}async setCookie(t){try{const e=L(t.key),n=L(t.value),i=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",s=(t.path||"/").replace("path=",""),r=null!=t.url&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${n||""}${i}; path=${s}; ${r};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}D("CapacitorCookies",{web:()=>new j});const N=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=((t={})=>{const e=Object.keys(t);return Object.keys(t).map(t=>t.toLocaleLowerCase()).reduce((n,i,s)=>(n[i]=t[e[s]],n),{})})(t.headers)["content-type"]||"";if("string"==typeof t.data)n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const e=new URLSearchParams;for(const[n,i]of Object.entries(t.data||{}))e.set(n,i);n.body=e.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const e=new FormData;if(t.data instanceof FormData)t.data.forEach((t,n)=>{e.append(n,t)});else for(const n of Object.keys(t.data))e.append(n,t.data[n]);n.body=e;const i=new Headers(n.headers);i.delete("content-type"),n.headers=i}else(i.includes("application/json")||"object"==typeof t.data)&&(n.body=JSON.stringify(t.data));return n};class M extends x{async request(t){const e=N(t,t.webFetchExtra),n=((t,e=!0)=>t?Object.entries(t).reduce((t,n)=>{const[i,s]=n;let r,o;return Array.isArray(s)?(o="",s.forEach(t=>{r=e?encodeURIComponent(t):t,o+=`${i}=${r}&`}),o.slice(0,-1)):(r=e?encodeURIComponent(s):s,o=`${i}=${r}`),`${t}&${o}`},"").substr(1):null)(t.params,t.shouldEncodeUrlParams),i=n?`${t.url}?${n}`:t.url,s=await fetch(i,e),r=s.headers.get("content-type")||"";let o,a,{responseType:c="text"}=s.ok?t:{};switch(r.includes("application/json")&&(c="json"),c){case"arraybuffer":case"blob":a=await s.blob(),o=await(async t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{const t=i.result;e(t.indexOf(",")>=0?t.split(",")[1]:t)},i.onerror=t=>n(t),i.readAsDataURL(t)}))(a);break;case"json":o=await s.json();break;default:o=await s.text()}const h={};return s.headers.forEach((t,e)=>{h[e]=t}),{data:o,headers:h,status:s.status,url:s.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}var $,F,U,B,H;D("CapacitorHttp",{web:()=>new M}),function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"}($||($={})),function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"}(F||(F={}));class V extends x{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}D("SystemBars",{web:()=>new V}),function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"}(U||(U={})),function(t){t.Rear="REAR",t.Front="FRONT"}(B||(B={})),function(t){t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl"}(H||(H={}));class q extends x{async getPhoto(t){return new Promise(async(e,n)=>{if(t.webUseInput||t.source===U.Photos)this.fileInputExperience(t,e,n);else if(t.source===U.Prompt){let i=document.querySelector("pwa-action-sheet");i||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=t.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",async i=>{0===i.detail?this.fileInputExperience(t,e,n):this.cameraExperience(t,e,n)})}else this.cameraExperience(t,e,n)})}async pickImages(t){return new Promise(async(t,e)=>{this.multipleFileInputExperience(t,e)})}async cameraExperience(t,e,n){if(customElements.get("pwa-camera-modal")){const s=document.createElement("pwa-camera-modal");s.facingMode=t.direction===B.Front?"user":"environment",document.body.appendChild(s);try{await s.componentOnReady(),s.addEventListener("onPhoto",async i=>{const r=i.detail;null===r?n(new k("User cancelled photos app")):r instanceof Error?n(r):e(await this._getCameraPhoto(r,t)),s.dismiss(),document.body.removeChild(s)}),s.present()}catch(i){this.fileInputExperience(t,e,n)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(t,e,n)}fileInputExperience(t,e,n){let i=document.querySelector("#_capacitor-camera-input");const s=()=>{var t;null===(t=i.parentNode)||void 0===t||t.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input",i.type="file",i.hidden=!0,document.body.appendChild(i),i.addEventListener("change",n=>{const r=i.files[0];let o="jpeg";if("image/png"===r.type?o="png":"image/gif"===r.type&&(o="gif"),"dataUrl"===t.resultType||"base64"===t.resultType){const n=new FileReader;n.addEventListener("load",()=>{if("dataUrl"===t.resultType)e({dataUrl:n.result,format:o});else if("base64"===t.resultType){const t=n.result.split(",")[1];e({base64String:t,format:o})}s()}),n.readAsDataURL(r)}else e({webPath:URL.createObjectURL(r),format:o}),s()}),i.addEventListener("cancel",t=>{n(new k("User cancelled photos app")),s()})),i.accept="image/*",i.capture=!0,t.source===U.Photos||t.source===U.Prompt?i.removeAttribute("capture"):t.direction===B.Front?i.capture="user":t.direction===B.Rear&&(i.capture="environment"),i.click()}multipleFileInputExperience(t,e){let n=document.querySelector("#_capacitor-camera-input-multiple");const i=()=>{var t;null===(t=n.parentNode)||void 0===t||t.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input-multiple",n.type="file",n.hidden=!0,n.multiple=!0,document.body.appendChild(n),n.addEventListener("change",e=>{const s=[];for(let t=0;t<n.files.length;t++){const e=n.files[t];let i="jpeg";"image/png"===e.type?i="png":"image/gif"===e.type&&(i="gif"),s.push({webPath:URL.createObjectURL(e),format:i})}t({photos:s}),i()}),n.addEventListener("cancel",t=>{e(new k("User cancelled photos app")),i()})),n.accept="image/*",n.click()}_getCameraPhoto(t,e){return new Promise((n,i)=>{const s=new FileReader,r=t.type.split("/")[1];"uri"===e.resultType?n({webPath:URL.createObjectURL(t),format:r,saved:!1}):(s.readAsDataURL(t),s.onloadend=()=>{const t=s.result;"dataUrl"===e.resultType?n({dataUrl:t,format:r,saved:!1}):n({base64String:t.split(",")[1],format:r,saved:!1})},s.onerror=t=>{i(t)})})}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(t){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const z=D("Camera",{web:()=>new q});class W{static async fromFile(t){return{base64:await new Promise((e,n)=>{const i=new FileReader;i.onloadend=()=>{const t=String(i.result||"").split(",")[1];if(!t)return n(new Error("Invalid base64 data"));e(t)},i.onerror=()=>n(i.error),i.readAsDataURL(t)}),mimeType:t.type||"image/jpeg"}}static async fromCamera(){const t=await z.getPhoto({source:U.Prompt,resultType:H.Base64,quality:85});if(!t.base64String)throw new Error("No base64 from camera");return{base64:t.base64String,mimeType:t.format?`image/${t.format}`:"image/jpeg"}}}var J={};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const G=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},K={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,h=e>>2,l=(3&e)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[h],n[l],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length?n[t.charAt(s)]:0;++s;const o=s<t.length?n[t.charAt(s)]:64;++s;const a=s<t.length?n[t.charAt(s)]:64;if(++s,null==e||null==r||null==o||null==a)throw new X;const c=e<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y=function(t){return function(t){const e=G(t);return K.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Z=()=>
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */().__FIREBASE_DEFAULTS__,Q=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return K.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},tt=()=>{try{return Z()||(()=>{if("undefined"==typeof process)return;const t=J.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||Q()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},et=t=>{const e=(t=>{var e;return null===(e=tt())||void 0===e||null===(e=e.emulatorHosts)||void 0===e?void 0:e[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},nt=()=>{var t;return null===(t=tt())||void 0===t?void 0:t.config};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class it{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function st(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}const rt={};let ot=!1;function at(t,e){if("undefined"==typeof window||"undefined"==typeof document||!st(window.location.host)||rt[t]===e||rt[t]||ot)return;function n(t){return`__firebase__banner__${t}`}rt[t]=e;const i="__firebase__banner",s=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(rt))rt[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function r(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{ot=!0,function(){const t=document.getElementById(i);t&&t.remove()}()},t}function o(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(i),e=n("text"),o=document.getElementById(e)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),h=n("preprendIcon"),l=document.getElementById(h)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(c,a);const n=r();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(l,h),e.append(l,o,c,n),document.body.appendChild(e)}s?(o.innerText="Preview backend disconnected.",l.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(l.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}class ct extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ht.prototype.create)}}class ht{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(lt,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new ct(i,o,n)}}const lt=/\{\$([^}]+)}/g;function ut(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(dt(n)&&dt(r)){if(!ut(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function dt(t){return null!==t&&"object"==typeof t}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function pt(t){return t&&t._delegate?t._delegate:t}class ft{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const gt="[DEFAULT]";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class mt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new it;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t))try{this.getOrInitializeService({instanceIdentifier:gt})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=gt){return this.instances.has(t)}getOptions(t=gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(s)&&r.resolve(i);return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===gt?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var i;return n||null}normalizeInstanceIdentifier(t=gt){return this.component?this.component.multipleInstances?t:gt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class yt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new mt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var vt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(vt||(vt={}));const bt={debug:vt.DEBUG,verbose:vt.VERBOSE,info:vt.INFO,warn:vt.WARN,error:vt.ERROR,silent:vt.SILENT},wt=vt.INFO,_t={[vt.DEBUG]:"log",[vt.VERBOSE]:"log",[vt.INFO]:"info",[vt.WARN]:"warn",[vt.ERROR]:"error"},St=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=_t[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class Et{constructor(t){this.name=t,this._logLevel=wt,this._logHandler=St,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?bt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,vt.DEBUG,...t),this._logHandler(this,vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,vt.VERBOSE,...t),this._logHandler(this,vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,vt.INFO,...t),this._logHandler(this,vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,vt.WARN,...t),this._logHandler(this,vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,vt.ERROR,...t),this._logHandler(this,vt.ERROR,...t)}}let Ct,At;const Tt=new WeakMap,It=new WeakMap,kt=new WeakMap,Ot=new WeakMap,Pt=new WeakMap;let Dt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return It.get(t);if("objectStoreNames"===e)return t.objectStoreNames||kt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function xt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(At||(At=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(jt(this),e),Rt(Tt.get(this))}:function(...e){return Rt(t.apply(jt(this),e))}:function(e,...n){const i=t.call(jt(this),e,...n);return kt.set(i,e.sort?e.sort():[e]),Rt(i)}}function Lt(t){return"function"==typeof t?xt(t):(t instanceof IDBTransaction&&function(t){if(It.has(t))return;const e=new Promise((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)});It.set(t,e)}(t),e=t,(Ct||(Ct=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,Dt):t);var e}function Rt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(Rt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)});return e.then(e=>{e instanceof IDBCursor&&Tt.set(e,t)}).catch(()=>{}),Pt.set(e,t),e}(t);if(Ot.has(t))return Ot.get(t);const e=Lt(t);return e!==t&&(Ot.set(t,e),Pt.set(e,t)),e}const jt=t=>Pt.get(t),Nt=["get","getKey","getAll","getAllKeys","count"],Mt=["put","add","delete","clear"],$t=new Map;function Ft(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if($t.get(e))return $t.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Mt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Nt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return $t.set(e,r),r}var Ut;Ut=Dt,Dt={...Ut,get:(t,e,n)=>Ft(t,e)||Ut.get(t,e,n),has:(t,e)=>!!Ft(t,e)||Ut.has(t,e)};
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Bt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const Ht="@firebase/app",Vt="0.14.8",qt=new Et("@firebase/app"),zt="@firebase/app-compat",Wt="@firebase/analytics-compat",Jt="@firebase/analytics",Gt="@firebase/app-check-compat",Kt="@firebase/app-check",Xt="@firebase/auth",Yt="@firebase/auth-compat",Zt="@firebase/database",Qt="@firebase/data-connect",te="@firebase/database-compat",ee="@firebase/functions",ne="@firebase/functions-compat",ie="@firebase/installations",se="@firebase/installations-compat",re="@firebase/messaging",oe="@firebase/messaging-compat",ae="@firebase/performance",ce="@firebase/performance-compat",he="@firebase/remote-config",le="@firebase/remote-config-compat",ue="@firebase/storage",de="@firebase/storage-compat",pe="@firebase/firestore",fe="@firebase/ai",ge="@firebase/firestore-compat",me="firebase",ye="[DEFAULT]",ve={[Ht]:"fire-core",[zt]:"fire-core-compat",[Jt]:"fire-analytics",[Wt]:"fire-analytics-compat",[Kt]:"fire-app-check",[Gt]:"fire-app-check-compat",[Xt]:"fire-auth",[Yt]:"fire-auth-compat",[Zt]:"fire-rtdb",[Qt]:"fire-data-connect",[te]:"fire-rtdb-compat",[ee]:"fire-fn",[ne]:"fire-fn-compat",[ie]:"fire-iid",[se]:"fire-iid-compat",[re]:"fire-fcm",[oe]:"fire-fcm-compat",[ae]:"fire-perf",[ce]:"fire-perf-compat",[he]:"fire-rc",[le]:"fire-rc-compat",[ue]:"fire-gcs",[de]:"fire-gcs-compat",[pe]:"fire-fst",[ge]:"fire-fst-compat",[fe]:"fire-vertex","fire-js":"fire-js",[me]:"fire-js-all"},be=new Map,we=new Map,_e=new Map;function Se(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ee(t){const e=t.name;if(_e.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;_e.set(e,t);for(const n of be.values())Se(n,t);for(const n of we.values())Se(n,t);return!0}function Ce(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ae(t){return null!=t&&void 0!==t.settings}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Te=new ht("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ie{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ke(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const i={name:ye,automaticDataCollectionEnabled:!0,...e},s=i.name;if("string"!=typeof s||!s)throw Te.create("bad-app-name",{appName:String(s)});if(n||(n=nt()),!n)throw Te.create("no-options");const r=be.get(s);if(r){if(ut(n,r.options)&&ut(i,r.config))return r;throw Te.create("duplicate-app",{appName:s})}const o=new yt(s);for(const c of _e.values())o.addComponent(c);const a=new Ie(n,i,o);return be.set(s,a),a}function Oe(t=ye){const e=be.get(t);if(!e&&t===ye&&nt())return ke();if(!e)throw Te.create("no-app",{appName:t});return e}function Pe(t,e,n){var i;let s=null!==(i=ve[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void qt.warn(t.join(" "))}Ee(new ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const De="firebase-heartbeat-store";let xe=null;function Le(){return xe||(xe=function(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Rt(o);return i&&o.addEventListener("upgradeneeded",t=>{i(Rt(o.result),t.oldVersion,t.newVersion,Rt(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{r&&t.addEventListener("close",()=>r()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(De)}catch(n){console.warn(n)}}}).catch(t=>{throw Te.create("idb-open",{originalErrorMessage:t.message})})),xe}async function Re(t,e){try{const n=(await Le()).transaction(De,"readwrite"),i=n.objectStore(De);await i.put(e,je(t)),await n.done}catch(n){if(n instanceof ct)qt.warn(n.message);else{const t=Te.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});qt.warn(t.message)}}}function je(t){return`${t.name}!${t.options.appId}`}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ne{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $e(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{var t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Me();var e;if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(t=>t.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){qt.warn(n)}}async getHeartbeatsHeader(){try{var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),Fe(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fe(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=Y(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return qt.warn(e),""}}}function Me(){return(new Date).toISOString().substring(0,10)}class $e{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Le()).transaction(De),n=await e.objectStore(De).get(je(t));return await e.done,n}catch(e){if(e instanceof ct)qt.warn(e.message);else{const t=Te.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});qt.warn(t.message)}}}(this.app);return null!=t&&t.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){var e;const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){var e;const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Fe(t){return Y(JSON.stringify({version:2,heartbeats:t})).length}var Ue;Ue="",Ee(new ft("platform-logger",t=>new Bt(t),"PRIVATE")),Ee(new ft("heartbeat",t=>new Ne(t),"PRIVATE")),Pe(Ht,Vt,Ue),Pe(Ht,Vt,"esm2020"),Pe("fire-js","");var Be="@firebase/ai",He="2.8.0";
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Ve="AI",qe="us-central1",ze="v1beta",We=He;
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Je extends ct{constructor(t,e,n){const i=`${Ve}: ${e} (${Ve}/${t})`;super(t,i),this.code=t,this.customErrorData=n,Error.captureStackTrace&&Error.captureStackTrace(this,Je),Object.setPrototypeOf(this,Je.prototype),this.toString=()=>i}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ge=["user","model","function","system"],Ke="HARM_SEVERITY_UNSUPPORTED",Xe="SAFETY",Ye="RECITATION",Ze="prefer_on_device",Qe="only_on_device",tn="only_in_cloud",en="prefer_in_cloud",nn="on_device",sn="in_cloud",rn="error",on="request-error",an="response-error",cn="fetch-error",hn="invalid-content",ln="api-not-enabled",un="invalid-schema",dn="no-api-key",pn="no-app-id",fn="no-model",gn="no-project-id",mn="parse-failed",yn="unsupported",vn="string",bn="number",wn="integer",_n="boolean",Sn="array",En="object",Cn="VERTEX_AI",An="GOOGLE_AI";
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Tn{constructor(t){this.backendType=t}}class In extends Tn{constructor(){super(An)}_getModelPath(t,e){return`/${ze}/projects/${t}/${e}`}_getTemplatePath(t,e){return`/${ze}/projects/${t}/templates/${e}`}}class kn extends Tn{constructor(t=qe){super(Cn),this.location=t||qe}_getModelPath(t,e){return`/${ze}/projects/${t}/locations/${this.location}/${e}`}_getTemplatePath(t,e){return`/${ze}/projects/${t}/locations/${this.location}/templates/${e}`}}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const On=new Et("@firebase/vertexai");var Pn;!function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"}(Pn||(Pn={}));
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Dn=[{type:"image"}];class xn{constructor(t,e,n){this.languageModelProvider=t,this.mode=e,this.isDownloading=!1,this.onDeviceParams={createOptions:{expectedInputs:Dn}},n&&(this.onDeviceParams=n,this.onDeviceParams.createOptions?this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=Dn):this.onDeviceParams.createOptions={expectedInputs:Dn})}async isAvailable(t){if(!this.mode)return On.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===tn)return On.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const e=await this.downloadIfAvailable();if(this.mode===Qe){if(e===Pn.UNAVAILABLE)throw new Je(ln,"Local LanguageModel API not available in this environment.");return e!==Pn.DOWNLOADABLE&&e!==Pn.DOWNLOADING||(On.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise,!0)}return e!==Pn.AVAILABLE?(On.debug(`On-device inference unavailable because availability is "${e}".`),!1):!!xn.isOnDeviceRequest(t)||(On.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(t){const e=await this.createSession(),n=await Promise.all(t.contents.map(xn.toLanguageModelMessage)),i=await e.prompt(n,this.onDeviceParams.promptOptions);return xn.toResponse(i)}async generateContentStream(t){const e=await this.createSession(),n=await Promise.all(t.contents.map(xn.toLanguageModelMessage)),i=e.promptStreaming(n,this.onDeviceParams.promptOptions);return xn.toStreamResponse(i)}async countTokens(t){throw new Je(on,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(t){if(0===t.contents.length)return On.debug("Empty prompt rejected for on-device inference."),!1;for(const e of t.contents){if("function"===e.role)return On.debug('"Function" role rejected for on-device inference.'),!1;for(const t of e.parts)if(t.inlineData&&-1===xn.SUPPORTED_MIME_TYPES.indexOf(t.inlineData.mimeType))return On.debug(`Unsupported mime type "${t.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){var t;const e=await(null===(t=this.languageModelProvider)||void 0===t?void 0:t.availability(this.onDeviceParams.createOptions));return e===Pn.DOWNLOADABLE&&this.download(),e}download(){var t;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=null===(t=this.languageModelProvider)||void 0===t?void 0:t.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(t){const e=await Promise.all(t.parts.map(xn.toLanguageModelMessageContent));return{role:xn.toLanguageModelMessageRole(t.role),content:e}}static async toLanguageModelMessageContent(t){if(t.text)return{type:"text",value:t.text};if(t.inlineData){const e=await fetch(`data:${t.inlineData.mimeType};base64,${t.inlineData.data}`),n=await e.blob();return{type:"image",value:await createImageBitmap(n)}}throw new Je(on,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(t){return"model"===t?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new Je(yn,"Chrome AI requested for unsupported browser version.");const t=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=t,t}static toResponse(t){return{json:async()=>({candidates:[{content:{parts:[{text:t}]}}]})}}static toStreamResponse(t){const e=new TextEncoder;return{body:t.pipeThrough(new TransformStream({transform(t,n){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:t}]}}]});n.enqueue(e.encode(`data: ${i}\n\n`))}}))}}}function Ln(t,e,n){if(void 0!==e&&t)return new xn(e.LanguageModel,t,n)}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */xn.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];class Rn{constructor(t,e,n,i,s){this.app=t,this.backend=e,this.chromeAdapterFactory=s;const r=null==i?void 0:i.getImmediate({optional:!0}),o=null==n?void 0:n.getImmediate({optional:!0});this.auth=o||null,this.appCheck=r||null,this.location=e instanceof kn?e.location:""}_delete(){return Promise.resolve()}set options(t){this._options=t}get options(){return this._options}}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function jn(t,{instanceIdentifier:e}){if(!e)throw new Je(rn,"AIService instance identifier is undefined.");const n=function(t){const e=t.split("/");if(e[0]!==Ve)throw new Je(rn,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const n=e[2];if(!n)throw new Je(rn,`Invalid instance identifier, unknown location '${t}'`);return new kn(n);case"googleai":return new In;default:throw new Je(rn,`Invalid instance identifier string: '${t}'`)}}(e),i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Rn(i,n,s,r,Ln)}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Nn{constructor(t,e){this._apiSettings=function(t){var e,n,i;if(null===(e=t.app)||void 0===e||null===(e=e.options)||void 0===e||!e.apiKey)throw new Je(dn,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');if(null===(n=t.app)||void 0===n||null===(n=n.options)||void 0===n||!n.projectId)throw new Je(gn,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');if(null===(i=t.app)||void 0===i||null===(i=i.options)||void 0===i||!i.appId)throw new Je(pn,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');const s={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend};if(Ae(t.app)&&t.app.settings.appCheckToken){const e=t.app.settings.appCheckToken;s.getAppCheckToken=()=>Promise.resolve({token:e})}else if(t.appCheck){var r;null!==(r=t.options)&&void 0!==r&&r.useLimitedUseAppCheckTokens?s.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():s.getAppCheckToken=()=>t.appCheck.getToken()}return t.auth&&(s.getAuthToken=()=>t.auth.getToken()),s}(t),this.model=Nn.normalizeModelName(e,this._apiSettings.backend.backendType)}static normalizeModelName(t,e){return e===An?Nn.normalizeGoogleAIModelName(t):Nn.normalizeVertexAIModelName(t)}static normalizeGoogleAIModelName(t){return`models/${t}`}static normalizeVertexAIModelName(t){let e;return e=t.includes("/")?t.startsWith("models/")?`publishers/google/${t}`:t:`publishers/google/models/${t}`,e}}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Mn="AbortError";class $n{constructor(t){this.params=t}toString(){const t=new URL(this.baseUrl);return t.pathname=this.pathname,t.search=this.queryParams.toString(),t.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var t,e;return null!==(t=null===(e=this.params.singleRequestOptions)||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:"https://firebasevertexai.googleapis.com"}get queryParams(){const t=new URLSearchParams;return this.params.stream&&t.set("alt","sse"),t}}async function Fn(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",function(t){const e=[];return e.push(`gl-js/${We}`),e.push(`fire/${We}`),t.params.apiSettings.inferenceMode!==Ze&&t.params.apiSettings.inferenceMode!==en||e.push("hybrid"),e.join(" ")}(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&On.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function Un(t,e){var n,i;const s=new $n(t);let r;const o=null===(n=t.singleRequestOptions)||void 0===n?void 0:n.signal,a=null!=(null===(i=t.singleRequestOptions)||void 0===i?void 0:i.timeout)&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:18e4,c=new AbortController,h=setTimeout(()=>{c.abort(new DOMException("Timeout has expired.",Mn)),On.debug(`Aborting request to ${s} due to timeout (${a}ms)`)},a),l=AbortSignal.any(o?[o,c.signal]:[c.signal]);var u;if(o&&o.aborted)throw clearTimeout(h),new DOMException(null!==(u=o.reason)&&void 0!==u?u:"Aborted externally before fetch",Mn);try{const t={method:"POST",headers:await Fn(s),signal:l,body:e};if(r=await fetch(s.toString(),t),!r.ok){let t,e="";try{const n=await r.json();e=n.error.message,n.error.details&&(e+=` ${JSON.stringify(n.error.details)}`,t=n.error.details)}catch(d){}if(403===r.status&&t&&t.some(t=>"SERVICE_DISABLED"===t.reason)&&t.some(t=>{var e;return null===(e=t.links)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.description.includes("Google developers console API activation")}))throw new Je(ln,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${s.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:r.status,statusText:r.statusText,errorDetails:t});throw new Je(cn,`Error fetching from ${s}: [${r.status} ${r.statusText}] ${e}`,{status:r.status,statusText:r.statusText,errorDetails:t})}}catch(d){let t=d;throw d.code!==cn&&d.code!==ln&&d instanceof Error&&d.name!==Mn&&(t=new Je(rn,`Error fetching from ${s.toString()}: ${d.message}`),t.stack=d.stack),t}finally{clearTimeout(h)}return r}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Bn(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&On.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),zn(t.candidates[0]))throw new Je(an,`Response error: ${Wn(t)}. Response body stored in error.response`,{response:t});return!0}return!1}function Hn(t,e=sn){t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0);const n=function(t){return t.text=()=>{if(Bn(t))return Vn(t,t=>!t.thought);if(t.promptFeedback)throw new Je(an,`Text not available. ${Wn(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(Bn(t)){const e=Vn(t,t=>!!t.thought);return""===e?void 0:e}if(t.promptFeedback)throw new Je(an,`Thought summary not available. ${Wn(t)}`,{response:t})},t.inlineDataParts=()=>{if(Bn(t))return function(t){var e;const n=[];if(null!==(e=t.candidates)&&void 0!==e&&null!==(e=e[0].content)&&void 0!==e&&e.parts)for(const s of null===(i=t.candidates)||void 0===i||null===(i=i[0].content)||void 0===i?void 0:i.parts){var i;s.inlineData&&n.push(s)}return n.length>0?n:void 0}(t);if(t.promptFeedback)throw new Je(an,`Data not available. ${Wn(t)}`,{response:t})},t.functionCalls=()=>{if(Bn(t))return function(t){var e;const n=[];if(null!==(e=t.candidates)&&void 0!==e&&null!==(e=e[0].content)&&void 0!==e&&e.parts)for(const s of null===(i=t.candidates)||void 0===i||null===(i=i[0].content)||void 0===i?void 0:i.parts){var i;s.functionCall&&n.push(s.functionCall)}return n.length>0?n:void 0}(t);if(t.promptFeedback)throw new Je(an,`Function call not available. ${Wn(t)}`,{response:t})},t}(t);return n.inferenceSource=e,n}function Vn(t,e){var n;const i=[];if(null!==(n=t.candidates)&&void 0!==n&&null!==(n=n[0].content)&&void 0!==n&&n.parts)for(const r of null===(s=t.candidates)||void 0===s||null===(s=s[0].content)||void 0===s?void 0:s.parts){var s;r.text&&e(r)&&i.push(r.text)}return i.length>0?i.join(""):""}const qn=[Ye,Xe];function zn(t){return!!t.finishReason&&qn.some(e=>e===t.finishReason)}function Wn(t){var e;let n="";var i,s;if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null!==(e=t.candidates)&&void 0!==e&&e[0]){const e=t.candidates[0];zn(e)&&(n+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(n+=`: ${e.finishMessage}`))}}else n+="Response was blocked",null!==(i=t.promptFeedback)&&void 0!==i&&i.blockReason&&(n+=` due to ${t.promptFeedback.blockReason}`),null!==(s=t.promptFeedback)&&void 0!==s&&s.blockReasonMessage&&(n+=`: ${t.promptFeedback.blockReasonMessage}`);return n}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Jn(t){var e,n;if(null===(e=t.safetySettings)||void 0===e||e.forEach(t=>{if(t.method)throw new Je(yn,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),null!==(n=t.generationConfig)&&void 0!==n&&n.topK){const e=Math.round(t.generationConfig.topK);e!==t.generationConfig.topK&&(On.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=e)}return t}function Gn(t){return{candidates:t.candidates?Kn(t.candidates):void 0,prompt:t.promptFeedback?Xn(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Kn(t){const e=[];let n;return e&&t.forEach(t=>{var i;let s;if(t.citationMetadata&&(s={citations:t.citationMetadata.citationSources}),t.safetyRatings&&(n=t.safetyRatings.map(t=>{var e,n,i;return{...t,severity:null!==(e=t.severity)&&void 0!==e?e:Ke,probabilityScore:null!==(n=t.probabilityScore)&&void 0!==n?n:0,severityScore:null!==(i=t.severityScore)&&void 0!==i?i:0}})),null!==(i=t.content)&&void 0!==i&&null!==(i=i.parts)&&void 0!==i&&i.some(t=>null==t?void 0:t.videoMetadata))throw new Je(yn,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const r={index:t.index,content:t.content,finishReason:t.finishReason,finishMessage:t.finishMessage,safetyRatings:n,citationMetadata:s,groundingMetadata:t.groundingMetadata,urlContextMetadata:t.urlContextMetadata};e.push(r)}),e}function Xn(t){const e=[];return t.safetyRatings.forEach(t=>{var n,i,s;e.push({category:t.category,probability:t.probability,severity:null!==(n=t.severity)&&void 0!==n?n:Ke,probabilityScore:null!==(i=t.probabilityScore)&&void 0!==i?i:0,severityScore:null!==(s=t.severityScore)&&void 0!==s?s:0,blocked:t.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Yn=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Zn(t,e,n){const i=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return i();function i(){return e.read().then(({value:e,done:s})=>{if(s)return n.trim()?void t.error(new Je(mn,"Failed to parse stream")):void t.close();n+=e;let r,o=n.match(Yn);for(;o;){try{r=JSON.parse(o[1])}catch(a){return void t.error(new Je(mn,`Error parsing JSON response: "${o[1]}`))}t.enqueue(r),n=n.substring(o[0].length),o=n.match(Yn)}return i()})}}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[s,r]=i.tee();return{stream:ti(s,e,n),response:Qn(r,e,n)}}async function Qn(t,e,n){const i=[],s=t.getReader();for(;;){const{done:t,value:r}=await s.read();if(t){let t=ei(i);return e.backend.backendType===An&&(t=Gn(t)),Hn(t,n)}i.push(r)}}async function*ti(t,e,n){const i=t.getReader();for(;;){var s,r;const{value:t,done:o}=await i.read();if(o)break;let a;a=e.backend.backendType===An?Hn(Gn(t),n):Hn(t,n);const c=null===(s=a.candidates)||void 0===s?void 0:s[0];(null!=c&&null!==(r=c.content)&&void 0!==r&&r.parts||null!=c&&c.finishReason||null!=c&&c.citationMetadata||null!=c&&c.urlContextMetadata)&&(yield a)}}function ei(t){const e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(const i of t)if(i.candidates)for(const t of i.candidates){const e=t.index||0;n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,n.candidates[e].groundingMetadata=t.groundingMetadata;const i=t.urlContextMetadata;if("object"==typeof i&&null!==i&&Object.keys(i).length>0&&(n.candidates[e].urlContextMetadata=i),t.content){if(!t.content.parts)continue;n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});for(const i of t.content.parts){const t={...i};""!==i.text&&Object.keys(t).length>0&&n.candidates[e].content.parts.push(t)}}}return n}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ni=[cn,rn,ln];async function ii(t,e,n,i){if(!e)return{response:await i(),inferenceSource:sn};switch(e.mode){case Qe:if(await e.isAvailable(t))return{response:await n(),inferenceSource:nn};throw new Je(yn,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case tn:return{response:await i(),inferenceSource:sn};case en:try{return{response:await i(),inferenceSource:sn}}catch(s){if(s instanceof Je&&ni.includes(s.code))return{response:await n(),inferenceSource:nn};throw s}case Ze:return await e.isAvailable(t)?{response:await n(),inferenceSource:nn}:{response:await i(),inferenceSource:sn};default:throw new Je(rn,`Unexpected infererence mode: ${e.mode}`)}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function si(t,e,n,i,s){const r=await ii(n,i,()=>i.generateContentStream(n),()=>async function(t,e,n,i){return t.backend.backendType===An&&(n=Jn(n)),Un({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:i},JSON.stringify(n))}(t,e,n,s));return Zn(r.response,t,r.inferenceSource)}async function ri(t,e,n,i,s){const r=await ii(n,i,()=>i.generateContent(n),()=>async function(t,e,n,i){return t.backend.backendType===An&&(n=Jn(n)),Un({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:i},JSON.stringify(n))}(t,e,n,s)),o=await async function(t,e){const n=await t.json();return e.backend.backendType===An?Gn(n):n}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(r.response,t);return{response:Hn(o,r.inferenceSource)}}function oi(t){if(null!=t)return"string"==typeof t?{role:"system",parts:[{text:t}]}:t.text?{role:"system",parts:[t]}:t.parts?t.role?t:{role:"system",parts:t.parts}:void 0}function ai(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(const n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let i=!1,s=!1;for(const r of t)"functionResponse"in r?(n.parts.push(r),s=!0):(e.parts.push(r),i=!0);if(i&&s)throw new Je(hn,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!i&&!s)throw new Je(hn,"No Content is provided for sending chat message.");return i?e:n}(e)}function ci(t){let e;return e=t.contents?t:{contents:[ai(t)]},t.systemInstruction&&(e.systemInstruction=oi(t.systemInstruction)),e}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const hi=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],li={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},ui={user:["model"],function:["model"],model:["user","function"],system:[]},di="SILENT_ERROR";class pi{constructor(t,e,n,i,s){this.model=e,this.chromeAdapter=n,this.params=i,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=t,null!=i&&i.history&&(function(t){let e=null;for(const n of t){const{role:t,parts:i}=n;if(!e&&"user"!==t)throw new Je(hn,`First Content should be with role 'user', got ${t}`);if(!Ge.includes(t))throw new Je(hn,`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(Ge)}`);if(!Array.isArray(i))throw new Je(hn,"Content should have 'parts' property with an array of Parts");if(0===i.length)throw new Je(hn,"Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const e of i)for(const t of hi)t in e&&(s[t]+=1);const r=li[t];for(const e of hi)if(!r.includes(e)&&s[e]>0)throw new Je(hn,`Content with role '${t}' can't contain '${e}' part`);if(e&&!ui[t].includes(e.role))throw new Je(hn,`Content with role '${t}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(ui)}`);e=n}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e){var n,i,s,r,o;await this._sendPromise;const a=ai(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(i=this.params)||void 0===i?void 0:i.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(r=this.params)||void 0===r?void 0:r.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,contents:[...this._history,a]};let h={};return this._sendPromise=this._sendPromise.then(()=>ri(this._apiSettings,this.model,c,this.chromeAdapter,{...this.requestOptions,...e})).then(t=>{if(t.response.candidates&&t.response.candidates.length>0){var e,n;this._history.push(a);const i={parts:(null===(e=t.response.candidates)||void 0===e?void 0:e[0].content.parts)||[],role:(null===(n=t.response.candidates)||void 0===n?void 0:n[0].content.role)||"model"};this._history.push(i)}else{const e=Wn(t.response);e&&On.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}h=t}),await this._sendPromise,h}async sendMessageStream(t,e){var n,i,s,r,o;await this._sendPromise;const a=ai(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(i=this.params)||void 0===i?void 0:i.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(r=this.params)||void 0===r?void 0:r.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,contents:[...this._history,a]},h=si(this._apiSettings,this.model,c,this.chromeAdapter,{...this.requestOptions,...e});return this._sendPromise=this._sendPromise.then(()=>h).catch(t=>{throw new Error(di)}).then(t=>t.response).then(t=>{if(t.candidates&&t.candidates.length>0){this._history.push(a);const e={...t.candidates[0].content};e.role||(e.role="model"),this._history.push(e)}else{const e=Wn(t);e&&On.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==di&&"AbortError"!==t.name&&On.error(t)}),h}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function fi(t,e,n,i,s){if((null==i?void 0:i.mode)===Qe)throw new Je(yn,"countTokens() is not supported for on-device models.");return async function(t,e,n,i){let s="";if(t.backend.backendType===An){const t=function(t,e){return{generateContentRequest:{model:e,...t}}}(n,e);s=JSON.stringify(t)}else s=JSON.stringify(n);return(await Un({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:i},s)).json()}(t,e,n,s)}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class gi extends Nn{constructor(t,e,n,i){super(t,e.model),this.chromeAdapter=i,this.generationConfig=e.generationConfig||{},function(t){var e,n;if(null!=(null===(e=t.thinkingConfig)||void 0===e?void 0:e.thinkingBudget)&&null!==(n=t.thinkingConfig)&&void 0!==n&&n.thinkingLevel)throw new Je(yn,"Cannot set both thinkingBudget and thinkingLevel in a config.")}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.generationConfig),this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=oi(e.systemInstruction),this.requestOptions=n||{}}async generateContent(t,e){const n=ci(t);return ri(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...e})}async generateContentStream(t,e){const n=ci(t);return si(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...e})}startChat(t){return new pi(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...t},this.requestOptions)}async countTokens(t,e){const n=ci(t);return fi(this._apiSettings,this.model,n,this.chromeAdapter,{...this.requestOptions,...e})}}class mi{constructor(t){if(!t.type&&!t.anyOf)throw new Je(un,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const e in t)this[e]=t[e];this.type=t.type,this.format=t.hasOwnProperty("format")?t.format:void 0,this.nullable=!!t.hasOwnProperty("nullable")&&!!t.nullable}toJSON(){const t={type:this.type};for(const e in this)this.hasOwnProperty(e)&&void 0!==this[e]&&("required"===e&&this.type!==En||(t[e]=this[e]));return t}static array(t){return new _i(t,t.items)}static object(t){return new Si(t,t.properties,t.optionalProperties)}static string(t){return new wi(t)}static enumString(t){return new wi(t,t.enum)}static integer(t){return new yi(t)}static number(t){return new vi(t)}static boolean(t){return new bi(t)}static anyOf(t){return new Ei(t)}}class yi extends mi{constructor(t){super({type:wn,...t})}}class vi extends mi{constructor(t){super({type:bn,...t})}}class bi extends mi{constructor(t){super({type:_n,...t})}}class wi extends mi{constructor(t,e){super({type:vn,...t}),this.enum=e}toJSON(){const t=super.toJSON();return this.enum&&(t.enum=this.enum),t}}class _i extends mi{constructor(t,e){super({type:Sn,...t}),this.items=e}toJSON(){const t=super.toJSON();return t.items=this.items.toJSON(),t}}class Si extends mi{constructor(t,e,n=[]){super({type:En,...t}),this.properties=e,this.optionalProperties=n}toJSON(){const t=super.toJSON();t.properties={...this.properties};const e=[];if(this.optionalProperties)for(const n of this.optionalProperties)if(!this.properties.hasOwnProperty(n))throw new Je(un,`Property "${n}" specified in "optionalProperties" does not exist.`);for(const n in this.properties)this.properties.hasOwnProperty(n)&&(t.properties[n]=this.properties[n].toJSON(),this.optionalProperties.includes(n)||e.push(n));return e.length>0&&(t.required=e),delete t.optionalProperties,t}}class Ei extends mi{constructor(t){if(0===t.anyOf.length)throw new Je(un,"The 'anyOf' array must not be empty.");super({...t,type:void 0}),this.anyOf=t.anyOf}toJSON(){const t=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(t.anyOf=this.anyOf.map(t=>t.toJSON())),t}}
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Ee(new ft(Ve,jn,"PUBLIC").setMultipleInstances(!0)),Pe(Be,He),Pe(Be,He,"esm2020"),
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
Pe("firebase","12.9.0","app");var Ci,Ai="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
            Copyright The Closure Library Authors.
            SPDX-License-Identifier: Apache-2.0
            */(function(){var t;
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const i=Array(16);if("string"==typeof e)for(var s=0;s<16;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;s<16;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];let r,o=t.g[3];r=e+(o^n&(s^o))+i[0]+3614090360&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[1]+3905402710&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[2]+606105819&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[3]+3250441966&4294967295,r=e+(o^(n=s+(r<<22&4294967295|r>>>10))&(s^o))+i[4]+4118548399&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[5]+1200080426&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[6]+2821735955&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[7]+4249261313&4294967295,r=e+(o^(n=s+(r<<22&4294967295|r>>>10))&(s^o))+i[8]+1770035416&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[9]+2336552879&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[10]+4294925233&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[11]+2304563134&4294967295,r=e+(o^(n=s+(r<<22&4294967295|r>>>10))&(s^o))+i[12]+1804603682&4294967295,r=o+(s^(e=n+(r<<7&4294967295|r>>>25))&(n^s))+i[13]+4254626195&4294967295,o=e+(r<<12&4294967295|r>>>20),r=s+(n^o&(e^n))+i[14]+2792965006&4294967295,r=n+(e^(s=o+(r<<17&4294967295|r>>>15))&(o^e))+i[15]+1236535329&4294967295,r=e+(s^o&((n=s+(r<<22&4294967295|r>>>10))^s))+i[1]+4129170786&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[6]+3225465664&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[11]+643717713&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[0]+3921069994&4294967295,r=e+(s^o&((n=s+(r<<20&4294967295|r>>>12))^s))+i[5]+3593408605&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[10]+38016083&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[15]+3634488961&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[4]+3889429448&4294967295,r=e+(s^o&((n=s+(r<<20&4294967295|r>>>12))^s))+i[9]+568446438&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[14]+3275163606&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[3]+4107603335&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[8]+1163531501&4294967295,r=e+(s^o&((n=s+(r<<20&4294967295|r>>>12))^s))+i[13]+2850285829&4294967295,r=o+(n^s&((e=n+(r<<5&4294967295|r>>>27))^n))+i[2]+4243563512&4294967295,o=e+(r<<9&4294967295|r>>>23),r=s+(e^n&(o^e))+i[7]+1735328473&4294967295,r=n+(o^e&((s=o+(r<<14&4294967295|r>>>18))^o))+i[12]+2368359562&4294967295,r=e+((n=s+(r<<20&4294967295|r>>>12))^s^o)+i[5]+4294588738&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[8]+2272392833&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[11]+1839030562&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[14]+4259657740&4294967295,r=e+((n=s+(r<<23&4294967295|r>>>9))^s^o)+i[1]+2763975236&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[4]+1272893353&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[7]+4139469664&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[10]+3200236656&4294967295,r=e+((n=s+(r<<23&4294967295|r>>>9))^s^o)+i[13]+681279174&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[0]+3936430074&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[3]+3572445317&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[6]+76029189&4294967295,r=e+((n=s+(r<<23&4294967295|r>>>9))^s^o)+i[9]+3654602809&4294967295,r=o+((e=n+(r<<4&4294967295|r>>>28))^n^s)+i[12]+3873151461&4294967295,o=e+(r<<11&4294967295|r>>>21),r=s+(o^e^n)+i[15]+530742520&4294967295,r=n+((s=o+(r<<16&4294967295|r>>>16))^o^e)+i[2]+3299628645&4294967295,r=e+(s^((n=s+(r<<23&4294967295|r>>>9))|~o))+i[0]+4096336452&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[7]+1126891415&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[14]+2878612391&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[5]+4237533241&4294967295,r=e+(s^((n=s+(r<<21&4294967295|r>>>11))|~o))+i[12]+1700485571&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[3]+2399980690&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[10]+4293915773&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[1]+2240044497&4294967295,r=e+(s^((n=s+(r<<21&4294967295|r>>>11))|~o))+i[8]+1873313359&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[15]+4264355552&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[6]+2734768916&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[13]+1309151649&4294967295,r=e+(s^((n=s+(r<<21&4294967295|r>>>11))|~o))+i[4]+4149444226&4294967295,r=o+(n^((e=n+(r<<6&4294967295|r>>>26))|~s))+i[11]+3174756917&4294967295,o=e+(r<<10&4294967295|r>>>22),r=s+(e^(o|~n))+i[2]+718787259&4294967295,r=n+(o^((s=o+(r<<15&4294967295|r>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(r<<21&4294967295|r>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}function i(t,e){this.h=e;const n=[];let i=!0;for(let s=t.length-1;s>=0;s--){const r=0|t[s];i&&r==e||(n[s]=r,i=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const i=e-this.blockSize,s=this.C;let r=this.h,o=0;for(;o<e;){if(0==r)for(;o<=i;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(s[r++]=t.charCodeAt(o++),r==this.blockSize){n(this,s),r=0;break}}else for(;o<e;)if(s[r++]=t[o++],r==this.blockSize){n(this,s),r=0;break}}this.h=r,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let i=0;i<32;i+=8)t[e++]=this.g[n]>>>i&255;return t};var s={};function r(t){return-128<=t&&t<128?function(t,e){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new i([0|t],t<0?-1:0)}):new i([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new i(e,0)}var a=r(0),c=r(1),h=r(16777216);function l(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function u(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let i=0;i<e;i++)n[i]=~t.g[i];return new i(n,~t.h).add(c)}function p(t,e){return t.add(d(e))}function f(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(l(e))throw Error("division by zero");if(l(t))return new g(a,a);if(u(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(u(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(u(t)||u(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,i=e;i.l(t)<=0;)n=y(n),i=y(i);var s=v(n,1),r=v(i,1);for(i=v(i,2),n=v(n,2);!l(i);){var h=r.add(i);h.l(t)<=0&&(s=s.add(n),r=h),i=v(i,1),n=v(n,1)}return e=p(t,s.j(e)),new g(s,e)}for(s=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=(i=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,i-48),h=(r=o(n)).j(e);u(h)||h.l(t)>0;)h=(r=o(n-=i)).j(e);l(r)&&(r=c),s=s.add(r),t=p(t,h)}return new g(s,t)}function y(t){const e=t.g.length+1,n=[];for(let i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new i(n,t.h)}function v(t,e){const n=e>>5;e%=32;const s=t.g.length-n,r=[];for(let i=0;i<s;i++)r[i]=e>0?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new i(r,t.h)}(t=i.prototype).m=function(){if(u(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const i=this.i(n);t+=(i>=0?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(l(this))return"0";if(u(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let i="";for(;;){const s=m(n,e).g;let r=(((n=p(n,s.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(l(n=s))return r+i;for(;r.length<6;)r="0"+r;i=r+i}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return u(t=p(this,t))?-1:l(t)?0:1},t.abs=function(){return u(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let s=0;for(let i=0;i<=e;i++){let e=s+(65535&this.i(i))+(65535&t.i(i)),r=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);s=r>>>16,e&=65535,r&=65535,n[i]=r<<16|e}return new i(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(l(this)||l(t))return a;if(u(this))return u(t)?d(this).j(d(t)):d(d(this).j(t));if(u(t))return d(this.j(d(t)));if(this.l(h)<0&&t.l(h)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let e=0;e<t.g.length;e++){const i=this.i(s)>>>16,r=65535&this.i(s),o=t.i(e)>>>16,a=65535&t.i(e);n[2*s+2*e]+=r*a,f(n,2*s+2*e),n[2*s+2*e+1]+=i*a,f(n,2*s+2*e+1),n[2*s+2*e+1]+=r*o,f(n,2*s+2*e+1),n[2*s+2*e+2]+=i*o,f(n,2*s+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new i(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new i(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new i(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new i(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.B,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const i=o(Math.pow(n,8));let s=a;for(let a=0;a<e.length;a+=8){var r=Math.min(8,e.length-a);const t=parseInt(e.substring(a,a+r),n);r<8?(r=o(Math.pow(n,r)),s=s.j(r).add(o(t))):(s=s.j(i),s=s.add(o(t)))}return s},Ci=i}).apply(void 0!==Ai?Ai:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Ti="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var t,e=Object.defineProperty,n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Ti&&Ti];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function i(t,i){if(i)t:{var s=n;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];if(!(o in s))break t;s=s[o]}(i=i(r=s[t=t[t.length-1]]))!=r&&null!=i&&e(s,t,{configurable:!0,writable:!0,value:i})}}i("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */
var s=s||{},r=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function h(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function l(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}var u="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function p(t,e){for(let i=1;i<arguments.length;i++){const e=arguments[i];var n=typeof e;if("array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length){n=t.length||0;const i=e.length||0;t.length=n+i;for(let s=0;s<i;s++)t[n+s]=e[s]}else t.push(e)}}function f(t){r.setTimeout(()=>{throw t},0)}function g(){var t=w;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let v,b=!1,w=new class{constructor(){this.h=this.g=null}add(t,e){const n=m.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},_=()=>{const t=Promise.resolve(void 0);v=()=>{t.then(S)}};function S(){for(var t;t=g();){try{t.h.call(t.g)}catch(n){f(n)}var e=m;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}b=!1}function E(){this.u=this.u,this.C=this.C}function C(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},C.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};r.addEventListener("test",t,e),r.removeEventListener("test",t,e)}catch(n){}return t}();function T(t){return/^[\s\xa0]*$/.test(t)}function I(t,e){C.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}l(I,C),I.prototype.init=function(t,e){const n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&I.Z.h.call(this)},I.prototype.h=function(){I.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),O=0;function P(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++O,this.da=this.fa=!1}function D(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function x(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<R.length;e++)n=R[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function N(t){this.src=t,this.g={},this.h=0}function M(t,e){const n=e.type;if(n in t.g){var i,s=t.g[n],r=Array.prototype.indexOf.call(s,e,void 0);(i=r>=0)&&Array.prototype.splice.call(s,r,1),i&&(D(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $(t,e,n,i){for(let s=0;s<t.length;++s){const r=t[s];if(!r.da&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}N.prototype.add=function(t,e,n,i,s){const r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);const o=$(t,e,i,s);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new P(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var F="closure_lm_"+(1e6*Math.random()|0),U={};function B(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)B(t,e[r],n,i,s);return null}return n=G(n),t&&t[k]?t.J(e,n,!!o(i)&&!!i.capture,s):function(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");const a=o(s)?!!s.capture:!!s;let c=W(t);if(c||(t[F]=c=new N(t)),(n=c.add(e,n,i,a,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=z;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)A||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(q(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}(t,e,n,!1,i,s)}function H(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)H(t,e[r],n,i,s);else i=o(i)?!!i.capture:!!i,n=G(n),t&&t[k]?(t=t.i,(r=String(e).toString())in t.g&&(n=$(e=t.g[r],n,i,s))>-1&&(D(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[r],t.h--))):t&&(t=W(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$(e,n,i,s)),(n=t>-1?e[t]:null)&&V(n))}function V(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[k])M(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(q(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=W(e))?(M(n,t),0==n.h&&(n.src=null,e[F]=null)):D(t)}}}function q(t){return t in U?U[t]:U[t]="on"+t}function z(t,e){if(t.da)t=!0;else{e=new I(e,this);const n=t.listener,i=t.ha||t.src;t.fa&&V(t),t=n.call(i,e)}return t}function W(t){return(t=t[F])instanceof N?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function G(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function K(){E.call(this),this.i=new N(this),this.M=this,this.G=null}function X(t,e){var n,i=t.G;if(i)for(n=[];i;i=i.G)n.push(i);if(t=t.M,i=e.type||e,"string"==typeof e)e=new C(e,t);else if(e instanceof C)e.target=e.target||t;else{var s=e;j(e=new C(i,t),s)}let r,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)r=e.g=n[o],s=Y(r,i,!0,e)&&s;if(r=e.g=t,s=Y(r,i,!0,e)&&s,s=Y(r,i,!1,e)&&s,n)for(o=0;o<n.length;o++)r=e.g=n[o],s=Y(r,i,!1,e)&&s}function Y(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let s=!0;for(let r=0;r<e.length;++r){const o=e[r];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&M(t.i,o),s=!1!==e.call(n,i)&&s}}return s&&!i.defaultPrevented}function Z(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:r.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,Z(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}l(K,E),K.prototype[k]=!0,K.prototype.removeEventListener=function(t,e,n,i){H(this,t,e,n,i)},K.prototype.N=function(){if(K.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)D(n[t]);delete t.g[e],t.h--}}this.G=null},K.prototype.J=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},K.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class Q extends E{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Z(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){E.call(this),this.h=t,this.g={}}l(tt,E);var et=[];function nt(t){x(t.g,function(t,e){this.g.hasOwnProperty(e)&&V(t)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),nt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=r.JSON.stringify,st=r.JSON.parse,rt=class{stringify(t){return r.JSON.stringify(t,void 0)}parse(t){return r.JSON.parse(t,void 0)}};function ot(){}var at={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ct(){C.call(this,"d")}function ht(){C.call(this,"c")}l(ct,C),l(ht,C);var lt={},ut=null;function dt(){return ut=ut||new K}function pt(t){C.call(this,lt.Ia,t)}function ft(t){const e=dt();X(e,new pt(e))}function gt(t,e){C.call(this,lt.STAT_EVENT,t),this.stat=e}function mt(t){const e=dt();X(e,new gt(e,t))}function yt(t,e){C.call(this,lt.Ja,t),this.size=e}function vt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){t()},e)}function bt(){this.g=!0}function wt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const r=JSON.parse(e);if(r)for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var n=r[t];if(!(n.length<2)){var i=n[1];if(Array.isArray(i)&&!(i.length<1)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let t=1;t<i.length;t++)i[t]=""}}}return it(r)}catch(r){return e}}(t,n)+(i?" "+i:"")})}lt.Ia="serverreachability",l(pt,C),lt.STAT_EVENT="statevent",l(gt,C),lt.Ja="timingevent",l(yt,C),bt.prototype.ua=function(){this.g=!1},bt.prototype.info=function(){};var _t,St={NO_ERROR:0,TIMEOUT:8};function Et(){}function Ct(t){return encodeURIComponent(String(t))}function At(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Tt(t,e,n,i){this.j=t,this.i=e,this.l=n,this.S=i||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}l(Et,ot),Et.prototype.g=function(){return new XMLHttpRequest},_t=new Et;var kt={},Ot={};function Pt(t,e,n){t.M=1,t.A=ee(Xt(e)),t.u=n,t.R=!0,Dt(t,null)}function Dt(t,e){t.F=Date.now(),Rt(t),t.B=Xt(t.A);var n=t.B,i=t.S;Array.isArray(i)||(i=[String(i)]),ge(n.i,"t",i),t.C=0,n=t.j.L,t.h=new It,t.g=en(t.j,n?e:null,!t.u),t.P>0&&(t.O=new Q(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,i=t.ba;var s="readystatechange";Array.isArray(s)||(s&&(et[0]=s.toString()),s=et);for(let r=0;r<s.length;r++){const t=B(n,s[r],i||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?L(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),ft(),function(t,e,n,i,s,r){t.info(function(){if(t.g)if(r){var o="",a=r.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function xt(t){return!!t.g&&"GET"==t.v&&2!=t.M&&t.j.Aa}function Lt(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ot:(n=Number(e.substring(n,i)),isNaN(n)?kt:(i+=1)+n>e.length?Ot:(e=e.slice(i,i+n),t.C=i+n,e))}function Rt(t){t.T=Date.now()+t.H,jt(t,t.H)}function jt(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=vt(c(t.aa,t),e)}function Nt(t){t.D&&(r.clearTimeout(t.D),t.D=null)}function Mt(t){0==t.j.I||t.K||Xe(t.j,t)}function $t(t){Nt(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,nt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function Ft(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||qt(n.h,t)))if(!t.L&&qt(n.h,t)&&3==n.I){try{var i=n.Ba.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ke(n),Fe(n)}We(n),mt(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=vt(c(n.Va,n),6e3));Vt(n.h)<=1&&n.ta&&(n.ta=void 0)}else Ze(n,11)}else if((t.L||n.g==t)&&Ke(n),!T(e))for(s=n.Ba.g.parse(e),e=0;e<s.length;e++){let c=s[e];const l=c[0];if(!(l<=n.K))if(n.K=l,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&l>0&&(i=1.5*l,n.O=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(zt(r,r.h),r.h=null))}if(i.G){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.wa=t,te(i.J,i.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((i=n).na=tn(i,i.L?i.ba:null,i.W),o.L){Wt(i.h,o);var a=o,h=i.O;h&&(a.H=h),a.D&&(Nt(a),Rt(a)),i.g=o}else ze(i);n.i.length>0&&Be(n)}else"stop"!=c[0]&&"close"!=c[0]||Ze(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ze(n,7):$e(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}ft()}catch(l){}}Tt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==Re(t)?e.j():this.Y(t)},Tt.prototype.Y=function(t){try{if(t==this.g)t:{const c=Re(this.g),h=this.g.ya();if(this.g.ca(),!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||je(this.g)))){this.K||4!=c||7==h||ft(),Nt(this);var e=this.g.ca();this.X=e;var n=function(t){if(!xt(t))return t.g.la();const e=je(t.g);if(""===e)return"";let n="";const i=e.length,s=4==Re(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return $t(t),Mt(t),"";t.h.i=new r.TextDecoder}for(let r=0;r<i;r++)t.h.h=!0,n+=t.h.i.decode(e[r],{stream:!(s&&r==i-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var i,s=this.g;if((i=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(i)){var o=i;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,mt(12),$t(this),Mt(this);break t}wt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ft(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=Lt(this,n),e==Ot){4==c&&(this.m=4,mt(14),t=!1),wt(this.i,this.l,null,"[Incomplete Response]");break}if(e==kt){this.m=4,mt(15),wt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}wt(this.i,this.l,e,null),Ft(this,e)}if(xt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,mt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Je(a),a.P=!0,mt(11))}}else wt(this.i,this.l,n,"[Invalid Chunked Response]"),$t(this),Mt(this)}else wt(this.i,this.l,n,null),Ft(this,n);4==c&&$t(this),this.o&&!this.K&&(4==c?Xe(this.j,this):(this.o=!1,Rt(this)))}else(function(t){const e={};t=(t.g&&Re(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(T(t[i]))continue;var n=At(t[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),$t(this),Mt(this)}}}catch(c){}},Tt.prototype.cancel=function(){this.K=!0,$t(this)},Tt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(ft(),mt(17)),$t(this),this.m=2,Mt(this)):jt(this,this.T-t)};var Ut=class{constructor(t,e){this.g=t,this.map=e}};function Bt(t){this.l=t||10,t=r.PerformanceNavigationTiming?(t=r.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ht(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Vt(t){return t.h?1:t.g?t.g.size:0}function qt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function zt(t,e){t.g?t.g.add(e):t.h=e}function Wt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Jt(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}Bt.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Gt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kt(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Kt?(this.l=t.l,Yt(this,t.j),this.o=t.o,this.g=t.g,Zt(this,t.u),this.h=t.h,Qt(this,me(t.i)),this.m=t.m):t&&(e=String(t).match(Gt))?(this.l=!1,Yt(this,e[1]||"",!0),this.o=ne(e[2]||""),this.g=ne(e[3]||"",!0),Zt(this,e[4]),this.h=ne(e[5]||"",!0),Qt(this,e[6]||"",!0),this.m=ne(e[7]||"")):(this.l=!1,this.i=new le(null,this.l))}function Xt(t){return new Kt(t)}function Yt(t,e,n){t.j=n?ne(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zt(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Qt(t,e,n){e instanceof le?(t.i=e,function(t,e){e&&!t.j&&(ue(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(de(this,e),ge(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=ie(e,ce)),t.i=new le(e,t.l))}function te(t,e,n){t.i.set(e,n)}function ee(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ne(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ie(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,se),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function se(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Kt.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(ie(e,re,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(ie(e,re,!0),"@"),t.push(Ct(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ie(n,"/"==n.charAt(0)?ae:oe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",ie(n,he)),t.join("")},Kt.prototype.resolve=function(t){const e=Xt(this);let n=!!t.j;n?Yt(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var i=t.h;if(n)Zt(e,t.u);else if(n=!!t.h){if("/"!=i.charAt(0))if(this.g&&!this.h)i="/"+i;else{var s=e.h.lastIndexOf("/");-1!=s&&(i=e.h.slice(0,s+1)+i)}if(".."==(s=i)||"."==s)i="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");const t=[];for(let e=0;e<s.length;){const n=s[e++];"."==n?i&&e==s.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),i&&e==s.length&&t.push("")):(t.push(n),i=!0)}i=t.join("/")}else i=s}return n?e.h=i:n=""!==t.i.toString(),n?Qt(e,me(t.i)):n=!!t.m,n&&(e.m=t.m),e};var re=/[#\/\?@]/g,oe=/[#\?:]/g,ae=/[#\?]/g,ce=/[#\?@]/g,he=/#/g;function le(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ue(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const i=t[n].indexOf("=");let s,r=null;i>=0?(s=t[n].substring(0,i),r=t[n].substring(i+1)):s=t[n],e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function de(t,e){ue(t),e=ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pe(t,e){return ue(t),e=ye(t,e),t.g.has(e)}function fe(t,e){ue(t);let n=[];if("string"==typeof e)pe(t,e)&&(n=n.concat(t.g.get(ye(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function ge(t,e,n){de(t,e),n.length>0&&(t.i=null,t.g.set(ye(t,e),d(n)),t.h+=n.length)}function me(t){const e=new le;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ve(t,e,n,i,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),i(n)}catch(r){}}function be(){this.g=new rt}function we(t){this.i=t.Sb||null,this.h=t.ab||!1}function _e(t,e){K.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Se(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Ee(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Ce(t)}function Ce(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ae(t){let e="";return x(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Te(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ae(n),"string"==typeof t?null!=n&&Ct(n):te(t,e,n))}function Ie(t){K.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=le.prototype).add=function(t,e){ue(this),this.i=null,t=ye(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){ue(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},t.set=function(t,e){return ue(this),this.i=null,pe(this,t=ye(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=fe(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let i=0;i<e.length;i++){var n=e[i];const s=Ct(n);n=fe(this,n);for(let e=0;e<n.length;e++){let i=s;""!==n[e]&&(i+="="+Ct(n[e])),t.push(i)}}return this.i=t.join("&")},l(we,ot),we.prototype.g=function(){return new _e(this.i,this.h)},l(_e,K),(t=_e.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Ce(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||r).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Ee(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ce(this)),this.g&&(this.readyState=3,Ce(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==r.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Se(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ee(this):Ce(this),3==this.readyState&&Se(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Ee(this))},t.Na=function(t){this.g&&(this.response=t,Ee(this))},t.ga=function(){this.g&&Ee(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(_e.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l(Ie,K);var ke=/^https?$/i,Oe=["POST","PUT"];function Pe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,De(t),Le(t)}function De(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}function xe(t){if(t.h&&void 0!==s)if(t.v&&4==Re(t))setTimeout(t.Ca.bind(t),0);else if(X(t,"readystatechange"),4==Re(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===s){let e=String(t.D).match(Gt)[1]||null;!e&&r.self&&r.self.location&&(e=r.self.location.protocol.slice(0,-1)),i=!ke.test(e?e.toLowerCase():"")}n=i}if(n)X(t,"complete"),X(t,"success");else{t.o=6;try{var o=Re(t)>2?t.g.statusText:""}catch(a){o=""}t.l=o+" ["+t.ca()+"]",De(t)}}finally{Le(t)}}}function Le(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const i=t.g;t.g=null,e||X(t,"ready");try{i.onreadystatechange=null}catch(n){}}}function Re(t){return t.g?t.g.readyState:0}function je(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ne(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Me(t){this.za=0,this.i=[],this.j=new bt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ne("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ne("baseRetryDelayMs",5e3,t),this.Za=Ne("retryDelaySeedMs",1e4,t),this.Ta=Ne("forwardChannelMaxRetries",2,t),this.va=Ne("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Bt(t&&t.concurrentRequestLimit),this.Ba=new be,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function $e(t){if(Ue(t),3==t.I){var e=t.V++,n=Xt(t.J);if(te(n,"SID",t.M),te(n,"RID",e),te(n,"TYPE","terminate"),Ve(t,n),(e=new Tt(t,t.j,e)).M=2,e.A=ee(Xt(n)),n=!1,r.navigator&&r.navigator.sendBeacon)try{n=r.navigator.sendBeacon(e.A.toString(),"")}catch(i){}!n&&r.Image&&((new Image).src=e.A,n=!0),n||(e.g=en(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Rt(e)}Qe(t)}function Fe(t){t.g&&(Je(t),t.g.cancel(),t.g=null)}function Ue(t){Fe(t),t.v&&(r.clearTimeout(t.v),t.v=null),Ke(t),t.h.cancel(),t.m&&("number"==typeof t.m&&r.clearTimeout(t.m),t.m=null)}function Be(t){if(!Ht(t.h)&&!t.m){t.m=!0;var e=t.Ea;v||_(),b||(v(),b=!0),w.add(e,t),t.D=0}}function He(t,e){var n;n=e?e.l:t.V++;const i=Xt(t.J);te(i,"SID",t.M),te(i,"RID",n),te(i,"AID",t.K),Ve(t,i),t.u&&t.o&&Te(i,t.u,t.o),n=new Tt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=qe(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),zt(t.h,n),Pt(n,i,e)}function Ve(t,e){t.H&&x(t.H,function(t,n){te(e,n,t)}),t.l&&x({},function(t,n){te(e,n,t)})}function qe(t,e,n){n=Math.min(t.i.length,n);const i=t.l?c(t.l.Ka,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let h=0;h<n;h++){var r=s[h].g;const n=s[h].map;if((r-=e)<0)e=Math.max(0,s[h].g-100),c=!1;else try{r="req"+r+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let i=n;o(n)&&(i=it(n)),t.push(r+e+"="+encodeURIComponent(i))}}catch(es){throw t.push(r+"type="+encodeURIComponent("_badmap")),es}}catch(es){i&&i(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function ze(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;v||_(),b||(v(),b=!0),w.add(e,t),t.A=0}}function We(t){return!(t.g||t.v||t.A>=3||(t.Y++,t.v=vt(c(t.Da,t),Ye(t,t.A)),t.A++,0))}function Je(t){null!=t.B&&(r.clearTimeout(t.B),t.B=null)}function Ge(t){t.g=new Tt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Xt(t.na);te(e,"RID","rpc"),te(e,"SID",t.M),te(e,"AID",t.K),te(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&te(e,"TO",t.ia),te(e,"TYPE","xmlhttp"),Ve(t,e),t.u&&t.o&&Te(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=ee(Xt(e)),n.u=null,n.R=!0,Dt(n,t)}function Ke(t){null!=t.C&&(r.clearTimeout(t.C),t.C=null)}function Xe(t,e){var n=null;if(t.g==e){Ke(t),Je(t),t.g=null;var i=2}else{if(!qt(t.h,e))return;n=e.G,Wt(t.h,e),i=1}if(0!=t.I)if(e.o)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.F;var s=t.D;X(i=dt(),new yt(i,n)),Be(t)}else ze(t);else if(3==(s=e.m)||0==s&&e.X>0||!(1==i&&function(t,e){return!(Vt(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=vt(c(t.Ea,t,e),Ye(t,t.D)),t.D++,0)))}(t,e)||2==i&&We(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Ze(t,5);break;case 4:Ze(t,10);break;case 3:Ze(t,6);break;default:Ze(t,2)}}function Ye(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function Ze(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),i=t.Ua;const e=!i;i=new Kt(i||"//www.google.com/images/cleardot.gif"),r.location&&"http"==r.location.protocol||Yt(i,"https"),ee(i),e?function(t,e){const n=new bt;if(r.Image){const i=new Image;i.onload=h(ve,n,"TestLoadImage: loaded",!0,e,i),i.onerror=h(ve,n,"TestLoadImage: error",!1,e,i),i.onabort=h(ve,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=h(ve,n,"TestLoadImage: timeout",!1,e,i),r.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(i.toString(),n):function(t,e){new bt;const n=new AbortController,i=setTimeout(()=>{n.abort(),ve(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(i),t.ok?ve(0,0,!0,e):ve(0,0,!1,e)}).catch(()=>{clearTimeout(i),ve(0,0,!1,e)})}(i.toString(),n)}else mt(2);t.I=0,t.l&&t.l.pa(e),Qe(t),Ue(t)}function Qe(t){if(t.I=0,t.ja=[],t.l){const e=Jt(t.h);0==e.length&&0==t.i.length||(p(t.ja,e),p(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function tn(t,e,n){var i=n instanceof Kt?Xt(n):new Kt(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Zt(i,i.u);else{var s=r.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;const t=new Kt(null);i&&Yt(t,i),e&&(t.g=e),s&&Zt(t,s),n&&(t.h=n),i=t}return n=t.G,e=t.wa,n&&e&&te(i,n,e),te(i,"VER",t.ka),Ve(t,i),i}function en(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Ie(new we({ab:n})):new Ie(t.ma)).Fa(t.L),e}function nn(){}function sn(t,e){K.call(this),this.g=new Me(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!T(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!T(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new an(this)}function rn(t){ct.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function on(){ht.call(this),this.status=1}function an(t){this.g=t}(t=Ie.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_t.g(),this.g.onreadystatechange=u(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Pe(this,o)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=r.FormData&&t instanceof r.FormData,!(Array.prototype.indexOf.call(Oe,e,void 0)>=0)||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of n)this.g.setRequestHeader(r,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(o){Pe(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,X(this,"complete"),X(this,"abort"),Le(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Le(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?xe(this):this.Xa())},t.Xa=function(){xe(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return Re(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),st(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Me.prototype).ka=8,t.I=1,t.connect=function(t,e,n,i){mt(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.J=tn(this,null,this.W),Be(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Tt(this,this.j,t);let r=this.o;if(this.U&&(r?(r=L(r),j(r,this.U)):r=this.U),null!==this.u||this.R||(s.J=r,r=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if((e+=i)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=qe(this,s,e),te(n=Xt(this.J),"RID",t),te(n,"CVER",22),this.G&&te(n,"X-HTTP-Session-Id",this.G),Ve(this,n),r&&(this.R?e="headers="+Ct(Ae(r))+"&"+e:this.u&&Te(n,this.u,r)),zt(this.h,s),this.Ra&&te(n,"TYPE","init"),this.S?(te(n,"$req",e),te(n,"SID","null"),s.U=!0,Pt(s,n,null)):Pt(s,n,e),this.I=2}}else 3==this.I&&(t?He(this,t):0==this.i.length||Ht(this.h)||He(this))},t.Da=function(){if(this.v=null,Ge(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=vt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),Fe(this),Ge(this))},t.Va=function(){null!=this.C&&(this.C=null,Fe(this),We(this),mt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=nn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},l(sn,K),sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){$e(this.g)},sn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=it(t),t=n);e.i.push(new Ut(e.Ya++,t)),3==e.I&&Be(e)},sn.prototype.N=function(){this.g.l=null,delete this.j,$e(this.g),delete this.g,sn.Z.N.call(this)},l(rn,ct),l(on,ht),l(an,nn),an.prototype.ra=function(){X(this.g,"a")},an.prototype.qa=function(t){X(this.g,new rn(t))},an.prototype.pa=function(t){X(this.g,new on)},an.prototype.oa=function(){X(this.g,"b")},sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,St.NO_ERROR=0,St.TIMEOUT=8,St.HTTP_ERROR=6,at.OPEN="a",at.CLOSE="b",at.ERROR="c",at.MESSAGE="d",K.prototype.listen=K.prototype.J,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa}).apply(void 0!==Ti?Ti:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Ii{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ii.UNAUTHENTICATED=new Ii(null),Ii.GOOGLE_CREDENTIALS=new Ii("google-credentials-uid"),Ii.FIRST_PARTY=new Ii("first-party-uid"),Ii.MOCK_USER=new Ii("mock-user");
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
let ki="12.9.0";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Oi=new Et("@firebase/firestore");function Pi(t,...e){if(Oi.logLevel<=vt.DEBUG){const n=e.map(xi);Oi.debug(`Firestore (${ki}): ${t}`,...n)}}function Di(t,...e){if(Oi.logLevel<=vt.ERROR){const n=e.map(xi);Oi.error(`Firestore (${ki}): ${t}`,...n)}}function xi(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Li(t,e,n){let i="Unexpected state";"string"==typeof e?i=e:n=e,Ri(t,i,n)}function Ri(t,e,n){let i=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{i+=" CONTEXT: "+JSON.stringify(n)}catch(t){i+=" CONTEXT: "+n}throw Di(i),new Error(i)}function ji(t,e,n,i){let s="Unexpected state";"string"==typeof n?s=n:i=n,t||Ri(e,s,i)}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Ni="cancelled",Mi="invalid-argument",$i="failed-precondition";class Fi extends ct{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ui{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Bi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ii.UNAUTHENTICATED))}shutdown(){}}class Vi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qi{constructor(t){this.t=t,this.currentUser=Ii.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ji(void 0===this.o,42304);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ui,t.enqueueRetryable(()=>i(this.currentUser))};const r=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{Pi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Pi("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ui)}},0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(Pi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ji("string"==typeof e.accessToken,31837,{l:e}),new Bi(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ji(null===t||"string"==typeof t,2055,{h:t}),new Ii(t)}}class zi{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Ii.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Wi{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new zi(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Ii.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ji{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gi{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ae(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ji(void 0===this.o,3512);const n=t=>{null!=t.error&&Pi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,Pi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const i=t=>{Pi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?i(t):Pi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ji(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(ji("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new Ji(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ki(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Xi{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=Ki(40);for(let i=0;i<n.length;++i)e.length<20&&n[i]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[i]%62))}return e}}function Yi(t,e){return t<e?-1:t>e?1:0}const Zi=55296,Qi=57343;function ts(t){const e=t.charCodeAt(0);return e>=Zi&&e<=Qi}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const es="__name__";class ns{constructor(t,e,n){void 0===e?e=0:e>t.length&&Li(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&Li(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ns.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ns?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=ns.compareSegments(t.get(i),e.get(i));if(0!==n)return n}return Yi(t.length,e.length)}static compareSegments(t,e){const n=ns.isNumericId(t),i=ns.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?ns.extractNumericId(t).compare(ns.extractNumericId(e)):function(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.charAt(i),s=e.charAt(i);if(n!==s)return ts(n)===ts(s)?Yi(n,s):ts(n)?1:-1}return Yi(t.length,e.length)}(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ci.fromString(t.substring(4,t.length-2))}}class is extends ns{construct(t,e,n){return new is(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Fi(Mi,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new is(e)}static emptyPath(){return new is([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rs extends ns{construct(t,e,n){return new rs(t,e,n)}static isValidIdentifier(t){return ss.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rs.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===es}static keyField(){return new rs([es])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Fi(Mi,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Fi(Mi,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Fi(Mi,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Fi(Mi,"Unterminated ` in path: "+t);return new rs(e)}static emptyPath(){return new rs([])}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class os{constructor(t){this.path=t}static fromPath(t){return new os(is.fromString(t))}static fromName(t){return new os(is.fromString(t).popFirst(5))}static empty(){return new os(is.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===is.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return is.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new os(new is(t.slice()))}}function as(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Fi(Mi,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Li(12329,{type:typeof t})}(t);throw new Fi(Mi,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
             * @license
             * Copyright 2025 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function cs(t,e){const n={typeString:t};return e&&(n.value=e),n}function hs(t,e){if(!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(t))throw new Fi(Mi,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const o=t[i];if(s&&typeof o!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(void 0!==r&&o!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new Fi(Mi,n);return!0}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const ls=-62135596800,us=1e6;class ds{static now(){return ds.fromMillis(Date.now())}static fromDate(t){return ds.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*us);return new ds(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Fi(Mi,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Fi(Mi,"Timestamp nanoseconds out of range: "+e);if(t<ls)throw new Fi(Mi,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Fi(Mi,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/us}_compareTo(t){return this.seconds===t.seconds?Yi(this.nanoseconds,t.nanoseconds):Yi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ds._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(hs(t,ds._jsonSchema))return new ds(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ls;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ds._jsonSchemaVersion="firestore/timestamp/1.0",ds._jsonSchema={type:cs("string",ds._jsonSchemaVersion),seconds:cs("number"),nanoseconds:cs("number")};
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class ps extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class fs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ps("Invalid base64 string: "+t):t}}(t);return new fs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new fs(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Yi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fs.EMPTY_BYTE_STRING=new fs("");const gs="(default)";class ms{constructor(t,e){this.projectId=t,this.database=e||gs}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===gs}isEqual(t){return t instanceof ms&&t.projectId===this.projectId&&t.database===this.database}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class ys{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var vs,bs,ws,_s;function Ss(){return"undefined"!=typeof document?document:null}(bs=vs||(vs={}))[bs.OK=0]="OK",bs[bs.CANCELLED=1]="CANCELLED",bs[bs.UNKNOWN=2]="UNKNOWN",bs[bs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bs[bs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bs[bs.NOT_FOUND=5]="NOT_FOUND",bs[bs.ALREADY_EXISTS=6]="ALREADY_EXISTS",bs[bs.PERMISSION_DENIED=7]="PERMISSION_DENIED",bs[bs.UNAUTHENTICATED=16]="UNAUTHENTICATED",bs[bs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bs[bs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bs[bs.ABORTED=10]="ABORTED",bs[bs.OUT_OF_RANGE=11]="OUT_OF_RANGE",bs[bs.UNIMPLEMENTED=12]="UNIMPLEMENTED",bs[bs.INTERNAL=13]="INTERNAL",bs[bs.UNAVAILABLE=14]="UNAVAILABLE",bs[bs.DATA_LOSS=15]="DATA_LOSS",
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
new Ci([4294967295,4294967295],0);class Es{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&Pi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Cs{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Cs(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fi(Ni,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}(_s=ws||(ws={})).Ma="default",_s.Cache="cache";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const As=new Map,Ts="firestore.googleapis.com",Is=!0;
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class ks{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Fi(Mi,"Can't provide ssl option if host option is not set");this.host=Ts,this.ssl=Is}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Is;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Fi(Mi,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Fi(Mi,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Fi(Mi,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Fi(Mi,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Fi(Mi,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Os{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ks({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Fi($i,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Fi($i,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ks(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hi;switch(t.type){case"firstParty":return new Wi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Fi(Mi,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=As.get(t);e&&(Pi("ComponentProvider","Removing Datastore"),As.delete(t),e.terminate())}(this),Promise.resolve()}}function Ps(t,e,n,i={}){t=as(t,Os);const s=st(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(async function(t){(await fetch(t,{credentials:"include"})).ok}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(`https://${a}`),at("Firestore",!0)),r.host!==Ts&&r.host!==a&&function(t,...e){if(Oi.logLevel<=vt.WARN){const n=e.map(xi);Oi.warn(`Firestore (${ki}): ${t}`,...n)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:a,ssl:s,emulatorOptions:i};if(!ut(c,o)&&(t._setSettings(c),i.mockUserToken)){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ii.MOCK_USER;else{var h;e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(r)),""].join(".")}(i.mockUserToken,null===(h=t._app)||void 0===h?void 0:h.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Fi(Mi,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ii(s)}t._authCredentials=new Vi(new Bi(e,n))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Ds{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ds(this.firestore,t,this._query)}}class xs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xs(this.firestore,t,this._key)}toJSON(){return{type:xs._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(hs(e,xs._jsonSchema))return new xs(t,n||null,new os(is.fromString(e.referencePath)))}}xs._jsonSchemaVersion="firestore/documentReference/1.0",xs._jsonSchema={type:cs("string",xs._jsonSchemaVersion),referencePath:cs("string")};class Ls extends Ds{constructor(t,e,n){super(t,e,function(t){return new ys(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xs(this.firestore,null,new os(t))}withConverter(t){return new Ls(this.firestore,t,this._path)}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Rs="AsyncQueue";class js{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Es(this,"async_queue_retry"),this._c=()=>{const t=Ss();t&&Pi(Rs,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=Ss();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ss();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ui;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!function(t){return"IndexedDbTransactionError"===t.name}(t))throw t;Pi(Rs,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,Di("INTERNAL UNHANDLED ERROR: ",Ns(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Cs.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(i),i}uc(){this.nc&&Li(47125,{Pc:Ns(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ns(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}class Ms extends Os{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new js,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new js(t),this._firestoreClient=void 0,await t}}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class $s{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $s(fs.fromBase64String(t))}catch(t){throw new Fi(Mi,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new $s(fs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$s._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(hs(t,$s._jsonSchema))return $s.fromBase64String(t.bytes)}}$s._jsonSchemaVersion="firestore/bytes/1.0",$s._jsonSchema={type:cs("string",$s._jsonSchemaVersion),bytes:cs("string")};
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Fs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Fi(Mi,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rs(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Us{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Fi(Mi,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Fi(Mi,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Yi(this._lat,t._lat)||Yi(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Us._jsonSchemaVersion}}static fromJSON(t){if(hs(t,Us._jsonSchema))return new Us(t.latitude,t.longitude)}}Us._jsonSchemaVersion="firestore/geoPoint/1.0",Us._jsonSchema={type:cs("string",Us._jsonSchemaVersion),latitude:cs("number"),longitude:cs("number")};
/**
             * @license
             * Copyright 2024 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Bs{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Bs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(hs(t,Bs._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Bs(t.vectorValues);throw new Fi(Mi,"Expected 'vectorValues' field to be a number array")}}}function Hs(t,e,n){if((e=pt(e))instanceof Fs)return e._internalPath;if("string"==typeof e)return function(t,e){if(e.search(Vs)>=0)throw qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Fs(...e.split("."))._internalPath}catch(n){throw qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}(t,e);throw qs("Field path arguments must be of type string or ",t)}Bs._jsonSchemaVersion="firestore/vectorValue/1.0",Bs._jsonSchema={type:cs("string",Bs._jsonSchemaVersion),vectorValues:cs("object")};const Vs=new RegExp("[~\\*/\\[\\]]");function qs(t,e,n,i,s){let r=`Function ${e}() called with invalid data`;return r+=". ",new Fi(Mi,r+t+"")}const zs="@firebase/firestore",Ws="4.11.0";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Js{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Gs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t,e;return null!==(t=null===(e=this._document)||void 0===e?void 0:e.data.clone().value.mapValue.fields)&&void 0!==t?t:void 0}get(t){if(this._document){const e=this._document.data.field(Hs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Gs extends Js{data(){return super.data()}}class Ks{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xs extends Js{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Hs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Fi($i,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Xs._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}Xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xs._jsonSchema={type:cs("string",Xs._jsonSchemaVersion),bundleSource:cs("string","DocumentSnapshot"),bundleName:cs("string"),bundle:cs("string")};class Ys extends Xs{data(t={}){return super.data(t)}}class Zs{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ys(this._firestore,this._userDataWriter,n.key,n,new Ks(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Fi(Mi,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const i=new Ys(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ks(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new Ys(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ks(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Qs(e.type),doc:i,oldIndex:s,newIndex:r}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Fi($i,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Zs._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Xi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),i.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Qs(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Li(61501,{type:t})}}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Zs._jsonSchemaVersion="firestore/querySnapshot/1.0",Zs._jsonSchema={type:cs("string",Zs._jsonSchemaVersion),bundleSource:cs("string","QuerySnapshot"),bundleName:cs("string"),bundle:cs("string")},function(t,e=!0){ki="12.9.0",Ee(new ft("firestore",(t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new Ms(new qi(t.getProvider("auth-internal")),new Gi(s,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Fi(Mi,'"projectId" not provided in firebase.initializeApp.');return new ms(t.options.projectId,e)}(s,n),s);return i={useFetchStreams:e,...i},r._setSettings(i),r},"PUBLIC").setMultipleInstances(!0)),Pe(zs,Ws,t),Pe(zs,Ws,"esm2020")}();const tr=ke({apiKey:"AIzaSyCAh2903KELNl6CIuzjiww8zAo9TOaijm0",authDomain:"lab6mobile.firebaseapp.com",projectId:"lab6mobile",storageBucket:"lab6mobile.firebasestorage.app",messagingSenderId:"179167941370",appId:"1:179167941370:web:8bf78360dceba904a1af43",measurementId:"G-9L9TJQJE7P"});!function(t){const e="object"==typeof t?t:Oe(),n="string"==typeof t?t:gs,i=Ce(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const t=et("firestore");t&&Ps(i,...t)}}(tr);const er=mi.object({properties:{caption:mi.string(),tags:mi.array({items:mi.string()}),objects:mi.array({items:mi.object({properties:{name:mi.string(),confidence:mi.number()},optionalProperties:["confidence"]})}),safety:mi.object({properties:{isSensitive:mi.boolean(),notes:mi.string()},optionalProperties:["notes"]})},optionalProperties:["objects","safety"]}),nr=function(t=Oe(),e){var n,i;const s=Ce(t=pt(t),Ve),r=null!==(n=null==e?void 0:e.backend)&&void 0!==n?n:new In,o={useLimitedUseAppCheckTokens:null!==(i=null==e?void 0:e.useLimitedUseAppCheckTokens)&&void 0!==i&&i},a=function(t){if(t instanceof In)return`${Ve}/googleai`;if(t instanceof kn)return`${Ve}/vertexai/${t.location}`;throw new Je(rn,`Invalid backend: ${JSON.stringify(t.backendType)}`)}(r),c=s.getImmediate({identifier:a});return c.options=o,c}(tr,{backend:new In}),ir=function(t,e,n){var i;const s=e;let r;if(r=s.mode?s.inCloudParams||{model:"gemini-2.5-flash-lite"}:e,!r.model)throw new Je(fn,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const o=null===(i=t.chromeAdapterFactory)||void 0===i?void 0:i.call(t,s.mode,"undefined"==typeof window?void 0:window,s.onDeviceParams),a=new gi(t,r,n,o);return a._apiSettings.inferenceMode=s.mode,a}(nr,{model:"gemini-2.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:er}});class sr{static async analyze(t){var e;const n={inlineData:{data:t.base64,mimeType:t.mimeType}},i=null!==(e=(await ir.generateContent(["วิเคราะห์ภาพนี้และตอบกลับตาม JSON schema เท่านั้น\n- caption: คำบรรยายสั้น 1 ประโยคภาษาไทย\n- tags: คีย์เวิร์ด 3-8 คำ\n- objects: ถ้าเห็นวัตถุเด่น ให้ระบุชื่อ\n- safety: ถ้าเป็นภาพอ่อนไหวให้ทำเครื่องหมาย",n])).response.text())&&void 0!==e?e:"{}";return JSON.parse(i)}}const rr={class:"glass-card"},or={class:"button-group"},ar={key:0,class:"image-preview-container"},cr={key:0},hr={key:1,class:"result-box"};t("default",T(n({__name:"Tab1Page",setup(t){const e=C(null),n=C(null),T=C(""),I=C(null),k=C(!1);async function O(t){var e;const i=null===(e=t.target.files)||void 0===e?void 0:e[0];i&&(n.value=await W.fromFile(i),T.value=URL.createObjectURL(i),I.value=null)}async function P(){k.value=!0;try{const t=await W.fromCamera();n.value=t,T.value=`data:${t.mimeType};base64,${t.base64}`,I.value=null}catch(t){console.error(t)}finally{k.value=!1}}async function D(){if(n.value){k.value=!0;try{I.value=await sr.analyze(n.value)}catch(t){console.error(t)}finally{k.value=!1}}}return(t,C)=>(A(),i(r(o),{class:"pastel-theme"},{default:s(()=>[a(r(u),{class:"ion-no-border"},{default:s(()=>[a(r(c),{color:"primary"},{default:s(()=>[a(r(h),null,{default:s(()=>[...C[1]||(C[1]=[l("Lab08: Gemini Vision ✨",-1)])]),_:1})]),_:1})]),_:1}),a(r(E),{class:"ion-padding"},{default:s(()=>[d("div",rr,[d("input",{ref_key:"fileEl",ref:e,type:"file",accept:"image/*",hidden:"",onChange:O},null,544),d("div",or,[a(r(p),{class:"btn-pastel pink",expand:"block",onClick:C[0]||(C[0]=t=>{var n;return null===(n=e.value)||void 0===n?void 0:n.click()})},{default:s(()=>[a(r(f),{slot:"start",icon:r(g)},null,8,["icon"]),C[2]||(C[2]=l(" เลือกไฟล์ภาพ ",-1))]),_:1}),a(r(p),{class:"btn-pastel blue",expand:"block",onClick:P},{default:s(()=>[a(r(f),{slot:"start",icon:r(m)},null,8,["icon"]),C[3]||(C[3]=l(" ถ่ายภาพ (Camera) ",-1))]),_:1})]),T.value?(A(),y("div",ar,[a(r(v),{src:T.value,class:"preview-img"},null,8,["src"])])):b("",!0),a(r(p),{class:"btn-analyze",expand:"block",disabled:!n.value||k.value,onClick:D},{default:s(()=>[k.value?(A(),i(r(w),{key:1,name:"dots"})):(A(),y("span",cr,"วิเคราะห์ภาพด้วย AI"))]),_:1},8,["disabled"]),I.value?(A(),y("div",hr,[d("h3",null,[a(r(f),{icon:r(_)},null,8,["icon"]),C[4]||(C[4]=l(" ผลการวิเคราะห์",-1))]),d("pre",null,S(JSON.stringify(I.value,null,2)),1)])):b("",!0)])]),_:1})]),_:1}))}}),[["__scopeId","data-v-cbdb2b3c"]]))}}});

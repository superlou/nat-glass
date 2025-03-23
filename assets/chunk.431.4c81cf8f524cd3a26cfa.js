"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[431],{65:(e,t,i)=>{i.d(t,{P:()=>n,q:()=>o})
const s=(0,i(375).vs)("WarpDriveRuntimeConfig",{debug:{}}),r=globalThis.sessionStorage?.getItem("WarpDriveRuntimeConfig")
function n(){return s}function o(e){Object.assign(s.debug,e),globalThis.sessionStorage?.setItem("WarpDriveRuntimeConfig",JSON.stringify(s))}r&&Object.assign(s,JSON.parse(r))},76:(e,t,i)=>{i.d(t,{I:()=>p,b:()=>b,c:()=>h,e:()=>_,f:()=>w,g:()=>u,s:()=>f,u:()=>v})
var s=i(375),r=i(648)
function n(e,t){return e.get(o(e,t))}function o(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function a(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const l=(0,s.vs)("PromiseCache",new WeakMap),c=(0,s.vs)("RequestMap",new Map)
function d(e,t){c.set(e,t)}function h(e){c.delete(e)}function u(e){return c.get(e)}function f(e,t){l.set(e,t)}const p=(0,s.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function y(e){return e&&!0===e[r.k0]}function m(e,t,i){return y(t)?t:i?{[r.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[r.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function g(e){return new DOMException(e||"The user aborted a request.","AbortError")}function _(e,t,i,s){const n=new k(t,s,0===i),o=(a=e[i],0===i&&Boolean(a[p]))
var a
const l=new A(n,o)
let c
try{c=e[i].request(l,(function(t){return n.nextCalled++,_(e,t,i+1,s)})),o&&l._finalize(),c&&o&&(c instanceof Promise||(d(n.requestId,{isError:!1,result:m(n,c,!1)}),c=Promise.resolve(c)))}catch(e){o&&d(n.requestId,{isError:!0,result:m(n,e,!0)}),c=Promise.reject(e)}const h=function(e){const t=b()
let i,{promise:s}=t
return s=s.finally((()=>{e.resolveStream(),i&&i.forEach((e=>e()))})),s.onFinalize=e=>{i=i||[],i.push(e)},s[r.J6]=!0,s.getStream=()=>e.getStream(),s.abort=t=>{e.abort(g(t))},s.id=e.requestId,s.lid=e.god.identifier,t.promise=s,t}(n)
return u=c,Boolean(u&&u instanceof Promise&&!0===u[r.J6])?function(e,t,i){return e.setStream(t.getStream()),t.then((t=>{const s={[r.k0]:!0,request:e.request,response:t.response,content:t.content}
i.resolve(s)}),(t=>{if(y(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[r.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(n,c,h):function(e,t,i){return t.then((t=>{if(e.controller.signal.aborted)return void i.reject(g(e.controller.signal.reason))
y(t)&&(e.setStream(e.god.stream),t=t.content)
const s={[r.k0]:!0,request:e.request,response:e.getResponse(),content:t}
i.resolve(s)}),(t=>{if(y(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[r.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(n,c,h)
var u}function b(){let e,t
const i=new Promise(((i,s)=>{e=i,t=s}))
return{resolve:e,reject:t,promise:i}}function v(e,t){return e[r.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e}function R(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function w(e){const{headers:t,ok:i,redirected:s,status:r,statusText:n,type:o,url:a}=e
return R(t),{headers:t,ok:i,redirected:s,status:r,statusText:n,type:o,url:a}}class k{constructor(e,t,i=!1){a(this,"hasSetStream",!1),a(this,"hasSetResponse",!1),a(this,"hasSubscribers",!1),a(this,"stream",b()),a(this,"response",null),a(this,"nextCalled",0),this.isRoot=i,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",(()=>{this.controller.abort(t.controller.signal.reason)})),delete e.controller)
let s=Object.assign({signal:this.controller.signal},e)
e.headers&&R(e.headers),this.enhancedRequest=s,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then((e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e)))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=w(e)
this.response=t,this.god.response=t
const i=e.headers?.get("content-length")
this.stream.promise.sizeHint=i?parseInt(i,10):0}else this.response=e,this.god.response=e}}var S=new WeakMap
class A{constructor(e,t){var i,s;(function(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,S),this.id=e.requestId,s=e,(i=S).set(o(i,this),s),this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){n(S,this).setStream(e)}setResponse(e){n(S,this).setResponse(e)}setIdentifier(e){n(S,this).god.identifier=e}get hasRequestedStream(){return n(S,this).hasRequestedStream}_finalize(){this._finalized=!0}}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["QUERY","GET","PUT","PATCH","DELETE","POST","OPTIONS","HEAD","CONNECT","TRACE"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,s.L1)("IS_FROZEN",Symbol("FROZEN")),(0,s.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])},81:(e,t,i)=>{function s(e,t,i){return(t="symbol"==typeof(s=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e
var s}function r(e,t,i,s){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0})}function n(e,t,i,s,r){var n={}
return Object.keys(s).forEach((function(e){n[e]=s[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce((function(i,s){return s(e,t,i)||i}),n),r&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(r):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}i.d(t,{_:()=>n,a:()=>r,b:()=>s})},82:(e,t,i)=>{i.d(t,{Ay:()=>l,ud:()=>n.b})
var s=i(65),r=i(375),n=i(76)
function o(e,t){return e.get(function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}(e,t))}var a=new WeakMap
class l{constructor(e){var t,i
i=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=a),t.set(this,i),Object.assign(this,e),this._pending=new Map,this._deduped=new Map}useCache(e){return e[n.I]=!0,o(a,this).unshift(e),this}use(e){return o(a,this).push(...e),this}request(e){const t=o(a,this),i=e.controller||new AbortController
e.controller&&delete e.controller
const s=(0,r.dN)("REQ_ID")??0;(0,r.ml)("REQ_ID",s+1)
const l={controller:i,response:null,stream:null,hasRequestedStream:!1,id:s,identifier:null},c=(0,n.e)(t,e,0,l),d=(0,n.g)(s),h=(0,n.u)(c.then((e=>((0,n.s)(h,{isError:!1,result:e}),(0,n.c)(s),e)),(e=>{throw(0,n.s)(h,{isError:!0,result:e}),(0,n.c)(s),e})),c)
return d&&(0,n.s)(h,d),h}static create(e){return new this(e)}}globalThis.setWarpDriveLogging=s.q,globalThis.getWarpDriveRuntimeConfig=s.P},113:(e,t,i)=>{i.r(t),i.d(t,{BooleanTransform:()=>l,DateTransform:()=>c,NumberTransform:()=>h,StringTransform:()=>u,default:()=>a})
var s=i(471),r=i.n(s),n=i(788)
function o(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const a=r()
class l{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class c{constructor(){o(this,n.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function d(e){return e==e&&e!==1/0&&e!==-1/0}class h{constructor(){o(this,n.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}static create(){return new this}}class u{constructor(){o(this,n.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},139:(e,t,i)=>{function s(e,t){let i=e.load(t)
if(!i)throw new Error(t+" must export an initializer.")
let s=i.default
if(!s)throw new Error(t+" must have a default export")
return s.name||(s.name=t.slice(t.lastIndexOf("/")+1)),s}function r(e,t,i){var r=t+"/initializers/",n=t+"/instance-initializers/",o=[],a=[]
let l
l=i?{names:()=>Object.keys(i),load:e=>i[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let s of l.names())s.startsWith(r)&&!s.endsWith("-test")?o.push(s):s.startsWith(n)&&!s.endsWith("-test")&&a.push(s)
!function(e,t,i){for(let r of i)e.initializer(s(t,r))}(e,l,o),function(e,t,i){for(let r of i)e.instanceInitializer(s(t,r))}(e,l,a)}i.r(t),i.d(t,{default:()=>r})},146:(e,t,i)=>{i.d(t,{B1:()=>l,Fe:()=>d,RH:()=>c,V1:()=>y,i$:()=>m,n5:()=>p,sg:()=>u,zs:()=>f})
var s=i(463),r=i(606),n=i(375)
function o(e){e&&(0,r.consumeTag)(e)}function a(e){e&&(0,r.dirtyTag)(e)}function l(e){const t=(0,n.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(o(e["[]"]),o(e["@length"]),(0,r.consumeTag)(e.tag)):e.ref}function c(e){const t=(0,n.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(a(e["[]"]),a(e["@length"]),(0,r.dirtyTag)(e.tag)):e.ref=null}(e)}function d(e){const t=(0,n.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const h=(0,n.L1)("Signals",Symbol("Signals"))
function u(e,t,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[h]=this[h]||new Map,s=e.has(t),r=function(e,t,i){let s=e.get(i)
return s||(s=p(t,i),e.set(i,s)),l(s),s}(e,this,t)
return s||void 0===i||(r.lastValue=i),r.lastValue},set(e){const i=this[h]=this[h]||new Map
let s=i.get(t)
s||(s=p(this,t),i.set(t,s)),s.lastValue!==e&&(s.lastValue=e,c(s))}})}function f(e,t){t["[]"]=(0,s.tagForProperty)(e,"[]"),t["@length"]=(0,s.tagForProperty)(e,"length")}function p(e,t){return{key:t,tag:(0,s.tagForProperty)(e,t),t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function y(e,t,i){let s=e[h]
s||(s=new Map,e[h]=s)
let r=s.get(t)
return r||(r=p(e,t),r.shouldReset=i,s.set(t,r)),r}function m(e,t){const i=e[h]
if(i)return i.get(t)}},151:(e,t,i)=>{i.r(t),i.d(t,{graphFor:()=>H,isBelongsTo:()=>d,peekGraph:()=>V})
var s=i(603),r=i(274),n=i(375)
function o(e){return e._store}function a(e,t,i){return(e[t]=e[t]||Object.create(null))[i]}function l(e,t,i,s){(e[t]=e[t]||Object.create(null))[i]=s}function c(e){if(!e.id)return!0
const t=(0,r.oX)(e)
return Boolean(t?.isNew(e))}function d(e){return"belongsTo"===e.definition.kind}function h(e){return e.definition.isImplicit}function u(e){return"hasMany"===e.definition.kind}function f(e,t){if(d(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(u(e)){for(let i=0;i<e.remoteState.length;i++){const s=e.remoteState[i]
t(s)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach((i=>{e.localMembers.has(i)||t(i)}))}function p(e,t,i,s){if(d(t))t.remoteState===i&&(t.remoteState=null),t.localState===i&&(t.localState=null,y(e,t))
else if(u(t)){t.remoteMembers.delete(i),t.additions?.delete(i)
const s=t.removals?.delete(i),r=t.remoteState.indexOf(i)
if(-1!==r&&t.remoteState.splice(r,1),!s){const s=t.localState?.indexOf(i);-1!==s&&void 0!==s&&(t.localState.splice(s,1),y(e,t))}}else t.remoteMembers.delete(i),t.localMembers.delete(i)}function y(e,t){if(!t.accessed)return
const i=t.identifier,s=t.definition.key
i!==e._removing&&e.store.notifyChange(i,"relationships",s)}function m(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const g=null,_=Date.now()
function b(e,t){return`implicit-${e}:${t}${_}`}function v(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit,e.inverseIsLinksMode=t.isLinksMode
const i=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=i,t.resetOnRemoteUpdate=i}function R(e){var t
m(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const i={},s=e.options
return i.kind=e.kind,i.key=e.name,i.type=e.type,i.isAsync=s.async,i.isImplicit=!1,i.isCollection="hasMany"===e.kind,i.isPolymorphic=s&&!!s.polymorphic,i.isLinksMode=s.linksMode??!1,i.inverseKey=s&&s.inverse||"",i.inverseType="",i.inverseIsAsync=g,i.inverseIsImplicit=s&&null===s.inverse||g,i.inverseIsCollection=g,i.inverseIsLinksMode=g,i.resetOnRemoteUpdate=!!m(e)&&!e.options?.linksMode&&!1!==e.options?.resetOnRemoteUpdate,i}function w(e,t,i){i?function(e,t,i){const r=t.value,n=e.get(t.record,t.field)
i&&e._addToTransaction(n)
const o=n.isDirty
n.state.hasReceivedData||(n.isDirty=!0),n.state.hasReceivedData=!0
const{definition:a}=n,{type:l}=n.definition,d=C(r,n,(s=>{l!==s.type&&e.registerPolymorphicType(l,s.type),n.additions?.has(s)&&n.additions.delete(s),k(e,s,a.inverseKey,t.record,i)}),(s=>{n.removals?.has(s)&&n.removals.delete(s),S(e,s,a.inverseKey,t.record,i)}))
if(n.remoteMembers=d.finalSet,n.remoteState=d.finalState,d.changed&&(n.isDirty=!0),n._diff=d,"hasMany"===n.definition.kind&&!1!==n.definition.resetOnRemoteUpdate&&(d.changed||o)){const i={removals:[],additions:[],triggered:!1}
n.removals&&(n.isDirty=!0,n.removals.forEach((s=>{i.triggered=!0,i.removals.push(s),k(e,s,a.inverseKey,t.record,!1)})),n.removals=null),n.additions&&(n.additions.forEach((s=>{c(s)||(i.triggered=!0,i.additions.push(s),n.isDirty=!0,n.additions.delete(s),S(e,s,a.inverseKey,t.record,!1))})),0===n.additions.size&&(n.additions=null)),i.triggered&&(0,s.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${n.identifier.type}>.${n.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${i.additions.map((e=>e.lid)).join(", ")}]\n\tRemoved: [${i.removals.map((e=>e.lid)).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}n.isDirty&&!o&&A(e,n)}(e,t,i):function(e,t,i){const s=t.value,r=e.get(t.record,t.field)
r.state.hasReceivedData=!0
const{additions:n,removals:o}=r,{inverseKey:a,type:l}=r.definition,{record:c}=t,d=r.isDirty
let h=!1
const u=s=>{const r=o?.has(s)
!r&&n?.has(s)||(l!==s.type&&e.registerPolymorphicType(l,s.type),h=!0,k(e,s,a,t.record,i),r&&o.delete(s))},f=t=>{const s=n?.has(t)
!s&&o?.has(t)||(h=!0,S(e,t,a,c,i),s&&n.delete(t))},p=C(s,r,u,f)
n&&n.size>0&&n.forEach((e=>{p.add.has(e)||(h=!0,f(e))})),o&&o.size>0&&o.forEach((e=>{p.del.has(e)||(h=!0,u(e))}))
const m=p.changed||h
r.additions=p.add,r.removals=p.del,r.localState=p.finalState,m&&!d&&y(e,r)}(e,t,i)}function k(e,t,i,s,r){const n=e.get(t,i),{type:o}=n.definition
o!==s.type&&e.registerPolymorphicType(o,s.type),d(n)?(n.state.hasReceivedData=!0,n.state.isEmpty=!1,r&&(e._addToTransaction(n),null!==n.remoteState&&S(e,n.remoteState,n.definition.inverseKey,t,r),n.remoteState=s),n.localState!==s&&(!r&&n.localState&&S(e,n.localState,n.definition.inverseKey,t,r),n.localState=s,y(e,n))):u(n)?r?n.remoteMembers.has(s)||(e._addToTransaction(n),n.remoteState.push(s),n.remoteMembers.add(s),n.additions?.has(s)?n.additions.delete(s):(n.isDirty=!0,n.state.hasReceivedData=!0,A(e,n))):(n.isDirty||n.localState||(n.localState=[]),E(e,0,n,s,null)&&y(e,n)):r?n.remoteMembers.has(s)||(n.remoteMembers.add(s),n.localMembers.add(s)):n.localMembers.has(s)||n.localMembers.add(s)}function S(e,t,i,s,r){const n=e.get(t,i)
d(n)?(n.state.isEmpty=!0,r&&(e._addToTransaction(n),n.remoteState=null),n.localState===s&&(n.localState=null,y(e,n))):u(n)?r?(e._addToTransaction(n),function(e,t){const{remoteMembers:i,additions:s,removals:r,remoteState:n}=e
if(!i.has(t))return!1
i.delete(t)
let o=n.indexOf(t)
return n.splice(o,1),r?.has(t)?(r.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}(n,s)&&y(e,n)):T(n,s)&&y(e,n):r?(n.remoteMembers.delete(s),n.localMembers.delete(s)):s&&n.localMembers.has(s)&&n.localMembers.delete(s)}function A(e,t){t.accessed&&e._scheduleLocalSync(t)}function M(e,t,i=!1){const r=e.get(t.record,t.field)
i&&e._addToTransaction(r)
const{definition:n,state:o}=r,a=i?"remoteState":"localState",l=r[a]
if(t.value!==l)if(l&&S(e,l,n.inverseKey,t.record,i),r[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(n.type!==t.value.type&&e.registerPolymorphicType(n.type,t.value.type),k(e,t.value,n.inverseKey,t.record,i)),i){const{localState:t,remoteState:i}=r
if(t&&c(t)&&!i)return
t!==i&&t===l?(r.localState=i,y(e,r)):t!==i&&t!==l&&!1!==r.definition.resetOnRemoteUpdate&&(r.localState=i,(0,s.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${r.identifier.type}>.${r.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),y(e,r))}else y(e,r)
else if(o.hasReceivedData=!0,i){const{localState:o}=r
if(o&&c(o)&&!l)return
l&&o===l?function(e,t,i,s,r){const n=e.get(t,i)
u(n)&&r&&n.remoteMembers.has(s)&&y(e,n)}(e,l,n.inverseKey,t.record,i):o!==t.value&&!1!==r.definition.resetOnRemoteUpdate&&(r.localState=l,(0,s.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${r.identifier.type}>.${r.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),y(e,r))}}function C(e,t,i,s){const r=new Set(e),{localState:n,remoteState:o,remoteMembers:a}=t
if(e.length!==r.size){const{diff:l,duplicates:c}=function(e,t,i,s,r,n,o,a){const l=t.length,c=s.length,d=Math.max(l,c)
let h=i.size!==r.size,u=!1
const f=new Set,p=new Set,y=new Map,m=new Set,g=[],_=e?.length??0
for(let b=0,v=0;b<d;b++){let d,R=!1
if(b<l)if(d=t[b],m.has(d)){let e=y.get(d)
void 0===e&&(e=[],y.set(d,e)),e.push(b)}else g[v]=d,m.add(d),R=!0,r.has(d)||(b<_&&e[b]!==d&&(h=!0),f.add(d),n(d))
if(b<c){const t=s[b]
d!==s[v]?(u=!0,!a&&b<_?e[v]!==d&&(h=!0):h=!0):a&&!h&&v<_&&e[v]!==d&&(h=!0),i.has(t)||(h=!0,p.add(t),o(t))}else R&&v<c&&d!==s[v]&&(h=!0)
R&&v++}return{diff:{add:f,del:p,finalState:g,finalSet:m,changed:h,remoteOrderChanged:u},duplicates:y}}(n,e,r,o,a,i,s,t.definition.resetOnRemoteUpdate)
return l}return function(e,t,i,s,r,n,o,a){const l=t.length,c=s.length,d=Math.max(l,c),h=e?l===e.length:l===c
let u=i.size!==r.size,f=e?i.size!==e.length:u
const p=new Set,y=new Set,m=e?.length??0
for(let g=0;g<d;g++){let d
if(g<l&&(d=t[g],!r.has(d))&&(g<m&&e[g]!==d&&(f=!0),p.add(d),n(d)),g<c){const t=s[g]
h&&d!==t?(u=!0,g<m?e[g]!==d&&(f=!0):g<l&&(f=!0)):a&&h&&!f&&g<m&&e[g]!==t&&(f=!0),i.has(t)||(u=!0,y.add(t),o(t))}}return{add:p,del:y,finalState:t,finalSet:i,changed:f,remoteOrderChanged:u}}(n,e,r,o,a,i,s,t.definition.resetOnRemoteUpdate)}function E(e,t,i,s,r){const{remoteMembers:n,removals:o}=i
let a=i.additions
if((n.has(s)||a?.has(s))&&!o?.has(s))return!1
if(o?.has(s))o.delete(s)
else{a||(a=i.additions=new Set),i.state.hasReceivedData=!0,a.add(s)
const{type:t}=i.definition
t!==s.type&&e.registerPolymorphicType(s.type,t)}return i.localState&&(null!==r?i.localState.splice(r,0,s):i.localState.push(s)),!0}function T(e,t){const{remoteMembers:i,additions:s}=e
let r=e.removals
if(!i.has(t)&&!s?.has(t)||r?.has(t))return!1
if(s?.has(t)?s.delete(t):(r||(r=e.removals=new Set),r.add(t)),e.localState){const i=e.localState.indexOf(t)
e.localState.splice(i,1)}return!0}function q(e,t,i,s){d(s)?M(e,{op:"replaceRelatedRecord",record:t,field:i,value:s.remoteState},!1):(w(e,{op:"replaceRelatedRecords",record:t,field:i,value:s.remoteState.slice()},!1),y(e,s))}function O(e,t){e.accessed=!0
const i={}
return e.state.hasReceivedData&&(i.data=t?e.remoteState.slice():function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach((e=>{const i=t.indexOf(e)
t.splice(i,1)})),e.additions?.forEach((e=>{t.push(e)})),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(i.links=e.links),e.meta&&(i.meta=e.meta),i}function D(e,t){let i
e.accessed=!0
const s={}
return t&&e.remoteState?i=e.remoteState:!t&&e.localState&&(i=e.localState),(t&&null===e.remoteState||null===e.localState)&&e.state.hasReceivedData&&(i=null),e.links&&(s.links=e.links),void 0!==i&&(s.data=i),e.meta&&(s.meta=e.meta),s}function j(e,t,i,s,r,n){E(e,0,t,s,r??null)&&k(e,s,t.definition.inverseKey,i,n)}function P(e,t,i,s,r){T(t,s)&&S(e,s,t.definition.inverseKey,i,r)}function N(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function F(e,t){for(let i=0;i<e.length;i++)e[i]=t.upgradeIdentifier(e[i])
return e}const I=(0,n.L1)("Graphs",new Map)
class ${constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const i=this.identifiers.get(e)
return!!i&&void 0!==i[t]}getDefinition(e,t){let i=this._metaCache[e.type],s=i?.[t]
if(!s){const r=function(e,t,i){const s=e._definitionCache,r=e.store,n=e._potentialPolymorphicTypes,{type:c}=t
let d=a(s,c,i)
if(void 0!==d)return d
const h=r.schema.fields(t).get(i)
if(!h){if(n[c]){const e=Object.keys(n[c])
for(let t=0;t<e.length;t++){const r=a(s,e[t],i)
if(r)return l(s,c,i,r),r.rhs_modelNames.push(c),r}}return s[c][i]=null,null}const u=R(h)
let f,p
const y=u.type
if(null===u.inverseKey?f=null:(p=function(e,t,i){const s=e.schema.fields(t).get(i)
return s?s.options.inverse:null}(o(r),t,i),f=!p&&u.isPolymorphic&&u.inverseKey?{kind:"belongsTo",key:u.inverseKey,type:c,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:p?R(r.schema.fields({type:y}).get(p)):null),!f){p=b(c,i),f={kind:"implicit",key:p,type:c,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},v(u,f),v(f,u)
const e={lhs_key:`${c}:${i}`,lhs_modelNames:[c],lhs_baseModelName:c,lhs_relationshipName:i,lhs_definition:u,lhs_isPolymorphic:u.isPolymorphic,rhs_key:f.key,rhs_modelNames:[y],rhs_baseModelName:y,rhs_relationshipName:f.key,rhs_definition:f,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:c===y,isReflexive:!1}
return l(s,y,p,e),l(s,c,i,e),e}const m=f.type
if(d=a(s,m,i)||a(s,y,p),d)return(d.lhs_baseModelName===m?d.lhs_modelNames:d.rhs_modelNames).push(c),l(s,c,i,d),d
v(u,f),v(f,u)
const g=[c]
c!==m&&g.push(m)
const _=m===y,w={lhs_key:`${m}:${i}`,lhs_modelNames:g,lhs_baseModelName:m,lhs_relationshipName:i,lhs_definition:u,lhs_isPolymorphic:u.isPolymorphic,rhs_key:`${y}:${p}`,rhs_modelNames:[y],rhs_baseModelName:y,rhs_relationshipName:p,rhs_definition:f,rhs_isPolymorphic:f.isPolymorphic,hasInverse:!0,isSelfReferential:_,isReflexive:_&&i===p}
return l(s,m,i,w),l(s,c,i,w),l(s,y,p,w),w}(this,e,t)
s=function(e,t,i){const s=e.isSelfReferential
return 1==(i===e.lhs_relationshipName)&&(!0===s||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(r,e.type,t)?r.lhs_definition:r.rhs_definition,i=this._metaCache[e.type]=i||{},i[t]=s}return s}get(e,t){let i=this.identifiers.get(e)
i||(i=Object.create(null),this.identifiers.set(e,i))
let s=i[t]
if(!s){const r=this.getDefinition(e,t)
s="belongsTo"===r.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null,accessed:!1}}(r,e):"hasMany"===r.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!1,transactionRef:0,accessed:!1,_diff:void 0}}(r,e):i[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(r,e)}return s}getData(e,t){const i=this.get(e,t)
return d(i)?D(i,!1):O(i,!1)}getRemoteData(e,t){const i=this.get(e,t)
return d(i)?D(i,!0):O(i,!0)}registerPolymorphicType(e,t){const i=this._potentialPolymorphicTypes
let s=i[e]
s||(s=i[e]=Object.create(null)),s[t]=!0
let r=i[t]
r||(r=i[t]=Object.create(null)),r[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const i=Object.keys(t)
for(let s=0;s<i.length;s++){const r=t[i[s]]
if(void 0!==r&&r.definition.inverseIsAsync&&!c(e))return!1}return!0}unload(e,t){const i=this.identifiers.get(e)
i&&Object.keys(i).forEach((e=>{const s=i[e]
s&&(function(e,t,i){if(h(t))return void(e.isReleasable(t.identifier)&&L(e,t))
const{identifier:s}=t,{inverseKey:r}=t.definition
t.definition.inverseIsImplicit||f(t,(t=>function(e,t,i,s,r){if(!e.has(t,i))return
const n=e.get(t,i)
d(n)&&n.localState&&s!==n.localState||function(e,t,i,s){if(d(t)){const i=t.localState
!t.definition.isAsync||i&&c(i)?(t.localState===i&&null!==i&&(t.localState=null),t.remoteState===i&&null!==i&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!c(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,s||y(e,t)}else!t.definition.isAsync||i&&c(i)?p(e,t,i):t.state.hasDematerializedInverse=!0,s||y(e,t)}(e,n,s,r)}(e,t,r,s,i))),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,z(t),t.definition.isAsync||i||y(e,t))}(this,s,t),h(s)&&(i[e]=void 0))}))}_isDirty(e,t){const i=this.identifiers.get(e)
if(!i)return!1
const s=i[t]
if(!s)return!1
if(d(s))return s.localState!==s.remoteState
if(u(s)){const e=null!==s.additions&&s.additions.size>0,t=null!==s.removals&&s.removals.size>0
return e||t||B(s)}return!1}getChanged(e){const t=this.identifiers.get(e),i=new Map
if(!t)return i
const s=Object.keys(t)
for(let r=0;r<s.length;r++){const e=s[r],n=t[e]
if(n)if(d(n))n.localState!==n.remoteState&&i.set(e,{kind:"resource",remoteState:n.remoteState,localState:n.localState})
else if(u(n)){const t=null!==n.additions&&n.additions.size>0,s=null!==n.removals&&n.removals.size>0,r=B(n);(t||s||r)&&i.set(e,{kind:"collection",additions:new Set(n.additions),removals:new Set(n.removals),remoteState:n.remoteState,localState:O(n,!1).data||[],reordered:r})}}return i}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const i=Object.keys(t)
for(let s=0;s<i.length;s++)if(this._isDirty(e,i[s]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),i=[]
if(!t)return i
const s=Object.keys(t)
for(let r=0;r<s.length;r++){const n=s[r],o=t[n]
o&&this._isDirty(e,n)&&(q(this,e,n,o),i.push(n))}return i}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,i){const s=e[t.kind]=e[t.kind]||new Map
let r=s.get(t.inverseType)
r||(r=new Map,s.set(t.inverseType,r))
let n=r.get(i.field)
n||(n=[],r.set(i.field,n)),n.push(i)}(this._pushedUpdates,t,e)}this._willSyncRemote||(this._willSyncRemote=!0,o(this.store)._schedule("coalesce",(()=>this._flushRemoteQueue())))}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,i){Object.keys(i).forEach((s=>{const r=i[s]
r&&function(e,t,i){i.identifier=t.value,f(i,(s=>{const r=e.get(s,i.definition.inverseKey)
!function(e,t,i){d(t)?function(e,t,i){t.remoteState===i.record&&(t.remoteState=i.value),t.localState===i.record&&(t.localState=i.value,y(e,t))}(e,t,i):u(t)?function(e,t,i){if(t.remoteMembers.has(i.record)){t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)
const e=t.remoteState.indexOf(i.record)
t.remoteState.splice(e,1,i.value),t.isDirty=!0}t.additions?.has(i.record)&&(t.additions.delete(i.record),t.additions.add(i.value),t.isDirty=!0),t.removals?.has(i.record)&&(t.removals.delete(i.record),t.removals.add(i.value),t.isDirty=!0),t.isDirty&&y(e,t)}(e,t,i):function(e,t,i){t.remoteMembers.has(i.record)&&(t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)),t.localMembers.has(i.record)&&(t.localMembers.delete(i.record),t.localMembers.add(i.value))}(0,t,i)}(e,r,t)}))}(e,t,r)}))}(this,e,t)
break}case"updateRelationship":(function(e,t){const i=e.get(t.record,t.field),{definition:r,state:n,identifier:o}=i,{isCollection:a}=r,l=t.value
let c=!1,d=!1
if(l.meta&&(i.meta=l.meta),void 0!==l.data)if(c=!0,a){null===l.data&&(l.data=[])
const i=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:F(l.data,i)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:l.data?e.store.identifierCache.upgradeIdentifier(l.data):null},!0)
else!1!==r.isAsync||n.hasReceivedData||(c=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(l.links){const e=i.links
if(i.links=l.links,l.links.related){const t=N(l.links.related),i=e&&e.related?N(e.related):null,a=i?i.href:null
t&&t.href&&t.href!==a&&((0,s.warn)(`You pushed a record of type '${o.type}' with a relationship '${r.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,r.isAsync||n.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),d=!0)}}if(i.state.hasFailedLoadAttempt=!1,c){const e=null===l.data||Array.isArray(l.data)&&0===l.data.length
i.state.hasReceivedData=!0,i.state.isStale=!1,i.state.hasDematerializedInverse=!1,i.state.isEmpty=e}else d&&(a||!i.state.hasReceivedData||(h=i.transactionRef,u=e._transaction,0===h||null===u||h<u)?(i.state.isStale=!0,y(e,i)):i.state.isStale=!1)
var h,u})(this,e)
break
case"deleteRecord":{const t=e.record,i=this.identifiers.get(t)
i&&(Object.keys(i).forEach((e=>{const t=i[e]
t&&(i[e]=void 0,L(this,t))})),this.identifiers.delete(t))
break}case"replaceRelatedRecord":M(this,e,t)
break
case"addToRelatedRecords":(function(e,t,i){const{record:s,value:r,index:n}=t,o=e.get(s,t.field)
if(o.isDirty||o.localState||(o.localState=[]),Array.isArray(r))for(let a=0;a<r.length;a++)j(e,o,s,r[a],void 0!==n?n+a:n,i)
else j(e,o,s,r,n,i)
y(e,o)})(this,e,t)
break
case"removeFromRelatedRecords":(function(e,t,i){const{record:s,value:r}=t,n=e.get(s,t.field)
if(Array.isArray(r))for(let o=0;o<r.length;o++)P(e,n,s,r[o],i)
else P(e,n,s,r,i)
y(e,n)})(this,e,t)
break
case"replaceRelatedRecords":w(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,o(this.store)._schedule("sync",(()=>this._flushLocalQueue())))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,n.Yj)("transactionRef")??0
this._transaction=++e,(0,n.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:i,hasMany:s,belongsTo:r}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let n=0;n<i.length;n++)this.update(i[n],!0)
s&&x(this,s),r&&x(this,r),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach((e=>y(this,e)))}destroy(){I.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function x(e,t){t.forEach((t=>{t.forEach((t=>{!function(e,t){for(let i=0;i<t.length;i++)e.update(t[i],!0)}(e,t)}))}))}function z(e){d(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function L(e,t){const{identifier:i}=t,{inverseKey:s}=t.definition
f(t,(t=>{e.has(t,s)&&p(e,e.get(t,s),i)})),d(t)?(t.definition.isAsync||z(t),t.localState=null):u(t)?t.definition.isAsync||(z(t),y(e,t)):(t.remoteMembers.clear(),t.localMembers.clear())}function B(e){if(e.isDirty)return!1
const{remoteState:t,localState:i,additions:s,removals:r}=e
for(let n=0,o=0;n<t.length;n++){const e=t[n],a=i[o]
if(e!==a){if(r&&r.has(e))continue
if(s&&s.has(a)){o++,n--
continue}return!0}o++}return!1}function U(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function V(e){return I.get(U(e))}function H(e){const t=U(e)
let i=I.get(t)
return i||(i=new $(t),I.set(t,i),o(t)._graph=i),i}},193:(e,t,i)=>{function s(e){return e?.__esModule?e:{default:e,...e}}i.d(t,{A:()=>s})},241:(e,t,i)=>{i.d(t,{ZH:()=>s.h,_k:()=>s.f,z9:()=>s.j})
var s=i(262)},262:(e,t,i)=>{i.d(t,{f:()=>y,h:()=>g,j:()=>m})
const s={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class r{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const i=this.doWork(e)
return this.set(e,i),i}set(e,t){if(this.state.size===this.size)for(const[i]of this.state){this.state.delete(i)
break}this.state.set(e,t)}clear(){this.state.clear()}}const n=/[ _]/g,o=/([a-z\d])([A-Z])/g,a=new r((e=>e.replace(o,"$1_$2").toLowerCase().replace(n,"-"))),l=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,d=(new r((e=>e.replace(l,((e,t,i)=>i?i.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),/([a-z\d])([A-Z]+)/g),h=/\-|\s+/g,u=new r((e=>e.replace(d,"$1_$2").replace(h,"_").toLowerCase())),f=/(^|\/)([a-z\u00C0-\u024F])/g,p=new r((e=>e.replace(f,(e=>e.toUpperCase()))))
function y(e){return a.get(e)}function m(e){return u.get(e)}function g(e){return p.get(e)}const _=/^\s*$/,b=/([\w/-]+[_/\s-])([a-z\d]+$)/,v=/([\w/\s-]+)([A-Z][a-z\d]*$)/,R=/[A-Z][a-z\d]*$/,w=(new r((e=>function(e){return C(e,A,S)}(e))),new r((e=>function(e){return C(e,M,k)}(e))),new Set(s.uncountable)),k=new Map,S=new Map,A=new Map(s.singular.reverse()),M=new Map(s.plurals.reverse())
function C(e,t,i){if(!e||_.test(e))return e
const s=e.toLowerCase()
if(w.has(s))return e
const r=b.exec(e)||v.exec(e),n=r?r[2].toLowerCase():null
if(n&&w.has(n))return e
const o=R.test(e)
for(let[a,l]of i)if(s.match(a+"$"))return o&&n&&i.has(n)&&(l=g(l),a=g(a)),e.replace(new RegExp(a,"i"),l)
for(const[a,l]of t)if(a.test(e))return e.replace(a,l)
return e}s.irregularPairs.forEach((e=>{k.set(e[0].toLowerCase(),e[1]),k.set(e[1].toLowerCase(),e[1]),S.set(e[1].toLowerCase(),e[0]),S.set(e[0].toLowerCase(),e[0])}))},266:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h})
var s,r,n,o=i(81),a=i(735),l=i(336),c=i.n(l),d=i(666)
let h=(s=(0,a.inject)("page-title"),r=class extends(c()){constructor(e){super(e),(0,o.a)(this,"tokens",n,this),(0,o.b)(this,"tokenId",(0,d.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const i={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(i),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},n=(0,o._)(r.prototype,"tokens",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r)},274:(e,t,i)=>{i.d(t,{RX:()=>s.l,TP:()=>s.o,Wz:()=>s.t,YN:()=>s.v,di:()=>s.u,fV:()=>s.s,i:()=>s.q,o:()=>s.r,oX:()=>s.p,pG:()=>s.g,u2:()=>s.k})
var s=i(564)},299:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g})
var s,r,n,o,a,l=i(81),c=i(223),d=i(735),h=i.n(d),u=i(553),f=i(603)
const p="undefined"!=typeof FastBoot,y="routeDidChange",m=["separator","prepend","replace"]
let g=(s=(0,d.inject)("router"),r=(0,d.inject)("-document"),n=class extends(h()){constructor(e){if(super(e),(0,l.a)(this,"router",o,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const i=e.resolveRegistration("config:environment")
"object"==typeof(t=i)&&null!==t&&"pageTitle"in t&&m.forEach((e=>{if(!(0,u.isEmpty)(i.pageTitle[e])){const t=i.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(y,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,i=this._defaultConfig.prepend,s=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=i&&(e.prepend=i),null==e.replace&&null!=s&&(e.replace=s)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const i=this.tokens.indexOf(t),s=[...this.tokens],r=t.previous
return e.previous=r,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),s.splice(i,1,e),void(this.tokens=s)}const i=this.tokens.slice(-1)[0]
i&&(e.previous=i??null,i.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:i,previous:s}=t
i&&(i.previous=s),s&&(s.next=i),t.previous=t.next=null
const r=[...this.tokens]
r.splice(r.indexOf(t),1),this.tokens=r}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const i=[]
for(;t--;){const s=e[t]
if(s){if(s.replace){i.unshift(s)
break}i.unshift(s)}}return i}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,i=[]
const s=[i],r=[]
return e.forEach((e=>{if(e.front)r.unshift(e)
else if(e.prepend){t&&(t=!1,i=[],s.push(i))
const r=i[0]
r&&((e={...e}).separator=r.separator),i.unshift(e)}else t||(t=!0,i=[],s.push(i)),i.push(e)})),r.concat(s.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let i=0,s=e.length;i<s;i++){const r=e[i]
r&&r.title&&(t.push(r.title),i+1<s&&t.push(r.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(y,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
p?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){p||(0,f.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!p)return
const t=this.document.head,i=t.childNodes
for(let n=0;n<i.length;n++){const e=i[n]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const s=this.document.createElement("title"),r=this.document.createTextNode(e)
s.appendChild(r),t.appendChild(s)}titleDidUpdate(e){}},o=(0,l._)(n.prototype,"router",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(n.prototype,"document",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},375:(e,t,i)=>{i.d(t,{L1:()=>l,Yj:()=>c,dN:()=>u,dV:()=>d,ml:()=>f,vs:()=>h})
const s="@warp-drive/core-types",r=globalThis,n=r.__warpDrive_universalCache=r.__warpDrive_universalCache??{}
r[s]=r[s]??{__version:"0.0.2"}
const o=r[s],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function l(e,t){return t}function c(e){return a[`(transient) ${e}`]??null}function d(e,t){return a[`(transient) ${e}`]=t}function h(e,t){return t}function u(e){return n[`(transient) ${e}`]??null}function f(e,t){return n[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},388:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m})
var s=i(389),r=i(806),n=i.n(r),o=i(123),a=i(735),l=i(241),c=i(730)
const d=new WeakMap,h=a.service??a.inject,u=new WeakMap
function f(){const e={},t=[],i=(0,c.o)(this),s=this.store.schema.fields(i),r={name:"Attributes",properties:["id"],expand:!0},n=r.properties,o=[r]
for(const a of s.values())switch(a.kind){case"attribute":n.push(a.name)
break
case"belongsTo":case"hasMany":{let i=e[a.kind]
void 0===i&&(i=e[a.kind]=[],o.push({name:a.kind,properties:i,expand:!0})),i.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var p=new WeakMap
class y extends(n()){constructor(...e){var t,i
super(...e),t=p,i=void function(e,t){let i=function(e,t){var i
let s=e.prototype
for(;s;){let e=null==(i=d.get(s))?void 0:i.get(t)
if(e)return e
s=s.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,i)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:i}=this,s=function(e){let t=u.get(e)
return void 0===t&&(t=new Map,u.set(e,t)),t}(i),r=i.notifications.subscribe("resource",((r,o)=>{"added"===o&&this.watchTypeIfUnseen(i,s,r.type,e,t,n)})),n=[()=>{i.notifications.unsubscribe(r)}]
Object.keys(i.identifierCache._cache.resourcesByType).forEach((e=>{s.set(e,!1)})),s.forEach(((r,o)=>{this.watchTypeIfUnseen(i,s,o,e,t,n)}))
const o=()=>{n.forEach((e=>e())),s.forEach(((e,t)=>{s.set(t,!1)})),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,i,s,r,n){if(!0!==t.get(i)){const o=e.modelFor(i)
o.prototype._debugInfo=f
const a=this.wrapModelType(o,i)
n.push(this.observeModelType(i,r)),s([a]),t.set(i,!0)}}columnNameToDesc(e){return(0,l.ZH)((0,l.z9)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let i=0
return e.attributes.forEach(((e,s)=>{if(i++>this.attributeLimit)return!1
const r=this.columnNameToDesc(s)
t.push({name:s,desc:r})})),t}getRecords(e,t){if(arguments.length<2){const i=e._debugContainerKey
if(i){const e=i.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const i={id:e.id}
return e.eachAttribute((s=>{if(t++>this.attributeLimit)return!1
i[s]=e[s]})),i}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute((i=>{t.push(e[i])})),(0,s.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const i=[],s=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute((e=>s.push(e))),s.forEach((s=>{const r=()=>{t(this.wrapRecord(e))};(0,o.addObserver)(e,s,r),i.push((function(){(0,o.removeObserver)(e,s,r)}))})),function(){i.forEach((e=>e()))}}}!function(e,t,i){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let r of i)s=r(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let s=d.get(e)
s||(s=new Map,d.set(e,s)),s.set(t,i)}(e,t,s)}(y.prototype,"store",[h("store")])
const m=y},411:(e,t,i)=>{i.r(t),i.d(t,{ModuleRegistry:()=>m,default:()=>g})
class s{constructor(e,t,i){this.limit=e,this.func=t,this.store=i,this.size=0,this.misses=0,this.hits=0,this.store=i||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const r=/[ _]/g,n=new s(1e3,(e=>{return(t=e,p.get(t)).replace(r,"-")
var t})),o=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,l=/(^|\/|\.)([a-z])/g,c=new s(1e3,(e=>{const t=(e,t,i)=>i?`_${i.toUpperCase()}`:"",i=(e,t,i,s)=>t+(s?s.toUpperCase():""),s=e.split("/")
for(let r=0;r<s.length;r++)s[r]=s[r].replace(o,t).replace(a,i)
return s.join("/").replace(l,(e=>e.toUpperCase()))})),d=/([a-z\d])([A-Z]+)/g,h=/\-|\s+/g,u=new s(1e3,(e=>e.replace(d,"$1_$2").replace(h,"_").toLowerCase())),f=/([a-z\d])([A-Z])/g,p=new s(1e3,(e=>e.replace(f,"$1_$2").toLowerCase()))
function y(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class g{static create(e){return new this(e)}static withModules(e){var t
return y(t=class extends(this){},"explicitModules",e),t}constructor(e){if(y(this,"moduleBasedResolver",!0),y(this,"_deprecatedPodModulePrefix",!1),y(this,"_normalizeCache",Object.create(null)),y(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new m)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,i,s,r=e.split("@")
if(3===r.length){if(0===r[0].length){t=`@${r[1]}`
let e=r[2].split(":")
i=e[0],s=e[1]}else t=`@${r[1]}`,i=r[0].slice(0,-1),s=r[2]
"template:components"===i&&(s=`components/${s}`,i="template")}else if(2===r.length){let e=r[0].split(":")
if(2===e.length)0===e[1].length?(i=e[0],s=`@${r[1]}`):(t=e[1],i=e[0],s=r[1])
else{let e=r[1].split(":")
t=r[0],i=e[0],s=e[1]}"template"===i&&0===t.lastIndexOf("components/",0)&&(s=`components/${s}`,t=t.slice(11))}else r=e.split(":"),i=r[0],s=r[1]
let n=s,o=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:i}),type:i,fullNameWithoutType:n,name:s,root:o,resolveMethodName:"resolve"+(a=i,c.get(a))}
var a}resolveOther(e){_("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let s=this._extractDefaultExport(t,e)
if(void 0===s)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(s,e)&&(i=s,s={create:e=>"function"==typeof i.extend?i.extend(e):i}),s}var i}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,i=this.parseName(e),s=i.resolveMethodName
return"function"==typeof this[s]&&(t=this[s](i)),null==t&&(t=this.resolveOther(i)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(i=t[1].replace(/\./g,"/"),n.get(i))}return e
var i}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let i=t.fullNameWithoutType
return"template"===t.type&&(i=i.replace(/^components\//,"")),e+"/"+i+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,i=t+"/routes"
if(this._moduleRegistry.has(i)){let e=this._extractDefaultExport(i)
return _(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,i=this.moduleNameLookupPatterns
for(let s=0,r=i.length;s<r;s++){let r=i[s].call(this,e)
if(r&&(r=this.chooseModuleName(r)),r&&this._moduleRegistry.has(r)&&(t=r),t)return t}}chooseModuleName(e){let t=(i=e,u.get(i))
var i
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),i=Object.create(null)
for(let s=0,r=t.length;s<r;s++){let r=t[s],n=this.translateToContainerFullname(e,r)
n&&(i[n]=!0)}return i}translateToContainerFullname(e,t){let i=this.prefix({type:e}),s=i+"/",r="/"+e,n=t.indexOf(s),o=t.indexOf(r)
if(0===n&&o===t.length-r.length&&t.length>s.length+r.length)return e+":"+t.slice(n+s.length,o)
let a=i+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function _(e,t){if(!t)throw new Error(e)}y(g,"moduleBasedResolver",!0)},491:(e,t,i)=>{i.r(t),i.d(t,{FetchManager:()=>s.F,SaveOp:()=>s.S,Snapshot:()=>s.c,SnapshotRecordArray:()=>s.b,upgradeStore:()=>s.u})
var s=i(910)},564:(e,t,i)=>{i.d(t,{C:()=>We,S:()=>je,g:()=>m,k:()=>de,l:()=>Re,o:()=>K,p:()=>U,q:()=>G,r:()=>W,s:()=>Y,t:()=>L,u:()=>_,v:()=>Je})
var s=i(603),r=i(648),n=i(65),o=i(375),a=i(223),l=i(146)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const c="__$co"
var d=i(241),h=i(738),u=i(193)
function f(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function p(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function y(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e){{let t
return t=null==e||""===e?null:String(e),(0,s.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function g(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function _(e){{const t=(0,d._k)(e)
return(0,s.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function b(e){return Boolean(e&&"object"==typeof e)}function v(e,t){return Boolean(b(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function R(e){return v(e,"lid")}function w(e){return v(e,"id")||Boolean(b(e)&&"id"in e&&"number"==typeof e.id)}const k=(0,o.L1)("DOCUMENTS",new Set)
function S(e){return void 0!==e[c]}function A(e){return k.has(e)}const M="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,C=new Map
let E=0
function T(e,t,i){"record"===i&&!e.id&&w(t)&&function(e,t,i){let s=e.get(t.type)
s||(s=new Map,e.set(t.type,s)),s.set(i,t.lid)}(C,e,t.id)}function q(e,t){const i=w(e)?m(e.id):null
return{type:function(e){return v(e,"type")}(e)?_(e.type):t?t.type:null,id:i}}function O(e,t){if("record"===t){if(R(e))return e.lid
if(w(e)){const t=_(e.type),i=C.get(t)?.get(e.id)
return i||`@lid:${t}-${e.id}`}return M.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function D(...e){}function j(e,t,i){return e}class P{constructor(){this._generate=(0,o.Yj)("configuredGenerationMethod")||O,this._update=(0,o.Yj)("configuredUpdateMethod")||T,this._forget=(0,o.Yj)("configuredForgetMethod")||D,this._reset=(0,o.Yj)("configuredResetMethod")||D,this._merge=j,this._keyInfoForResource=(0,o.Yj)("configuredKeyInfoMethod")||q,this._id=E++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||j}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(S(e))return e
const i=this._generate(e,"record")
let s=F(this._cache,i)
if(null!==s)return s
if(0!==t){if(2===t)e.lid=i,e[c]=this._id,s=N(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=i,t[c]=this._id,s=N(t)}return I(this._cache,s),s}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let i=this._cache.documents.get(t)
return void 0===i&&(i={lid:t},k.add(i),this._cache.documents.set(t,i)),i}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),i=N({id:e.id||null,type:e.type,lid:t,[c]:this._id})
return I(this._cache,i),i}updateRecordIdentifier(e,t){let i=this.getOrCreateRecordIdentifier(e)
const s=this._keyInfoForResource(t,i)
let r=function(e,t,i,s){const r=t.id,{id:n,type:o,lid:a}=i,l=e.resourcesByType[i.type]
if(null!==n&&n!==r&&null!==r){const e=l&&l.id.get(r)
return void 0!==e&&e}{const i=t.type
if(null!==n&&n===r&&i===o&&R(s)&&s.lid!==a)return F(e,s.lid)||!1
if(null!==n&&n===r&&i&&i!==o&&R(s)&&s.lid===a){const t=e.resourcesByType[i],s=t&&t.id.get(r)
return void 0!==s&&s}}return!1}(this._cache,s,i,t)
const n=R(t)
if(r||i.type!==s.type&&(n&&delete t.lid,r=this.getOrCreateRecordIdentifier(t)),r){const e=i
i=this._mergeRecordIdentifiers(s,e,r,t),n&&(t.lid=i.lid)}const o=i.id;(function(e,t,i,s){s(e,i,"record"),void 0!==i.id&&(e.id=m(i.id))})(i,0,t,this._update)
const a=i.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[i.type]
e.id.set(a,i),null!==o&&e.id.delete(o)}return i}_mergeRecordIdentifiers(e,t,i,s){const r=this._merge(t,i,s),n=r===t?i:t,o=this._cache.polymorphicLidBackMap.get(n.lid)
o&&this._cache.polymorphicLidBackMap.delete(n.lid),this.forgetRecordIdentifier(n),this._cache.resources.set(n.lid,r)
const a=this._cache.polymorphicLidBackMap.get(r.lid)??[]
return a.push(n.lid),o&&o.forEach((e=>{a.push(e),this._cache.resources.set(e,r)})),this._cache.polymorphicLidBackMap.set(r.lid,a),r}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),i=this._cache.resourcesByType[t.type]
null!==t.id&&i.id.delete(t.id),this._cache.resources.delete(t.lid),i.lid.delete(t.lid)
const s=this._cache.polymorphicLidBackMap.get(t.lid)
s&&(s.forEach((e=>{this._cache.resources.delete(e)})),this._cache.polymorphicLidBackMap.delete(t.lid)),t[c]=void 0,this._forget(t,"record")}destroy(){C.clear(),this._cache.documents.forEach((e=>{k.delete(e)})),this._reset()}}function N(e,t,i){return e}function F(e,t,i){return e.resources.get(t)||null}function I(e,t){e.resources.set(t.lid,t)
let i=e.resourcesByType[t.type]
i||(i={lid:new Map,id:new Map},e.resourcesByType[t.type]=i),i.lid.set(t.lid,t),t.id&&i.id.set(t.id,t)}class ${constructor(e,t){y(this,"___token",void 0),y(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then((e=>this.store.push(e)))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,l.sg)($.prototype,"_ref")
class x{constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let i=this._pendingNotifies.get(e)
i||(i=new Set,this._pendingNotifies.set(e,i)),i.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",(()=>this._flushNotifications())):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach(((e,t)=>{e.forEach((e=>{this._store.notifications.notify(t,"relationships",e)}))}))}notifyChange(e,t,i){"relationships"===t&&i?this._scheduleNotification(e,i):this._store.notifications.notify(e,t,i)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}x.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const z=(0,o.L1)("CacheForIdentifierCache",new Map)
function L(e,t){z.set(e,t)}function B(e){z.delete(e)}function U(e){return z.has(e)?z.get(e):null}const V=(0,o.L1)("RecordCache",new Map)
function H(e){return V.get(e)}function W(e){return V.get(e)}function K(e,t){V.set(e,t)}const G=(0,o.L1)("StoreMap",new Map)
function Y(e){return G.get(e)}class J{constructor(e){y(this,"__instances",{record:new Map,reference:new WeakMap}),this.store=e,this._storeWrapper=new x(this.store),e.identifierCache.__configureMerge(((e,t,i)=>{let s=e
e.id!==t.id?s="id"in i&&e.id===i.id?e:t:e.type!==t.type&&(s="type"in i&&e.type===i.type?e:t)
const r=e===s?t:e,n=this.__instances.record.has(s),o=this.__instances.record.has(r)
if(n&&o&&"id"in i)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(i.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:r,value:s}),this.unloadRecord(r),s}))}peek(e){return this.__instances.record.get(e)}getRecord(e,t){let i=this.__instances.record.get(e)
if(!i){const s=this.store.cache
L(e,s),i=this.store.instantiateRecord(e,t||{}),K(i,e),L(i,s),G.set(i,this.store),this.__instances.record.set(e,i)}return i}getReference(e){const t=this.__instances.reference
let i=t.get(e)
return i||(i=new $(this.store,e),t.set(e,i)),i}recordIsLoaded(e,t=!1){const i=this.cache
if(!i)return!1
const s=i.isNew(e),r=i.isEmpty(e)
return s?!i.isDeleted(e):!(t&&i.isDeletionCommitted(e)||r)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),B(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join((()=>{const t=this.__instances.record.get(e),i=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),G.delete(t),V.delete(t),B(t)),i?(i.unloadRecord(e),B(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)}))}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach((e=>{this.unloadRecord(e)}))
else{const i=t.resourcesByType,s=i[e]?.lid
s&&s.forEach((e=>{this.unloadRecord(e)}))}}setRecordId(e,t){const{type:i,lid:r}=e,n=e.id
null===n||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:i,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:i,id:t}),this.store.notifications.notify(e,"identity")):(0,s.warn)(`Your ${i} record was saved to the server, but the response does not have an id.`,!(null!==n&&null===t))}}function Z(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:g(e)}:W(e)}const X=(0,o.L1)("AvailableShims",new WeakMap)
class Q{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t.kind)})),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"===t.kind&&e.set(i,t)})),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t)})),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,s)=>{"attribute"===i.kind&&e.call(t,s,i)}))}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,s)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,s,i)}))}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,s)=>{if("attribute"===i.kind){const r=i.type
r&&e.call(t,s,r)}}))}}function ee(e){return"added"===e||"state"===e||"updated"===e||"removed"===e||"invalidated"===e}function te(){return!!a._backburner.currentInstance&&!0!==a._backburner._autorun}class ie{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map}subscribe(e,t){let i=this._cache.get(e)
return t.for=e,i||(i=[],this._cache.set(e,i)),i.push(t),t}unsubscribe(e){this.isDestroyed||function(e,t){const i=e.for
if(i){const s=t.get(i)
if(!s)return
const r=s.indexOf(e)
if(-1===r)return
s.splice(r,1)}}(e,this._cache)}notify(e,t,i){if(!S(e)&&!A(e))return!1
const s=Boolean(this._cache.get(e)?.length)
if(ee(t)||s){let s=this._buffered.get(e)
s||(s=[],this._buffered.set(e,s)),s.push([t,i]),this._scheduleNotify()}return s}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
return!(this._hasFlush&&!1!==e&&!te()||(e&&!te()?(this._hasFlush=!0,1):(this._flush(),0)))}_flush(){const e=this._buffered
e.size&&(this._buffered=new Map,e.forEach(((e,t)=>{e.forEach((e=>{this._flushNotification(t,e[0],e[1])}))}))),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,i){if(ee(t)){const i=this._cache.get(A(e)?"document":"resource")
i&&i.forEach((i=>{i(e,t)}))}const s=this._cache.get(e)
return!(!s||!s.length||(s.forEach((s=>{s(e,t,i)})),0))}destroy(){this.isDestroyed=!0,this._cache.clear()}}const se=Proxy,re=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ne=new Set(["push","pop","unshift","shift","splice","sort"]),oe=new Set(["[]","length","links","meta"])
function ae(e){return re.has(e)}function le(e,t){return t in e}const ce=(0,o.L1)("#signal",Symbol("#signal")),de=(0,o.L1)("#source",Symbol("#source")),he=(0,o.L1)("#update",Symbol("#update")),ue=(0,o.L1)("#notify",Symbol("#notify")),fe=(0,o.L1)("IS_COLLECTION",Symbol.for("Collection"))
function pe(e){(0,l.RH)(e[ce])}function ye(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class me{[ue](){pe(this)}destroy(e){this.isDestroying=!e,this[de].length=0,this[ue](),this.isDestroyed=!e}get length(){return this[de].length}set length(e){this[de].length=e}constructor(e){y(this,"isLoaded",!0),y(this,"isDestroying",!1),y(this,"isDestroyed",!1),y(this,"_updatingPromise",null),y(this,fe,!0),y(this,de,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this[de]=e.identifiers,this[ce]=(0,l.n5)(this,"length")
const i=e.store,s=new Map,r=this[ce],n={links:e.links||null,meta:e.meta||null}
let o=!1
const a=new se(this[de],{get(a,c,d){const h=ye(c)
if(r.shouldReset&&(null!==h||oe.has(c)||ae(c))&&(e.manager._syncArray(d),r.t=!1,r.shouldReset=!1),null!==h){const e=a[h]
return o||(0,l.B1)(r),e&&i._instanceCache.getRecord(e)}if("meta"===c)return(0,l.B1)(r),n.meta
if("links"===c)return(0,l.B1)(r),n.links
if("[]"===c)return(0,l.B1)(r),d
if(ae(c)){let e=s.get(c)
return void 0===e&&(e="forEach"===c?function(){(0,l.B1)(r),o=!0
const e=function(e,t,i,s,r){void 0===r&&(r=null)
const n=(t=t.slice()).length
for(let o=0;o<n;o++)s.call(r,i._instanceCache.getRecord(t[o]),o,e)
return e}(d,a,i,arguments[0],arguments[1])
return o=!1,e}:function(){(0,l.B1)(r),o=!0
const e=Reflect.apply(a[c],d,arguments)
return o=!1,e},s.set(c,e)),e}if(function(e){return ne.has(e)}(c)){let i=s.get(c)
return void 0===i&&(i=function(){if(!e.allowMutation)return
const i=Array.prototype.slice.call(arguments)
o=!0
const s=t[he](a,d,c,i,r)
return o=!1,s},s.set(c,i)),i}if(le(t,c)){if(c===ue||c===ce||c===de)return t[c]
let e=s.get(c)
if(e)return e
const i=t[c]
return"function"==typeof i?(e=function(){return(0,l.B1)(r),Reflect.apply(i,d,arguments)},s.set(c,e),e):((0,l.B1)(r),i)}return a[c]},set(i,s,a,l){if("length"===s){if(!o&&0===a)return o=!0,t[he](i,l,"length 0",[],r),o=!1,!0
if(o)return Reflect.set(i,s,a)}if("links"===s)return n.links=a||null,!0
if("meta"===s)return n.meta=a||null,!0
const c=ye(s)
if(null===c||c>i.length){if(null!==c&&o){const e=W(a)
return i[c]=e,!0}return!!le(t,s)&&(t[s]=a,!0)}if(!e.allowMutation)return!1
const d=i[c],h=(u=a)?W(u):null
var u
return o?i[c]=h:t[he](i,l,"replace cell",[c,d,h],r),!0},deleteProperty:(e,t)=>!!o&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Array.prototype})
return(0,l.zs)(a,r),this[ue]=this[ue].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally((()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)})),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map((e=>this.store.saveRecord(e)))).then((()=>this))}}!function(e,t,i){let s={...Object.getOwnPropertyDescriptor(e,t)}
for(let r of i)s=r(e,t,s)||s
void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(e):void 0,s.initializer=void 0),Object.defineProperty(e,t,s)}(me.prototype,"length",[h.Vv])
const ge={enumerable:!0,configurable:!1,get:function(){return this}};(0,h.Vv)(ge),Object.defineProperty(me.prototype,"[]",ge),(0,l.sg)(me.prototype,"isUpdating",!1)
class _e extends me{constructor(e){super(e),y(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}_e.prototype.query=null
const be=(0,o.L1)("FAKE_ARR",{}),ve=1200
function Re(e,t){let i=0
const s=t.length
for(;s-i>ve;)e.push.apply(e,t.slice(i,i+ve)),i+=ve
e.push.apply(e,t.slice(i))}class we{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("resource",((e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)}))}_syncArray(e){const t=this._pending.get(e)
!t||this.isDestroying||this.isDestroyed||(function(e,t,i){const s=e[de],r=[],n=[]
t.forEach(((e,t)=>{if("add"===e){if(i.has(t))return
r.push(t),i.add(t)}else i.has(t)&&(n.push(t),i.delete(t))})),n.length&&(n.length===s.length?s.length=0:n.forEach((e=>{const t=s.indexOf(e);-1!==t&&(s.splice(t,1),i.delete(e))}))),r.length&&Re(s,r)}(e,t,this._set.get(e)),this._pending.delete(e))}mutate(e){this.store.cache.mutate(e)}liveArrayFor(e){let t=this._live.get(e)
const i=[],s=this._staged.get(e)
return s&&(s.forEach(((e,t)=>{"add"===e&&i.push(t)})),this._staged.delete(e)),t||(t=new me({type:e,identifiers:i,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(i))),t}createArray(e){const t={type:e.type,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},i=new _e(t)
return this._managed.add(i),this._set.set(i,new Set(t.identifiers||[])),e.identifiers&&ke(this._identifiers,i,e.identifiers),i}dirtyArray(e,t){if(e===be)return
const i=e[ce]
i.shouldReset?t>0&&!i.t&&(0,l.Fe)(e[ue]):(i.shouldReset=!0,(0,l.Fe)(e[ue]))}_getPendingFor(e,t,i){if(this.isDestroying||this.isDestroyed)return
const s=this._live.get(e.type),r=this._pending,n=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach((e=>{let t=r.get(e)
t||(t=new Map,r.set(e,t)),n.set(e,t)}))}if(s&&0===s[de].length&&i){const e=r.get(s)
if(!e||0===e.size)return n}if(s){let e=r.get(s)
e||(e=new Map,r.set(s,e)),n.set(s,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),n.set(be,t)}return n}populateManagedArray(e,t,i){this._pending.delete(e)
const s=e[de],r=s.slice()
s.length=0,Re(s,t),this._set.set(e,new Set(t)),pe(e),e.meta=i.meta||null,e.links=i.links||null,e.isLoaded=!0,function(e,t,i){for(let s=0;s<i.length;s++)Se(e,t,i[s])}(this._identifiers,e,r),ke(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach(((t,i)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(i,t.size))}))}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach(((t,i)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(i,t.size))}))}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach((t=>t.destroy(e))),this._managed.forEach((t=>t.destroy(e))),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach((e=>e.clear())),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function ke(e,t,i){for(let s=0;s<i.length;s++){const r=i[s]
let n=e.get(r)
n||(n=new Set,e.set(r,n)),n.add(t)}}function Se(e,t,i){const s=e.get(i)
s&&s.delete(t)}const Ae=(0,o.L1)("Touching",Symbol("touching")),Me=(0,o.L1)("RequestPromise",Symbol("promise")),Ce=[]
class Ee{constructor(e){y(this,"_pending",new Map),y(this,"_done",new Map),y(this,"_subscriptions",new Map),y(this,"_toFlush",[]),y(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const i=t.data[0]
if("recordIdentifier"in i){const s=i.recordIdentifier,r="saveRecord"===i.op?"mutation":"query"
this._pending.has(s)||this._pending.set(s,[])
const n={state:"pending",request:t,type:r}
return n[Ae]=[i.recordIdentifier],n[Me]=e,this._pending.get(s).push(n),this._triggerSubscriptions(n),e.then((e=>{this._dequeue(s,n)
const i={state:"fulfilled",request:t,type:r,response:{data:e}}
return i[Ae]=n[Ae],this._addDone(i),this._triggerSubscriptions(i),e}),(e=>{this._dequeue(s,n)
const i={state:"rejected",request:t,type:r,response:{data:e}}
throw i[Ae]=n[Ae],this._addDone(i),this._triggerSubscriptions(i),e}))}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush((()=>{this._flush()}))):this._flushRequest(e)}_flush(){this._toFlush.forEach((e=>{this._flushRequest(e)})),this._toFlush=[]}_flushRequest(e){e[Ae].forEach((t=>{const i=this._subscriptions.get(t)
i&&i.forEach((t=>t(e)))}))}_dequeue(e,t){const i=this._pending.get(e)
this._pending.set(e,i.filter((e=>e!==t)))}_addDone(e){e[Ae].forEach((t=>{const i=e.request.data[0].op
let s=this._done.get(t)
s&&(s=s.filter((e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==i}))),s=s||[],s.push(e),this._done.set(t,s)}))}subscribeForRecord(e,t){let i=this._subscriptions.get(e)
i||(i=[],this._subscriptions.set(e,i)),i.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||Ce}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function Te(e){return Boolean(e&&"string"==typeof e)}function qe(e,t,i){if("object"==typeof e&&null!==e){const t=e
return S(t)||"id"in t&&(t.id=m(t.id)),t}{const s=m(t)
if(!Te(s)){if(Te(i))return{lid:i}
throw new Error("Expected either id or lid to be a valid string")}return Te(i)?{type:e,id:s,lid:i}:{type:e,id:s}}}globalThis.setWarpDriveLogging=n.q,globalThis.getWarpDriveRuntimeConfig=n.P
const Oe=(0,u.A)(i(471)),De=Oe.default?Oe.default:Oe
De!==class{constructor(e){}}&&(0,s.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
class je extends De{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new P,this.notifications=new ie(this),this.recordArrayManager=new we({store:this}),this._requestCache=new Ee(this),this._instanceCache=new J(this),this._documentCache=new Map,this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[r._q]:e[r._q]??!0}
if(e.records){const i=this.identifierCache
t.records=e.records.map((e=>i.getOrCreateRecordIdentifier(e)))}const i=Object.assign({},e,t),s=this.requestManager.request(i)
return s.onFinalize((()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()})),s}modelFor(e){return function(e,t){let i=X.get(e)
i||(i=Object.create(null),X.set(e,i))
let s=i[t]
return void 0===s&&(s=i[t]=new Q(e,t)),s}(this,e)}createRecord(e,t){let i
return this._join((()=>{const s=_(e),r={...t}
let n=null
if(null===r.id||void 0===r.id){const e=this.adapterFor?.(s,!0)
n=e&&e.generateIdForRecord?r.id=m(e.generateIdForRecord(this,s,r)):r.id=null}else n=r.id=m(r.id)
const o={type:s,id:n}
o.id&&this.identifierCache.peekRecordIdentifier(o)
const a=this.identifierCache.createIdentifierForNewRecord(o),l=this.cache,c=function(e,t,i){if(void 0!==i){const{type:s}=t,r=e.schema.fields({type:s})
if(r.size){const e=Object.keys(i)
for(let t=0;t<e.length;t++){const s=e[t],n=r.get(s)
n&&("hasMany"===n.kind?i[s]=i[s].map((e=>Ne(e))):"belongsTo"===n.kind&&(i[s]=Ne(i[s])))}}}return i}(this,a,r),d=l.clientDidCreate(a,c)
i=this._instanceCache.getRecord(a,d)})),i}deleteRecord(e){const t=H(e),i=this.cache
this._join((()=>{i.setIsDeleted(t,!0),i.isNew(t)&&this._instanceCache.unloadRecord(t)}))}unloadRecord(e){const t=H(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,i){Pe(e)?i=t:e=qe(_(e),g(t))
const s=this.identifierCache.getOrCreateRecordIdentifier(e)
return(i=i||{}).preload&&(this._instanceCache.recordIsLoaded(s)||(i.reload=!0),this._join((()=>{!function(e,t,i){const s={},r=e.schema.fields(t)
Object.keys(i).forEach((e=>{const t=i[e],n=r.get(e)
!n||"hasMany"!==n.kind&&"belongsTo"!==n.kind?(s.attributes||(s.attributes={}),s.attributes[e]=t):(s.relationships||(s.relationships={}),s.relationships[e]=function(e,t){const i=e.type
return"hasMany"===e.kind?{data:t.map((e=>Z(e,i)))}:{data:t?Z(t,i):null}}(n,t))}))
const n=e.cache,o=Boolean(e._instanceCache.peek(t))
n.upsert(t,s,o)}(this,s,i.preload)}))),this.request({op:"findRecord",data:{record:s,options:i},cacheOptions:{[r.ER]:!0}}).then((e=>e.content))}getReference(e,t){let i
i=1===arguments.length&&Pe(e)?e:qe(_(e),g(t))
const s=this.identifierCache.getOrCreateRecordIdentifier(i)
return this._instanceCache.getReference(s)}peekRecord(e,t){if(1===arguments.length&&Pe(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const i={type:_(e),id:g(t)},s=this.identifierCache.peekRecordIdentifier(i)
return s&&this._instanceCache.recordIsLoaded(s)?this._instanceCache.getRecord(s):null}query(e,t,i={}){return this.request({op:"query",data:{type:_(e),query:t,options:i},cacheOptions:{[r.ER]:!0}}).then((e=>e.content))}queryRecord(e,t,i){return this.request({op:"queryRecord",data:{type:_(e),query:t,options:i||{}},cacheOptions:{[r.ER]:!0}}).then((e=>e.content))}findAll(e,t={}){return this.request({op:"findAll",data:{type:_(e),options:t||{}},cacheOptions:{[r.ER]:!0}}).then((e=>e.content))}peekAll(e){return this.recordArrayManager.liveArrayFor(_(e))}unloadAll(e){this._join((()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(_(e))}))}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map((e=>this._instanceCache.getRecord(e))):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let i
return t&&(this._enableAsyncFlush=!0),this._join((()=>{i=this.cache.put({content:e})})),this._enableAsyncFlush=null,"data"in i?i.data:null}saveRecord(e,t={}){const i=W(e),s=this.cache
if(!i)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const i=e.cache
return!i||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,i)}(this._instanceCache,i))return Promise.resolve(e)
t||(t={})
let n="updateRecord"
s.isNew(i)?n="createRecord":s.isDeleted(i)&&(n="deleteRecord")
const o={op:n,data:{options:t,record:i},records:[i],cacheOptions:{[r.ER]:!0}}
return this.request(o).then((e=>e.content))}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function Pe(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function Ne(e){return e?W(e):null}function Fe(e){return"string"==typeof e?e:e.href}je.prototype.getSchemaDefinitionService=function(){return(0,s.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema},je.prototype.registerSchemaDefinitionService=function(e){(0,s.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e},je.prototype.registerSchema=function(e){(0,s.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e}
var Ie=new WeakMap,$e=new WeakSet
class xe{constructor(e,t){var i
f(this,i=$e),i.add(this),function(e,t){f(e,t),t.set(e,void 0)}(this,Ie),function(e,t,i){e.set(p(e,t),i)}(Ie,this,e),this.identifier=t}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,p($e,this,ze).call(this,this.links.related?"related":"self",e)}next(e={}){return p($e,this,ze).call(this,"next",e)}prev(e={}){return p($e,this,ze).call(this,"prev",e)}first(e={}){return p($e,this,ze).call(this,"first",e)}last(e={}){return p($e,this,ze).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function ze(e,t){const i=this.links?.[e]
return i?(t.method=t.method||"GET",Object.assign(t,{url:Fe(i)}),(await(s=Ie,s.get(p(s,this))).request(t)).content):null
var s}(0,l.sg)(xe.prototype,"data"),(0,l.sg)(xe.prototype,"links"),(0,l.sg)(xe.prototype,"errors"),(0,l.sg)(xe.prototype,"meta")
const Le=new Set(["createRecord","updateRecord","deleteRecord"])
function Be(e){return Boolean(e.op&&Le.has(e.op))}function Ue(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta),"errors"in t&&(e.errors=t.errors)}function Ve(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),i=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return i.stack=e.stack,i.error=e.error,Object.assign(i,e),i}function He(e,t,i){if(e){const i=t.get(e)
if(i)return i.priority}return i}const We={request(e,t){if(!e.request.store||e.request.cacheOptions?.[r.ER])return t(e.request)
const{store:i}=e.request,s=i.identifierCache.getOrCreateDocumentIdentifier(e.request)
s&&e.setIdentifier(s)
const n=i.requestManager._deduped,o=s&&n.get(s),a=s?i.cache.peekRequest(s):null
if(function(e,t,i,s){const{cacheOptions:r}=t
return t.op&&Le.has(t.op)||r?.reload||!i||!(!e.lifetimes||!s)&&e.lifetimes.isHardExpired(s,e)}(i,e.request,!!a,s)){if(o)return o.priority={blocking:!0},o.promise
let r=Ye(t,e,s,{blocking:!0})
return s&&(r=r.finally((()=>{n.delete(s),i.notifications.notify(s,"state")})),n.set(s,{priority:{blocking:!0},promise:r}),i.notifications.notify(s,"state")),r}if(function(e,t,i,s){const{cacheOptions:r}=t
return r?.backgroundReload||!(!e.lifetimes||!s)&&e.lifetimes.isSoftExpired(s,e)}(i,e.request,0,s)){let r=o?.promise||Ye(t,e,s,{blocking:!1})
s&&!o&&(r=r.finally((()=>{n.delete(s),i.notifications.notify(s,"state")})),n.set(s,{priority:{blocking:!1},promise:r}),i.notifications.notify(s,"state")),i.requestManager._pending.set(e.id,r)}const l=e.request[r._q]||!1
if(e.setResponse(a.response),"error"in a){const e=l?Ge(i,{shouldHydrate:l,identifier:s},a.content,!0):a.content,t=Ve(a)
throw t.content=e,t}return l?Ke(i,e.request,{shouldHydrate:l,identifier:s},a.content,!0):a.content}}
function Ke(e,t,i,s,r){const{identifier:n}=i
if(!s)return s
if(Array.isArray(s.data)){const{recordArrayManager:o}=e
if(!n){if(!i.shouldHydrate)return s
const r=o.createArray({type:t.url,identifiers:s.data,doc:s,query:t}),n=new xe(e,null)
return n.data=r,n.meta=s.meta,n.links=s.links,n}let a=o._keyedArrays.get(n.lid)
if(a){const t=e._documentCache.get(n)
return r||(o.populateManagedArray(a,s.data,s),t.data=a,t.meta=s.meta,t.links=s.links),i.shouldHydrate?t:s}{a=o.createArray({type:n.lid,identifiers:s.data,doc:s}),o._keyedArrays.set(n.lid,a)
const t=new xe(e,n)
return t.data=a,t.meta=s.meta,t.links=s.links,e._documentCache.set(n,t),i.shouldHydrate?t:s}}{if(!n&&!i.shouldHydrate)return s
const t=s.data?e.peekRecord(s.data):null
let o
return n&&(o=e._documentCache.get(n)),o?r||(o.data=t,Ue(o,s)):(o=new xe(e,n),o.data=t,Ue(o,s),n&&e._documentCache.set(n,o)),i.shouldHydrate?o:s}}function Ge(e,t,i,s){const{identifier:r}=t
if(!function(e){return"errors"in e}(i)||!r&&!t.shouldHydrate)return i
let n
return r&&(n=e._documentCache.get(r)),n?s||(n.data=void 0,Ue(n,i)):(n=new xe(e,r),Ue(n,i),r&&e._documentCache.set(r,n)),t.shouldHydrate?n:i}function Ye(e,t,i,s){const{store:n}=t.request,o={shouldHydrate:t.request[r._q]||!1,identifier:i,priority:s}
let a=!1
if(Be(t.request)){a=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&n.cache.willCommit(e,t)}n.lifetimes?.willRequest&&n.lifetimes.willRequest(t.request,i,n)
const l=e(t.request).then((e=>function(e,t,i,s){const{request:r}=t
let n
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join((()=>{n=function(e,t,i,s){let r=null
if(Be(t)){const i=t.data?.record||t.records?.[0]
i?r=e.cache.didCommit(i,s):function(e){return!Be(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(s)&&(r=e.cache.put(s))}else r=e.cache.put(s)
return Ke(e,t,i,r,!1)}(e,r,i,s)})),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,s.response,i.identifier,e),He(i.identifier,e.requestManager._deduped,i.priority).blocking)return n
e.notifications._flush()}(n,t,o,e)),(e=>function(e,t,i,s){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw s
let r
if(e._enableAsyncFlush=!0,e._join((()=>{r=function(e,t,i,s){let r
if(!Be(t.request))return r=e.cache.put(s),Ge(e,i,r,!1)
{const i=s&&s.content&&"object"==typeof s.content&&"errors"in s.content&&Array.isArray(s.content.errors)?s.content.errors:void 0,r=t.request.data?.record||t.request.records?.[0]
e.cache.commitWasRejected(r,i)}}(e,t,i,s)})),e._enableAsyncFlush=null,i.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,s.response,i.identifier,e),Be(t.request))throw s
if(He(i.identifier,e.requestManager._deduped,i.priority).blocking){const e=Ve(s)
throw e.content=r,e}e.notifications._flush()}(n,t,o,e)))
if(!a)return l
const c=t.request.data?.record||t.request.records?.[0]
return n._requestCache._enqueue(l,{data:[{op:"saveRecord",recordIdentifier:c,options:void 0}]})}class Je extends me{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[he](e,t,i,s,r){switch(i){case"length 0":return Reflect.set(e,"length",0),it(this,[],r),!0
case"replace cell":{const[t,i,n]=s
return e[t]=n,function(e,t,i){st(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},i)}(this,{value:n,prior:i,index:t},r),!0}case"push":{const n=Ze(s)
Qe(this,e,(e=>e.push(...n)),"Cannot push duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
s.forEach((e=>{const t=W(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&et(this,{value:Ze(a)},r),l}}case"pop":{const n=Reflect.apply(e[i],t,s)
return n&&tt(this,{value:W(n)},r),n}case"unshift":{const n=Ze(s)
Qe(this,e,(e=>e.unshift(...n)),"Cannot unshift duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
s.forEach((e=>{const t=W(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&et(this,{value:Ze(a),index:0},r),l}}case"shift":{const n=Reflect.apply(e[i],t,s)
return n&&tt(this,{value:W(n),index:0},r),n}case"sort":{const n=Reflect.apply(e[i],t,s)
return function(e,t,i){st(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},i)}(this,n.map(W),r),n}case"splice":{const[n,o,...a]=s
if(0===n&&o===this[de].length){const s=Ze(a)
Qe(this,e,(e=>e.splice(n,o,...s)),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const s=new Set(a),l=Array.from(s),c=[n,o].concat(l),d=Reflect.apply(e[i],t,c)
return it(this,Ze(l),r),d}}const l=Ze(a)
Qe(this,e,(e=>e.splice(n,o,...l)),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const s=e.slice()
s.splice(n,o)
const l=new Set(s),c=[]
a.forEach((e=>{const t=W(e)
l.has(t)||(l.add(t),c.push(e))}))
const d=[n,o,...c],h=Reflect.apply(e[i],t,d)
return o>0&&tt(this,{value:h.map(W),index:n},r),c.length>0&&et(this,{value:Ze(c),index:n},r),h}}}}notify(){this[ce].shouldReset=!0,pe(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,i=t.createRecord(this.modelName,e)
return this.push(i),i}destroy(){super.destroy(!1)}}function Ze(e){return e.map(Xe)}function Xe(e){return W(e)}function Qe(e,t,i,r){const n=t.slice()
if(i(n),n.length!==new Set(n).size){const t=n.filter(((e,t)=>n.indexOf(e)!==t));(0,s.deprecate)(`${r} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map((e=>S(e)?e.lid:W(e).lid)).sort(((e,t)=>e.localeCompare(t))).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"4.13"}})}}function et(e,t,i){st(e,{op:"addToRelatedRecords",record:e.identifier,field:e.key,...t},i)}function tt(e,t,i){st(e,{op:"removeFromRelatedRecords",record:e.identifier,field:e.key,...t},i)}function it(e,t,i){st(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},i)}function st(e,t,i){e._manager.mutate(t),(0,l.RH)(i)}Je.prototype.isAsync=!1,Je.prototype.isPolymorphic=!1,Je.prototype.identifier=null,Je.prototype.cache=null,Je.prototype._inverseIsAsync=!1,Je.prototype.key="",Je.prototype.DEPRECATED_CLASS_NAME="ManyArray"},648:(e,t,i)=>{i.d(t,{ER:()=>r,J6:()=>o,_q:()=>n,k0:()=>a})
var s=i(375)
const r=(0,s.vs)("SkipCache",Symbol.for("wd:skip-cache")),n=(0,s.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,s.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,s.L1)("DOC",Symbol("DOC"))},678:(e,t,i)=>{i.r(t),i(603),i(262)},724:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ot})
var s=i(151),r=i(274)
const n={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class o{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=(0,s.graphFor)(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(v(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,i=t.included
let s,r
const{identifierCache:n}=this._capabilities
if(i)for(s=0,r=i.length;s<r;s++)i[s]=_(this,n,i[s])
if(Array.isArray(t.data)){r=t.data.length
const o=[]
for(s=0;s<r;s++)o.push(_(this,n,t.data[s]))
return this._putDocument(e,o,i)}if(null===t.data)return this._putDocument(e,null,i)
const o=_(this,n,t.data)
return this._putDocument(e,o,i)}_putDocument(e,t,i){const s=v(e)?function(e){const t={}
return e.content&&(R(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},i=e.content
return i&&R(t,i),t}(e)
void 0!==t&&(s.data=t),void 0!==i&&(s.included=i)
const r=e.request,n=r?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(r):null
if(n){s.lid=n.lid,e.content=s
const t=this.__documents.has(n.lid)
this.__documents.set(n.lid,e),this._capabilities.notifyChange(n,t?"updated":"added",null)}if("findHasMany"===e.request?.op){const t=e.request.options?.identifier,i=e.request.options?.field
i&&t&&this.__graph.push({op:"updateRelationship",record:t,field:i.name,value:s})}return s}patch(e){if("mergeIdentifiers"===e.op){const t=this.__cache.get(e.record)
t&&(this.__cache.set(e.value,t),this.__cache.delete(e.record)),this.__graph.update(e,!0)}}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:i,id:s,lid:r}=e,n=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const l=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,i)=>{if("alias"===t.kind)return
if(i in n&&void 0!==n[i])return
const s=d(t,e,l)
void 0!==s&&(n[i]=s)})),{type:i,id:s,lid:r,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRemoteState(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:i,id:s,lid:r}=e,n=Object.assign({},t.remoteAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const l=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,i)=>{if(i in n&&void 0!==n[i])return
const s=d(t,e,l)
void 0!==s&&(n[i]=s)})),{type:i,id:s,lid:r,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,i){let s
const r=this.__safePeek(e,!1),n=!!r,o=r||this._createCache(e),a=function(e,t,i){const s=t._store.getRequestStateService()
return!p(e)&&s.getPendingRequestsForRecord(i).some((e=>"query"===e.type))}(r,this._capabilities,e)||!p(r),l=!function(e){if(!e)return!0
const t=e.isNew,i=e.isDeleted,s=f(e)
return(!t||i)&&s}(r)&&!a
o.isNew&&(o.isNew=!1,this._capabilities.notifyChange(e,"identity",null),this._capabilities.notifyChange(e,"state",null))
const c=this._capabilities.schema.fields(e)
return i&&n&&t.attributes&&(s=u(o,t.attributes,c)),o.remoteAttrs=Object.assign(o.remoteAttrs||Object.create(null),t.attributes),o.localAttrs&&g(o,s)&&this._capabilities.notifyChange(e,"state",null),l||this._capabilities.notifyChange(e,"added",null),t.id&&(o.id=t.id),t.relationships&&y(this.__graph,c,e,t),s?.size&&h(this._capabilities,e,s),s?.size?Array.from(s):void 0}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const i={}
if(void 0!==t){const s=this._capabilities.schema.fields(e),r=this.__graph,n=Object.keys(t)
for(let o=0;o<n.length;o++){const a=n[o],l=t[a]
if("id"===a)continue
const c=s.get(a)
let d
switch(void 0!==c?"kind"in c?c.kind:"attribute":null){case"attribute":this.setAttr(e,a,l),i[a]=l
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:l}),d=r.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:l}),d=r.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
default:i[a]=l}}}return this._capabilities.notifyChange(e,"added",null),i}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const i=t.content,s=t.request.op,r=i&&i.data,{identifierCache:n}=this._capabilities,o=e.id,a="deleteRecord"!==s&&r?n.updateRecordIdentifier(e,r):e,l=this.__peek(a,!1)
l.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),l.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed",null))
const c=this._capabilities.schema.fields(a)
let d
l.isNew=!1,r&&(r.id&&!l.id&&(l.id=r.id),a===e&&a.id!==o&&this._capabilities.notifyChange(a,"identity",null),r.relationships&&y(this.__graph,c,a,r),d=r.attributes)
const f=d&&u(l,d,c)
l.remoteAttrs=Object.assign(l.remoteAttrs||Object.create(null),l.inflightAttrs,d),l.inflightAttrs=null,g(l,f),l.errors&&(l.errors=null,this._capabilities.notifyChange(a,"errors",null)),f?.size&&h(this._capabilities,a,f),this._capabilities.notifyChange(a,"state",null)
const p=i&&i.included
if(p)for(let h=0,u=p.length;h<u;h++)_(this,n,p[h])
return{data:a}}commitWasRejected(e,t){const i=this.__peek(e,!1)
if(i.inflightAttrs){const e=Object.keys(i.inflightAttrs)
if(e.length>0){const t=i.localAttrs=i.localAttrs||Object.create(null)
for(let s=0;s<e.length;s++)void 0===t[e[s]]&&(t[e[s]]=i.inflightAttrs[e[s]])}i.inflightAttrs=null}t&&(i.errors=t),this._capabilities.notifyChange(e,"errors",null)}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void(0,s.peekGraph)(t)?.unload(e)
const i=!this.isDeletionCommitted(e)
let r=!1
const n=this.__peek(e,!1)
n.isNew?(0,s.peekGraph)(t)?.push({op:"deleteRecord",record:e,isNew:!0}):(0,s.peekGraph)(t)?.unload(e),n.localAttrs=null,n.remoteAttrs=null,n.defaultAttrs=null,n.inflightAttrs=null
const o=function(e,t){const i=[],s=[],r=new Set
for(s.push(t);s.length>0;){const n=s.shift()
i.push(n),r.add(n)
const o=b(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!r.has(t)&&(r.add(t),s.push(t))}}return i}(t,e)
if(function(e,t){for(let i=0;i<t.length;++i){const s=t[i]
if(e.hasRecord(s))return!1}return!0}(t,o))for(let s=0;s<o.length;++s){const e=o[s]
t.notifyChange(e,"removed",null),r=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,n),1===this.__destroyedCache.size&&setTimeout((()=>{this.__destroyedCache.clear()}),100),!r&&i&&t.notifyChange(e,"removed",null)}getAttr(e,t){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=t,s=this.__peek(e,!0)
if(!s)return
if(s.localAttrs&&i in s.localAttrs)return s.localAttrs[i]
if(s.inflightAttrs&&i in s.inflightAttrs)return s.inflightAttrs[i]
if(s.remoteAttrs&&i in s.remoteAttrs)return s.remoteAttrs[i]
if(s.defaultAttrs&&i in s.defaultAttrs)return s.defaultAttrs[i]
{const t=this._capabilities.schema.fields(e).get(i)
this._capabilities
const r=d(t,e,this._capabilities._store)
return l(t)&&(s.defaultAttrs=s.defaultAttrs||Object.create(null),s.defaultAttrs[i]=r),r}}const s=t,r=this.__peek(e,!0),n=s[0]
let o=r.localAttrs&&n in r.localAttrs?r.localAttrs[n]:void 0
if(void 0===o&&(o=r.inflightAttrs&&n in r.inflightAttrs?r.inflightAttrs[n]:void 0),void 0===o&&(o=r.remoteAttrs&&n in r.remoteAttrs?r.remoteAttrs[n]:void 0),void 0!==o){for(let e=1;e<s.length;e++)if(o=o[s[e]],void 0===o)return
return o}}getRemoteAttr(e,t){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=t,s=this.__peek(e,!0)
if(!s)return
if(s.remoteAttrs&&i in s.remoteAttrs)return s.remoteAttrs[i]
if(s.defaultAttrs&&i in s.defaultAttrs)return s.defaultAttrs[i]
{const t=this._capabilities.schema.fields(e).get(i)
this._capabilities
const r=d(t,e,this._capabilities._store)
return l(t)&&(s.defaultAttrs=s.defaultAttrs||Object.create(null),s.defaultAttrs[i]=r),r}}const s=t,r=this.__peek(e,!0),n=s[0]
let o=r.remoteAttrs&&n in r.remoteAttrs?r.remoteAttrs[n]:void 0
if(void 0!==o){for(let e=1;e<s.length;e++)if(o=o[s[e]],void 0===o)return
return o}}setAttr(e,t,i){const s=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),s){const s=this.__peek(e,!1),r=t,n=s.inflightAttrs&&r in s.inflightAttrs?s.inflightAttrs[r]:s.remoteAttrs&&r in s.remoteAttrs?s.remoteAttrs[r]:void 0
return n!==i?(s.localAttrs=s.localAttrs||Object.create(null),s.localAttrs[r]=i,s.changes=s.changes||Object.create(null),s.changes[r]=[n,i]):s.localAttrs&&(delete s.localAttrs[r],delete s.changes[r]),s.defaultAttrs&&r in s.defaultAttrs&&delete s.defaultAttrs[r],void this._capabilities.notifyChange(e,"attributes",r)}const r=t,n=this.__peek(e,!1),o=r[0],a=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0
let l
if(a){l=a[r[1]]
for(let e=2;e<r.length;e++)l=l[r[e]]}if(l!==i){n.localAttrs=n.localAttrs||Object.create(null),n.localAttrs[o]=n.localAttrs[o]||structuredClone(a),n.changes=n.changes||Object.create(null)
let e=n.localAttrs[o],t=1
for(;t<r.length-1;)e=e[r[t++]]
e[r[t]]=i,n.changes[o]=[a,n.localAttrs[o]]}else if(n.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(n.localAttrs[o])&&(delete n.localAttrs[o],delete n.changes[o])}catch{}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){const t=this.__peek(e,!1)
return t&&t.changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return!!t&&(null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0)}rollbackAttrs(e){const t=this.__peek(e,!1)
let i
return t.isDeleted=!1,null!==t.localAttrs&&(i=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors",null)),this._capabilities.notifyChange(e,"state",null),i&&i.length&&h(this._capabilities,e,new Set(i)),i||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join((()=>{t=this.__graph.rollback(e)})),t}getRelationship(e,t){return this.__graph.getData(e,t)}getRemoteRelationship(e,t){return this.__graph.getRemoteData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state",null)}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let i=this.__cache.get(e)
return!i&&t&&(i=this.__destroyedCache.get(e)),i}__peek(e,t){return this.__safePeek(e,t)}}function a(e){return(0,s.isBelongsTo)(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function l(e){return!!e&&c(e.options)}function c(e){return!!e&&"function"==typeof e.defaultValue}function d(e,t,i){const s=e?.options
if(e&&(s||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(c(s))return s.defaultValue()
if(s&&"defaultValue"in s)return s.defaultValue
if("attribute"!==e.kind&&e.type){const r=i.schema.transformation(e)
if(r?.defaultValue)return r.defaultValue(s||null,t)}}}function h(e,t,i){if(i)for(const s of i)e.notifyChange(t,"attributes",s)
else e.notifyChange(t,"attributes",null)}function u(e,t,i){const s=new Set,r=Object.keys(t),n=r.length,o=e.localAttrs,a=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let l=0;l<n;l++){const e=r[l]
if(!i.has(e))continue
const n=t[e]
o&&void 0!==o[e]||a[e]!==n&&s.add(e)}return s}function f(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function p(e,t=!1){if(!e)return!1
const i=e.isNew,s=f(e)
return i?!e.isDeleted:!(t&&e.isDeletionCommitted||s)}function y(e,t,i,s){for(const r in s.relationships){const n=s.relationships[r],o=t.get(r)
n&&o&&m(o)&&e.push({op:"updateRelationship",record:i,field:r,value:n})}}function m(e){const{kind:t}=e
return"hasMany"===t||"belongsTo"===t||"resource"===t||"collection"===t}function g(e,t){const{localAttrs:i,remoteAttrs:s,inflightAttrs:r,defaultAttrs:n,changes:o}=e
if(!i)return e.changes=null,!1
let a=!1
const l=Object.keys(i)
for(let c=0,d=l.length;c<d;c++){const e=l[c];(r&&e in r?r[e]:s&&e in s?s[e]:void 0)===i[e]&&(a=!0,t?.delete(e),delete i[e],delete o[e]),n&&e in n&&delete n[e]}return a}function _(e,t,i){let s=t.peekRecordIdentifier(i)
return s=s?t.updateRecordIdentifier(s,i):t.getOrCreateRecordIdentifier(i),e.upsert(s,i,e._capabilities.hasRecord(s)),s}function b(e,t){const i=(0,s.peekGraph)(e),r=i?.identifiers.get(t)
if(!r)return n
const o=[]
Object.keys(r).forEach((e=>{const t=r[e]
t&&!t.definition.isImplicit&&o.push(t)}))
let l=0,c=0,d=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;l<o.length;){for(;c<2;){const t=0===c?(e=o[l],(0,s.isBelongsTo)(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]):a(o[l])
for(;d<t.length;){const e=t[d++]
if(null!==e)return e}d=0,c++}c=0,l++}var e})()
return{value:e,done:void 0===e}}})}}function v(e){return e instanceof Error}function R(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}var w=i(294),k=i(730),S=i(910)
function A(e,t,i,s){const r=t.data?(0,S.i)(t.data,((t,r)=>{const{id:n,type:o}=t
return function(e,t,i,s){const{id:r,type:n}=e
e.relationships||(e.relationships={})
const{relationships:o}=e,a=function(e,t,i,s){const{name:r}=i,{type:n}=t,o=function(e,t,i){const s=e.schema.fields(t).get(i)
return s?s.options.inverse:null}(e,{type:n},r)
if(o)return{inverseKey:o,kind:e.schema.fields({type:s}).get(o).kind}}(i,t,s,n)
if(a){const{inverseKey:e,kind:i}=a,s=o[e]?.data
"hasMany"===i&&void 0===s||(o[e]=o[e]||{},o[e].data=function(e,t,{id:i,type:s}){const r={id:i,type:s}
let n=null
if("hasMany"===t){const t=e||[]
e&&e.find((e=>e.type===r.type&&e.id===r.id))||t.push(r),n=t}else{const t=e||{}
Object.assign(t,r),n=t}return n}(s??null,i,t))}}(t,i,e,s),{id:n,type:o}})):null,n={}
"meta"in t&&(n.meta=t.meta),"links"in t&&(n.links=t.links),"data"in t&&(n.data=r)
const o={id:i.id,type:i.type,relationships:{[s.name]:n}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(o),t}const M=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),C={request(e,t){if(e.request.url||!e.request.op||!M.has(e.request.op))return t(e.request)
const{store:i}=e.request
switch(i._fetchManager||(i._fetchManager=new S.F(i)),e.request.op){case"findRecord":return function(e){const{store:t,data:i}=e.request,{record:s,options:r}=i
let n
if(t._instanceCache.recordIsLoaded(s))if(r.reload)(0,S.a)(s),n=t._fetchManager.scheduleFetch(s,r,e.request)
else{let i=null
const o=t.adapterFor(s.type)
void 0===r.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,i=t._fetchManager.createSnapshot(s,r))?((0,S.a)(s),r.reload=!0,n=t._fetchManager.scheduleFetch(s,r,e.request)):(!1===r.backgroundReload||!r.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,i=i||t._fetchManager.createSnapshot(s,r))||((0,S.a)(s),r.backgroundReload=!0,t._fetchManager.scheduleFetch(s,r,e.request)),n=Promise.resolve(s))}else n=t._fetchManager.fetchDataIfNeededForIdentifier(s,r,e.request)
return n.then((e=>t.peekRecord(e)))}(e)
case"findAll":return function(e){const{store:t,data:i}=e.request,{type:s,options:r}=i,n=t.adapterFor(s),o=t.recordArrayManager._live.get(s),a=new S.b(t,s,r)
let l
return r.reload||!1!==r.reload&&(n.shouldReloadAll&&n.shouldReloadAll(t,a)||!n.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),l=T(n,t,s,a,e.request,!0)):(l=Promise.resolve(t.peekAll(s)),(r.backgroundReload||!1!==r.backgroundReload&&(!n.shouldBackgroundReloadAll||n.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),T(n,t,s,a,e.request,!1))),l}(e)
case"query":return function(e){const{store:t,data:i}=e.request
let{options:s}=i
const{type:r,query:n}=i,o=t.adapterFor(r),a=s._recordArray||t.recordArrayManager.createArray({type:r,query:n})
delete s._recordArray
const l=t.modelFor(r)
return Promise.resolve().then((()=>o.query(t,l,n,a,s))).then((e=>{const i=t.serializerFor(r),s=(0,S.n)(i,t,l,e,null,"query"),n=t._push(s,!0)
return t.recordArrayManager.populateManagedArray(a,n,s),a}))}(e)
case"queryRecord":return function(e){const{store:t,data:i}=e.request,{type:s,query:r,options:n}=i,o=t.adapterFor(s),a=t.modelFor(s)
return Promise.resolve().then((()=>o.queryRecord(t,a,r,n))).then((e=>{const i=t.serializerFor(s),r=(0,S.n)(i,t,a,e,null,"queryRecord"),n=t._push(r,!0)
return n?t.peekRecord(n):null}))}(e)
case"findBelongsTo":return function(e){const{store:t,data:i,records:s}=e.request,{options:r,record:n,links:o,useLink:a,field:l}=i,c=s?.[0],d=c&&t._fetchManager.getPendingFetch(c,r)
if(d)return d
if(a)return function(e,t,i,s,r){return Promise.resolve().then((()=>{const n=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,r),a=i&&"string"!=typeof i?i.href:i
return n.findBelongsTo(e,o,a,s)})).then((i=>{const r=e.modelFor(s.type),n=e.serializerFor(s.type)
let o=(0,S.n)(n,e,r,i,null,"findBelongsTo")
return o.data||o.links||o.meta?(o=A(e,o,t,s),e._push(o,!0)):null}),null)}(t,n,o.related,l,r)
const h=t._fetchManager
return(0,S.a)(c),r.reload?h.scheduleFetch(c,r,e.request):h.fetchDataIfNeededForIdentifier(c,r,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:i,records:s}=e.request,{options:r,record:n,links:o,useLink:a,field:l}=i
if(a)return function(e,t,i,s,r,n){return Promise.resolve().then((()=>{const o=t._fetchManager.createSnapshot(i,n),a=s&&"string"!=typeof s?s.href:s
return e.findHasMany(t,o,a,r)})).then((e=>{const s=t.modelFor(r.type),n=t.serializerFor(r.type)
let o=(0,S.n)(n,t,s,e,null,"findHasMany")
return o=A(t,o,i,r),t._push(o,!0)}),null)}(t.adapterFor(n.type),t,n,o.related,l,r)
const c=new Array(s.length),d=t._fetchManager
for(let h=0;h<s.length;h++){const t=s[h];(0,S.a)(t),c[h]=r.reload?d.scheduleFetch(t,r,e.request):d.fetchDataIfNeededForIdentifier(t,r,e.request)}return Promise.all(c)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:i,op:s}=e.request,{options:r,record:n}=i
t.cache.willCommit(n,e)
const o=Object.assign({[S.S]:s},r)
return t._fetchManager.scheduleSave(n,o).then((i=>{let r
return t._join((()=>{r=t.cache.didCommit(n,{request:e.request,content:i})})),t.lifetimes?.didRequest&&"createRecord"===s&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(r.data)})).catch((e=>{let i=e
throw e?"string"==typeof e&&(i=new Error(e)):i=new Error("Unknown Error Occurred During Request"),function(e,t,i){if(i&&!0===i.isAdapterError&&"InvalidError"===i.code){const s=e.serializerFor(t.type)
if(s&&"function"==typeof s.extractErrors){const r=s.extractErrors(e,e.modelFor(t.type),i,t.id)
i.errors=function(e){const t=[]
return e&&Object.keys(e).forEach((i=>{const s=(r=e[i],Array.isArray(r)?r:[r])
var r
for(let e=0;e<s.length;e++){let r="Invalid Attribute",n=`/data/attributes/${i}`
i===E&&(r="Invalid Document",n="/data"),t.push({title:r,detail:s[e],source:{pointer:n}})}})),t}(r)}}const s=e.cache
if(i.errors){let e=i.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),s.commitWasRejected(t,e)}else s.commitWasRejected(t)}(t,n,i),i}))}(e)
default:return t(e.request)}}},E="base"
function T(e,t,i,s,r,n){const o=t.modelFor(i)
let a=Promise.resolve().then((()=>e.findAll(t,o,null,s)))
return a=a.then((e=>{const r=t.serializerFor(i),a=(0,S.n)(r,t,o,e,null,"findAll")
return t._push(a,n),s._recordArray.isUpdating=!1,s._recordArray})),a}function q(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const i=(0,r.di)(e),{_adapterCache:s}=this
let n=s[i]
if(n)return n
const o=(0,w.getOwner)(this)
return n=o.lookup(`adapter:${i}`),void 0!==n?(s[i]=n,n):(n=s.application||o.lookup("adapter:application"),void 0!==n?(s[i]=n,s.application=n,n):void 0)}function O(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,r.di)(e),{_serializerCache:i}=this
let s=i[t]
if(s)return s
const n=(0,w.getOwner)(this)
return s=n.lookup(`serializer:${t}`),void 0!==s?(i[t]=s,s):(s=i.application||n.lookup("serializer:application"),void 0!==s?(i[t]=s,i.application=s,s):null)}function D(e,t){const i=(0,r.di)(e),s=this.serializerFor(i),n=this.modelFor(i)
return s.normalize(n,t)}function j(e,t){const i=t||e,s=t?(0,r.di)(e):"application"
this.serializerFor(s).pushPayload(this,i)}function P(e,t){return this._fetchManager||(this._fetchManager=new S.F(this)),this._fetchManager.createSnapshot((0,k.o)(e)).serialize(t)}function N(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var F,I,$,x,z,L=i(603),B=i(241),U=i(471),V=i.n(U),H=i(738),W=i(146),K=i(788),G=i(389),Y=i(410),J=i.n(Y),Z=i(991),X=i(491),Q=i(375),ee=i(648),te=i(280),ie=i.n(te),se=i(104),re=i.n(se),ne=i(666),oe=i(193)
function ae(e,t,i){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,i)}function le(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ce(e){{const t=(0,B._k)(e)
return(0,L.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}const de=re().extend(ie()),he=new WeakMap
function ue(e,t,i,s){let r={configurable:!0,enumerable:!0,writable:!0,initializer:null}
s&&(r.initializer=s)
for(let n of i)r=n(e,t,r)||r
void 0===r.initializer?Object.defineProperty(e,t,r):function(e,t,i){let s=he.get(e)
s||(s=new Map,he.set(e,s)),s.set(t,i)}(e,t,r)}function fe(e,t,i){let s={...Object.getOwnPropertyDescriptor(e,t)}
for(let r of i)s=r(e,t,s)||s
void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(e):void 0,s.initializer=void 0),Object.defineProperty(e,t,s)}function pe(e,t){let i=function(e,t){var i
let s=e.prototype
for(;s;){let e=null==(i=he.get(s))?void 0:i.get(t)
if(e)return e
s=s.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}const ye=Symbol.for("LegacyPromiseProxy"),me=de
class ge extends me{constructor(...e){super(...e),le(this,ye,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:i}=this._belongsToState
return await i.reloadBelongsTo(t,e),this}}fe((F=ge).prototype,"id",[H.PO]),fe(F.prototype,"meta",[(0,U.computed)()])
class _e{constructor(e,t){le(this,ye,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then((t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t)),(t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t}))}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}fe((I=_e).prototype,"length",[H.Vv]),fe(I.prototype,"links",[H.Vv]),fe(I.prototype,"meta",[H.Vv]),(0,W.sg)(_e.prototype,"content",null),(0,W.sg)(_e.prototype,"isPending",!1),(0,W.sg)(_e.prototype,"isRejected",!1),(0,W.sg)(_e.prototype,"isFulfilled",!1),(0,W.sg)(_e.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,H.Vv)(e),Object.defineProperty(_e.prototype,"[]",e)}class be{constructor(e,t,i,s,r){le(this,"___token",void 0),le(this,"___identifier",void 0),le(this,"___relatedTokenMap",void 0),this.graph=t,this.key=r,this.hasManyRelationship=s,this.type=s.definition.type,this.store=e,this.___identifier=i,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===r&&this._ref++})),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach((e=>{this.store.notifications.unsubscribe(e)})),this.___relatedTokenMap.clear()}get identifiers(){Re(this),this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map((e=>{const i=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let s=t.get(i)
return s?t.delete(i):s=this.store.notifications.subscribe(i,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),this.___relatedTokenMap.set(i,s),i})):(t.forEach((e=>{this.store.notifications.unsubscribe(e)})),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map((e=>e.id))}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:i}=this,s=Array.isArray(e)?{data:e}:e,r=Array.isArray(s.data)&&s.data.length>0&&ve(s.data[0]),n=Array.isArray(s.data)?r?i._push(s,!0):s.data.map((e=>i.identifierCache.getOrCreateRecordIdentifier(e))):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(s.data)&&(a.data=n),"links"in s&&(a.links=s.links),"meta"in s&&(a.meta=s.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})})),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every((e=>!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=Se.get(this.___identifier)
return Re(this)?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=Se.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||Te(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return Se.get(this.___identifier).reloadHasMany(this.key,e)}}function ve(e){return Object.keys(e).filter((e=>"id"!==e&&"type"!==e&&"lid"!==e)).length>0}function Re(e){return!!e._isLoaded()||(e.graph.get(e.___identifier,e.key).accessed=!0,!1)}function we(e){return Boolean(e&&e.links&&e.links.related)}fe(be.prototype,"identifiers",[H.Vv,H.PO]),(0,W.sg)(be.prototype,"_ref",0)
class ke{constructor(e,t,i,s,r){this.graph=t,this.key=r,this.belongsToRelationship=s,this.type=s.definition.type,this.store=e,this.___identifier=i,this.___relatedToken=null,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===r&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(we(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return we(this._resource())?"link":"id"}async push(e,t){const{store:i}=this,s=e.data&&ve(e.data)?i._push(e,!0):e.data?i.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:r}=this.belongsToRelationship,n={}
if((e.data||null===e.data)&&(n.data=s),"links"in e&&(n.links=e.links),"meta"in e&&(n.meta=e.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:r,field:this.key,value:n})})),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=Se.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||Te(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then((()=>this.value()))}reload(e){return Se.get(this.___identifier).reloadBelongsTo(this.key,e).then((()=>this.value()))}}fe(ke.prototype,"identifier",[H.Vv,H.PO]),(0,W.sg)(ke.prototype,"_ref",0)
const Se=(0,Q.L1)("LEGACY_SUPPORT",new Map)
function Ae(e){const t=(0,r.o)(e)
let i=Se.get(t)
return i||(i=new Me(e),Se.set(t,i),Se.set(e,i)),i}class Me{constructor(e){this.record=e,this.store=(0,r.fV)(e),this.identifier=(0,r.o)(e),this.cache=(0,r.oX)(e)
{const e=(0,oe.A)(i(151)).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[r.u2],i=this.identifier,[s,n]=this._getCurrentState(i,e.key)
n.meta&&(e.meta=n.meta),n.links&&(e.links=n.links),t.length=0,(0,r.RX)(t,s)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,i,s){return this._findBelongsToByJsonApiResource(t,this.identifier,i,s).then((t=>Ee(this,e,i,t)),(t=>Ee(this,e,i,null,t)))}reloadBelongsTo(e,t){const i=this._relationshipPromisesCache[e]
if(i)return i
const s=this.graph.get(this.identifier,e),r=this.cache.getRelationship(this.identifier,e)
s.state.hasFailedLoadAttempt=!1,s.state.shouldForceReload=!0
const n=this._findBelongsTo(e,r,s,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:n}):n}getBelongsTo(e,t){const{identifier:i,cache:s}=this,r=s.getRelationship(this.identifier,e),n=r&&r.data?r.data:null,o=this.store,a=this.graph.get(this.identifier,e),l=a.definition.isAsync,c={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(l){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const i=this._findBelongsTo(e,r,a,t),s=n&&o._instanceCache.recordIsLoaded(n)
return this._updatePromiseProxyFor("belongsTo",e,{promise:i,content:s?o._instanceCache.getRecord(n):null,_belongsToState:c})}return null===n?null:o._instanceCache.getRecord(n)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(i=t,i?(0,r.o)(i):null)},!0)
var i}_getCurrentState(e,t){const i=this.cache.getRelationship(e,t),s=this.store._instanceCache,r=[]
if(i.data)for(let n=0;n<i.data.length;n++){const e=i.data[n]
s.recordIsLoaded(e,!0)&&r.push(e)}return[r,i]}getManyArray(e,t){{let i=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!i){const[s,n]=this._getCurrentState(this.identifier,e)
i=new r.YN({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:s,key:e,meta:n.meta||null,links:n.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=i}return i}}fetchAsyncHasMany(e,t,i,s){{let r=this._relationshipPromisesCache[e]
if(r)return r
const n=this.cache.getRelationship(this.identifier,e),o=this._findHasManyByJsonApiResource(n,this.identifier,t,s)
return o?(r=o.then((()=>Ee(this,e,t,i)),(s=>Ee(this,e,t,i,s))),this._relationshipPromisesCache[e]=r,r):(i.isLoaded=!0,Promise.resolve(i))}}reloadHasMany(e,t){{const i=this._relationshipPromisesCache[e]
if(i)return i
const s=this.graph.get(this.identifier,e),{definition:r,state:n}=s
n.hasFailedLoadAttempt=!1,n.shouldForceReload=!0
const o=this.getManyArray(e,r),a=this.fetchAsyncHasMany(e,s,o,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const i=this.graph.get(this.identifier,e),{definition:s,state:r}=i,n=this.getManyArray(e,s)
if(s.isAsync){if(r.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const s=this.fetchAsyncHasMany(e,i,n,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:s,content:n})}return n}}_updatePromiseProxyFor(e,t,i){let s=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:r}=i
return s?s._update(e,r):s=this._relationshipProxyCache[t]=new _e(e,r),s}if(s){const{promise:e,content:t}=i
void 0!==t&&s.set("content",t),s.set("promise",e)}else s=ge.create(i),this._relationshipProxyCache[t]=s
return s}referenceFor(e,t){let i=this.references[t]
if(!i){const{graph:e,identifier:s}=this,r=e.get(s,t),n=r.definition.kind
"belongsTo"===n?i=new ke(this.store,e,s,r,t):"hasMany"===n&&(i=new be(this.store,e,s,r,t)),this.references[t]=i}return i}_findHasManyByJsonApiResource(e,t,i,s={}){{if(!e)return
const{definition:r,state:n}=i;(0,X.upgradeStore)(this.store)
const o=this.store.adapterFor?.(r.type),{isStale:a,hasDematerializedInverse:l,hasReceivedData:c,isEmpty:d,shouldForceReload:h}=n,u=Te(this.store,e),f=e.data,p=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===f)&&(h||l||a||!u&&!d),y=this.store.schema.fields({type:r.inverseType}).get(r.key),m={useLink:p,field:y,links:e.links,meta:e.meta,options:s,record:t}
if(p){const t=y.options.linksMode?{url:Ce(e),op:"findHasMany",method:"GET",records:f||[],data:m,[ee._q]:!1}:{op:"findHasMany",records:f||[],data:m,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}
return this.store.request(t)}const g=c&&!d,_=l||d&&Array.isArray(f)&&f.length>0,b=!h&&!a&&(g||_)
if(b&&u)return
return b||c&&!d||_?(s.reload=s.reload||!b||void 0,this.store.request({op:"findHasMany",records:f,data:m,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,i,s={}){if(!e)return Promise.resolve(null)
const r=i.definition.key
if(this._pending[r])return this._pending[r]
const n=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:l,isEmpty:c,shouldForceReload:d}=i.state,h=Te(this.store,e),u=e.links?.related&&(d||a||o||!h&&!c),f=this.store.schema.fields(this.identifier).get(i.definition.key),p={useLink:u,field:f,links:e.links,meta:e.meta,options:s,record:t}
if(u){const t=f.options.linksMode?{url:Ce(e),op:"findBelongsTo",method:"GET",records:n?[n]:[],data:p,[ee._q]:!1}:{op:"findBelongsTo",records:n?[n]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}},i=this.store.request(t)
return this._pending[r]=i.then((e=>f.options.linksMode?e.content.data:e.content)).finally((()=>{this._pending[r]=void 0})),this._pending[r]}const y=l&&h&&!c,m=a||c&&e.data,g=!d&&!o&&(y||m)
return g&&!n?Promise.resolve(null):g&&h||null===n?.id?Promise.resolve(n):n?(s.reload=s.reload||!g||void 0,this._pending[r]=this.store.request({op:"findBelongsTo",records:[n],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((e=>e.content)).finally((()=>{this._pending[r]=void 0})),this._pending[r]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach((t=>{const i=e[t]
i.destroy&&i.destroy()})),e=this.references,this.references=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),this.isDestroyed=!0}}function Ce(e){const t=e.links?.related
return"object"==typeof t?t.href:t}function Ee(e,t,i,s,r){delete e._relationshipPromisesCache[t],i.state.shouldForceReload=!1
const n="hasMany"===i.definition.kind
if(n&&s.notify(),r){i.state.hasFailedLoadAttempt=!0
const s=e._relationshipProxyCache[t]
throw s&&!n&&(s.content&&s.content.isDestroying&&s.set("content",null),e.store.notifications._flush()),r}return n?s.isLoaded=!0:e.store.notifications._flush(),i.state.hasFailedLoadAttempt=!1,i.state.isStale=!1,n||!s?s:e.store.peekRecord(s)}function Te(e,t){const i=e._instanceCache,s=t.data
return Array.isArray(s)?s.every((e=>i.recordIsLoaded(e))):!s||i.recordIsLoaded(s)}const qe=J()
var Oe=new WeakMap,De=new WeakMap
class je extends qe{constructor(...e){super(...e),ae(this,Oe,void pe(this,"messages")),ae(this,De,void pe(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let i=t.get(e)
return void 0===i&&(i=(0,G.A)(),t.set(e,i)),(0,U.get)(i,"[]"),i}get content(){return(0,G.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const i=this._findOrCreateMessages(e,t)
this.addObjects(i),this.errorsFor(e).addObjects(i),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const i=this.errorsFor(e),s=Array.isArray(t)?t:[t],r=new Array(s.length)
for(let n=0;n<s.length;n++){const t=s[n],o=i.findBy("message",t)
r[n]=o||{attribute:e,message:t}}return r}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const i=this.errorsFor(e)
for(let s=0;s<i.length;s++)i[s].attribute===e&&i.replace(s,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach((function(e,i){t.push(i)})),e.clear(),t.forEach((e=>{this.notifyPropertyChange(e)})),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function Pe(e,t,i,s){if("belongsTo"===s.kind)i.notifyPropertyChange(t)
else if("hasMany"===s.kind){const r=Se.get(e),n=r&&r._manyArrayCache[t],o=r&&r._relationshipPromisesCache[t]
if(n&&o)return
n&&(n.notify(),s.options.async&&i.notifyPropertyChange(t))}}function Ne(e,t,i,s){(0,ne.cacheFor)(s,i)!==e.cache.getAttr(t,i)&&s.notifyPropertyChange(i)}fe(($=je).prototype,"errorsByAttributeName",[(0,U.computed)()]),ue($.prototype,"messages",[(0,Z.mapBy)("content","message")]),fe($.prototype,"content",[(0,U.computed)()]),ue($.prototype,"isEmpty",[(0,Z.not)("length")])
const Fe=/^\/?data\/(attributes|relationships)\/(.*)/,Ie=/^\/?data/
function $e(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}function xe(e,t,i){const s=i.get,r=i.set
return i.get=function(){const e=(0,W.V1)(this,t,!0)
return(0,W.B1)(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=s.call(this)),e.lastValue},i.set=function(e){(0,W.V1)(this,t,!0),r.call(this,e)},(0,H.Vv)(i),i}function ze(e,t){const i=(0,W.i$)(e,t)
i&&(i.shouldReset=!0,(0,W.RH)(i))}class Le{constructor(e){const t=(0,k.fV)(e),i=(0,r.o)(e)
this.identifier=i,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const s=t.getRequestStateService(),n=t.notifications,o=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&$e(e.response.data)||this._errorRequests.push(e),Be(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),Be(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&$e(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),Be(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),Be(this),this._errorRequests=[],this._lastError=null}}
s.subscribeForRecord(i,o)
const a=s.getLastRequestForRecord(i)
a&&o(a),this.handler=n.subscribe(i,((e,t,i)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}}))}destroy(){(0,k.fV)(this.record).notifications.unsubscribe(this.handler)}notify(e){ze(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let i=0;i<t.length;i++){const s=t[i]
if(s.source&&s.source.pointer){const t=s.source.pointer.match(Fe)
let i
if(t?i=t[2]:-1!==s.source.pointer.search(Ie)&&(i="base"),i){const t=s.detail||s.title
e.add(i,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function Be(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function Ue(e,t,i){const s=new WeakMap,r=i.get
return i.get=function(){let e=s.get(this)
return e||(e={hasComputed:!1,value:void 0},s.set(this,e)),e.hasComputed||(e.value=r.call(this),e.hasComputed=!0),e.value},i}fe((x=Le).prototype,"isLoading",[xe]),fe(x.prototype,"isLoaded",[xe]),fe(x.prototype,"isSaved",[xe]),fe(x.prototype,"isEmpty",[xe]),fe(x.prototype,"isNew",[xe]),fe(x.prototype,"isDeleted",[xe]),fe(x.prototype,"isValid",[xe]),fe(x.prototype,"isDirty",[xe]),fe(x.prototype,"isError",[xe]),fe(x.prototype,"adapterError",[xe]),fe(x.prototype,"isPreloaded",[H.PO]),fe(x.prototype,"stateName",[H.PO]),fe(x.prototype,"dirtyType",[H.PO]),(0,W.sg)(Le.prototype,"isSaving",!1)
class Ve extends(V()){init(e){const t=e._createProps,i=e._secretInit
e._createProps=null,e._secretInit=null
const s=this.store=i.store
super.init(e),this[K.pm]=s
const r=i.identifier
i.cb(this,i.cache,r,i.store),this.___recordState=null,this.setProperties(t)
const n=s.notifications
this.___private_notifications=n.subscribe(r,((e,t,i)=>{!function(e,t,i,s,r){switch(t){case"added":case"attributes":i?Ne(r,e,i,s):s.eachAttribute((t=>{Ne(r,e,t,s)}))
break
case"relationships":if(i){const t=s.constructor.relationshipsByName.get(i)
Pe(e,i,s,t)}else s.eachRelationship(((t,i)=>{Pe(e,t,s,i)}))
break
case"identity":s.notifyPropertyChange("id")}}(e,t,i,this,s)}))}destroy(){const e=(0,k.o)(this)
this.___recordState?.destroy(),(0,k.fV)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship(((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)})),Se.get(this)?.destroy(),Se.delete(this),Se.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,k.o)(this).id}set id(e){const t=(0,r.pG)(e),i=(0,k.o)(this),s=t!==i.id
null!==t&&s&&(this.store._instanceCache.setRecordId(i,t),this.store.notifications.notify(i,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new Le(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=je.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){ze(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,k.fV)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const i=this.relationshipsByName.get(e)
return i&&t.modelFor(i.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const i=this.inverseMap
if(i[e])return i[e]
{const s=this._findInverseFor(e,t)
return i[e]=s,s}}static _findInverseFor(e,t){const i=this.relationshipsByName.get(e)
if(!i)return null
const{options:s}=i
return null===s.inverse?null:t.schema.hasResource(i)&&t.schema.fields(i).get(s.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach((t=>{const{type:i}=t
e.has(i)||e.set(i,[]),e.get(i).push(t)})),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty(((t,i)=>{He(i)&&e[i.kind].push(t)})),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,i=Object.keys(t)
for(let s=0;s<i.length;s++){const r=t[i[s]].type
e.includes(r)||e.push(r)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,i=Object.keys(t)
for(let s=0;s<i.length;s++){const r=t[i[s]]
e.set(r.name,r)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty(((t,i)=>{He(i)&&(i.key=t,i.name=t,e[t]=i)})),e}static get fields(){const e=new Map
return this.eachComputedProperty(((t,i)=>{He(i)?e.set(t,i.kind):We(i)&&e.set(t,"attribute")})),e}static eachRelationship(e,t){this.relationshipsByName.forEach(((i,s)=>{e.call(t,s,i)}))}static eachRelatedType(e,t){const i=this.relatedTypes
for(let s=0;s<i.length;s++){const r=i[s]
e.call(t,r)}}static determineRelationshipType(e,t){const i=e.name,s=e.kind,r=this.inverseFor(i,t)
return r?"belongsTo"===r.kind?"belongsTo"===s?"oneToOne":"manyToOne":"belongsTo"===s?"oneToMany":"manyToMany":"belongsTo"===s?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty(((t,i)=>{We(i)&&(i.key=t,i.name=t,e.set(t,i))})),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute(((t,i)=>{i.type&&e.set(t,i.type)})),e}static eachAttribute(e,t){this.attributes.forEach(((i,s)=>{e.call(t,s,i)}))}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach(((i,s)=>{e.call(t,s,i)}))}static toString(){return`model:${this.modelName}`}}function He(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function We(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}fe((z=Ve).prototype,"isEmpty",[H.Vv]),fe(z.prototype,"isLoading",[H.Vv]),fe(z.prototype,"isLoaded",[H.Vv]),fe(z.prototype,"hasDirtyAttributes",[H.Vv]),fe(z.prototype,"isSaving",[H.Vv]),fe(z.prototype,"isDeleted",[H.Vv]),fe(z.prototype,"isNew",[H.Vv]),fe(z.prototype,"isValid",[H.Vv]),fe(z.prototype,"dirtyType",[H.Vv]),fe(z.prototype,"isError",[H.Vv]),fe(z.prototype,"id",[xe]),fe(z.prototype,"currentState",[xe]),fe(z.prototype,"errors",[Ue]),fe(z.prototype,"adapterError",[H.Vv]),le(Ve,"isModel",!0),le(Ve,"modelName",null),fe(z,"inverseMap",[Ue]),fe(z,"relationships",[Ue]),fe(z,"relationshipNames",[Ue]),fe(z,"relatedTypes",[Ue]),fe(z,"relationshipsByName",[Ue]),fe(z,"relationshipsObject",[Ue]),fe(z,"fields",[Ue]),fe(z,"attributes",[Ue]),fe(z,"transformedAttributes",[Ue]),Ve.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[K.pm].saveRecord(this,e)),t},Ve.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then((e=>(this.unloadRecord(),this)))},Ve.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[K.pm].unloadRecord(this)},Ve.prototype.hasMany=function(e){return Ae(this).referenceFor("hasMany",e)},Ve.prototype.belongsTo=function(e){return Ae(this).referenceFor("belongsTo",e)},Ve.prototype.serialize=function(e){return(0,X.upgradeStore)(this[K.pm]),this[K.pm].serializeRecord(this,e)},Ve.prototype._createSnapshot=function(){const e=this[K.pm]
if((0,X.upgradeStore)(e),!e._fetchManager){const t=(0,oe.A)(i(491)).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,k.o)(this))},Ve.prototype.deleteRecord=function(){this.currentState&&this[K.pm].deleteRecord(this)},Ve.prototype.changedAttributes=function(){return(0,r.oX)(this).changedAttrs((0,k.o)(this))},Ve.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[K.pm]._join((()=>{(0,r.oX)(this).rollbackAttrs((0,k.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()}))},Ve.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,k.o)(this)
return this.isReloading=!0,this[K.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((()=>this)).finally((()=>{this.isReloading=!1}))},(0,W.sg)(Ve.prototype,"isReloading",!1),Ve.prototype._createProps=null,Ve.prototype._secretInit=null
class Ke{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=ce(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),i=t.attributes,s=Object.create(null)
i.forEach(((e,t)=>s[t]=e))
const r=t.relationshipsObject||null,n=new Map
for(const a of Object.values(s))n.set(a.name,a)
for(const a of Object.values(r))n.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(n.values())},attributes:s,relationships:r,fields:n}
return this._schemas.set(e,o),o}fields(e){const t=ce(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=ce(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===Ge(this.store,t)&&(this._typeMisses.add(t),1))}}function Ge(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const i=e._modelFactoryCache
let s=i[t]
if(!s){if(s=(0,w.getOwner)(e).factoryFor(`model:${t}`),s||(s=function(e,t){const i=(0,w.getOwner)(e),s=i.factoryFor(`mixin:${t}`),r=s&&s.class
if(r){const e=Ve.extend(r)
e.__isMixin=!0,e.__mixin=r,i.register(`model:${t}`,e)}return i.factoryFor(`model:${t}`)}(e,t)),!s)return null
const r=s.class
r.isModel&&(r.modelName&&Object.prototype.hasOwnProperty.call(r,"modelName")||Object.defineProperty(r,"modelName",{value:t})),i[t]=s}return s}function Ye(e,t){const i=e.type,s={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:Xe}}
return(0,w.setOwner)(s,(0,w.getOwner)(this)),Ge(this,i).class.create(s)}function Je(e){e.destroy()}function Ze(e){const t=Ge(this,ce(e)),i=t&&t.class?t.class:null
if(i&&i.isModel&&!this._forceShim)return i}function Xe(e,t,i,s){(0,r.TP)(e,i),r.i.set(e,s),(0,r.Wz)(e,t)}Ke.prototype.doesTypeExist=function(e){return(0,L.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this.hasResource({type:e})},Ke.prototype.attributesDefinitionFor=function(e){(0,L.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=ce(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},Ke.prototype.relationshipsDefinitionFor=function(e){(0,L.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=ce(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}
var Qe=i(82),et=i(76)
const tt="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},it=new Set(["updateRecord","createRecord","deleteRecord"]),st=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),rt={async request(e){let t
try{t=await tt(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const i=!t.ok||t.status>=400,s=e.request.op,r=Boolean(s&&it.has(s))
if(!i&&!r&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const i=(0,et.f)(e)
return new Response(e.body,Object.assign(i,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let n=""
{const i=t.body.getReader(),s=new TextDecoder
let r=e.hasRequestedStream,o=r?new TransformStream:null,a=o?.writable.getWriter()
for(r&&(e.request.signal?.addEventListener("abort",(()=>{r&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable));;){const{done:t,value:l}=await i.read()
if(t){r&&(r=!1,await a.ready,await a.close())
break}if(n+=s.decode(l,{stream:!0}),r)await a.ready,await a.write(l)
else if(e.hasRequestedStream){const t=new TextEncoder
r=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",(()=>{r&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(n)),await a.ready,await a.write(l)}}r&&(r=!1,await a.ready,await a.close())}if(i){let i
try{i=JSON.parse(n)}catch{}const s=Array.isArray(i)?i:null!==(o=i)&&"object"==typeof o&&Array.isArray(i.errors)?i.errors:null,r=t.statusText||st.get(t.status)||"Unknown Request Error",a=`[${t.status} ${r}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,l=s?new AggregateError(s,a):new Error(a)
throw l.status=t.status,l.statusText=r,l.isRequestError=!0,l.code=l.status,l.name=l.statusText.replaceAll(" ","")+"Error",l.content=i,l}return JSON.parse(n)
var o}}
function nt(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class ot extends k.Ay{constructor(e){super(e),nt(this,"adapterFor",q),nt(this,"serializerFor",O),nt(this,"pushPayload",j),nt(this,"normalize",D),nt(this,"serializeRecord",P),"requestManager"in this||(this.requestManager=new Qe.Ay,this.requestManager.use([C,rt])),this.requestManager.useCache(k.lL)}createSchemaService(){return new Ke(this)}createCache(e){return new o(e)}instantiateRecord(e,t){return Ye.call(this,e,t)}teardownRecord(e){Je.call(this,e)}modelFor(e){return Ze.call(this,e)||super.modelFor(e)}destroy(){N.call(this),super.destroy()}}},730:(e,t,i)=>{i.d(t,{Ay:()=>s.S,fV:()=>s.s,lL:()=>s.C,o:()=>s.r})
var s=i(564)
i(603),i(241)},738:(e,t,i)=>{i.d(t,{PO:()=>n,Vv:()=>r.dependentKeyCompat})
var s=i(217),r=(i(146),i(394))
function n(e,t,i){const r=new WeakMap,n=i.get
i.get=function(){return r.has(this)||r.set(this,(0,s.createCache)(n.bind(this))),(0,s.getValue)(r.get(this))}}},788:(e,t,i)=>{i.d(t,{k5:()=>n,pm:()=>r})
var s=i(375)
const r=(0,s.L1)("Store",Symbol("Store")),n=(0,s.L1)("$type",Symbol("$type"));(0,s.L1)("RequestSignature",Symbol("RequestSignature"))},910:(e,t,i)=>{i.d(t,{F:()=>p,S:()=>f,a:()=>c,b:()=>l,c:()=>u,i:()=>d,n:()=>h,u:()=>_})
var s=i(274),r=i(603),n=i(82),o=i(375),a=i(193)
class l{constructor(e,t,i={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=i.adapterOptions,this.include=i.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[s.u2].map((t=>e.createSnapshot(t))),this._snapshots}}function c(e){}function d(e,t){return Array.isArray(e)?e.map(t):t(e,0)}function h(e,t,i,s,r,n){return e?e.normalizeResponse(t,i,s,r,n):s}class u{constructor(e,t,i){this._store=i,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const s=!!i._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,s&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,s){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,i=this._store.schema.fields(t),s=this._store.cache
return i.forEach(((i,r)=>{"attribute"===i.kind&&(e[r]=s.getAttr(t,r))})),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let i=0,s=t.length;i<s;i++){const s=t[i]
e[s]=this._changedAttributes[s].slice()}return e}belongsTo(e,t){const s=!(!t||!t.id)
let r
const n=this._store
if(!0===s&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===s&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
n.schema.fields({type:this.modelName}).get(e)
const o=(0,a.A)(i(151)).graphFor,{identifier:l}=this,c=o(this._store).getData(l,e),d=c&&c.data,h=d?n.identifierCache.getOrCreateRecordIdentifier(d):null
if(c&&void 0!==c.data){const e=n.cache
r=h&&!e.isDeleted(h)?s?h.id:n._fetchManager.createSnapshot(h):null}return s?this._belongsToIds[e]=r:this._belongsToRelationships[e]=r,r}hasMany(e,t){const s=!(!t||!t.ids)
let r
const n=this._hasManyIds[e],o=this._hasManyRelationships[e]
if(!0===s&&e in this._hasManyIds)return n
if(!1===s&&e in this._hasManyRelationships)return o
const l=this._store,c=(l.schema.fields({type:this.modelName}).get(e),(0,a.A)(i(151)).graphFor),{identifier:d}=this,h=c(this._store).getData(d,e)
return h.data&&(r=[],h.data.forEach((e=>{const t=l.identifierCache.getOrCreateRecordIdentifier(e)
l.cache.isDeleted(t)||(s?r.push(t.id):r.push(l._fetchManager.createSnapshot(t)))}))),s?this._hasManyIds[e]=r:this._hasManyRelationships[e]=r,r}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach(((i,s)=>{"attribute"===i.kind&&e.call(t,s,i)}))}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach(((i,s)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,s,i)}))}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const f=(0,o.L1)("SaveOp",Symbol("SaveOp"))
class p{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new u(t,e,this._store)}scheduleSave(e,t){const i=(0,n.ud)(),s={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},r={snapshot:this.createSnapshot(e,t),resolver:i,identifier:e,options:t,queryRequest:s},o=this.requestCache._enqueue(i.promise,r.queryRequest)
return function(e,t){const{snapshot:i,resolver:s,identifier:r,options:n}=t,o=e.adapterFor(r.type),a=n[f],l=i.modelName,c=e.modelFor(l)
let d=Promise.resolve().then((()=>o[a](e,c,i)))
const u=e.serializerFor(l)
d=d.then((t=>{if(t)return h(u,e,c,t,i.id,a)})),s.resolve(d)}(this._store,r),o}scheduleFetch(e,t,s){const r={data:[{op:"findRecord",recordIdentifier:e,options:t}]},o=this.getPendingFetch(e,t)
if(o)return o
const l=e.type,c=(0,n.ud)(),d={identifier:e,resolver:c,options:t,queryRequest:r},h=c.promise,u=this._store,f=!u._instanceCache.recordIsLoaded(e)
let p=this.requestCache._enqueue(h,d.queryRequest).then((i=>{i.data&&!Array.isArray(i.data)&&(i.data.lid=e.lid)
const s=u._push(i,t.reload)
return s&&!Array.isArray(s)?s:e}),(t=>{const s=u.cache
if(!s||s.isEmpty(e)||f){let t=!0
if(!s){const s=(0,(0,a.A)(i(151)).graphFor)(u)
t=s.isReleasable(e),t||s.unload(e,!0)}(s||t)&&(u._enableAsyncFlush=!0,u._instanceCache.unloadRecord(e),u._enableAsyncFlush=null)}throw t}))
0===this._pendingFetch.size&&new Promise((e=>setTimeout(e,0))).then((()=>{this.flushAllPendingFetches()}))
const y=this._pendingFetch
let m=y.get(l)
m||(m=new Map,y.set(l,m))
let g=m.get(e)
return g||(g=[],m.set(e,g)),g.push(d),d.promise=p,p}getPendingFetch(e,t){const i=this._pendingFetch.get(e.type)?.get(e)
if(i){const e=i.find((e=>function(e={},t={}){return i=e.adapterOptions,s=t.adapterOptions,(!i||i===s||0===Object.keys(i).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const i=(Array.isArray(e)?e:e.split(",")).sort(),s=(Array.isArray(t)?t:t.split(",")).sort()
if(i.join(",")===s.join(","))return!0
for(let r=0;r<i.length;r++)if(!s.includes(i[r]))return!1
return!0}(e.include,t.include)
var i,s}(t,e.options)))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach(((t,i)=>function(e,t,i){const s=e.adapterFor(i)
if(s.findMany&&s.coalesceFindRequests){const r=[]
t.forEach(((e,i)=>{e.length>1||(t.delete(i),r.push(e[0]))}))
const n=r.length
if(n>1){const t=new Array(n),o=new Map
for(let i=0;i<n;i++){const s=r[i]
t[i]=e._fetchManager.createSnapshot(s.identifier,s.options),o.set(t[i],s)}let a
a=s.groupRecordsForFindMany?s.groupRecordsForFindMany(e,t):[t]
for(let r=0,n=a.length;r<n;r++)g(e,o,a[r],s,i)}else 1===n&&m(e,s,r[0])}t.forEach((t=>{t.forEach((t=>{m(e,s,t)}))}))}(e,t,i))),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},i){const s=function(e,t){const i=e.cache
if(!i)return!0
const s=i.isNew(t),r=i.isDeleted(t),n=i.isEmpty(t)
return(!s||r)&&n}(this._store._instanceCache,e),r=function(e,t){const i=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&i.getPendingRequestsForRecord(t).some((e=>"query"===e.type))}(this._store._instanceCache,e)
let n
return s?(t.reload=!0,n=this.scheduleFetch(e,t,i)):n=r?this.getPendingFetch(e,t):Promise.resolve(e),n}destroy(){this.isDestroyed=!0}}function y(e,t,i){for(let s=0,r=t.length;s<r;s++){const r=t[s],n=e.get(r)
n&&n.resolver.reject(i||new Error(`Expected: '<${r.modelName}:${r.id}>' to be present in the adapter provided payload, but it was not found.`))}}function m(e,t,i){const n=i.identifier,o=n.type,a=e._fetchManager.createSnapshot(n,i.options),l=e.modelFor(n.type),c=n.id
let d=Promise.resolve().then((()=>t.findRecord(e,l,n.id,a)))
d=d.then((t=>{const i=h(e.serializerFor(o),e,l,t,c,"findRecord")
return(0,r.warn)(`You requested a record of type '${o}' with id '${c}' but the adapter returned a payload with primary data having an id of '${i.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,s.pG)(i.data.id)===(0,s.pG)(c),{id:"ds.store.findRecord.id-mismatch"}),i})),i.resolver.resolve(d)}function g(e,t,i,s,n){i.length>1?function(e,t,i,s){const r=e.modelFor(i)
return Promise.resolve().then((()=>{const i=s.map((e=>e.id))
return t.findMany(e,r,i,s)})).then((t=>h(e.serializerFor(i),e,r,t,null,"findMany")))}(e,s,n,i).then((s=>{!function(e,t,i,s){const n=new Map
for(let r=0;r<i.length;r++){const e=i[r].id
let t=n.get(e)
t||(t=[],n.set(e,t)),t.push(i[r])}const o=Array.isArray(s.included)?s.included:[],a=s.data
for(let r=0,c=a.length;r<c;r++){const e=a[r],i=n.get(e.id)
n.delete(e.id),i?i.forEach((i=>{t.get(i).resolver.resolve({data:e})})):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===n.size)return
const l=[]
n.forEach((e=>{l.push(...e)})),(0,r.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...n.values()].map((e=>e[0].id)).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),y(t,l)}(e,t,i,s)})).catch((e=>{y(t,i,e)})):1===i.length&&m(e,s,t.get(i[0]))}function _(e){}}}])

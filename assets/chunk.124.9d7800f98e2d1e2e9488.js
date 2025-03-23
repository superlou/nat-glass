/*! For license information please see chunk.124.9d7800f98e2d1e2e9488.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[124],{74:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i})
var i=(0,r(336).helper)((function(e){let[t,...r]=e
return t._curry(...r)}))},81:(e,t,r)=>{function i(e,t,r){return(t="symbol"==typeof(i=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var i}function n(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function s(e,t,r,i,n){var s={}
return Object.keys(i).forEach((function(e){s[e]=i[e]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),s),n&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(n):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,t,s),s=null),s}r.d(t,{_:()=>s,a:()=>n,b:()=>i})},151:(e,t,r)=>{r.r(t),r.d(t,{graphFor:()=>W,isBelongsTo:()=>u,peekGraph:()=>V})
var i=r(1603),n=r(1274),s=r(7375)
function o(e){return e._store}function a(e,t,r){return(e[t]=e[t]||Object.create(null))[r]}function c(e,t,r,i){(e[t]=e[t]||Object.create(null))[r]=i}function l(e){if(!e.id)return!0
const t=(0,n.oX)(e)
return Boolean(t?.isNew(e))}function u(e){return"belongsTo"===e.definition.kind}function d(e){return e.definition.isImplicit}function h(e){return"hasMany"===e.definition.kind}function f(e,t){if(u(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(h(e)){for(let r=0;r<e.remoteState.length;r++){const i=e.remoteState[r]
t(i)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach((r=>{e.localMembers.has(r)||t(r)}))}function p(e,t,r,i){if(u(t))t.remoteState===r&&(t.remoteState=null),t.localState===r&&(t.localState=null,m(e,t))
else if(h(t)){t.remoteMembers.delete(r),t.additions?.delete(r)
const i=t.removals?.delete(r),n=t.remoteState.indexOf(r)
if(-1!==n&&t.remoteState.splice(n,1),!i){const i=t.localState?.indexOf(r);-1!==i&&void 0!==i&&(t.localState.splice(i,1),m(e,t))}}else t.remoteMembers.delete(r),t.localMembers.delete(r)}function m(e,t){if(!t.accessed)return
const r=t.identifier,i=t.definition.key
r!==e._removing&&e.store.notifyChange(r,"relationships",i)}function y(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const g=null,b=Date.now()
function v(e,t){return`implicit-${e}:${t}${b}`}function _(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit,e.inverseIsLinksMode=t.isLinksMode
const r=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=r,t.resetOnRemoteUpdate=r}function w(e){var t
y(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const r={},i=e.options
return r.kind=e.kind,r.key=e.name,r.type=e.type,r.isAsync=i.async,r.isImplicit=!1,r.isCollection="hasMany"===e.kind,r.isPolymorphic=i&&!!i.polymorphic,r.isLinksMode=i.linksMode??!1,r.inverseKey=i&&i.inverse||"",r.inverseType="",r.inverseIsAsync=g,r.inverseIsImplicit=i&&null===i.inverse||g,r.inverseIsCollection=g,r.inverseIsLinksMode=g,r.resetOnRemoteUpdate=!!y(e)&&!e.options?.linksMode&&!1!==e.options?.resetOnRemoteUpdate,r}function k(e,t,r){r?function(e,t,r){const n=t.value,s=e.get(t.record,t.field)
r&&e._addToTransaction(s)
const o=s.isDirty
s.state.hasReceivedData||(s.isDirty=!0),s.state.hasReceivedData=!0
const{definition:a}=s,{type:c}=s.definition,u=O(n,s,(i=>{c!==i.type&&e.registerPolymorphicType(c,i.type),s.additions?.has(i)&&s.additions.delete(i),S(e,i,a.inverseKey,t.record,r)}),(i=>{s.removals?.has(i)&&s.removals.delete(i),R(e,i,a.inverseKey,t.record,r)}))
if(s.remoteMembers=u.finalSet,s.remoteState=u.finalState,u.changed&&(s.isDirty=!0),s._diff=u,"hasMany"===s.definition.kind&&!1!==s.definition.resetOnRemoteUpdate&&(u.changed||o)){const r={removals:[],additions:[],triggered:!1}
s.removals&&(s.isDirty=!0,s.removals.forEach((i=>{r.triggered=!0,r.removals.push(i),S(e,i,a.inverseKey,t.record,!1)})),s.removals=null),s.additions&&(s.additions.forEach((i=>{l(i)||(r.triggered=!0,r.additions.push(i),s.isDirty=!0,s.additions.delete(i),R(e,i,a.inverseKey,t.record,!1))})),0===s.additions.size&&(s.additions=null)),r.triggered&&(0,i.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${r.additions.map((e=>e.lid)).join(", ")}]\n\tRemoved: [${r.removals.map((e=>e.lid)).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}s.isDirty&&!o&&E(e,s)}(e,t,r):function(e,t,r){const i=t.value,n=e.get(t.record,t.field)
n.state.hasReceivedData=!0
const{additions:s,removals:o}=n,{inverseKey:a,type:c}=n.definition,{record:l}=t,u=n.isDirty
let d=!1
const h=i=>{const n=o?.has(i)
!n&&s?.has(i)||(c!==i.type&&e.registerPolymorphicType(c,i.type),d=!0,S(e,i,a,t.record,r),n&&o.delete(i))},f=t=>{const i=s?.has(t)
!i&&o?.has(t)||(d=!0,R(e,t,a,l,r),i&&s.delete(t))},p=O(i,n,h,f)
s&&s.size>0&&s.forEach((e=>{p.add.has(e)||(d=!0,f(e))})),o&&o.size>0&&o.forEach((e=>{p.del.has(e)||(d=!0,h(e))}))
const y=p.changed||d
n.additions=p.add,n.removals=p.del,n.localState=p.finalState,y&&!u&&m(e,n)}(e,t,r)}function S(e,t,r,i,n){const s=e.get(t,r),{type:o}=s.definition
o!==i.type&&e.registerPolymorphicType(o,i.type),u(s)?(s.state.hasReceivedData=!0,s.state.isEmpty=!1,n&&(e._addToTransaction(s),null!==s.remoteState&&R(e,s.remoteState,s.definition.inverseKey,t,n),s.remoteState=i),s.localState!==i&&(!n&&s.localState&&R(e,s.localState,s.definition.inverseKey,t,n),s.localState=i,m(e,s))):h(s)?n?s.remoteMembers.has(i)||(e._addToTransaction(s),s.remoteState.push(i),s.remoteMembers.add(i),s.additions?.has(i)?s.additions.delete(i):(s.isDirty=!0,s.state.hasReceivedData=!0,E(e,s))):(s.isDirty||s.localState||(s.localState=[]),C(e,0,s,i,null)&&m(e,s)):n?s.remoteMembers.has(i)||(s.remoteMembers.add(i),s.localMembers.add(i)):s.localMembers.has(i)||s.localMembers.add(i)}function R(e,t,r,i,n){const s=e.get(t,r)
u(s)?(s.state.isEmpty=!0,n&&(e._addToTransaction(s),s.remoteState=null),s.localState===i&&(s.localState=null,m(e,s))):h(s)?n?(e._addToTransaction(s),function(e,t){const{remoteMembers:r,additions:i,removals:n,remoteState:s}=e
if(!r.has(t))return!1
r.delete(t)
let o=s.indexOf(t)
return s.splice(o,1),n?.has(t)?(n.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}(s,i)&&m(e,s)):T(s,i)&&m(e,s):n?(s.remoteMembers.delete(i),s.localMembers.delete(i)):i&&s.localMembers.has(i)&&s.localMembers.delete(i)}function E(e,t){t.accessed&&e._scheduleLocalSync(t)}function A(e,t,r=!1){const n=e.get(t.record,t.field)
r&&e._addToTransaction(n)
const{definition:s,state:o}=n,a=r?"remoteState":"localState",c=n[a]
if(t.value!==c)if(c&&R(e,c,s.inverseKey,t.record,r),n[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(s.type!==t.value.type&&e.registerPolymorphicType(s.type,t.value.type),S(e,t.value,s.inverseKey,t.record,r)),r){const{localState:t,remoteState:r}=n
if(t&&l(t)&&!r)return
t!==r&&t===c?(n.localState=r,m(e,n)):t!==r&&t!==c&&!1!==n.definition.resetOnRemoteUpdate&&(n.localState=r,(0,i.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${n.identifier.type}>.${n.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${c?"Removed: "+c.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),m(e,n))}else m(e,n)
else if(o.hasReceivedData=!0,r){const{localState:o}=n
if(o&&l(o)&&!c)return
c&&o===c?function(e,t,r,i,n){const s=e.get(t,r)
h(s)&&n&&s.remoteMembers.has(i)&&m(e,s)}(e,c,s.inverseKey,t.record,r):o!==t.value&&!1!==n.definition.resetOnRemoteUpdate&&(n.localState=c,(0,i.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${n.identifier.type}>.${n.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${c?"Removed: "+c.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),m(e,n))}}function O(e,t,r,i){const n=new Set(e),{localState:s,remoteState:o,remoteMembers:a}=t
if(e.length!==n.size){const{diff:c,duplicates:l}=function(e,t,r,i,n,s,o,a){const c=t.length,l=i.length,u=Math.max(c,l)
let d=r.size!==n.size,h=!1
const f=new Set,p=new Set,m=new Map,y=new Set,g=[],b=e?.length??0
for(let v=0,_=0;v<u;v++){let u,w=!1
if(v<c)if(u=t[v],y.has(u)){let e=m.get(u)
void 0===e&&(e=[],m.set(u,e)),e.push(v)}else g[_]=u,y.add(u),w=!0,n.has(u)||(v<b&&e[v]!==u&&(d=!0),f.add(u),s(u))
if(v<l){const t=i[v]
u!==i[_]?(h=!0,!a&&v<b?e[_]!==u&&(d=!0):d=!0):a&&!d&&_<b&&e[_]!==u&&(d=!0),r.has(t)||(d=!0,p.add(t),o(t))}else w&&_<l&&u!==i[_]&&(d=!0)
w&&_++}return{diff:{add:f,del:p,finalState:g,finalSet:y,changed:d,remoteOrderChanged:h},duplicates:m}}(s,e,n,o,a,r,i,t.definition.resetOnRemoteUpdate)
return c}return function(e,t,r,i,n,s,o,a){const c=t.length,l=i.length,u=Math.max(c,l),d=e?c===e.length:c===l
let h=r.size!==n.size,f=e?r.size!==e.length:h
const p=new Set,m=new Set,y=e?.length??0
for(let g=0;g<u;g++){let u
if(g<c&&(u=t[g],!n.has(u))&&(g<y&&e[g]!==u&&(f=!0),p.add(u),s(u)),g<l){const t=i[g]
d&&u!==t?(h=!0,g<y?e[g]!==u&&(f=!0):g<c&&(f=!0)):a&&d&&!f&&g<y&&e[g]!==t&&(f=!0),r.has(t)||(h=!0,m.add(t),o(t))}}return{add:p,del:m,finalState:t,finalSet:r,changed:f,remoteOrderChanged:h}}(s,e,n,o,a,r,i,t.definition.resetOnRemoteUpdate)}function C(e,t,r,i,n){const{remoteMembers:s,removals:o}=r
let a=r.additions
if((s.has(i)||a?.has(i))&&!o?.has(i))return!1
if(o?.has(i))o.delete(i)
else{a||(a=r.additions=new Set),r.state.hasReceivedData=!0,a.add(i)
const{type:t}=r.definition
t!==i.type&&e.registerPolymorphicType(i.type,t)}return r.localState&&(null!==n?r.localState.splice(n,0,i):r.localState.push(i)),!0}function T(e,t){const{remoteMembers:r,additions:i}=e
let n=e.removals
if(!r.has(t)&&!i?.has(t)||n?.has(t))return!1
if(i?.has(t)?i.delete(t):(n||(n=e.removals=new Set),n.add(t)),e.localState){const r=e.localState.indexOf(t)
e.localState.splice(r,1)}return!0}function M(e,t,r,i){u(i)?A(e,{op:"replaceRelatedRecord",record:t,field:r,value:i.remoteState},!1):(k(e,{op:"replaceRelatedRecords",record:t,field:r,value:i.remoteState.slice()},!1),m(e,i))}function j(e,t){e.accessed=!0
const r={}
return e.state.hasReceivedData&&(r.data=t?e.remoteState.slice():function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach((e=>{const r=t.indexOf(e)
t.splice(r,1)})),e.additions?.forEach((e=>{t.push(e)})),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(r.links=e.links),e.meta&&(r.meta=e.meta),r}function P(e,t){let r
e.accessed=!0
const i={}
return t&&e.remoteState?r=e.remoteState:!t&&e.localState&&(r=e.localState),(t&&null===e.remoteState||null===e.localState)&&e.state.hasReceivedData&&(r=null),e.links&&(i.links=e.links),void 0!==r&&(i.data=r),e.meta&&(i.meta=e.meta),i}function x(e,t,r,i,n,s){C(e,0,t,i,n??null)&&S(e,i,t.definition.inverseKey,r,s)}function D(e,t,r,i,n){T(t,i)&&R(e,i,t.definition.inverseKey,r,n)}function F(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function N(e,t){for(let r=0;r<e.length;r++)e[r]=t.upgradeIdentifier(e[r])
return e}const I=(0,s.L1)("Graphs",new Map)
class q{constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const r=this.identifiers.get(e)
return!!r&&void 0!==r[t]}getDefinition(e,t){let r=this._metaCache[e.type],i=r?.[t]
if(!i){const n=function(e,t,r){const i=e._definitionCache,n=e.store,s=e._potentialPolymorphicTypes,{type:l}=t
let u=a(i,l,r)
if(void 0!==u)return u
const d=n.schema.fields(t).get(r)
if(!d){if(s[l]){const e=Object.keys(s[l])
for(let t=0;t<e.length;t++){const n=a(i,e[t],r)
if(n)return c(i,l,r,n),n.rhs_modelNames.push(l),n}}return i[l][r]=null,null}const h=w(d)
let f,p
const m=h.type
if(null===h.inverseKey?f=null:(p=function(e,t,r){const i=e.schema.fields(t).get(r)
return i?i.options.inverse:null}(o(n),t,r),f=!p&&h.isPolymorphic&&h.inverseKey?{kind:"belongsTo",key:h.inverseKey,type:l,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:p?w(n.schema.fields({type:m}).get(p)):null),!f){p=v(l,r),f={kind:"implicit",key:p,type:l,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},_(h,f),_(f,h)
const e={lhs_key:`${l}:${r}`,lhs_modelNames:[l],lhs_baseModelName:l,lhs_relationshipName:r,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:f.key,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:f.key,rhs_definition:f,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:l===m,isReflexive:!1}
return c(i,m,p,e),c(i,l,r,e),e}const y=f.type
if(u=a(i,y,r)||a(i,m,p),u)return(u.lhs_baseModelName===y?u.lhs_modelNames:u.rhs_modelNames).push(l),c(i,l,r,u),u
_(h,f),_(f,h)
const g=[l]
l!==y&&g.push(y)
const b=y===m,k={lhs_key:`${y}:${r}`,lhs_modelNames:g,lhs_baseModelName:y,lhs_relationshipName:r,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:`${m}:${p}`,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:p,rhs_definition:f,rhs_isPolymorphic:f.isPolymorphic,hasInverse:!0,isSelfReferential:b,isReflexive:b&&r===p}
return c(i,y,r,k),c(i,l,r,k),c(i,m,p,k),k}(this,e,t)
i=function(e,t,r){const i=e.isSelfReferential
return 1==(r===e.lhs_relationshipName)&&(!0===i||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(n,e.type,t)?n.lhs_definition:n.rhs_definition,r=this._metaCache[e.type]=r||{},r[t]=i}return i}get(e,t){let r=this.identifiers.get(e)
r||(r=Object.create(null),this.identifiers.set(e,r))
let i=r[t]
if(!i){const n=this.getDefinition(e,t)
i="belongsTo"===n.kind?r[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null,accessed:!1}}(n,e):"hasMany"===n.kind?r[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!1,transactionRef:0,accessed:!1,_diff:void 0}}(n,e):r[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(n,e)}return i}getData(e,t){const r=this.get(e,t)
return u(r)?P(r,!1):j(r,!1)}getRemoteData(e,t){const r=this.get(e,t)
return u(r)?P(r,!0):j(r,!0)}registerPolymorphicType(e,t){const r=this._potentialPolymorphicTypes
let i=r[e]
i||(i=r[e]=Object.create(null)),i[t]=!0
let n=r[t]
n||(n=r[t]=Object.create(null)),n[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const r=Object.keys(t)
for(let i=0;i<r.length;i++){const n=t[r[i]]
if(void 0!==n&&n.definition.inverseIsAsync&&!l(e))return!1}return!0}unload(e,t){const r=this.identifiers.get(e)
r&&Object.keys(r).forEach((e=>{const i=r[e]
i&&(function(e,t,r){if(d(t))return void(e.isReleasable(t.identifier)&&z(e,t))
const{identifier:i}=t,{inverseKey:n}=t.definition
t.definition.inverseIsImplicit||f(t,(t=>function(e,t,r,i,n){if(!e.has(t,r))return
const s=e.get(t,r)
u(s)&&s.localState&&i!==s.localState||function(e,t,r,i){if(u(t)){const r=t.localState
!t.definition.isAsync||r&&l(r)?(t.localState===r&&null!==r&&(t.localState=null),t.remoteState===r&&null!==r&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!l(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,i||m(e,t)}else!t.definition.isAsync||r&&l(r)?p(e,t,r):t.state.hasDematerializedInverse=!0,i||m(e,t)}(e,s,i,n)}(e,t,n,i,r))),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,L(t),t.definition.isAsync||r||m(e,t))}(this,i,t),d(i)&&(r[e]=void 0))}))}_isDirty(e,t){const r=this.identifiers.get(e)
if(!r)return!1
const i=r[t]
if(!i)return!1
if(u(i))return i.localState!==i.remoteState
if(h(i)){const e=null!==i.additions&&i.additions.size>0,t=null!==i.removals&&i.removals.size>0
return e||t||B(i)}return!1}getChanged(e){const t=this.identifiers.get(e),r=new Map
if(!t)return r
const i=Object.keys(t)
for(let n=0;n<i.length;n++){const e=i[n],s=t[e]
if(s)if(u(s))s.localState!==s.remoteState&&r.set(e,{kind:"resource",remoteState:s.remoteState,localState:s.localState})
else if(h(s)){const t=null!==s.additions&&s.additions.size>0,i=null!==s.removals&&s.removals.size>0,n=B(s);(t||i||n)&&r.set(e,{kind:"collection",additions:new Set(s.additions),removals:new Set(s.removals),remoteState:s.remoteState,localState:j(s,!1).data||[],reordered:n})}}return r}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const r=Object.keys(t)
for(let i=0;i<r.length;i++)if(this._isDirty(e,r[i]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),r=[]
if(!t)return r
const i=Object.keys(t)
for(let n=0;n<i.length;n++){const s=i[n],o=t[s]
o&&this._isDirty(e,s)&&(M(this,e,s,o),r.push(s))}return r}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,r){const i=e[t.kind]=e[t.kind]||new Map
let n=i.get(t.inverseType)
n||(n=new Map,i.set(t.inverseType,n))
let s=n.get(r.field)
s||(s=[],n.set(r.field,s)),s.push(r)}(this._pushedUpdates,t,e)}this._willSyncRemote||(this._willSyncRemote=!0,o(this.store)._schedule("coalesce",(()=>this._flushRemoteQueue())))}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,r){Object.keys(r).forEach((i=>{const n=r[i]
n&&function(e,t,r){r.identifier=t.value,f(r,(i=>{const n=e.get(i,r.definition.inverseKey)
!function(e,t,r){u(t)?function(e,t,r){t.remoteState===r.record&&(t.remoteState=r.value),t.localState===r.record&&(t.localState=r.value,m(e,t))}(e,t,r):h(t)?function(e,t,r){if(t.remoteMembers.has(r.record)){t.remoteMembers.delete(r.record),t.remoteMembers.add(r.value)
const e=t.remoteState.indexOf(r.record)
t.remoteState.splice(e,1,r.value),t.isDirty=!0}t.additions?.has(r.record)&&(t.additions.delete(r.record),t.additions.add(r.value),t.isDirty=!0),t.removals?.has(r.record)&&(t.removals.delete(r.record),t.removals.add(r.value),t.isDirty=!0),t.isDirty&&m(e,t)}(e,t,r):function(e,t,r){t.remoteMembers.has(r.record)&&(t.remoteMembers.delete(r.record),t.remoteMembers.add(r.value)),t.localMembers.has(r.record)&&(t.localMembers.delete(r.record),t.localMembers.add(r.value))}(0,t,r)}(e,n,t)}))}(e,t,n)}))}(this,e,t)
break}case"updateRelationship":(function(e,t){const r=e.get(t.record,t.field),{definition:n,state:s,identifier:o}=r,{isCollection:a}=n,c=t.value
let l=!1,u=!1
if(c.meta&&(r.meta=c.meta),void 0!==c.data)if(l=!0,a){null===c.data&&(c.data=[])
const r=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:N(c.data,r)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:c.data?e.store.identifierCache.upgradeIdentifier(c.data):null},!0)
else!1!==n.isAsync||s.hasReceivedData||(l=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(c.links){const e=r.links
if(r.links=c.links,c.links.related){const t=F(c.links.related),r=e&&e.related?F(e.related):null,a=r?r.href:null
t&&t.href&&t.href!==a&&((0,i.warn)(`You pushed a record of type '${o.type}' with a relationship '${n.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,n.isAsync||s.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),u=!0)}}if(r.state.hasFailedLoadAttempt=!1,l){const e=null===c.data||Array.isArray(c.data)&&0===c.data.length
r.state.hasReceivedData=!0,r.state.isStale=!1,r.state.hasDematerializedInverse=!1,r.state.isEmpty=e}else u&&(a||!r.state.hasReceivedData||(d=r.transactionRef,h=e._transaction,0===d||null===h||d<h)?(r.state.isStale=!0,m(e,r)):r.state.isStale=!1)
var d,h})(this,e)
break
case"deleteRecord":{const t=e.record,r=this.identifiers.get(t)
r&&(Object.keys(r).forEach((e=>{const t=r[e]
t&&(r[e]=void 0,z(this,t))})),this.identifiers.delete(t))
break}case"replaceRelatedRecord":A(this,e,t)
break
case"addToRelatedRecords":(function(e,t,r){const{record:i,value:n,index:s}=t,o=e.get(i,t.field)
if(o.isDirty||o.localState||(o.localState=[]),Array.isArray(n))for(let a=0;a<n.length;a++)x(e,o,i,n[a],void 0!==s?s+a:s,r)
else x(e,o,i,n,s,r)
m(e,o)})(this,e,t)
break
case"removeFromRelatedRecords":(function(e,t,r){const{record:i,value:n}=t,s=e.get(i,t.field)
if(Array.isArray(n))for(let o=0;o<n.length;o++)D(e,s,i,n[o],r)
else D(e,s,i,n,r)
m(e,s)})(this,e,t)
break
case"replaceRelatedRecords":k(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,o(this.store)._schedule("sync",(()=>this._flushLocalQueue())))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,s.Yj)("transactionRef")??0
this._transaction=++e,(0,s.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:r,hasMany:i,belongsTo:n}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let s=0;s<r.length;s++)this.update(r[s],!0)
i&&$(this,i),n&&$(this,n),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach((e=>m(this,e)))}destroy(){I.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function $(e,t){t.forEach((t=>{t.forEach((t=>{!function(e,t){for(let r=0;r<t.length;r++)e.update(t[r],!0)}(e,t)}))}))}function L(e){u(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function z(e,t){const{identifier:r}=t,{inverseKey:i}=t.definition
f(t,(t=>{e.has(t,i)&&p(e,e.get(t,i),r)})),u(t)?(t.definition.isAsync||L(t),t.localState=null):h(t)?t.definition.isAsync||(L(t),m(e,t)):(t.remoteMembers.clear(),t.localMembers.clear())}function B(e){if(e.isDirty)return!1
const{remoteState:t,localState:r,additions:i,removals:n}=e
for(let s=0,o=0;s<t.length;s++){const e=t[s],a=r[o]
if(e!==a){if(n&&n.has(e))continue
if(i&&i.has(a)){o++,s--
continue}return!0}o++}return!1}function U(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function V(e){return I.get(U(e))}function W(e){const t=U(e)
let r=I.get(t)
return r||(r=new q(t),I.set(t,r),o(t)._graph=r),r}},495:(e,t,r)=>{r.r(t),r.d(t,{cancelHelper:()=>a,default:()=>c})
var i=r(336),n=r(1603),s=r(9781)
const o="the 'cancel-all' template helper was invoked"
function a(e){let t=e[0]
return t&&"function"==typeof t.cancelAll||(0,n.assert)(`The first argument passed to the \`cancel-all\` helper should be a Task or TaskGroup (without quotes); you passed ${t}`,!1),(0,s.F)("cancel-all","cancelAll",[t,{reason:o}])}var c=(0,i.helper)(a)},1274:(e,t,r)=>{r.d(t,{RX:()=>i.l,TP:()=>i.o,Wz:()=>i.t,YN:()=>i.v,di:()=>i.u,fV:()=>i.s,i:()=>i.q,o:()=>i.r,oX:()=>i.p,pG:()=>i.g,u2:()=>i.k})
var i=r(5564)},1491:(e,t,r)=>{r.r(t),r.d(t,{FetchManager:()=>i.F,SaveOp:()=>i.S,Snapshot:()=>i.c,SnapshotRecordArray:()=>i.b,upgradeStore:()=>i.u})
var i=r(7910)},1678:(e,t,r)=>{r.r(t),r(1603),r(7262)},1788:(e,t,r)=>{r.d(t,{k5:()=>s,pm:()=>n})
var i=r(7375)
const n=(0,i.L1)("Store",Symbol("Store")),s=(0,i.L1)("$type",Symbol("$type"));(0,i.L1)("RequestSignature",Symbol("RequestSignature"))},1934:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_})
var i=r(7853)
class n{constructor(e,t,r){this.limit=e,this.func=t,this.store=r,this.size=0,this.misses=0,this.hits=0,this.store=r||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const s=/[ _]/g,o=new n(1e3,(e=>{return(t=e,y.get(t)).replace(s,"-")
var t})),a=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,l=(new n(1e3,(e=>e.replace(a,((e,t,r)=>r?r.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),/^(\-|_)+(.)?/),u=/(.)(\-|\_|\.|\s)+(.)?/g,d=/(^|\/|\.)([a-z])/g,h=(new n(1e3,(e=>{const t=(e,t,r)=>r?`_${r.toUpperCase()}`:"",r=(e,t,r,i)=>t+(i?i.toUpperCase():""),i=e.split("/")
for(let n=0;n<i.length;n++)i[n]=i[n].replace(l,t).replace(u,r)
return i.join("/").replace(d,(e=>e.toUpperCase()))})),/([a-z\d])([A-Z]+)/g),f=/\-|\s+/g,p=(new n(1e3,(e=>e.replace(h,"$1_$2").replace(f,"_").toLowerCase())),/(^|\/)([a-z\u00C0-\u024F])/g),m=(new n(1e3,(e=>e.replace(p,(e=>e.toUpperCase())))),/([a-z\d])([A-Z])/g),y=new n(1e3,(e=>e.replace(m,"$1_$2").toLowerCase()))
var g=r(1603),b=r(9553)
function v(e){return"object"==typeof e&&Boolean(e)}class _ extends i.default{constructor(...e){var t,r,i
super(...e),t=this,r="existingStyles",i=new Set,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}setStyles(e,t){const{existingStyles:r}=this,i=new Set(r)
r.clear(),t.forEach((([t,n])=>{(0,g.assert)(`Your given value for property '${t}' is ${n} (${(0,b.typeOf)(n)}). Accepted types are string and undefined. Please change accordingly.`,void 0===n||"string"===(0,b.typeOf)(n))
let s=""
n&&n.includes("!important")&&(s="important",n=n.replace("!important","")),e.style.setProperty(t,n,s),i.delete(t),r.add(t)})),i.forEach((t=>e.style.removeProperty(t)))}modify(e,t,r){this.setStyles(e,function(e,t){return[...e.filter(v),t].map((e=>Object.entries(e).map((([e,t])=>{return[(r=e,o.get(r)),t]
var r})))).flat()}(t,r))}}},2139:(e,t,r)=>{function i(e,t){let r=e.load(t)
if(!r)throw new Error(t+" must export an initializer.")
let i=r.default
if(!i)throw new Error(t+" must have a default export")
return i.name||(i.name=t.slice(t.lastIndexOf("/")+1)),i}function n(e,t,r){var n=t+"/initializers/",s=t+"/instance-initializers/",o=[],a=[]
let c
c=r?{names:()=>Object.keys(r),load:e=>r[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let i of c.names())i.startsWith(n)&&!i.endsWith("-test")?o.push(i):i.startsWith(s)&&!i.endsWith("-test")&&a.push(i)
!function(e,t,r){for(let n of r)e.initializer(i(t,n))}(e,c,o),function(e,t,r){for(let n of r)e.instanceInitializer(i(t,n))}(e,c,a)}r.r(t),r.d(t,{default:()=>n})},2798:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a})
var i=r(336),n=r.n(i),s=r(1603)
function o(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends(n()){constructor(...e){super(...e),o(this,"callback",void 0),o(this,"named",void 0),o(this,"positional",void 0)}compute(e,t){const[r,...i]=e;(0,s.assert)(`\`{{will-destroy-helper}}\` expects a function as the first parameter. You provided: ${r}`,"function"==typeof r),this.callback=r,this.named=t,this.positional=i}willDestroy(){this.callback&&this.positional&&this.named&&this.callback(this.positional,this.named),super.willDestroy()}}},3193:(e,t,r)=>{function i(e){return e?.__esModule?e:{default:e,...e}}r.d(t,{A:()=>i})},3241:(e,t,r)=>{r.d(t,{ZH:()=>i.h,_k:()=>i.f,z9:()=>i.j})
var i=r(7262)},3299:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g})
var i,n,s,o,a,c=r(81),l=r(1223),u=r(2735),d=r.n(u),h=r(9553),f=r(1603)
const p="undefined"!=typeof FastBoot,m="routeDidChange",y=["separator","prepend","replace"]
let g=(i=(0,u.inject)("router"),n=(0,u.inject)("-document"),s=class extends(d()){constructor(e){if(super(e),(0,c.a)(this,"router",o,this),(0,c.a)(this,"document",a,this),(0,c.b)(this,"tokens",[]),(0,c.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,c.b)(this,"scheduleTitleUpdate",(()=>{(0,l.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const r=e.resolveRegistration("config:environment")
"object"==typeof(t=r)&&null!==t&&"pageTitle"in t&&y.forEach((e=>{if(!(0,h.isEmpty)(r.pageTitle[e])){const t=r.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,r=this._defaultConfig.prepend,i=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=i&&(e.replace=i)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const r=this.tokens.indexOf(t),i=[...this.tokens],n=t.previous
return e.previous=n,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),i.splice(r,1,e),void(this.tokens=i)}const r=this.tokens.slice(-1)[0]
r&&(e.previous=r??null,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:r,previous:i}=t
r&&(r.previous=i),i&&(i.next=r),t.previous=t.next=null
const n=[...this.tokens]
n.splice(n.indexOf(t),1),this.tokens=n}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const r=[]
for(;t--;){const i=e[t]
if(i){if(i.replace){r.unshift(i)
break}r.unshift(i)}}return r}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,r=[]
const i=[r],n=[]
return e.forEach((e=>{if(e.front)n.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],i.push(r))
const n=r[0]
n&&((e={...e}).separator=n.separator),r.unshift(e)}else t||(t=!0,r=[],i.push(r)),r.push(e)})),n.concat(i.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let r=0,i=e.length;r<i;r++){const n=e[r]
n&&n.title&&(t.push(n.title),r+1<i&&t.push(n.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
p?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){p||(0,f.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!p)return
const t=this.document.head,r=t.childNodes
for(let s=0;s<r.length;s++){const e=r[s]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const i=this.document.createElement("title"),n=this.document.createTextNode(e)
i.appendChild(n),t.appendChild(i)}titleDidUpdate(e){}},o=(0,c._)(s.prototype,"router",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,c._)(s.prototype,"document",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},3742:(e,t,r)=>{r.r(t),r.d(t,{cached:()=>v,dedupeTracked:()=>_,localCopy:()=>g,trackedReset:()=>b})
var i,n,s=r(1603),o=r(4471),a=r(473),c=r(4217)
function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let u=(i=class{constructor(){var e
l(this,"prevRemote",void 0),l(this,"peek",void 0),(e=n)&&Object.defineProperty(this,"value",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}},d=i.prototype,h="value",f=[a.tracked],p={configurable:!0,enumerable:!0,writable:!0,initializer:null},m={},Object.keys(p).forEach((function(e){m[e]=p[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),void 0===(m=f.slice().reverse().reduce((function(e,t){return t(d,h,e)||e}),m)).initializer&&(Object.defineProperty(d,h,m),m=null),n=m,i)
var d,h,f,p,m
function y(e,t,r){let i=t.get(e)
return void 0===i&&(i=new u,t.set(e,i),i.value=i.peek="function"==typeof r?r.call(e):r),i}function g(e,t){(0,s.assert)(`@localCopy() must be given a memo path as its first argument, received \`${String(e)}\``,"string"==typeof e)
let r=new WeakMap
return()=>{let i=t=>(0,o.get)(t,e)
return{get(){let e=y(this,r,t),{prevRemote:n}=e,s=i(this)
return n!==s&&(e.value=e.prevRemote=s),e.value},set(e){if(!r.has(this)){let n=y(this,r,t)
return n.prevRemote=i(this),void(n.value=e)}y(this,r,t).value=e}}}}function b(e){(0,s.assert)(`@trackedReset() must be given a memo path, a memo function, or config object with a memo path or function as its first argument, received \`${String(e)}\``,"string"==typeof e||"function"==typeof e||"object"==typeof e&&null!==e&&void 0!==e.memo)
let t=new WeakMap
return(r,i,n)=>{let s,a,c=n.initializer??(()=>{})
"object"==typeof e?(s=e.memo,a=e.update??c):(s=e,a=c)
let l="function"==typeof s?(e,t)=>s.call(e,e,i,t):e=>(0,o.get)(e,s)
return{get(){let e=y(this,t,c),{prevRemote:r}=e,n=l(this,r)
return n!==r&&(e.prevRemote=n,e.value=e.peek=a.call(this,this,i,e.peek)),e.value},set(e){y(this,t,c).value=e}}}}function v(e,t,r){(0,s.assert)("@cached can only be used on getters",r&&r.get)
let{get:i,set:n}=r,o=new WeakMap
return{get(){let e=o.get(this)
return void 0===e&&(e=(0,c.createCache)(i.bind(this)),o.set(this,e)),(0,c.getValue)(e)},set:n}}function _(){let e
const t=function(t,r,i){let{initializer:n}=i,{get:s,set:o}=(0,a.tracked)(t,r,i),c=new WeakMap
return{get(){if(!c.has(this)){let e=n?.call(this)
c.set(this,e),o.call(this,e)}return s.call(this)},set(t){c.has(this)&&e(t,c.get(this))||(c.set(this,t),o.call(this,t))}}}
return 3===arguments.length?(e=(e,t)=>e===t,t(...arguments)):1===arguments.length&&"function"==typeof arguments[0]?(e=arguments[0],t):void(0,s.assert)(`@dedupeTracked() can either be invoked without arguments or with one comparator function, received \`${String(arguments)}\``,!1)}},4065:(e,t,r)=>{r.d(t,{P:()=>s,q:()=>o})
const i=(0,r(7375).vs)("WarpDriveRuntimeConfig",{debug:{}}),n=globalThis.sessionStorage?.getItem("WarpDriveRuntimeConfig")
function s(){return i}function o(e){Object.assign(i.debug,e),globalThis.sessionStorage?.setItem("WarpDriveRuntimeConfig",JSON.stringify(i))}n&&Object.assign(i,JSON.parse(n))},4418:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c,performHelper:()=>a})
var i=r(336),n=r(1603),s=r(9781)
function o(e){return function(t){"function"==typeof e?e(t):null===e||(0,n.assert)(`The onError argument passed to the \`perform\` helper should be a function or null; you passed ${e}`,!1)}}function a(e,t){let r=(0,s.F)("perform","perform",e,t)
return t&&void 0!==t.onError?function(...e){try{return r(...e).catch(o(t.onError))}catch{o(t.onError)}}:r}var c=(0,i.helper)(a)},5113:(e,t,r)=>{r.r(t),r.d(t,{BooleanTransform:()=>c,DateTransform:()=>l,NumberTransform:()=>d,StringTransform:()=>h,default:()=>a})
var i=r(4471),n=r.n(i),s=r(1788)
function o(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=n()
class c{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class l{constructor(){o(this,s.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function u(e){return e==e&&e!==1/0&&e!==-1/0}class d{constructor(){o(this,s.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return u(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return u(t)?t:null}}static create(){return new this}}class h{constructor(){o(this,s.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},5266:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d})
var i,n,s,o=r(81),a=r(2735),c=r(336),l=r.n(c),u=r(4666)
let d=(i=(0,a.inject)("page-title"),n=class extends(l()){constructor(e){super(e),(0,o.a)(this,"tokens",s,this),(0,o.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},s=(0,o._)(n.prototype,"tokens",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},5473:(e,t,r)=>{r.r(t),r.d(t,{Task:()=>lr,TaskGroup:()=>hr,TaskGroupProperty:()=>ft,TaskInstance:()=>ar,TaskProperty:()=>ht,Yieldable:()=>ze,all:()=>$r,allSettled:()=>Lr,animationFrame:()=>qe,didCancel:()=>Mt,dropTask:()=>Or,dropTaskGroup:()=>Pr,enqueueTask:()=>Cr,enqueueTaskGroup:()=>xr,forever:()=>$e,getModifier:()=>Jt,hasModifier:()=>Zt,hash:()=>Br,hashSettled:()=>Ur,keepLatestTask:()=>Tr,keepLatestTaskGroup:()=>Dr,lastValue:()=>Er,race:()=>zr,rawTimeout:()=>Le,registerModifier:()=>Qt,restartableTask:()=>Mr,restartableTaskGroup:()=>Fr,task:()=>Nr,taskGroup:()=>Ir,timeout:()=>Ue,waitForEvent:()=>Zr,waitForProperty:()=>Xr,waitForQueue:()=>Jr})
var i=r(1223),n=r(3211),s=r.n(n)
function o(e,t){for(var r=0,i=e.length;r<i;r++)if(e[r]===t)return r
return-1}function a(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}var c={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var r=a(this),i=void 0;(i=r[e])||(i=r[e]=[]),-1===o(i,t)&&i.push(t)},off:function(e,t){var r,i=a(this),n=void 0
t?-1!==(r=o(n=i[e],t))&&n.splice(r,1):i[e]=[]},trigger:function(e,t,r){var i
if(i=a(this)[e])for(var n=0;n<i.length;n++)(0,i[n])(t,r)}},l={instrument:!1}
function u(e,t){if(2!==arguments.length)return l[e]
l[e]=t}function d(e){return"function"==typeof e}function h(e){return null!==e&&"object"==typeof e}c.mixin(l)
var f=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},p=Date.now||function(){return(new Date).getTime()},m=[]
function y(e,t,r){1===m.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:r&&r._id,label:t._label,timeStamp:p(),error:l["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<m.length;e++){var t=m[e],r=t.payload
r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),l.trigger(t.name,t.payload)}m.length=0}),50)}function g(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var r=new this(b,t)
return E(r,e),r}function b(){}var v=void 0,_=1,w=2,k=new j
function S(e){try{return e.then}catch(e){return k.error=e,k}}function R(e,t,r){t.constructor===e.constructor&&r===D&&e.constructor.resolve===g?function(e,t){t._state===_?O(e,t._result):t._state===w?(t._onError=null,C(e,t._result)):T(t,void 0,(function(r){t!==r?E(e,r):O(e,r)}),(function(t){return C(e,t)}))}(e,t):r===k?(C(e,k.error),k.error=null):d(r)?function(e,t,r){l.async((function(e){var i=!1,n=function(r,n){try{r.call(n,(function(r){i||(i=!0,t!==r?E(e,r):O(e,r))}),(function(t){i||(i=!0,C(e,t))}))}catch(e){return e}}(r,t,e._label)
!i&&n&&(i=!0,C(e,n))}),e)}(e,t,r):O(e,t)}function E(e,t){var r,i
e===t?O(e,t):(i=typeof(r=t),null===r||"object"!==i&&"function"!==i?O(e,t):R(e,t,S(t)))}function A(e){e._onError&&e._onError(e._result),M(e)}function O(e,t){e._state===v&&(e._result=t,e._state=_,0===e._subscribers.length?l.instrument&&y("fulfilled",e):l.async(M,e))}function C(e,t){e._state===v&&(e._state=w,e._result=t,l.async(A,e))}function T(e,t,r,i){var n=e._subscribers,s=n.length
e._onError=null,n[s]=t,n[s+_]=r,n[s+w]=i,0===s&&e._state&&l.async(M,e)}function M(e){var t=e._subscribers,r=e._state
if(l.instrument&&y(r===_?"fulfilled":"rejected",e),0!==t.length){for(var i=void 0,n=void 0,s=e._result,o=0;o<t.length;o+=3)i=t[o],n=t[o+r],i?x(r,i,n,s):n(s)
e._subscribers.length=0}}function j(){this.error=null}var P=new j
function x(e,t,r,i){var n=d(r),s=void 0,o=void 0
if(n){if(s=function(e,t){try{return e(t)}catch(e){return P.error=e,P}}(r,i),s===P)o=s.error,s.error=null
else if(s===t)return void C(t,new TypeError("A promises callback cannot return that same promise."))}else s=i
t._state!==v||(n&&void 0===o?E(t,s):void 0!==o?C(t,o):e===_?O(t,s):e===w&&C(t,s))}function D(e,t,r){var i=this,n=i._state
if(n===_&&!e||n===w&&!t)return l.instrument&&y("chained",i,i),i
i._onError=null
var s=new i.constructor(b,r),o=i._result
if(l.instrument&&y("chained",i,s),n===v)T(i,s,e,t)
else{var a=n===_?e:t
l.async((function(){return x(n,s,a,o)}))}return s}var F=function(){function e(e,t,r,i){this._instanceConstructor=e,this.promise=new e(b,i),this._abortOnReject=r,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var r=t.length||0
this.length=r,this._remaining=r,this._result=new Array(r),this._enumerate(t),0===this._remaining&&O(this.promise,this._result)},e.prototype._enumerate=function(e){for(var t=this.length,r=this.promise,i=0;r._state===v&&i<t;i++)this._eachEntry(e[i],i)},e.prototype._settleMaybeThenable=function(e,t){var r=this._instanceConstructor,i=r.resolve
if(i===g){var n=S(e)
if(n===D&&e._state!==v)e._onError=null,this._settledAt(e._state,t,e._result)
else if("function"!=typeof n)this._remaining--,this._result[t]=this._makeResult(_,t,e)
else if(r===$){var s=new r(b)
R(s,e,n),this._willSettleAt(s,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(i(e),t)},e.prototype._eachEntry=function(e,t){var r
null!==(r=e)&&"object"==typeof r?this._settleMaybeThenable(e,t):(this._remaining--,this._result[t]=this._makeResult(_,t,e))},e.prototype._settledAt=function(e,t,r){var i=this.promise
i._state===v&&(this._abortOnReject&&e===w?C(i,r):(this._remaining--,this._result[t]=this._makeResult(e,t,r),0===this._remaining&&O(i,this._result)))},e.prototype._makeResult=function(e,t,r){return r},e.prototype._willSettleAt=function(e,t){var r=this
T(e,void 0,(function(e){return r._settledAt(_,t,e)}),(function(e){return r._settledAt(w,t,e)}))},e}()
function N(e,t,r){return e===_?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}var I="rsvp_"+p()+"-",q=0,$=function(){function e(t,r){this._id=q++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],l.instrument&&y("created",this),b!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var r=!1
try{t((function(t){r||(r=!0,E(e,t))}),(function(t){r||(r=!0,C(e,t))}))}catch(t){C(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
l.after((function(){t._onError&&l.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var r=this.constructor
return this.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))}),t)},e}()
function L(){this.value=void 0}$.cast=g,$.all=function(e,t){return f(e)?new F(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},$.race=function(e,t){var r=new this(b,t)
if(!f(e))return C(r,new TypeError("Promise.race must be called with an array")),r
for(var i=0;r._state===v&&i<e.length;i++)T(this.resolve(e[i]),void 0,(function(e){return E(r,e)}),(function(e){return C(r,e)}))
return r},$.resolve=g,$.reject=function(e,t){var r=new this(b,t)
return C(r,e),r},$.prototype._guidKey=I,$.prototype.then=D
var z=new L,B=new L
function U(e,t,r){try{e.apply(t,r)}catch(e){return z.value=e,z}}function V(e,t){return{then:function(r,i){return e.call(t,r,i)}}}function W(e){return!(!e||"object"!=typeof e)&&(e.constructor===$||function(e){try{return e.then}catch(e){return z.value=e,z}}(e))}var H=function(e){function t(t,r,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(F)
H.prototype._makeResult=N
var G=Object.prototype.hasOwnProperty,Y=function(e){function t(t,r){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,i,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t),0===this._remaining&&O(this.promise,this._result)},t.prototype._enumerate=function(e){var t=this.promise,r=[]
for(var i in e)G.call(e,i)&&r.push({position:i,entry:e[i]})
var n=r.length
this._remaining=n
for(var s=void 0,o=0;t._state===v&&o<n;o++)s=r[o],this._eachEntry(s.entry,s.position)},t}(F),K=function(e){function t(t,r,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(Y)
function Q(e){var t={resolve:void 0,reject:void 0}
return t.promise=new $((function(e,r){t.resolve=e,t.reject=r}),e),t}function J(e,t){return $.resolve(e,t)}function Z(e,t){return $.all(e,t)}K.prototype._makeResult=N
var X=0,ee=void 0
function te(e,t){ce[X]=e,ce[X+1]=t,2===(X+=2)&&ge()}var re="undefined"!=typeof window?window:void 0,ie=re||{},ne=ie.MutationObserver||ie.WebKitMutationObserver,se="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),oe="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function ae(){return function(){return setTimeout(le,1)}}var ce=new Array(1e3)
function le(){for(var e=0;e<X;e+=2)(0,ce[e])(ce[e+1]),ce[e]=void 0,ce[e+1]=void 0
X=0}var ue,de,he,fe,pe,me,ye,ge=void 0
if(se?(pe=process.nextTick,me=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(me)&&"0"===me[1]&&"10"===me[2]&&(pe=setImmediate),ge=function(){return pe(le)}):ne?(de=0,he=new ne(le),fe=document.createTextNode(""),he.observe(fe,{characterData:!0}),ge=function(){return fe.data=de=++de%2}):oe?((ue=new MessageChannel).port1.onmessage=le,ge=function(){return ue.port2.postMessage(0)}):ge=void 0===re?function(){try{var e=r(2018)
return void 0!==(ee=e.runOnLoop||e.runOnContext)?function(){ee(le)}:ae()}catch(e){return ae()}}():ae(),"object"==typeof self)self
else{if("object"!=typeof global)throw new Error("no global: `self` or `global` found")
global}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}l.async=te,l.after=function(e){return setTimeout(e,0)}
var ve=J
function _e(){l.on.apply(l,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var we=window.__PROMISE_INSTRUMENTATION__
for(var ke in u("instrument",!0),we)we.hasOwnProperty(ke)&&_e(ke,we[ke])}const Se=(be(ye={asap:te,cast:ve,Promise:$,EventTarget:c,all:function(e,t){return $.all(e,t)},allSettled:function(e,t){return f(e)?new H($,e,t).promise:$.reject(new TypeError("Promise.allSettled must be called with an array"),t)},race:function(e,t){return $.race(e,t)},hash:function(e,t){return h(e)?new Y($,e,t).promise:$.reject(new TypeError("Promise.hash must be called with an object"),t)},hashSettled:function(e,t){return h(e)?new K($,e,!1,t).promise:$.reject(new TypeError("RSVP.hashSettled must be called with an object"),t)},rethrow:function(e){throw setTimeout((function(){throw e})),e},defer:Q,denodeify:function(e,t){var r=function(){for(var r=arguments.length,i=new Array(r+1),n=!1,s=0;s<r;++s){var o=arguments[s]
if(!n){if((n=W(o))===B){var a=new $(b)
return C(a,B.value),a}n&&!0!==n&&(o=V(n,o))}i[s]=o}var c=new $(b)
return i[r]=function(e,r){e?C(c,e):void 0===t?E(c,r):!0===t?E(c,function(e){for(var t=e.length,r=new Array(t-1),i=1;i<t;i++)r[i-1]=e[i]
return r}(arguments)):f(t)?E(c,function(e,t){for(var r={},i=e.length,n=new Array(i),s=0;s<i;s++)n[s]=e[s]
for(var o=0;o<t.length;o++)r[t[o]]=n[o+1]
return r}(arguments,t)):E(c,r)},n?function(e,t,r,i){return $.all(t).then((function(t){var n=U(r,i,t)
return n===z&&C(e,n.value),e}))}(c,i,e,this):function(e,t,r,i){var n=U(r,i,t)
return n===z&&C(e,n.value),e}(c,i,e,this)}
return r.__proto__=e,r},configure:u,on:_e,off:function(){l.off.apply(l,arguments)},resolve:J,reject:function(e,t){return $.reject(e,t)},map:function(e,t,r){return f(e)?d(t)?$.all(e,r).then((function(e){for(var i=e.length,n=new Array(i),s=0;s<i;s++)n[s]=t(e[s])
return $.all(n,r)})):$.reject(new TypeError("RSVP.map expects a function as a second argument"),r):$.reject(new TypeError("RSVP.map must be called with an array"),r)}},"async",(function(e,t){return l.async(e,t)})),be(ye,"filter",(function(e,t,r){return f(e)||h(e)&&void 0!==e.then?d(t)?(f(e)?Z(e,r):function(e,t){return $.resolve(e,t).then((function(e){return Z(e,t)}))}(e,r)).then((function(e){for(var i=e.length,n=new Array(i),s=0;s<i;s++)n[s]=t(e[s])
return Z(n,r).then((function(t){for(var r=new Array(i),n=0,s=0;s<i;s++)t[s]&&(r[n]=e[s],n++)
return r.length=n,r}))})):$.reject(new TypeError("RSVP.filter expects function as a second argument"),r):$.reject(new TypeError("RSVP.filter must be called with an array or promise"),r)})),ye)
class Re{assert(){}async(e){Promise.resolve().then(e)}reportUncaughtRejection(){this.async((e=>{throw e}))}defer(){let e={promise:null,resolve:null,reject:null},t=new Promise(((t,r)=>{e.resolve=t,e.reject=r}))
return e.promise=t,e}globalDebuggingEnabled(){return!1}}const Ee=new Re
var Ae=r(1603)
const Oe=new class extends Re{assert(...e){(0,Ae.assert)(...e)}async(e){(0,i.join)((()=>(0,i.schedule)("actions",e)))}reportUncaughtRejection(e){(0,i.next)(null,(function(){if(!s().onerror)throw e
s().onerror(e)}))}defer(){return Q()}globalDebuggingEnabled(){return s().ENV.DEBUG_TASKS}},Ce="__ec_cancel__",Te="__ec_yieldable__",Me="next",je="throw",Pe="return",xe="cancel"
class De{constructor(e,t){this._taskInstance=e,this._resumeIndex=t}getTaskInstance(){return this._taskInstance}cancel(){let e=this._taskInstance
e.proceed.call(e,this._resumeIndex,xe)}next(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,Me,e)}return(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,Pe,e)}throw(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,je,e)}}class Fe{constructor(){this[Te]=this[Te].bind(this)}onYield(){}_deferable(){let e={resolve:void 0,reject:void 0}
return e.promise=new Promise(((t,r)=>{e.resolve=t,e.reject=r})),e}_toPromise(){let e=this._deferable(),t={proceed(t,r,i){r==Me||r==Pe?e.resolve(i):e.reject(i)}},r=this[Te](t,0)
return e.promise[Ce]=r,e.promise}then(...e){return this._toPromise().then(...e)}catch(...e){return this._toPromise().catch(...e)}finally(...e){return this._toPromise().finally(...e)}[Te](e,t){let r=new De(e,t)
return this.onYield(r)}}class Ne extends Fe{onYield(e){let t=requestAnimationFrame((()=>e.next()))
return()=>cancelAnimationFrame(t)}}class Ie extends Fe{constructor(e){super(),this.ms=e}onYield(e){let t=setTimeout((()=>e.next()),this.ms)
return()=>clearTimeout(t)}}function qe(){return new Ne}const $e=new class extends Fe{onYield(){}}
function Le(e){return new Ie(e)}class ze extends Fe{_deferable(){return Oe.defer()}}class Be extends ze{constructor(e){super(),this.ms=e}onYield(e){let t=(0,i.later)((()=>e.next()),this.ms)
return()=>(0,i.cancel)(t)}}function Ue(e){return new Be(e)}var Ve=r(4471),We=r.n(Ve)
class He{constructor(e){this.maxConcurrency=e||1}}const Ge="CANCELLED",Ye="STARTED",Ke="QUEUED",Qe={type:Ye},Je={type:Ke},Ze=e=>({type:Ge,reason:e})
class Xe{constructor(e){this.remainingSlots=e}step(){return this.remainingSlots>0?(this.remainingSlots--,Qe):Je}}class et extends He{makeReducer(){return new Xe(this.maxConcurrency)}}const tt=Ze("it belongs to a 'drop' Task that was already running")
class rt{constructor(e){this.remainingSlots=e}step(){return this.remainingSlots>0?(this.remainingSlots--,Qe):tt}}class it extends He{makeReducer(){return new rt(this.maxConcurrency)}}const nt=Ze("it belongs to a 'keepLatest' Task that was already running")
class st{constructor(e,t){this.remainingSlots=e,this.numToCancel=t}step(){return this.remainingSlots>0?(this.remainingSlots--,Qe):this.numToCancel>0?(this.numToCancel--,nt):Je}}class ot extends He{makeReducer(e,t){let r=e+t
return new st(this.maxConcurrency,r-this.maxConcurrency-1)}}const at=Ze("it belongs to a 'restartable' Task that was .perform()ed again")
class ct{constructor(e){this.numToCancel=e}step(){return this.numToCancel>0?(this.numToCancel--,at):Qe}}class lt extends He{makeReducer(e,t){return new ct(e+t-this.maxConcurrency)}}let ut="__ec_task_factory"
const dt={restartable(){return this[ut].setBufferPolicy(lt),this},enqueue(){return this[ut].setBufferPolicy(et),this},drop(){return this[ut].setBufferPolicy(it),this},keepLatest(){return this[ut].setBufferPolicy(ot),this},maxConcurrency(e){return this[ut].setMaxConcurrency(e),this},group(e){return this[ut].setGroup(e),this},evented(){return this[ut].setEvented(!0),this},debug(){return this[ut].setDebug(!0),this},onState(e){return this[ut].setOnState(e),this}}
class ht{}class ft{}Object.assign(ft.prototype,dt),Object.assign(ht.prototype,dt,{setup(e,t){this.callSuperSetup&&this.callSuperSetup(...arguments),this[ut].setName(t),this[ut]._setupEmberKVO(e)},on(){return this[ut].addPerformEvents(...arguments),this},cancelOn(){return this[ut].addCancelEvents(...arguments),this},observes(){return this[ut].addObserverKeys(...arguments),this}})
const pt=s()._setClassicDecorator||s()._setComputedDecorator
function mt(e){let t=function(r,i){return void 0!==t.setup&&t.setup(r,i),(0,Ve.computed)(e)(...arguments)}
return pt(t),t}var yt=r(4505),gt=r(123)
const bt=new Map
class vt{constructor(e,t,r){this.stateTracker=t,this.schedulerPolicy=e,this.initialTaskInstances=r,this.startingInstances=[]}process(){let[e,t,r]=this.filterFinishedTaskInstances(),i=this.schedulerPolicy.makeReducer(t,r),n=e.filter((e=>this.setTaskInstanceExecutionState(e,i.step())))
return this.stateTracker.computeFinalStates((e=>this.applyState(e))),this.startingInstances.forEach((e=>e.start())),n}filterFinishedTaskInstances(){let e=0,t=0
return[this.initialTaskInstances.filter((r=>{let i=this.stateTracker.stateFor(r.task),n=r.executor.state
return n.isFinished?(i.onCompletion(r),!1):(n.hasStarted?e+=1:t+=1,!0)})),e,t]}setTaskInstanceExecutionState(e,t){let r=this.stateTracker.stateFor(e.task)
switch(e.executor.counted||(e.executor.counted=!0,r.onPerformed(e)),t.type){case Ge:return e.cancel(t.reason),!1
case Ye:return e.executor.state.hasStarted||(this.startingInstances.push(e),r.onStart(e)),r.onRunning(e),!0
case Ke:return r.onQueued(e),!0}}applyState(e){let{taskable:t}=e
if(!t.onState)return
const{guid:r}=t
if(bt.has(r)&&e.tag<bt.get(r))return
let i=Object.assign({numRunning:e.numRunning,numQueued:e.numQueued,numPerformedInc:e.numPerformedInc},e.attrs)
t.onState(i,t),bt.set(r,e.tag)}}class _t{constructor(e,t){this.taskable=e,this.group=e.group,this.numRunning=0,this.numQueued=0,this.numPerformedInc=0,this.attrs={},this.tag=t}onCompletion(e){let t=e.completionState
this.attrs.lastRunning=null,this.attrs.lastComplete=e,1===t?this.attrs.lastSuccessful=e:(2===t?this.attrs.lastErrored=e:3===t&&(this.attrs.lastCanceled=e),this.attrs.lastIncomplete=e)}onPerformed(e){this.numPerformedInc+=1,this.attrs.lastPerformed=e}onStart(e){this.attrs.last=e}onRunning(e){this.attrs.lastRunning=e,this.numRunning+=1}onQueued(){this.numQueued+=1}recurseTaskGroups(e){let t=this.group
for(;t;)e(t),t=t.group}applyStateFrom(e){Object.assign(this.attrs,e.attrs),this.numRunning+=e.numRunning,this.numQueued+=e.numQueued,this.numPerformedInc+=e.numPerformedInc}}const wt=new Map
class kt{constructor(){this.states=new Map}stateFor(e){let t=e.guid,r=this.states.get(t)
if(!r){let i=wt.has(t)?wt.get(t):0
r=new _t(e,++i),this.states.set(t,r),wt.set(t,i)}return r}computeFinalStates(e){this.computeRecursiveState(),this.forEachState((t=>e(t)))}computeRecursiveState(){this.forEachState((e=>{let t=e
e.recurseTaskGroups((e=>{let r=this.stateFor(e)
r.applyStateFrom(t),t=r}))}))}forEachState(e){this.states.forEach((t=>e(t)))}}const St=new class{onCompletion(){}onPerformed(){}onStart(){}onRunning(){}onQueued(){}}
class Rt{stateFor(){return St}computeFinalStates(){}}class Et{constructor(e,t){this.schedulerPolicy=e,this.stateTrackingEnabled=t,this.taskInstances=[]}cancelAll(e,t){let r=this.taskInstances.map((r=>{r.task.guids[e]&&r.executor.cancel(t)})).filter((e=>!!e))
return Promise.all(r)}perform(e){e.onFinalize((()=>this.scheduleRefresh())),this.taskInstances.push(e),this.refresh()}scheduleRefresh(){Promise.resolve().then((()=>this.refresh()))}refresh(){let e=this.stateTrackingEnabled?new kt:new Rt,t=new vt(this.schedulerPolicy,e,this.taskInstances)
this.taskInstances=t.process()}}const At=new class{step(){return Qe}}
class Ot{makeReducer(){return At}}const Ct={last:null,lastRunning:null,lastPerformed:null,lastSuccessful:null,lastComplete:null,lastErrored:null,lastCanceled:null,lastIncomplete:null,performCount:0}
Object.freeze(Ct)
const Tt="TaskCancelation"
function Mt(e){return e&&e.name===Tt}const jt="explicit",Pt="lifespan_end"
class xt{constructor(e,t){this.kind=e,this.reason=t,this.promise=new Promise((e=>{this.finalize=e}))}}let Dt=0
class Ft{constructor(e){this.context=e.context,this.debug=e.debug||!1,this.enabledModifiers=e.enabledModifiers,this.env=e.env,this.group=e.group,this.hasEnabledEvents=e.hasEnabledEvents,this.modifierOptions=e.modifierOptions,this.name=e.name,this.onStateCallback=e.onStateCallback,this.scheduler=e.scheduler,this.guid="ec_"+Dt++,this.guids={},this.guids[this.guid]=!0,this.group&&Object.assign(this.guids,this.group.guids)}cancelAll(e){let{reason:t,cancelRequestKind:r,resetState:i}=e||{}
t=t||".cancelAll() was explicitly called on the Task"
let n=new xt(r||jt,t)
return this.scheduler.cancelAll(this.guid,n).then((()=>{i&&this._resetState()}))}get _isAlive(){return!0}_resetState(){this.setState(Ct)}setState(){}}Object.assign(Ft.prototype,Ct),Object.assign(Ft.prototype,{numRunning:0,numQueued:0,isRunning:!1,isQueued:!1,isIdle:!0,state:"idle"})
class Nt{constructor(e,t,r){this.value=e,this.done=t,this.errored=r}}class It{constructor(e){this.done=!1,this.generatorFactory=e,this.iterator=null}step(e,t){try{let r=this.getIterator(),{value:i,done:n}=r[t](e)
return n?this.finalize(i,!1):new Nt(i,!1,!1)}catch(e){return this.finalize(e,!0)}}getIterator(){return this.iterator||this.done||(this.iterator=this.generatorFactory()),this.iterator}finalize(e,t){return this.done=!0,this.iterator=null,new Nt(e,!0,t)}}const qt={completionState:0,value:null,error:null,isSuccessful:!1,isError:!1,isCanceled:!1,hasStarted:!1,isFinished:!1},$t="PERFORM_TYPE_DEFAULT",Lt="PERFORM_TYPE_UNLINKED",zt="PERFORM_TYPE_LINKED",Bt={}
let Ut=[]
class Vt{constructor({generatorFactory:e,env:t,debug:r}){this.generatorState=new It(e),this.state=Object.assign({},qt),this.index=1,this.disposers=[],this.finalizeCallbacks=[],this.env=t,this.debug=r,this.cancelRequest=null}start(){this.state.hasStarted||this.cancelRequest||(this.setState({hasStarted:!0}),this.proceedSync(Me,void 0),this.taskInstance.onStarted())}cancel(e){return this.requestCancel(e)?(this.state.hasStarted?this.proceedWithCancelAsync():this.finalizeWithCancel(),this.cancelRequest.promise):(e.finalize(),e.promise)}setState(e){Object.assign(this.state,e),this.taskInstance.setState(this.state)}proceedChecked(e,t,r){this.state.isFinished||this.advanceIndex(e)&&(t===xe?(this.requestCancel(new xt("yielded"),r),this.proceedWithCancelAsync()):this.proceedAsync(t,r))}proceedWithCancelAsync(){this.proceedAsync(Pe,Bt)}proceedAsync(e,t){this.advanceIndex(this.index),this.env.async((()=>this.proceedSync(e,t)))}proceedSync(e,t){this.state.isFinished||(this.dispose(),this.generatorState.done?this.handleResolvedReturnedValue(e,t):this.handleResolvedContinueValue(e,t))}handleResolvedContinueValue(e,t){let r=this.index,i=this.generatorStep(t,e)
this.advanceIndex(r)&&(i.errored?this.finalize(i.value,2):this.handleYieldedValue(i))}handleResolvedReturnedValue(e,t){switch(e){case Me:case Pe:this.finalize(t,1)
break
case je:this.finalize(t,2)}}handleYieldedUnknownThenable(e){let t=this.index
e.then((e=>{this.proceedChecked(t,Me,e)}),(e=>{this.proceedChecked(t,je,e)}))}advanceIndex(e){if(this.index===e)return++this.index}handleYieldedValue(e){let t=e.value
t?(this.addDisposer(t[Ce]),t[Te]?this.invokeYieldable(t):"function"==typeof t.then?this.handleYieldedUnknownThenable(t):this.proceedWithSimpleValue(t)):this.proceedWithSimpleValue(t)}proceedWithSimpleValue(e){this.proceedAsync(Me,e)}addDisposer(e){"function"==typeof e&&this.disposers.push(e)}dispose(){let e=this.disposers
0!==e.length&&(this.disposers=[],e.forEach((e=>e())))}generatorStep(e,t){Ut.push(this)
let r=this.generatorState.step(e,t)
if(Ut.pop(),this._expectsLinkedYield){let e=r.value
e&&e.performType===zt||console.warn("You performed a .linked() task without immediately yielding/returning it. This is currently unsupported (but might be supported in future version of ember-concurrency)."),this._expectsLinkedYield=!1}return r}maybeResolveDefer(){this.defer&&this.state.isFinished&&(1===this.state.completionState?this.defer.resolve(this.state.value):this.defer.reject(this.state.error))}onFinalize(e){this.finalizeCallbacks.push(e),this.state.isFinished&&this.runFinalizeCallbacks()}runFinalizeCallbacks(){this.finalizeCallbacks.forEach((e=>e())),this.finalizeCallbacks=[],this.maybeResolveDefer(),this.maybeThrowUnhandledTaskErrorLater()}promise(){return this.defer||(this.defer=this.env.defer(),this.asyncErrorsHandled=!0,this.maybeResolveDefer()),this.defer.promise}maybeThrowUnhandledTaskErrorLater(){this.asyncErrorsHandled||2!==this.state.completionState||Mt(this.state.error)||this.env.async((()=>{this.asyncErrorsHandled||this.env.reportUncaughtRejection(this.state.error)}))}requestCancel(e){return!this.cancelRequest&&!this.state.isFinished&&(this.cancelRequest=e,!0)}finalize(e,t){if(this.cancelRequest)return this.finalizeWithCancel()
let r={completionState:t}
1===t?(r.isSuccessful=!0,r.value=e):2===t?(r.isError=!0,r.error=e):3===t&&(r.error=e),this.finalizeShared(r)}finalizeWithCancel(){let e=this.taskInstance.formatCancelReason(this.cancelRequest.reason),t=new Error(e)
this.debugEnabled()&&console.log(e),t.name=Tt,this.finalizeShared({isCanceled:!0,completionState:3,error:t,cancelReason:e}),this.cancelRequest.finalize()}debugEnabled(){return this.debug||this.env.globalDebuggingEnabled()}finalizeShared(e){this.index++,e.isFinished=!0,this.setState(e),this.runFinalizeCallbacks(),this.dispatchFinalizeEvents(e.completionState)}dispatchFinalizeEvents(e){switch(e){case 1:this.taskInstance.onSuccess()
break
case 2:this.taskInstance.onError(this.state.error)
break
case 3:this.taskInstance.onCancel(this.state.cancelReason)}}invokeYieldable(e){try{let t=e[Te](this.taskInstance,this.index)
this.addDisposer(t)}catch(e){this.env.reportUncaughtRejection(e)}}onYielded(e,t){this.asyncErrorsHandled=!0,this.onFinalize((()=>{let r=this.state.completionState
1===r?e.proceed(t,Me,this.state.value):2===r?e.proceed(t,je,this.state.error):3===r&&e.proceed(t,xe,null)}))
let r=this.getPerformType()
if(r!==Lt)return()=>{this.detectSelfCancelLoop(r,e),this.cancel(new xt("parent_cancel"))}}getPerformType(){return this.taskInstance.performType||$t}detectSelfCancelLoop(e,t){if(e!==$t)return
let r=t.executor&&t.executor.cancelRequest
!r||r.kind!==Pt||this.cancelRequest||this.state.isFinished||this.taskInstance.selfCancelLoopWarning(t)}}class Wt{constructor(e,t,r){this.task=e,this.performType=t,this.linkedObject=r}perform(...e){return this.task._performShared(e,this.performType,this.linkedObject)}}let Ht=class e extends Ft{constructor(e){super(e),this.generatorFactory=e.generatorFactory,this.perform=this._perform.bind(this)}linked(){let e=Ut[Ut.length-1]
if(!e)throw new Error("You can only call .linked() from within a task.")
return new Wt(this,zt,e)}unlinked(){return new Wt(this,Lt,null)}toString(){return`<Task:${this.name}>`}_clone(){return new e({context:this.context,debug:this.debug,env:this.env,generatorFactory:this.generatorFactory,group:this.group,hasEnabledEvents:this.hasEnabledEvents,name:this.name,onStateCallback:this.onStateCallback,scheduler:this.scheduler})}_curry(...e){let t=this._clone()
return t._curryArgs=[...this._curryArgs||[],...e],t}_perform(...e){return this._performShared(e,$t,null)}_performShared(e,t,r){let i=this._curryArgs?[...this._curryArgs,...e]:e,n=this._taskInstanceFactory(i,t,r)
return t===zt&&(r._expectsLinkedYield=!0),this._isAlive||n.cancel(),this.scheduler.perform(n),n}_taskInstanceOptions(e,t,r){return{task:this,args:e,executor:new Vt({generatorFactory:()=>this.generatorFactory(e),env:this.env,debug:this.debug}),performType:t,hasEnabledEvents:this.hasEnabledEvents}}},Gt=class extends Ft{}
function Yt(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Kt={enqueue:(e,t)=>t&&e.setBufferPolicy(et),evented:(e,t)=>t&&e.setEvented(t),debug:(e,t)=>t&&e.setDebug(t),drop:(e,t)=>t&&e.setBufferPolicy(it),group:(e,t)=>e.setGroup(t),keepLatest:(e,t)=>t&&e.setBufferPolicy(ot),maxConcurrency:(e,t)=>e.setMaxConcurrency(t),onState:(e,t)=>e.setOnState(t),restartable:(e,t)=>t&&e.setBufferPolicy(lt)}
function Qt(e,t){if(Kt[e])throw new Error(`A modifier with the name '${e}' has already been defined.`)
Kt[e]=t}function Jt(e){return Kt[e]}function Zt(e){return e in Kt}let Xt=class{constructor(e="<unknown>",t=null,r={}){Yt(this,"env",Ee),Yt(this,"_debug",null),Yt(this,"_enabledModifiers",[]),Yt(this,"_hasSetConcurrencyConstraint",!1),Yt(this,"_hasSetBufferPolicy",!1),Yt(this,"_hasEnabledEvents",!1),Yt(this,"_maxConcurrency",null),Yt(this,"_onStateCallback",((e,t)=>t.setState(e))),Yt(this,"_schedulerPolicyClass",Ot),Yt(this,"_taskGroupPath",null),this.name=e,this.taskDefinition=t,this.options=r,this._processModifierOptions(r)}createTask(e){let t=this.getTaskOptions(e)
return new Ht(Object.assign({generatorFactory:t=>this.taskDefinition.apply(e,t)},t))}createTaskGroup(e){let t=this.getTaskOptions(e)
return new Gt(t)}getModifier(e){if(Zt(e))return Kt[e].bind(null,this)}getOptions(){return this.options}getScheduler(e,t){return new Et(e,t)}getTaskOptions(e){let t,r,i=this._onStateCallback
if(this._taskGroupPath){if(t=e[this._taskGroupPath],!(t instanceof Gt))throw new Error(`Expected group '${this._taskGroupPath}' to be defined but was not found.`)
r=t.scheduler}else{let e=new this._schedulerPolicyClass(this._maxConcurrency)
r=this.getScheduler(e,i&&"function"==typeof i)}return{context:e,debug:this._debug,env:this.env,name:this.name,group:t,scheduler:r,hasEnabledEvents:this._hasEnabledEvents,onStateCallback:i,enabledModifiers:this._enabledModifiers,modifierOptions:this.getOptions()}}setBufferPolicy(e){return function(e){if(e._hasSetBufferPolicy)throw new Error(`Cannot set multiple buffer policies on a task or task group. ${e._schedulerPolicyClass} has already been set for task or task group '${e.name}'`)}(this),this._hasSetBufferPolicy=!0,this._hasSetConcurrencyConstraint=!0,this._schedulerPolicyClass=e,function(e){if(e._hasSetConcurrencyConstraint&&e._taskGroupPath)throw new Error("Cannot use both 'group' and other concurrency-constraining task modifiers (e.g. 'drop', 'enqueue', 'restartable')")}(this),this}setDebug(e){return this._debug=e,this}setEvented(e){return this._hasEnabledEvents=e,this}setMaxConcurrency(e){return this._hasSetConcurrencyConstraint=!0,this._maxConcurrency=e,this}setGroup(e){return this._taskGroupPath=e,this}setName(e){return this.name=e,this}setOnState(e){return this._onStateCallback=e,this}setTaskDefinition(e){return this.taskDefinition=e,this}_processModifierOptions(e){if(e)for(let t of Object.keys(e)){let r=e[t],i=this.getModifier(t)
"function"==typeof i&&i(r)&&this._enabledModifiers.push(t)}}}
var er=r(2294),tr=r(1130)
class rr{constructor({task:e,args:t,executor:r,performType:i,hasEnabledEvents:n}){this.task=e,this.args=t,this.performType=i,this.executor=r,this.executor.taskInstance=this,this.hasEnabledEvents=n}setState(){}onStarted(){}onSuccess(){}onError(){}onCancel(){}formatCancelReason(){}selfCancelLoopWarning(){}onFinalize(e){this.executor.onFinalize(e)}proceed(e,t,r){this.executor.proceedChecked(e,t,r)}[Te](e,t){return this.executor.onYielded(e,t)}cancel(e=".cancel() was explicitly called"){this.executor.cancel(new xt(jt,e))}then(...e){return this.executor.promise().then(...e)}catch(...e){return this.executor.promise().catch(...e)}finally(...e){return this.executor.promise().finally(...e)}toString(){return`${this.task} TaskInstance`}start(){return this.executor.start(),this}}Object.assign(rr.prototype,qt),Object.assign(rr.prototype,{state:"waiting",isDropped:!1,isRunning:!0})
var ir=r(473)
function nr(e,t){return Object.keys(e).reduce(((t,r)=>function(e,t,r){const i=Object.getOwnPropertyDescriptor(e,r)
i.initializer=i.initializer||(()=>e[r]),delete i.value
const n=(0,ir.tracked)(t,r,i)
return t[r]=n,t}(e,t,r)),t)}let sr,or
sr=nr(Ct,{}),sr=nr({numRunning:0,numQueued:0,isRunning:!1,isQueued:!1,isIdle:!0,state:"idle"},sr),or=nr(qt,{}),or=nr({state:"waiting",isDropped:!1,isRunning:!1},or),Object.freeze(sr),Object.freeze(or)
class ar extends rr{setState(e){let t=this._recomputeState(e)
Object.assign(this,{...e,isRunning:!e.isFinished,isDropped:"dropped"===t,state:t})}_recomputeState(e){return e.isDropped?"dropped":e.isCanceled?e.hasStarted?"canceled":"dropped":e.isFinished?"finished":e.hasStarted?"running":"waiting"}onStarted(){this.triggerEvent("started",this)}onSuccess(){this.triggerEvent("succeeded",this)}onError(e){this.triggerEvent("errored",this,e)}onCancel(e){this.triggerEvent("canceled",this,e)}formatCancelReason(e){return`TaskInstance '${this.getName()}' was canceled because ${e}. For more information, see: http://ember-concurrency.com/docs/task-cancelation-help`}getName(){return this.name||(this.name=this.task&&this.task.name||"<unknown>"),this.name}selfCancelLoopWarning(e){let t=`\`${e.getName()}\``,r=`\`${this.getName()}\``
console.warn(`ember-concurrency detected a potentially hazardous "self-cancel loop" between parent task ${t} and child task ${r}. If you want child task ${r} to be canceled when parent task ${t} is canceled, please change \`.perform()\` to \`.linked().perform()\`. If you want child task ${r} to keep running after parent task ${t} is canceled, change it to \`.unlinked().perform()\``)}triggerEvent(...e){if(!this.hasEnabledEvents)return
let t=this.task,r=t.context,i=t&&t.name
if(r&&r.trigger&&i){let[t,...n]=e
r.trigger(`${i}:${t}`,...n)}}}or&&Object.defineProperties(ar.prototype,or)
const cr={_performCount:0,setState(e){this._performCount=this._performCount+(e.numPerformedInc||0)
let t=e.numRunning>0,r=e.numQueued>0,i=Object.assign({},e,{performCount:this._performCount,isRunning:t,isQueued:r,isIdle:!t&&!r,state:t?"running":"idle"})
Object.assign(this,i)},onState(e,t){t.onStateCallback&&t.onStateCallback(e,t)}}
class lr extends Ht{constructor(e){super(e),(0,tr.isDestroying)(this.context)||(0,tr.registerDestructor)(this.context,(()=>{this.cancelAll({reason:"the object it lives on was destroyed or unrendered",cancelRequestKind:Pt})}))}get _isAlive(){return!(0,tr.isDestroying)(this.context)}_taskInstanceFactory(e,t,r){let i=this._taskInstanceOptions(e,t,r)
return new ar(i)}_clone(){return new lr({context:this.context,debug:this.debug,env:this.env,generatorFactory:this.generatorFactory,group:this.group,hasEnabledEvents:this.hasEnabledEvents,name:this.name,onStateCallback:this.onStateCallback,scheduler:this.scheduler})}}sr&&Object.defineProperties(lr.prototype,sr),Object.assign(lr.prototype,cr)
const ur="__ec__encap_current_ti"
class dr extends lr{constructor(e){super(e),this.taskObj=e.taskObj,this._encapsulatedTaskStates=new WeakMap,this._encapsulatedTaskInstanceProxies=new WeakMap}_getEncapsulatedTaskClass(){let e=this._encapsulatedTaskImplClass
return e||(e=We().extend(this.taskObj,{unknownProperty(e){let t=this[ur]
return t?t[e]:void 0}})),e}_taskInstanceFactory(e,t){let r,i=(0,er.getOwner)(this.context),n=this._getEncapsulatedTaskClass().create({context:this.context});(0,er.setOwner)(n,i)
let s=new ar({task:this,args:e,executor:new Vt({generatorFactory:()=>n.perform.apply(r,e),env:this.env,debug:this.debug}),performType:t,hasEnabledEvents:this.hasEnabledEvents})
return n[ur]=s,this._encapsulatedTaskStates.set(s,n),r=this._wrappedEncapsulatedTaskInstance(s),r}_wrappedEncapsulatedTaskInstance(e){if(!e)return null
let t=this._encapsulatedTaskInstanceProxies,r=t.get(e)
if(!r){let i=this._encapsulatedTaskStates.get(e)
r=new Proxy(e,{get:(e,t)=>t in e?e[t]:(0,Ve.get)(i,t.toString()),set:(e,t,r)=>(t in e?e[t]=r:(0,Ve.set)(i,t.toString(),r),!0),has:(e,t)=>t in e||t in i,ownKeys:e=>Reflect.ownKeys(e).concat(Reflect.ownKeys(i)),defineProperty(r,n,s){let o=t.get(e)
return o&&(s.get?s.get=s.get.bind(o):o&&s.set&&(s.set=s.set.bind(o))),Reflect.defineProperty(i,n,s)},getOwnPropertyDescriptor:(e,t)=>t in e?Reflect.getOwnPropertyDescriptor(e,t):Reflect.getOwnPropertyDescriptor(i,t)}),t.set(e,r)}return r}}class hr extends Gt{}sr&&Object.defineProperties(hr.prototype,sr),Object.assign(hr.prototype,cr)
class fr extends Et{scheduleRefresh(){(0,i.once)(this,this.refresh)}}let pr=0
function mr(e,t,r,i,n,s){if(r&&r.length>0)for(let o=0;o<r.length;++o){let a=r[o],c="__ember_concurrency_handler_"+pr++
t[c]=yr(i,n,s),e(t,a,null,c)}}function yr(e,t,r){return function(){let n=(0,Ve.get)(this,e)
r?(0,i.scheduleOnce)("actions",n,t,...arguments):n[t].apply(n,arguments)}}const gr=e=>Array.isArray(e)?e:[e]
Qt("cancelOn",((e,t)=>e.addCancelEvents(...gr(t)))),Qt("observes",((e,t)=>e.addObserverKeys(...gr(t)))),Qt("on",((e,t)=>e.addPerformEvents(...gr(t))))
class br extends Xt{constructor(...e){var t,r,i
super(...e),t=this,i=Oe,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r="env"))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}createTask(e){(0,Ae.assert)("Cannot create task if a task definition is not provided as generator function or encapsulated task.",this.taskDefinition)
let t=this.getTaskOptions(e)
return"object"==typeof this.taskDefinition?new dr(Object.assign({taskObj:this.taskDefinition},t)):new lr(Object.assign({generatorFactory:t=>this.taskDefinition.apply(e,t)},t))}createTaskGroup(e){(0,Ae.assert)("A task definition is not expected for a task group.",!this.taskDefinition)
let t=this.getTaskOptions(e)
return new hr(t)}addCancelEvents(...e){return this._cancelEventNames=this._cancelEventNames||[],this._cancelEventNames.push(...e),this}addObserverKeys(...e){return this._observes=this._observes||[],this._observes.push(...e),this}addPerformEvents(...e){return this._eventNames=this._eventNames||[],this._eventNames.push(...e),this}getModifier(e){let t=super.getModifier(e)
return t||"function"!=typeof ht.prototype[e]||(t=ht.prototype[e].bind(this)),(0,Ae.assert)(`Task option '${e}' is not recognized as a supported option.`,t),t}getScheduler(e,t){return new fr(e,t)}_setupEmberKVO(e){mr(yt.addListener,e,this._eventNames,this.name,"perform",!1),mr(yt.addListener,e,this._cancelEventNames,this.name,"cancelAll",!1),mr(gt.addObserver,e,this._observes,this.name,"perform",!0)}get taskFn(){return this.taskDefinition}set taskFn(e){this.setTaskDefinition(e)}}function vr(e,t,r,i=[],n=Xt){let s,{initializer:o,get:a,value:c}=r
o?s=o.call(void 0):a?s=a.call(void 0):c&&(s=c),s.displayName=`${t} (task)`
let l=new WeakMap,u=new n(t,s,i[0]||{})
return u._setupEmberKVO(e),{get(){let e=l.get(this)
return e||(e=u.createTask(this),l.set(this,e)),e}}}function _r(e,t,r,i=[],n=Xt){let s=new WeakMap,o=new n(t,null,i[0]||{})
return{get(){let e=s.get(this)
return e||(e=o.createTaskGroup(this),s.set(this,e)),e}}}function wr(e){return function(...t){return function(e){let[t,r,i]=e
return 3===e.length&&"object"==typeof t&&null!==t&&"string"==typeof r&&("object"==typeof i&&null!==i&&"enumerable"in i&&"configurable"in i||void 0===i)}(t)?e(...t):(...r)=>e(...r,t)}}function kr(e,t={},r=Xt){return wr(((i,n,s,[o]=[])=>{let a=Object.assign({},{...t,...o})
return e(i,n,s,[a],r)}))}function Sr(e={},t=Xt){return kr(vr,e,t)}function Rr(e={},t=Xt){return kr(_r,e,t)}const Er=wr(((e,t,r,[i]=[])=>{const{initializer:n}=r
return delete r.initializer,{get(){let e=this[i].lastSuccessful
return e?e.value:n?n.call(this):void 0}}})),Ar=Sr({},br),Or=Sr({drop:!0},br),Cr=Sr({enqueue:!0},br),Tr=Sr({keepLatest:!0},br),Mr=Sr({restartable:!0},br),jr=Rr({},br),Pr=Rr({drop:!0},br),xr=Rr({enqueue:!0},br),Dr=Rr({keepLatest:!0},br),Fr=Rr({restartable:!0},br)
function Nr(e,t,r){var i
return(0,Ae.assert)('It appears you\'re attempting to use the new task(async () => { ... }) syntax, but the async arrow task function you\'ve provided is not being properly compiled by Babel.\n\nPossible causes / remedies:\n\n1. You must pass the async function expression directly to the task() function (it is not currently supported to pass in a variable containing the async arrow fn, or any other kind of indirection)\n2. The new task syntax is only supported by native classes. Ensure that this is one.\n3. If this code is in an addon, please ensure the addon specifies ember-concurrency "2.3.0" or higher in "dependencies" (not "devDependencies")\n4. Ensure that there is only one version of ember-concurrency v2.3.0+ being used in your project (including nested dependencies) and consider using npm/yarn/pnpm resolutions to enforce a single version is used\n5. Ensure that you have registered the Babel transform that Ember Concurrency uses to transform tasks in the "async-arrow" notation, see https://ember-concurrency.com/docs/v4-upgrade',!((i=arguments[arguments.length-1])&&i.constructor&&"AsyncFunction"===i.constructor.name)),qr(e)||t&&r?Ar(...arguments):function(e){const t=mt((function(){return t[ut].setTaskDefinition(t.taskFn),t[ut].createTask(this)}))
return t.taskFn=e,t[ut]=new br,Object.setPrototypeOf(t,ht.prototype),t}(e)}function Ir(e,t,r){if(qr(e)||t&&r)return jr(...arguments)
{let e=mt((function(t){return e[ut].setName(t),e[ut].createTaskGroup(this)}))
return e[ut]=new br,Object.setPrototypeOf(e,ft.prototype),e}}function qr(e){return!(!e||"function"==typeof e||"object"==typeof e&&"perform"in e&&"function"==typeof e.perform||Object.getPrototypeOf(e)!==Object.prototype)}const $r=Gr(Se.Promise,"all",Vr),Lr=Gr(Se,"allSettled",Vr),zr=Gr($,"race",Vr),Br=Gr(Se,"hash",Wr),Ur=Gr(Se,"hashSettled",Wr)
function Vr(e){return e}function Wr(e){return Object.keys(e).map((t=>e[t]))}function Hr(e){if(e)if(e instanceof ar)e.executor.asyncErrorsHandled=!0
else if(e instanceof Fe)return e._toPromise()
return e}function Gr(e,t,r){return function(i){let n=function(e,t){if(Array.isArray(e))return e.map(t)
if("object"==typeof e&&null!==e){let r={}
return Object.keys(e).forEach((i=>{r[i]=t(e[i])})),r}return e}(i,Hr),s=r(n);(0,Ae.assert)(`'${t}' expects an array.`,Array.isArray(s))
let o=Se.defer()
e[t](n).then(o.resolve,o.reject)
let a=!1,c=()=>{a||(a=!0,s.forEach((e=>{e&&(e instanceof ar?e.cancel():"function"==typeof e[Ce]&&e[Ce]())})))},l=o.promise.finally(c)
return l[Ce]=c,l}}class Yr extends ze{constructor(e){super(),this.queueName=e}onYield(e){let t
try{t=(0,i.schedule)(this.queueName,(()=>e.next()))}catch(t){e.throw(t)}return()=>(0,i.cancel)(t)}}class Kr extends ze{constructor(e,t){super(),this.object=e,this.eventName=t,this.usesDOMEvents=!1}on(e){"function"==typeof this.object.addEventListener?(this.usesDOMEvents=!0,this.object.addEventListener(this.eventName,e)):this.object.on(this.eventName,e)}off(e){this.usesDOMEvents?this.object.removeEventListener(this.eventName,e):this.object.off(this.eventName,e)}onYield(e){let t=null,r=()=>{t&&this.off(t),t=null}
return t=t=>{r(),e.next(t)},this.on(t),r}}class Qr extends ze{constructor(e,t,r=Boolean){super(),this.object=e,this.key=t,this.predicateCallback="function"==typeof r?r:e=>e===r}onYield(e){let t=!1,r=()=>{let t=(0,Ve.get)(this.object,this.key)
if(this.predicateCallback(t))return e.next(t),!0}
return r()||((0,gt.addObserver)(this.object,this.key,null,r),t=!0),()=>{t&&r&&(0,gt.removeObserver)(this.object,this.key,null,r)}}}function Jr(e){return new Yr(e)}function Zr(e,t){var r
return(0,Ae.assert)(`${e} must include Ember.Evented (or support \`.on()\` and \`.off()\`) or DOM EventTarget (or support \`addEventListener\` and  \`removeEventListener\`) to be able to use \`waitForEvent\``,(r=e)&&("function"==typeof r.one&&"function"==typeof r.off||"function"==typeof r.on&&"function"==typeof r.off||"function"==typeof r.addEventListener&&"function"==typeof r.removeEventListener)),new Kr(e,t)}function Xr(e,t,r){return new Qr(e,t,r)}},5564:(e,t,r)=>{r.d(t,{C:()=>He,S:()=>xe,g:()=>y,k:()=>ue,l:()=>we,o:()=>G,p:()=>U,q:()=>Y,r:()=>H,s:()=>K,t:()=>z,u:()=>b,v:()=>Qe})
var i=r(1603),n=r(7648),s=r(4065),o=r(7375),a=r(1223),c=r(8146)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const l="__$co"
var u=r(3241),d=r(8738),h=r(3193)
function f(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function p(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}function m(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){{let t
return t=null==e||""===e?null:String(e),(0,i.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function g(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function b(e){{const t=(0,u._k)(e)
return(0,i.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function v(e){return Boolean(e&&"object"==typeof e)}function _(e,t){return Boolean(v(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function w(e){return _(e,"lid")}function k(e){return _(e,"id")||Boolean(v(e)&&"id"in e&&"number"==typeof e.id)}const S=(0,o.L1)("DOCUMENTS",new Set)
function R(e){return void 0!==e[l]}function E(e){return S.has(e)}const A="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,O=new Map
let C=0
function T(e,t,r){"record"===r&&!e.id&&k(t)&&function(e,t,r){let i=e.get(t.type)
i||(i=new Map,e.set(t.type,i)),i.set(r,t.lid)}(O,e,t.id)}function M(e,t){const r=k(e)?y(e.id):null
return{type:function(e){return _(e,"type")}(e)?b(e.type):t?t.type:null,id:r}}function j(e,t){if("record"===t){if(w(e))return e.lid
if(k(e)){const t=b(e.type),r=O.get(t)?.get(e.id)
return r||`@lid:${t}-${e.id}`}return A.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function P(...e){}function x(e,t,r){return e}class D{constructor(){this._generate=(0,o.Yj)("configuredGenerationMethod")||j,this._update=(0,o.Yj)("configuredUpdateMethod")||T,this._forget=(0,o.Yj)("configuredForgetMethod")||P,this._reset=(0,o.Yj)("configuredResetMethod")||P,this._merge=x,this._keyInfoForResource=(0,o.Yj)("configuredKeyInfoMethod")||M,this._id=C++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||x}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(R(e))return e
const r=this._generate(e,"record")
let i=N(this._cache,r)
if(null!==i)return i
if(0!==t){if(2===t)e.lid=r,e[l]=this._id,i=F(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=r,t[l]=this._id,i=F(t)}return I(this._cache,i),i}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let r=this._cache.documents.get(t)
return void 0===r&&(r={lid:t},S.add(r),this._cache.documents.set(t,r)),r}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),r=F({id:e.id||null,type:e.type,lid:t,[l]:this._id})
return I(this._cache,r),r}updateRecordIdentifier(e,t){let r=this.getOrCreateRecordIdentifier(e)
const i=this._keyInfoForResource(t,r)
let n=function(e,t,r,i){const n=t.id,{id:s,type:o,lid:a}=r,c=e.resourcesByType[r.type]
if(null!==s&&s!==n&&null!==n){const e=c&&c.id.get(n)
return void 0!==e&&e}{const r=t.type
if(null!==s&&s===n&&r===o&&w(i)&&i.lid!==a)return N(e,i.lid)||!1
if(null!==s&&s===n&&r&&r!==o&&w(i)&&i.lid===a){const t=e.resourcesByType[r],i=t&&t.id.get(n)
return void 0!==i&&i}}return!1}(this._cache,i,r,t)
const s=w(t)
if(n||r.type!==i.type&&(s&&delete t.lid,n=this.getOrCreateRecordIdentifier(t)),n){const e=r
r=this._mergeRecordIdentifiers(i,e,n,t),s&&(t.lid=r.lid)}const o=r.id;(function(e,t,r,i){i(e,r,"record"),void 0!==r.id&&(e.id=y(r.id))})(r,0,t,this._update)
const a=r.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[r.type]
e.id.set(a,r),null!==o&&e.id.delete(o)}return r}_mergeRecordIdentifiers(e,t,r,i){const n=this._merge(t,r,i),s=n===t?r:t,o=this._cache.polymorphicLidBackMap.get(s.lid)
o&&this._cache.polymorphicLidBackMap.delete(s.lid),this.forgetRecordIdentifier(s),this._cache.resources.set(s.lid,n)
const a=this._cache.polymorphicLidBackMap.get(n.lid)??[]
return a.push(s.lid),o&&o.forEach((e=>{a.push(e),this._cache.resources.set(e,n)})),this._cache.polymorphicLidBackMap.set(n.lid,a),n}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),r=this._cache.resourcesByType[t.type]
null!==t.id&&r.id.delete(t.id),this._cache.resources.delete(t.lid),r.lid.delete(t.lid)
const i=this._cache.polymorphicLidBackMap.get(t.lid)
i&&(i.forEach((e=>{this._cache.resources.delete(e)})),this._cache.polymorphicLidBackMap.delete(t.lid)),t[l]=void 0,this._forget(t,"record")}destroy(){O.clear(),this._cache.documents.forEach((e=>{S.delete(e)})),this._reset()}}function F(e,t,r){return e}function N(e,t,r){return e.resources.get(t)||null}function I(e,t){e.resources.set(t.lid,t)
let r=e.resourcesByType[t.type]
r||(r={lid:new Map,id:new Map},e.resourcesByType[t.type]=r),r.lid.set(t.lid,t),t.id&&r.id.set(t.id,t)}class q{constructor(e,t){m(this,"___token",void 0),m(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,((e,t,r)=>{("identity"===t||"attributes"===t&&"id"===r)&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then((e=>this.store.push(e)))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,c.sg)(q.prototype,"_ref")
class ${constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let r=this._pendingNotifies.get(e)
r||(r=new Set,this._pendingNotifies.set(e,r)),r.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",(()=>this._flushNotifications())):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach(((e,t)=>{e.forEach((e=>{this._store.notifications.notify(t,"relationships",e)}))}))}notifyChange(e,t,r){"relationships"===t&&r?this._scheduleNotification(e,r):this._store.notifications.notify(e,t,r)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}$.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const L=(0,o.L1)("CacheForIdentifierCache",new Map)
function z(e,t){L.set(e,t)}function B(e){L.delete(e)}function U(e){return L.has(e)?L.get(e):null}const V=(0,o.L1)("RecordCache",new Map)
function W(e){return V.get(e)}function H(e){return V.get(e)}function G(e,t){V.set(e,t)}const Y=(0,o.L1)("StoreMap",new Map)
function K(e){return Y.get(e)}class Q{constructor(e){m(this,"__instances",{record:new Map,reference:new WeakMap}),this.store=e,this._storeWrapper=new $(this.store),e.identifierCache.__configureMerge(((e,t,r)=>{let i=e
e.id!==t.id?i="id"in r&&e.id===r.id?e:t:e.type!==t.type&&(i="type"in r&&e.type===r.type?e:t)
const n=e===i?t:e,s=this.__instances.record.has(i),o=this.__instances.record.has(n)
if(s&&o&&"id"in r)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(r.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:n,value:i}),this.unloadRecord(n),i}))}peek(e){return this.__instances.record.get(e)}getRecord(e,t){let r=this.__instances.record.get(e)
if(!r){const i=this.store.cache
z(e,i),r=this.store.instantiateRecord(e,t||{}),G(r,e),z(r,i),Y.set(r,this.store),this.__instances.record.set(e,r)}return r}getReference(e){const t=this.__instances.reference
let r=t.get(e)
return r||(r=new q(this.store,e),t.set(e,r)),r}recordIsLoaded(e,t=!1){const r=this.cache
if(!r)return!1
const i=r.isNew(e),n=r.isEmpty(e)
return i?!r.isDeleted(e):!(t&&r.isDeletionCommitted(e)||n)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),B(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join((()=>{const t=this.__instances.record.get(e),r=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),Y.delete(t),V.delete(t),B(t)),r?(r.unloadRecord(e),B(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)}))}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach((e=>{this.unloadRecord(e)}))
else{const r=t.resourcesByType,i=r[e]?.lid
i&&i.forEach((e=>{this.unloadRecord(e)}))}}setRecordId(e,t){const{type:r,lid:n}=e,s=e.id
null===s||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:r,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:r,id:t}),this.store.notifications.notify(e,"identity")):(0,i.warn)(`Your ${r} record was saved to the server, but the response does not have an id.`,!(null!==s&&null===t))}}function J(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:g(e)}:H(e)}const Z=(0,o.L1)("AvailableShims",new WeakMap)
class X{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,r)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(r,t.kind)})),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,r)=>{"attribute"===t.kind&&e.set(r,t)})),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,r)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(r,t)})),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((r,i)=>{"attribute"===r.kind&&e.call(t,i,r)}))}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((r,i)=>{"belongsTo"!==r.kind&&"hasMany"!==r.kind||e.call(t,i,r)}))}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((r,i)=>{if("attribute"===r.kind){const n=r.type
n&&e.call(t,i,n)}}))}}function ee(e){return"added"===e||"state"===e||"updated"===e||"removed"===e||"invalidated"===e}function te(){return!!a._backburner.currentInstance&&!0!==a._backburner._autorun}class re{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map}subscribe(e,t){let r=this._cache.get(e)
return t.for=e,r||(r=[],this._cache.set(e,r)),r.push(t),t}unsubscribe(e){this.isDestroyed||function(e,t){const r=e.for
if(r){const i=t.get(r)
if(!i)return
const n=i.indexOf(e)
if(-1===n)return
i.splice(n,1)}}(e,this._cache)}notify(e,t,r){if(!R(e)&&!E(e))return!1
const i=Boolean(this._cache.get(e)?.length)
if(ee(t)||i){let i=this._buffered.get(e)
i||(i=[],this._buffered.set(e,i)),i.push([t,r]),this._scheduleNotify()}return i}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
return!(this._hasFlush&&!1!==e&&!te()||(e&&!te()?(this._hasFlush=!0,1):(this._flush(),0)))}_flush(){const e=this._buffered
e.size&&(this._buffered=new Map,e.forEach(((e,t)=>{e.forEach((e=>{this._flushNotification(t,e[0],e[1])}))}))),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,r){if(ee(t)){const r=this._cache.get(E(e)?"document":"resource")
r&&r.forEach((r=>{r(e,t)}))}const i=this._cache.get(e)
return!(!i||!i.length||(i.forEach((i=>{i(e,t,r)})),0))}destroy(){this.isDestroyed=!0,this._cache.clear()}}const ie=Proxy,ne=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),se=new Set(["push","pop","unshift","shift","splice","sort"]),oe=new Set(["[]","length","links","meta"])
function ae(e){return ne.has(e)}function ce(e,t){return t in e}const le=(0,o.L1)("#signal",Symbol("#signal")),ue=(0,o.L1)("#source",Symbol("#source")),de=(0,o.L1)("#update",Symbol("#update")),he=(0,o.L1)("#notify",Symbol("#notify")),fe=(0,o.L1)("IS_COLLECTION",Symbol.for("Collection"))
function pe(e){(0,c.RH)(e[le])}function me(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class ye{[he](){pe(this)}destroy(e){this.isDestroying=!e,this[ue].length=0,this[he](),this.isDestroyed=!e}get length(){return this[ue].length}set length(e){this[ue].length=e}constructor(e){m(this,"isLoaded",!0),m(this,"isDestroying",!1),m(this,"isDestroyed",!1),m(this,"_updatingPromise",null),m(this,fe,!0),m(this,ue,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this[ue]=e.identifiers,this[le]=(0,c.n5)(this,"length")
const r=e.store,i=new Map,n=this[le],s={links:e.links||null,meta:e.meta||null}
let o=!1
const a=new ie(this[ue],{get(a,l,u){const d=me(l)
if(n.shouldReset&&(null!==d||oe.has(l)||ae(l))&&(e.manager._syncArray(u),n.t=!1,n.shouldReset=!1),null!==d){const e=a[d]
return o||(0,c.B1)(n),e&&r._instanceCache.getRecord(e)}if("meta"===l)return(0,c.B1)(n),s.meta
if("links"===l)return(0,c.B1)(n),s.links
if("[]"===l)return(0,c.B1)(n),u
if(ae(l)){let e=i.get(l)
return void 0===e&&(e="forEach"===l?function(){(0,c.B1)(n),o=!0
const e=function(e,t,r,i,n){void 0===n&&(n=null)
const s=(t=t.slice()).length
for(let o=0;o<s;o++)i.call(n,r._instanceCache.getRecord(t[o]),o,e)
return e}(u,a,r,arguments[0],arguments[1])
return o=!1,e}:function(){(0,c.B1)(n),o=!0
const e=Reflect.apply(a[l],u,arguments)
return o=!1,e},i.set(l,e)),e}if(function(e){return se.has(e)}(l)){let r=i.get(l)
return void 0===r&&(r=function(){if(!e.allowMutation)return
const r=Array.prototype.slice.call(arguments)
o=!0
const i=t[de](a,u,l,r,n)
return o=!1,i},i.set(l,r)),r}if(ce(t,l)){if(l===he||l===le||l===ue)return t[l]
let e=i.get(l)
if(e)return e
const r=t[l]
return"function"==typeof r?(e=function(){return(0,c.B1)(n),Reflect.apply(r,u,arguments)},i.set(l,e),e):((0,c.B1)(n),r)}return a[l]},set(r,i,a,c){if("length"===i){if(!o&&0===a)return o=!0,t[de](r,c,"length 0",[],n),o=!1,!0
if(o)return Reflect.set(r,i,a)}if("links"===i)return s.links=a||null,!0
if("meta"===i)return s.meta=a||null,!0
const l=me(i)
if(null===l||l>r.length){if(null!==l&&o){const e=H(a)
return r[l]=e,!0}return!!ce(t,i)&&(t[i]=a,!0)}if(!e.allowMutation)return!1
const u=r[l],d=(h=a)?H(h):null
var h
return o?r[l]=d:t[de](r,c,"replace cell",[l,u,d],n),!0},deleteProperty:(e,t)=>!!o&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Array.prototype})
return(0,c.zs)(a,n),this[he]=this[he].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally((()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)})),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map((e=>this.store.saveRecord(e)))).then((()=>this))}}!function(e,t,r){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let n of r)i=n(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}(ye.prototype,"length",[d.Vv])
const ge={enumerable:!0,configurable:!1,get:function(){return this}};(0,d.Vv)(ge),Object.defineProperty(ye.prototype,"[]",ge),(0,c.sg)(ye.prototype,"isUpdating",!1)
class be extends ye{constructor(e){super(e),m(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}be.prototype.query=null
const ve=(0,o.L1)("FAKE_ARR",{}),_e=1200
function we(e,t){let r=0
const i=t.length
for(;i-r>_e;)e.push.apply(e,t.slice(r,r+_e)),r+=_e
e.push.apply(e,t.slice(r))}class ke{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("resource",((e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)}))}_syncArray(e){const t=this._pending.get(e)
!t||this.isDestroying||this.isDestroyed||(function(e,t,r){const i=e[ue],n=[],s=[]
t.forEach(((e,t)=>{if("add"===e){if(r.has(t))return
n.push(t),r.add(t)}else r.has(t)&&(s.push(t),r.delete(t))})),s.length&&(s.length===i.length?i.length=0:s.forEach((e=>{const t=i.indexOf(e);-1!==t&&(i.splice(t,1),r.delete(e))}))),n.length&&we(i,n)}(e,t,this._set.get(e)),this._pending.delete(e))}mutate(e){this.store.cache.mutate(e)}liveArrayFor(e){let t=this._live.get(e)
const r=[],i=this._staged.get(e)
return i&&(i.forEach(((e,t)=>{"add"===e&&r.push(t)})),this._staged.delete(e)),t||(t=new ye({type:e,identifiers:r,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(r))),t}createArray(e){const t={type:e.type,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},r=new be(t)
return this._managed.add(r),this._set.set(r,new Set(t.identifiers||[])),e.identifiers&&Se(this._identifiers,r,e.identifiers),r}dirtyArray(e,t){if(e===ve)return
const r=e[le]
r.shouldReset?t>0&&!r.t&&(0,c.Fe)(e[he]):(r.shouldReset=!0,(0,c.Fe)(e[he]))}_getPendingFor(e,t,r){if(this.isDestroying||this.isDestroyed)return
const i=this._live.get(e.type),n=this._pending,s=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach((e=>{let t=n.get(e)
t||(t=new Map,n.set(e,t)),s.set(e,t)}))}if(i&&0===i[ue].length&&r){const e=n.get(i)
if(!e||0===e.size)return s}if(i){let e=n.get(i)
e||(e=new Map,n.set(i,e)),s.set(i,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),s.set(ve,t)}return s}populateManagedArray(e,t,r){this._pending.delete(e)
const i=e[ue],n=i.slice()
i.length=0,we(i,t),this._set.set(e,new Set(t)),pe(e),e.meta=r.meta||null,e.links=r.links||null,e.isLoaded=!0,function(e,t,r){for(let i=0;i<r.length;i++)Re(e,t,r[i])}(this._identifiers,e,n),Se(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach(((t,r)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(r,t.size))}))}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach(((t,r)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(r,t.size))}))}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach((t=>t.destroy(e))),this._managed.forEach((t=>t.destroy(e))),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach((e=>e.clear())),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function Se(e,t,r){for(let i=0;i<r.length;i++){const n=r[i]
let s=e.get(n)
s||(s=new Set,e.set(n,s)),s.add(t)}}function Re(e,t,r){const i=e.get(r)
i&&i.delete(t)}const Ee=(0,o.L1)("Touching",Symbol("touching")),Ae=(0,o.L1)("RequestPromise",Symbol("promise")),Oe=[]
class Ce{constructor(e){m(this,"_pending",new Map),m(this,"_done",new Map),m(this,"_subscriptions",new Map),m(this,"_toFlush",[]),m(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const r=t.data[0]
if("recordIdentifier"in r){const i=r.recordIdentifier,n="saveRecord"===r.op?"mutation":"query"
this._pending.has(i)||this._pending.set(i,[])
const s={state:"pending",request:t,type:n}
return s[Ee]=[r.recordIdentifier],s[Ae]=e,this._pending.get(i).push(s),this._triggerSubscriptions(s),e.then((e=>{this._dequeue(i,s)
const r={state:"fulfilled",request:t,type:n,response:{data:e}}
return r[Ee]=s[Ee],this._addDone(r),this._triggerSubscriptions(r),e}),(e=>{this._dequeue(i,s)
const r={state:"rejected",request:t,type:n,response:{data:e}}
throw r[Ee]=s[Ee],this._addDone(r),this._triggerSubscriptions(r),e}))}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush((()=>{this._flush()}))):this._flushRequest(e)}_flush(){this._toFlush.forEach((e=>{this._flushRequest(e)})),this._toFlush=[]}_flushRequest(e){e[Ee].forEach((t=>{const r=this._subscriptions.get(t)
r&&r.forEach((t=>t(e)))}))}_dequeue(e,t){const r=this._pending.get(e)
this._pending.set(e,r.filter((e=>e!==t)))}_addDone(e){e[Ee].forEach((t=>{const r=e.request.data[0].op
let i=this._done.get(t)
i&&(i=i.filter((e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==r}))),i=i||[],i.push(e),this._done.set(t,i)}))}subscribeForRecord(e,t){let r=this._subscriptions.get(e)
r||(r=[],this._subscriptions.set(e,r)),r.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||Oe}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function Te(e){return Boolean(e&&"string"==typeof e)}function Me(e,t,r){if("object"==typeof e&&null!==e){const t=e
return R(t)||"id"in t&&(t.id=y(t.id)),t}{const i=y(t)
if(!Te(i)){if(Te(r))return{lid:r}
throw new Error("Expected either id or lid to be a valid string")}return Te(r)?{type:e,id:i,lid:r}:{type:e,id:i}}}globalThis.setWarpDriveLogging=s.q,globalThis.getWarpDriveRuntimeConfig=s.P
const je=(0,h.A)(r(4471)),Pe=je.default?je.default:je
Pe!==class{constructor(e){}}&&(0,i.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
class xe extends Pe{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new D,this.notifications=new re(this),this.recordArrayManager=new ke({store:this}),this._requestCache=new Ce(this),this._instanceCache=new Q(this),this._documentCache=new Map,this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[n._q]:e[n._q]??!0}
if(e.records){const r=this.identifierCache
t.records=e.records.map((e=>r.getOrCreateRecordIdentifier(e)))}const r=Object.assign({},e,t),i=this.requestManager.request(r)
return i.onFinalize((()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()})),i}modelFor(e){return function(e,t){let r=Z.get(e)
r||(r=Object.create(null),Z.set(e,r))
let i=r[t]
return void 0===i&&(i=r[t]=new X(e,t)),i}(this,e)}createRecord(e,t){let r
return this._join((()=>{const i=b(e),n={...t}
let s=null
if(null===n.id||void 0===n.id){const e=this.adapterFor?.(i,!0)
s=e&&e.generateIdForRecord?n.id=y(e.generateIdForRecord(this,i,n)):n.id=null}else s=n.id=y(n.id)
const o={type:i,id:s}
o.id&&this.identifierCache.peekRecordIdentifier(o)
const a=this.identifierCache.createIdentifierForNewRecord(o),c=this.cache,l=function(e,t,r){if(void 0!==r){const{type:i}=t,n=e.schema.fields({type:i})
if(n.size){const e=Object.keys(r)
for(let t=0;t<e.length;t++){const i=e[t],s=n.get(i)
s&&("hasMany"===s.kind?r[i]=r[i].map((e=>Fe(e))):"belongsTo"===s.kind&&(r[i]=Fe(r[i])))}}}return r}(this,a,n),u=c.clientDidCreate(a,l)
r=this._instanceCache.getRecord(a,u)})),r}deleteRecord(e){const t=W(e),r=this.cache
this._join((()=>{r.setIsDeleted(t,!0),r.isNew(t)&&this._instanceCache.unloadRecord(t)}))}unloadRecord(e){const t=W(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,r){De(e)?r=t:e=Me(b(e),g(t))
const i=this.identifierCache.getOrCreateRecordIdentifier(e)
return(r=r||{}).preload&&(this._instanceCache.recordIsLoaded(i)||(r.reload=!0),this._join((()=>{!function(e,t,r){const i={},n=e.schema.fields(t)
Object.keys(r).forEach((e=>{const t=r[e],s=n.get(e)
!s||"hasMany"!==s.kind&&"belongsTo"!==s.kind?(i.attributes||(i.attributes={}),i.attributes[e]=t):(i.relationships||(i.relationships={}),i.relationships[e]=function(e,t){const r=e.type
return"hasMany"===e.kind?{data:t.map((e=>J(e,r)))}:{data:t?J(t,r):null}}(s,t))}))
const s=e.cache,o=Boolean(e._instanceCache.peek(t))
s.upsert(t,i,o)}(this,i,r.preload)}))),this.request({op:"findRecord",data:{record:i,options:r},cacheOptions:{[n.ER]:!0}}).then((e=>e.content))}getReference(e,t){let r
r=1===arguments.length&&De(e)?e:Me(b(e),g(t))
const i=this.identifierCache.getOrCreateRecordIdentifier(r)
return this._instanceCache.getReference(i)}peekRecord(e,t){if(1===arguments.length&&De(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const r={type:b(e),id:g(t)},i=this.identifierCache.peekRecordIdentifier(r)
return i&&this._instanceCache.recordIsLoaded(i)?this._instanceCache.getRecord(i):null}query(e,t,r={}){return this.request({op:"query",data:{type:b(e),query:t,options:r},cacheOptions:{[n.ER]:!0}}).then((e=>e.content))}queryRecord(e,t,r){return this.request({op:"queryRecord",data:{type:b(e),query:t,options:r||{}},cacheOptions:{[n.ER]:!0}}).then((e=>e.content))}findAll(e,t={}){return this.request({op:"findAll",data:{type:b(e),options:t||{}},cacheOptions:{[n.ER]:!0}}).then((e=>e.content))}peekAll(e){return this.recordArrayManager.liveArrayFor(b(e))}unloadAll(e){this._join((()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(b(e))}))}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map((e=>this._instanceCache.getRecord(e))):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let r
return t&&(this._enableAsyncFlush=!0),this._join((()=>{r=this.cache.put({content:e})})),this._enableAsyncFlush=null,"data"in r?r.data:null}saveRecord(e,t={}){const r=H(e),i=this.cache
if(!r)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const r=e.cache
return!r||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,r)}(this._instanceCache,r))return Promise.resolve(e)
t||(t={})
let s="updateRecord"
i.isNew(r)?s="createRecord":i.isDeleted(r)&&(s="deleteRecord")
const o={op:s,data:{options:t,record:r},records:[r],cacheOptions:{[n.ER]:!0}}
return this.request(o).then((e=>e.content))}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function De(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function Fe(e){return e?H(e):null}function Ne(e){return"string"==typeof e?e:e.href}xe.prototype.getSchemaDefinitionService=function(){return(0,i.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema},xe.prototype.registerSchemaDefinitionService=function(e){(0,i.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e},xe.prototype.registerSchema=function(e){(0,i.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e}
var Ie=new WeakMap,qe=new WeakSet
class $e{constructor(e,t){var r
f(this,r=qe),r.add(this),function(e,t){f(e,t),t.set(e,void 0)}(this,Ie),function(e,t,r){e.set(p(e,t),r)}(Ie,this,e),this.identifier=t}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,p(qe,this,Le).call(this,this.links.related?"related":"self",e)}next(e={}){return p(qe,this,Le).call(this,"next",e)}prev(e={}){return p(qe,this,Le).call(this,"prev",e)}first(e={}){return p(qe,this,Le).call(this,"first",e)}last(e={}){return p(qe,this,Le).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function Le(e,t){const r=this.links?.[e]
return r?(t.method=t.method||"GET",Object.assign(t,{url:Ne(r)}),(await(i=Ie,i.get(p(i,this))).request(t)).content):null
var i}(0,c.sg)($e.prototype,"data"),(0,c.sg)($e.prototype,"links"),(0,c.sg)($e.prototype,"errors"),(0,c.sg)($e.prototype,"meta")
const ze=new Set(["createRecord","updateRecord","deleteRecord"])
function Be(e){return Boolean(e.op&&ze.has(e.op))}function Ue(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta),"errors"in t&&(e.errors=t.errors)}function Ve(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),r=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return r.stack=e.stack,r.error=e.error,Object.assign(r,e),r}function We(e,t,r){if(e){const r=t.get(e)
if(r)return r.priority}return r}const He={request(e,t){if(!e.request.store||e.request.cacheOptions?.[n.ER])return t(e.request)
const{store:r}=e.request,i=r.identifierCache.getOrCreateDocumentIdentifier(e.request)
i&&e.setIdentifier(i)
const s=r.requestManager._deduped,o=i&&s.get(i),a=i?r.cache.peekRequest(i):null
if(function(e,t,r,i){const{cacheOptions:n}=t
return t.op&&ze.has(t.op)||n?.reload||!r||!(!e.lifetimes||!i)&&e.lifetimes.isHardExpired(i,e)}(r,e.request,!!a,i)){if(o)return o.priority={blocking:!0},o.promise
let n=Ke(t,e,i,{blocking:!0})
return i&&(n=n.finally((()=>{s.delete(i),r.notifications.notify(i,"state")})),s.set(i,{priority:{blocking:!0},promise:n}),r.notifications.notify(i,"state")),n}if(function(e,t,r,i){const{cacheOptions:n}=t
return n?.backgroundReload||!(!e.lifetimes||!i)&&e.lifetimes.isSoftExpired(i,e)}(r,e.request,0,i)){let n=o?.promise||Ke(t,e,i,{blocking:!1})
i&&!o&&(n=n.finally((()=>{s.delete(i),r.notifications.notify(i,"state")})),s.set(i,{priority:{blocking:!1},promise:n}),r.notifications.notify(i,"state")),r.requestManager._pending.set(e.id,n)}const c=e.request[n._q]||!1
if(e.setResponse(a.response),"error"in a){const e=c?Ye(r,{shouldHydrate:c,identifier:i},a.content,!0):a.content,t=Ve(a)
throw t.content=e,t}return c?Ge(r,e.request,{shouldHydrate:c,identifier:i},a.content,!0):a.content}}
function Ge(e,t,r,i,n){const{identifier:s}=r
if(!i)return i
if(Array.isArray(i.data)){const{recordArrayManager:o}=e
if(!s){if(!r.shouldHydrate)return i
const n=o.createArray({type:t.url,identifiers:i.data,doc:i,query:t}),s=new $e(e,null)
return s.data=n,s.meta=i.meta,s.links=i.links,s}let a=o._keyedArrays.get(s.lid)
if(a){const t=e._documentCache.get(s)
return n||(o.populateManagedArray(a,i.data,i),t.data=a,t.meta=i.meta,t.links=i.links),r.shouldHydrate?t:i}{a=o.createArray({type:s.lid,identifiers:i.data,doc:i}),o._keyedArrays.set(s.lid,a)
const t=new $e(e,s)
return t.data=a,t.meta=i.meta,t.links=i.links,e._documentCache.set(s,t),r.shouldHydrate?t:i}}{if(!s&&!r.shouldHydrate)return i
const t=i.data?e.peekRecord(i.data):null
let o
return s&&(o=e._documentCache.get(s)),o?n||(o.data=t,Ue(o,i)):(o=new $e(e,s),o.data=t,Ue(o,i),s&&e._documentCache.set(s,o)),r.shouldHydrate?o:i}}function Ye(e,t,r,i){const{identifier:n}=t
if(!function(e){return"errors"in e}(r)||!n&&!t.shouldHydrate)return r
let s
return n&&(s=e._documentCache.get(n)),s?i||(s.data=void 0,Ue(s,r)):(s=new $e(e,n),Ue(s,r),n&&e._documentCache.set(n,s)),t.shouldHydrate?s:r}function Ke(e,t,r,i){const{store:s}=t.request,o={shouldHydrate:t.request[n._q]||!1,identifier:r,priority:i}
let a=!1
if(Be(t.request)){a=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&s.cache.willCommit(e,t)}s.lifetimes?.willRequest&&s.lifetimes.willRequest(t.request,r,s)
const c=e(t.request).then((e=>function(e,t,r,i){const{request:n}=t
let s
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join((()=>{s=function(e,t,r,i){let n=null
if(Be(t)){const r=t.data?.record||t.records?.[0]
r?n=e.cache.didCommit(r,i):function(e){return!Be(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(i)&&(n=e.cache.put(i))}else n=e.cache.put(i)
return Ge(e,t,r,n,!1)}(e,n,r,i)})),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,i.response,r.identifier,e),We(r.identifier,e.requestManager._deduped,r.priority).blocking)return s
e.notifications._flush()}(s,t,o,e)),(e=>function(e,t,r,i){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw i
let n
if(e._enableAsyncFlush=!0,e._join((()=>{n=function(e,t,r,i){let n
if(!Be(t.request))return n=e.cache.put(i),Ye(e,r,n,!1)
{const r=i&&i.content&&"object"==typeof i.content&&"errors"in i.content&&Array.isArray(i.content.errors)?i.content.errors:void 0,n=t.request.data?.record||t.request.records?.[0]
e.cache.commitWasRejected(n,r)}}(e,t,r,i)})),e._enableAsyncFlush=null,r.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,i.response,r.identifier,e),Be(t.request))throw i
if(We(r.identifier,e.requestManager._deduped,r.priority).blocking){const e=Ve(i)
throw e.content=n,e}e.notifications._flush()}(s,t,o,e)))
if(!a)return c
const l=t.request.data?.record||t.request.records?.[0]
return s._requestCache._enqueue(c,{data:[{op:"saveRecord",recordIdentifier:l,options:void 0}]})}class Qe extends ye{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[de](e,t,r,i,n){switch(r){case"length 0":return Reflect.set(e,"length",0),rt(this,[],n),!0
case"replace cell":{const[t,r,s]=i
return e[t]=s,function(e,t,r){it(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},r)}(this,{value:s,prior:r,index:t},n),!0}case"push":{const s=Je(i)
Xe(this,e,(e=>e.push(...s)),"Cannot push duplicates to a hasMany's state.")
{const s=new Set(e),o=new Set
i.forEach((e=>{const t=H(e)
s.has(t)||(s.add(t),o.add(e))}))
const a=Array.from(o),c=Reflect.apply(e[r],t,a)
return a.length&&et(this,{value:Je(a)},n),c}}case"pop":{const s=Reflect.apply(e[r],t,i)
return s&&tt(this,{value:H(s)},n),s}case"unshift":{const s=Je(i)
Xe(this,e,(e=>e.unshift(...s)),"Cannot unshift duplicates to a hasMany's state.")
{const s=new Set(e),o=new Set
i.forEach((e=>{const t=H(e)
s.has(t)||(s.add(t),o.add(e))}))
const a=Array.from(o),c=Reflect.apply(e[r],t,a)
return a.length&&et(this,{value:Je(a),index:0},n),c}}case"shift":{const s=Reflect.apply(e[r],t,i)
return s&&tt(this,{value:H(s),index:0},n),s}case"sort":{const s=Reflect.apply(e[r],t,i)
return function(e,t,r){it(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},r)}(this,s.map(H),n),s}case"splice":{const[s,o,...a]=i
if(0===s&&o===this[ue].length){const i=Je(a)
Xe(this,e,(e=>e.splice(s,o,...i)),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const i=new Set(a),c=Array.from(i),l=[s,o].concat(c),u=Reflect.apply(e[r],t,l)
return rt(this,Je(c),n),u}}const c=Je(a)
Xe(this,e,(e=>e.splice(s,o,...c)),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const i=e.slice()
i.splice(s,o)
const c=new Set(i),l=[]
a.forEach((e=>{const t=H(e)
c.has(t)||(c.add(t),l.push(e))}))
const u=[s,o,...l],d=Reflect.apply(e[r],t,u)
return o>0&&tt(this,{value:d.map(H),index:s},n),l.length>0&&et(this,{value:Je(l),index:s},n),d}}}}notify(){this[le].shouldReset=!0,pe(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,r=t.createRecord(this.modelName,e)
return this.push(r),r}destroy(){super.destroy(!1)}}function Je(e){return e.map(Ze)}function Ze(e){return H(e)}function Xe(e,t,r,n){const s=t.slice()
if(r(s),s.length!==new Set(s).size){const t=s.filter(((e,t)=>s.indexOf(e)!==t));(0,i.deprecate)(`${n} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map((e=>R(e)?e.lid:H(e).lid)).sort(((e,t)=>e.localeCompare(t))).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"4.13"}})}}function et(e,t,r){it(e,{op:"addToRelatedRecords",record:e.identifier,field:e.key,...t},r)}function tt(e,t,r){it(e,{op:"removeFromRelatedRecords",record:e.identifier,field:e.key,...t},r)}function rt(e,t,r){it(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},r)}function it(e,t,r){e._manager.mutate(t),(0,c.RH)(r)}Qe.prototype.isAsync=!1,Qe.prototype.isPolymorphic=!1,Qe.prototype.identifier=null,Qe.prototype.cache=null,Qe.prototype._inverseIsAsync=!1,Qe.prototype.key="",Qe.prototype.DEPRECATED_CLASS_NAME="ManyArray"},6076:(e,t,r)=>{r.d(t,{I:()=>p,b:()=>v,c:()=>d,e:()=>b,f:()=>k,g:()=>h,s:()=>f,u:()=>_})
var i=r(7375),n=r(7648)
function s(e,t){return e.get(o(e,t))}function o(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}function a(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=(0,i.vs)("PromiseCache",new WeakMap),l=(0,i.vs)("RequestMap",new Map)
function u(e,t){l.set(e,t)}function d(e){l.delete(e)}function h(e){return l.get(e)}function f(e,t){c.set(e,t)}const p=(0,i.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function m(e){return e&&!0===e[n.k0]}function y(e,t,r){return m(t)?t:r?{[n.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[n.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function g(e){return new DOMException(e||"The user aborted a request.","AbortError")}function b(e,t,r,i){const s=new S(t,i,0===r),o=(a=e[r],0===r&&Boolean(a[p]))
var a
const c=new E(s,o)
let l
try{l=e[r].request(c,(function(t){return s.nextCalled++,b(e,t,r+1,i)})),o&&c._finalize(),l&&o&&(l instanceof Promise||(u(s.requestId,{isError:!1,result:y(s,l,!1)}),l=Promise.resolve(l)))}catch(e){o&&u(s.requestId,{isError:!0,result:y(s,e,!0)}),l=Promise.reject(e)}const d=function(e){const t=v()
let r,{promise:i}=t
return i=i.finally((()=>{e.resolveStream(),r&&r.forEach((e=>e()))})),i.onFinalize=e=>{r=r||[],r.push(e)},i[n.J6]=!0,i.getStream=()=>e.getStream(),i.abort=t=>{e.abort(g(t))},i.id=e.requestId,i.lid=e.god.identifier,t.promise=i,t}(s)
return h=l,Boolean(h&&h instanceof Promise&&!0===h[n.J6])?function(e,t,r){return e.setStream(t.getStream()),t.then((t=>{const i={[n.k0]:!0,request:e.request,response:t.response,content:t.content}
r.resolve(i)}),(t=>{if(m(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[n.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,r.reject(t)})),r.promise}(s,l,d):function(e,t,r){return t.then((t=>{if(e.controller.signal.aborted)return void r.reject(g(e.controller.signal.reason))
m(t)&&(e.setStream(e.god.stream),t=t.content)
const i={[n.k0]:!0,request:e.request,response:e.getResponse(),content:t}
r.resolve(i)}),(t=>{if(m(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[n.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,r.reject(t)})),r.promise}(s,l,d)
var h}function v(){let e,t
const r=new Promise(((r,i)=>{e=r,t=i}))
return{resolve:e,reject:t,promise:r}}function _(e,t){return e[n.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e}function w(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function k(e){const{headers:t,ok:r,redirected:i,status:n,statusText:s,type:o,url:a}=e
return w(t),{headers:t,ok:r,redirected:i,status:n,statusText:s,type:o,url:a}}class S{constructor(e,t,r=!1){a(this,"hasSetStream",!1),a(this,"hasSetResponse",!1),a(this,"hasSubscribers",!1),a(this,"stream",v()),a(this,"response",null),a(this,"nextCalled",0),this.isRoot=r,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",(()=>{this.controller.abort(t.controller.signal.reason)})),delete e.controller)
let i=Object.assign({signal:this.controller.signal},e)
e.headers&&w(e.headers),this.enhancedRequest=i,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then((e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e)))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=k(e)
this.response=t,this.god.response=t
const r=e.headers?.get("content-length")
this.stream.promise.sizeHint=r?parseInt(r,10):0}else this.response=e,this.god.response=e}}var R=new WeakMap
class E{constructor(e,t){var r,i;(function(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,R),this.id=e.requestId,i=e,(r=R).set(o(r,this),i),this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){s(R,this).setStream(e)}setResponse(e){s(R,this).setResponse(e)}setIdentifier(e){s(R,this).god.identifier=e}get hasRequestedStream(){return s(R,this).hasRequestedStream}_finalize(){this._finalized=!0}}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["QUERY","GET","PUT","PATCH","DELETE","POST","OPTIONS","HEAD","CONNECT","TRACE"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,i.L1)("IS_FROZEN",Symbol("FROZEN")),(0,i.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])},6082:(e,t,r)=>{r.d(t,{Ay:()=>c,ud:()=>s.b})
var i=r(4065),n=r(7375),s=r(6076)
function o(e,t){return e.get(function(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}(e,t))}var a=new WeakMap
class c{constructor(e){var t,r
r=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=a),t.set(this,r),Object.assign(this,e),this._pending=new Map,this._deduped=new Map}useCache(e){return e[s.I]=!0,o(a,this).unshift(e),this}use(e){return o(a,this).push(...e),this}request(e){const t=o(a,this),r=e.controller||new AbortController
e.controller&&delete e.controller
const i=(0,n.dN)("REQ_ID")??0;(0,n.ml)("REQ_ID",i+1)
const c={controller:r,response:null,stream:null,hasRequestedStream:!1,id:i,identifier:null},l=(0,s.e)(t,e,0,c),u=(0,s.g)(i),d=(0,s.u)(l.then((e=>((0,s.s)(d,{isError:!1,result:e}),(0,s.c)(i),e)),(e=>{throw(0,s.s)(d,{isError:!0,result:e}),(0,s.c)(i),e})),l)
return u&&(0,s.s)(d,u),d}static create(e){return new this(e)}}globalThis.setWarpDriveLogging=i.q,globalThis.getWarpDriveRuntimeConfig=i.P},6730:(e,t,r)=>{r.d(t,{Ay:()=>i.S,fV:()=>i.s,lL:()=>i.C,o:()=>i.r})
var i=r(5564)
r(1603),r(3241)},7262:(e,t,r)=>{r.d(t,{f:()=>m,h:()=>g,j:()=>y})
const i={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class n{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const r=this.doWork(e)
return this.set(e,r),r}set(e,t){if(this.state.size===this.size)for(const[r]of this.state){this.state.delete(r)
break}this.state.set(e,t)}clear(){this.state.clear()}}const s=/[ _]/g,o=/([a-z\d])([A-Z])/g,a=new n((e=>e.replace(o,"$1_$2").toLowerCase().replace(s,"-"))),c=/(\-|\_|\.|\s)+(.)?/g,l=/(^|\/)([A-Z])/g,u=(new n((e=>e.replace(c,((e,t,r)=>r?r.toUpperCase():"")).replace(l,(e=>e.toLowerCase())))),/([a-z\d])([A-Z]+)/g),d=/\-|\s+/g,h=new n((e=>e.replace(u,"$1_$2").replace(d,"_").toLowerCase())),f=/(^|\/)([a-z\u00C0-\u024F])/g,p=new n((e=>e.replace(f,(e=>e.toUpperCase()))))
function m(e){return a.get(e)}function y(e){return h.get(e)}function g(e){return p.get(e)}const b=/^\s*$/,v=/([\w/-]+[_/\s-])([a-z\d]+$)/,_=/([\w/\s-]+)([A-Z][a-z\d]*$)/,w=/[A-Z][a-z\d]*$/,k=(new n((e=>function(e){return O(e,E,R)}(e))),new n((e=>function(e){return O(e,A,S)}(e))),new Set(i.uncountable)),S=new Map,R=new Map,E=new Map(i.singular.reverse()),A=new Map(i.plurals.reverse())
function O(e,t,r){if(!e||b.test(e))return e
const i=e.toLowerCase()
if(k.has(i))return e
const n=v.exec(e)||_.exec(e),s=n?n[2].toLowerCase():null
if(s&&k.has(s))return e
const o=w.test(e)
for(let[a,c]of r)if(i.match(a+"$"))return o&&s&&r.has(s)&&(c=g(c),a=g(a)),e.replace(new RegExp(a,"i"),c)
for(const[a,c]of t)if(a.test(e))return e.replace(a,c)
return e}i.irregularPairs.forEach((e=>{S.set(e[0].toLowerCase(),e[1]),S.set(e[1].toLowerCase(),e[1]),R.set(e[1].toLowerCase(),e[0]),R.set(e[0].toLowerCase(),e[0])}))},7343:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D})
var i=r(2377),n=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],s=n.join(","),o="undefined"==typeof Element,a=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},l=function(e,t,r){var i=Array.prototype.slice.apply(e.querySelectorAll(s))
return t&&a.call(e,s)&&i.unshift(e),i.filter(r)},u=function e(t,r,i){for(var n=[],o=Array.from(t);o.length;){var c=o.shift()
if("SLOT"===c.tagName){var l=c.assignedElements(),u=e(l.length?l:c.children,!0,i)
i.flatten?n.push.apply(n,u):n.push({scope:c,candidates:u})}else{a.call(c,s)&&i.filter(c)&&(r||!t.includes(c))&&n.push(c)
var d=c.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(c),h=!i.shadowRootFilter||i.shadowRootFilter(c)
if(d&&h){var f=e(!0===d?c.children:d.children,!0,i)
i.flatten?n.push.apply(n,f):n.push({scope:c,candidates:f})}else o.unshift.apply(o,c.children)}}return n},d=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},h=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},f=function(e){return"INPUT"===e.tagName},p=function(e){var t=e.getBoundingClientRect(),r=t.width,i=t.height
return 0===r&&0===i},m=function(e,t){return!(t.disabled||function(e){return f(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,i=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var n=a.call(e,"details>summary:first-of-type")?e.parentElement:e
if(a.call(n,"details:not([open]) *"))return!0
var s=c(e).host,o=(null==s?void 0:s.ownerDocument.contains(s))||e.ownerDocument.contains(e)
if(r&&"full"!==r){if("non-zero-area"===r)return p(e)}else{if("function"==typeof i){for(var l=e;e;){var u=e.parentElement,d=c(e)
if(u&&!u.shadowRoot&&!0===i(u))return p(e)
e=e.assignedSlot?e.assignedSlot:u||d===e.ownerDocument?u:d.host}e=l}if(o)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var i=t.children.item(r)
if("LEGEND"===i.tagName)return!!a.call(t,"fieldset[disabled] *")||!i.contains(e)}return!0}t=t.parentElement}return!1}(t))},y=function(e,t){return!(function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,r=e.form||c(e),i=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name))
else try{t=i(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var n=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form)
return!n||n===e}(e)}(t)||d(t)<0||!m(e,t))},g=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},b=function e(t){var r=[],i=[]
return t.forEach((function(t,n){var s=!!t.scope,o=s?t.scope:t,a=d(o,s),c=s?e(t.candidates):o
0===a?s?r.push.apply(r,c):r.push(o):i.push({documentOrder:n,tabIndex:a,item:t,isScope:s,content:c})})),i.sort(h).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)},v=function(e,t){var r
return r=(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:y.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:g}):l(e,t.includeContainer,y.bind(null,t)),b(r)},_=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,s)&&y(t,e)},w=n.concat("iframe").join(","),k=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,w)&&m(t,e)}
function S(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?S(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A,O=(A=[],{activateTrap:function(e){if(A.length>0){var t=A[A.length-1]
t!==e&&t.pause()}var r=A.indexOf(e);-1===r||A.splice(r,1),A.push(e)},deactivateTrap:function(e){var t=A.indexOf(e);-1!==t&&A.splice(t,1),A.length>0&&A[A.length-1].unpause()}}),C=function(e){return setTimeout(e,0)},T=function(e,t){var r=-1
return e.every((function(e,i){return!t(e)||(r=i,!1)})),r},M=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
return"function"==typeof e?e.apply(void 0,r):e},j=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},P=function(e,t){var r,i=(null==t?void 0:t.document)||document,n=R({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o=function(e,t,r){return e&&void 0!==e[t]?e[t]:n[r||t]},a=function(e){return s.containerGroups.findIndex((function(t){var r=t.container,i=t.tabbableNodes
return r.contains(e)||i.find((function(t){return t===e}))}))},c=function(e){var t=n[e]
if("function"==typeof t){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o]
t=t.apply(void 0,s)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=i.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},d=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(a(i.activeElement)>=0)e=i.activeElement
else{var t=s.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},h=function(){if(s.containerGroups=s.containers.map((function(e){var t,r,i=v(e,n.tabbableOptions),s=(t=e,(r=(r=n.tabbableOptions)||{}).getShadowRoot?u([t],r.includeContainer,{filter:m.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):l(t,r.includeContainer,m.bind(null,r)))
return{container:e,tabbableNodes:i,focusableNodes:s,firstTabbableNode:i.length>0?i[0]:null,lastTabbableNode:i.length>0?i[i.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=s.findIndex((function(t){return t===e}))
if(!(r<0))return t?s.slice(r+1).find((function(e){return _(e,n.tabbableOptions)})):s.slice(0,r).reverse().find((function(e){return _(e,n.tabbableOptions)}))}}})),s.tabbableGroups=s.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),s.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=function e(t){!1!==t&&t!==i.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!n.preventScroll}),s.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(d()))},p=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},y=function(e){var t=j(e)
a(t)>=0||(M(n.clickOutsideDeactivates,e)?r.deactivate({returnFocus:n.returnFocusOnDeactivate&&!k(t,n.tabbableOptions)}):M(n.allowOutsideClick,e)||e.preventDefault())},g=function(e){var t=j(e),r=a(t)>=0
r||t instanceof Document?r&&(s.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),f(s.mostRecentlyFocusedNode||d()))},b=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==M(n.escapeDeactivates,e))return e.preventDefault(),void r.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=j(e)
h()
var r=null
if(s.tabbableGroups.length>0){var i=a(t),o=i>=0?s.containerGroups[i]:void 0
if(i<0)r=e.shiftKey?s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:s.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var l=T(s.tabbableGroups,(function(e){var r=e.firstTabbableNode
return t===r}))
if(l<0&&(o.container===t||k(t,n.tabbableOptions)&&!_(t,n.tabbableOptions)&&!o.nextTabbableNode(t,!1))&&(l=i),l>=0){var u=0===l?s.tabbableGroups.length-1:l-1
r=s.tabbableGroups[u].lastTabbableNode}}else{var d=T(s.tabbableGroups,(function(e){var r=e.lastTabbableNode
return t===r}))
if(d<0&&(o.container===t||k(t,n.tabbableOptions)&&!_(t,n.tabbableOptions)&&!o.nextTabbableNode(t))&&(d=i),d>=0){var p=d===s.tabbableGroups.length-1?0:d+1
r=s.tabbableGroups[p].firstTabbableNode}}}else r=c("fallbackFocus")
r&&(e.preventDefault(),f(r))}(e)},w=function(e){var t=j(e)
a(t)>=0||M(n.clickOutsideDeactivates,e)||M(n.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(s.active)return O.activateTrap(r),s.delayInitialFocusTimer=n.delayInitialFocus?C((function(){f(d())})):f(d()),i.addEventListener("focusin",g,!0),i.addEventListener("mousedown",y,{capture:!0,passive:!1}),i.addEventListener("touchstart",y,{capture:!0,passive:!1}),i.addEventListener("click",w,{capture:!0,passive:!1}),i.addEventListener("keydown",b,{capture:!0,passive:!1}),r},E=function(){if(s.active)return i.removeEventListener("focusin",g,!0),i.removeEventListener("mousedown",y,!0),i.removeEventListener("touchstart",y,!0),i.removeEventListener("click",w,!0),i.removeEventListener("keydown",b,!0),r}
return(r={get active(){return s.active},get paused(){return s.paused},activate:function(e){if(s.active)return this
var t=o(e,"onActivate"),r=o(e,"onPostActivate"),n=o(e,"checkCanFocusTrap")
n||h(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=i.activeElement,t&&t()
var a=function(){n&&h(),S(),r&&r()}
return n?(n(s.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!s.active)return this
var t=R({onDeactivate:n.onDeactivate,onPostDeactivate:n.onPostDeactivate,checkCanReturnFocus:n.checkCanReturnFocus},e)
clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,E(),s.active=!1,s.paused=!1,O.deactivateTrap(r)
var i=o(t,"onDeactivate"),a=o(t,"onPostDeactivate"),c=o(t,"checkCanReturnFocus"),l=o(t,"returnFocus","returnFocusOnDeactivate")
i&&i()
var u=function(){C((function(){l&&f(p(s.nodeFocusedBeforeActivation)),a&&a()}))}
return l&&c?(c(p(s.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return s.paused||!s.active||(s.paused=!0,E()),this},unpause:function(){return s.paused&&s.active?(s.paused=!1,h(),S(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return s.containers=t.map((function(e){return"string"==typeof e?i.querySelector(e):e})),s.active&&h(),this}}).updateContainerElements(e),r}
let x
try{x=(0,i.capabilities)("3.22")}catch{x=(0,i.capabilities)("3.13")}var D=(0,i.setModifierManager)((()=>({capabilities:x,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:r,isPaused:i,shouldSelfFocus:n,focusTrapOptions:s,additionalElements:o,_createFocusTrap:a}}){e.focusTrapOptions={...s}||{},void 0!==r&&(e.isActive=r),void 0!==i&&(e.isPaused=i),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&n&&(e.focusTrapOptions.initialFocus=t)
let c=P
a&&(c=a),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=c(void 0!==o?[t,...o]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const r=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=r,i=void 0===t
e.focusTrap.deactivate({returnFocus:i})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=r,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}})),class{})},7375:(e,t,r)=>{r.d(t,{L1:()=>c,Yj:()=>l,dN:()=>h,dV:()=>u,ml:()=>f,vs:()=>d})
const i="@warp-drive/core-types",n=globalThis,s=n.__warpDrive_universalCache=n.__warpDrive_universalCache??{}
n[i]=n[i]??{__version:"0.0.2"}
const o=n[i],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function c(e,t){return t}function l(e){return a[`(transient) ${e}`]??null}function u(e,t){return a[`(transient) ${e}`]=t}function d(e,t){return t}function h(e){return s[`(transient) ${e}`]??null}function f(e,t){return s[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},7388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y})
var i=r(1389),n=r(1806),s=r.n(n),o=r(123),a=r(2735),c=r(3241),l=r(6730)
const u=new WeakMap,d=a.service??a.inject,h=new WeakMap
function f(){const e={},t=[],r=(0,l.o)(this),i=this.store.schema.fields(r),n={name:"Attributes",properties:["id"],expand:!0},s=n.properties,o=[n]
for(const a of i.values())switch(a.kind){case"attribute":s.push(a.name)
break
case"belongsTo":case"hasMany":{let r=e[a.kind]
void 0===r&&(r=e[a.kind]=[],o.push({name:a.kind,properties:r,expand:!0})),r.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var p=new WeakMap
class m extends(s()){constructor(...e){var t,r
super(...e),t=p,r=void function(e,t){let r=function(e,t){var r
let i=e.prototype
for(;i;){let e=null==(r=u.get(i))?void 0:r.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,r)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:r}=this,i=function(e){let t=h.get(e)
return void 0===t&&(t=new Map,h.set(e,t)),t}(r),n=r.notifications.subscribe("resource",((n,o)=>{"added"===o&&this.watchTypeIfUnseen(r,i,n.type,e,t,s)})),s=[()=>{r.notifications.unsubscribe(n)}]
Object.keys(r.identifierCache._cache.resourcesByType).forEach((e=>{i.set(e,!1)})),i.forEach(((n,o)=>{this.watchTypeIfUnseen(r,i,o,e,t,s)}))
const o=()=>{s.forEach((e=>e())),i.forEach(((e,t)=>{i.set(t,!1)})),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,r,i,n,s){if(!0!==t.get(r)){const o=e.modelFor(r)
o.prototype._debugInfo=f
const a=this.wrapModelType(o,r)
s.push(this.observeModelType(r,n)),i([a]),t.set(r,!0)}}columnNameToDesc(e){return(0,c.ZH)((0,c.z9)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let r=0
return e.attributes.forEach(((e,i)=>{if(r++>this.attributeLimit)return!1
const n=this.columnNameToDesc(i)
t.push({name:i,desc:n})})),t}getRecords(e,t){if(arguments.length<2){const r=e._debugContainerKey
if(r){const e=r.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const r={id:e.id}
return e.eachAttribute((i=>{if(t++>this.attributeLimit)return!1
r[i]=e[i]})),r}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute((r=>{t.push(e[r])})),(0,i.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const r=[],i=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute((e=>i.push(e))),i.forEach((i=>{const n=()=>{t(this.wrapRecord(e))};(0,o.addObserver)(e,i,n),r.push((function(){(0,o.removeObserver)(e,i,n)}))})),function(){r.forEach((e=>e()))}}}!function(e,t,r){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let n of r)i=n(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,r){let i=u.get(e)
i||(i=new Map,u.set(e,i)),i.set(t,r)}(e,t,i)}(m.prototype,"store",[d("store")])
const y=m},7648:(e,t,r)=>{r.d(t,{ER:()=>n,J6:()=>o,_q:()=>s,k0:()=>a})
var i=r(7375)
const n=(0,i.vs)("SkipCache",Symbol.for("wd:skip-cache")),s=(0,i.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,i.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,i.L1)("DOC",Symbol("DOC"))},7843:(e,t,r)=>{r.r(t),r.d(t,{afterMain:()=>k,afterRead:()=>v,afterWrite:()=>E,applyStyles:()=>P,arrow:()=>Z,auto:()=>a,basePlacements:()=>c,beforeMain:()=>_,beforeRead:()=>g,beforeWrite:()=>S,bottom:()=>n,clippingParents:()=>d,computeStyles:()=>re,createPopper:()=>je,createPopperBase:()=>Me,createPopperLite:()=>Pe,detectOverflow:()=>ge,end:()=>u,eventListeners:()=>ne,flip:()=>be,hide:()=>we,left:()=>o,main:()=>w,modifierPhases:()=>A,offset:()=>ke,placements:()=>y,popper:()=>f,popperGenerator:()=>Te,popperOffsets:()=>Se,preventOverflow:()=>Re,read:()=>b,reference:()=>p,right:()=>s,start:()=>l,top:()=>i,variationPlacements:()=>m,viewport:()=>h,write:()=>R})
var i="top",n="bottom",s="right",o="left",a="auto",c=[i,n,s,o],l="start",u="end",d="clippingParents",h="viewport",f="popper",p="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+u])}),[]),y=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+u])}),[]),g="beforeRead",b="read",v="afterRead",_="beforeMain",w="main",k="afterMain",S="beforeWrite",R="write",E="afterWrite",A=[g,b,v,_,w,k,S,R,E]
function O(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function T(e){return e instanceof C(e).Element||e instanceof Element}function M(e){return e instanceof C(e).HTMLElement||e instanceof HTMLElement}function j(e){return"undefined"!=typeof ShadowRoot&&(e instanceof C(e).ShadowRoot||e instanceof ShadowRoot)}const P={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},i=t.attributes[e]||{},n=t.elements[e]
M(n)&&O(n)&&(Object.assign(n.style,r),Object.keys(i).forEach((function(e){var t=i[e]
!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],n=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{})
M(i)&&O(i)&&(Object.assign(i.style,s),Object.keys(n).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function x(e){return e.split("-")[0]}var D=Math.max,F=Math.min,N=Math.round
function I(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function q(){return!/^((?!chrome|android).)*safari/i.test(I())}function $(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1)
var i=e.getBoundingClientRect(),n=1,s=1
t&&M(e)&&(n=e.offsetWidth>0&&N(i.width)/e.offsetWidth||1,s=e.offsetHeight>0&&N(i.height)/e.offsetHeight||1)
var o=(T(e)?C(e):window).visualViewport,a=!q()&&r,c=(i.left+(a&&o?o.offsetLeft:0))/n,l=(i.top+(a&&o?o.offsetTop:0))/s,u=i.width/n,d=i.height/s
return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function L(e){var t=$(e),r=e.offsetWidth,i=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function z(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&j(r)){var i=t
do{if(i&&e.isSameNode(i))return!0
i=i.parentNode||i.host}while(i)}return!1}function B(e){return C(e).getComputedStyle(e)}function U(e){return["table","td","th"].indexOf(O(e))>=0}function V(e){return((T(e)?e.ownerDocument:e.document)||window.document).documentElement}function W(e){return"html"===O(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||V(e)}function H(e){return M(e)&&"fixed"!==B(e).position?e.offsetParent:null}function G(e){for(var t=C(e),r=H(e);r&&U(r)&&"static"===B(r).position;)r=H(r)
return r&&("html"===O(r)||"body"===O(r)&&"static"===B(r).position)?t:r||function(e){var t=/firefox/i.test(I())
if(/Trident/i.test(I())&&M(e)&&"fixed"===B(e).position)return null
var r=W(e)
for(j(r)&&(r=r.host);M(r)&&["html","body"].indexOf(O(r))<0;){var i=B(r)
if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return r
r=r.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e,t,r){return D(e,F(t,r))}function Q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function J(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}const Z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,a=e.name,l=e.options,u=r.elements.arrow,d=r.modifiersData.popperOffsets,h=x(r.placement),f=Y(h),p=[o,s].indexOf(h)>=0?"height":"width"
if(u&&d){var m=function(e,t){return Q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:J(e,c))}(l.padding,r),y=L(u),g="y"===f?i:o,b="y"===f?n:s,v=r.rects.reference[p]+r.rects.reference[f]-d[f]-r.rects.popper[p],_=d[f]-r.rects.reference[f],w=G(u),k=w?"y"===f?w.clientHeight||0:w.clientWidth||0:0,S=v/2-_/2,R=m[g],E=k-y[p]-m[b],A=k/2-y[p]/2+S,O=K(R,A,E),C=f
r.modifiersData[a]=((t={})[C]=O,t.centerOffset=O-A,t)}},effect:function(e){var t=e.state,r=e.options.element,i=void 0===r?"[data-popper-arrow]":r
null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&z(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function X(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,r=e.popper,a=e.popperRect,c=e.placement,l=e.variation,d=e.offsets,h=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,y=e.isFixed,g=d.x,b=void 0===g?0:g,v=d.y,_=void 0===v?0:v,w="function"==typeof m?m({x:b,y:_}):{x:b,y:_}
b=w.x,_=w.y
var k=d.hasOwnProperty("x"),S=d.hasOwnProperty("y"),R=o,E=i,A=window
if(p){var O=G(r),T="clientHeight",M="clientWidth"
O===C(r)&&"static"!==B(O=V(r)).position&&"absolute"===h&&(T="scrollHeight",M="scrollWidth"),(c===i||(c===o||c===s)&&l===u)&&(E=n,_-=(y&&O===A&&A.visualViewport?A.visualViewport.height:O[T])-a.height,_*=f?1:-1),c!==o&&(c!==i&&c!==n||l!==u)||(R=s,b-=(y&&O===A&&A.visualViewport?A.visualViewport.width:O[M])-a.width,b*=f?1:-1)}var j,P=Object.assign({position:h},p&&ee),x=!0===m?function(e,t){var r=e.x,i=e.y,n=t.devicePixelRatio||1
return{x:N(r*n)/n||0,y:N(i*n)/n||0}}({x:b,y:_},C(r)):{x:b,y:_}
return b=x.x,_=x.y,f?Object.assign({},P,((j={})[E]=S?"0":"",j[R]=k?"0":"",j.transform=(A.devicePixelRatio||1)<=1?"translate("+b+"px, "+_+"px)":"translate3d("+b+"px, "+_+"px, 0)",j)):Object.assign({},P,((t={})[E]=S?_+"px":"",t[R]=k?b+"px":"",t.transform="",t))}const re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,i=r.gpuAcceleration,n=void 0===i||i,s=r.adaptive,o=void 0===s||s,a=r.roundOffsets,c=void 0===a||a,l={placement:x(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var ie={passive:!0}
const ne={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,i=e.options,n=i.scroll,s=void 0===n||n,o=i.resize,a=void 0===o||o,c=C(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return s&&l.forEach((function(e){e.addEventListener("scroll",r.update,ie)})),a&&c.addEventListener("resize",r.update,ie),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",r.update,ie)})),a&&c.removeEventListener("resize",r.update,ie)}},data:{}}
var se={left:"right",right:"left",bottom:"top",top:"bottom"}
function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ae={start:"end",end:"start"}
function ce(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function le(e){var t=C(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ue(e){return $(V(e)).left+le(e).scrollLeft}function de(e){var t=B(e),r=t.overflow,i=t.overflowX,n=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+n+i)}function he(e){return["html","body","#document"].indexOf(O(e))>=0?e.ownerDocument.body:M(e)&&de(e)?e:he(W(e))}function fe(e,t){var r
void 0===t&&(t=[])
var i=he(e),n=i===(null==(r=e.ownerDocument)?void 0:r.body),s=C(i),o=n?[s].concat(s.visualViewport||[],de(i)?i:[]):i,a=t.concat(o)
return n?a:a.concat(fe(W(o)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,r){return t===h?pe(function(e,t){var r=C(e),i=V(e),n=r.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,c=0
if(n){s=n.width,o=n.height
var l=q();(l||!l&&"fixed"===t)&&(a=n.offsetLeft,c=n.offsetTop)}return{width:s,height:o,x:a+ue(e),y:c}}(e,r)):T(t)?function(e,t){var r=$(e,!1,"fixed"===t)
return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):pe(function(e){var t,r=V(e),i=le(e),n=null==(t=e.ownerDocument)?void 0:t.body,s=D(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),o=D(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-i.scrollLeft+ue(e),c=-i.scrollTop
return"rtl"===B(n||r).direction&&(a+=D(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}(V(e)))}function ye(e){var t,r=e.reference,a=e.element,c=e.placement,d=c?x(c):null,h=c?X(c):null,f=r.x+r.width/2-a.width/2,p=r.y+r.height/2-a.height/2
switch(d){case i:t={x:f,y:r.y-a.height}
break
case n:t={x:f,y:r.y+r.height}
break
case s:t={x:r.x+r.width,y:p}
break
case o:t={x:r.x-a.width,y:p}
break
default:t={x:r.x,y:r.y}}var m=d?Y(d):null
if(null!=m){var y="y"===m?"height":"width"
switch(h){case l:t[m]=t[m]-(r[y]/2-a[y]/2)
break
case u:t[m]=t[m]+(r[y]/2-a[y]/2)}}return t}function ge(e,t){void 0===t&&(t={})
var r=t,o=r.placement,a=void 0===o?e.placement:o,l=r.strategy,u=void 0===l?e.strategy:l,m=r.boundary,y=void 0===m?d:m,g=r.rootBoundary,b=void 0===g?h:g,v=r.elementContext,_=void 0===v?f:v,w=r.altBoundary,k=void 0!==w&&w,S=r.padding,R=void 0===S?0:S,E=Q("number"!=typeof R?R:J(R,c)),A=_===f?p:f,C=e.rects.popper,j=e.elements[k?A:_],P=function(e,t,r,i){var n="clippingParents"===t?function(e){var t=fe(W(e)),r=["absolute","fixed"].indexOf(B(e).position)>=0&&M(e)?G(e):e
return T(r)?t.filter((function(e){return T(e)&&z(e,r)&&"body"!==O(e)})):[]}(e):[].concat(t),s=[].concat(n,[r]),o=s[0],a=s.reduce((function(t,r){var n=me(e,r,i)
return t.top=D(n.top,t.top),t.right=F(n.right,t.right),t.bottom=F(n.bottom,t.bottom),t.left=D(n.left,t.left),t}),me(e,o,i))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(T(j)?j:j.contextElement||V(e.elements.popper),y,b,u),x=$(e.elements.reference),N=ye({reference:x,element:C,strategy:"absolute",placement:a}),I=pe(Object.assign({},C,N)),q=_===f?I:x,L={top:P.top-q.top+E.top,bottom:q.bottom-P.bottom+E.bottom,left:P.left-q.left+E.left,right:q.right-P.right+E.right},U=e.modifiersData.offset
if(_===f&&U){var H=U[a]
Object.keys(L).forEach((function(e){var t=[s,n].indexOf(e)>=0?1:-1,r=[i,n].indexOf(e)>=0?"y":"x"
L[e]+=H[r]*t}))}return L}const be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,u=e.name
if(!t.modifiersData[u]._skip){for(var d=r.mainAxis,h=void 0===d||d,f=r.altAxis,p=void 0===f||f,g=r.fallbackPlacements,b=r.padding,v=r.boundary,_=r.rootBoundary,w=r.altBoundary,k=r.flipVariations,S=void 0===k||k,R=r.allowedAutoPlacements,E=t.options.placement,A=x(E),O=g||(A!==E&&S?function(e){if(x(e)===a)return[]
var t=oe(e)
return[ce(e),t,ce(t)]}(E):[oe(E)]),C=[E].concat(O).reduce((function(e,r){return e.concat(x(r)===a?function(e,t){void 0===t&&(t={})
var r=t,i=r.placement,n=r.boundary,s=r.rootBoundary,o=r.padding,a=r.flipVariations,l=r.allowedAutoPlacements,u=void 0===l?y:l,d=X(i),h=d?a?m:m.filter((function(e){return X(e)===d})):c,f=h.filter((function(e){return u.indexOf(e)>=0}))
0===f.length&&(f=h)
var p=f.reduce((function(t,r){return t[r]=ge(e,{placement:r,boundary:n,rootBoundary:s,padding:o})[x(r)],t}),{})
return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:r,boundary:v,rootBoundary:_,padding:b,flipVariations:S,allowedAutoPlacements:R}):r)}),[]),T=t.rects.reference,M=t.rects.popper,j=new Map,P=!0,D=C[0],F=0;F<C.length;F++){var N=C[F],I=x(N),q=X(N)===l,$=[i,n].indexOf(I)>=0,L=$?"width":"height",z=ge(t,{placement:N,boundary:v,rootBoundary:_,altBoundary:w,padding:b}),B=$?q?s:o:q?n:i
T[L]>M[L]&&(B=oe(B))
var U=oe(B),V=[]
if(h&&V.push(z[I]<=0),p&&V.push(z[B]<=0,z[U]<=0),V.every((function(e){return e}))){D=N,P=!1
break}j.set(N,V)}if(P)for(var W=function(e){var t=C.find((function(t){var r=j.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return D=t,"break"},H=S?3:1;H>0&&"break"!==W(H);H--);t.placement!==D&&(t.modifiersData[u]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ve(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _e(e){return[i,s,n,o].some((function(t){return e[t]>=0}))}const we={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,i=t.rects.reference,n=t.rects.popper,s=t.modifiersData.preventOverflow,o=ge(t,{elementContext:"reference"}),a=ge(t,{altBoundary:!0}),c=ve(o,i),l=ve(a,n,s),u=_e(c),d=_e(l)
t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}},ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,a=r.offset,c=void 0===a?[0,0]:a,l=y.reduce((function(e,r){return e[r]=function(e,t,r){var n=x(e),a=[o,i].indexOf(n)>=0?-1:1,c="function"==typeof r?r(Object.assign({},t,{placement:e})):r,l=c[0],u=c[1]
return l=l||0,u=(u||0)*a,[o,s].indexOf(n)>=0?{x:u,y:l}:{x:l,y:u}}(r,t.rects,c),e}),{}),u=l[t.placement],d=u.x,h=u.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=d,t.modifiersData.popperOffsets.y+=h),t.modifiersData[n]=l}},Se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=ye({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Re={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,a=e.name,c=r.mainAxis,u=void 0===c||c,d=r.altAxis,h=void 0!==d&&d,f=r.boundary,p=r.rootBoundary,m=r.altBoundary,y=r.padding,g=r.tether,b=void 0===g||g,v=r.tetherOffset,_=void 0===v?0:v,w=ge(t,{boundary:f,rootBoundary:p,padding:y,altBoundary:m}),k=x(t.placement),S=X(t.placement),R=!S,E=Y(k),A="x"===E?"y":"x",O=t.modifiersData.popperOffsets,C=t.rects.reference,T=t.rects.popper,M="function"==typeof _?_(Object.assign({},t.rects,{placement:t.placement})):_,j="number"==typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0}
if(O){if(u){var I,q="y"===E?i:o,$="y"===E?n:s,z="y"===E?"height":"width",B=O[E],U=B+w[q],V=B-w[$],W=b?-T[z]/2:0,H=S===l?C[z]:T[z],Q=S===l?-T[z]:-C[z],J=t.elements.arrow,Z=b&&J?L(J):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[q],re=ee[$],ie=K(0,C[z],Z[z]),ne=R?C[z]/2-W-ie-te-j.mainAxis:H-ie-te-j.mainAxis,se=R?-C[z]/2+W+ie+re+j.mainAxis:Q+ie+re+j.mainAxis,oe=t.elements.arrow&&G(t.elements.arrow),ae=oe?"y"===E?oe.clientTop||0:oe.clientLeft||0:0,ce=null!=(I=null==P?void 0:P[E])?I:0,le=B+se-ce,ue=K(b?F(U,B+ne-ce-ae):U,B,b?D(V,le):V)
O[E]=ue,N[E]=ue-B}if(h){var de,he="x"===E?i:o,fe="x"===E?n:s,pe=O[A],me="y"===A?"height":"width",ye=pe+w[he],be=pe-w[fe],ve=-1!==[i,o].indexOf(k),_e=null!=(de=null==P?void 0:P[A])?de:0,we=ve?ye:pe-C[me]-T[me]-_e+j.altAxis,ke=ve?pe+C[me]+T[me]-_e-j.altAxis:be,Se=b&&ve?function(e,t,r){var i=K(e,t,r)
return i>r?r:i}(we,pe,ke):K(b?we:ye,pe,b?ke:be)
O[A]=Se,N[A]=Se-pe}t.modifiersData[a]=N}},requiresIfExists:["offset"]}
function Ee(e,t,r){void 0===r&&(r=!1)
var i,n,s=M(t),o=M(t)&&function(e){var t=e.getBoundingClientRect(),r=N(t.width)/e.offsetWidth||1,i=N(t.height)/e.offsetHeight||1
return 1!==r||1!==i}(t),a=V(t),c=$(e,o,r),l={scrollLeft:0,scrollTop:0},u={x:0,y:0}
return(s||!s&&!r)&&(("body"!==O(t)||de(a))&&(l=(i=t)!==C(i)&&M(i)?{scrollLeft:(n=i).scrollLeft,scrollTop:n.scrollTop}:le(i)),M(t)?((u=$(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ue(a))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function Ae(e){var t=new Map,r=new Set,i=[]
function n(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var i=t.get(e)
i&&n(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||n(e)})),i}var Oe={placement:"bottom",modifiers:[],strategy:"absolute"}
function Ce(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Te(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,i=void 0===r?[]:r,n=t.defaultOptions,s=void 0===n?Oe:n
return function(e,t,r){void 0===r&&(r=s)
var n,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:a,setOptions:function(r){var n="function"==typeof r?r(a.options):r
d(),a.options=Object.assign({},s,a.options,n),a.scrollParents={reference:T(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)}
var o,l,h=function(e){var t=Ae(e)
return A.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((o=[].concat(i,a.options.modifiers),l=o.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))))
return a.orderedModifiers=h.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,i=void 0===r?{}:r,n=e.effect
if("function"==typeof n){var s=n({state:a,name:t,instance:u,options:i})
c.push(s||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,r=e.popper
if(Ce(t,r)){a.rects={reference:Ee(t,G(r),"fixed"===a.options.strategy),popper:L(r)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}))
for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var n=a.orderedModifiers[i],s=n.fn,o=n.options,c=void 0===o?{}:o,d=n.name
"function"==typeof s&&(a=s({state:a,options:c,name:d,instance:u})||a)}else a.reset=!1,i=-1}}},update:(n=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(n())}))}))),o}),destroy:function(){d(),l=!0}}
if(!Ce(e,t))return u
function d(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var Me=Te(),je=Te({defaultModifiers:[ne,Se,re,P,ke,be,Re,Z,we]}),Pe=Te({defaultModifiers:[ne,Se,re,P]})},7852:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o})
var i=r(336),n=r.n(i),s=r(1603)
class o extends(n()){constructor(...e){var t,r,i
super(...e),t=this,i=!1,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r="didRun"))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}compute(e,t){const[r,...i]=e;(0,s.assert)(`\`{{did-insert-helper}}\` expects a callback function as the first parameter. You provided: ${r}`,"function"==typeof r),this.didRun||(this.didRun=!0,r(i,t))}}},7853:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c,modifier:()=>u})
var i=r(2294),n=r(2377),s=r(1130)
function o(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a{constructor(e){o(this,"capabilities",(0,n.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const i=function(e,t){const r=e
return r.element=t,r}(e,t)
i.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,s.destroy)(e)}}class c{constructor(e,t){(0,i.setOwner)(this,e)}modify(e,t,r){}}(0,n.setModifierManager)((e=>new a(e)),c)
const l=new class{constructor(){o(this,"capabilities",(0,n.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const i=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:n,named:s}=r,o=e.instance(t,n,s)
"function"==typeof o&&(i.teardown=o)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function u(e,t){return e.toString=()=>t?.name||e.name,(0,n.setModifierManager)((()=>l),e)}},7910:(e,t,r)=>{r.d(t,{F:()=>p,S:()=>f,a:()=>l,b:()=>c,c:()=>h,i:()=>u,n:()=>d,u:()=>b})
var i=r(1274),n=r(1603),s=r(6082),o=r(7375),a=r(3193)
class c{constructor(e,t,r={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=r.adapterOptions,this.include=r.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[i.u2].map((t=>e.createSnapshot(t))),this._snapshots}}function l(e){}function u(e,t){return Array.isArray(e)?e.map(t):t(e,0)}function d(e,t,r,i,n,s){return e?e.normalizeResponse(t,r,i,n,s):i}class h{constructor(e,t,r){this._store=r,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const i=!!r._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,i&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,i){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,r=this._store.schema.fields(t),i=this._store.cache
return r.forEach(((r,n)=>{"attribute"===r.kind&&(e[n]=i.getAttr(t,n))})),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let r=0,i=t.length;r<i;r++){const i=t[r]
e[i]=this._changedAttributes[i].slice()}return e}belongsTo(e,t){const i=!(!t||!t.id)
let n
const s=this._store
if(!0===i&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===i&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
s.schema.fields({type:this.modelName}).get(e)
const o=(0,a.A)(r(151)).graphFor,{identifier:c}=this,l=o(this._store).getData(c,e),u=l&&l.data,d=u?s.identifierCache.getOrCreateRecordIdentifier(u):null
if(l&&void 0!==l.data){const e=s.cache
n=d&&!e.isDeleted(d)?i?d.id:s._fetchManager.createSnapshot(d):null}return i?this._belongsToIds[e]=n:this._belongsToRelationships[e]=n,n}hasMany(e,t){const i=!(!t||!t.ids)
let n
const s=this._hasManyIds[e],o=this._hasManyRelationships[e]
if(!0===i&&e in this._hasManyIds)return s
if(!1===i&&e in this._hasManyRelationships)return o
const c=this._store,l=(c.schema.fields({type:this.modelName}).get(e),(0,a.A)(r(151)).graphFor),{identifier:u}=this,d=l(this._store).getData(u,e)
return d.data&&(n=[],d.data.forEach((e=>{const t=c.identifierCache.getOrCreateRecordIdentifier(e)
c.cache.isDeleted(t)||(i?n.push(t.id):n.push(c._fetchManager.createSnapshot(t)))}))),i?this._hasManyIds[e]=n:this._hasManyRelationships[e]=n,n}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach(((r,i)=>{"attribute"===r.kind&&e.call(t,i,r)}))}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach(((r,i)=>{"belongsTo"!==r.kind&&"hasMany"!==r.kind||e.call(t,i,r)}))}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const f=(0,o.L1)("SaveOp",Symbol("SaveOp"))
class p{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new h(t,e,this._store)}scheduleSave(e,t){const r=(0,s.ud)(),i={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},n={snapshot:this.createSnapshot(e,t),resolver:r,identifier:e,options:t,queryRequest:i},o=this.requestCache._enqueue(r.promise,n.queryRequest)
return function(e,t){const{snapshot:r,resolver:i,identifier:n,options:s}=t,o=e.adapterFor(n.type),a=s[f],c=r.modelName,l=e.modelFor(c)
let u=Promise.resolve().then((()=>o[a](e,l,r)))
const h=e.serializerFor(c)
u=u.then((t=>{if(t)return d(h,e,l,t,r.id,a)})),i.resolve(u)}(this._store,n),o}scheduleFetch(e,t,i){const n={data:[{op:"findRecord",recordIdentifier:e,options:t}]},o=this.getPendingFetch(e,t)
if(o)return o
const c=e.type,l=(0,s.ud)(),u={identifier:e,resolver:l,options:t,queryRequest:n},d=l.promise,h=this._store,f=!h._instanceCache.recordIsLoaded(e)
let p=this.requestCache._enqueue(d,u.queryRequest).then((r=>{r.data&&!Array.isArray(r.data)&&(r.data.lid=e.lid)
const i=h._push(r,t.reload)
return i&&!Array.isArray(i)?i:e}),(t=>{const i=h.cache
if(!i||i.isEmpty(e)||f){let t=!0
if(!i){const i=(0,(0,a.A)(r(151)).graphFor)(h)
t=i.isReleasable(e),t||i.unload(e,!0)}(i||t)&&(h._enableAsyncFlush=!0,h._instanceCache.unloadRecord(e),h._enableAsyncFlush=null)}throw t}))
0===this._pendingFetch.size&&new Promise((e=>setTimeout(e,0))).then((()=>{this.flushAllPendingFetches()}))
const m=this._pendingFetch
let y=m.get(c)
y||(y=new Map,m.set(c,y))
let g=y.get(e)
return g||(g=[],y.set(e,g)),g.push(u),u.promise=p,p}getPendingFetch(e,t){const r=this._pendingFetch.get(e.type)?.get(e)
if(r){const e=r.find((e=>function(e={},t={}){return r=e.adapterOptions,i=t.adapterOptions,(!r||r===i||0===Object.keys(r).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const r=(Array.isArray(e)?e:e.split(",")).sort(),i=(Array.isArray(t)?t:t.split(",")).sort()
if(r.join(",")===i.join(","))return!0
for(let n=0;n<r.length;n++)if(!i.includes(r[n]))return!1
return!0}(e.include,t.include)
var r,i}(t,e.options)))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach(((t,r)=>function(e,t,r){const i=e.adapterFor(r)
if(i.findMany&&i.coalesceFindRequests){const n=[]
t.forEach(((e,r)=>{e.length>1||(t.delete(r),n.push(e[0]))}))
const s=n.length
if(s>1){const t=new Array(s),o=new Map
for(let r=0;r<s;r++){const i=n[r]
t[r]=e._fetchManager.createSnapshot(i.identifier,i.options),o.set(t[r],i)}let a
a=i.groupRecordsForFindMany?i.groupRecordsForFindMany(e,t):[t]
for(let n=0,s=a.length;n<s;n++)g(e,o,a[n],i,r)}else 1===s&&y(e,i,n[0])}t.forEach((t=>{t.forEach((t=>{y(e,i,t)}))}))}(e,t,r))),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},r){const i=function(e,t){const r=e.cache
if(!r)return!0
const i=r.isNew(t),n=r.isDeleted(t),s=r.isEmpty(t)
return(!i||n)&&s}(this._store._instanceCache,e),n=function(e,t){const r=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&r.getPendingRequestsForRecord(t).some((e=>"query"===e.type))}(this._store._instanceCache,e)
let s
return i?(t.reload=!0,s=this.scheduleFetch(e,t,r)):s=n?this.getPendingFetch(e,t):Promise.resolve(e),s}destroy(){this.isDestroyed=!0}}function m(e,t,r){for(let i=0,n=t.length;i<n;i++){const n=t[i],s=e.get(n)
s&&s.resolver.reject(r||new Error(`Expected: '<${n.modelName}:${n.id}>' to be present in the adapter provided payload, but it was not found.`))}}function y(e,t,r){const s=r.identifier,o=s.type,a=e._fetchManager.createSnapshot(s,r.options),c=e.modelFor(s.type),l=s.id
let u=Promise.resolve().then((()=>t.findRecord(e,c,s.id,a)))
u=u.then((t=>{const r=d(e.serializerFor(o),e,c,t,l,"findRecord")
return(0,n.warn)(`You requested a record of type '${o}' with id '${l}' but the adapter returned a payload with primary data having an id of '${r.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,i.pG)(r.data.id)===(0,i.pG)(l),{id:"ds.store.findRecord.id-mismatch"}),r})),r.resolver.resolve(u)}function g(e,t,r,i,s){r.length>1?function(e,t,r,i){const n=e.modelFor(r)
return Promise.resolve().then((()=>{const r=i.map((e=>e.id))
return t.findMany(e,n,r,i)})).then((t=>d(e.serializerFor(r),e,n,t,null,"findMany")))}(e,i,s,r).then((i=>{!function(e,t,r,i){const s=new Map
for(let n=0;n<r.length;n++){const e=r[n].id
let t=s.get(e)
t||(t=[],s.set(e,t)),t.push(r[n])}const o=Array.isArray(i.included)?i.included:[],a=i.data
for(let n=0,l=a.length;n<l;n++){const e=a[n],r=s.get(e.id)
s.delete(e.id),r?r.forEach((r=>{t.get(r).resolver.resolve({data:e})})):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===s.size)return
const c=[]
s.forEach((e=>{c.push(...e)})),(0,n.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...s.values()].map((e=>e[0].id)).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),m(t,c)}(e,t,r,i)})).catch((e=>{m(t,r,e)})):1===r.length&&y(e,i,t.get(r[0]))}function b(e){}},8146:(e,t,r)=>{r.d(t,{B1:()=>c,Fe:()=>u,RH:()=>l,V1:()=>m,i$:()=>y,n5:()=>p,sg:()=>h,zs:()=>f})
var i=r(4463),n=r(5606),s=r(7375)
function o(e){e&&(0,n.consumeTag)(e)}function a(e){e&&(0,n.dirtyTag)(e)}function c(e){const t=(0,s.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(o(e["[]"]),o(e["@length"]),(0,n.consumeTag)(e.tag)):e.ref}function l(e){const t=(0,s.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(a(e["[]"]),a(e["@length"]),(0,n.dirtyTag)(e.tag)):e.ref=null}(e)}function u(e){const t=(0,s.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const d=(0,s.L1)("Signals",Symbol("Signals"))
function h(e,t,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[d]=this[d]||new Map,i=e.has(t),n=function(e,t,r){let i=e.get(r)
return i||(i=p(t,r),e.set(r,i)),c(i),i}(e,this,t)
return i||void 0===r||(n.lastValue=r),n.lastValue},set(e){const r=this[d]=this[d]||new Map
let i=r.get(t)
i||(i=p(this,t),r.set(t,i)),i.lastValue!==e&&(i.lastValue=e,l(i))}})}function f(e,t){t["[]"]=(0,i.tagForProperty)(e,"[]"),t["@length"]=(0,i.tagForProperty)(e,"length")}function p(e,t){return{key:t,tag:(0,i.tagForProperty)(e,t),t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function m(e,t,r){let i=e[d]
i||(i=new Map,e[d]=i)
let n=i.get(t)
return n||(n=p(e,t),n.shouldReset=r,i.set(t,n)),n}function y(e,t){const r=e[d]
if(r)return r.get(t)}},8411:(e,t,r)=>{r.r(t),r.d(t,{ModuleRegistry:()=>y,default:()=>g})
class i{constructor(e,t,r){this.limit=e,this.func=t,this.store=r,this.size=0,this.misses=0,this.hits=0,this.store=r||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const n=/[ _]/g,s=new i(1e3,(e=>{return(t=e,p.get(t)).replace(n,"-")
var t})),o=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,c=/(^|\/|\.)([a-z])/g,l=new i(1e3,(e=>{const t=(e,t,r)=>r?`_${r.toUpperCase()}`:"",r=(e,t,r,i)=>t+(i?i.toUpperCase():""),i=e.split("/")
for(let n=0;n<i.length;n++)i[n]=i[n].replace(o,t).replace(a,r)
return i.join("/").replace(c,(e=>e.toUpperCase()))})),u=/([a-z\d])([A-Z]+)/g,d=/\-|\s+/g,h=new i(1e3,(e=>e.replace(u,"$1_$2").replace(d,"_").toLowerCase())),f=/([a-z\d])([A-Z])/g,p=new i(1e3,(e=>e.replace(f,"$1_$2").toLowerCase()))
function m(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class y{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class g{static create(e){return new this(e)}static withModules(e){var t
return m(t=class extends(this){},"explicitModules",e),t}constructor(e){if(m(this,"moduleBasedResolver",!0),m(this,"_deprecatedPodModulePrefix",!1),m(this,"_normalizeCache",Object.create(null)),m(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new y)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,r,i,n=e.split("@")
if(3===n.length){if(0===n[0].length){t=`@${n[1]}`
let e=n[2].split(":")
r=e[0],i=e[1]}else t=`@${n[1]}`,r=n[0].slice(0,-1),i=n[2]
"template:components"===r&&(i=`components/${i}`,r="template")}else if(2===n.length){let e=n[0].split(":")
if(2===e.length)0===e[1].length?(r=e[0],i=`@${n[1]}`):(t=e[1],r=e[0],i=n[1])
else{let e=n[1].split(":")
t=n[0],r=e[0],i=e[1]}"template"===r&&0===t.lastIndexOf("components/",0)&&(i=`components/${i}`,t=t.slice(11))}else n=e.split(":"),r=n[0],i=n[1]
let s=i,o=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:r}),type:r,fullNameWithoutType:s,name:i,root:o,resolveMethodName:"resolve"+(a=r,l.get(a))}
var a}resolveOther(e){b("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let i=this._extractDefaultExport(t,e)
if(void 0===i)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(i,e)&&(r=i,i={create:e=>"function"==typeof r.extend?r.extend(e):r}),i}var r}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,r=this.parseName(e),i=r.resolveMethodName
return"function"==typeof this[i]&&(t=this[i](r)),null==t&&(t=this.resolveOther(r)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(r=t[1].replace(/\./g,"/"),s.get(r))}return e
var r}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let r=t.fullNameWithoutType
return"template"===t.type&&(r=r.replace(/^components\//,"")),e+"/"+r+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,r=t+"/routes"
if(this._moduleRegistry.has(r)){let e=this._extractDefaultExport(r)
return b(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,r=this.moduleNameLookupPatterns
for(let i=0,n=r.length;i<n;i++){let n=r[i].call(this,e)
if(n&&(n=this.chooseModuleName(n)),n&&this._moduleRegistry.has(n)&&(t=n),t)return t}}chooseModuleName(e){let t=(r=e,h.get(r))
var r
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),r=Object.create(null)
for(let i=0,n=t.length;i<n;i++){let n=t[i],s=this.translateToContainerFullname(e,n)
s&&(r[s]=!0)}return r}translateToContainerFullname(e,t){let r=this.prefix({type:e}),i=r+"/",n="/"+e,s=t.indexOf(i),o=t.indexOf(n)
if(0===s&&o===t.length-n.length&&t.length>i.length+n.length)return e+":"+t.slice(s+i.length,o)
let a=r+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function b(e,t){if(!t)throw new Error(e)}m(g,"moduleBasedResolver",!0)},8488:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o})
var i=r(336),n=r.n(i),s=r(1603)
class o extends(n()){constructor(...e){var t,r,i
super(...e),t=this,i=!1,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r="didRun"))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}compute(e,t){const[r,...i]=e
if((0,s.assert)(`\`{{did-update-helper}}\` expects a callback function as the first parameter. You provided: ${r}`,"function"==typeof r),!this.didRun)return this.didRun=!0,e.forEach((()=>{})),void Object.values(t)
r(i,t)}}},8738:(e,t,r)=>{r.d(t,{PO:()=>s,Vv:()=>n.dependentKeyCompat})
var i=r(4217),n=(r(8146),r(394))
function s(e,t,r){const n=new WeakMap,s=r.get
r.get=function(){return n.has(this)||n.set(this,(0,i.createCache)(s.bind(this))),(0,i.getValue)(n.get(this))}}},8929:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d})
var i=r(2663),n=r.n(i),s=r(336),o=r.n(s),a=r(1603),c=r(3630)
function l(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||null===e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){}class d extends(o()){constructor(...e){super(...e),l(this,"tagName",u),l(this,"componentClass",void 0)}compute(e,t){(0,a.assert)("The `element` helper takes a single positional argument",1===e.length),(0,a.assert)("The `element` helper does not take any named arguments",0===Object.keys(t).length)
let r=e[0]
return r!==this.tagName&&(this.tagName=r,"string"==typeof r?this.componentClass=(0,c.ensureSafeComponent)(class extends(n()){constructor(...e){super(...e),l(this,"tagName",r)}},this):(this.componentClass=void 0,(0,a.runInDebug)((()=>{let e="The argument passed to the `element` helper must be a string"
try{e+=` (you passed \`${r}\`)`}catch(e){}(0,a.assert)(e,null==r)})))),this.componentClass}}},9724:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ot})
var i=r(151),n=r(1274)
const s={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class o{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=(0,i.graphFor)(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(_(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,r=t.included
let i,n
const{identifierCache:s}=this._capabilities
if(r)for(i=0,n=r.length;i<n;i++)r[i]=b(this,s,r[i])
if(Array.isArray(t.data)){n=t.data.length
const o=[]
for(i=0;i<n;i++)o.push(b(this,s,t.data[i]))
return this._putDocument(e,o,r)}if(null===t.data)return this._putDocument(e,null,r)
const o=b(this,s,t.data)
return this._putDocument(e,o,r)}_putDocument(e,t,r){const i=_(e)?function(e){const t={}
return e.content&&(w(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},r=e.content
return r&&w(t,r),t}(e)
void 0!==t&&(i.data=t),void 0!==r&&(i.included=r)
const n=e.request,s=n?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(n):null
if(s){i.lid=s.lid,e.content=i
const t=this.__documents.has(s.lid)
this.__documents.set(s.lid,e),this._capabilities.notifyChange(s,t?"updated":"added",null)}if("findHasMany"===e.request?.op){const t=e.request.options?.identifier,r=e.request.options?.field
r&&t&&this.__graph.push({op:"updateRelationship",record:t,field:r.name,value:i})}return i}patch(e){if("mergeIdentifiers"===e.op){const t=this.__cache.get(e.record)
t&&(this.__cache.set(e.value,t),this.__cache.delete(e.record)),this.__graph.update(e,!0)}}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:r,id:i,lid:n}=e,s=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,r)=>{if("alias"===t.kind)return
if(r in s&&void 0!==s[r])return
const i=u(t,e,c)
void 0!==i&&(s[r]=i)})),{type:r,id:i,lid:n,attributes:s,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRemoteState(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:r,id:i,lid:n}=e,s=Object.assign({},t.remoteAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,r)=>{if(r in s&&void 0!==s[r])return
const i=u(t,e,c)
void 0!==i&&(s[r]=i)})),{type:r,id:i,lid:n,attributes:s,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,r){let i
const n=this.__safePeek(e,!1),s=!!n,o=n||this._createCache(e),a=function(e,t,r){const i=t._store.getRequestStateService()
return!p(e)&&i.getPendingRequestsForRecord(r).some((e=>"query"===e.type))}(n,this._capabilities,e)||!p(n),c=!function(e){if(!e)return!0
const t=e.isNew,r=e.isDeleted,i=f(e)
return(!t||r)&&i}(n)&&!a
o.isNew&&(o.isNew=!1,this._capabilities.notifyChange(e,"identity",null),this._capabilities.notifyChange(e,"state",null))
const l=this._capabilities.schema.fields(e)
return r&&s&&t.attributes&&(i=h(o,t.attributes,l)),o.remoteAttrs=Object.assign(o.remoteAttrs||Object.create(null),t.attributes),o.localAttrs&&g(o,i)&&this._capabilities.notifyChange(e,"state",null),c||this._capabilities.notifyChange(e,"added",null),t.id&&(o.id=t.id),t.relationships&&m(this.__graph,l,e,t),i?.size&&d(this._capabilities,e,i),i?.size?Array.from(i):void 0}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const r={}
if(void 0!==t){const i=this._capabilities.schema.fields(e),n=this.__graph,s=Object.keys(t)
for(let o=0;o<s.length;o++){const a=s[o],c=t[a]
if("id"===a)continue
const l=i.get(a)
let u
switch(void 0!==l?"kind"in l?l.kind:"attribute":null){case"attribute":this.setAttr(e,a,c),r[a]=c
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:c}),u=n.get(e,a),u.state.hasReceivedData=!0,u.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:c}),u=n.get(e,a),u.state.hasReceivedData=!0,u.state.isEmpty=!1
break
default:r[a]=c}}}return this._capabilities.notifyChange(e,"added",null),r}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const r=t.content,i=t.request.op,n=r&&r.data,{identifierCache:s}=this._capabilities,o=e.id,a="deleteRecord"!==i&&n?s.updateRecordIdentifier(e,n):e,c=this.__peek(a,!1)
c.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),c.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed",null))
const l=this._capabilities.schema.fields(a)
let u
c.isNew=!1,n&&(n.id&&!c.id&&(c.id=n.id),a===e&&a.id!==o&&this._capabilities.notifyChange(a,"identity",null),n.relationships&&m(this.__graph,l,a,n),u=n.attributes)
const f=u&&h(c,u,l)
c.remoteAttrs=Object.assign(c.remoteAttrs||Object.create(null),c.inflightAttrs,u),c.inflightAttrs=null,g(c,f),c.errors&&(c.errors=null,this._capabilities.notifyChange(a,"errors",null)),f?.size&&d(this._capabilities,a,f),this._capabilities.notifyChange(a,"state",null)
const p=r&&r.included
if(p)for(let d=0,h=p.length;d<h;d++)b(this,s,p[d])
return{data:a}}commitWasRejected(e,t){const r=this.__peek(e,!1)
if(r.inflightAttrs){const e=Object.keys(r.inflightAttrs)
if(e.length>0){const t=r.localAttrs=r.localAttrs||Object.create(null)
for(let i=0;i<e.length;i++)void 0===t[e[i]]&&(t[e[i]]=r.inflightAttrs[e[i]])}r.inflightAttrs=null}t&&(r.errors=t),this._capabilities.notifyChange(e,"errors",null)}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void(0,i.peekGraph)(t)?.unload(e)
const r=!this.isDeletionCommitted(e)
let n=!1
const s=this.__peek(e,!1)
s.isNew?(0,i.peekGraph)(t)?.push({op:"deleteRecord",record:e,isNew:!0}):(0,i.peekGraph)(t)?.unload(e),s.localAttrs=null,s.remoteAttrs=null,s.defaultAttrs=null,s.inflightAttrs=null
const o=function(e,t){const r=[],i=[],n=new Set
for(i.push(t);i.length>0;){const s=i.shift()
r.push(s),n.add(s)
const o=v(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!n.has(t)&&(n.add(t),i.push(t))}}return r}(t,e)
if(function(e,t){for(let r=0;r<t.length;++r){const i=t[r]
if(e.hasRecord(i))return!1}return!0}(t,o))for(let i=0;i<o.length;++i){const e=o[i]
t.notifyChange(e,"removed",null),n=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,s),1===this.__destroyedCache.size&&setTimeout((()=>{this.__destroyedCache.clear()}),100),!n&&r&&t.notifyChange(e,"removed",null)}getAttr(e,t){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=t,i=this.__peek(e,!0)
if(!i)return
if(i.localAttrs&&r in i.localAttrs)return i.localAttrs[r]
if(i.inflightAttrs&&r in i.inflightAttrs)return i.inflightAttrs[r]
if(i.remoteAttrs&&r in i.remoteAttrs)return i.remoteAttrs[r]
if(i.defaultAttrs&&r in i.defaultAttrs)return i.defaultAttrs[r]
{const t=this._capabilities.schema.fields(e).get(r)
this._capabilities
const n=u(t,e,this._capabilities._store)
return c(t)&&(i.defaultAttrs=i.defaultAttrs||Object.create(null),i.defaultAttrs[r]=n),n}}const i=t,n=this.__peek(e,!0),s=i[0]
let o=n.localAttrs&&s in n.localAttrs?n.localAttrs[s]:void 0
if(void 0===o&&(o=n.inflightAttrs&&s in n.inflightAttrs?n.inflightAttrs[s]:void 0),void 0===o&&(o=n.remoteAttrs&&s in n.remoteAttrs?n.remoteAttrs[s]:void 0),void 0!==o){for(let e=1;e<i.length;e++)if(o=o[i[e]],void 0===o)return
return o}}getRemoteAttr(e,t){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=t,i=this.__peek(e,!0)
if(!i)return
if(i.remoteAttrs&&r in i.remoteAttrs)return i.remoteAttrs[r]
if(i.defaultAttrs&&r in i.defaultAttrs)return i.defaultAttrs[r]
{const t=this._capabilities.schema.fields(e).get(r)
this._capabilities
const n=u(t,e,this._capabilities._store)
return c(t)&&(i.defaultAttrs=i.defaultAttrs||Object.create(null),i.defaultAttrs[r]=n),n}}const i=t,n=this.__peek(e,!0),s=i[0]
let o=n.remoteAttrs&&s in n.remoteAttrs?n.remoteAttrs[s]:void 0
if(void 0!==o){for(let e=1;e<i.length;e++)if(o=o[i[e]],void 0===o)return
return o}}setAttr(e,t,r){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=this.__peek(e,!1),n=t,s=i.inflightAttrs&&n in i.inflightAttrs?i.inflightAttrs[n]:i.remoteAttrs&&n in i.remoteAttrs?i.remoteAttrs[n]:void 0
return s!==r?(i.localAttrs=i.localAttrs||Object.create(null),i.localAttrs[n]=r,i.changes=i.changes||Object.create(null),i.changes[n]=[s,r]):i.localAttrs&&(delete i.localAttrs[n],delete i.changes[n]),i.defaultAttrs&&n in i.defaultAttrs&&delete i.defaultAttrs[n],void this._capabilities.notifyChange(e,"attributes",n)}const n=t,s=this.__peek(e,!1),o=n[0],a=s.inflightAttrs&&o in s.inflightAttrs?s.inflightAttrs[o]:s.remoteAttrs&&o in s.remoteAttrs?s.remoteAttrs[o]:void 0
let c
if(a){c=a[n[1]]
for(let e=2;e<n.length;e++)c=c[n[e]]}if(c!==r){s.localAttrs=s.localAttrs||Object.create(null),s.localAttrs[o]=s.localAttrs[o]||structuredClone(a),s.changes=s.changes||Object.create(null)
let e=s.localAttrs[o],t=1
for(;t<n.length-1;)e=e[n[t++]]
e[n[t]]=r,s.changes[o]=[a,s.localAttrs[o]]}else if(s.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(s.localAttrs[o])&&(delete s.localAttrs[o],delete s.changes[o])}catch{}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){const t=this.__peek(e,!1)
return t&&t.changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return!!t&&(null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0)}rollbackAttrs(e){const t=this.__peek(e,!1)
let r
return t.isDeleted=!1,null!==t.localAttrs&&(r=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors",null)),this._capabilities.notifyChange(e,"state",null),r&&r.length&&d(this._capabilities,e,new Set(r)),r||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join((()=>{t=this.__graph.rollback(e)})),t}getRelationship(e,t){return this.__graph.getData(e,t)}getRemoteRelationship(e,t){return this.__graph.getRemoteData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state",null)}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let r=this.__cache.get(e)
return!r&&t&&(r=this.__destroyedCache.get(e)),r}__peek(e,t){return this.__safePeek(e,t)}}function a(e){return(0,i.isBelongsTo)(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function c(e){return!!e&&l(e.options)}function l(e){return!!e&&"function"==typeof e.defaultValue}function u(e,t,r){const i=e?.options
if(e&&(i||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(l(i))return i.defaultValue()
if(i&&"defaultValue"in i)return i.defaultValue
if("attribute"!==e.kind&&e.type){const n=r.schema.transformation(e)
if(n?.defaultValue)return n.defaultValue(i||null,t)}}}function d(e,t,r){if(r)for(const i of r)e.notifyChange(t,"attributes",i)
else e.notifyChange(t,"attributes",null)}function h(e,t,r){const i=new Set,n=Object.keys(t),s=n.length,o=e.localAttrs,a=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let c=0;c<s;c++){const e=n[c]
if(!r.has(e))continue
const s=t[e]
o&&void 0!==o[e]||a[e]!==s&&i.add(e)}return i}function f(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function p(e,t=!1){if(!e)return!1
const r=e.isNew,i=f(e)
return r?!e.isDeleted:!(t&&e.isDeletionCommitted||i)}function m(e,t,r,i){for(const n in i.relationships){const s=i.relationships[n],o=t.get(n)
s&&o&&y(o)&&e.push({op:"updateRelationship",record:r,field:n,value:s})}}function y(e){const{kind:t}=e
return"hasMany"===t||"belongsTo"===t||"resource"===t||"collection"===t}function g(e,t){const{localAttrs:r,remoteAttrs:i,inflightAttrs:n,defaultAttrs:s,changes:o}=e
if(!r)return e.changes=null,!1
let a=!1
const c=Object.keys(r)
for(let l=0,u=c.length;l<u;l++){const e=c[l];(n&&e in n?n[e]:i&&e in i?i[e]:void 0)===r[e]&&(a=!0,t?.delete(e),delete r[e],delete o[e]),s&&e in s&&delete s[e]}return a}function b(e,t,r){let i=t.peekRecordIdentifier(r)
return i=i?t.updateRecordIdentifier(i,r):t.getOrCreateRecordIdentifier(r),e.upsert(i,r,e._capabilities.hasRecord(i)),i}function v(e,t){const r=(0,i.peekGraph)(e),n=r?.identifiers.get(t)
if(!n)return s
const o=[]
Object.keys(n).forEach((e=>{const t=n[e]
t&&!t.definition.isImplicit&&o.push(t)}))
let c=0,l=0,u=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;c<o.length;){for(;l<2;){const t=0===l?(e=o[c],(0,i.isBelongsTo)(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]):a(o[c])
for(;u<t.length;){const e=t[u++]
if(null!==e)return e}u=0,l++}l=0,c++}var e})()
return{value:e,done:void 0===e}}})}}function _(e){return e instanceof Error}function w(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}var k=r(2294),S=r(6730),R=r(7910)
function E(e,t,r,i){const n=t.data?(0,R.i)(t.data,((t,n)=>{const{id:s,type:o}=t
return function(e,t,r,i){const{id:n,type:s}=e
e.relationships||(e.relationships={})
const{relationships:o}=e,a=function(e,t,r,i){const{name:n}=r,{type:s}=t,o=function(e,t,r){const i=e.schema.fields(t).get(r)
return i?i.options.inverse:null}(e,{type:s},n)
if(o)return{inverseKey:o,kind:e.schema.fields({type:i}).get(o).kind}}(r,t,i,s)
if(a){const{inverseKey:e,kind:r}=a,i=o[e]?.data
"hasMany"===r&&void 0===i||(o[e]=o[e]||{},o[e].data=function(e,t,{id:r,type:i}){const n={id:r,type:i}
let s=null
if("hasMany"===t){const t=e||[]
e&&e.find((e=>e.type===n.type&&e.id===n.id))||t.push(n),s=t}else{const t=e||{}
Object.assign(t,n),s=t}return s}(i??null,r,t))}}(t,r,e,i),{id:s,type:o}})):null,s={}
"meta"in t&&(s.meta=t.meta),"links"in t&&(s.links=t.links),"data"in t&&(s.data=n)
const o={id:r.id,type:r.type,relationships:{[i.name]:s}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(o),t}const A=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),O={request(e,t){if(e.request.url||!e.request.op||!A.has(e.request.op))return t(e.request)
const{store:r}=e.request
switch(r._fetchManager||(r._fetchManager=new R.F(r)),e.request.op){case"findRecord":return function(e){const{store:t,data:r}=e.request,{record:i,options:n}=r
let s
if(t._instanceCache.recordIsLoaded(i))if(n.reload)(0,R.a)(i),s=t._fetchManager.scheduleFetch(i,n,e.request)
else{let r=null
const o=t.adapterFor(i.type)
void 0===n.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,r=t._fetchManager.createSnapshot(i,n))?((0,R.a)(i),n.reload=!0,s=t._fetchManager.scheduleFetch(i,n,e.request)):(!1===n.backgroundReload||!n.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,r=r||t._fetchManager.createSnapshot(i,n))||((0,R.a)(i),n.backgroundReload=!0,t._fetchManager.scheduleFetch(i,n,e.request)),s=Promise.resolve(i))}else s=t._fetchManager.fetchDataIfNeededForIdentifier(i,n,e.request)
return s.then((e=>t.peekRecord(e)))}(e)
case"findAll":return function(e){const{store:t,data:r}=e.request,{type:i,options:n}=r,s=t.adapterFor(i),o=t.recordArrayManager._live.get(i),a=new R.b(t,i,n)
let c
return n.reload||!1!==n.reload&&(s.shouldReloadAll&&s.shouldReloadAll(t,a)||!s.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),c=T(s,t,i,a,e.request,!0)):(c=Promise.resolve(t.peekAll(i)),(n.backgroundReload||!1!==n.backgroundReload&&(!s.shouldBackgroundReloadAll||s.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),T(s,t,i,a,e.request,!1))),c}(e)
case"query":return function(e){const{store:t,data:r}=e.request
let{options:i}=r
const{type:n,query:s}=r,o=t.adapterFor(n),a=i._recordArray||t.recordArrayManager.createArray({type:n,query:s})
delete i._recordArray
const c=t.modelFor(n)
return Promise.resolve().then((()=>o.query(t,c,s,a,i))).then((e=>{const r=t.serializerFor(n),i=(0,R.n)(r,t,c,e,null,"query"),s=t._push(i,!0)
return t.recordArrayManager.populateManagedArray(a,s,i),a}))}(e)
case"queryRecord":return function(e){const{store:t,data:r}=e.request,{type:i,query:n,options:s}=r,o=t.adapterFor(i),a=t.modelFor(i)
return Promise.resolve().then((()=>o.queryRecord(t,a,n,s))).then((e=>{const r=t.serializerFor(i),n=(0,R.n)(r,t,a,e,null,"queryRecord"),s=t._push(n,!0)
return s?t.peekRecord(s):null}))}(e)
case"findBelongsTo":return function(e){const{store:t,data:r,records:i}=e.request,{options:n,record:s,links:o,useLink:a,field:c}=r,l=i?.[0],u=l&&t._fetchManager.getPendingFetch(l,n)
if(u)return u
if(a)return function(e,t,r,i,n){return Promise.resolve().then((()=>{const s=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,n),a=r&&"string"!=typeof r?r.href:r
return s.findBelongsTo(e,o,a,i)})).then((r=>{const n=e.modelFor(i.type),s=e.serializerFor(i.type)
let o=(0,R.n)(s,e,n,r,null,"findBelongsTo")
return o.data||o.links||o.meta?(o=E(e,o,t,i),e._push(o,!0)):null}),null)}(t,s,o.related,c,n)
const d=t._fetchManager
return(0,R.a)(l),n.reload?d.scheduleFetch(l,n,e.request):d.fetchDataIfNeededForIdentifier(l,n,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:r,records:i}=e.request,{options:n,record:s,links:o,useLink:a,field:c}=r
if(a)return function(e,t,r,i,n,s){return Promise.resolve().then((()=>{const o=t._fetchManager.createSnapshot(r,s),a=i&&"string"!=typeof i?i.href:i
return e.findHasMany(t,o,a,n)})).then((e=>{const i=t.modelFor(n.type),s=t.serializerFor(n.type)
let o=(0,R.n)(s,t,i,e,null,"findHasMany")
return o=E(t,o,r,n),t._push(o,!0)}),null)}(t.adapterFor(s.type),t,s,o.related,c,n)
const l=new Array(i.length),u=t._fetchManager
for(let d=0;d<i.length;d++){const t=i[d];(0,R.a)(t),l[d]=n.reload?u.scheduleFetch(t,n,e.request):u.fetchDataIfNeededForIdentifier(t,n,e.request)}return Promise.all(l)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:r,op:i}=e.request,{options:n,record:s}=r
t.cache.willCommit(s,e)
const o=Object.assign({[R.S]:i},n)
return t._fetchManager.scheduleSave(s,o).then((r=>{let n
return t._join((()=>{n=t.cache.didCommit(s,{request:e.request,content:r})})),t.lifetimes?.didRequest&&"createRecord"===i&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(n.data)})).catch((e=>{let r=e
throw e?"string"==typeof e&&(r=new Error(e)):r=new Error("Unknown Error Occurred During Request"),function(e,t,r){if(r&&!0===r.isAdapterError&&"InvalidError"===r.code){const i=e.serializerFor(t.type)
if(i&&"function"==typeof i.extractErrors){const n=i.extractErrors(e,e.modelFor(t.type),r,t.id)
r.errors=function(e){const t=[]
return e&&Object.keys(e).forEach((r=>{const i=(n=e[r],Array.isArray(n)?n:[n])
var n
for(let e=0;e<i.length;e++){let n="Invalid Attribute",s=`/data/attributes/${r}`
r===C&&(n="Invalid Document",s="/data"),t.push({title:n,detail:i[e],source:{pointer:s}})}})),t}(n)}}const i=e.cache
if(r.errors){let e=r.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),i.commitWasRejected(t,e)}else i.commitWasRejected(t)}(t,s,r),r}))}(e)
default:return t(e.request)}}},C="base"
function T(e,t,r,i,n,s){const o=t.modelFor(r)
let a=Promise.resolve().then((()=>e.findAll(t,o,null,i)))
return a=a.then((e=>{const n=t.serializerFor(r),a=(0,R.n)(n,t,o,e,null,"findAll")
return t._push(a,s),i._recordArray.isUpdating=!1,i._recordArray})),a}function M(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const r=(0,n.di)(e),{_adapterCache:i}=this
let s=i[r]
if(s)return s
const o=(0,k.getOwner)(this)
return s=o.lookup(`adapter:${r}`),void 0!==s?(i[r]=s,s):(s=i.application||o.lookup("adapter:application"),void 0!==s?(i[r]=s,i.application=s,s):void 0)}function j(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,n.di)(e),{_serializerCache:r}=this
let i=r[t]
if(i)return i
const s=(0,k.getOwner)(this)
return i=s.lookup(`serializer:${t}`),void 0!==i?(r[t]=i,i):(i=r.application||s.lookup("serializer:application"),void 0!==i?(r[t]=i,r.application=i,i):null)}function P(e,t){const r=(0,n.di)(e),i=this.serializerFor(r),s=this.modelFor(r)
return i.normalize(s,t)}function x(e,t){const r=t||e,i=t?(0,n.di)(e):"application"
this.serializerFor(i).pushPayload(this,r)}function D(e,t){return this._fetchManager||(this._fetchManager=new R.F(this)),this._fetchManager.createSnapshot((0,S.o)(e)).serialize(t)}function F(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var N,I,q,$,L,z=r(1603),B=r(3241),U=r(4471),V=r.n(U),W=r(8738),H=r(8146),G=r(1788),Y=r(1389),K=r(8410),Q=r.n(K),J=r(3991),Z=r(1491),X=r(7375),ee=r(7648),te=r(9280),re=r.n(te),ie=r(7104),ne=r.n(ie),se=r(4666),oe=r(3193)
function ae(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function ce(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e){{const t=(0,B._k)(e)
return(0,z.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}const ue=ne().extend(re()),de=new WeakMap
function he(e,t,r,i){let n={configurable:!0,enumerable:!0,writable:!0,initializer:null}
i&&(n.initializer=i)
for(let s of r)n=s(e,t,n)||n
void 0===n.initializer?Object.defineProperty(e,t,n):function(e,t,r){let i=de.get(e)
i||(i=new Map,de.set(e,i)),i.set(t,r)}(e,t,n)}function fe(e,t,r){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let n of r)i=n(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}function pe(e,t){let r=function(e,t){var r
let i=e.prototype
for(;i;){let e=null==(r=de.get(i))?void 0:r.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}const me=Symbol.for("LegacyPromiseProxy"),ye=ue
class ge extends ye{constructor(...e){super(...e),ce(this,me,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:r}=this._belongsToState
return await r.reloadBelongsTo(t,e),this}}fe((N=ge).prototype,"id",[W.PO]),fe(N.prototype,"meta",[(0,U.computed)()])
class be{constructor(e,t){ce(this,me,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then((t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t)),(t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t}))}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}fe((I=be).prototype,"length",[W.Vv]),fe(I.prototype,"links",[W.Vv]),fe(I.prototype,"meta",[W.Vv]),(0,H.sg)(be.prototype,"content",null),(0,H.sg)(be.prototype,"isPending",!1),(0,H.sg)(be.prototype,"isRejected",!1),(0,H.sg)(be.prototype,"isFulfilled",!1),(0,H.sg)(be.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,W.Vv)(e),Object.defineProperty(be.prototype,"[]",e)}class ve{constructor(e,t,r,i,n){ce(this,"___token",void 0),ce(this,"___identifier",void 0),ce(this,"___relatedTokenMap",void 0),this.graph=t,this.key=n,this.hasManyRelationship=i,this.type=i.definition.type,this.store=e,this.___identifier=r,this.___token=e.notifications.subscribe(r,((e,t,r)=>{"relationships"===t&&r===n&&this._ref++})),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach((e=>{this.store.notifications.unsubscribe(e)})),this.___relatedTokenMap.clear()}get identifiers(){we(this),this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map((e=>{const r=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let i=t.get(r)
return i?t.delete(r):i=this.store.notifications.subscribe(r,((e,t,r)=>{("identity"===t||"attributes"===t&&"id"===r)&&this._ref++})),this.___relatedTokenMap.set(r,i),r})):(t.forEach((e=>{this.store.notifications.unsubscribe(e)})),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map((e=>e.id))}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:r}=this,i=Array.isArray(e)?{data:e}:e,n=Array.isArray(i.data)&&i.data.length>0&&_e(i.data[0]),s=Array.isArray(i.data)?n?r._push(i,!0):i.data.map((e=>r.identifierCache.getOrCreateRecordIdentifier(e))):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(i.data)&&(a.data=s),"links"in i&&(a.links=i.links),"meta"in i&&(a.meta=i.meta),r._join((()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})})),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every((e=>!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=Re.get(this.___identifier)
return we(this)?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=Re.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||Te(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return Re.get(this.___identifier).reloadHasMany(this.key,e)}}function _e(e){return Object.keys(e).filter((e=>"id"!==e&&"type"!==e&&"lid"!==e)).length>0}function we(e){return!!e._isLoaded()||(e.graph.get(e.___identifier,e.key).accessed=!0,!1)}function ke(e){return Boolean(e&&e.links&&e.links.related)}fe(ve.prototype,"identifiers",[W.Vv,W.PO]),(0,H.sg)(ve.prototype,"_ref",0)
class Se{constructor(e,t,r,i,n){this.graph=t,this.key=n,this.belongsToRelationship=i,this.type=i.definition.type,this.store=e,this.___identifier=r,this.___relatedToken=null,this.___token=e.notifications.subscribe(r,((e,t,r)=>{"relationships"===t&&r===n&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,((e,t,r)=>{("identity"===t||"attributes"===t&&"id"===r)&&this._ref++})),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(ke(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return ke(this._resource())?"link":"id"}async push(e,t){const{store:r}=this,i=e.data&&_e(e.data)?r._push(e,!0):e.data?r.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:n}=this.belongsToRelationship,s={}
if((e.data||null===e.data)&&(s.data=i),"links"in e&&(s.links=e.links),"meta"in e&&(s.meta=e.meta),r._join((()=>{this.graph.push({op:"updateRelationship",record:n,field:this.key,value:s})})),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=Re.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||Te(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then((()=>this.value()))}reload(e){return Re.get(this.___identifier).reloadBelongsTo(this.key,e).then((()=>this.value()))}}fe(Se.prototype,"identifier",[W.Vv,W.PO]),(0,H.sg)(Se.prototype,"_ref",0)
const Re=(0,X.L1)("LEGACY_SUPPORT",new Map)
function Ee(e){const t=(0,n.o)(e)
let r=Re.get(t)
return r||(r=new Ae(e),Re.set(t,r),Re.set(e,r)),r}class Ae{constructor(e){this.record=e,this.store=(0,n.fV)(e),this.identifier=(0,n.o)(e),this.cache=(0,n.oX)(e)
{const e=(0,oe.A)(r(151)).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[n.u2],r=this.identifier,[i,s]=this._getCurrentState(r,e.key)
s.meta&&(e.meta=s.meta),s.links&&(e.links=s.links),t.length=0,(0,n.RX)(t,i)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,r,i){return this._findBelongsToByJsonApiResource(t,this.identifier,r,i).then((t=>Ce(this,e,r,t)),(t=>Ce(this,e,r,null,t)))}reloadBelongsTo(e,t){const r=this._relationshipPromisesCache[e]
if(r)return r
const i=this.graph.get(this.identifier,e),n=this.cache.getRelationship(this.identifier,e)
i.state.hasFailedLoadAttempt=!1,i.state.shouldForceReload=!0
const s=this._findBelongsTo(e,n,i,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:s}):s}getBelongsTo(e,t){const{identifier:r,cache:i}=this,n=i.getRelationship(this.identifier,e),s=n&&n.data?n.data:null,o=this.store,a=this.graph.get(this.identifier,e),c=a.definition.isAsync,l={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(c){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const r=this._findBelongsTo(e,n,a,t),i=s&&o._instanceCache.recordIsLoaded(s)
return this._updatePromiseProxyFor("belongsTo",e,{promise:r,content:i?o._instanceCache.getRecord(s):null,_belongsToState:l})}return null===s?null:o._instanceCache.getRecord(s)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(r=t,r?(0,n.o)(r):null)},!0)
var r}_getCurrentState(e,t){const r=this.cache.getRelationship(e,t),i=this.store._instanceCache,n=[]
if(r.data)for(let s=0;s<r.data.length;s++){const e=r.data[s]
i.recordIsLoaded(e,!0)&&n.push(e)}return[n,r]}getManyArray(e,t){{let r=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!r){const[i,s]=this._getCurrentState(this.identifier,e)
r=new n.YN({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:i,key:e,meta:s.meta||null,links:s.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=r}return r}}fetchAsyncHasMany(e,t,r,i){{let n=this._relationshipPromisesCache[e]
if(n)return n
const s=this.cache.getRelationship(this.identifier,e),o=this._findHasManyByJsonApiResource(s,this.identifier,t,i)
return o?(n=o.then((()=>Ce(this,e,t,r)),(i=>Ce(this,e,t,r,i))),this._relationshipPromisesCache[e]=n,n):(r.isLoaded=!0,Promise.resolve(r))}}reloadHasMany(e,t){{const r=this._relationshipPromisesCache[e]
if(r)return r
const i=this.graph.get(this.identifier,e),{definition:n,state:s}=i
s.hasFailedLoadAttempt=!1,s.shouldForceReload=!0
const o=this.getManyArray(e,n),a=this.fetchAsyncHasMany(e,i,o,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const r=this.graph.get(this.identifier,e),{definition:i,state:n}=r,s=this.getManyArray(e,i)
if(i.isAsync){if(n.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const i=this.fetchAsyncHasMany(e,r,s,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:i,content:s})}return s}}_updatePromiseProxyFor(e,t,r){let i=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:n}=r
return i?i._update(e,n):i=this._relationshipProxyCache[t]=new be(e,n),i}if(i){const{promise:e,content:t}=r
void 0!==t&&i.set("content",t),i.set("promise",e)}else i=ge.create(r),this._relationshipProxyCache[t]=i
return i}referenceFor(e,t){let r=this.references[t]
if(!r){const{graph:e,identifier:i}=this,n=e.get(i,t),s=n.definition.kind
"belongsTo"===s?r=new Se(this.store,e,i,n,t):"hasMany"===s&&(r=new ve(this.store,e,i,n,t)),this.references[t]=r}return r}_findHasManyByJsonApiResource(e,t,r,i={}){{if(!e)return
const{definition:n,state:s}=r;(0,Z.upgradeStore)(this.store)
const o=this.store.adapterFor?.(n.type),{isStale:a,hasDematerializedInverse:c,hasReceivedData:l,isEmpty:u,shouldForceReload:d}=s,h=Te(this.store,e),f=e.data,p=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===f)&&(d||c||a||!h&&!u),m=this.store.schema.fields({type:n.inverseType}).get(n.key),y={useLink:p,field:m,links:e.links,meta:e.meta,options:i,record:t}
if(p){const t=m.options.linksMode?{url:Oe(e),op:"findHasMany",method:"GET",records:f||[],data:y,[ee._q]:!1}:{op:"findHasMany",records:f||[],data:y,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}
return this.store.request(t)}const g=l&&!u,b=c||u&&Array.isArray(f)&&f.length>0,v=!d&&!a&&(g||b)
if(v&&h)return
return v||l&&!u||b?(i.reload=i.reload||!v||void 0,this.store.request({op:"findHasMany",records:f,data:y,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,r,i={}){if(!e)return Promise.resolve(null)
const n=r.definition.key
if(this._pending[n])return this._pending[n]
const s=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:c,isEmpty:l,shouldForceReload:u}=r.state,d=Te(this.store,e),h=e.links?.related&&(u||a||o||!d&&!l),f=this.store.schema.fields(this.identifier).get(r.definition.key),p={useLink:h,field:f,links:e.links,meta:e.meta,options:i,record:t}
if(h){const t=f.options.linksMode?{url:Oe(e),op:"findBelongsTo",method:"GET",records:s?[s]:[],data:p,[ee._q]:!1}:{op:"findBelongsTo",records:s?[s]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}},r=this.store.request(t)
return this._pending[n]=r.then((e=>f.options.linksMode?e.content.data:e.content)).finally((()=>{this._pending[n]=void 0})),this._pending[n]}const m=c&&d&&!l,y=a||l&&e.data,g=!u&&!o&&(m||y)
return g&&!s?Promise.resolve(null):g&&d||null===s?.id?Promise.resolve(s):s?(i.reload=i.reload||!g||void 0,this._pending[n]=this.store.request({op:"findBelongsTo",records:[s],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((e=>e.content)).finally((()=>{this._pending[n]=void 0})),this._pending[n]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach((t=>{const r=e[t]
r.destroy&&r.destroy()})),e=this.references,this.references=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),this.isDestroyed=!0}}function Oe(e){const t=e.links?.related
return"object"==typeof t?t.href:t}function Ce(e,t,r,i,n){delete e._relationshipPromisesCache[t],r.state.shouldForceReload=!1
const s="hasMany"===r.definition.kind
if(s&&i.notify(),n){r.state.hasFailedLoadAttempt=!0
const i=e._relationshipProxyCache[t]
throw i&&!s&&(i.content&&i.content.isDestroying&&i.set("content",null),e.store.notifications._flush()),n}return s?i.isLoaded=!0:e.store.notifications._flush(),r.state.hasFailedLoadAttempt=!1,r.state.isStale=!1,s||!i?i:e.store.peekRecord(i)}function Te(e,t){const r=e._instanceCache,i=t.data
return Array.isArray(i)?i.every((e=>r.recordIsLoaded(e))):!i||r.recordIsLoaded(i)}const Me=Q()
var je=new WeakMap,Pe=new WeakMap
class xe extends Me{constructor(...e){super(...e),ae(this,je,void pe(this,"messages")),ae(this,Pe,void pe(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let r=t.get(e)
return void 0===r&&(r=(0,Y.A)(),t.set(e,r)),(0,U.get)(r,"[]"),r}get content(){return(0,Y.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const r=this._findOrCreateMessages(e,t)
this.addObjects(r),this.errorsFor(e).addObjects(r),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const r=this.errorsFor(e),i=Array.isArray(t)?t:[t],n=new Array(i.length)
for(let s=0;s<i.length;s++){const t=i[s],o=r.findBy("message",t)
n[s]=o||{attribute:e,message:t}}return n}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const r=this.errorsFor(e)
for(let i=0;i<r.length;i++)r[i].attribute===e&&r.replace(i,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach((function(e,r){t.push(r)})),e.clear(),t.forEach((e=>{this.notifyPropertyChange(e)})),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function De(e,t,r,i){if("belongsTo"===i.kind)r.notifyPropertyChange(t)
else if("hasMany"===i.kind){const n=Re.get(e),s=n&&n._manyArrayCache[t],o=n&&n._relationshipPromisesCache[t]
if(s&&o)return
s&&(s.notify(),i.options.async&&r.notifyPropertyChange(t))}}function Fe(e,t,r,i){(0,se.cacheFor)(i,r)!==e.cache.getAttr(t,r)&&i.notifyPropertyChange(r)}fe((q=xe).prototype,"errorsByAttributeName",[(0,U.computed)()]),he(q.prototype,"messages",[(0,J.mapBy)("content","message")]),fe(q.prototype,"content",[(0,U.computed)()]),he(q.prototype,"isEmpty",[(0,J.not)("length")])
const Ne=/^\/?data\/(attributes|relationships)\/(.*)/,Ie=/^\/?data/
function qe(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}function $e(e,t,r){const i=r.get,n=r.set
return r.get=function(){const e=(0,H.V1)(this,t,!0)
return(0,H.B1)(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=i.call(this)),e.lastValue},r.set=function(e){(0,H.V1)(this,t,!0),n.call(this,e)},(0,W.Vv)(r),r}function Le(e,t){const r=(0,H.i$)(e,t)
r&&(r.shouldReset=!0,(0,H.RH)(r))}class ze{constructor(e){const t=(0,S.fV)(e),r=(0,n.o)(e)
this.identifier=r,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const i=t.getRequestStateService(),s=t.notifications,o=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&qe(e.response.data)||this._errorRequests.push(e),Be(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),Be(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&qe(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),Be(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),Be(this),this._errorRequests=[],this._lastError=null}}
i.subscribeForRecord(r,o)
const a=i.getLastRequestForRecord(r)
a&&o(a),this.handler=s.subscribe(r,((e,t,r)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}}))}destroy(){(0,S.fV)(this.record).notifications.unsubscribe(this.handler)}notify(e){Le(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let r=0;r<t.length;r++){const i=t[r]
if(i.source&&i.source.pointer){const t=i.source.pointer.match(Ne)
let r
if(t?r=t[2]:-1!==i.source.pointer.search(Ie)&&(r="base"),r){const t=i.detail||i.title
e.add(r,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function Be(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function Ue(e,t,r){const i=new WeakMap,n=r.get
return r.get=function(){let e=i.get(this)
return e||(e={hasComputed:!1,value:void 0},i.set(this,e)),e.hasComputed||(e.value=n.call(this),e.hasComputed=!0),e.value},r}fe(($=ze).prototype,"isLoading",[$e]),fe($.prototype,"isLoaded",[$e]),fe($.prototype,"isSaved",[$e]),fe($.prototype,"isEmpty",[$e]),fe($.prototype,"isNew",[$e]),fe($.prototype,"isDeleted",[$e]),fe($.prototype,"isValid",[$e]),fe($.prototype,"isDirty",[$e]),fe($.prototype,"isError",[$e]),fe($.prototype,"adapterError",[$e]),fe($.prototype,"isPreloaded",[W.PO]),fe($.prototype,"stateName",[W.PO]),fe($.prototype,"dirtyType",[W.PO]),(0,H.sg)(ze.prototype,"isSaving",!1)
class Ve extends(V()){init(e){const t=e._createProps,r=e._secretInit
e._createProps=null,e._secretInit=null
const i=this.store=r.store
super.init(e),this[G.pm]=i
const n=r.identifier
r.cb(this,r.cache,n,r.store),this.___recordState=null,this.setProperties(t)
const s=i.notifications
this.___private_notifications=s.subscribe(n,((e,t,r)=>{!function(e,t,r,i,n){switch(t){case"added":case"attributes":r?Fe(n,e,r,i):i.eachAttribute((t=>{Fe(n,e,t,i)}))
break
case"relationships":if(r){const t=i.constructor.relationshipsByName.get(r)
De(e,r,i,t)}else i.eachRelationship(((t,r)=>{De(e,t,i,r)}))
break
case"identity":i.notifyPropertyChange("id")}}(e,t,r,this,i)}))}destroy(){const e=(0,S.o)(this)
this.___recordState?.destroy(),(0,S.fV)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship(((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)})),Re.get(this)?.destroy(),Re.delete(this),Re.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,S.o)(this).id}set id(e){const t=(0,n.pG)(e),r=(0,S.o)(this),i=t!==r.id
null!==t&&i&&(this.store._instanceCache.setRecordId(r,t),this.store.notifications.notify(r,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new ze(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=xe.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){Le(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,S.fV)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const r=this.relationshipsByName.get(e)
return r&&t.modelFor(r.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const r=this.inverseMap
if(r[e])return r[e]
{const i=this._findInverseFor(e,t)
return r[e]=i,i}}static _findInverseFor(e,t){const r=this.relationshipsByName.get(e)
if(!r)return null
const{options:i}=r
return null===i.inverse?null:t.schema.hasResource(r)&&t.schema.fields(r).get(i.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach((t=>{const{type:r}=t
e.has(r)||e.set(r,[]),e.get(r).push(t)})),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty(((t,r)=>{We(r)&&e[r.kind].push(t)})),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,r=Object.keys(t)
for(let i=0;i<r.length;i++){const n=t[r[i]].type
e.includes(n)||e.push(n)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,r=Object.keys(t)
for(let i=0;i<r.length;i++){const n=t[r[i]]
e.set(n.name,n)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty(((t,r)=>{We(r)&&(r.key=t,r.name=t,e[t]=r)})),e}static get fields(){const e=new Map
return this.eachComputedProperty(((t,r)=>{We(r)?e.set(t,r.kind):He(r)&&e.set(t,"attribute")})),e}static eachRelationship(e,t){this.relationshipsByName.forEach(((r,i)=>{e.call(t,i,r)}))}static eachRelatedType(e,t){const r=this.relatedTypes
for(let i=0;i<r.length;i++){const n=r[i]
e.call(t,n)}}static determineRelationshipType(e,t){const r=e.name,i=e.kind,n=this.inverseFor(r,t)
return n?"belongsTo"===n.kind?"belongsTo"===i?"oneToOne":"manyToOne":"belongsTo"===i?"oneToMany":"manyToMany":"belongsTo"===i?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty(((t,r)=>{He(r)&&(r.key=t,r.name=t,e.set(t,r))})),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute(((t,r)=>{r.type&&e.set(t,r.type)})),e}static eachAttribute(e,t){this.attributes.forEach(((r,i)=>{e.call(t,i,r)}))}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach(((r,i)=>{e.call(t,i,r)}))}static toString(){return`model:${this.modelName}`}}function We(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function He(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}fe((L=Ve).prototype,"isEmpty",[W.Vv]),fe(L.prototype,"isLoading",[W.Vv]),fe(L.prototype,"isLoaded",[W.Vv]),fe(L.prototype,"hasDirtyAttributes",[W.Vv]),fe(L.prototype,"isSaving",[W.Vv]),fe(L.prototype,"isDeleted",[W.Vv]),fe(L.prototype,"isNew",[W.Vv]),fe(L.prototype,"isValid",[W.Vv]),fe(L.prototype,"dirtyType",[W.Vv]),fe(L.prototype,"isError",[W.Vv]),fe(L.prototype,"id",[$e]),fe(L.prototype,"currentState",[$e]),fe(L.prototype,"errors",[Ue]),fe(L.prototype,"adapterError",[W.Vv]),ce(Ve,"isModel",!0),ce(Ve,"modelName",null),fe(L,"inverseMap",[Ue]),fe(L,"relationships",[Ue]),fe(L,"relationshipNames",[Ue]),fe(L,"relatedTypes",[Ue]),fe(L,"relationshipsByName",[Ue]),fe(L,"relationshipsObject",[Ue]),fe(L,"fields",[Ue]),fe(L,"attributes",[Ue]),fe(L,"transformedAttributes",[Ue]),Ve.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[G.pm].saveRecord(this,e)),t},Ve.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then((e=>(this.unloadRecord(),this)))},Ve.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[G.pm].unloadRecord(this)},Ve.prototype.hasMany=function(e){return Ee(this).referenceFor("hasMany",e)},Ve.prototype.belongsTo=function(e){return Ee(this).referenceFor("belongsTo",e)},Ve.prototype.serialize=function(e){return(0,Z.upgradeStore)(this[G.pm]),this[G.pm].serializeRecord(this,e)},Ve.prototype._createSnapshot=function(){const e=this[G.pm]
if((0,Z.upgradeStore)(e),!e._fetchManager){const t=(0,oe.A)(r(1491)).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,S.o)(this))},Ve.prototype.deleteRecord=function(){this.currentState&&this[G.pm].deleteRecord(this)},Ve.prototype.changedAttributes=function(){return(0,n.oX)(this).changedAttrs((0,S.o)(this))},Ve.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[G.pm]._join((()=>{(0,n.oX)(this).rollbackAttrs((0,S.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()}))},Ve.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,S.o)(this)
return this.isReloading=!0,this[G.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((()=>this)).finally((()=>{this.isReloading=!1}))},(0,H.sg)(Ve.prototype,"isReloading",!1),Ve.prototype._createProps=null,Ve.prototype._secretInit=null
class Ge{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),r=t.attributes,i=Object.create(null)
r.forEach(((e,t)=>i[t]=e))
const n=t.relationshipsObject||null,s=new Map
for(const a of Object.values(i))s.set(a.name,a)
for(const a of Object.values(n))s.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(s.values())},attributes:i,relationships:n,fields:s}
return this._schemas.set(e,o),o}fields(e){const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=le(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===Ye(this.store,t)&&(this._typeMisses.add(t),1))}}function Ye(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const r=e._modelFactoryCache
let i=r[t]
if(!i){if(i=(0,k.getOwner)(e).factoryFor(`model:${t}`),i||(i=function(e,t){const r=(0,k.getOwner)(e),i=r.factoryFor(`mixin:${t}`),n=i&&i.class
if(n){const e=Ve.extend(n)
e.__isMixin=!0,e.__mixin=n,r.register(`model:${t}`,e)}return r.factoryFor(`model:${t}`)}(e,t)),!i)return null
const n=i.class
n.isModel&&(n.modelName&&Object.prototype.hasOwnProperty.call(n,"modelName")||Object.defineProperty(n,"modelName",{value:t})),r[t]=i}return i}function Ke(e,t){const r=e.type,i={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:Ze}}
return(0,k.setOwner)(i,(0,k.getOwner)(this)),Ye(this,r).class.create(i)}function Qe(e){e.destroy()}function Je(e){const t=Ye(this,le(e)),r=t&&t.class?t.class:null
if(r&&r.isModel&&!this._forceShim)return r}function Ze(e,t,r,i){(0,n.TP)(e,r),n.i.set(e,i),(0,n.Wz)(e,t)}Ge.prototype.doesTypeExist=function(e){return(0,z.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this.hasResource({type:e})},Ge.prototype.attributesDefinitionFor=function(e){(0,z.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},Ge.prototype.relationshipsDefinitionFor=function(e){(0,z.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}
var Xe=r(6082),et=r(6076)
const tt="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},rt=new Set(["updateRecord","createRecord","deleteRecord"]),it=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),nt={async request(e){let t
try{t=await tt(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const r=!t.ok||t.status>=400,i=e.request.op,n=Boolean(i&&rt.has(i))
if(!r&&!n&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const r=(0,et.f)(e)
return new Response(e.body,Object.assign(r,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let s=""
{const r=t.body.getReader(),i=new TextDecoder
let n=e.hasRequestedStream,o=n?new TransformStream:null,a=o?.writable.getWriter()
for(n&&(e.request.signal?.addEventListener("abort",(()=>{n&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable));;){const{done:t,value:c}=await r.read()
if(t){n&&(n=!1,await a.ready,await a.close())
break}if(s+=i.decode(c,{stream:!0}),n)await a.ready,await a.write(c)
else if(e.hasRequestedStream){const t=new TextEncoder
n=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",(()=>{n&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(s)),await a.ready,await a.write(c)}}n&&(n=!1,await a.ready,await a.close())}if(r){let r
try{r=JSON.parse(s)}catch{}const i=Array.isArray(r)?r:null!==(o=r)&&"object"==typeof o&&Array.isArray(r.errors)?r.errors:null,n=t.statusText||it.get(t.status)||"Unknown Request Error",a=`[${t.status} ${n}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,c=i?new AggregateError(i,a):new Error(a)
throw c.status=t.status,c.statusText=n,c.isRequestError=!0,c.code=c.status,c.name=c.statusText.replaceAll(" ","")+"Error",c.content=r,c}return JSON.parse(s)
var o}}
function st(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ot extends S.Ay{constructor(e){super(e),st(this,"adapterFor",M),st(this,"serializerFor",j),st(this,"pushPayload",x),st(this,"normalize",P),st(this,"serializeRecord",D),"requestManager"in this||(this.requestManager=new Xe.Ay,this.requestManager.use([O,nt])),this.requestManager.useCache(S.lL)}createSchemaService(){return new Ge(this)}createCache(e){return new o(e)}instantiateRecord(e,t){return Ke.call(this,e,t)}teardownRecord(e){Qe.call(this,e)}modelFor(e){return Je.call(this,e)||super.modelFor(e)}destroy(){F.call(this),super.destroy()}}},9781:(e,t,r)=>{r.d(t,{F:()=>s})
var i=r(4471),n=r(1603)
function s(e,t,r,s){let o=r[0],a=r.slice(1)
return function(...r){if(o&&"function"==typeof o[t]){if(s&&s.value){let e=r.pop()
r.push((0,i.get)(e,s.value))}return o[t](...a,...r)}(0,n.assert)(`The first argument passed to the \`${e}\` helper should be a Task object (without quotes); you passed ${o}`,!1)}}}}])

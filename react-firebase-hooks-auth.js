!function(e,r,t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},n.apply(this,arguments)};function u(e,r,t,n){return new(t||(t=Promise))((function(u,a){function s(e){try{o(n.next(e))}catch(e){a(e)}}function i(e){try{o(n.throw(e))}catch(e){a(e)}}function o(e){var r;e.done?u(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,i)}o((n=n.apply(e,r||[])).next())}))}function a(e,r){var t,n,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(u=2&a[0]?n.return:a[0]?n.throw||((u=n.return)&&u.call(n),0):n.next)&&!(u=u.call(n,a[1])).done)return u;switch(n=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(u=s.trys,(u=u.length>0&&u[u.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){s.label=a[1];break}if(6===a[0]&&s.label<u[1]){s.label=u[1],u=a;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(a);break}u[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],n=0}finally{t=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var s=function(e){return{loading:null==e,value:e}},i=function(e){var r=e?e():void 0,u=t.useReducer((function(e,r){switch(r.type){case"error":return n(n({},e),{error:r.error,loading:!1,value:void 0});case"reset":return s(r.defaultValue);case"value":return n(n({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),s(r)),a=u[0],i=u[1],o=t.useCallback((function(){var r=e?e():void 0;i({type:"reset",defaultValue:r})}),[e]),c=t.useCallback((function(e){i({type:"error",error:e})}),[]),l=t.useCallback((function(e){i({type:"value",value:e})}),[]);return t.useMemo((function(){return{error:a.error,loading:a.loading,reset:o,setError:c,setValue:l,value:a.value}}),[a.error,a.loading,o,c,l,a.value])},o=function(e,n){var u=t.useCallback((function(e,t){var u=new r.OAuthProvider(n);return e&&e.forEach((function(e){return u.addScope(e)})),t&&u.setCustomParameters(t),u}),[n]);return c(e,u)},c=function(e,n){var s=t.useState(),i=s[0],o=s[1],c=t.useState(),l=c[0],f=c[1],d=t.useState(!1),v=d[0],h=d[1],b=t.useCallback((function(t,s){return u(void 0,void 0,void 0,(function(){var u,i,c;return a(this,(function(a){switch(a.label){case 0:h(!0),o(void 0),a.label=1;case 1:return a.trys.push([1,3,4,5]),u=n(t,s),[4,r.signInWithPopup(e,u)];case 2:return i=a.sent(),f(i),[2,i];case 3:return c=a.sent(),o(c),[3,5];case 4:return h(!1),[7];case 5:return[2]}}))}))}),[e,n]);return[b,l,v,i]};e.useAuthState=function(e,n){var s=i((function(){return e.currentUser})),o=s.error,c=s.loading,l=s.setError,f=s.setValue,d=s.value;return t.useEffect((function(){var t=r.onAuthStateChanged(e,(function(e){return u(void 0,void 0,void 0,(function(){var r;return a(this,(function(t){switch(t.label){case 0:if(!(null==n?void 0:n.onUserChanged))return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,n.onUserChanged(e)];case 2:return t.sent(),[3,4];case 3:return r=t.sent(),l(r),[3,4];case 4:return f(e),[2]}}))}))}),l);return function(){t()}}),[e]),[d,c,o]},e.useCreateUserWithEmailAndPassword=function(e,n){var s=t.useState(),i=s[0],o=s[1],c=t.useState(),l=c[0],f=c[1],d=t.useState(!1),v=d[0],h=d[1],b=t.useCallback((function(t,s){return u(void 0,void 0,void 0,(function(){var u,i;return a(this,(function(a){switch(a.label){case 0:h(!0),o(void 0),a.label=1;case 1:return a.trys.push([1,5,6,7]),[4,r.createUserWithEmailAndPassword(e,t,s)];case 2:return u=a.sent(),n&&n.sendEmailVerification&&u.user?[4,r.sendEmailVerification(u.user,n.emailVerificationOptions)]:[3,4];case 3:a.sent(),a.label=4;case 4:return f(u),[2,u];case 5:return i=a.sent(),o(i),[3,7];case 6:return h(!1),[7];case 7:return[2]}}))}))}),[e,n]);return[b,l,v,i]},e.useDeleteUser=function(e){var r=t.useState(),n=r[0],s=r[1],i=t.useState(!1),o=i[0],c=i[1],l=t.useCallback((function(){return u(void 0,void 0,void 0,(function(){var r;return a(this,(function(t){switch(t.label){case 0:c(!0),s(void 0),t.label=1;case 1:return t.trys.push([1,5,6,7]),e.currentUser?[4,e.currentUser.delete()]:[3,3];case 2:return t.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return r=t.sent(),s(r),[2,!1];case 6:return c(!1),[7];case 7:return[2]}}))}))}),[e]);return[l,o,n]},e.useIdToken=function(e,n){var s=i((function(){return e.currentUser})),o=s.error,c=s.loading,l=s.setError,f=s.setValue,d=s.value;return t.useEffect((function(){var t=r.onIdTokenChanged(e,(function(e){return u(void 0,void 0,void 0,(function(){var r;return a(this,(function(t){switch(t.label){case 0:if(!(null==n?void 0:n.onUserChanged))return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,n.onUserChanged(e)];case 2:return t.sent(),[3,4];case 3:return r=t.sent(),l(r),[3,4];case 4:return f(e),[2]}}))}))}),l);return function(){t()}}),[e]),[d,c,o]},e.useSendEmailVerification=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(){return u(void 0,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:l(!0),i(void 0),n.label=1;case 1:return n.trys.push([1,5,6,7]),e.currentUser?[4,r.sendEmailVerification(e.currentUser)]:[3,3];case 2:return n.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return t=n.sent(),i(t),[2,!1];case 6:return l(!1),[7];case 7:return[2]}}))}))}),[e]);return[f,c,s]},e.useSendPasswordResetEmail=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(t,n){return u(void 0,void 0,void 0,(function(){var u;return a(this,(function(a){switch(a.label){case 0:l(!0),i(void 0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,r.sendPasswordResetEmail(e,t,n)];case 2:return a.sent(),[2,!0];case 3:return u=a.sent(),i(u),[2,!1];case 4:return l(!1),[7];case 5:return[2]}}))}))}),[e]);return[f,c,s]},e.useSendSignInLinkToEmail=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(t,n){return u(void 0,void 0,void 0,(function(){var u;return a(this,(function(a){switch(a.label){case 0:l(!0),i(void 0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,r.sendSignInLinkToEmail(e,t,n)];case 2:return a.sent(),[2,!0];case 3:return u=a.sent(),i(u),[2,!1];case 4:return l(!1),[7];case 5:return[2]}}))}))}),[e]);return[f,c,s]},e.useSignInWithApple=function(e){return o(e,"apple.com")},e.useSignInWithEmailAndPassword=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(),c=o[0],l=o[1],f=t.useState(!1),d=f[0],v=f[1],h=t.useCallback((function(t,n){return u(void 0,void 0,void 0,(function(){var u,s;return a(this,(function(a){switch(a.label){case 0:v(!0),i(void 0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,r.signInWithEmailAndPassword(e,t,n)];case 2:return u=a.sent(),l(u),[2,u];case 3:return s=a.sent(),i(s),[3,5];case 4:return v(!1),[7];case 5:return[2]}}))}))}),[e]);return[h,c,d,s]},e.useSignInWithEmailLink=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(),c=o[0],l=o[1],f=t.useState(!1),d=f[0],v=f[1],h=t.useCallback((function(t,n){return u(void 0,void 0,void 0,(function(){var u,s;return a(this,(function(a){switch(a.label){case 0:v(!0),i(void 0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,r.signInWithEmailLink(e,t,n)];case 2:return u=a.sent(),l(u),[2,u];case 3:return s=a.sent(),i(s),[3,5];case 4:return v(!1),[7];case 5:return[2]}}))}))}),[e]);return[h,c,d,s]},e.useSignInWithFacebook=function(e){var n=t.useCallback((function(e,t){var n=new r.FacebookAuthProvider;return e&&e.forEach((function(e){return n.addScope(e)})),t&&n.setCustomParameters(t),n}),[]);return c(e,n)},e.useSignInWithGithub=function(e){var n=t.useCallback((function(e,t){var n=new r.GithubAuthProvider;return e&&e.forEach((function(e){return n.addScope(e)})),t&&n.setCustomParameters(t),n}),[]);return c(e,n)},e.useSignInWithGoogle=function(e){var n=t.useCallback((function(e,t){var n=new r.GoogleAuthProvider;return e&&e.forEach((function(e){return n.addScope(e)})),t&&n.setCustomParameters(t),n}),[]);return c(e,n)},e.useSignInWithMicrosoft=function(e){return o(e,"microsoft.com")},e.useSignInWithTwitter=function(e){var n=t.useCallback((function(e,t){var n=new r.TwitterAuthProvider;return e&&e.forEach((function(e){return n.addScope(e)})),t&&n.setCustomParameters(t),n}),[]);return c(e,n)},e.useSignInWithYahoo=function(e){return o(e,"yahoo.com")},e.useSignOut=function(e){var r=t.useState(),n=r[0],s=r[1],i=t.useState(!1),o=i[0],c=i[1],l=t.useCallback((function(){return u(void 0,void 0,void 0,(function(){var r;return a(this,(function(t){switch(t.label){case 0:c(!0),s(void 0),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,e.signOut()];case 2:return t.sent(),[2,!0];case 3:return r=t.sent(),s(r),[2,!1];case 4:return c(!1),[7];case 5:return[2]}}))}))}),[e]);return[l,o,n]},e.useUpdateEmail=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(t){return u(void 0,void 0,void 0,(function(){var n;return a(this,(function(u){switch(u.label){case 0:l(!0),i(void 0),u.label=1;case 1:return u.trys.push([1,5,6,7]),e.currentUser?[4,r.updateEmail(e.currentUser,t)]:[3,3];case 2:return u.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return n=u.sent(),i(n),[2,!1];case 6:return l(!1),[7];case 7:return[2]}}))}))}),[e]);return[f,c,s]},e.useUpdatePassword=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(t){return u(void 0,void 0,void 0,(function(){var n;return a(this,(function(u){switch(u.label){case 0:l(!0),i(void 0),u.label=1;case 1:return u.trys.push([1,5,6,7]),e.currentUser?[4,r.updatePassword(e.currentUser,t)]:[3,3];case 2:return u.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return n=u.sent(),i(n),[2,!1];case 6:return l(!1),[7];case 7:return[2]}}))}))}),[e]);return[f,c,s]},e.useUpdateProfile=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(t){return u(void 0,void 0,void 0,(function(){var n;return a(this,(function(u){switch(u.label){case 0:l(!0),i(void 0),u.label=1;case 1:return u.trys.push([1,5,6,7]),e.currentUser?[4,r.updateProfile(e.currentUser,t)]:[3,3];case 2:return u.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return n=u.sent(),i(n),[2,!1];case 6:return l(!1),[7];case 7:return[2]}}))}))}),[e]);return[f,c,s]},e.useVerifyBeforeUpdateEmail=function(e){var n=t.useState(),s=n[0],i=n[1],o=t.useState(!1),c=o[0],l=o[1],f=t.useCallback((function(t,n){return u(void 0,void 0,void 0,(function(){var u;return a(this,(function(a){switch(a.label){case 0:l(!0),i(void 0),a.label=1;case 1:return a.trys.push([1,5,6,7]),e.currentUser?[4,r.verifyBeforeUpdateEmail(e.currentUser,t,n)]:[3,3];case 2:return a.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return u=a.sent(),i(u),[2,!1];case 6:return l(!1),[7];case 7:return[2]}}))}))}),[e]);return[f,c,s]},Object.defineProperty(e,"__esModule",{value:!0})}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},auth,react);
//# sourceMappingURL=react-firebase-hooks-auth.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{OpKh:function(r,t,e){"use strict";e.r(t),e.d(t,"AuthenticationModule",function(){return O});var o=e("ofXK"),s=e("3Pt+"),i=e("PCNd"),n=e("tyNb"),a=e("wHSu"),c=e("fXoL");let d=(()=>{class r{constructor(){this.dataToast={}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=c.Jb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var b=e("6NWb"),l=e("1kSV");function u(r,t){if(1&r){const r=c.Ub();c.Tb(0,"ngb-toast",1),c.dc("hidden",function(){return c.uc(r),c.fc().showToast=!1}),c.Dc(1),c.Sb()}if(2&r){const r=c.fc();c.Cb(r.classToast),c.kc("autohide",!0)("delay",4e3),c.Ab(1),c.Fc(" ",r.message,"\n")}}let h=(()=>{class r{constructor(){this.showToast=!1,this.message="",this.classToast=""}ngOnInit(){}ngOnChanges(r){const{showToast:t,classToast:e,message:o}=this.dataToast;this.showToast=t,this.message=o,this.classToast=e}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c.Hb({type:r,selectors:[["app-toast"]],inputs:{dataToast:"dataToast"},features:[c.yb],decls:1,vars:1,consts:[[3,"class","autohide","delay","hidden",4,"ngIf"],[3,"autohide","delay","hidden"]],template:function(r,t){1&r&&c.Bc(0,u,2,5,"ngb-toast",0),2&r&&c.kc("ngIf",t.showToast)},directives:[o.k,l.i],styles:[".success[_ngcontent-%COMP%]{margin:1.2rem;background:#026873}.danger[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]{position:fixed;top:10vh;right:0;z-index:1200;color:#fff}.danger[_ngcontent-%COMP%]{margin:1.2em;background:#f20c49}"]}),r})(),m=(()=>{class r{constructor(r){this.toastService=r,this.faPiggyBank=a.e}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)(c.Nb(d))},r.\u0275cmp=c.Hb({type:r,selectors:[["app-authentication"]],decls:11,vars:2,consts:[[1,"container-fluid"],[1,"row","align-items-center","justify-content-center","height-100"],[1,"col-12"],[1,"row","justify-content-center","align-items-center"],[1,"logo",3,"icon"],[1,"row","justify-content-center"],[1,"col-12","col-sm-6","col-md-5","col-lg-4","col-xl-3"],[3,"dataToast"]],template:function(r,t){1&r&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"div",3),c.Ob(4,"fa-icon",4),c.Tb(5,"h1"),c.Dc(6,"Expense Tracker"),c.Sb(),c.Sb(),c.Tb(7,"div",5),c.Tb(8,"div",6),c.Ob(9,"router-outlet"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(10,"app-toast",7)),2&r&&(c.Ab(4),c.kc("icon",t.faPiggyBank),c.Ab(6),c.kc("dataToast",t.toastService.dataToast))},directives:[b.a,n.f,h],styles:[".height-100[_ngcontent-%COMP%]{height:100vh}.logo[_ngcontent-%COMP%]{color:#03a696;font-size:4vw;margin-right:8px}"]}),r})();var g=e("E/Z5"),f=e("em/L");function p(r,t){1&r&&(c.Tb(0,"div"),c.Tb(1,"small",13),c.Dc(2,"Wrong password or email"),c.Sb(),c.Ob(3,"br"),c.Sb())}const w=function(){return["/authentication/register"]};let v=(()=>{class r{constructor(r,t,e){this.loginService=r,this.currentUserService=t,this.router=e,this.errorPasswordOrEmail=!1,this.rePassword=/^(([^<>()\[\]\\.,;:\s@\u201d]+(\.[^<>()\[\]\\.,;:\s@\u201d]+)*)|(\u201c.+\u201d))@((\[[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}])|(([a-zA-Z\-0\u20139]+\.)+[a-zA-Z]{2,}))$/,this.minLengthPassword=4,this.formLogin=new s.d({email:new s.b("",[s.r.required,s.r.pattern(this.rePassword),s.r.minLength(8),s.r.maxLength(40)]),password:new s.b("",[s.r.required,s.r.minLength(this.minLengthPassword)])})}ngOnInit(){}login(){this.loginService.login(this.formLogin.value).subscribe(r=>{this.currentUserService.saveUser(r),this.router.navigateByUrl("/dashboard")},r=>{console.log(r),this.showError()})}showError(){this.errorPasswordOrEmail=!0,setTimeout(()=>this.errorPasswordOrEmail=!1,3e3)}}return r.\u0275fac=function(t){return new(t||r)(c.Nb(g.a),c.Nb(f.a),c.Nb(n.a))},r.\u0275cmp=c.Hb({type:r,selectors:[["app-login"]],decls:19,vars:5,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-center"],[1,"form",3,"formGroup"],[1,"form-group"],["for","email-login"],["type","email","required","","placeholder","user@gmail.com","id","email-login","formControlName","email",1,"form-control"],["for","password-login"],["type","password","required","","id","password-login","formControlName","password",1,"form-control"],[4,"ngIf"],[1,"control-options"],[1,"a-router-link",3,"routerLink"],[1,"btn","btn-primary","btn-sm","float-right",3,"disabled","click"],[1,"form-text","text-muted"]],template:function(r,t){1&r&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"h5",2),c.Dc(3,"Login"),c.Sb(),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"label",5),c.Dc(7,"Email"),c.Sb(),c.Ob(8,"input",6),c.Sb(),c.Tb(9,"div",4),c.Tb(10,"label",7),c.Dc(11,"Password"),c.Sb(),c.Ob(12,"input",8),c.Sb(),c.Bc(13,p,4,0,"div",9),c.Tb(14,"div",10),c.Tb(15,"a",11),c.Dc(16,"Don't have an account?"),c.Sb(),c.Tb(17,"button",12),c.dc("click",function(){return t.login()}),c.Dc(18," Login "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&r&&(c.Ab(4),c.kc("formGroup",t.formLogin),c.Ab(9),c.kc("ngIf",t.errorPasswordOrEmail),c.Ab(2),c.kc("routerLink",c.nc(4,w)),c.Ab(2),c.kc("disabled",!t.formLogin.valid))},directives:[s.j,s.e,s.a,s.p,s.i,s.c,o.k,n.d],styles:[""]}),r})();var T=e("tk/3");let S=(()=>{class r{constructor(r){this.httpClient=r,this.URL_API="/register"}register(r){return this.httpClient.post(this.URL_API,r)}}return r.\u0275fac=function(t){return new(t||r)(c.ac(T.b))},r.\u0275prov=c.Jb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function k(r,t){if(1&r&&(c.Tb(0,"div"),c.Tb(1,"small",13),c.Dc(2),c.Sb(),c.Ob(3,"br"),c.Sb()),2&r){const r=c.fc();c.Ab(2),c.Ec(r.messageError)}}const y=function(){return["/authentication"]},P=[{path:"",component:m,children:[{path:"",component:v},{path:"register",component:(()=>{class r{constructor(r,t){this.registerService=r,this.toastService=t,this.minLengthPassword=4,this.error=!1,this.messageError="",this.rePassword=/^(([^<>()\[\]\\.,;:\s@\u201d]+(\.[^<>()\[\]\\.,;:\s@\u201d]+)*)|(\u201c.+\u201d))@((\[[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}])|(([a-zA-Z\-0\u20139]+\.)+[a-zA-Z]{2,}))$/,this.formRegister=new s.d({email:new s.b("",[s.r.required,s.r.pattern(this.rePassword),s.r.minLength(8),s.r.maxLength(50)]),password:new s.b("",[s.r.required,s.r.minLength(this.minLengthPassword)])})}ngOnInit(){}register(){this.registerService.register(this.formRegister.value).subscribe(r=>{r.data&&(this.toastService.dataToast={showToast:!0,classToast:"success",message:"successfully registered user"})},r=>{this.showError(r.error.message)})}errorPassword(){var r;(null===(r=this.formRegister.get("password"))||void 0===r?void 0:r.value.length)<this.minLengthPassword?this.showError("Password requires at least 4 characters"):this.error=!1}showError(r){this.error=!0,this.messageError=r,this.closeError(3e3)}closeError(r){setTimeout(()=>{this.error=!1,this.messageError=""},r)}}return r.\u0275fac=function(t){return new(t||r)(c.Nb(S),c.Nb(d))},r.\u0275cmp=c.Hb({type:r,selectors:[["app-register"]],decls:19,vars:5,consts:[[1,"card"],[1,"card-body"],[1,"card-title","text-center"],[1,"form",3,"formGroup"],[1,"form-group"],["for","email"],["type","email","required","","placeholder","user@gmail.com","id","email","formControlName","email",1,"form-control"],["for","password"],["type","password","required","","id","password","formControlName","password",1,"form-control",3,"keyup"],[4,"ngIf"],[1,"control-options"],[1,"a-router-link",3,"routerLink"],[1,"btn","btn-primary","btn-sm","float-right",3,"disabled","click"],[1,"form-text","text-muted"]],template:function(r,t){1&r&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"h5",2),c.Dc(3,"Create account"),c.Sb(),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"label",5),c.Dc(7,"Email"),c.Sb(),c.Ob(8,"input",6),c.Sb(),c.Tb(9,"div",4),c.Tb(10,"label",7),c.Dc(11,"Password"),c.Sb(),c.Tb(12,"input",8),c.dc("keyup",function(){return t.errorPassword()}),c.Sb(),c.Sb(),c.Bc(13,k,4,1,"div",9),c.Tb(14,"div",10),c.Tb(15,"a",11),c.Dc(16,"Login"),c.Sb(),c.Tb(17,"button",12),c.dc("click",function(){return t.register()}),c.Dc(18," Create "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&r&&(c.Ab(4),c.kc("formGroup",t.formRegister),c.Ab(9),c.kc("ngIf",t.error),c.Ab(2),c.kc("routerLink",c.nc(4,y)),c.Ab(2),c.kc("disabled",!t.formRegister.valid))},directives:[s.j,s.e,s.a,s.p,s.i,s.c,o.k,n.d],styles:[""]}),r})()}]}];let L=(()=>{class r{}return r.\u0275mod=c.Lb({type:r}),r.\u0275inj=c.Kb({factory:function(t){return new(t||r)},imports:[[n.e.forChild(P)],n.e]}),r})(),O=(()=>{class r{}return r.\u0275mod=c.Lb({type:r}),r.\u0275inj=c.Kb({factory:function(t){return new(t||r)},imports:[[o.b,L,b.b,s.f,s.o,i.SharedModule]]}),r})()}}]);
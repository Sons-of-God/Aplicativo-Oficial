(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2473],{14768:(e,t,i)=>{"use strict";var s,r;i.d(t,{Oy:()=>h,Sx:()=>a,lF:()=>p,ld:()=>o,o9:()=>l,z:()=>n,zH:()=>d}),function(e){e[e.TRILL=1180]="TRILL",e[e.MUSICALLY=1233]="MUSICALLY"}(s||(s={})),function(e){e.TWITTER="twitter",e.GOOGLE="google",e.FACEBOOK="facebook",e.INSTAGRAM="instagram",e.VK="vk",e.KAKAOTALK="kakaotalk",e.LINE="line",e.APPLE="apple"}(r||(r={}));const a="4954e33ea2a4395e59ecbc20761bd889",o="1862952583919182",n="1569196861",d="6961453";var c;!function(e){e.POPUP="popup",e.PAGE="page",e.NONE="none"}(c||(c={}));const l={1233:692,1180:747},h={google:395,twitter:396,facebook:397,instagram:398,line:529,vk:528,kakaotalk:99},p="socialOauth";var g;!function(e){e[e.Login=0]="Login",e[e.Signup=1]="Signup",e[e.Verify=2]="Verify"}(g||(g={}))},56232:(e,t,i)=>{"use strict";i.d(t,{Q:()=>P});var s=i(22403),r=i(44943),a=i(43549),o=i(99327),n=i(85247),d=i(60552),c=i(90950),l=i(82941),h=i(46273),p=i(67080),g=i(13421),u=i(82874),m=i(55823),b=i(21249),_=i(80986),k=i(4389);const v={ar:"ar","bn-IN":"bn","ceb-PH":"ceb","cs-CZ":"cs-CZ","de-DE":"de","el-GR":"el-GR",en:"en",es:"es","fil-PH":"fil",fr:"fr","gu-IN":"gu-IN","hi-IN":"hi","hu-HU":"hu-HU","id-ID":"id","it-IT":"it","ja-JP":"ja","jv-ID":"jv","kn-IN":"kn","ko-KR":"ko","ml-IN":"ml-IN","mr-IN":"mr","ms-MY":"ms","my-MM":"my","nl-NL":"nl-NL","or-IN":"or","pa-IN":"pa-IN","pl-PL":"pl","pt-BR":"pt-BR","ro-RO":"ro-RO","ru-RU":"ru","sv-SE":"sv-SE","ta-IN":"ta","te-IN":"te","th-TH":"th","tr-TR":"tr","uk-UA":"uk","vi-VN":"vi","zh-Hans":"zh-Hant","zh-Hant-TW":"zh-Hant"},R={ar:{label:"العربية",passportLang:"ar"},"bn-IN":{label:"বাঙ্গালি (ভারত)",passportLang:"bn"},"ceb-PH":{label:"Cebuano (Pilipinas)",passportLang:"ceb"},"cs-CZ":{label:"Čeština (Česká republika)",passportLang:"cs"},"de-DE":{label:"Deutsch (Deutschland)",passportLang:"de"},"el-GR":{label:"Ελληνικά (Ελλάδα)",passportLang:"el"},en:{label:"English",passportLang:"en"},es:{label:"Español",passportLang:"es"},"fi-FI":{label:"Suomi (Suomi)",passportLang:"fi"},"fil-PH":{label:"Filipino (Pilipinas)",passportLang:"fil"},fr:{label:"Français",passportLang:"fr"},"he-IL":{label:"עברית (ישראל)",passportLang:"he"},"hi-IN":{label:"हिंदी",passportLang:"hi"},"hu-HU":{label:"Magyar (Magyarország)",passportLang:"hu"},"id-ID":{label:"Bahasa Indonesia (Indonesia)",passportLang:"id"},"it-IT":{label:"Italiano (Italia)",passportLang:"it"},"ja-JP":{label:"日本語（日本）",passportLang:"ja"},"jv-ID":{label:"Basa Jawa (Indonesia)",passportLang:"jv"},"km-KH":{label:"ខ្មែរ (កម្ពុជា)",passportLang:"km"},"ko-KR":{label:"한국어 (대한민국)",passportLang:"ko"},"ms-MY":{label:"Bahasa Melayu (Malaysia)",passportLang:"ms"},"my-MM":{label:"မြန်မာ (မြန်မာ)",passportLang:"my"},"nl-NL":{label:"Nederlands (Nederland)",passportLang:"nl"},"pl-PL":{label:"Polski (Polska)",passportLang:"pl"},"pt-BR":{label:"Português (Brasil)",passportLang:"pt"},"ro-RO":{label:"Română (Romania)",passportLang:"ro"},"ru-RU":{label:"Русский",passportLang:"ru"},"sv-SE":{label:"Svenska (Sverige)",passportLang:"sv"},"th-TH":{label:"ไทย (ไทย)",passportLang:"th"},"tr-TR":{label:"Türkçe (Türkiye)",passportLang:"tr"},"uk-UA":{label:"Українська (Україна)",passportLang:"uk"},ur:{label:"اردو",passportLang:"ur"},"vi-VN":{label:"Tiếng Việt (Việt Nam)",passportLang:"vi"},"zh-Hans":{label:"简体中文",passportLang:"zh-Hant"},"zh-Hant-TW":{label:"繁體中文",passportLang:"zh-Hant"}};var C=i(14768),f=i(73459),y=i(56132),w=i(35161);let P=class{constructor(e,t,i){this.userRegion=e,this.slardar=t,this.loginReport=i,this.appContext$=new d.t(1),this.bizContext$=new d.t(1),this.overrideRegionCode=null,this.requestInfo={},this.extraParams={aid:1459,is_sso:!1,account_sdk_source:"web",region:"",language:"en",did:""}}setContext(e,t,i={}){var s,r,a;this.appContext$.next(Object.assign(Object.assign({},e),i)),this.appContext=Object.assign(Object.assign({},e),i),this.bizContext$.next(t),this.bizContext=t,this.extraParams.region=e.region,this.extraParams.language=(null===(s=R[e.language])||void 0===s?void 0:s.passportLang)||"en",this.extraParams.did=null===(r=this.appContext)||void 0===r?void 0:r.wid,C.Oy.apple=C.o9[null!==(a=e.appId)&&void 0!==a?a:1180]}setOverrideRegionCode(e){this.overrideRegionCode=e}initAccountSdkInstance(){return this.appContext$.pipe((0,c.z)((e=>{var t,s,r,a,n,d;if(this.sdkInstance)return(0,l.of)(this.sdkInstance);let c={multi_login:1,did:null!==(s=null===(t=this.appContext)||void 0===t?void 0:t.wid)&&void 0!==s?s:""};this.overrideRegionCode&&(c=Object.assign(Object.assign({},c),{reg_store_region:this.overrideRegionCode,user_selected_region:!0}));const{language:u,appId:k,phoenix:R,targetAid:C}=e,y="useast5"===(null===(r=this.bizContext)||void 0===r?void 0:r.idc)||"useast8"===(null===(a=this.bizContext)||void 0===a?void 0:a.idc),w="useast2a"===(null===(n=this.bizContext)||void 0===n?void 0:n.idc)||"ie"===(null===(d=this.bizContext)||void 0===d?void 0:d.idc),P=R?"https://www.tiktok.in":"https://www.tiktok.com";return(0,h.D)(Promise.resolve().then(i.bind(i,44943)).then((({WebInterfaceSdk:e})=>e))).pipe((0,m.U)((e=>{var t,i,s;return new e({aid:1459,host:P,isOversea:!0,did:(null===(t=this.appContext)||void 0===t?void 0:t.wid)||"",region:w?"gcp":y?"ttp":1180===k?"sg":"va",printLog:!1,pageLang:u,language:v[u],mode:(0,f.i)(y),starlingZoneHost:(null===(s=null===(i=this.bizContext)||void 0===i?void 0:i.domains)||void 0===s?void 0:s.starling)||"",captchaHost:P,captchaOptions:{fpCookieOption:{domain:R?"www.tiktok.in":".tiktok.com",sameSite:"None",secure:!0}},generalParams:c,xhrConfig:{getDynamicConfig:e=>{var t;const i=this.userRegion.getRegionDomain(),s=this.userRegion.getTtWid();this.requestInfo=Object.assign(Object.assign({},e),{baseURL:i});const r={baseURL:i,params:{target_aid:C,shark_extra:JSON.stringify(Object.assign(Object.assign({},(0,o.K)(null!==(t=Object.assign(Object.assign({},this.appContext),this.bizContext))&&void 0!==t?t:{},!0,!0)),{app_name:"Tik_Tok_Login",aid:1459}))},headers:{}};return s&&(r.headers={"x-tt-passport-ttwid-ticket":s}),r},cacheRedirectDomain:e=>{this.userRegion.currentRegion={domain:`https://${e}`}}},getDynamicCaptchaConfig:e=>"https://m.tiktok.com"===(e=e.replace("com/","com"))||"https://web-va.tiktok.com"===e?"https://web-va.tiktok.com":"https://t.tiktok.com"===e?"https://web-sg.tiktok.com":e,acrawler:"true",acrawlerUrl:"acrawler",sdi:!0,hooks:{show:(e={})=>{console.log(">>> tiktok login hooks: show",e);const{method:t}=e;this.loginReport.checkPointShow({verification_method:t})},typing:(e={})=>{console.log(">>> tiktok login hooks: typing",e);const{method:t}=e;this.loginReport.checkPointTyping({verification_method:t})},response:(e={})=>{console.log(">>> tiktok login hooks: response",e);const{method:t,status:i,error_code:s}=e;this.loginReport.checkPointResponse({verification_method:t,status:i,error_code:s})}}})})),(0,b.b)((e=>this.sdkInstance=e)),(0,_.K)((e=>(console.error(e),(0,p.c)()))),(0,g.X)(1))})))}getAccountSdk$(e){var t,i,s;const{platform_app_id:r,email:a,mobile:o,account:n,username:d,ttWid:c,skipRegionCheck:l}=null!=e?e:{};return!l&&e&&(null!==(s=null!==(i=null!==(t=null!=r?r:a)&&void 0!==t?t:o)&&void 0!==i?i:n)&&void 0!==s?s:d)?this.userRegion.getUserRegions(e).pipe((0,k.w)((e=>{if(-1===e.error_code)throw new Error(`get user region error, error_code ${e.error_code}`);return this.initAccountSdkInstance().pipe((0,u.q)(1))}))):(e&&this.slardar.handleUserRegionEscape(e),c&&this.userRegion.setTtWid(c),this.initAccountSdkInstance().pipe((0,u.q)(1)))}sendPhoneCode(e){const{mobile:t}=e;return this.getAccountSdk$({mobile:t,triggerPath:"/passport/web/send_code/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendPhoneCode"))),(0,c.z)((i=>(0,h.D)(i.login.sendCode({mobile:t,extra_params:Object.assign(Object.assign(Object.assign({},this.extraParams),e),{is6Digits:1})}))))).pipe(this.errorHandler.bind(this))}notLoginSendCode(e){return this.getAccountSdk$({mobile:e.mobile,triggerPath:"/passport/web/send_code/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("notLoginSendCode"))),(0,c.z)((t=>(0,h.D)(t.verify.notLoginSendCode({mobile:e.mobile,extra_params:Object.assign(Object.assign({},this.extraParams),{is6Digits:1,web_verify_need_region:1,web_verify_expire_in:1200})}))))).pipe(this.errorHandler.bind(this))}sendPhoneCodeWithType(e){const{type:t,not_login_ticket:i,verify_ticket:s,method:r,mobile:a}=e;return this.getAccountSdk$({mobile:a,triggerPath:"/passport/web/send_code/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendPhoneCodeWithType"))),(0,c.z)((e=>e.extra.sendCode({type:t,method:r,mobile:a,extra_params:Object.assign(Object.assign({not_login_ticket:i,verify_ticket:s},this.extraParams),{is6Digits:1})})))).pipe(this.errorHandler.bind(this))}sendPhoneCodeForResetPwd(e){const{mobile:t,verify_ticket:i,not_login_ticket:s,type:r}=e;return this.getAccountSdk$({mobile:t,triggerPath:"/passport/web//password/reset_by_ticket/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendPhoneCodeForResetPwd"))),(0,c.z)((e=>(0,h.D)(e.forgetPwd.sendCode({mobile:t,extra_params:Object.assign(Object.assign({},this.extraParams),{verify_ticket:i,not_login_ticket:s,type:r,is6Digits:1})}))))).pipe(this.errorHandler.bind(this))}sendPhoneCodeForForceResetPwd(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendPhoneCodeForForceResetPwd"))),(0,c.z)((t=>(0,h.D)(t.extra.sendCode({type:13,code:e.code,extra_params:Object.assign(Object.assign({},this.extraParams),{conditional_login_ticket:e.conditional_login_ticket,is6Digits:1})}))))).pipe(this.errorHandler.bind(this))}validatePhoneCodeForReset(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validatePhoneCodeForReset"))),(0,c.z)((t=>(0,h.D)(t.forgetPwd.validateCode(Object.assign(Object.assign({},e),{extra_params:Object.assign({},this.extraParams)})))))).pipe(this.errorHandler.bind(this))}validatePhoneCodeForForceReset(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validatePhoneCodeForForceReset"))),(0,c.z)((t=>(0,h.D)(t.extra.validateMobile({type:13,code:e.code,extra_params:Object.assign(Object.assign({},this.extraParams),{conditional_login_ticket:e.conditional_login_ticket})}))))).pipe(this.errorHandler.bind(this))}sendEmailCodeForSignup(e){const{email:t="",password:i=""}=e;return this.getAccountSdk$({email:t,triggerPath:"/passport/web/email/send_code/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendEmailCodeForSignup"))),(0,c.z)((e=>(0,h.D)(e.login.sendEmailCode({email:t,password:i,extra_params:Object.assign(Object.assign({},this.extraParams),{email_logic_type:2})}))))).pipe(this.errorHandler.bind(this))}sendEmailCodeForLogin(e){const{email:t="",extra_params:i={}}=e;return this.getAccountSdk$({email:t,triggerPath:"/passport/web/email/send_code/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendEmailCodeForLogin"))),(0,c.z)((e=>(0,h.D)(e.login.sendEmailLoginCode({email:t,extra_params:Object.assign(Object.assign({},this.extraParams),i)}))))).pipe(this.errorHandler.bind(this))}verifySendEmailCode(e){const{verify_ticket:t}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("verifySendEmailCode"))),(0,c.z)((e=>(0,h.D)(e.verify.sendEmailCode({extra_params:Object.assign(Object.assign({},this.extraParams),{verify_ticket:t,web_verify_need_region:1,web_verify_expire_in:1200})}))))).pipe(this.errorHandler.bind(this))}sendEmailCodeForResetPwd(e){const{email:t="",not_login_ticket:i,email_logic_type:s}=e;return this.getAccountSdk$({email:t,triggerPath:"/passport/web/email/send_code/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendEmailCodeForResetPwd"))),(0,c.z)((e=>(0,h.D)(e.forgetPwd.sendEmailCode({email:t,extra_params:Object.assign(Object.assign({},this.extraParams),{not_login_ticket:i,email_logic_type:s})}))))).pipe(this.errorHandler.bind(this))}sendEmailCodeForForceResetPwd(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendEmailCodeForForceResetPwd"))),(0,c.z)((t=>(0,h.D)(t.extra.sendEmailCode({type:11,code:e.code,extra_params:Object.assign(Object.assign({},this.extraParams),{conditional_login_ticket:e.conditional_login_ticket})}))))).pipe(this.errorHandler.bind(this))}validateEmailCodeForReset(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateEmailCodeForReset"))),(0,c.z)((t=>(0,h.D)(t.forgetPwd.validateEmail(Object.assign(Object.assign({},e),{extra_params:Object.assign({},this.extraParams)})))))).pipe(this.errorHandler.bind(this))}validateEmailCodeForForceReset(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateEmailCodeForForceReset"))),(0,c.z)((t=>(0,h.D)(t.verify.validateEmail({code:e.code,extra_params:Object.assign(Object.assign({},this.extraParams),{type:11,conditional_login_ticket:e.conditional_login_ticket,web_verify_need_region:1,web_verify_expire_in:1200})}))))).pipe(this.errorHandler.bind(this))}emailCodeLogin(e){const{not_login_ticket:t,verify_ticket:i,code:s,password:r}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("emailCodeLogin"))),(0,c.z)((e=>(0,h.D)(e.login.emailCodeLogin({code:s,email:"",extra_params:Object.assign(Object.assign({},this.extraParams),{not_login_ticket:t,verify_ticket:i,password:r,type:13})}))))).pipe(this.errorHandler.bind(this))}smsLogin(e){const{mobile:t="",code:i,login_only:s,birthday:r}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("smsLogin"))),(0,c.z)((e=>(0,h.D)(e.login.smsLogin({mobile:t,code:i,login_only:s,extra_params:Object.assign({birthday:r},this.extraParams)}))))).pipe(this.errorHandler.bind(this))}smsVerify(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("smsVerify"))),(0,c.z)((t=>(0,h.D)(t.verify.notLoginValidateMobile(e))))).pipe(this.errorHandler.bind(this))}smsLoginContinue(e){const{extra_params:t}=e,i=(0,s.__rest)(e,["extra_params"]);return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("smsLoginContinue"))),(0,c.z)((e=>(0,h.D)(e.login.smsLoginContinue(Object.assign(Object.assign({},i),{extra_params:Object.assign(Object.assign({},this.extraParams),t)})))))).pipe(this.errorHandler.bind(this))}passwordLogin(e){const{password:t,username:i="",extra_params:s,mobile:r,email:a,account:o}=e;return this.getAccountSdk$({username:i,mobile:r,email:a,account:o,triggerPath:"/passport/web/user/login/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("passwordLogin"))),(0,c.z)((e=>(0,h.D)(e.login.pwdLogin({username:i.toLowerCase(),password:t,mobile:r,email:a,account:o,extra_params:Object.assign(Object.assign({},this.extraParams),s)}))))).pipe(this.errorHandler.bind(this))}verifyPwdWithoutLogin(e){const{password:t,username:i="",extra_params:s,mobile:r,email:a,account:o}=e;return this.getAccountSdk$({mobile:r,email:a,account:o,triggerPath:"/passport/web/account/verify_pwd_without_login/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("verifyPwdWithoutLogin"))),(0,c.z)((e=>(0,h.D)(e.verify.verifyPwdWithoutLogin({username:i.toLowerCase(),password:t,mobile:r,email:a,extra_params:Object.assign(Object.assign(Object.assign({account:o},this.extraParams),s),{web_verify_need_region:1,web_verify_expire_in:1200})}))))).pipe(this.errorHandler.bind(this))}resetPwdLoginByEmail(e){const{email:t,password:i,code:s="",extra_params:r}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("resetPwdLoginByEmail"))),(0,c.z)((e=>(0,h.D)(e.password.resetPwdLoginByEmail({password:i,code:s,email:t,extra_params:Object.assign(Object.assign(Object.assign({},r),this.extraParams),{rules_version:"v2"})}))))).pipe(this.errorHandler.bind(this))}changePwdByMobile(e){const{mobile:t,password:i,code:s}=e;return this.getAccountSdk$({mobile:t,triggerPath:"/passport/web//password/reset_by_ticket/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("changePwdByMobile"))),(0,c.z)((e=>(0,h.D)(e.forgetPwd.resetPwdByMobile({password:i,code:s,mobile:t,extra_params:Object.assign(Object.assign({},this.extraParams),{rules_version:"v2"})}))))).pipe(this.errorHandler.bind(this))}validateMobileCodeForLogin(e){const{code:t,verify_ticket:i,not_login_ticket:s}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateMobileCodeForLogin"))),(0,c.z)((e=>(0,h.D)(e.password.validateMobile({code:t,extra_params:Object.assign(Object.assign({},this.extraParams),{verify_ticket:i,not_login_ticket:s,type:22})}))))).pipe(this.errorHandler.bind(this))}validateEmailCodeForLogin(e){const{code:t,verify_ticket:i,not_login_ticket:s}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateEmailCodeForLogin"))),(0,c.z)((e=>(0,h.D)(e.verify.notLoginValidateEmail({email:"",code:t,extra_params:Object.assign(Object.assign({},this.extraParams),{verify_ticket:i,not_login_ticket:s,type:6,web_verify_need_region:1,web_verify_expire_in:1200})}))))).pipe(this.errorHandler.bind(this))}validateMobileCodeForReset(e){const{code:t,verify_ticket:i,not_login_ticket:s,password:r}=e;return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateMobileCodeForReset"))),(0,c.z)((e=>(0,h.D)(e.forgetPwd.resetPwdByMobile({code:t,mobile:"",password:r,extra_params:Object.assign(Object.assign({},this.extraParams),{verify_ticket:i,not_login_ticket:s})}))))).pipe(this.errorHandler.bind(this))}getOauthConfig(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("getOauthConfig"))),(0,c.z)((t=>(0,h.D)(t.account.authConfig(e))))).pipe(this.errorHandler.bind(this))}thirdLogin(e){return this.getAccountSdk$(e.login_only&&!e.profile_key?{openId:e.openid,platform_app_id:e.platform_app_id,triggerPath:"/passport/web/auth/login_only/"}:void 0).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("thirdLogin"))),(0,c.z)((t=>(0,h.D)(t.login.authLogin(Object.assign(Object.assign({},e),{extra_params:Object.assign(Object.assign({},this.extraParams),{birthday:e.birthday,platform:e.platform,id_token:e.id_token})})))))).pipe(this.errorHandler.bind(this))}thirdVerify(e){return this.getAccountSdk$({openId:e.openid,platform_app_id:e.platform_app_id,triggerPath:"/passport/web/auth/verify/"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("thirdVerify"))),(0,c.z)((t=>(0,h.D)(t.verify.authVerify(Object.assign(Object.assign({},e),{extra_params:Object.assign(Object.assign({},this.extraParams),{platform:e.platform,id_token:e.id_token,web_verify_need_region:1,web_verify_expire_in:1200})})))))).pipe(this.errorHandler.bind(this))}resetPwdByEmailTicket(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("resetPwdByEmailTicket"))),(0,c.z)((t=>(0,h.D)(t.forgetPwd.resetPwdByEmailTicket(Object.assign(Object.assign({},e),{extra_params:Object.assign(Object.assign({},this.extraParams),{rules_version:"v2"})})))))).pipe(this.errorHandler.bind(this))}resetPwdByMobileTicket(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("resetPwdByMobileTicket"))),(0,c.z)((t=>(0,h.D)(t.forgetPwd.resetPwdByMobileTicket(Object.assign(Object.assign({},e),{extra_params:Object.assign(Object.assign({},this.extraParams),{rules_version:"v2"})})))))).pipe(this.errorHandler.bind(this))}forceResetPwdByMobileTicket(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("forceResetPwdByMobileTicket"))),(0,c.z)((t=>(0,h.D)(t.forgetPwd.forceResetPwdByMobileTicket(Object.assign(Object.assign({},e),{extra_params:Object.assign(Object.assign({},this.extraParams),{rules_version:"v2"})})))))).pipe(this.errorHandler.bind(this))}forceResetPwdByEmailTicket(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("forceResetPwdByEmailTicket"))),(0,c.z)((t=>(0,h.D)(t.forgetPwd.forceResetPwdByEmailTicket(Object.assign(Object.assign({},e),{extra_params:Object.assign(Object.assign({},this.extraParams),{rules_version:"v2"})})))))).pipe(this.errorHandler.bind(this))}cancelDeleteAccount(e){return e.extra_params=Object.assign(Object.assign({},this.extraParams),e.extra_params),this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("cancelDeleteAccount"))),(0,c.z)((t=>(0,h.D)(t.cancel.cancelLogin(e))))).pipe(this.errorHandler.bind(this))}cancelDeactiveAccount(e){return this.getAccountSdk$().pipe((0,c.z)((t=>(0,h.D)(t.request({url:"/passport/web/deactivation/login/",method:"POST",data:Object.assign(Object.assign({},e),this.extraParams)}))))).pipe(this.errorHandler.bind(this))}setAccount(e){return e.extra_params=Object.assign(Object.assign({},this.extraParams),e.extra_params),this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("setAccount"))),(0,c.z)((t=>(0,h.D)(t.account.setAccount(e))))).pipe(this.errorHandler.bind(this))}getQrCodeUrl(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("getQrCodeUrl"))),(0,c.z)((t=>(0,h.D)(t.qrcodeLogin.getQrcode(e))))).pipe(this.errorHandler.bind(this))}checkQrconnect(e){return this.getAccountSdk$({ttWid:e.ttWid}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("checkQrconnect"))),(0,c.z)((t=>(0,h.D)(t.qrcodeLogin.checkQrconnect(e))))).pipe(this.errorHandler.bind(this))}usernameRegister(e){return e.extra_params=Object.assign(Object.assign({},this.extraParams),e.extra_params),this.getAccountSdk$({username:e.username,triggerPath:"/passport/web/username/register"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("usernameRegister"))),(0,c.z)((t=>(0,h.D)(t.login.usernameRegister(e))))).pipe(this.errorHandler.bind(this))}emailRegister(e){return e.extra_params=Object.assign(Object.assign({},this.extraParams),e.extra_params),this.getAccountSdk$({email:e.email,triggerPath:"/passport/web/email/register_verify_login"}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("emailRegister"))),(0,c.z)((t=>(0,h.D)(t.login.emailRegister(e))))).pipe(this.errorHandler.bind(this))}checkLogin(){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("checkLogin"))),(0,c.z)((e=>(0,h.D)(e.login.checkLogin({}))))).pipe(this.errorHandler.bind(this))}accountVerify(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("accountVerify"))),(0,c.z)((t=>(0,h.D)(t.verify.accountVerify({account:"",password:e.password,extra_params:Object.assign(Object.assign({},this.extraParams),{verify_ticket:e.verify_ticket,web_verify_need_region:1,web_verify_expire_in:1200})}))))).pipe(this.errorHandler.bind(this))}verifyTOTPCode(e){var t;const i=(0,r.encryptParams)(e,["code"]),s=null!==(t=this.userRegion.getRegionDomain())&&void 0!==t?t:"";return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("verifyTOTP"))),(0,c.z)((e=>(0,h.D)(e.request({url:`${s}/passport/web/totp/verify_without_login/`,method:"POST",params:{aid:"1459"},data:i}))))).pipe(this.errorHandler.bind(this))}switchAccount(e){const t=this.userRegion.getDomainFromIDC(e.region);return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("switchAccount"))),(0,c.z)((i=>(0,h.D)(i.request({url:`${t}/passport/web/account/switch/`,method:"POST",params:{aid:"1459",sec_to_user_id:e.secUid}}))))).pipe(this.errorHandler.bind(this))}removeAccount(e){const t=this.userRegion.getDomainFromIDC(e.region);return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("removeAccount"))),(0,c.z)((i=>(0,h.D)(i.request({url:`${t}/passport/account/remove/`,method:"POST",params:{aid:"1459",sec_removed_user_id:e.secUid}}))))).pipe(this.errorHandler.bind(this))}logoutAccount(e){const t=this.userRegion.getDomainFromIDC(e.region);return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("removeAccount"))),(0,c.z)((e=>(0,h.D)(e.request({url:`${t}/passport/web/logout/`,method:"POST",params:{aid:"1459"}}))))).pipe(this.errorHandler.bind(this))}checkEmailRegistered(e){return this.getAccountSdk$({email:e.email}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("checkEmailRegistered"))),(0,c.z)((t=>(0,h.D)(t.extra.checkEmailRegistered({email:e.email,extra_params:Object.assign({},this.extraParams)}))))).pipe(this.errorHandler.bind(this))}sendPhoneCodeForBindAccount(e){const{mobile:t}=e;return this.getAccountSdk$({mobile:t,triggerPath:"/passport/web/send_code/",skipRegionCheck:!0}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendPhoneCodeForBindAccount"))),(0,c.z)((e=>(0,h.D)(e.bind.sendCode({mobile:t,unbind_exist:0,extra_params:Object.assign(Object.assign({},this.extraParams),{is6Digits:1})}))))).pipe(this.errorHandler.bind(this))}validateAndBindPhone(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateAndBindPhone"))),(0,c.z)((t=>(0,h.D)(t.bind.bindMobile(Object.assign(Object.assign({},e),{unbind_exist:0,extra_params:{phone_number_source:27}})))))).pipe(this.errorHandler.bind(this))}sendEmailCodeForBindAccount(e){const{email:t}=e;return this.getAccountSdk$({email:t,triggerPath:"/passport/web/email/send_code/",skipRegionCheck:!0}).pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("sendEmailCodeForBindAccount"))),(0,c.z)((e=>(0,h.D)(e.bind.sendEmailCode({email:t,extra_params:Object.assign({},this.extraParams)}))))).pipe(this.errorHandler.bind(this))}validateAndBindEmail(e){return this.getAccountSdk$().pipe((0,b.b)((()=>this.slardar.setCurrentRequestMethod("validateAndBindEmail"))),(0,c.z)((t=>(0,h.D)(t.bind.bindEmail(Object.assign(Object.assign({},e),{extra_params:{email_source:26}})))))).pipe(this.errorHandler.bind(this))}updateUniqueId(e){return this.getAccountSdk$().pipe((0,c.z)((t=>(0,h.D)(t.account.updateLoginName({login_name:e}))))).pipe(this.errorHandler.bind(this))}validateFTCUsername(e){return this.getAccountSdk$().pipe((0,k.w)((t=>(0,h.D)(t.request({url:"/passport/web/login_name/check/",method:"POST",params:{aid:1459,login_name:e}}))))).pipe(this.errorHandler.bind(this))}errorHandler(e){return e.pipe((0,b.b)((()=>{var e,t,i,s,r;this.slardar.handleRequestResultReport({url:this.requestInfo.url,type:null!==(i=null===(t=null===(e=this.requestInfo)||void 0===e?void 0:e.data)||void 0===t?void 0:t.type)&&void 0!==i?i:null===(r=null===(s=this.requestInfo)||void 0===s?void 0:s.params)||void 0===r?void 0:r.type,domain:this.requestInfo.baseURL})})),(0,_.K)((e=>{var t,i,s,r,a;return this.slardar.handleRequestResultReport({error_code:e.error_code||-1,url:this.requestInfo.url,type:null!==(s=null===(i=null===(t=this.requestInfo)||void 0===t?void 0:t.data)||void 0===i?void 0:i.type)&&void 0!==s?s:null===(a=null===(r=this.requestInfo)||void 0===r?void 0:r.params)||void 0===a?void 0:a.type,domain:this.requestInfo.baseURL}),(0,l.of)(Object.assign({error_code:e.error_code||-1,default_error_msg:"CLOSE_CAPTCHA"===e?"":"Sorry, something went wrong, please try again later"},e))})))}};P=(0,s.__decorate)([(0,a.G)(),(0,s.__metadata)("design:paramtypes",[w.D,y.M,n.ZI])],P)},35161:(e,t,i)=>{"use strict";i.d(t,{D:()=>y});var s=i(22403),r=i(43549),a=i(89464),o=i(745),n=i.n(o),d=i(82941),c=i(90950),l=i(9082),h=i(55823),p=i(80986),g=i(4389),u=i(13421),m=i(32565),b=i(3979),_=i(14768),k=i(74197),v=i(56132);const R="https://us.tiktok.com",C="https://t.tiktok.com",f="https://web-i18n.tiktok.com";let y=class{constructor(e,t){this.fetch=e,this.slardar=t,this.regionCache=new Map,this.userSeverRegion={},this.ttpConfig={},this.isSG=!0,this.phoenix=!1,this.alterRegionParams={},this.authBroadcastParams={},this.requestTime=1}setInitConfig(e){this.ttpConfig=e.ttpConfig,this.isSG=e.isSG,this.phoenix=e.phoenix}getRegionDomain(){return this.currentRegion.domain}getDomainFromIDC(e){switch(e){case"useast1a":default:return"https://web-va.tiktok.com";case"useast5":case"useast8":return R;case"alisg":return C;case"useast2a":return f;case"ie":return"https://web-ie.tiktokw.eu"}}getTtWid(){return this.currentRegion.ttWid}setTtWid(e){this.currentRegion.ttWid=e}get isRetry(){return this.requestTime<=2?{is_retry:0}:{is_retry:1}}set currentRegion(e){this.userSeverRegion=e;const{domain:t}=e,i=t===R?"https://mcs.us.tiktok.com":this.isSG?"https://mcs-sg.tiktok.com":t===f?"https://mcs-va-useast2a.tiktokv.com":"https://mcs-va.tiktok.com";b.W.setDomain(i)}get currentRegion(){return this.userSeverRegion}getUserRegions(e){const{open:t=!1,syncSeverList:i=[]}=this.ttpConfig;if(!t||this.phoenix)return(0,d.of)({error_code:0});const{platform_app_id:s,email:r,mobile:o,openId:g,account:u,triggerPath:m,username:b}=e,_=g||r||this.formatMobile(o)||u||(null==b?void 0:b.toLowerCase())||"";if(this.twitterRegion(s)||this.LineRegion(s)||this.getCacheRegion(_))return(0,d.of)({error_code:0});const k=(0,a.sha256)(`${_}aDy0TUhtql92P7hScCs97YWMT-jub2q9`),v=r?2:g?4:o?1:3;return(0,d.of)(i).pipe((0,c.z)((e=>(0,l.D)(e.map((({domain:e})=>this.fetch.post(`${e}/passport/web/region/`,{body:n().stringify({hashed_id:k,type:v,platform_app_id:s,aid:1459})})))).pipe((0,h.U)((e=>{const{maxSameRegion:t,regionResult:i,domains:r}=this.getMaxNumberDomain(e);return 1===t.count&&(this.alterRegionParams={hashed_id:k,type:v,platform_app_id:s,result:JSON.stringify(i)},this.alterUserRegions(),2===Object.keys(r).length)?{error_code:-1}:(this.currentRegion={ttWid:t.ttWid,domain:`https://${t.domain}`},this.authBroadcastParams={hashed_id:k,type:v,platform_app_id:s,pre_path:null!=m?m:"",final_domain:t.domain},this.regionCache.set(_,this.currentRegion),{error_code:0})}))))),(0,p.K)((e=>(console.error(e,"get region err"),(0,d.of)({error_code:-1})))))}alterUserRegions(){const{open:e=!1,syncSeverList:t=[]}=this.ttpConfig;return e?(this.requestTime=1,this.slardar.setCurrentRequestMethod("alterUserRegions"),(0,d.of)(t).pipe((0,c.z)((e=>e.map((({domain:e})=>this.singleRequestHandler({url:`${e}/passport/web/region_alert/`}))))))):(0,d.of)(null)}fetchUserStoreRegion(){const{open:e=!1,syncSeverList:t=[]}=this.ttpConfig;return e?(this.requestTime=1,this.slardar.setCurrentRequestMethod("fetchUserStoreRegion"),(0,d.of)(t).pipe((0,c.z)((e=>(0,l.D)(e.map((({domain:e})=>this.fetch.post(`${e}/passport/web/store_region/`,{body:n().stringify({aid:1459})})))).pipe((0,h.U)((([e])=>{if("success"===e.message)return e.data}))))))):(0,d.of)({store_region:void 0,localized_country_name:void 0})}fetchUserRegionList(){const{open:e=!1,syncSeverList:t=[]}=this.ttpConfig;return e?(this.requestTime=1,this.slardar.setCurrentRequestMethod("fetchUserRegionList"),(0,d.of)(t).pipe((0,c.z)((e=>(0,l.D)(e.map((({domain:e})=>this.fetch.get(`${e}/passport/web/region/register_region_list/`,{query:{aid:1459},baseUrlType:2})))).pipe((0,c.z)((e=>{var t;const i=e.find((e=>"success"===e.message));return i?(0,d.of)(i.data.region_list):(0,d.of)(null===(t=e.find((e=>2125===e.data.error_code)))||void 0===t?void 0:t.data.description)}))))))):(0,d.of)([])}authBroadcast(e){this.requestTime=1;const{open:t=!1,syncSeverList:i=[]}=this.ttpConfig;return!t||this.phoenix?(0,d.of)(null):(this.slardar.setCurrentRequestMethod("authBroadcast"),k.g.show(),(0,d.of)(i).pipe((0,c.z)((t=>(0,l.D)(t.map((({domain:t})=>this.singleRequestHandler({url:`${t}/passport/web/auth_broadcast/`,userInfo:e,isAuth:!0})))).pipe((0,h.U)((()=>(k.g.hide(),null))))))))}twitterRegion(e){if(e===_.Oy.twitter)return this.currentRegion={domain:R},!0}LineRegion(e){if(e===_.Oy.line)return this.currentRegion={domain:C},!0}getCacheRegion(e){if(this.regionCache.get(e))return this.currentRegion=this.regionCache.get(e),!0}getMaxNumberDomain(e){this.slardar.setCurrentRequestMethod("getUserRegion");const t={},i={},{syncSeverList:s=[]}=this.ttpConfig,r={count:0,domain:"",ttWid:""};return e.forEach((({data:e},a)=>{const{domain:o,ttwid_migration_ticket:n,error_code:d}=e;this.slardar.handleRequestResultReport({error_code:d}),i[s[a].domain]=o,t[o]?t[o]=t[o]+1:t[o]=1,r.count<t[o]&&(r.count=t[o],r.domain=o),n&&(r.ttWid=n)})),{regionResult:i,maxSameRegion:r,domains:t}}singleRequestHandler(e){const{url:t,isAuth:i=!0,userInfo:s}=e,r=i?Object.assign(Object.assign({},this.authBroadcastParams),s):this.alterRegionParams;return(0,d.of)(this.isRetry).pipe((0,g.w)((({is_retry:e})=>this.fetch.post(t,{body:n().stringify(Object.assign(Object.assign({},r),{is_retry:e,aid:1459}))}).pipe((0,h.U)((({error_code:e})=>{if(this.slardar.handleRequestResultReport({error_code:e}),-1===e)throw new Error(`${e}`);return{error_code:0}}))))),(0,u.X)(2))}formatMobile(e){var t;if(!e)return"";const[i,s]=null!==(t=e.replace("+","").split(" "))&&void 0!==t?t:[];return"86"===i?s:`+${i}${s}`}};y=(0,s.__decorate)([(0,r.G)(),(0,s.__metadata)("design:paramtypes",[m.r,v.M])],y)},74197:(e,t,i)=>{"use strict";i.d(t,{g:()=>r});var s=i(23739);const r={show:()=>s.B.show("#loginContainer"),hide:()=>s.B.hide()}},73459:(e,t,i)=>{"use strict";i.d(t,{i:()=>s});const s=e=>e?"0x203":"0x204"},56132:(e,t,i)=>{"use strict";i.d(t,{M:()=>o});var s=i(22403),r=i(43549),a=i(70068);let o=class{constructor(e){this.service=e,this.defaultMetrics={count:1},this.currentMethod=null,this.setCurrentRequestMethod=e=>{this.currentMethod=e},this.handleRequestResultReport=e=>{if(!this.currentMethod)return;const{error_code:t=0}=e,i=(0,s.__rest)(e,["error_code"]);this.service.emitEvent(this.currentMethod,this.defaultMetrics,Object.assign(Object.assign({error_code:String(t)},i),{function_type:this.getFunctionType(this.currentMethod,e)}))},this.handleThirdGetToken=e=>{this.currentMethod="thirdGetToken",this.handleRequestResultReport(e)},this.QRCodeShortenFail=e=>{this.service.emitEvent("qrcode_shorten_fail",this.defaultMetrics,e)},this.handleUserRegionEscape=e=>{this.service.emitEvent("userRegionEscape",this.defaultMetrics,e)}}getFunctionType(e,t){switch(e){case"sendPhoneCode":case"smsLogin":case"passwordLogin":case"thirdLogin":case"getQrCodeUrl":case"checkQrconnect":case"getOauthConfig":case"cancelDeleteAccount":case"thirdGetToken":return"login";case"notLoginSendCode":case"smsVerify":case"verifyPwdWithoutLogin":case"thirdVerify":return"verify";case"validateMobileCodeForLogin":case"validateEmailCodeForLogin":case"validateMobileCodeForReset":case"verifySendEmailCode":case"sendEmailCodeForLogin":case"emailCodeLogin":return"twostep";case"sendPhoneCodeWithType":return String(t.type).match(/13|12/)?"twostep":"reset";case"sendPhoneCodeForResetPwd":case"sendEmailCodeForResetPwd":case"resetPwdLoginByEmail":case"changePwdByMobile":return"reset";case"sendEmailCodeForForceResetPwd":case"sendPhoneCodeForForceResetPwd":case"validatePhoneCodeForForceReset":case"validateEmailCodeForForceReset":case"forceResetPwdByMobileTicket":case"forceResetPwdByEmailTicket":return"forcereset";case"sendEmailCodeForSignup":case"smsLoginContinue":case"usernameRegister":case"setAccount":case"emailRegister":return"signup";default:return"ttp"}}};o=(0,s.__decorate)([(0,r.G)(),(0,s.__metadata)("design:paramtypes",[a.n])],o)},97936:()=>{}}]);
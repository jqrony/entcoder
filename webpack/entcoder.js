/**
 * Fastest entities or ascii encode/decode Javascript library.
 * https://github.com/jqrony/entcoder
 * 
 * @license MIT license
 * @version 1.0.0
 * 
 * © Copyright 2023 Shahzada Modassir
 * https://github.com/jqrony/entcoder/blob/main/LICENSE
 * 
 * @author Shahzada Modassir
 * date: 28 December 2023 14:10:39 GMT+0530 (India Standard)
 */
(function(global, factory) {

/**
 * Inject [use strict] mode
 * ------------------------
 * Throw ReferenceError when pass undeclare variables
 */
"use strict";

var Entcoder = factory(global);

// (such as Node.js) expose a factory as module.exports
// For CommonJS and CommonJS-like environments
if (typeof module==="object" &&
	typeof module.exports==="object") {
	module.exports=new Entcoder();
}
})(typeof window!=="undefined" ? window : this, function(window) {

/**
 * Inject [use strict] mode
 * ------------------------
 * Throw ReferenceError when pass undeclare variable
 */
"use strict";

// Constants
// Basic Multilingual Plane (BMP) Regular Expression
var BMP_RANGE 	 = /([\u0000-\uFFFF])/g;
var SMP_RANGE		 = /([\uD800-\uDBFF])/g;
var NEED_SUPPORT = /^(?:codepoint|charcode)(at)+$/i;

var HIGH_SURROGATE_FROM = 55296;
var HIGH_SURROGATE_TO		= 56319;

/**
 * -----------------------------------
 */
var VERSION  = "1.0.0";
var arr 		 = [];
var getProto = Object.getPrototypeOf;
var slice 	 = arr.slice;
var flat 		 = arr.flat;
var splice 	 = arr.splice;
var concat 	 = arr.concat;

var flat = flatten(flat);
function flatten(isFlat) {
	return function(array) {
		return isFlat ? arr.flat.call(array) : arr.concat.apply([], array);
	};
}

var indexOf = arr.indexOf;
var apply 	= arr.apply;
var push 		= arr.push;
var _String = String();
var pop 		= arr.pop;
var unshift = arr.unshift;
var isArray = Array.isArray;

var exports 	 = {};
var class2type = {};
var support 	 = {};
var hasOwn 		 = class2type.hasOwnProperty;
var rnative 	 = /^[^{]+\{\s*\[native \w/;

var codePointAt 	= _String.codePointAt;
var fromCharCode 	= String.fromCharCode;
var charCodeAt 		= _String.charCodeAt;
var fromCodePoint = String.fromCodePoint;

/**
 * Create Entcoder API
 * ----------------------------------------------------
 * Easy API for creating new Entcoder
 * TODO: Enhance more Entcoder of API feature
 * !Ignore new keyword when call (`Entcoder`)
 */
function Entcoder() {
	return !(this instanceof Entcoder) && new Entcoder();
}

Entcoder.prototype.VERSION=VERSION;

// Create support Instance methods
// TODO: support methods can be further improved.
support.codePointAt		= isFunction(codePointAt);
support.charCodeAt 		= isFunction(charCodeAt);
support.fromCodePoint = isFunction(fromCodePoint);

var src;
for(var name in (src={charCodeAt, codePointAt})) {
	if (NEED_SUPPORT.test(name) && !support[name]) {
		support[name]=rnative.test(src[name]);
		__checkCryptModel();
	}
}

// Checks encode/decode Method support and throw
// An error when not support anyone coder method
function __checkCryptModel() {
	if (!(charCodeAt && fromCharCode)) {
		error("Unsupport: Failed codePoint not support!");
	}
}

fromCodePoint = fromCodePoint || function(codePoint) {
	return String.fromCharCode(
		Math.floor((codePoint - 65536) / 1024) + 55296,
		(codePoint - 65536) % 1024 + 56320
	);
};

codePointAt = codePointAt ? function(input, pos=0) {
	return input.codePointAt(pos);
} : function(input, pos=0) {
	return (input.charCodeAt(pos) - 55296) * 1024 + input.charCodeAt(pos + 1) - 56320 + 65536;
};

var REG_OPTGROUP = {
	encoding: /^(?:hex|dec|entities)$/i,
	type: /^(?:(special|all)char|xml|html([4-5])?)$/i,
};

Object.defineProperty(exports,"__esModule",{value:!0});
var ASCII = exports.ascii={entities:{"<":"lt",">":"gt",'"':"quot","'":"apos","&":"amp"},_all:{"Æ":"AElig","Á":"Aacute","Â":"Acirc","À":"Agrave","Ã":"Atilde","Ä":"Auml","Β":"Beta","©":"copy","Ç":"Ccedil","¸":"cedil","·":"middot","Χ":"Chi","⊗":"otimes","´":"acute","˜":"tilde","¨":"uml","⇒":"rArr","Ð":"ETH","É":"Eacute","Ê":"Ecirc","È":"Egrave","Ë":"Euml","Í":"Iacute","Î":"Icirc","Ì":"Igrave","Ï":"Iuml"," ":"nbsp","≠":"ne","Ñ":"Ntilde","Ó":"Oacute","Ô":"Ocirc","Ò":"Ograve","‘":"lsquo","Ø":"Oslash","Õ":"Otilde","Ö":"Ouml","Π":"Pi","®":"reg","⌉":"rceil","Σ":"Sigma","Þ":"THORN","™":"trade","≅":"cong","Ú":"Uacute","Û":"Ucirc","Ù":"Ugrave","Ü":"Uuml","Ý":"Yacute","Ζ":"Zeta","á":"aacute","â":"acirc","æ":"aelig","à":"agrave","å":"aring","ã":"atilde","ä":"auml","¦":"brvbar","ç":"ccedil","¢":"cent","¤":"curren","°":"deg","δ":"delta","÷":"divide","é":"eacute","ê":"ecirc","è":"egrave","ð":"eth","ë":"euml","ƒ":"fnof","¼":"frac14","¾":"frac34","⁄":"frasl","í":"iacute","î":"icirc","¡":"iexcl","ì":"igrave","¿":"iquest","ï":"iuml","κ":"kappa","«":"laquo","∗":"lowast","µ":"micro","μ":"mu","¬":"not","ñ":"ntilde","ó":"oacute","ô":"ocirc","ò":"ograve","ª":"ordf","º":"ordm","ø":"oslash","õ":"otilde","ö":"ouml","¶":"para","£":"pound","»":"raquo","›":"rsaquo","⋅":"sdot","§":"sect","­":"shy","¹":"sup1","²":"sup2","³":"sup3","ß":"szlig","þ":"thorn","×":"times","ú":"uacute","û":"ucirc","ù":"ugrave","ü":"uuml","ξ":"xi","ý":"yacute","¥":"yen","ÿ":"yuml","‌":"zwnj"},html4:{"Δ":"Delta","⇐":"lArr","Κ":"Kappa","Μ":"Mu","Œ":"OElig","∂":"part","″":"Prime","⌋":"rfloor","Š":"Scaron","∑":"sum","Θ":"Theta","Υ":"Upsilon","Ξ":"Xi","Ÿ":"Yuml","β":"beta","∪":"cup","†":"dagger","♦":"diams"," ":"emsp","‎":"lrm","‚":"sbquo","–":"ndash","⊄":"nsub","‰":"permil","φ":"phi","π":"pi","ψ":"psi","τ":"tau","θ":"theta","ζ":"zeta"},prefixes:{},html5:{"Ă":"Abreve","А":"Acy","Α":"Alpha","⩓":"And","𝔸":"Aopf","⁡":"af","𝒜":"Ascr","ℬ":"bernou","𝔹":"Bopf","Ч":"CHcy","Ć":"Cacute","ⅅ":"DD","Č":"Ccaron","Ĉ":"Ccirc","Ċ":"Cdot","⊙":"odot","∲":"cwconint","”":"rdquor","∯":"DoubleContourIntegral","∐":"coprod","∳":"awconint","⨯":"Cross","⋓":"Cup","Ђ":"DJcy","Џ":"DZcy","↡":"Darr","Ď":"Dcaron","∇":"nabla","𝔇":"Dfr","ⅆ":"dd","𝔻":"Dopf","⃜":"DotDot","⇔":"iff","⟺":"xhArr","⊨":"vDash","⇑":"uArr","∥":"spar","↓":"downarrow","⇵":"duarr","⥐":"DownLeftRightVector","⥟":"DownRightTeeVector","⇁":"rightharpoondown","⥗":"DownRightVectorBar","𝒟":"Dscr","Ŋ":"ENG","Ě":"Ecaron","Э":"Ecy","𝔈":"Efr","∈":"isinv","◻":"EmptySmallSquare","Ę":"Eogon","Ε":"Epsilon","≂":"esim","⇌":"rlhar","Η":"Eta","∃":"exist","ⅇ":"exponentiale","Ф":"Fcy","◼":"FilledSmallSquare","▪":"squf","𝔽":"Fopf","∀":"forall","Ѓ":"GJcy","Γ":"Gamma","Ğ":"Gbreve","Ĝ":"Gcirc","Ġ":"Gdot","⋙":"ggg","⋛":"gtreqless","≧":"geqq","≷":"gtrless","⩾":"ges","ˇ":"caron","Ĥ":"Hcirc","ℌ":"Poincareplane","ℋ":"hamilt","ℍ":"quaternions","Ħ":"Hstrok","≏":"bumpeq","Ĳ":"IJlig","И":"Icy","ⅈ":"ii","∬":"Int","∫":"int","⁣":"ic","𝕀":"Iopf","ℐ":"imagline","І":"Iukcy","Ĵ":"Jcirc","𝔍":"Jfr","𝒥":"Jscr","Є":"Jukcy","Ќ":"KJcy","Ķ":"Kcedil","𝔎":"Kfr","𝒦":"Kscr","Ĺ":"Lacute","⟪":"Lang","↞":"twoheadleftarrow","Ļ":"Lcedil","←":"slarr","⌈":"lceil","⥡":"LeftDownTeeVector","⇃":"downharpoonleft","⥙":"LeftDownVectorBar","↤":"mapstoleft","⥚":"LeftTeeVector","⧏":"LeftTriangleBar","⊴":"trianglelefteq","⥑":"LeftUpDownVector","↿":"upharpoonleft","↼":"lharu","⋚":"lesseqgtr","≦":"leqq","⩽":"les","≲":"lsim","𝔏":"Lfr","⇚":"lAarr","⟵":"xlarr","⟶":"xrarr","𝕃":"Lopf","↙":"swarrow","↘":"searrow","≪":"ll","М":"Mcy","Њ":"NJcy","Ň":"Ncaron","Н":"Ncy","\n":"NewLine","⁠":"NoBreak","∦":"nspar","≂̸":"nesim","∄":"nexists","≱":"ngeq","≧̸":"ngeqq","≫̸":"nGtv","⩾̸":"nges","≎̸":"nbump","≏̸":"nbumpe","⧏̸":"NotLeftTriangleBar","⋬":"ntrianglelefteq","≰":"nleq","≸":"ntlg","≪̸":"nLtv","⩽̸":"nles","≴":"nlsim","⪢̸":"NotNestedGreaterGreater","⪡̸":"NotNestedLessLess","⪯̸":"npreceq","⧐̸":"NotRightTriangleBar","⋭":"ntrianglerighteq","⊏̸":"NotSquareSubset","⊐̸":"NotSquareSuperset","⋣":"nsqsupe","⊂⃒":"vnsub","⪰̸":"nsucceq","≿̸":"NotSucceedsTilde","⊃⃒":"vnsup","≁":"nsim","≄":"nsimeq","≇":"ncong","≉":"napprox","Ν":"Nu","О":"Ocy","𝔒":"Ofr","Ō":"Omacr","Ω":"ohm","Ο":"Omicron","“":"ldquo","⩔":"Or","⨷":"Otimes","⎴":"tbrk","𝔓":"Pfr","±":"pm","ℙ":"primes","⪻":"Pr","⪯":"preceq","≾":"prsim","∏":"prod","∝":"vprop","Ψ":"Psi","ℚ":"rationals","⤐":"drbkarow","Ŕ":"Racute","Ř":"Rcaron","Р":"Rcy","ℜ":"realpart","∋":"niv","Ρ":"Rho","⇥":"rarrb","↦":"mapsto","⥜":"RightUpTeeVector","⥔":"RightUpVectorBar","⥓":"RightVectorBar","↱":"rsh","Щ":"SHCHcy","Ь":"SOFTcy","⪼":"Sc","Ş":"Scedil","С":"Scy","↑":"uparrow","𝕊":"Sopf","√":"radic","□":"square","⊑":"sqsubseteq","⊒":"sqsupseteq","⋐":"Subset","⊆":"subseteq","⪰":"succeq","≿":"succsim","⊇":"supseteq","Ц":"TScy","\t":"Tab","Ť":"Tcaron","Т":"Tcy","∴":"therefore","  ":"ThickSpace"," ":"thinsp","∼":"thksim","≃":"simeq","𝕋":"Topf","⃛":"tdot","𝒯":"Tscr","↟":"Uarr","Ў":"Ubrcy","У":"Ucy","𝔘":"Ufr","Ū":"Umacr","⏟":"UnderBrace","⏝":"UnderParenthesis","⊎":"uplus","𝕌":"Uopf","⤒":"UpArrowBar","↕":"varr","⊥":"perp","↖":"nwarrow","↗":"nearrow","ϒ":"upsih","Ů":"Uring","Ũ":"Utilde","⊫":"VDash","В":"Vcy","⫦":"Vdashl","∣":"smid","❘":"VerticalSeparator"," ":"hairsp","𝕍":"Vopf","⊪":"Vvdash","⋀":"xwedge","𝕎":"Wopf","𝔛":"Xfr","𝕏":"Xopf","Я":"YAcy","Ю":"YUcy","Ŷ":"Ycirc","𝔜":"Yfr","𝒴":"Yscr","Ж":"ZHcy","Ž":"Zcaron","Ż":"Zdot","ℨ":"zeetrf","ℤ":"integers","ă":"abreve","∾̳":"acE","а":"acy","α":"alpha","⨿":"amalg","∧":"wedge","⩜":"andd","⩚":"andv","⦤":"ange","∡":"measuredangle","⦩":"angmsdab","⦫":"angmsdad","⦭":"angmsdaf","⦯":"angmsdah","⊾":"angrtvb","∢":"angsph","⍼":"angzarr","𝕒":"aopf","⩰":"apE","≊":"approxeq","𝒶":"ascr","⫭":"bNot","‵":"bprime","∽":"bsim","⊽":"barvee","⌅":"barwedge","⎶":"bbrktbrk","б":"bcy","⦰":"bemptyv","ℶ":"beth","𝔟":"bfr","◯":"xcirc","⨂":"xotime","⨆":"xsqcup","▽":"xdtri","△":"xutri","⧫":"lozf","▴":"utrif","◂":"ltrif","▸":"rtrif","▒":"blk12","▓":"blk34","=⃥":"bne","≡⃥":"bnequiv","𝕓":"bopf","╗":"boxDL","╖":"boxDl","═":"boxH","╩":"boxHU","╧":"boxHu","╚":"boxUR","╙":"boxUr","╬":"boxVH","╠":"boxVR","╢":"boxVl","⧉":"boxbox","╒":"boxdR","┌":"boxdr","╥":"boxhD","┬":"boxhd","⊠":"timesb","╘":"boxuR","└":"boxur","╪":"boxvH","╞":"boxvR","┤":"boxvl","𝒷":"bscr","\\":"bsol","⟈":"bsolhsub","•":"bullet","⪮":"bumpE","∩":"cap","⩉":"capbrcup","⩇":"capcup","∩︀":"caps","č":"ccaron","ĉ":"ccirc","⩐":"ccupssm","⦲":"cemptyv","ч":"chcy","✓":"checkmark","○":"cir","ˆ":"circ","↺":"olarr","Ⓢ":"oS","⊛":"oast","⨐":"cirfnint","⧂":"cirscir","♣":"clubsuit",",":"comma","∁":"complement","℗":"copysr","✗":"cross","⫏":"csub","⫐":"csup","⋯":"ctdot","⤵":"cudarrr","⋟":"curlyeqsucc","↶":"curvearrowleft","⤽":"cularrp","⩈":"cupbrcap","⩊":"cupcup","⩅":"cupor","∪︀":"cups","⤼":"curarrm","⋎":"cuvee","⌭":"cylcty","⥥":"dHar","ℸ":"daleth","‐":"hyphen","⤏":"rBarr","ď":"dcaron","⥿":"dfisht","⋲":"disin","ђ":"djcy","⌞":"llcorner","⌍":"dlcrop","𝕕":"dopf","≑":"eDot","∸":"minusd","⌟":"lrcorner","⌌":"drcrop","ѕ":"dscy","đ":"dstrok","▿":"triangledown","⦦":"dwangle","⟿":"dzigrarr","⩮":"easter","≖":"eqcirc","ė":"edot","⪚":"eg","⪙":"el","ℓ":"ell","⪕":"eqslantless","⪗":"elsdot","∅":"varnothing"," ":"emsp14","ŋ":"eng","ę":"eogon","⋕":"epar","⩱":"eplus","ε":"epsilon","ϵ":"varepsilon","⩸":"equivDD","≓":"risingdotseq","ℯ":"escr","€":"euro","ф":"fcy","ﬃ":"ffilig","ﬄ":"ffllig","ﬁ":"filig",fj:"fjlig","ﬂ":"fllig","⋔":"pitchfork","⫙":"forkv","⅓":"frac13","⅕":"frac15","⅛":"frac18","⅖":"frac25","⅗":"frac35","⅘":"frac45","⅝":"frac58","⌢":"sfrown","𝒻":"fscr","γ":"gamma","ĝ":"gcirc","ġ":"gdot","⪀":"gesdot","⪄":"gesdotol","⋛︀":"gesl","𝔤":"gfr","ѓ":"gjcy","⪒":"glE","⪤":"glj","≩":"gneqq","𝕘":"gopf","ℊ":"gscr","⪎":"gsime","⪧":"gtcc","⩼":"gtquest","⥸":"gtrarr","≩︀":"gvnE","↭":"leftrightsquigarrow","ℏ":"plankv","ĥ":"hcirc","♥":"heartsuit","⊹":"hercon","⤥":"searhk","⤦":"swarhk","⇿":"hoarr","↩":"larrhk","↪":"rarrhk","𝕙":"hopf","𝒽":"hscr","ħ":"hstrok","и":"icy","⨌":"qint","℩":"iiota","ī":"imacr","Ƶ":"imped","℅":"incare","⧝":"infintie","⨗":"intlarhk","⨼":"iprod","ё":"iocy","𝕚":"iopf","𝒾":"iscr","⋹":"isinE","⋴":"isins","ĩ":"itilde","ĵ":"jcirc","𝔧":"jfr","𝕛":"jopf","ј":"jsercy","ķ":"kcedil","𝔨":"kfr","х":"khcy","𝕜":"kopf","⤛":"lAtail","⥢":"lHar","⦴":"laemptyv","λ":"lambda","⦑":"langd","⪅":"lessapprox","⤟":"larrbfs","↫":"looparrowleft","⤹":"larrpl","⤙":"latail","⪭︀":"lates","❲":"lbbrk","⦏":"lbrksld","ľ":"lcaron","л":"lcy","⥧":"ldrdhar","↲":"ldsh","⩿":"lesdot","⪃":"lesdotor","⋚︀":"lesg","⋖":"ltdot","⥼":"lfisht","𝔩":"lfr","⪑":"lgE","▄":"lhblk","◺":"lltri","⪉":"lnapprox","⪇":"lneq","⋦":"lnsim","⇽":"loarr","⦅":"lopar","⨭":"loplus","⦓":"lparlt","⥭":"lrhard","⊿":"lrtri","𝓁":"lscr","⪏":"lsimg","ł":"lstrok","⪦":"ltcc","⋉":"ltimes","⩻":"ltquest","⥦":"luruhar","≨︀":"lvnE","¯":"strns","♂":"male","✠":"maltese","▮":"marker","м":"mcy","℧":"mho","⫰":"midcir","−":"minus","⫛":"mlcp","𝕞":"mopf","𝓂":"mscr","⊸":"mumap","⋙̸":"nGg","≫⃒":"nGt","⇍":"nlArr","⇎":"nhArr","⋘̸":"nLl","≪⃒":"nLt","⊯":"nVDash","∠⃒":"nang","⩰̸":"napE","≋̸":"napid","♮":"natural","ň":"ncaron","⩭̸":"ncongdot","н":"ncy","⤤":"nearhk","≐̸":"nedot","⤨":"toea","⫲":"nhpar","⋼":"nis","≦̸":"nleqq","↚":"nleftarrow","‥":"nldr","⋹̸":"notinE","⋵̸":"notindot","⋷":"notinvb","⋾":"notnivb","⫽⃥":"nparsl","∂̸":"npart","⤳̸":"nrarrc","↝̸":"nrarrw","⫅̸":"nsubseteqq","⫆̸":"nsupseteqq","#":"num"," ":"numsp","⤄":"nvHarr","≍⃒":"nvap","≥⃒":"nvge",">⃒":"nvgt","⤂":"nvlArr","≤⃒":"nvle","<⃒":"nvlt","⊴⃒":"nvltrie","⊵⃒":"nvrtrie","∼⃒":"nvsim","⤣":"nwarhk","о":"ocy","ő":"odblac","œ":"oelig","𝔬":"ofr","⧁":"ogt","⦻":"olcross","⧀":"olt","ω":"omega","⦶":"omid","𝕠":"oopf","⦹":"operp","∨":"vee","⩝":"ord","ℴ":"oscr","⊶":"origof","⩗":"orslope","⊘":"osol","⌽":"ovbar","⫽":"parsl","п":"pcy",".":"period","𝔭":"pfr","☎":"phone","ϖ":"varpi","⨣":"plusacir","⨢":"pluscir","⨥":"plusdu","⨦":"plussim","𝕡":"popf","⪷":"precapprox","⪹":"prnap","⌒":"profline","𝓅":"pscr"," ":"puncsp","⁗":"qprime","?":"quest","∽̱":"race","⦥":"range","⤳":"rarrc","⥅":"rarrpl","⤚":"ratail","❳":"rbbrk","⦎":"rbrksld","ř":"rcaron","р":"rcy","⥩":"rdldhar","▭":"rect","⥽":"rfisht","𝔯":"rfr","ρ":"rho","⋌":"rthree","⫮":"rnmid","⇾":"roarr","⦆":"ropar","⨮":"roplus",")":"rpar","⨒":"rppolint","▹":"triangleright","⥨":"ruluhar","ś":"sacute","⪸":"succapprox","ş":"scedil","⪶":"succneqq","⩦":"sdote",";":"semi","⤩":"tosa","✶":"sext","щ":"shchcy","σ":"sigma","ς":"varsigma","⩪":"simdot","⪠":"simgE","⪟":"simlE","⨤":"simplus","⨳":"smashp","⌣":"ssmile","⪪":"smt","⪬︀":"smtes","/":"sol","⌿":"solbar","⊓︀":"sqcaps","⊔︀":"sqcups","𝓈":"sscr","☆":"star","⫁":"submult","⊊":"subsetneq","⥹":"subrarr","⫇":"subsim","⫓":"subsup","♪":"sung","⪾":"supdot","⟉":"suphsol","⥻":"suplarr","⊋":"supsetneq","⫀":"supplus","⫈":"supsim","⫖":"supsup","⌖":"target","ţ":"tcedil","𝔱":"tfr","⨰":"timesd","⌶":"topbot","𝕥":"topf","◬":"tridot","⨺":"triminus","⧍":"trisb","⏢":"trpezium","ц":"tscy","ŧ":"tstrok","ŭ":"ubreve","у":"ucy","ű":"udblac","⥾":"ufisht","▀":"uhblk","⌜":"ulcorner","◸":"ultri","ų":"uogon","⌝":"urcorner","ů":"uring","𝓊":"uscr","ũ":"utilde","⦧":"uwangle","⫨":"vBar","⊊︀":"vsubne","⫋︀":"vsubnE","⊋︀":"vsupne","⫌︀":"vsupnE","в":"vcy","≚":"veeeq","𝔳":"vfr","𝓋":"vscr","ŵ":"wcirc","𝕨":"wopf","𝓌":"wscr","⋻":"xnis","𝕩":"xopf","я":"yacy","ы":"ycy","𝔶":"yfr","𝕪":"yopf","ю":"yucy","ź":"zacute","з":"zcy","𝔷":"zfr","⇝":"zigrarr","𝓏":"zscr"},characters:{"𝔄":"Afr","Ā":"Amacr","Ą":"Aogon","Å":"angst","≔":"coloneq","∖":"ssetmn","⫧":"Barv","⌆":"doublebarwedge","Б":"Bcy","∵":"because","𝔅":"Bfr","˘":"breve","≎":"bump","⋒":"Cap","ℭ":"Cfr","∰":"Cconint","⊖":"ominus","⊕":"oplus","’":"rsquor","∷":"Proportion","⩴":"Colone","≡":"equiv","∮":"oint","ℂ":"complexes","𝒞":"Cscr","≍":"asympeq","⤑":"DDotrahd","Ѕ":"DScy","‡":"ddagger","⫤":"DoubleLeftTee","Д":"Dcy","˙":"dot","˝":"dblac","`":"grave","⋄":"diamond","≐":"esdot","⇓":"dArr","⟸":"xlArr","⟹":"xrArr","⇕":"vArr","⤓":"DownArrowBar","̑":"DownBreve","⥞":"DownLeftTeeVector","↽":"lhard","⥖":"DownLeftVectorBar","⊤":"top","↧":"mapstodown","Đ":"Dstrok","Ė":"Edot","Ē":"Emacr","▫":"EmptyVerySmallSquare","𝔼":"Eopf","⩵":"Equal","ℰ":"expectation","⩳":"Esim","𝔉":"Ffr","ℱ":"Fscr","Ϝ":"Gammad","Ģ":"Gcedil","Г":"Gcy","𝔊":"Gfr","𝔾":"Gopf","≥":"geq","⪢":"GreaterGreater","≳":"gtrsim","𝒢":"Gscr","≫":"gg","Ъ":"HARDcy","^":"Hat","─":"boxh","Е":"IEcy","Ё":"IOcy","İ":"Idot","ℑ":"imagpart","Ī":"Imacr","⋂":"xcap","⁢":"it","Į":"Iogon","Ι":"Iota","Ĩ":"Itilde","Й":"Jcy","𝕁":"Jopf","Ј":"Jsercy","Х":"KHcy","К":"Kcy","𝕂":"Kopf","Љ":"LJcy","Λ":"Lambda","ℒ":"lagran","Ľ":"Lcaron","Л":"Lcy","⟨":"langle","⇤":"larrb","⇆":"lrarr","⟦":"lobrk","⌊":"lfloor","↔":"leftrightarrow","⥎":"LeftRightVector","⊣":"dashv","⊲":"vltri","⥠":"LeftUpTeeVector","⥘":"LeftUpVectorBar","⥒":"LeftVectorBar","≶":"lg","⪡":"LessLess","⋘":"Ll","Ŀ":"Lmidot","⟷":"xharr","↰":"lsh","Ł":"Lstrok","⤅":"Map"," ":"MediumSpace","ℳ":"phmmat","𝔐":"Mfr","∓":"mp","𝕄":"Mopf","Ń":"Nacute","Ņ":"Ncedil","​":"ZeroWidthSpace","𝔑":"Nfr","ℕ":"naturals","⫬":"Not","≢":"nequiv","≭":"NotCupCap","∉":"notinva","≯":"ngtr","≹":"ntgl","≵":"ngsim","⋪":"ntriangleleft","≮":"nlt","⊀":"nprec","⋠":"nprcue","∌":"notniva","⋫":"ntriangleright","⋢":"nsqsube","⊈":"nsubseteq","⊁":"nsucc","⋡":"nsccue","⊉":"nsupseteq","∤":"nsmid","𝒩":"Nscr","Ő":"Odblac","𝕆":"Oopf","𝒪":"Oscr","‾":"oline","⏞":"OverBrace","⏜":"OverParenthesis","П":"Pcy","Φ":"Phi","≺":"prec","≼":"preccurlyeq","𝒫":"Pscr","𝔔":"Qfr","𝒬":"Qscr","⟫":"Rang","↠":"twoheadrightarrow","⤖":"Rarrtl","Ŗ":"Rcedil","⇋":"lrhar","⥯":"duhar","⟩":"rangle","→":"srarr","⇄":"rlarr","⟧":"robrk","⥝":"RightDownTeeVector","⇂":"downharpoonright","⥕":"RightDownVectorBar","⊢":"vdash","⥛":"RightTeeVector","⊳":"vrtri","⧐":"RightTriangleBar","⊵":"trianglerighteq","⥏":"RightUpDownVector","↾":"upharpoonright","⇀":"rightharpoonup","ℝ":"reals","⥰":"RoundImplies","⇛":"rAarr","ℛ":"realine","⧴":"RuleDelayed","Ш":"SHcy","Ś":"Sacute","Ŝ":"Scirc","𝔖":"Sfr","∘":"compfn","⊓":"sqcap","⊏":"sqsubset","⊐":"sqsupset","⊔":"sqcup","𝒮":"Sscr","⋆":"sstarf","≻":"succ","≽":"succcurlyeq","⋑":"Supset","⊃":"supset","Ћ":"TSHcy","Τ":"Tau","Ţ":"Tcedil","𝔗":"Tfr","≈":"thkap","Ŧ":"Tstrok","⥉":"Uarrocir","Ŭ":"Ubreve","Ű":"Udblac",_:"lowbar","⎵":"bbrk","⋃":"xcup","Ų":"Uogon","⇅":"udarr","⥮":"udhar","↥":"mapstoup","𝒰":"Uscr","⫫":"Vbar","⊩":"Vdash","⋁":"xvee","‖":"Vert","|":"vert","≀":"wreath","𝔙":"Vfr","𝒱":"Vscr","Ŵ":"Wcirc","𝔚":"Wfr","𝒲":"Wscr","𝒳":"Xscr","Ї":"YIcy","Ы":"Ycy","𝕐":"Yopf","Ź":"Zacute","З":"Zcy","𝒵":"Zscr","∾":"mstpos","∿":"acd","𝔞":"afr","ℵ":"aleph","ā":"amacr","⩕":"andand","⩘":"andslope","∠":"angle","⦨":"angmsdaa","⦪":"angmsdac","⦬":"angmsdae","⦮":"angmsdag","∟":"angrt","⦝":"angrtvbd","ą":"aogon","⩯":"apacir","≋":"apid","*":"midast","⨑":"awint","≌":"bcong","϶":"bepsi","⋍":"bsime","„":"ldquor","≬":"twixt","⨀":"xodot","⨁":"xoplus","★":"starf","⨄":"xuplus","⤍":"rbarr","▾":"dtrif","␣":"blank","░":"blk14","█":"block","⌐":"bnot","⋈":"bowtie","╔":"boxDR","╓":"boxDr","╦":"boxHD","╤":"boxHd","╝":"boxUL","╜":"boxUl","║":"boxV","╣":"boxVL","╫":"boxVh","╟":"boxVr","╕":"boxdL","┐":"boxdl","╨":"boxhU","┴":"boxhu","⊟":"minusb","⊞":"plusb","╛":"boxuL","┘":"boxul","│":"boxv","╡":"boxvL","┼":"boxvh","├":"boxvr","⁏":"bsemi","⧅":"bsolb","ć":"cacute","⩄":"capand","⩋":"capcap","⩀":"capdot","⁁":"caret","⩍":"ccaps","⩌":"ccups","ċ":"cdot","𝔠":"cfr","χ":"chi","⧃":"cirE","≗":"cire","↻":"orarr","⊚":"ocir","⊝":"odash","⫯":"cirmid",":":"colon","@":"commat","⩭":"congdot","𝕔":"copf","↵":"crarr","𝒸":"cscr","⫑":"csube","⫒":"csupe","⤸":"cudarrl","⋞":"curlyeqprec","⩆":"cupcap","⊍":"cupdot","↷":"curvearrowright","⋏":"cuwed","∱":"cwint","д":"dcy","⇊":"downdownarrows","⩷":"eDDot","⦱":"demptyv","𝔡":"dfr","ϝ":"gammad","⋇":"divonx",$:"dollar","∔":"plusdo","⊡":"sdotb","𝒹":"dscr","⧶":"dsol","⋱":"dtdot","џ":"dzcy","ě":"ecaron","≕":"eqcolon","э":"ecy","≒":"fallingdotseq","𝔢":"efr","⪖":"eqslantgtr","⪘":"egsdot","⏧":"elinters","ē":"emacr"," ":"emsp13"," ":"ensp","𝕖":"eopf","⧣":"eparsl","=":"equals","≟":"questeq","⧥":"eqvparsl","⥱":"erarr","η":"eta","!":"excl","♀":"female","ﬀ":"fflig","𝔣":"ffr","♭":"flat","▱":"fltns","𝕗":"fopf","⨍":"fpartint","½":"half","⅙":"frac16","⅔":"frac23","⅜":"frac38","⅚":"frac56","⅞":"frac78","⪌":"gtreqqless","ǵ":"gacute","⪆":"gtrapprox","ğ":"gbreve","г":"gcy","⪩":"gescc","⪂":"gesdoto","⪔":"gesles","ℷ":"gimel","⪥":"gla","⪊":"gnapprox","⪈":"gneq","⋧":"gnsim","⪐":"gsiml","⩺":"gtcir","⋗":"gtrdot","⦕":"gtlPar","ъ":"hardcy","⥈":"harrcir","…":"mldr","𝔥":"hfr","∻":"homtht","―":"horbar","⁃":"hybull","е":"iecy","𝔦":"ifr","∭":"tint","⧜":"iinfin","ĳ":"ijlig","ı":"inodot","⊷":"imof","∞":"infin","⊺":"intercal","į":"iogon","ι":"iota","⋵":"isindot","⋳":"isinsv","і":"iukcy","й":"jcy","ȷ":"jmath","𝒿":"jscr","є":"jukcy","ϰ":"varkappa","к":"kcy","ĸ":"kgreen","ќ":"kjcy","𝓀":"kscr","⤎":"lBarr","⪋":"lesseqqgtr","ĺ":"lacute","⤝":"larrfs","⥳":"larrsim","↢":"leftarrowtail","⪫":"lat","⪭":"late","⤌":"lbarr","{":"lcub","[":"lsqb","⦋":"lbrke","⦍":"lbrkslu","ļ":"lcedil","⤶":"ldca","⥋":"ldrushar","≤":"leq","⇇":"llarr","⋋":"lthree","⪨":"lescc","⪁":"lesdoto","⪓":"lesges","⥪":"lharul","љ":"ljcy","⥫":"llhard","ŀ":"lmidot","⎰":"lmoustache","≨":"lneqq","⟬":"loang","⟼":"xmap","↬":"rarrlp","𝕝":"lopf","⨴":"lotimes","◊":"lozenge","(":"lpar","‹":"lsaquo","⪍":"lsime","⩹":"ltcir","⥶":"ltlarr","⦖":"ltrPar","◃":"triangleleft","⥊":"lurdshar","∺":"mDDot","⨩":"mcomma","—":"mdash","𝔪":"mfr","⨪":"minusdu","⊧":"models","⇏":"nrArr","⊮":"nVdash","ń":"nacute","ŉ":"napos","⩃":"ncap","ņ":"ncedil","⩂":"ncup","⇗":"neArr","𝔫":"nfr","↮":"nleftrightarrow","⋺":"nisd","њ":"njcy","𝕟":"nopf","⋶":"notinvc","⋽":"notnivc","⨔":"npolint","↛":"nrightarrow","𝓃":"nscr","⊅":"nsup","ν":"nu","№":"numero","⊭":"nvDash","⊬":"nvdash","⧞":"nvinfin","⤃":"nvrArr","⇖":"nwArr","⤧":"nwnear","⨸":"odiv","⦼":"odsold","⦿":"ofcir","˛":"ogon","⦵":"ohbar","⦾":"olcir","ō":"omacr","ο":"omicron","⦷":"opar","⩖":"oror","⩛":"orv","⨶":"otimesas","⫳":"parsim","%":"percnt","‱":"pertenk","ϕ":"varphi","ℎ":"planckh","+":"plus","⩲":"pluse","⨧":"plustwo","⨕":"pointint","⪳":"prE","⪵":"prnE","⋨":"prnsim","′":"prime","⌮":"profalar","⌓":"profsurf","⊰":"prurel","𝔮":"qfr","𝕢":"qopf","𝓆":"qscr","⨖":"quatint","⤜":"rAtail","⥤":"rHar","ŕ":"racute","⦳":"raemptyv","⦒":"rangd","⥵":"rarrap","⤠":"rarrbfs","⤞":"rarrfs","⥴":"rarrsim","↣":"rightarrowtail","↝":"rightsquigarrow","∶":"ratio","}":"rcub","]":"rsqb","⦌":"rbrke","⦐":"rbrkslu","ŗ":"rcedil","⤷":"rdca","↳":"rdsh","⥬":"rharul","ϱ":"varrho","⇉":"rrarr","˚":"ring","‏":"rlm","⎱":"rmoustache","⟭":"roang","𝕣":"ropf","⨵":"rotimes","⦔":"rpargt","𝓇":"rscr","⋊":"rtimes","⧎":"rtriltri","℞":"rx","⪴":"scE","š":"scaron","ŝ":"scirc","⪺":"succnapprox","⋩":"succnsim","⨓":"scpolint","с":"scy","⇘":"seArr","𝔰":"sfr","♯":"sharp","ш":"shcy","⪞":"simg","⪝":"siml","≆":"simne","⥲":"simrarr","⧤":"smeparsl","⪬":"smte","ь":"softcy","⧄":"solb","𝕤":"sopf","♠":"spadesuit","⊂":"subset","⫅":"subseteqq","⪽":"subdot","⫃":"subedot","⫋":"subsetneqq","⪿":"subplus","⫕":"subsub","⫆":"supseteqq","⫘":"supdsub","⫄":"supedot","⫗":"suphsub","⫂":"supmult","⫌":"supsetneqq","⫔":"supsub","⇙":"swArr","⤪":"swnwar","ť":"tcaron","т":"tcy","⌕":"telrec","ϑ":"vartheta","⨱":"timesbar","⫱":"topcir","⫚":"topfork","‴":"tprime","▵":"utri","≜":"trie","⨹":"triplus","⨻":"tritime","𝓉":"tscr","ћ":"tshcy","⥣":"uHar","ў":"ubrcy","𝔲":"ufr","⌏":"ulcrop","ū":"umacr","𝕦":"uopf","υ":"upsilon","⇈":"uuarr","⌎":"urcrop","◹":"urtri","⋰":"utdot","⫩":"vBarv","⦜":"vangrt","⊻":"veebar","⋮":"vellip","𝕧":"vopf","⦚":"vzigzag","⩟":"wedbar","≙":"wedgeq","℘":"wp","𝔴":"wfr","𝔵":"xfr","𝓍":"xscr","ŷ":"ycirc","ї":"yicy","𝓎":"yscr","ž":"zcaron","ż":"zdot","ж":"zhcy","𝕫":"zopf","‍":"zwj"}};

Object.assign(exports.ascii.prefixes,exports.ascii._all,exports.ascii.entities),
Object.assign(exports.ascii._all,exports.ascii.html4,exports.ascii.html5,exports.ascii.characters),
Object.assign(exports.ascii._all, exports.ascii.entities),
Object.assign(exports.ascii.html4,exports.ascii.prefixes),
Object.assign(exports.ascii.html5,exports.ascii.prefixes);

delete exports.ascii.prefixes;

function attachAscii(options, flip) {
	Object.defineProperty(exports, "__esModule", {value: true});
	var ascii = ASCII, keys;

	keys = {
		"specialchar": "characters",
		"xml": "entities",
		"html": "html5",
		"all": "_all",
		"allchar": "_all",
	};

	options.ascii=ascii[keys[options.type]];
	
	if (flip && typeof flip==="object") {
		each(options.ascii, function(char, entity) {
			flip["&" + entity + ";"]=char;
		});
		options.ascii=flip;
	}

	return options;
}

function entParser(data, options, callback, _src, encode) {
	var codepoint, codepoints = {"dec": 10, "oct": 8},
		codeAt, entIdentifier = {
			"dec": "&#",
			"hex": "&#x"
		};
	codepoint=codepoints[options.encoding]||16;
	if (encode) {
		var str = String(data), value=[];
		if (options.encoding==="entities") {
			var keys = Object.keys(options.ascii).join("|\\");
			var regex = new RegExp("(?:\\" + keys + ")", "g");
			return str.replace(regex, function(matched) {
				if (matched) {
					return "&" + options.ascii[matched] + ";";
				}
				return matched;
			});
		}
		String(data).replace(SMP_RANGE, function(_m, _a, pos) {
			value[pos]=entIdentifier[options.encoding] + codePointAt(str, pos).toString(codepoint) + ";";
			return "";
		}).replace(/([\w])/g, function(m, _a, pos) {
			value[pos]=m;
			return m;
		}).replace(/([\W])/g, function(_m, _a, pos) {
			codeAt = charCodeAt.call(str, pos);
			if (!(codeAt >= HIGH_SURROGATE_FROM && codeAt <= HIGH_SURROGATE_TO)) {
				if (indexOf.call(value, _m)===-1 && _m!=="\udcce") {
					value[pos]=entIdentifier[options.encoding] + _m.charCodeAt().toString(codepoint) + ";";
					return "";
				}
			}
		});
		call(callback, options, value);
		return value.join("");
	} else {
		var rmatcher, rhexdec=/\&#x?([\da-f]+);/gi, val;
		if (options.decoding==="entities") {
			for(var name in options.ascii) {
				rmatcher = new RegExp(name, "g");
				data=data.replace(rmatcher, options.ascii[name]);
			}
		}

		data = data.replace(rhexdec, function(_expr, matched) {
			val = String.fromCodePoint(parseInt(matched, codepoint));
			if (hasOwn.call(options.cprev, val)) {
				return val;
			}
			return _expr;
		});
		return data;
	}
}

/**
 * 
 */
Entcoder.entHooks = {
	encode: function(data, options, callback, src) {
		attachAscii(options);
		return entParser(data, options, callback, src, true);
	},
	decode: function(data, options, callback, src) {
		attachAscii(options, {});
		return entParser(data, options, callback, src, false);
	}
};

// Create addProp src instance method
// TODO: Need to improve deep addProp Handler
function addProp(src) {
	each(REG_OPTGROUP, function(prop, value) {
		if (src[prop] && !value.test(src[prop])) {
			delete src[prop];
		}
	});
}

/**
 * 
 */
each(["encode", "decode"], function(_i, method) {
	Entcoder.prototype[method]=function(data, src, callback) {
		addProp(src  = src||{});
		src.encoding = src.encoding||"entities";
		src.type		 = src.type||"xml";
		return Entcoder.entHooks[method](data, src, callback);
	};
});

/**
 * Create each Instance method
 * -----------------------------------------------
 * TODO: Need to change each other solution
 * !Don't pass {extra|matched} parameters
 */
function each(obj, callback, extra, matched) {
	matched=matched||[];
	isArray(obj) ?
		each(create(obj), callback, true, []) :
		call(function (name) {
			for (name in obj) {
				extra && (name = +name);
				if (call(callback, obj[name], name, obj[name]) === false) {
					matched.push(obj[name]);
					break;
				}
			}
		});
	return matched;
}

// Use `create` Array to Object convertation
function create(src){
	for(var i=0, length=src.length,
	obj={}; i < length; i++) obj[i]=src[i]; return obj;
}

function call(fn, keyword, args) {
	args 		= slice.call(arguments);
	fn 			= args.shift();
	keyword = args.shift();
	return _apply(fn, keyword, args);
}

function _apply(fn, keyword, args) {
	return isFunction(fn) && fn.apply(keyword, args);
}

function error(message) {
	throw new Error(message);
}

// Checks a valid function
function isFunction(obj) {
	return typeof obj==="function" && typeof obj.items!=="function";
}

/**
 * Expose support vars for convenience
 * ------------------------------------------------
 */
Entcoder.support = support;
Entcoder.each		 = each;

Entcoder.prototype.support		 = support;
Entcoder.prototype.constructor = Entcoder;

/**
 * EXPOSE
 * TODO: Enhance EXPOSE method of identify versions
 * ------------------------------------------------
 */
// Register as named AMD module
// since Entcoder can be concatenated with other
// files that may use define
if (typeof define==="object" && define.amd) {
	define(function() {
		return Entcoder;
	});
}

// CommonJS for browser emulators (trac-13566)
// Attach/Extend Entcoder with Expose Entcoder Identifier `window`
if (window && typeof window.document==="object") {
	window.Entcoder=Entcoder;
}


return Entcoder;
});
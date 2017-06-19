// Placeholder Polyfill

!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);

/* JSON data from server, that contains
 * question cards a list of input fields
 */
var rawCardList = [{
    "name": "Contact",
    "question": "How can we contact you?",
    "icon": "images/contact.png",
    "inputList": [{
        "label": "email",
        "attrList": {
          "type": "email",
          "id": "cf-email",
          "required": true,
          "autocomplete": "email",
          "placeholder": "e-mail address"
        }
      },
      {
        "label": "tel",
        "attrList": {
          "type": "tel",
          "id": "cf-tel",
          "required": true,
          "autocomplete": "tel",
          "placeholder": "telephone number"
        }
      }
    ]
  },
  {
    "name": "Delivery",
    "question": "Which address should we send your order to?",
    "icon": "images/delivery.png",
    "inputList": [{
        "label": "name",
        "attrList": {
          "type": "text",
          "id": "cf-name",
          "required": true,
          "autocomplete": "name",
          "placeholder": "full name"
        }
      },
      {
        "label": "address",
        "attrList": {
          "type": "text",
          "id": "cf-address",
          "required": true,
          "autocomplete": "street-address",
          "placeholder": "street address"
        }
      },
      {
        "label": "postal code",
        "attrList": {
          "class": "cf-25",
          "type": "number",
          "id": "cf-postal",
          "required": true,
          "autocomplete": "postal-code",
          "placeholder": "zipcode",
          "min": "1007",
          "max": "9999",
          "maxlength": 4
        }
      },
      {
        "label": "city",
        "attrList": {
          "class": "cf-75",
          "type": "text",
          "id": "cf-city",
          "required": true,
          "autocomplete": "on",
          "placeholder": "city"
        }
      }
    ]
  },
  {
    "name": "Billing",
    "question": "Which address should we use for billing?",
    "icon": "images/billing.png",
    "controller": 2,
    "inputList": [{
        "label": "same address",
        "attrList": {
          "class": "cf-50",
          "type": "radio",
          "id": "cf-b-same",
          "name": "billingAddress",
          "value": "same",
          "checked": true
        }
      },
      {
        "label": "different address",
        "attrList": {
          "class": "cf-50",
          "type": "radio",
          "id": "cf-b-different",
          "name": "billingAddress",
          "value": "different"
        }
      },
      {
        "label": "name",
        "attrList": {
          "type": "text",
          "id": "cf-name-b",
          "required": true,
          "autocomplete": "name",
          "placeholder": "full name",
          "disabled": true
        }
      },
      {
        "label": "address",
        "attrList": {
          "type": "text",
          "id": "cf-address-b",
          "required": true,
          "autocomplete": "street-address",
          "placeholder": "street address",
          "disabled": true
        }
      },
      {
        "label": "postal code",
        "attrList": {
          "class": "cf-25",
          "type": "number",
          "id": "cf-postal-b",
          "required": true,
          "autocomplete": "postal-code",
          "placeholder": "zipcode",
          "min": "1007",
          "max": "9999",
          "maxlength": 4,
          "disabled": true
        }
      },
      {
        "label": "city",
        "attrList": {
          "class": "cf-75",
          "type": "text",
          "id": "cf-city-b",
          "required": true,
          "autocomplete": "on",
          "placeholder": "city",
          "disabled": true
        }
      }
    ]
  },
  {
    "name": "Payment",
    "question": "How would you like to pay?",
    "icon": "images/payment.png",
    "controller": 2,
    "inputList": [{
        "label": "C.O.D.",
        "attrList": {
          "class": "cf-50",
          "type": "radio",
          "id": "cf-p-same",
          "name": "paymentmethod",
          "value": "c.o.d."
        }
      },
      {
        "label": "Credit Card",
        "attrList": {
          "class": "cf-50",
          "type": "radio",
          "id": "cf-b-different",
          "name": "paymentmethod",
          "value": "credit card",
          "checked": true
        }
      },
      {
        "label": "Name on card",
        "attrList": {
          "type": "text",
          "id": "cf-cc-name",
          "required": true,
          "autocomplete": "cc-name",
          "placeholder": "full name"
        }
      },
      {
        "label": "Card Number",
        "attrList": {
          "type": "text",
          "id": "cf-cc-number",
          "required": true,
          "autocomplete": "cc-number",
          "placeholder": "credit card number",
          "pattern": "[0-9-]{12,20}"
        }
      },
      {
        "label": "CVC",
        "attrList": {
          "class": "cf-25",
          "type": "text",
          "id": "cf-cc-cvc",
          "required": true,
          "autocomplete": "cc-csc",
          "placeholder": "cvc code",
          "pattern": "[0-9]{3,4}"
        }
      },
      {
        "label": "expiration date",
        "attrList": {
          "class": "cf-75",
          "type": "text",
          "id": "cf-cc-exp",
          "required": true,
          "autocomplete": "cc-exp",
          "placeholder": "MM-YYYY",
          "pattern": "^[0-9]{2}-20[12][0-9]$"
        }
      }
    ]
  }
];

/*-----------Card-Class-------------*/
function Card(obj) {
  var self = this;
  this.name = obj.name;
  this.controller = obj.controller;
  this.question = obj.question;
  this.icon = obj.icon;
  this.inputList = [];
  this.index = cardList.length;
  obj.inputList.forEach(function(input) {
    self.inputList.push(new Input(input));
  });
  cardList.push(this);
  this.valid = false;
}
Card.prototype.show = function() {
  question.textContent = this.question;
  cardIcon.setAttribute("src", this.icon);
  cardIcon.setAttribute("alt", this.name);
  inputSection.innerHTML = "";
  this.inputList.forEach(function(input) {
    if (input.elem.type == "radio") {
      input.createLabel().appendChild(input.elem);
    } else {
      inputSection.appendChild(input.elem);
    }
    input.loadValue();
  });
  return this;
};

Card.prototype.next = function() {
  this.validate();
  if (this.valid) {
    loadNextCard();
  }
  return this;
};

Card.prototype.createNext = function() {
  var self = this;
  var next = document.createElement("button");
  next.textContent = "Next";
  next.id = "cf-next";
  inputSection.appendChild(next);
  next.addEventListener("click", function() {
    self.next();
  }, false);
  return this;
};
Card.prototype.createSubmit = function() {
  var self = this;
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.value = "Submit";
  inputSection.appendChild(submit);
  submit.addEventListener("click", function() {
    self.validate();
    if (self.valid) {
      alert("Your order has been sent.");
    }
  }, false);
  return this;
};

Card.prototype.createButton = function() {
  cardList.length - 1 == activeCard ?
    this.createSubmit() :
    this.createNext();
};

Card.prototype.validate = function() {
  var inputList = this.filterInput();
  var result, i, l = this.inputList.length;
  for (i = 0; i < l; i++) {
    result = this.inputList[i].validate();
    if (!result) {
      break;
    }
  }
  this.valid = result;
  return this;
};

Card.prototype.filterInput = function() {
  var num = this.controller || 0;
  return this.inputList.slice(num);
};

Card.prototype.setDisabled = function(bool) {
  this.filterInput().forEach(function(input) {
    input.elem.disabled = bool;
  });
  return this;
};

Card.prototype.copyCardTo = function(destination) {
  dFiltered = destination.filterInput();
  this.filterInput().forEach(function(input, i) {
    input.copyValue(dFiltered[i]).setPair(dFiltered[i]);
  });
  return this;
};

Card.prototype.saveValues = function() {
  this.inputList.forEach(function(input) {
    input.value = input.elem.value;
  });
  return this;
};
Card.prototype.loadValues = function() {
  this.inputList.forEach(function(input) {
    input.elem.value = input.value || "";
  });
  return this;
};

function loadNextCard(num) {
  num = typeof num != "undefined" ? num : activeCard + 1;
  var mileStones = progressBar.getElementsByTagName("span");
  mileStones.item(activeCard).style.background = "#828282";
  cardList[activeCard].saveValues();
  activeCard = num;
  mileStones.item(activeCard).style.background = "#3784e1";
  cardList[activeCard]
    .show()
    .createButton();
}

/*------------Input-Class--------------*/

function Input(obj) {
  var self = this
  this.label = obj.label;
  this.elem = document.createElement("input");
  Object.keys(obj.attrList).forEach(function(attr) {
    var value = obj.attrList[attr];
    self.elem.setAttribute(attr, value);
    if (attr == "value") {
      this.value = value;
    }
  });
  this.pattern = this.getPattern();
  this.elem.addEventListener("focusout", function() {
    self.validate();
  }, false)
}

Input.prototype.saveValue = function() {
  this.value = this.elem.value;
  return this;
};

Input.prototype.loadValue = function() {
  this.elem.value = this.pair ? this.pair.value : this.value || "";
  return this;
};

Input.prototype.createLabel = function() {
  var label = document.createElement("label");
  label.setAttribute("for", this.elem.id);
  label.textContent = this.label;
  inputSection.appendChild(label);
  return label;
};

Input.prototype.copyValue = function(destination) {
  destination.elem.value = this.value || "";
  return this;
};

Input.prototype.setPair = function(destination) {
  destination.pair = this;
  return this;
}

Input.prototype.removePair = function() {
  delete this.pair;
  return this;
}

Input.prototype.getPattern = function() {
  var pattern = this.elem.getAttribute('pattern');
  if (!pattern) {
    switch (this.elem.getAttribute('type')) {

      case "email":
        pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        break;
      case "tel":
        pattern = /(\+3|0)6\({0,1}\d{2}\){0,1}[- ]{0,1}\d{3}[- ]{0,1}\d{3,4}/;
        break;
      default:
        pattern = /^[a-z0-9]{2,}[ ,.'-]*[a-z0-9]+$/i;
    }
  } //if
  return pattern;
}; //fn

Input.prototype.validate = function() {
  var result = this.elem.checkValidity();
  /*var pattern = new RegExp(this.pattern);
  this.valid = pattern.test(input.elem.textContent);
  var result = this.valid;*/
  return result;
}


Input.prototype.check = function() {

};


function createProgressBar() {
  rawCardList.forEach(function(card, i) {
    var li = document.createElement("li");
    li.textContent = card.name;
    progressBar.appendChild(li);
    var span = document.createElement("span");
    li.appendChild(span);
    if (i == 0) {
      span.style.background = "#3784e1";
    }
    li.addEventListener("click", function() {
      if (i != activeCard) {
        if (i > activeCard) {
          cardList[activeCard].validate();
          var result = true,
            j = activeCard;
          while (j < i) {
            if (!cardList[j].valid) {
              result = false;
              var next = document.getElementById("cf-next");
              next.click();
              break;
            }
            j++;
          }
          if (result) {
            loadNextCard(i);
          }

        } else {
          loadNextCard(i);
        }
      }
    }, false);
  });
}

/*-----------view-------------*/

// Selectors for template
var question = document.getElementById("cf-question");
var cardIcon = document.getElementById("cf-icon");
var inputSection = document.getElementById("cf-body");
var progressBar = document.getElementById("cf-progressbar");

var cardList = []; //array of question cards
var activeCard = 0; //index of initial question card

/* Tis few lines construct every card with
 * every inputs. After the first has been created
 * and before constructing the rest of the cards
 * it renders the first one.
 */
var card0 = new Card(rawCardList[0]).show().createNext();
createProgressBar();
var card1 = new Card(rawCardList[1]);
var card2 = new Card(rawCardList[2]);
card1.copyCardTo(card2);
var card3 = new Card(rawCardList[3]);

card2.inputList[0].elem.addEventListener("change", function() {
  card1.copyCardTo(card2);
  card2.setDisabled(true);
}, false);

card2.inputList[1].elem.addEventListener("change", function() {
  card2.inputList.forEach(function(input) {
    input.elem.value = "";
    input.removePair().value = "";
  });
  card2.setDisabled(false);
}, false);

card3.inputList[0].elem.addEventListener("change", function() {
  card3.setDisabled(true);
}, false);

card3.inputList[1].elem.addEventListener("change", function() {
  card3.setDisabled(false);
}, false);

card3.inputList[5].elem.addEventListener("input", function() {
  console.log("triggered");
  var elem = card3.inputList[5].elem;
  var m, d, y;
  switch (elem.value.length) {
    case 2:
      m = elem.value;
      elem.value += "-";
      now = new Date();
      break;
    case 7:
      y = elem.value.slice(-4);
      m = elem.value.slice(0, 2);
      var exp = new Date(y, m);
      if (now > exp) {
        elem.setCustomValidity("Your card has been expired");
      } else {
        elem.setCustomValidity("");
      }
      break;
  }

});


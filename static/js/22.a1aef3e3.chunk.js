(this.webpackJsonpnomismata=this.webpackJsonpnomismata||[]).push([[22],{393:function(e,n,t){"use strict";var a,r=t(11),o=t(38),i=t(48),l=t(50),s=t(49),c=t(0),m=t.n(c),p=t(12),d=(t(14),function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={fontColor:e.fontColor,fontSize:e.fontSize+"px",letter:e.letter,textAlign:e.textAlign,fontWeight:e.fontWeight},a}return Object(i.a)(t,[{key:"render",value:function(){var e=p.a.div(a||(a=Object(r.a)(["\n      text-align: ","!important;\n      #Spanlet{\n        color:",";\n        font-family:Montserrat, sans-serif;\n        font-size: ",";\n        font-weight:",";\n      }\n    "])),this.state.textAlign,this.state.fontColor,this.state.fontSize,this.state.fontWeight);return m.a.createElement(m.a.Fragment,null,m.a.createElement(e,null,m.a.createElement("span",{id:"Spanlet"},this.state.letter)))}}]),t}(m.a.Component));n.a=d},394:function(e,n,t){"use strict";var a,r=t(11),o=t(38),i=t(48),l=t(50),s=t(49),c=t(0),m=t.n(c),p=t(12),d=t(14),u=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={img:"url("+d.a[e.img]+")",letter:e.letter},a}return Object(i.a)(t,[{key:"render",value:function(){var e=p.a.div(a||(a=Object(r.a)(["\n    background-image: ",";\n    background-color: #ccc;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-attachment: scroll;\n    background-size: cover;\n    height:390px;\n    div{\n      background-color:rgba(0,0,0,0.4);\n      height:100%;\n      h1 {\n        max-width:1100px;\n        position:relative;\n        color:#ffffff;\n        font-size: 48px;\n        margin: auto;\n        font-family: Montserrat, sans-serif;\n        font-weight:900;\n        top:240px;\n        text-align:center;\n      }\n    }\n  \n    "])),this.state.img);return m.a.createElement(m.a.Fragment,null,m.a.createElement(e,null,m.a.createElement("div",null,m.a.createElement("h1",null,this.state.letter))))}}]),t}(m.a.Component);n.a=u},395:function(e,n,t){"use strict";var a,r=t(11),o=t(38),i=t(48),l=t(50),s=t(49),c=t(0),m=t.n(c),p=t(12),d=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={},a}return Object(i.a)(t,[{key:"render",value:function(){var e=p.a.div(a||(a=Object(r.a)(['\n      background-color: #fff;\n      border-style: solid;\n      border-width: 0;\n      background-clip: border-box;\n      border-color: #e91818;\n      border-top-width: 8px;\n      border-right-width: 8px;\n      border-bottom-width: 8px;\n      border-left-width: 8px;\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px;\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n      box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 50%);\n      display:block!important;\n      text-align:left;\n      margin:auto;\n      padding: 30px 15px;\n      span{\n        color:rgb(233, 24, 24);\n        font-family:Montserrat, sans-serif;\n        font-size:30px;\n        font-weight:900;\n      }\n      span{\n        font-family: Muli, sans-serif;\n        color: rgb(121, 0, 0);\n      }\n      p{\n        clear:both;\n        color:#6d6d6d;\n        font-family (stack):Muli, sans-serif;\n        font-size:16px;\n        font-weight:400;\n        line-height:25.6px;\n        vertical-align:baseline;\n        letter-spacing:normal;\n        word-spacing:-2px;\n        text-align:left;\n      }\n      input:focus{\n        background-color: #F2F2F2;\n        border:solid 1px #719ECE;\n        box-shadow: none;\n        \n      }\n      form{\n        div{\n          display: grid;\n          grid-template-columns: repeat(2, 1fr);\n          grid-gap: 0px;\n          input{\n            border:none;\n            width:100%;\n          }\n          Label{\n            color: rgb(58,58,58);\n            font-family:Muli, sans-serif;\n            font-size:18px;\n            font-weight:400;\n            letter-spacing: normal;\n          }\n         \n        }\n      }\n      input{\n        font-size: 18px;\n        font-weight: 400;\n        font-family: Muli, sans-serif;\n        padding-left: 9px;\n        background-color: #F2F2F2;\n        \n      }\n      select{\n        font-size: 18px;\n        font-weight: 400;\n        font-family: Muli, sans-serif;\n        padding-left: 9px;\n        background-color: #F2F2F2;\n      }\n      .explain{\n        font-family: Muli, sans-serif;\n        font-weight: 400;\n        color: rgb(109, 109, 109);\n        font-size: 16px;\n      }\n      #submit{\n        background: #c61913;\n        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);\n        width: 137px;\n        height:47px;\n        color: #fff;\n        background-color: #e91818;\n        padding-top: 7px;\n        padding-bottom: 7px;\n        padding-left: 35px;\n        padding-right: 35px;\n        white-space: normal;\n        border-radius: 2px;\n        font-family: Muli, sans-serif;\n        font-weight: 400;\n        font-size:18px;\n        text-shadow: none;\n        cursor: pointer;\n        border:none;\n        margin-top:30px;\n        display:block;\n      }\n      @import url(\'https://fonts.googleapis.com/css?family=Lato:400,500,600,700&display=swap\');\n      *{\n        \n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      html,body{\n        display: grid;\n        height: 100%;\n        place-items: center;\n      }\n      .form-group{\n         display: block;\n         text-align: left;\n         margin-top: 10px;\n         margin-bottom: 10px;\n      }\n      .wrapper{\n        min-height: 100px;\n        min-width: 180px;\n        align-items: left;\n        border-radius: 5px;\n        margin: 5px;\n        padding: 10px 5px;\n      }\n      .wrapper .option{\n        height: 40px;\n        width: 77px;\n        display: flex;\n        font-family: Muli, sans-serif;\n        font-size:15px;\n        align-items: center;\n        border-radius: 5px;\n        cursor: pointer;\n        padding: 0 3px;\n        margin-right: 10px;\n        \n        border: 2px solid lightgrey;\n        transition: all 0.3s ease;\n      }\n      .wrapper .option .dot{\n        height: 15px;\n        width: 15px;\n        background: #d9d9d9;\n        border-radius: 50%;\n        position: relative;\n        margin-right: 0;\n      }\n      .wrapper .option .dot::before{\n        position: absolute;\n        content: "";\n        top: 4px;\n        left: 4px;\n        background: rgb(0, 128, 0);\n        border-radius: 50%;\n        opacity: 0;\n        transform: scale(1.5);\n        transition: all 0.3s ease;\n      }\n      input[type="radio"]{\n        display: none;\n      }\n      #option-1:checked:checked ~ .option-1,\n      #option-2:checked:checked ~ .option-2{\n        border-color: rgb(0, 128,0);\n        background: rgba(0, 80, 0, 0.15);\n      }\n      #option-1:checked:checked ~ .option-1 .dot,\n      #option-2:checked:checked ~ .option-2 .dot{\n        background: rgb(0, 128,0);\n      }\n      #option-1:checked:checked ~ .option-1 .dot::before,\n      #option-2:checked:checked ~ .option-2 .dot::before{\n        opacity: 1;\n        transform: scale(1);\n      }\n      .wrapper .option span{\n        font-size: 15px;\n        color: #808080;\n      }\n      .submit-title{\n        color: rgb(233,24,24);\n      }\n      .ready-hidden{\n        margin-top:40px;\n      }\n      section>nav>label{\n        font-family: Muli, sans-serif;\n        font-size: 18px;\n        font-weight: 400;\n        color: rgb(58,58,58)\n      }\n      @media(max-width:900px) {\n        .right{\n          display: none;\n        }\n        .part1, .part2{\n          padding-right: 10px !important;\n          \n        }\n        .hidden-one{\n          display: block;\n        }\n        .ready-hidden{\n          display: none !important;\n        }\n        .option{\n          margin-bottom: 5px;\n        }\n        .right{\n          margin:0px !important;\n        }\n        form>div{\n          width: 100% !important;\n        }\n        form{\n        div{\n          display: inline-block;\n          // grid-template-columns: repeat(2, 1fr);\n          // grid-gap: 0px;\n          input{\n            border:none;\n            width:100%;\n          }\n        }\n        #extension2{\n          width: 90%;\n         }\n        .whole-part{\n          margin: 0;\n        }\n        .form-group{\n         margin: 0 ;\n        }\n        .currently-one{\n          margin-left:0;\n        }\n    '])));return m.a.createElement(m.a.Fragment,null,m.a.createElement(e,{id:"submit-box"},m.a.createElement("span",{className:"submit-title"},"Let's Get Started!"),m.a.createElement("p",{className:"explain"},"Fill out the fields below and a Host Merchant Services representative will contact you. Your submitted information is private and secure."),m.a.createElement("form",{onSubmit:""},m.a.createElement("div",{className:"whole-part"},m.a.createElement("div",{style:{display:"block",margin:"0",paddingRight:"10px"},className:"row part1"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Name ",m.a.createElement("span",{style:{fontSize:"20px"}},"*")),m.a.createElement("input",{type:"text",className:"form-control",id:"firstName",name:"",placeholder:"First Name"})),m.a.createElement("div",{className:"form-group hidden-one",style:{display:"none",textAlign:"left",marginTop:"10px"}},m.a.createElement("input",{type:"text",className:"form-control",id:"lastName",name:"",placeholder:"Last Name"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Company ",m.a.createElement("span",{style:{fontSize:"20px"}},"*")),m.a.createElement("input",{type:"text",className:"form-control",id:"company",name:"",placeholder:"Company"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Phone ",m.a.createElement("span",{style:{fontSize:"20px"}},"*")),m.a.createElement("input",{type:"text",className:"form-control",id:"phone",name:"",placeholder:"Your best phone"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Email ",m.a.createElement("span",{style:{fontSize:"20px"}},"*")),m.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"",placeholder:"Your best email"}))),m.a.createElement("div",{style:{display:"block",margin:"0"},className:"row part2"},m.a.createElement("div",{className:"form-group ready-hidden"},m.a.createElement("input",{type:"text",className:"form-control",id:"lastName",name:"",placeholder:"Last Name"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Business Location ",m.a.createElement("span",{style:{fontSize:"20px"}},"*")),m.a.createElement("input",{type:"text",className:"form-control",id:"business",name:"",placeholder:"Business Location"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Phone Extension ",m.a.createElement("span",{style:{fontSize:"20px"}},"*")),m.a.createElement("input",{type:"text",className:"form-control",id:"extensiion",name:"",placeholder:"Phone Extension"})))),m.a.createElement("section",{className:"currently-one"},m.a.createElement("nav",{className:"form-group"},m.a.createElement("label",null,"Do you currently take credit cards?"),m.a.createElement("nav",{className:"wrapper d-flex"},m.a.createElement("nav",null,m.a.createElement("input",{type:"radio",name:"select",id:"option-1"}),m.a.createElement("label",{htmlFor:"option-1",className:"option option-1"},m.a.createElement("span",{style:{fontWeight:"normal"}},"Yes"),m.a.createElement("div",{className:"dot"}))),m.a.createElement("nav",null,m.a.createElement("input",{type:"radio",name:"select",id:"option-2"}),m.a.createElement("label",{htmlFor:"option-2",className:"option option-2"},m.a.createElement("span",{style:{fontWeight:"normal"}},"No"),m.a.createElement("div",{className:"dot"})))))),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Estimated Monthly Volume"),m.a.createElement("select",{className:"form-control",id:"extension2",name:"",placeholder:"Phone Extension"},m.a.createElement("option",null,"Under $5k"),m.a.createElement("option",null,"$5k - $20k"),m.a.createElement("option",null,"$20k - $50k"),m.a.createElement("option",null,"Over $50k")))),m.a.createElement("input",{id:"submit",type:"submit"})))}}]),t}(m.a.Component);n.a=d},422:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var a,r,o,i=t(0),l=t.n(i),s=t(14),c=t(11),m=t(12),p=m.a.div(a||(a=Object(c.a)(["\n  padding-bottom:0\n"]))),d=m.a.div(r||(r=Object(c.a)(["\n  max-width:1100px;\n  margin:auto;\n  padding:70px 15px;\n  .indivs{\n    margin-top:40px;\n  }\n  .row{\n    margin-top:50px;\n    .imgPart{\n      display:flex;\n      img{\n        margin:auto;\n        border-radius:10px;\n      }\n    }\n  }\n  p{\n    color:#3a3a3a;\n    font-family:Muli, sans-serif;\n    font-size:18px;\n    line-height:33.4286px;\n    text-align:left;\n    margin-top:10px;\n    a{\n      color:#e91818!important;\n      text-decoration:underline!important;\n      cursor:pointer;\n    }\n    a:hover{\n      color:#3a3a3a!important;\n    }\n  }\n"]))),u=m.a.div(o||(o=Object(c.a)(["\n  background-image: url(",");\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  div{\n    div{\n      justify-content: center;\n      margin: 70px auto 0px auto;\n      max-width:1120px;\n      margin:auto;\n      text-align:center;\n      .left{\n        padding:0;\n        display:block;\n        text-align:left;\n        img{\n          width:175px;\n        }\n        span{\n          text-align:left;\n          color:#ffffff;\n          font-family:Montserrat, sans-serif;\n          font-size:45px;\n          line-height:58.5px;\n          font-weight:900;\n        }\n        .redSpan{\n          text-align:left!important;\n          margin-top:20px;\n          span{\n            color:#e91818;\n          }\n        }\n      }\n      .right{\n        display:block\n      }\n      @media screen and (max-width: 992px) {\n            grid-gap: 15px;       \n        }\n      @media screen and (max-width: 880px) {\n          display:block;\n          margin:0 20px;\n      }\n    }\n  }\n"])),s.a.ApplyMerchantCash2),h=t(394),g=t(395),f=t(393),b=function(e){return l.a.createElement(p,null,l.a.createElement(h.a,{img:"ApplyMerchantCash2",letter:"Cash Discount Program"}),l.a.createElement(d,null,l.a.createElement("div",{className:"indivs"},l.a.createElement(f.a,{fontSize:"30",fontColor:"#e91818",fontWeight:"900",textAlign:"left",letter:"What is the Cash Discount Program?"}),l.a.createElement("p",null,"The cash discount program is an ingenious way to offset your merchant service fees without increasing your pricing. Most merchants who use the cash discount program pay NOTHING for their credit card processing. Period. You\u2019re probably saying \u201chow does the cash discount program work? It sound\u2019s too good to be true!\u201d. Let us explain.")),l.a.createElement("div",{className:"indivs"},l.a.createElement("p",null,"First of all, the cash discount program is a new account type that is growing in massive popularity across the country. Though not right for all business types, the cash discount program works extremely well with many business models.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(f.a,{fontSize:"30",fontColor:"#e91818",fontWeight:"900",textAlign:"left",letter:"How does the cash discount program work?"}),l.a.createElement("p",null,"Here\u2019s how the",l.a.createElement("a",null," cash discount program")," works:  The credit card terminal will automatically implement a small customer service fee to all customers while discounting that fee to customers who pay in cash. This is where the program gets its name!  The customer service fee is equal to the cost of processing each transaction, thus eliminating the merchant\u2019s bill.  The account is completely free for merchants processing over $5K/month and only $19.99 for accounts processing under $5K/month.  *Our cash discount program is within the guidelines of Visa, MasterCard, State and processor regulations.")),l.a.createElement("div",{className:"col-lg-6 imgPart"},l.a.createElement("img",{src:s.a.NoCostAccount1}))),l.a.createElement("div",{className:"indivs"},l.a.createElement(f.a,{fontSize:"30",fontColor:"#e91818",fontWeight:"900",textAlign:"left",letter:"Businesses that work well with cash discount"}),l.a.createElement("p",null,"Some business types work better with cash discount than others. Many times it comes down to whether or not the customers would be upset with having a service fee included in their transaction. The business owner would ultimately know best whether this type of payment processing account would work well for them or not. There are, however, certain industries that generally work very well with the cash discount payment processing account. For example, \u201cservice-based businesses\u201d generally work very well \u2013 automotive shops, HVAC, landscaping, electrical, etc.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(f.a,{fontSize:"30",fontColor:"#e91818",fontWeight:"900",textAlign:"left",letter:"Is the cash discount program the same as surcharging?"}),l.a.createElement("p",null,"No, the cash discount program is not the same as surcharging.  They seem extremely similar which can make it confusing for merchants.  Heres the difference between the cash discount program and surcharging:"),l.a.createElement("p",null,l.a.createElement("a",null,l.a.createElement("strong",null,"Surcharging"))," \u2013 Charging a customer an extra fee for paying with a credit card. This is, in essence, disincentivizing the customer to use a card."),l.a.createElement("p",null,l.a.createElement("a",null,l.a.createElement("strong",null,"Cash Discount"))," \u2013  Adds a service fee to \u201call transactions\u201d but applies a discount equal to the service fee if the customer pays with cash or check. This is, in essence, incentivizing the use of cash.")),l.a.createElement("div",{className:"col-lg-6 imgPart"},l.a.createElement("img",{src:s.a.NoCostAccount2}))),l.a.createElement("div",{className:"indivs"},l.a.createElement(f.a,{fontSize:"30",fontColor:"#e91818",fontWeight:"900",textAlign:"left",letter:"What about e-commerce businesses?"}),l.a.createElement("p",null,"Site surveys are not only for brick and mortar businesses. Online businesses may also be required to participate in a site survey. Even though there is no physical retail location, there should be enough evidence to prove both the owner and the business. Examples of what constitutes acceptable evidence for an online company may include an office where work is performed (even if that\u2019s within a home-based business), store of inventory, marketing materials, proof of managing the online business, proof of website ownership."))),l.a.createElement(u,null,l.a.createElement("div",{style:{backgroundColor:"rgba(0,0,0,0.6)",padding:"70px 0"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left col-lg-5"},l.a.createElement("img",{src:s.a.LogoWhite}),l.a.createElement("span",null,"Experience A Higher Level Of Service"),l.a.createElement("div",{className:"redSpan"},l.a.createElement("span",null,"Cash Discount Program"))),l.a.createElement("div",{className:"right col-lg-7"},l.a.createElement(g.a,null))))))}}}]);
//# sourceMappingURL=22.a1aef3e3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{372:function(module,exports,__webpack_require__){__webpack_require__(373),__webpack_require__(477),module.exports=__webpack_require__(478)},478:function(module,exports,__webpack_require__){"use strict";(function(module){__webpack_require__(10),__webpack_require__(9),__webpack_require__(12);var _react=__webpack_require__(264),_addonActions=__webpack_require__(296),req=__webpack_require__(668);(0,_react.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module),(0,_addonActions.configureActions)({depth:100,limit:20})}).call(this,__webpack_require__(82)(module))},668:function(module,exports,__webpack_require__){var map={"./index.stories.js":669};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=668},669:function(module,exports,__webpack_require__){"use strict";(function(module){var _index=_interopRequireDefault(__webpack_require__(670));__webpack_require__(42),__webpack_require__(117),__webpack_require__(9),__webpack_require__(10),__webpack_require__(15),__webpack_require__(286);var _react=_interopRequireDefault(__webpack_require__(0)),_react2=__webpack_require__(264),_addonActions=__webpack_require__(296),_addonInfo=(__webpack_require__(682),__webpack_require__(684)),_reactstrap=__webpack_require__(791);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__(873);var ToggleIcon=function(_ref){var on=_ref.on;return _react.default.createElement("span",{style:{marginRight:8}},on?"-":"+")},ListItem=function(_ref2){var _ref2$level=_ref2.level,level=void 0===_ref2$level?0:_ref2$level,props=_objectWithoutProperties(_ref2,["level"]);return _react.default.createElement(_reactstrap.ListGroupItem,_extends({},props,{style:{paddingLeft:24+16*level,cursor:"pointer"}}))},dataInArray=[{key:"mammal",label:"Mammal",url:"https://www.google.com/search?q=mammal",nodes:[{key:"canidae",label:"Canidae",url:"https://www.google.com/search?q=canidae",nodes:[{key:"dog",label:"Dog",url:"https://www.google.com/search?q=dog",nodes:[]},{key:"fox",label:"Fox",url:"https://www.google.com/search?q=fox",nodes:[]},{key:"wolf",label:"Wolf",url:"https://www.google.com/search?q=wolf",nodes:[]}]}]},{key:"reptile",label:"Reptile",url:"https://www.google.com/search?q=reptile",nodes:[{key:"squamata",label:"Squamata",url:"https://www.google.com/search?q=squamata",nodes:[{key:"lizard",label:"Lizard",url:"https://www.google.com/search?q=lizard"},{key:"snake",label:"Snake",url:"https://www.google.com/search?q=snake"},{key:"gekko",label:"Gekko",url:"https://www.google.com/search?q=gekko"}]}]}];(0,_react2.storiesOf)("TreeMenu",module).addDecorator(_addonInfo.withInfo).add("default usage",function(){return _react.default.createElement(_index.default,{data:dataInArray,onClickItem:(0,_addonActions.action)("on click node")})}).add("apply bootstrap",function(){return _react.default.createElement(_index.default,{data:dataInArray,onClickItem:(0,_addonActions.action)("on click node"),debounceTime:125,renderItem:function(_ref3){var hasNodes=_ref3.hasNodes,isOpen=_ref3.isOpen,level=_ref3.level,label=_ref3.label,key=_ref3.key,active=_ref3.active,onClick=_ref3.onClick;return _react.default.createElement(ListItem,{level:level,key:key,onClick:onClick,active:active},hasNodes&&_react.default.createElement(ToggleIcon,{on:isOpen}),label)},renderList:function(_ref4){var search=_ref4.search,items=_ref4.items;return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_reactstrap.Input,{onChange:function(e){return search(e.target.value)},placeholder:"Type and search"}),_react.default.createElement(_reactstrap.ListGroup,null,items))}})})}).call(this,__webpack_require__(82)(module))},670:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(184);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=_interopRequireDefault(__webpack_require__(671)).default;exports.default=_default},671:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(323),_interopRequireDefault=__webpack_require__(184);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(370)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(371)),_toConsumableArray2=_interopRequireDefault(__webpack_require__(369)),_debounce2=_interopRequireDefault(__webpack_require__(672)),_classCallCheck2=_interopRequireDefault(__webpack_require__(676)),_createClass2=_interopRequireDefault(__webpack_require__(677)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(879)),_getPrototypeOf3=_interopRequireDefault(__webpack_require__(678)),_inherits2=_interopRequireDefault(__webpack_require__(880)),React=_interopRequireWildcard(__webpack_require__(0)),_walk=_interopRequireDefault(__webpack_require__(679)),_renderProps=__webpack_require__(681),TreeMenu=function(_React$Component){function TreeMenu(){var _getPrototypeOf2,_this;(0,_classCallCheck2.default)(this,TreeMenu);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(TreeMenu)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={openNodes:[],searchTerm:"",activeKey:""},_this.onSearch=function(value){var debounceTime=_this.props.debounceTime;(0,_debounce2.default)(function(searchTerm){return _this.setState({searchTerm:searchTerm})},debounceTime)(value)},_this.toggleNode=function(node){if(!_this.props.openNodes){var _openNodes=_this.state.openNodes,newOpenNodes=_openNodes.includes(node)?_openNodes.filter(function(openNode){return openNode!==node}):[].concat((0,_toConsumableArray2.default)(_openNodes),[node]),_activeKey=_this.props.activeKey||node;_this.setState({openNodes:newOpenNodes,activeKey:_activeKey})}},_this.getOnClickItem=function(props){return function(){_this.toggleNode(props.key),_this.props.onClickItem(props)}},_this.loadListItems=function(){var _this$props=_this.props,data=_this$props.data,renderItem=_this$props.renderItem,searchTerm=_this.state.searchTerm,openNodes=_this.props.openNodes||_this.state.openNodes,activeKey=_this.props.activeKey||_this.state.activeKey;return(0,_walk.default)({data:data,openNodes:openNodes,searchTerm:searchTerm}).map(function(_ref){var key=_ref.key,props=(0,_objectWithoutProperties2.default)(_ref,["key"]),onClick=_this.getOnClickItem((0,_objectSpread2.default)({key:key},props));return renderItem((0,_objectSpread2.default)({onClick:onClick,active:key===activeKey,key:key},props))})},_this}return(0,_inherits2.default)(TreeMenu,_React$Component),(0,_createClass2.default)(TreeMenu,[{key:"render",value:function(){var _this$props2=this.props,data=_this$props2.data,renderList=_this$props2.renderList;return React.createElement(React.Fragment,null,renderList({search:this.onSearch,items:data?this.loadListItems():[]}))}}]),TreeMenu}(React.Component);TreeMenu.defaultProps={data:{},onClickItem:function(props){return console.log(props)},debounceTime:125,renderItem:_renderProps.renderItem,renderList:_renderProps.renderList};var _default=TreeMenu;exports.default=_default},679:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(184);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _isEmpty2=_interopRequireDefault(__webpack_require__(680)),_slicedToArray2=_interopRequireDefault(__webpack_require__(878)),_toConsumableArray2=_interopRequireDefault(__webpack_require__(369)),_objectSpread2=_interopRequireDefault(__webpack_require__(370)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(371)),walk=function(_ref){var _ref$data=_ref.data,data=void 0===_ref$data?{}:_ref$data,props=(0,_objectWithoutProperties2.default)(_ref,["data"]),propsWithDefaultValues=(0,_objectSpread2.default)({parent:"",level:0},props);return Array.isArray(data)?data.reduce(function(all,node,index){return[].concat((0,_toConsumableArray2.default)(all),(0,_toConsumableArray2.default)(generateBranch((0,_objectSpread2.default)({node:node,nodeName:node.key,index:index},propsWithDefaultValues))))},[]):Object.entries(data).sort(function(a,b){return a[1].index-b[1].index}).reduce(function(all,_ref2){var _ref3=(0,_slicedToArray2.default)(_ref2,2),nodeName=_ref3[0],node=_ref3[1];return[].concat((0,_toConsumableArray2.default)(all),(0,_toConsumableArray2.default)(generateBranch((0,_objectSpread2.default)({node:node,nodeName:nodeName},propsWithDefaultValues))))},[])},generateBranch=function(_ref4){var node=_ref4.node,nodeName=_ref4.nodeName,props=(0,_objectWithoutProperties2.default)(_ref4,["node","nodeName"]),parent=props.parent,level=props.level,openNodes=props.openNodes,searchTerm=props.searchTerm,nodes=node.nodes,nodeProps=(0,_objectWithoutProperties2.default)(node,["nodes"]),key=[parent,nodeName].filter(function(x){return x}).join("/"),hasNodes=!!nodes&&!(0,_isEmpty2.default)(nodes),isOpen=hasNodes&&(openNodes.includes(key)||!!searchTerm),label=node.label||"unknown",isVisible=!searchTerm||function(label,searchTerm){var processString=function(text){return text.trim().toLowerCase()};return processString(label).includes(processString(searchTerm))}(label,searchTerm),currentItem=(0,_objectSpread2.default)({},props,nodeProps,{hasNodes:hasNodes,isOpen:isOpen,key:key}),data=(Array.isArray(nodes),nodes),nextLevelItems=isOpen?walk((0,_objectSpread2.default)({data:data},props,{parent:key,level:level+1})):[];return isVisible?[currentItem].concat((0,_toConsumableArray2.default)(nextLevelItems)):nextLevelItems},_default=walk;exports.default=_default},681:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(323);Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderItem=exports.renderList=void 0;var React=_interopRequireWildcard(__webpack_require__(0)),ToggleIcon=function(_ref){var on=_ref.on;return React.createElement("div",null,on?"-":"+")};exports.renderList=function(_ref2){var search=_ref2.search,items=_ref2.items;return React.createElement(React.Fragment,null,React.createElement("input",{style:{margin:".5em",paddingLeft:".4em"},placeholder:"Type and search",onChange:function(e){var value=e.target.value;search(value)}}),React.createElement("ul",{style:{listStyleType:"none",paddingLeft:0}},items))};exports.renderItem=function(_ref3){var _ref3$hasNodes=_ref3.hasNodes,hasNodes=void 0!==_ref3$hasNodes&&_ref3$hasNodes,_ref3$isOpen=_ref3.isOpen,isOpen=void 0!==_ref3$isOpen&&_ref3$isOpen,_ref3$level=_ref3.level,level=void 0===_ref3$level?0:_ref3$level,onClick=_ref3.onClick,active=_ref3.active,key=_ref3.key,_ref3$label=_ref3.label,label=void 0===_ref3$label?"unknown":_ref3$label;return React.createElement("li",{style:{paddingLeft:"".concat(2.25+1.25*level,"rem"),cursor:"pointer",color:active?"white":"#333",background:active?"#179ed3":"none"},onClick:onClick,key:key},hasNodes&&React.createElement("div",{style:{position:"absolute",left:"".concat(1+1.25*level,"rem"),width:"".concat(1,"rem"),height:"".concat(1,"rem")}},React.createElement(ToggleIcon,{on:isOpen})),label)}},687:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":325,"./nestedObjectAssign.js":325};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=687}},[[372,1,2]]]);
//# sourceMappingURL=main.861b89cd4770d6f606d1.bundle.js.map
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4546],{3163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(85893),a=n(11151);const s={sidebar_label:"chat",title:"agentchat.chat"},c=void 0,r={id:"reference/agentchat/chat",title:"agentchat.chat",description:"ChatResult",source:"@site/docs/reference/agentchat/chat.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/chat",permalink:"/autogen/docs/reference/agentchat/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/chat.md",tags:[],version:"current",frontMatter:{sidebar_label:"chat",title:"agentchat.chat"},sidebar:"referenceSideBar",previous:{title:"assistant_agent",permalink:"/autogen/docs/reference/agentchat/assistant_agent"},next:{title:"conversable_agent",permalink:"/autogen/docs/reference/agentchat/conversable_agent"}},h={},l=[{value:"ChatResult",id:"chatresult",level:2},{value:"chat_id",id:"chat_id",level:4},{value:"chat_history",id:"chat_history",level:4},{value:"summary",id:"summary",level:4},{value:"cost",id:"cost",level:4},{value:"human_input",id:"human_input",level:4},{value:"initiate_chats",id:"initiate_chats",level:3},{value:"a_initiate_chats",id:"a_initiate_chats",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"chatresult",children:"ChatResult"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"@dataclass\nclass ChatResult()\n"})}),"\n",(0,i.jsx)(t.p,{children:"(Experimental) The result of a chat. Almost certain to be changed."}),"\n",(0,i.jsx)(t.h4,{id:"chat_id",children:"chat_id"}),"\n",(0,i.jsx)(t.p,{children:"chat id"}),"\n",(0,i.jsx)(t.h4,{id:"chat_history",children:"chat_history"}),"\n",(0,i.jsx)(t.p,{children:"The chat history."}),"\n",(0,i.jsx)(t.h4,{id:"summary",children:"summary"}),"\n",(0,i.jsx)(t.p,{children:"A summary obtained from the chat."}),"\n",(0,i.jsx)(t.h4,{id:"cost",children:"cost"}),"\n",(0,i.jsx)(t.p,{children:"The cost of the chat. a tuple of (total_cost, total_actual_cost), where total_cost is a dictionary of cost information, and total_actual_cost is a dictionary of information on the actual incurred cost with cache."}),"\n",(0,i.jsx)(t.h4,{id:"human_input",children:"human_input"}),"\n",(0,i.jsx)(t.p,{children:"A list of human input solicited during the chat."}),"\n",(0,i.jsx)(t.h3,{id:"initiate_chats",children:"initiate_chats"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def initiate_chats(chat_queue: List[Dict[str, Any]]) -> List[ChatResult]\n"})}),"\n",(0,i.jsx)(t.p,{children:"Initiate a list of chats."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"chat_queue"})," ",(0,i.jsx)(t.em,{children:"List[Dict]"})," - a list of dictionaries containing the information about the chats."]}),"\n",(0,i.jsxs)(t.p,{children:["Each dictionary should contain the input arguments for ",(0,i.jsx)(t.a,{href:"/docs/reference/agentchat/conversable_agent#initiate_chat",children:(0,i.jsx)(t.code,{children:"ConversableAgent.initiate_chat"})}),". For example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'"sender": the sender agent.'}),"\n",(0,i.jsx)(t.li,{children:'"recipient": the recipient agent.'}),"\n",(0,i.jsx)(t.li,{children:'"clear_history" (bool): whether to clear the chat history with the agent. Default is True.'}),"\n",(0,i.jsx)(t.li,{children:'"silent" (bool or None): (Experimental) whether to print the messages in this conversation. Default is False.'}),"\n",(0,i.jsx)(t.li,{children:'"cache" (Cache or None): the cache client to use for this conversation. Default is None.'}),"\n",(0,i.jsx)(t.li,{children:'"max_turns" (int or None): maximum number of turns for the chat. If None, the chat will continue until a termination condition is met. Default is None.'}),"\n",(0,i.jsx)(t.li,{children:'"summary_method" (str or callable): a string or callable specifying the method to get a summary from the chat. Default is DEFAULT_summary_method, i.e., "last_msg".'}),"\n",(0,i.jsx)(t.li,{children:'"summary_args" (dict): a dictionary of arguments to be passed to the summary_method. Default is {}.'}),"\n",(0,i.jsx)(t.li,{children:'"message" (str, callable or None): if None, input() will be called to get the initial message.'}),"\n",(0,i.jsx)(t.li,{children:"**context: additional context information to be passed to the chat."}),"\n",(0,i.jsxs)(t.li,{children:['"carryover": It can be used to specify the carryover information to be passed to this chat.\nIf provided, we will combine this carryover with the "message" content when generating the initial chat\nmessage in ',(0,i.jsx)(t.code,{children:"generate_init_message"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"(list)"})," - a list of ChatResult objects corresponding to the finished chats in the chat_queue."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"a_initiate_chats",children:"a_initiate_chats"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"async def a_initiate_chats(\n        chat_queue: List[Dict[str, Any]]) -> Dict[int, ChatResult]\n"})}),"\n",(0,i.jsx)(t.p,{children:"(async) Initiate a list of chats."}),"\n",(0,i.jsxs)(t.p,{children:["args:\nPlease refer to ",(0,i.jsx)(t.code,{children:"initiate_chats"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"returns:\n(Dict): a dict of ChatId: ChatResult corresponding to the finished chats in the chat_queue."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var i=n(67294);const a={},s=i.createContext(a);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
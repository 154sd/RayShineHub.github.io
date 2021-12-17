

module.exports = [
  //Home
  { text: "主页", link: "/", icon: "reco-home" }, 
  //TimeLine
  { text: "时间轴", link: "/timeline/", icon: "reco-date" }, 
	//Contact
	{
	  text: "收藏", 
	  icon: "fas fa-coffee",
	  items: [
	    {
	      text: "精美壁纸",
	      link: "https://wallhaven.cc/",
	      icon: "fas fa-bread-slice",
	    }
	  ],
	},
  //About
  { text: "关于我", link: "/about/", icon: "reco-account" }, 
  //Contact
  {
    text: "联系我", 
    icon: "reco-message",
    items: [
      {
        text: "GitHub",
        link: "https://github.com/shaopengfei1",
        icon: "reco-github",
      }
    ],
  },
];

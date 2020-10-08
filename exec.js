var stop = 0

function time(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
stop = 0;
  setTimeout(function(){
    chrome.tabs.update(tabs[0].id,{url: tabs[0].url});
stop = 1;    
time();

  },121000)
	
  
});
}



time();
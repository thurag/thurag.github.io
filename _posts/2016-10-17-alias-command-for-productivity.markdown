---
layout: post
title:  "Alias Command For Productivity"
date:   2016-10-17
---

<span class="dropcap">မ</span>င်္ဂလာပါ။ ဒီနေ့မှာတော့ သုံးနေကျ Command တွေကို ကိုယ့်စိတ်ကြိုက် Shortcut လေးတွေ ဖန်တီးပြီး 
နေ့စဉ်လုပ်နေကျ အလုပ်တွေကို အမှားနည်းနည်းနဲ့ ဘယ်လိုမြန်မြန် လုပ်ဆောင် နိုင်မလဲ ဆိုတာကို 
ပြောပြပေးသွားမှာ ဖြစ်ပါတယ်။ alias ဆိုတဲ့ Command လေးကို သုံးပြီး လုပ်တဲ့ နည်းလမ်းဖြစ်ပါတယ်။

Windows အသုံးပြုသူတွေ အတွက်ကတော့ <a href="https://git-scm.com/downloads" target="_blank">
[Git-Bash]</a> ကို သွင်းထားဖို့ လိုပါမယ်။ Mac/Linux အသုံးပြုသူတွေ အတွက်ကတော့ မလိုပါဘူး။

#### ~ (သို့မဟုတ်) Tide Key ဆိုသည်မှာ

Mac/Linux အသုံးပြုနေကျသူတွေ အတွက်ကတော့ User Home Folder ဆိုတာ Command မှာ ~ (Tide Key) နဲ့ 
ရည်ညွှန်းမှန်း သိထားပြီးလောက်ပေမယ့် Windows အသုံးပြုသူတွေ အတွက်ကတော့ နည်းနည်း ထူးဆန်းနေပါလိမ့်မယ်။ 
Git Bash မှာ ~ ကို သုံးလို့ရအောင် လုပ်ပေးထားပါတယ်။ 

Windows အသုံးပြုသူတွေကတော့ Git Bash ကို ဖွင့်လိုက်ပါ။ Mac/Linux အသုံးပြုသူတွေကတော့ အသင့်ပါပြီးသား Terminal ကို ဖွင့်လိုက်ရုံပါပဲ။

ဖွင့်လိုက်တာနဲ့ ရောက်နေမယ့်နေရာက
<span class="tooltip">~
  <span class="tooltiptext">User Home Folder</span>
</span>
ဖြစ်ပါတယ်။ အခု Computer ကို Login ဝင်ထားတဲ့သူရဲ့ Home Folder ကို ရည်ညွှန်းပါတယ်။
Mac/Linux မှာကတော့ 
<span class="tooltip">~
  <span class="tooltiptext">User Home Folder</span>
</span>
ဆိုတာ /Users/{UserName} ကို ရည်ညွှန်းပါတယ်။ Windows ကတော့ /c/Users/{UserName} ဖြစ်ပါတယ်။
ဒါကြောင့်မို့ အခု Login ဝင်ထားတဲ့သူရဲ့ Desktop ပေါ်သွားချင်ရင် cd ~/Desktop ဆိုပြီးသွားလိုက်ရုံပါပဲ။

#### .bash_profile အမည်ရှိသော Hidden File ဆိုသည်မှာ
.bash_profile ဆိုတာကတော့ 
<span class="tooltip">~
  <span class="tooltiptext">User Home Folder</span>
</span> 
ရဲ့ အောက်မှာရှိတဲ့ Hidden File လေးပဲ ဖြစ်ပါတယ်။ မရှိသေးရင်လည်း အခုလို ဆောက်ပေးလိုက်လို့ရပါတယ်။ 
{% highlight bash %}
	touch ~/.bash_profile 
{% endhighlight %}

Command/Terminal ဖွင့်တိုင်း ~/.bash_profile ထဲမှာ ရေးထားတဲ့ Variable တွေကို သုံးလို့ရအောင် Export လုပ်ပေးပါတယ်။ 
အခုကျွန်တော်တို့ လုပ်ချင်တာကတော့ Export လုပ်တာမှန်ပေမယ့် alias လုပ်ပြီး Export လုပ်ချင်တာ ဖြစ်ပါတယ်။ alias ဆိုတာ နာမည်တု လုပ်တာလို့ 
ပြောရင် မှားမယ် မထင်ပါဘူး။ 

ကိုယ်ရဲ့ Project Folder တွေ ရှိတဲ့နေရာကို နေ့တိုင်း cd ဘာညာသလကာ လုပ်နေရတာ အလုပ်ရှုပ်တယ်ဟုတ်? အဲ့ဒီအစား cd /c/MyProjects ကို
mypro ဆိုပြီး ရေးလိုက်ရုံနဲ့ ရောက်အောင် ဒီလိုလုပ်ထားနိုင်ပါတယ်။ အောက်က စာသားကို ~/.bash_profile မှာ Copy ကူးထည့်ပေးပါ။
{% highlight bash %}
alias mypro="cd /c/MyProjects"
{% endhighlight %}
mypro Command အလုပ်လုပ်အောင် Command/Terminal ကို ပိတ်ပြီး ပြန်ဖွင့်ပေးဖို့ လိုပါမယ်။ 

ရသွားပြီဆိုရင်တော့ ပိုကျွမ်းသွားအောင် အောက်က ဥပမာ လေးတွေလည်း နည်းနည်း ထပ်ကြည့်ပေးပါ။
{% highlight bash %}
alias proUp="cd /c/MyProjects/projectName; vagrant up"
#ပထမဆုံး /c/MyProjects/projectName; အောက်ကို အရင်သွားမယ်။ 
#ပြီးရင် vagrant up ကို Run မယ်လို့ Command ၂ ခုကို ပေါင်းရေးထားတာ ဖြစ်ပါတယ်။
alias weinre="weinre --boundHost -all-"
#weinre ဆိုတဲ့ Mobile browser debugging tools ကို သွင်းထားတယ်ဆိုရင် 
#weinre ဆိုတဲ့ Command က သုံးလို့ ရနေမှာဖြစ်ပါတယ်။ 
#အဓိက ပြောချင်တာကတော့ အဲ့ Command နောက်က ရိုက်ရတဲ့ဟာတွေက 
#အလုပ်ရှုပ်လို့ အဲ့လိုမျိုး အချိန်ကျရင်လည်းပဲ alias သုံးပြီး 
#အခုလို ရေးခဲ့မယ်ဆိုရင် wei လို့ရေးပြီး Tab ခုန် Enter ခေါက်လိုက်တာနဲ့ 
#တော်တော်လေးကို အမှားလည်း နည်းပြီး အချိန်ကုန်၊ ခေါင်းရှုပ်ခံ စဉ်းစားရတဲ့ ဒုက္ခကင်းသွားမှာ ဖြစ်ပါတယ်။
alias myser="ssh -i /c/MyKEY/secret.pem ubuntu@myserver.com"
#Server Login ဝင်ဖို့အတွက်လည်း သုံးနိုင်ပါတယ်။
{% endhighlight %}

Alias နဲ့ပတ်သတ်ပြီးကတော့ ဒီလောက်ပါပဲ။ ကျေးဇူးတင်ပါတယ်။
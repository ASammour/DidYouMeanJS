# DidYouMeanJS

<b>بالعربية</b></br>
فكرة هذا الكود مستوحاة من إضافة قمتُ بكتابتها لتعمل في ويكيبيديا العربية، ويُمكن مطالعة شرح كامل حول طريقة عمل الإضافة في هذه الصفحة. https://ar.wikipedia.org/wiki/ويكيبيديا:تبديل_الحروف_العربية_لمقابلها_الإنجليزي_والعكس

هذا الكود البسيط مكتوب بلغة جافا سكريبت، ويقوم بتحويل الحروف العربية إلى الإنجليزية، أو العكس؛ وذلك في حال استخدام لوحة المفاتيح العربية-الإنجليزية، والتي يلزم فيها تحويل نظام الكتابة من حين لآخر (Shift+Alt).

بهذا الكود سيتم توفير الوقت والجهد لعملية استبدال (تحويل) الحروف؛ فبمجرد كتابة نص إنجليزي سيقوم بإظهار جملة هل تقصد: كذا؛ لتُعطي مقابل تبديل الحروف من الإنجليزية إلى العربية. الأمر يشبه تمامًا الكتابة في محرك البحث جوجل.

<b>عرض توضيحي</b></br>
يمكنك مشاهدة مثال عملي <a href = "https://codepen.io/ASammour/pen/NyQRQm">هنا</a>.

<b>كيف يمكن استخدامها؟</b></br>
كل ما عليك فعله هو إضافة ملف الكود <code>Main.js</code> إلى مشروعك.<br>
<code><script src="Main.js"></script></code>

أدناه هو أبسط مثال لكيفية استخدام الكود.
```javascript
<label class="form-label" for="ar-en">من العربية إلى الإنجليزية</label>
<input class="form-input" type="text" id="ar-en" placeholder="اكتب نصًا بالعربية">
<span class="ar-en-span"></span>
```
سيقوم الكود في المثال السابق باستبدال الأحرف العربية إلى الإنجليزية عندما يتم الكتابة في صندوق النص.

<b>بالإنجليزية</b></br>
The idea of this code is inspired by a gadget I have written to work in Arabic Wikipedia, and you can see a full explanation of how the add-on works on this page. https://ar.wikipedia.org/wiki/ويكيبيديا:تبديل_الحروف_العربية_لمقابلها_الإنجليزي_والعكس

This simple code converts Arabic characters into English, or vice versa; if you use the Arabic-English keyboard, you need to convert the script from time to time (Shift + Alt).

This code will save time and effort to the process of replacing (conversion) or swipe characters; When you write an English text it will display a sentence <b>did you mean: plah plah</b>; to give the opposite of characters from English to Arabic. It's quite like typing in a Google search engine.

<b>Demo</b></br>
See a pen <a href = "https://codepen.io/ASammour/pen/NyQRQm">here</a>.

<b>How to use?</b></br>
All you have to do is include the <code>Main.js</code> file to your project.<br>
<code><script src="Main.js"></script></code>

Below is a very simple example of how it work.
```javascript
<label class="form-label" for="ar-en">من العربية إلى الإنجليزية</label>
<input class="form-input" type="text" id="ar-en" placeholder="اكتب نصًا بالعربية">
<span class="ar-en-span"></span>
```
This will convert arabic to english when you start writing in the textbox.

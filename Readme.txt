ソフト名：kerning_yakumono（0.3）
ライセンス：GNU GPLv3
転載条件：メールにて確認
　　作者：市川せうぞー／(c)2007-2010 Seuzo Ichikawa
動作環境：MacOS X10.6.4、InDesign CS5_J（7.0.3）
開発環境：Mac Pro Quad 3GHz（Intel）、ExtendScript Toolkit
開発言語：JavaScript
圧縮方法：zip
コメント：

**なにをするスクリプトか？
選択中のテキストの半角約物だけを指定量カーニングします。
本来、半角約物のアキ量は「文字組みアキ量設定」で調整するものです。しかしながら「行中の任意の部分だけをツメたい」「このラインだけをツメて1文字入れたい」などという場合に、いちいち手作業でカーニングするのは面倒です。そんな時にちょいちょいと活躍します。
http://www.youtube.com/watch?v=ognFAn1M_yo


**同梱ファイル2Files
-Readme.txt	このファイルです。とにかく最初によんでください。
-kerning_yakumono.jsx	スクリプト本体です。


**動作環境
このスクリプトが正常に動作する環境は以下の通りです
-MacOS X10.6.4（win環境でも動作するかもしれませんが未検証です）
-InDesign CS5_J（7.0.3）


**インストール
スクリプト本体（kerning_yakumono.jsx）を
~/Library/Preferences/Adobe InDesign/Version 7.0-J/ja_JP/Scripts/Scripts Panel/
にコピーしてください。エイリアスを入れておくだけでもかまいません。
スクリプトパレットから使用します。


**使用方法
+「ウインドウ」メニューから「スクリプティング」ー「スクリプト」を選択し、スクリプトパレットを出します。
+字形変換したいテキスト範囲を選択します。
+スクリプトパレットから、スクリプト「kerning_yakumono.jsx」をダブルクリックします。


**既知の不具合、またはToDo


**免責事項
-本アプリケーションはInDesignにおける作業効率支援なのであって、処理結果を保証するものではありません。かならず確認をされることをおすすめします。
-このツールを使用する上でデータの破損などのあらゆる不具合・不利益については一切の責任を負いかねますのでご了解ください。
-このツールはすべてのMacintoshとMac OS上で動作をするという確認をとっていませんし、事実上出来ません。したがって、動作を保証するものではありません。


**ライセンス
GNU GPLv3
http://sourceforge.jp/projects/opensource/wiki/licenses%252FGNU_General_Public_License_version_3.0


**履歴
-2007.09.22	ver.0.1	とりあえず。
-2009-002-27	ver.0.2	InDesign CS4で動作確認。対象約物がタブ、全角スペースと隣接する場合、カーニング対象外とした。未チェックの約物が対象約物と隣接するとき、カーニング対象外とした。中点類が２個以上連続するとき、正しくカーニングするようにした。
-2009-04-24	ver.0.2.1	ダイアログを出す前にUserInteractionLevels.interactWithAllとした。 http://d.hatena.ne.jp/seuzo/20090227/1235660752
-2010-10-23	ver.0.3	InDesign CS5対応。TableまたはCellを選択している時はその中の段落内を処理するようにした（というか昔はエラーになった気がするが...） http://d.hatena.ne.jp/seuzo/20101101/1288599505



市川せうぞー
http://www.seuzo.jp/

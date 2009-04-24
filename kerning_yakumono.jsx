/*kerning_yakumono.jsx(c)2007-2009 www.seuzo.jp特定の約物をカーニングします。。2007.09.22	ver.0.1	とりあえず。2009-02-27	ver.0.2	InDesign CS4で動作確認。対象約物がタブ、全角スペースと隣接する場合、カーニング対象外とした。未チェックの約物が対象約物と隣接するとき、カーニング対象外とした。中点類が２個以上連続するとき、正しくカーニングするようにした。*/////////////////////////////////////////////エラー処理 function myerror(mess) {   if (arguments.length > 0) { alert(mess); }  exit();}////////////////////////////////////////////正規表現検//正規表現で検索して、ヒットオブジェクトを返すだけfunction my_regex(my_range_obj, my_find_str, my_change_str) {        //検索の初期化        app.findGrepPreferences = NothingEnum.nothing;        app.changeGrepPreferences = NothingEnum.nothing;        //検索オプション        app.findChangeGrepOptions.includeLockedLayersForFind = false;//ロックされたレイヤーをふくめるかどうか        app.findChangeGrepOptions.includeLockedStoriesForFind = false;//ロックされたストーリーを含めるかどうか        app.findChangeGrepOptions.includeHiddenLayers = false;//非表示レイヤーを含めるかどうか        app.findChangeGrepOptions.includeMasterPages = false;//マスターページを含めるかどうか        app.findChangeGrepOptions.includeFootnotes = false;//脚注を含めるかどうか        app.findChangeGrepOptions.kanaSensitive = true;//カナを区別するかどうか        app.findChangeGrepOptions.widthSensitive = true;//全角半角を区別するかどうか        app.findGrepPreferences.findWhat = my_find_str;//検索文字の設定        //app.changeGrepPreferences.changeTo = my_change_str;//置換文字の設定        return my_range_obj.findGrep();//検索の実行}/////以下実行////////////////まずは選択しているもののチェックif (app.documents.length == 0) {myerror("ドキュメントが開かれていません")}var mydocument = app.activeDocument;if (mydocument.selection.length == 0) {myerror("テキストを選択してください")}var myselection = mydocument.selection[0];var myclass =myselection.reflect.name;myclass = "Text, TextColumn, Story, Paragraph, Line, Word, Character, TextStyleRange".match(myclass);if (myclass == null) {myerror("テキストを選択してください")}////////////////ダイアログapp.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;var my_dialog = app.dialogs.add({name:"約物カーニング", canCancel:true});with(my_dialog) {	with(dialogColumns.add()) {		// プロンプト		staticTexts.add({staticLabel:"テキスト選択範囲の約物をカーニングします。カーニングする約物をチェックしてください"});		with (borderPanels.add()) {			with(dialogRows.add()){				var check_01 = checkboxControls.add({staticLabel:"始めかぎ括弧　「『", checkedState:true});			}			with(dialogRows.add()){				var check_02 = checkboxControls.add({staticLabel:"始め丸括弧　（", checkedState:true});			}			with(dialogRows.add()){				var check_03 = checkboxControls.add({staticLabel:"その他の始め括弧　［｛‘“〈《【〔", checkedState:true});			}			with(dialogRows.add()){				var check_04 = checkboxControls.add({staticLabel:"終わりかぎ括弧　」』", checkedState:true});			}			with(dialogRows.add()){				var check_05 = checkboxControls.add({staticLabel:"終わり丸括弧　）", checkedState:true});			}			with(dialogRows.add()){				var check_06 = checkboxControls.add({staticLabel:"その他の終わり括弧　］｝’”〉》】〕", checkedState:true});			}			with(dialogRows.add()){				var check_07 = checkboxControls.add({staticLabel:"読点類　、，", checkedState:true});			}			with(dialogRows.add()){				var check_08 = checkboxControls.add({staticLabel:"句点類　。．", checkedState:true});			}			with(dialogRows.add()){				var check_09 = checkboxControls.add({staticLabel:"中点類　・：；", checkedState:true});			}		}		with (borderPanels.add()) {			staticTexts.add({staticLabel:"カーニング量"});			var kerning_var = realEditboxes.add({editValue:-300});		}	}}if (my_dialog.show() == true) {	check_01 = check_01.checkedState;	check_02 = check_02.checkedState;	check_03 = check_03.checkedState;	check_04 = check_04.checkedState;	check_05 = check_05.checkedState;	check_06 = check_06.checkedState;	check_07 = check_07.checkedState;	check_08 = check_08.checkedState;	check_09 = check_09.checkedState;	kerning_var = kerning_var.editValue;	//正常にダイアログを片付ける	my_dialog.destroy();} else {	// ユーザが「キャンセル」をクリックしたので、メモリからダイアログボックスを削除	my_dialog.destroy();	myerror();}////////////////値のチェックif (check_01 == false && check_02 == false && check_03 == false && check_04 == false && check_05 == false && check_06 == false && check_07 == false && check_08 == false && check_09 == false) {	myerror("すべてのチェックボックスが外れています");}if (kerning_var < -1000 || kerning_var > 10000) {	myerror("カーニング量は-1000から10000の範囲内でなければなりません");}////////////////正規表現文字列の作成と検索（1：起こし括弧類）var regex_str = "";var hit_obj = [];if (check_01) {regex_str += "「『";}if (check_02) {regex_str += "（";}if (check_03) {regex_str += "［｛‘“〈《【〔";}if (regex_str != "") {	hit_obj = my_regex(myselection, "[^「『（［｛‘“〈《【〔　\s\n\r][" + regex_str + "]", "");	////////////////カーニング処理（1）	for (i = 0; i < hit_obj.length; i++) {		hit_obj[i].insertionPoints.item(1).kerningValue = kerning_var;	}}////////////////正規表現文字列の作成と検索（2：受け括弧類と句読点類）regex_str = "";//一旦初期化するif (check_04) {regex_str += "」』";}if (check_05) {regex_str += "）";}if (check_06) {regex_str += "］｝’”〉》】〕";}if (check_07) {regex_str += "、，";}if (check_08) {regex_str += "。．";}if (regex_str != "") {	hit_obj = my_regex(myselection, "[" + regex_str + "][^」』）］｝’”〉》】〕、，。．　\s\n\r]", "");	////////////////カーニング処理（2）	for (i = 0; i < hit_obj.length; i++) {		hit_obj[i].insertionPoints.item(1).kerningValue = kerning_var;	}}////////////////正規表現文字列の作成と検索（3：中点類）if (check_09) {	kerning_var2 = kerning_var / 2;	hit_obj = my_regex(myselection, "[・：；][^　\s\n\r]", "");	////////////////カーニング処理（3）	for (i = 0; i < hit_obj.length; i++) {		hit_obj[i].insertionPoints.item(1).kerningValue = kerning_var2;	}	hit_obj = my_regex(myselection, "[^　\s\n\r][・：；]", "");	////////////////カーニング処理（3）	for (i = 0; i < hit_obj.length; i++) {		hit_obj[i].insertionPoints.item(1).kerningValue = kerning_var2;	}	hit_obj = my_regex(myselection, "[・：；][・：；]", "");	////////////////カーニング処理（3）	for (i = 0; i < hit_obj.length; i++) {		hit_obj[i].insertionPoints.item(1).kerningValue = kerning_var;	}}
//(if collecting data with php/server instead of MTurk)

var experimentName = "veri-ucdec-pilot-server";
var submitAddress = "http://sunwoojeong.com/cgi-bin/process-korean.php";
// "http://hosting02.snu.ac.kr/~sunwooj/cgi-bin/process2.php";



// List of stimuli

var stimuliList = shuffle([ 


["door", "유라", "문이 열렸다", ["al", "moreu", "gieok", "ggameok", "mit", "uishim"], ["nv", "mv"], ["ms", "mv"]],

["water", "영열이", "물이 말랐다", ["al", "moreu", "gieok", "ggameok", "mit", "uishim"], ["mv", "nv"], ["mv", "ms"]],

["melon", "나영이", "메론이 열렸다", ["moreu", "gieok", "ggameok", "mit", "uishim", "al"], ["nv", "mv"], ["es", "mv"]],

["ice", "민우", "얼음이 녹았다", ["moreu", "gieok", "ggameok", "mit", "uishim", "al"], ["mv", "nv"], ["mv", "es"]],

["widow", "윤혜", "의원이 미망인이다", ["gieok", "ggameok", "mit", "uishim", "al", "moreu"], ["nv", "mv"], ["ev", "mv"]],

["socks", "민석이", "양말이 어른용이다", ["gieok", "ggameok", "mit", "uishim", "al", "moreu"], ["mv", "nv"], ["mv", "ev"]],

["echo", "유민이", "메아리가 울린다", ["ggameok", "mit", "uishim", "al", "moreu", "gieok"], ["nv", "mv"], ["es", "mv"]],

["noodle", "현우", "온모밀이 나온다", ["ggameok", "mit", "uishim", "al", "moreu", "gieok"], ["mv", "nv"], ["mv", "es"]],

["fox", "별이", "여우가 여물을 먹었다", ["mit", "uishim", "al", "moreu", "gieok", "ggameok"], ["nv", "mv"], ["eo", "mv"]],

["ramen", "종윤이", "메밀을 라면에 넣었다", ["mit", "uishim", "al", "moreu", "gieok", "ggameok"], ["mv", "nv"], ["mv", "ed"]],

["namul", "예린이", "요리에 명이나물을 넣었다", ["uishim", "al", "moreu", "gieok", "ggameok", "mit"], ["nv", "mv"], ["eo", "mv"]],

["year", "윤호", "내란이 을미년에 일어났다", ["uishim", "al", "moreu", "gieok", "ggameok", "mit"], ["mv", "nv"], ["mv", "ed"]],

["age", "수영이", "서현이는 수영이보다 나이가 많다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["false", "false"], ["false", "false"]],

["conch", "진희", "진희는 소라를 키우지 않는다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["false", "false"], ["false", "false"]],

["exam", "슬기", "슬기는 시험에서 80점 이하의 점수를 받았다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["false", "false"], ["false", "false"]],

["gift", "지현이", "지현이는 어제 집들이 선물을 가져오지 않았다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["false", "false"], ["false", "false"]],

["height", "준홍이", "홍석이는 준홍이보다 키가 작다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["true", "true"], ["true", "true"]],

["pasta", "예은이", "예은이는 파스타에 명란젓을 넣었다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["true", "true"], ["true", "true"]],

["pen", "지민이", "지민이는 만년필의 주인이다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["true", "true"], ["true", "true"]],

["puppy", "나래", "나래는 강아지를 키우고 있다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["true", "true"], ["true", "true"]]


]);



// List of names

var nameList = shuffle([
    "지희", "설아", "정화", "다예", "설희", "민희", 
    "영지", "효주", "영미", "연아", "혜리", "은지",
    "현아", "애리", "지혜", "연화", "미나", "유아", 
    "다희", "남희"
]);



var data = {}; 
var trialnum = 0;


$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        var consent = document.getElementById("consent").checked;
        if (consent == true) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            showSlide('instructions');
            }
        else {
            checkboxwarning = "실험에 참여하시기에 앞서 동의서를 읽어보시고 위 항목을 체크해 동의 의사를 표현해 주시기 바랍니다.";
            $("#checkboxWarning").html(checkboxwarning);
        }
    });

    
    $('#startbutton').click(function() {
        stepExperiment();        
    });
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}


var verbRandom = Math.floor(Math.random() * 6);
var prosRandom = Math.floor(Math.random() * 2);


function stepExperiment () {
    if (trialnum == 20) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            var gender = $('.gen:checked').val();
            var age = $('.age:checked').val();
            var region = $('.reg:checked').val();

            var gend_com = $('#ogen_com').val();
            gend_com = gend_com.replace (/,/g, "");
            gend_com = gend_com.replace (/:/g, "");
            var reg_com = $('#oreg_com').val();
            reg_com = reg_com.replace (/,/g, "");
            reg_com = reg_com.replace (/:/g, "");
            
            var lang_com = $('#lang_com').val();
            lang_com = lang_com.replace (/,/g, "");
            lang_com = lang_com.replace (/:/g, "");
            var contact = $('#contact').val();
            contact = contact.replace (/,/g, "");
            contact = contact.replace (/:/g, "");

            var gen_com = $('#gen_com').val();
            gen_com = gen_com.replace(/,/g, "");
            gen_com = gen_com.replace(/:/g, "");

            var pool = $('.pool:checked').val();
            var cell = $('#cell_com').val();
            cell = cell.replace(/,/g, "");
            cell = cell.replace(/:/g, "");
            var mail = $('#mail_com').val();
            mail = mail.replace(/,/g, "");
            mail = mail.replace(/:/g, "");

            // if ($('.gen:checked').length > 0 && $('.age:checked').length > 0 && $('.reg:checked').length > 0) {

            data.gender = gender;
            data.age = age;
            data.region = region;
            data.genCom = gen_com;

            data.gendCom = gend_com;
            data.regCom = reg_com;
            data.langCom = lang_com;
            data.contact = contact;

            data.pool = pool;
            data.cell = cell;
            data.mail = mail;


            // showSlide('finish');
            setTimeout(function() { turk.submit(data)}, 1000); 

            } ) }
 
    else {

        trialnum += 1;

        nameStim1 = nameList[trialnum-1];
        stimuliVector = stimuliList[trialnum-1];

        item = stimuliVector[0];
        // nameStim2 = stimuliVector[1];
        proposition = stimuliVector[2];
        verbtype = stimuliVector[3][verbRandom];
        prosody = stimuliVector[4][prosRandom];
        prosody2 = stimuliVector[5][prosRandom];

               
        $(".item_number").html(trialnum);

        $(".currentName1").html(nameStim1);
        // $(".currentName2").html(nameStim2);

        $(".veriProposition").html(proposition);


        // Tell HTML which sound file will be played
        document.getElementById('currentAudio1').src = "https://sunwoojeong.com/experiments/exp1/" + item + "-" + verbtype + "-" + "dec" + "-" +prosody + ".wav";
        // "http://hosting02.snu.ac.kr/~sunwooj/experiments/veridicality/exp1/"

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var veriResponse = $('input[name="veridicality"]:checked').val();

            var commentResponse = $('#commentBox1').val();
            commentResponse = commentResponse.replace (/,/g, "");
            commentResponse = commentResponse.replace (/:/g, "");


            // Check for valid answers; 
            if ($('input[name=veridicality]:checked').length > 0) {
                // ensure that likert options are unticked for the next problems 
                $(".radio").prop('checked', false);
                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning").html("");

                trial = {};
                trial.item = item;
                trial.verbtype = verbtype;
                trial.clausetype = "dec";
                trial.prosody = prosody; 
                trial.prosody2 = prosody2;

                trial.veridicality = veriResponse;

                trial.comment = commentResponse;

                data["trial" + trialnum] = trial;
            
                // Move on to the next trial
                stepExperiment();
     
            }

            else { // If any of the questions is not answered:
                warning = "다음 단계로 넘어가기 위해 문제에 답해주십시오.";
                $("#warning").html(warning);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });
    }
}


function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}
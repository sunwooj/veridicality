//(if collecting data with php/server instead of MTurk)

var experimentName = "new-server-test";
var submitAddress = "http://sunwoojeong.com/cgi-bin/process.php";
// "http://hosting02.snu.ac.kr/~sunwooj/cgi-bin/process2.php";



// List of stimuli

var stimuliList = shuffle([ 


["door", "유라는 문이 열린", "문이 열렸다",
    ["al", "gieok", "mit"],
    ["알아", "기억해", "믿어"], 
    ["세린이가 문이 열린", "유라는 문이 열린", "유라는 문이 열린", "유라는 문이 열린"], 
    ["nonverb", "verbf", "verbnfs", "verbnfa"],
    ["MS", "factive", "nfsaeng", "nfuish"],
    [["알아", "기억해", "믿어"], 
        ["몰라", "까먹었어", "몰라"], 
        ["생각해", "생각해", "생각해"],
        ["의심해", "의심해", "의심해"]] 
],

["water", "영열이는 물이 마른", "물이 말랐다",
    ["al", "gieok", "mit"],
    ["알아", "기억해", "믿어"],  
    ["영열이는 물이 마른", "영열이는 물이 마른", "영열이는 물이 마른", "지용이가 물이 마른"],
    ["verbf", "verbnfs", "verbnfa", "nonverb"],
    ["factive", "nfal", "nfuishim", "MS"],
    [["몰라", "까먹었어", "몰라"],
        ["알아", "알아", "알아"],
        ["의심해", "의심해", "의심해"],
        ["알아", "기억해", "믿어"]] 
],

["melon", "나영이는 메론이 열린", "메론이 열렸다",
    ["gieok", "mit", "al"], 
    ["기억해", "믿어", "알아"],
    ["나영이는 메론이 열린", "나영이는 메론이 열린", "나영이는 수박이 열린", "나영이는 메론이 열린"],
    ["verbnfs", "verbnfa", "nonverb", "verbf"],
    ["nfgieok", "nfuishim", "ES", "factive"],
    [["기억해", "기억해", "기억해"],
        ["의심해", "의심해", "의심해"],
        ["기억해", "믿어", "알아"],
        ["까먹었어", "몰라", "몰라"]] 
],

["ice", "민우는 얼음이 녹은", "얼음이 녹았다",
    ["gieok", "mit", "al"],
    ["기억해", "믿어", "알아"],
    ["민우는 얼음이 녹은", "민우는 용액이 녹은", "민우는 얼음이 녹은", "민우는 얼음이 녹은"],  
    ["verbnfa", "nonverb", "verbf", "verbnfs"],
    ["nfuishim", "ES", "factive", "nfmit"],
    [["의심해", "의심해", "의심해"],
        ["기억해", "믿어", "알아"],
        ["까먹었어", "몰라", "몰라"],
        ["믿어", "믿어", "믿어"]]  
],

["widow", "윤혜는 의원이 미망인인", "의원이 미망인이다",
    ["mit", "al", "gieok"],
    ["믿어", "알아", "기억해"],
    ["윤혜는 의원이 남편이 있는", "윤혜는 의원이 미망인인", "윤혜는 의원이 미망인인", "윤혜는 의원이 미망인인"],
    ["nonverb", "verbf", "verbnfs", "verbnfa"],
    ["EV", "factive", "nfsaeng", "nfuish"],
    [["믿어", "알아", "기억해"],
        ["몰라", "몰라", "까먹었어"],
        ["생각해", "생각해", "생각해"],
        ["의심해", "의심해", "의심해"]]
],

["socks", "민석이는 양말이 어른용인", "양말이 어른용이다",
    ["mit", "al", "gieok"],
    ["믿어", "알아", "기억해"],
    ["민석이는 양말이 어른용인", "민석이는 양말이 어른용인", "민석이는 양말이 어른용인", "민석이는 양말이 어린이용인"],
    ["verbf", "verbnfs", "verbnfa", "nonverb"],
    ["factive", "nfal", "nfuishim", "EV"],
    [["몰라", "몰라", "까먹었어"],
        ["알아", "알아", "알아"],
        ["의심해", "의심해", "의심해"],
        ["믿어", "알아", "기억해"]]
],

["echo", "유민이는 메아리가 울린", "메아리가 울렸다",
    ["al", "gieok", "mit"],
    ["알아", "기억해", "믿어"],
    ["유민이는 메아리가 울린", "유민이는 메아리가 울린", "유민이는 원래 목소리가 울린", "유민이는 메아리가 울린"],
    ["verbnfs", "verbnfa", "nonverb", "verbf"],
    ["nfgieok", "nfuishim", "ES", "factive"],
    [["기억해", "기억해", "기억해"],
        ["의심해", "의심해", "의심해"],
        ["알아", "기억해", "믿어"],
        ["몰라", "까먹었어", "몰라"]]
],

["ramen", "종윤이는 메밀을 라면에 넣은", "메밀을 라면에 넣었다",
    ["al", "gieok", "mit"],
    ["알아", "기억해", "믿어"],
    ["종윤이는 메밀을 라면에 넣은", "종윤이는 메밀을 우동에 넣은", "종윤이는 메밀을 라면에 넣은", "종윤이는 메밀을 라면에 넣은"],
    ["verbnfa", "nonverb", "verbf", "verbnfs"],
    ["nfuishim", "ED", "factive", "nfmit"],
    [["의심해", "의심해", "의심해"],
        ["알아", "기억해", "믿어"],
        ["몰라", "까먹었어", "몰라"],
        ["믿어", "믿어", "믿어"]]
],

["noodle", "현우는 온모밀이 나오는", "온모밀이 나온다",
    ["gieok", "mit", "al"],
    ["기억해", "믿어", "알아"],
    ["현우는 냉모밀이 나오는", "현우는 온모밀이 나오는", "현우는 온모밀이 나오는", "현우는 온모밀이 나오는"],
    ["nonverb", "verbf", "verbnfs", "verbnfa"],
    ["ES", "factive", "nfsaeng", "nfuish"],
    [["기억해", "믿어", "알아"],
        ["까먹었어", "몰라", "몰라"],
        ["생각해", "생각해", "생각해"],
        ["의심해", "의심해", "의심해"]]
],

["fox", "별이는 여우가 여물을 먹은", "여우가 여물을 먹었다",
    ["gieok", "mit", "al"],
    ["기억해", "믿어", "알아"],
    ["별이는 여우가 여물을 먹은", "별이는 여우가 여물을 먹은", "별이는 여우가 여물을 먹은", "별이는 여우가 계란을 먹은"],
    ["verbf", "verbnfs", "verbnfa", "nonverb"],
    ["factive", "nfal", "nfuishim", "ED"],
    [["까먹었어", "몰라", "몰라"],
        ["알아", "알아", "알아"],
        ["의심해", "의심해", "의심해"],
        ["기억해", "믿어", "알아"]]
],

["namul", "예린이는 요리에 명이나물을 넣은", "요리에 명이나물을 넣었다",
    ["mit", "al", "gieok"],
    ["믿어", "알아", "기억해"],
    ["예린이는 요리에 명이나물을 넣은", "예린이는 요리에 명이나물을 넣은", "예린이는 요리에 고사리나물을 넣은", "예린이는 요리에 명이나물을 넣은"],
    ["verbnfs", "verbnfa", "nonverb", "verbf"],
    ["nfgieok", "nfuishim", "EO", "factive"],
    [["기억해", "기억해", "기억해"],
        ["의심해", "의심해", "의심해"],
        ["믿어", "알아", "기억해"],
        ["몰라", "몰라", "까먹었어"]]
],

["year", "윤호는 내란이 을미년에 일어난", "내란이 을미년에 일어났다",
    ["mit", "al", "gieok"],
    ["믿어", "알아", "기억해"],
    ["윤호는 내란이 을미년에 일어난", "윤호는 내란이 병자년에 일어난", "윤호는 내란이 을미년에 일어난", "윤호는 내란이 을미년에 일어난"],
    ["verbnfa", "nonverb", "verbf", "verbnfs"],
    ["nfuishim", "ED", "factive", "nfmit"],
    [["의심해", "의심해", "의심해"],
        ["믿어", "알아", "기억해"],
        ["몰라", "몰라", "까먹었어"],
        ["믿어", "믿어", "믿어"]]
]


]);



// List of names

var nameList1 = shuffle([
    "지희", "설아", "정화", "다예", "설희", "민희", 
    "준호", "백호", "민규", "동주", "지서", "남주"
]);

var nameList2 = shuffle([
    "재아", "동호", "윤재", "석호", "호야", "덕화",
    "영지", "효주", "영미", "연아", "혜리", "은지"
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


var verbRandom = Math.floor(Math.random() * 3);
var contRandom = Math.floor(Math.random() * 4);


function stepExperiment () {
    if (trialnum == 4) { // end the experiment. 
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

            // if ($('.gen:checked').length > 0 && $('.age:checked').length > 0 && $('.reg:checked').length > 0) {

            data.gender = gender;
            data.age = age;
            data.region = region;
            data.genCom = gen_com;

            data.gendCom = gend_com;
            data.regCom = reg_com;
            data.langCom = lang_com;
            data.contact = contact;

            showSlide('finish');
            setTimeout(function() { turk.submit(data)}, 1000); 

            } ) }
 
    else {

        trialnum += 1;

        nameStim1 = nameList1[trialnum-1];
        nameStim2 = nameList2[trialnum-1];

        stimuliVector = stimuliList[trialnum-1];

        item = stimuliVector[0];
        complement = stimuliVector[1];
        proposition = stimuliVector[2];
        verbtype = stimuliVector[3][verbRandom];
        verb2 = stimuliVector[4][verbRandom];
        context = stimuliVector[5][contRandom];
        alt1 = stimuliVector[6][contRandom];
        alt2 = stimuliVector[7][contRandom];
        verb1 = stimuliVector[8][contRandom][verbRandom];
               
        $(".item_number").html(trialnum);
        $(".currentName1").html(nameStim1);
        $(".currentName2").html(nameStim2);
        $(".currentContext").html(context);

        $(".currentComp").html(complement);
        $(".currentVerb1").html(verb1);
        $(".currentVerb2").html(verb2);

        $(".veriProposition").html(proposition);


        // Tell HTML which sound file will be played
        // document.getElementById('currentAudio1').src = "https://sunwoojeong.com/experiments/exp1/" + item + "-" + verbtype + "-" + "dec" + "-" +prosody + ".wav";


        document.body.scrollTop = document.documentElement.scrollTop = 0;

        var YNoption = $("#YNoption");
        YNoption.html(
            YNoption.find("label").sort(function () {
                return Math.round(Math.random()) - 0.5;
            }));

        showSlide('stage'); 


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var polarResponse = $('input[name="yesnoOpt"]:checked').val();

            var veriResponse = $('input[name="veridicality"]:checked').val();

            var commentResponse = $('#commentBox1').val();
            commentResponse = commentResponse.replace (/,/g, "");
            commentResponse = commentResponse.replace (/:/g, "");


            // Check for valid answers; 
            if ($('input[name=yesnoOpt]:checked').length > 0 && $('input[name=veridicality]:checked').length > 0) {
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
                trial.alt1 = alt1;
                trial.alt2 = alt2;

                trial.polar = polarResponse;
                trial.veridicality = veriResponse;

                trial.comment = commentResponse;

                data["trial" + trialnum] = trial;
            
                // Move on to the next trial
                stepExperiment();
     
            }

            else { // If any of the questions is not answered:
                warning = "다음 단계로 넘어가기 위해 문제들에 답해주십시오.";
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
//(if collecting data with php/server instead of MTurk)

// var experimentName = "veri-qed-pilot-test";
// var submitAddress = "http://sunwoojeong.com/cgi-bin/process.php";
// "http://hosting02.snu.ac.kr/~sunwooj/cgi-bin/process2.php";



// List of stimuli

var stimuliList = shuffle([


["door", "유라", 
    ["al", "moreu", "gieok", "ggameok"], 
    ["nv", "mv"], ["ms", "mv"], 
    ["문이 열렸는가?", "문이 열렸다."], 
    "문이 열렸다", 
    ["문이 열렸고", "문이 열리지 않았고"], ["문이 열렸다", "문이 열리지 않았다"], ["pos", "neg"], 
    ["안다", "모른다", "기억한다", "까먹었다"], 
    ["아는", "모르는", "기억하는", "까먹은"], 
    ["안다고 생각하는", "안다고 생각하지 않는", "기억한다고 생각하는", "기억한다고 생각하지 않는"]
],

["fox", "별이", 
    ["al", "moreu", "gieok", "ggameok"], 
    ["mv", "nv"], ["mv", "eo"], 
    ["여우가 여물을 먹었는가?", "여우가 여물을 먹었다."],
    "여우가 여물을 먹었다", 
    ["여우가 여물을 먹었고", "여우가 여물을 먹지 않았고"], ["여우가 여물을 먹었다", "여우가 여물을 먹지 않았다"], ["pos", "neg"], 
    ["안다", "모른다", "기억한다", "까먹었다"], 
    ["아는", "모르는", "기억하는", "까먹은"],
    ["안다고 생각하는", "안다고 생각하지 않는", "기억한다고 생각하는", "기억한다고 생각하지 않는"]
],

["melon", "나영이", 
    ["moreu", "gieok", "ggameok", "al"], 
    ["nv", "mv"], ["es", "mv"], 
    ["메론이 열렸는가?", "메론이 열렸다."], 
    "메론이 열렸다", 
    ["메론이 열리지 않았고", "메론이 열렸고"], ["메론이 열리지 않았다", "메론이 열렸다"], ["neg", "pos"], 
    ["모른다", "기억한다", "까먹었다", "안다"], 
    ["모르는", "기억하는", "까먹은", "아는"],
    ["안다고 생각하지 않는", "기억한다고 생각하는", "기억한다고 생각하지 않는", "안다고 생각하는"]
],

["echo", "유민이", 
    ["moreu", "gieok", "ggameok", "al"], 
    ["mv", "nv"], ["mv", "es"], 
    ["메아리가 울리는가?", "메아리가 울린다."], 
    "메아리가 울린다", 
    ["메아리가 울리지 않고", "메아리가 울리고"], ["메아리가 울리지 않는다", "메아리가 울린다"], ["neg", "pos"], 
    ["모른다", "기억한다", "까먹었다", "안다"], 
    ["모르는", "기억하는", "까먹은", "아는"],
    ["안다고 생각하지 않는", "기억한다고 생각하는", "기억한다고 생각하지 않는", "안다고 생각하는"]
],

["widow", "윤혜", 
    ["gieok", "ggameok", "al", "moreu"], 
    ["nv", "mv"], ["ev", "mv"], 
    ["의원이 미망인인가?", "의원이 미망인이다."], 
    "의원이 미망인이다", 
    ["의원이 미망인이고", "의원이 미망인이 아니고"], ["의원이 미망인이다", "의원이 미망인이 아니다"], ["pos", "neg"], 
    ["기억한다", "까먹었다", "안다", "모른다"], 
    ["기억하는", "까먹은", "아는", "모르는"],
    ["기억한다고 생각하는", "기억한다고 생각하지 않는", "안다고 생각하는", "안다고 생각하지 않는"]
],

["socks", "민석이", 
    ["gieok", "ggameok", "al", "moreu"], 
    ["mv", "nv"], ["mv", "ev"], 
    ["양말이 어른용인가?", "양말이 어른용이다."], 
    "양말이 어른용이다", 
    ["양말이 어른용이 아니고", "양말이 어른용이고"], ["양말이 어른용이 아니다", "양말이 어른용이다"], ["neg", "pos"], 
    ["기억한다", "까먹었다", "안다", "모른다"],
    ["기억하는", "까먹은", "아는", "모르는"],
    ["기억한다고 생각하는", "기억한다고 생각하지 않는", "안다고 생각하는", "안다고 생각하지 않는"]
],

["ramen", "종윤이", 
    ["ggameok", "al", "moreu", "gieok"], 
    ["nv", "mv"], ["ed", "mv"], 
    ["메밀을 라면에 넣었는가?", "메밀을 라면에 넣었다."], 
    "메밀을 라면에 넣었다", 
    ["메밀을 라면에 넣지 않았고", "메밀을 라면에 넣었고"], ["메밀을 라면에 넣지 않았다", "메밀을 라면에 넣었다"], ["neg", "pos"], 
    ["까먹었다", "안다", "모른다", "기억한다"],
    ["까먹은", "아는", "모르는", "기억하는"],
    ["기억한다고 생각하지 않는", "안다고 생각하는", "안다고 생각하지 않는", "기억한다고 생각하는"]
],

["year", "윤호", 
    ["ggameok", "al", "moreu", "gieok"], 
    ["mv", "nv"], ["mv", "ed"], 
    ["내란이 을미년에 일어났는가?", "내란이 을미년에 일어났다."], 
    "내란이 을미년에 일어났다", 
    ["내란이 을미년에 일어났고", "내란이 을미년에 일어나지 않았고"], ["내란이 을미년에 일어났다", "내란이 을미년에 일어나지 않았다"], ["pos", "neg"], 
    ["까먹었다", "안다", "모른다", "기억한다"],
    ["까먹은", "아는", "모르는", "기억하는"],
    ["기억한다고 생각하지 않는", "안다고 생각하는", "안다고 생각하지 않는", "기억한다고 생각하는"]
]

// ["age", "발화자", 
//     ["filler", "filler", "filler", "filler"], 
//     ["dec", "dec"], ["dec", "dec"],
//     ["수영이는 서현이보다 나이가 많은가?", "수영이는 서현이보다 나이가 많다."],
//     "내란이 을미년에 일어났다",
//     ["내란이 을미년에 일어났고", "내란이 을미년에 일어나지 않았고"], ["내란이 을미년에 일어났다", "내란이 을미년에 일어나지 않았다"], ["pos", "neg"],
//     ["까먹었다", "안다", "모른다", "기억한다"],
//     ["말하고자 하는 것", "말하고자 하는 것", "말하고자 하는 것", "말하고자 하는 것"],
//     ["전달하고자 하는", "전달하고자 하는", "전달하고자 하는", "전달하고자 하는"]    
// ],
    
// ["conch", "진희", "진희는 소라를 키우지 않는다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["pq", "pq"], ["pq", "pq"]],

// ["exam", "슬기", "슬기는 시험에서 80점 이하의 점수를 받았다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["pq", "pq"], ["pq", "pq"]],

// ["gift", "지현이", "지현이는 어제 집들이 선물을 가져오지 않았다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["dec", "dec"], ["dec", "dec"]],

// ["height", "준홍이", "홍석이는 준홍이보다 키가 작다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["dec", "dec"], ["dec", "dec"]],

// ["pasta", "예은이", "예은이는 파스타에 명란젓을 넣었다", ["filler", "filler", "filler", "filler", "filler", "filler"], ["pq", "pq"], ["pq", "pq"]]


]);



// List of names

var nameList = shuffle([
    "지희", "설아", "정화", "다예", "설희", "민희", 
    "영지", "효주", "영미", "연아", "혜리", "은지",
    "현아", "애리", "지혜", "연화"
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


var verbRandom = Math.floor(Math.random() * 4);
var prosRandom = Math.floor(Math.random() * 2);
var polRandom = Math.floor(Math.random() * 2);


function stepExperiment () {
    if (trialnum == 8) { // end the experiment. 
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

        nameStim1 = nameList[trialnum-1];
        stimuliVector = stimuliList[trialnum-1];

        item = stimuliVector[0];

        nameStim2 = stimuliVector[1];

        verbtype = stimuliVector[2][verbRandom];
        prosody = stimuliVector[3][prosRandom];
        prosody2 = stimuliVector[4][prosRandom];

        pOption = stimuliVector[5][1];
        qOption = stimuliVector[5][0];

        pveri = stimuliVector[6];
        qsitu = stimuliVector[7][polRandom];
        qveri = stimuliVector[8][polRandom];
        polarity = stimuliVector[9][polRandom];

        verb = stimuliVector[10][verbRandom];
        verb1 = stimuliVector[11][verbRandom];
        verb2 = stimuliVector[12][verbRandom];

               
        $(".item_number").html(trialnum);

        $(".currentName1").html(nameStim1);
        $(".currentName2").html(nameStim2);

        $(".Pint").html(pOption);
        $(".Qint").html(qOption);

        $(".currentVerb1").html(verb1);
        $(".currentVerb2").html(verb2);

        $(".currentVerb").html(verb);

        $(".pveriProposition").html(pveri);
        $(".qveriProposition").html(qveri);

        $(".qSitu").html(qsitu);


        // Tell HTML which sound file will be played
        document.getElementById('currentAudio1').src = "https://sunwoojeong.com/experiments/exp4/" + item + "-" + verbtype + "-" + "qed" + "-" +prosody + ".wav";
        // "http://hosting02.snu.ac.kr/~sunwooj/experiments/veridicality/exp3/"
        

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        var PQoption = $("#PQoption");
        PQoption.html(
            PQoption.find("label").sort(function () {
                return Math.round(Math.random()) - 0.5;
            }));

        showSlide('stage'); 

        $('#responseForm2a').hide();
        $('#responseForm2b').hide();
        $('#optionalForm').hide();
        $('#continue').hide();

        $('#nextstage').click(function() {
            if (document.getElementById('optP').checked) {
                $('#responseForm2a').show();
            }
            else {
                $('#responseForm2b').show();
            }
            $('#optionalForm').show();
            $('#continue').show();
        });

        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var ctypeResponse = $('input[name="ctyperes"]:checked').val();

            var veriResponse = $('input[name="veridicality"]:checked').val();

            var commentResponse = $('#commentBox1').val();
            commentResponse = commentResponse.replace (/,/g, "");
            commentResponse = commentResponse.replace (/:/g, "");


            // Check for valid answers; 
            if ($('input[name=ctyperes]:checked').length > 0 && $('input[name=veridicality]:checked').length > 0) {
                // ensure that likert options are unticked for the next problems 
                $(".ctyperes").prop('checked', false);
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
                trial.clausetype = "qed";
                trial.prosody = prosody; 

                trial.ctype = ctypeResponse;
                trial.veridicality = veriResponse;

                trial.comment = commentResponse;

                data["trial" + trialnum] = trial;
            
                // Move on to the next trial
                stepExperiment();
     
            }

            else { // If any of the questions is not answered:
                warning = "다음 단계로 넘어가기 위해 두 문제에 모두 답해주십시오.";
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
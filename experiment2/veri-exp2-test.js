var experimentName = "test";
var submitAddress = "test";
var payment = "test";

//(if commented, debug mode)
// var experimentName = "veri-qed-pilot-crowdworks";
// var submitAddress = "http://sunwoojeong.com/cgi-bin/process-crowdworks.php";
// var payment = "2000won";

// List of stimuli

var stimuliList = shuffle([


["door", "유라", 
    ["al", "moreu", "gieok", "ggameok"], 
    ["nv", "mv"], ["ms", "mv"], 
    ["문이 열렸는지 안 열렸는지", "문이 열린 줄"],
    // ["&ldquo;문이 열렸는가?&rdquo;라는 질문에 대한 답", "&ldquo;문이 열렸다.&rdquo;"], 
    "문이 열렸다", 
    ["문이 열렸고", "문이 열리지 않았고"], ["문이 열렸다", "문이 열리지 않았다"], ["pos", "neg"], 
    ["안다", "모른다", "기억한다", "까먹었다"],
    ["안다", "모른다", "기억한다", "까먹었다"],
    ["안다", "모른다", "기억한다", "까먹었다"] 
    // ["안다 (혹은 생각한다)", "알지 못한다", "기억한다 (혹은 생각한다)", "기억하지 못한다"],
    // ["안다 (혹은 안다고 생각한다)", "알지 못한다", "기억한다 (혹은 기억한다고 생각한다)", "기억하지 못한다"]
],

["fox", "별이", 
    ["al", "moreu", "gieok", "ggameok"], 
    ["mv", "nv"], ["mv", "eo"], 
    ["여우가 여물을 먹었는지 안 먹었는지", "여우가 여물을 먹은 줄"],
    // ["&ldquo;여우가 여물을 먹었는가?&rdquo;라는 질문에 대한 답", "&ldquo;여우가 여물을 먹었다.&rdquo;"], 
    "여우가 여물을 먹었다", 
    ["여우가 여물을 먹었고", "여우가 여물을 먹지 않았고"], ["여우가 여물을 먹었다", "여우가 여물을 먹지 않았다"], ["pos", "neg"], 
    ["안다", "모른다", "기억한다", "까먹었다"],
    ["안다", "모른다", "기억한다", "까먹었다"],
    ["안다", "모른다", "기억한다", "까먹었다"] 
    // ["안다 (혹은 생각한다)", "알지 못한다", "기억한다 (혹은 생각한다)", "기억하지 못한다"],
    // ["안다 (혹은 안다고 생각한다)", "알지 못한다", "기억한다 (혹은 기억한다고 생각한다)", "기억하지 못한다"]
],

["melon", "나영이", 
    ["moreu", "gieok", "ggameok", "al"], 
    ["nv", "mv"], ["es", "mv"], 
    ["메론이 열렸는지 안 열렸는지", "메론이 열린 줄"],
    // ["&ldquo;메론이 열렸는가?&rdquo;라는 질문에 대한 답", "&ldquo;메론이 열렸다.&rdquo;"], 
    "메론이 열렸다", 
    ["메론이 열리지 않았고", "메론이 열렸고"], ["메론이 열리지 않았다", "메론이 열렸다"], ["neg", "pos"], 
    ["모른다", "기억한다", "까먹었다", "안다"],
    ["모른다", "기억한다", "까먹었다", "안다"],
    ["모른다", "기억한다", "까먹었다", "안다"] 
    // ["알지 못한다", "기억한다 (혹은 생각한다)", "기억하지 못한다", "안다 (혹은 생각한다)"],
    // ["알지 못한다", "기억한다 (혹은 기억한다고 생각한다)", "기억하지 못한다", "안다 (혹은 안다고 생각한다)"]
],

["echo", "유민이", 
    ["moreu", "gieok", "ggameok", "al"], 
    ["mv", "nv"], ["mv", "es"], 
    ["메아리가 울리는지 안 울리는지", "메아리가 울리는 줄"],
    // ["&ldquo;메아리가 울리는가?&rdquo;라는 질문에 대한 답", "&ldquo;메아리가 울린다.&rdquo;"], 
    "메아리가 울린다", 
    ["메아리가 울리지 않고", "메아리가 울리고"], ["메아리가 울리지 않는다", "메아리가 울린다"], ["neg", "pos"], 
    ["모른다", "기억한다", "까먹었다", "안다"],
    ["모른다", "기억한다", "까먹었다", "안다"],
    ["모른다", "기억한다", "까먹었다", "안다"] 
    // ["알지 못한다", "기억한다 (혹은 생각한다)", "기억하지 못한다", "안다 (혹은 생각한다)"],
    // ["알지 못한다", "기억한다 (혹은 기억한다고 생각한다)", "기억하지 못한다", "안다 (혹은 안다고 생각한다)"]
],

["widow", "윤혜", 
    ["gieok", "ggameok", "al", "moreu"], 
    ["nv", "mv"], ["ev", "mv"], 
    ["의원이 미망인인지 아닌지", "의원이 미망인인 줄"],
    // ["&ldquo;의원이 미망인인가?&rdquo;라는 질문에 대한 답", "&ldquo;의원이 미망인이다.&rdquo;"], 
    "의원이 미망인이다", 
    ["의원이 미망인이고", "의원이 미망인이 아니고"], ["의원이 미망인이다", "의원이 미망인이 아니다"], ["pos", "neg"], 
    ["기억한다", "까먹었다", "안다", "모른다"],
    ["기억한다", "까먹었다", "안다", "모른다"],
    ["기억한다", "까먹었다", "안다", "모른다"]
    // ["기억한다 (혹은 생각한다)", "기억하지 못한다", "안다 (혹은 생각한다)", "알지 못한다"],
    // ["기억한다 (혹은 기억한다고 생각한다)", "기억하지 못한다", "안다 (혹은 안다고 생각한다)", "알지 못한다"]
],

["socks", "민석이", 
    ["gieok", "ggameok", "al", "moreu"], 
    ["mv", "nv"], ["mv", "ev"], 
    ["양말이 어른용인지 아닌지", "양말이 어른용인 줄"],
    // ["&ldquo;양말이 어른용인가?&rdquo;라는 질문에 대한 답", "&ldquo;양말이 어른용이다.&rdquo;"], 
    "양말이 어른용이다", 
    ["양말이 어른용이 아니고", "양말이 어른용이고"], ["양말이 어른용이 아니다", "양말이 어른용이다"], ["neg", "pos"], 
    ["기억한다", "까먹었다", "안다", "모른다"],
    ["기억한다", "까먹었다", "안다", "모른다"],
    ["기억한다", "까먹었다", "안다", "모른다"] 
    // ["기억한다 (혹은 생각한다)", "기억하지 못한다", "안다 (혹은 생각한다)", "알지 못한다"],
    // ["기억한다 (혹은 기억한다고 생각한다)", "기억하지 못한다", "안다 (혹은 안다고 생각한다)", "알지 못한다"]
],

["ramen", "종윤이", 
    ["ggameok", "al", "moreu", "gieok"], 
    ["nv", "mv"], ["ed", "mv"], 
    ["메밀을 라면에 넣었는지 안 넣었는지", "메밀을 라면에 넣은 줄"],
    // ["&ldquo;메밀을 라면에 넣었는가?&rdquo;라는 질문에 대한 답", "&ldquo;메밀을 라면에 넣었다.&rdquo;"], 
    "메밀을 라면에 넣었다", 
    ["메밀을 라면에 넣지 않았고", "메밀을 라면에 넣었고"], ["메밀을 라면에 넣지 않았다", "메밀을 라면에 넣었다"], ["neg", "pos"], 
    ["까먹었다", "안다", "모른다", "기억한다"],
    ["까먹었다", "안다", "모른다", "기억한다"],
    ["까먹었다", "안다", "모른다", "기억한다"] 
    // ["기억하지 못한다", "안다 (혹은 생각한다)", "알지 못한다", "기억한다(혹은 생각한다)"],
    // ["기억하지 못한다", "안다 (혹은 안다고 생각한다)", "알지 못한다", "기억한다 (혹은 기억한다고 생각한다)"]
],

["year", "윤호", 
    ["ggameok", "al", "moreu", "gieok"], 
    ["mv", "nv"], ["mv", "ed"], 
    ["내란이 을미년에 일어났는지 안 일어났는지", "내란이 을미년에 일어난 줄"],
    // ["&ldquo;내란이 을미년에 일어났는가?&rdquo;라는 질문에 대한 답", "&ldquo;내란이 을미년에 일어났다.&rdquo;"], 
    "내란이 을미년에 일어났다", 
    ["내란이 을미년에 일어났고", "내란이 을미년에 일어나지 않았고"], ["내란이 을미년에 일어났다", "내란이 을미년에 일어나지 않았다"], ["pos", "neg"], 
    ["까먹었다", "안다", "모른다", "기억한다"],
    ["까먹었다", "안다", "모른다", "기억한다"],
    ["까먹었다", "안다", "모른다", "기억한다"] 
    // ["기억하지 못한다", "안다 (혹은 생각한다)", "알지 못한다", "기억한다(혹은 생각한다)"],
    // ["기억하지 못한다", "안다 (혹은 안다고 생각한다)", "알지 못한다", "기억한다 (혹은 기억한다고 생각한다)"]
],

["age", "나", 
    ["filler", "filler", "filler", "filler"], 
    ["dec", "dec"], ["dec", "dec"],
    ["수영이가 서현이보다 나이가 많은지 안 많은지에 대한 답을", "수영이가 서현이보다 나이가 많다는 것을"],
    // ["&ldquo;수영이는 서현이보다 나이가 많은가?&rdquo;라는 질문에 대한 답", "&ldquo;수영이는 서현이보다 나이가 많다.&rdquo;"], 
    "수영이는 서현이보다 나이가 적다",
    ["사실 서현이가 수영이보다 나이가 많고", "사실 서현이가 수영이보다 나이가 많고"],
    ["사실 서현이가 수영이보다 나이가 많다", "사실 서현이가 수영이보다 나이가 많다"],
    ["false", "false"],
    ["전하고자 한다", "전하고자 한다", "전하고자 한다", "전하고자 한다"],
    ["전하고자 한다", "전하고자 한다", "전하고자 한다", "전하고자 한다"],
    ["원한다", "원한다", "원한다", "원한다"]
],

["conch", "나",
    ["filler", "filler", "filler", "filler"],
    ["pq", "pq"], ["pq", "pq"],
    ["진희가 어항에 소라게를 키우고 있는지 아닌지에 대한 답을", "진희가 어항에 소라게를 키우고 있다는 것을"],
    // ["&ldquo;진희는 어항에 소라게를 키우고 있는가?&rdquo;라는 질문에 대한 답", "&ldquo;진희는 어항에 소라게를 키우고 있다.&rdquo;"], 
    "진희는 어항에 소라게를 키우고 있다",
    ["진희는 어항을 가지고 있고", "진희는 어항을 가지고 있고"],
    ["진희가 어항을 가지고 있다", "진희가 어항을 가지고 있다"],
    ["true", "true"],
    ["청자가 이미 알고 있을 것이라 생각한다", "청자가 이미 알고 있을 것이라 생각한다", "청자가 이미 알고 있을 것이라 생각한다", "청자가 이미 알고 있을 것이라 생각한다"],
    ["전하고자 한다", "전하고자 한다", "전하고자 한다", "전하고자 한다"],
    ["원한다", "원한다", "원한다", "원한다"]
],

["height", "나",
    ["filler", "filler", "filler", "filler"],
    ["dec", "dec"], ["dec", "dec"],
    ["준홍이가 홍석이보다 키가 큰지 안 큰지에 대한 답을", "준홍이가 홍석이보다 키가 크다는 것을"],
    // ["&ldquo;준홍이는 홍석이보다 키가 큰가?&rdquo;라는 질문에 대한 답", "&ldquo;준홍이는 홍석이보다 키가 크다.&rdquo;"], 
    "홍석이는 준홍이보다 키가 크다",
    ["사실 홍석이가 준홍이보다 키가 크고", "사실 홍석이가 준홍이보다 키가 크고"],
    ["사실 홍석이가 준홍이보다 키가 크다", "사실 홍석이가 준홍이보다 키가 크다"],
    ["false", "false"],
    ["전하고자 한다", "전하고자 한다", "전하고자 한다", "전하고자 한다"],
    ["전하고자 한다", "전하고자 한다", "전하고자 한다", "전하고자 한다"],
    ["원한다", "원한다", "원한다", "원한다"]
],

["exam", "나",
    ["filler", "filler", "filler", "filler"],
    ["pq", "pq"], ["pq", "pq"],
    ["슬기가 시험에서 90점 이상의 점수를 받았는지 안 받았는지에 대한 답을", "슬기가 시험에서 90점 이상의 점수를 받았다는 것을"],
    // ["&ldquo;슬기는 시험에서 90점 이상의 점수를 받았는가?&rdquo;라는 질문에 대한 답", "&ldquo;슬기는 시험에서 90점 이상의 점수를 받았다.&rdquo;"], 
    "슬기는 시험에서 90점 이상의 점수를 받았다",
    ["슬기는 얼마 전 시험을 쳤고", "슬기는 얼마 전 시험을 쳤고"],
    ["슬기가 얼마 전 시험을 쳤다", "슬기가 얼마 전 시험을 쳤다"],
    ["true", "true"],
    ["청자가 이미 알고 있을 것이라 생각한다", "청자가 이미 알고 있을 것이라 생각한다", "청자가 이미 알고 있을 것이라 생각한다", "청자가 이미 알고 있을 것이라 생각한다"],
    ["전하고자 한다", "전하고자 한다", "전하고자 한다", "전하고자 한다"],
    ["원한다", "원한다", "원한다", "원한다"]
]


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
    if (trialnum == 12) { // end the experiment. CHANGE LATER TO 12
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
        document.getElementById('currentAudio1').src = 
        // "exp2-stimuli/" + item + "-" + verbtype + "-" + "qed" + "-" +prosody + ".wav";
        "https://sunwoojeong.com/experiments/veridicality/exp2/exp2-stimuli/" + item + "-" + verbtype + "-" + "qed" + "-" + prosody + ".wav";
        

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
        $('#nextstage').show();

        $('#nextstage').click(function() {
            if ($('input[name=ctyperes]:checked').length > 0) {
                if (document.getElementById('optP').checked) {
                    $('#responseForm2a').show();
                    $('#nextstage').hide();
                }
                else {
                    $('#responseForm2b').show();
                    $('#nextstage').hide();
                }
                $('#optionalForm').show();
                $('#continue').show();
                $("#prewarning").html("");
            }
            else {
                prewarning = "다음 질문으로 넘어가기 위해 첫번째 질문에 먼저 답해 주십시오.";
                $("#prewarning").html(prewarning);
            }
            // if (document.getElementById('optP').checked) {
            //     $('#responseForm2a').show();
            //     $('#nextstage').hide();
            // }
            // else {
            //     $('#responseForm2b').show();
            //     $('#nextstage').hide();
            // }
            // $('#optionalForm').show();
            // $('#continue').show();
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
                trial.prosody2 = prosody2;

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
//(if collecting data with php/server instead of MTurk)
var experimentName = "veridicality-pilot1";
// var submitAddress = "http://hosting02.snu.ac.kr/~sunwooj/cgi-bin/process.php";
var submitAddress = "https://web.stanford.edu/~junhongc/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 


["al", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"] 
    ],

["al", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["al", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p1", "p2"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

["al", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["geo1", "geo2"]
    ],

["al", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["jul1", "jul2"]
    ],

["al", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p1", "p2"] ], 
    ["go", "go"]
    ],

["al", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["geo1", "geo2"]
    ],

["al", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["al", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p1", "p2"], ["p3", "p3"] ], 
    ["go", "go"]
    ],


["gieok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ],

["gieok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

["gieok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["geo1", "geo2"] 
    ],

["gieok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"] 
    ],

["gieok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

["gieok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["geo1", "geo2"] 
    ],

["gieok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"] 
    ],

["gieok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"] 
    ],

["gieok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"] 
    ],


["mit", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

["mit", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["geo1", "geo2"]
    ],

["mit", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["mit", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

["mit", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"]
    ],

["mit", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["mit", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

["mit", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["geo1", "geo2"]
    ],

["mit", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ],


["moreu", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"]
    ],

["moreu", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["moreu", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

["moreu", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["geo1", "geo2"]
    ],

["moreu", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ],

["moreu", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

["moreu", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["geo1", "geo2"]
    ],

["moreu", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["moreu", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],


["ggameok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ],

["ggameok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

["ggameok", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["geo1", "geo2"]
    ],

["ggameok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["ggameok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

["ggameok", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["geo1", "geo2"]
    ],

["ggameok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["ggameok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

["ggameok", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"]
    ],


["alanae", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["go", "go"]
    ],

["alanae", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["geo1", "geo2"]
    ],

["alanae", ["come", "marry", "painter"], 
    ["유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다"],
    [ ["p4", "p4"], ["p2", "p1"], ["p3", "p3"] ], 
    ["jul1", "jul2"]
    ],

["alanae", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["go", "go"]
    ],

["alanae", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["geo1", "geo2"]
    ],

["alanae", ["marry", "painter", "come"], 
    ["태희가 결혼했다고 생각한다", "민우가 화가라고 생각한다", "유라가 왔다고 생각한다"],
    [ ["p2", "p1"], ["p3", "p3"], ["p4", "p4"] ], 
    ["jul1", "jul2"]
    ],

["alanae", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["go", "go"]
    ],

["alanae", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["geo1", "geo2"]
    ],

["alanae", ["painter", "come", "marry"], 
    ["민우가 화가라고 생각한다", "유라가 왔다고 생각한다", "태희가 결혼했다고 생각한다"],
    [ ["p3", "p3"], ["p4", "p4"], ["p2", "p1"] ], 
    ["jul1", "jul2"]
    ]


]);



// List of names

var nameList = shuffle([
    "별이", "지희", "윤아", "숙희", "선아", "화사", "미애", "유리", "수아", "설아", 
    "미나", "지혜", "나래", "은아", "수라", "진아", "영희", "연지", "세아", "민혜",
    "애리", "민아", "보라", "솔라", "민지", "영자", "연화", "영혜", "마리", "가희",
    "경아", "정화", "지나", "다예", "다희", "설희", "민희", "영지", "예리", "다라",
    "도희", "예지", "혜주", "선우", "담비", "지수", "성희", "미라", "슬기", "신애",
    "유리", "은지", "현서", "제아", "혜미", "영미", "정희", "연희", "수지", "희라",
    "희애", "희수", "민하", "미혜"
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
            checkboxwarning = "실험 참여를 위해서는 동의서를 읽어보시고 위 항목을 체크해 동의 의사를 표현해 주시기 바랍니다.";
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



var itemRandom = Math.floor(Math.random() * 3);
var prosRandom = Math.floor(Math.random() * 3);
var compRandom = Math.floor(Math.random() * 3);
var binaryRandom = Math.floor(Math.random() * 2);



function stepExperiment () {
    if (trialnum == 54) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            var gender = $('.gen:checked').val();
            var age = $('.age:checked').val();
            var region = $('.reg:checked').val();
            var nat = $('.nat:checked').val();

            var gend_com = $('#ogen_com').val();
            gend_com = gend_com.replace (/,/g, "");
            var reg_com = $('#reg_com').val();
            reg_com = reg_com.replace (/,/g, "");
            
            var lang_com = $('#lang_com').val();
            lang_com = lang_com.replace (/,/g, "");
            var contact = $('#contact').val();
            contact = contact.replace (/,/g, "");

            // if ($('.gen:checked').length > 0 && $('.age:checked').length > 0 && $('.reg:checked').length > 0) {

            data.gender = gender;
            data.age = age;
            data.region = region;

            data.gendCom = gend_com;
            data.regCom = reg_com;
            data.langCom = lang_com;
            data.contact = contact;

            showSlide('finish');
            setTimeout(function() { turk.submit(data)}, 1000); 
                
            // } 

            // else {
            //     demoWarning = "실험을 마치기 위해 설문지를 체크해 주십시오.";
            // $("#demoWarning").html(demoWarning);
            // document.body.scrollTop = document.body.scrollHeight;
            // }

            } ) }
 
    else {

        trialnum += 1;

        // if (trialnum < 2) {
        //     nameStim = baseStimVector[0];
        //     contStim = baseStimVector[1];
        //     stimuliVector = shuffle(baseStimVector[2]);
        //     qtypeStim = stimuliVector[fillerRandom];
            
        // }

        // else {
            nameStim = nameList[trialnum-1];
            stimuliVector = stimuliList[trialnum-1];

            verbtype = stimuliVector[0];

            itemVector = stimuliVector[1];
            propVector = stimuliVector[2];
            prosVector = stimuliVector[3];
            compVector = stimuliVector[4];

            item = itemVector[itemRandom];
            proposition = propVector[itemRandom];
            prosody = prosVector[prosRandom][binaryRandom];
            // complementizer = compVector[compRandom][binaryRandom];
            complementizer = compVector[binaryRandom];

        // }
               
        $(".item_number").html(trialnum);  
        $(".currentName1").html(nameStim);

        $(".veriProposition").html(proposition);

        // Tell HTML which sound file will be played
        document.getElementById('currentAudio1').src = "http://hosting02.snu.ac.kr/~sunwooj/experiments/veridicality/" + item + "-" + verbtype + "-" + complementizer + "-" +prosody + ".wav";


        
        // Tell HTML which image file will display
        // document.getElementById('currentCont').src = "../stimuli/" + contStim + ".png";

        // document.getElementById('currentPic').src = "../stimuli/" + qtypeStim + ".png";

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 
        // $('#nextpart').show();

        // // $('#responseForm2').hide();
        // // $('#optional1').hide();
        // // $('#commentBox1').hide();
        // // $('#continue').hide();

        // $('#nextpart').click(function() {
        //     // if  (slider1.style.backgroundColor != "") {
        //         $("#nextpart").unbind('click');
        //         $('#nextpart').hide();

        //         $('#responseForm2').show();
        //         $('#optional1').show();
        //         $('#commentBox1').show();
        //         $('#continue').show();

        //         // $("#warning").html("");
        //     // }

        //     // else  {
        //     //     warning = "Please answer the question to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays numeric values.";
        //     //     $("#warning").html(warning);
        //     //     document.body.scrollTop = document.body.scrollHeight;
        //     // }
        // });


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // var sliderResponse1 = $('#sliderval1').val();
            // var sliderResponse2 = $('#sliderval2').val();

            var natResponse = $('.likertN1:checked').val();
            var veriResponse = $('.likertN2:checked').val();

            var commentResponse = $('#commentBox1').val();
            commentResponse = commentResponse.replace (/,/g, "");


            // Check for valid answers; all questions must be answered
            // if  (slider2.style.backgroundColor != "")
            if  ($('.likertN1:checked').length > 0 && $('.likertN2:checked').length > 0) {
                // ensure that likert options are unticked for the next problems 
                $(".likertN1").prop('checked', false);
                $(".likertN2").prop('checked', false);
                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning").html("");

                trial = {};
                trial.name = nameStim;
                trial.item = item;
                trial.verbtype = verbtype;
                trial.complementizer = complementizer;
                trial.prosody = prosody; 

                trial.naturalness = natResponse;
                trial.veridicality = veriResponse;

                trial.comment = commentResponse;

                data["trial" + trialnum] = trial;

                // Initialize the sliders again
                //refreshSlider();
            
                // Move on to the next trial
                stepExperiment();
     
                    }

            else { // If any of the questions is not answered:
                warning = "Please answer the question to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays a numeric value.";
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
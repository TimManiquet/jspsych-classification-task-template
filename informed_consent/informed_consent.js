/*
INFORMED CONSENT FORM
---------------------
This file contains the informed consent to use in the mouse tracker experiment.
Modify it as you wish.
It will only be used if called upon in the main experiment (index.html).
*/


const INFORMED_CONSENT = {
    
    Informed_consent: function() {

        return (
            '<div class="consent">' +
            // Show the KULeuven logo
            '<img style="width: 20%" src="informed_consent/KULeuvenlogo.png"> ' +
            '<h5>Title of the study</h5>' +
            '<p> Here goes the title of your study </p>' +
            
            // Add your name and email here below
            '<h5> Researcher contact</h5>' +
            '<p> Research name: researcher_email</p>' +

            '<h5>Purpose and methodology of the research</h5>' +
            //Read and complete the following information
            'Assessment of ... . A number of images will be presented, to which a mouse-click answer has to be given. The goal of this study is to evaluate ... .' +
            'We ask you to respond to the shown pictures as fast and accurately as you can, based on the instructions that will be given.' +

            '<h5>Duration of the experiment</h5>' +
            '... minutes' +
            
            '<h5>Conditions for participation</h5>' +
            '<div style="margin-left: 80px; margin-right: 80px">' +
                '<ul style="text-align:left;">' +
                    '<li>You are 17 or older </li>' +
                    '<li>You have normal eyesight or wear glasses/lenses to correct your eyesight</li>' +
                    '<li>You are participating in this study on a computer screen (not using a smartphone or tablet) </li>' +
                '</ul>' +
            '</div>' +

            // Actual consent text below, fill in the missing points
            '<h5>Please read the following information</h5>' +
            '<div style="margin-left: 80px; margin-right: 80px">' +
                '<ul style="text-align:left;">' +
                    '<li>I understand what is expected of me during this study.</li>' +
                    // Fill in the experimental task here below
                    '<li>I know that I will participate in the following trials or tests: ... .</li>' +
                    '<li>There are no specific risks involved in performing the computer tasks.</li>' +
                    '<li>I know that I will be compensated for my participation.</li>' +
                    '<li>I understand that my participation in this study is voluntary. I have the right to cancel my participation at any time. I do not have to give a reason for this and I know that no harm can arise for me from this.</li>' +
                    '<li>The results of this research can be used for scientific purposes and may be published. In addition, the research data may be made freely available on open platforms. My name will not be published, anonymity and confidentiality of the data are guaranteed at every stage of the investigation.</li>' +
                    '<li>For questions, I know that after my participation I can contact:' +
                    'Prof. Hans Op de Beeck (hans.opdebeeck@kuleuven.be),' +
                    'Laboratory of Biological Psychology, Tiensestraat 102 - box 3714, 3000 Leuven. Local: 02.46 (tel: +32 16 32 60 39).</li>' +
                    '<li>For any complaints or other concerns regarding ethical aspects of this study, I can contact the Socio-Social Ethics Committee of KU Leuven: smec@kuleuven.be</li>' +
                '</ul>' +
            '</div>' +

            '<b>I have read and understood the above information and have received answers to all my questions regarding this study. By continuing, I agree to participate.</b>' +
            '<br>' +
            '<b>You can take a screen shot of this page if you want to keep your own record of it. </b>' +
            '<br>' +
            //'<button type="button" id="accept_consent_button">Accept informed consent</button>' +
            '<br><br>' +
            '</div>'
        )
    }
}

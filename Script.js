var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittaruis", "Capricorn"];
var dates = ["That date doesn't exist you crazy cat! Try again!"];
var years = ["Rabbit", "Dragon", "Snake", "Horse", "Goat",];
function onSubmit() {
    var year = parseInt(document.getElementById("year").value);
    var zodiac = determineZodiac(getZodiac(year));
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var sign = determineSign(parseInt(month), parseInt(day));
    var message = determineHoroscope(sign);
    var name = document.getElementById("yourName").value;
    document.getElementById("sign").innerHTML = sign;
    document.getElementById("message").innerHTML = name + ", " + message;
    document.getElementById("image").innerHTML = "<img src='img/" + theImage(sign) + ".png'>";
    getZodiac(year);
    document.getElementById("zodiac").innerHTML = zodiac;

    determineHoroscope(name, determineSign());
}



function determineSign(month, day) {

    if((month === 2 && day > 29)){
       return dates[0];
    }
    if((month === 9 && day > 30)){
       return dates[0];
    }
    if((month === 4 && day > 30)){
        return dates[0];
    }
    if((month === 11 && day > 30)){
        return dates[0];
    }
    if((month === 6 && day > 30)){
        return dates[0];
    }

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return signs[0];
    }
    if (month === 2 && day >= 19 || month === 3 && day <= 20) {
        return signs[1];
    }
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return signs[2];
    }
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return signs[3];
    }
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return signs[4];
    }
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return signs[5];
    }
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return signs[6];
    }
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return signs[7];
    }
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return signs[8];
    }
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return signs[9];
    }
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return signs[10];
    }
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return signs[11];
    }
}


function determineHoroscope(determineSign, name) {
    if (determineSign === signs[0]) {
        return "The Aquarius: the sign of hope, destiny, and determination. Look to your left, and look to your right; those who you see will be with " +
            "you until the end of time. One night this week you will find yourself taking a moment, stopping and enjoying the natural beauty around you. In this moment you will know who, what, and where you are.";
    }
    if (determineSign === signs[1]) {
        return +" don't frett, dry your tears Pisces. Your constant search for love and romance will soon be settled by the gentle prescence of a close " +
            "friend. Emotion spills from your very escence building you into a giant water baloon oh-so-ready to burst. But trust me, you will find what your looking for. " +
            "Just hold on, wait, and I promise you that by the fortnights end you will be whole again.";
    }
    if (determineSign === signs[2]) {
        return +" your anger with subliminal messages, elusive texts, and downright avoidance will reach an all time peak this week Aries. " +
            "There will be no resolution, no coping methods --- be prepared for a fight. ";
    }
    if (determineSign === signs[3]) {
        return "Taurus you stubborn bastard. Just let the damn thing go already honestly, your grudges which are ever-present are the only thing " +
            "holding you back from true happiness and innerpeace. Your bravery, strength, and charisma will bring you far in life, " +
            "however you must learn to let go of your anger for it is only hurting you.";
    }
    if (determineSign === signs[4]) {
        return "Unpredicatibily. While may may see this as one of your strengths, Gemini, have some faith in yourself for those who truly love and " +
            "care for you will not sway back and forth in reaction to your constantly changing personality. Don't worry about petty fights, " +
            "these are just mechanisms of your mind to sort out the real from the fake. ";
    }
    if (determineSign === signs[5]) {
        return "Cancer, your ability to stand tall in the face of adversity is without a doubt your strongest trait. In times of sadness " +
            "and unease you can always rely on yourself: never forget that you are just fine on your own. You might be down right now, but " +
            "just like the Gemini Twins and the Scales of Libra teach us, what goes down must come up. Hang in there bud. ";
    }
    if (determineSign === signs[6]) {
        return "Leo, you are a true fire sign. Your apt skill in leading a crowd will lead you to do great things. But like all fire signs " +
            "you can easily get carried away and walk down the path of greed. Beware of this Leo: your very rise to greatness may at the same time be your " +
            "fall to darkness. ";
    }
    if (determineSign === signs[7]) {
        return "And you're off! A bundle of brains beauty and Virgoooo! You're future is reflective of your ruling planet Mercury...HOT!" +
            "Love and Lust is in the air so just let yourself go; the river of life is flowing and you are just a broken peice of dam " +
            "caught in the middle of it. ";
    }
    if (determineSign === signs[8]) {
        return "Libra you beautiful creature. Everything will go right for you following today so just sit back, relax, and enjoy the ride.";

    }
    if (determineSign === signs[9]) {
        return "Plant your feet on solid ground—and stay there a while. Stability brings serenity in 2018 as structured Saturn camps out in " +
            "Scorpio season and your second house of foundations. This is a huge relief! From October 2015 to September 2017, you hosted the " +
            "taskmaster planet in your sign—a phase that felt a lot like boot camp. This year, you’re free of Saturn’s grip and a lot clearer " +
            "about the path you want to walk. Although many results come slowly and steadily in 2018, growth is guaranteed. ";
    }
    if (determineSign === signs[10]) {
        return "Goals, goals, goals! Break out the powersuit, Sagittarius, because 2018 is bringing epic developments for your career. " +
            "Your ruling planet Jupiter holds court in Virgo and your tenth house of success until September 9. " +
            "Like a guided missile you'll radar in on a major mission, one that can boost your prestige and professional rep. ";
    }
    if (determineSign === signs[11]) {
        return "Do you believe in Unicorns? By the time 2017 is over you just might. with your ruling planet Saturn flowing through your  " +
            "enchanted twelfth house all year, magic and miracles aboud the biggest one being your sudden desire to kick back and relax. " +
            "Try as you might to force things, Saturn is teaching you lessons in your surrender. Let go so you can grow, Capricorn. ";
    }
}


function theImage(sign) {
    if (sign === signs[0]) {
        return "aquarius";
    }
    if (sign === signs[1]) {
        return "pisces";
    }
    if (sign === signs[2]) {
        return "aries";
    }
    if (sign === signs[3]) {
        return "taurus";
    }
    if (sign === signs[4]) {
        return "gemini";
    }
    if (sign === signs[5]) {
        return "cancer";
    }
    if (sign === signs[6]) {
        return "leo";
    }
    if (sign === signs[7]) {
        return "virgo";
    }
    if (sign === signs[8]) {
        return "libra";
    }
    if (sign === signs[9]) {
        return "scorpio";
    }
    if (sign === signs[10]) {
        return "sagittarius";
    }
    if (sign === signs[11]) {
        return "capricorn";
    }
}

function getZodiac(year){
    if(year === 1999){
        return years[0];
    }
    if(year === 2000){
        return years[1];
    }
    if(year === 2001){
        return years[2];
    }
    if(year === 2002){
        return years[3];
    }
    if(year === 2003){
        return years[4];
    }
}

function determineZodiac(zodiac){
    if(zodiac === years[0]){
        return  "You are a rabbit!";
    }
    if(zodiac === years[1]){
        return "You are a dragon!";
    }
    if(zodiac === years[2]){
        return "You are a snake";
    }
    if(zodiac === years[3]){
        return "You are a horse!";
    }
    if(zodiac === years[4]){
        return "You are a goat...";
    }
}





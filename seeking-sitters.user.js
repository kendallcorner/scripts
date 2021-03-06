// ==UserScript==
// @name           Seeking Sitters
// @author         kendallcorner
// @copyright 2022
// @license GNU General Public License version 2.0
// @version        1.5
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @include https://www.seekingsitters.com/members/memberrequest
// ==/UserScript==

const runOnSite = () => {
    console.log('runOnSite :>> ');
    const tabs = document.getElementsByClassName('nav nav-tabs')
    tabs[1].children[2].children[0].click()
    document.getElementById('ddStartTimeGROUP').value='17:30:00'
    document.getElementById('ddEndTimeGROUP').value='21:30:00'
    document.getElementById('CommentsToAdminGROUP').value='Vaccinated sitters, please'
    document.getElementById('CommentsToSitterGROUP').value='Vaccinated sitters, please'
};

console.log('about to wait :>> ');
waitForKeyElements('ul li a[href="#Group"]', runOnSite);

/* 
*****************
TABLE OF CONTENTS
*****************

1. Scroll to Home 
2. Scroll to About 
3. Scroll to Contact
4. Scroll to Departments 
5. Scroll to Government
6. Scroll to News 
7. Scroll to About, from News Section 
8. Scroll to Contact, from News Section 
9. Scroll to Departments, from News Section 
10. Scroll to Government, from News Section 
11. Scroll to Home, from News Section 
12. Scroll to Home, from Footer Section 
13. Scroll to About, from Home, Learn More

*/


/* Scroll to Home */
$(".ab").click(function() {
    $('html, body').animate({
     scrollTop: $("#about_anchor").offset().top
 }, 1500);
}); 


/* Scroll to About */
$(".mi").click(function() {
    $('html, body').animate({
     scrollTop: $("#missions_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Contact */
$(".sc").click(function() {
    $('html, body').animate({
     scrollTop: $("#science_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Departments */
$(".re").click(function() {
    $('html, body').animate({
     scrollTop: $("#research_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Departments */
$(".ho").click(function() {
    $('html, body').animate({
     scrollTop: $("#home_anchor").offset().top
 }, 1500);
}); 
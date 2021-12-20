$(document).ready(function(){
       let fix = 1;
       let guyOpen = 1;
       let chxOpen = 1;
        $("#expandGuy").click(function() {
            $("#firstColExpand").slideToggle(1500);
            if(guyOpen%2>0) {
                $("#expandGuy").text('Show Less');
            } else{
                $("#expandGuy").text('Click to learn about Guy');
            }
            guyOpen++;
        });
    
        $("#expandChx").click(function(){
            $("#secondColExpand").slideToggle(1500);
            if(chxOpen%2>0) {
                $("#expandChx").text('Show Less');
            } else{
                $("#expandChx").text('Click to see more about the breed');
            }
            chxOpen++;
        });
                         
        $(".checkbtn").click(function() {
            if(fix%2 > 0) {
                console.log("odd");
                $("nav").css('position','fixed');
                window.scrollTo(0, 0);
            } else{
                $("nav").css('position','relative');
            }
            fix++;
        });
            
});